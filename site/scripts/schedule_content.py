#!/usr/bin/env python3
"""
schedule_content.py — Distribue progressivement les articles GoCharbon.

Usage:
  python scripts/schedule_content.py --cadence 5 --start 2026-03-15 --dry-run
  python scripts/schedule_content.py --cadence 5 --start 2026-03-15

Options:
  --cadence N     Articles par semaine (défaut: 5)
  --start DATE    Date de début (défaut: demain)
  --dry-run       Affiche le plan sans modifier les fichiers
  --status        Affiche les stats actuelles sans rien faire
"""

import argparse
import re
import sys
from datetime import date, timedelta
from pathlib import Path

DATA_DIR = Path(__file__).parent.parent / "src" / "data"
PLACEHOLDER_DATES = {"2024-03-25", "2024-01-01", "2024-01-15"}


def parse_args():
    parser = argparse.ArgumentParser(description="Schedule GoCharbon content progressively")
    parser.add_argument("--cadence", type=int, default=5, help="Articles per week (default: 5)")
    parser.add_argument("--start", type=str, default=None, help="Start date YYYY-MM-DD (default: tomorrow)")
    parser.add_argument("--dry-run", action="store_true", help="Preview without modifying files")
    parser.add_argument("--status", action="store_true", help="Show current stats only")
    return parser.parse_args()


def get_all_posts():
    posts = []
    for md_file in sorted(DATA_DIR.rglob("*.md")):
        content = md_file.read_text(encoding="utf-8")
        pub_match = re.search(r"pubDate:\s*['\"]?(\d{4}-\d{2}-\d{2})['\"]?", content)
        draft_match = re.search(r"draft:\s*(true|false)", content)
        title_match = re.search(r"title:\s*['\"]?(.+?)['\"]?\s*\n", content)

        pub_date_str = pub_match.group(1) if pub_match else None
        is_draft = draft_match.group(1) == "true" if draft_match else False
        title = title_match.group(1).strip() if title_match else md_file.stem

        posts.append({
            "file": md_file,
            "title": title,
            "pub_date": pub_date_str,
            "draft": is_draft,
        })
    return posts


def show_status(posts):
    today = date.today()
    placeholder = [p for p in posts if p["pub_date"] in PLACEHOLDER_DATES]
    future = [p for p in posts if p["pub_date"] and p["pub_date"] not in PLACEHOLDER_DATES
              and date.fromisoformat(p["pub_date"]) > today]
    past = [p for p in posts if p["pub_date"] and p["pub_date"] not in PLACEHOLDER_DATES
            and date.fromisoformat(p["pub_date"]) <= today]
    invalid = [p for p in posts if not p["pub_date"] or not re.match(r"\d{4}-\d{2}-\d{2}", p["pub_date"] or "")]
    drafts = [p for p in posts if p["draft"]]

    print(f"\n📊 GoCharbon — État du contenu ({len(posts)} articles)\n")
    print(f"  ✅ Publiés (date passée, non-draft) : {len([p for p in past if not p['draft']])}")
    print(f"  📅 Planifiés (date future)          : {len(future)}")
    print(f"  ⚠️  Date placeholder (à planifier)  : {len(placeholder)}")
    print(f"  📝 Drafts                           : {len(drafts)}")
    print(f"  ❌ Date invalide                    : {len(invalid)}")

    if future:
        dates = sorted(set(p["pub_date"] for p in future))
        print(f"\n  Prochaines publications : {dates[:5]}{'...' if len(dates) > 5 else ''}")


def schedule_posts(posts, start_date: date, cadence: int, dry_run: bool):
    today = date.today()

    # Articles à planifier = ceux avec date placeholder ou date passée et draft=True
    to_schedule = [
        p for p in posts
        if p["pub_date"] in PLACEHOLDER_DATES
        or (p["draft"] and p["pub_date"] and date.fromisoformat(p["pub_date"]) <= today)
    ]

    # Trier par titre pour reproductibilité
    to_schedule.sort(key=lambda p: p["title"])

    print(f"\n📅 Planification de {len(to_schedule)} articles")
    print(f"   Cadence : {cadence}/semaine | Début : {start_date}")
    print(f"   Durée estimée : ~{len(to_schedule) // cadence * 7} jours\n")

    if dry_run:
        print("🔍 DRY RUN — aucun fichier modifié\n")

    # Générer les dates (jours de publication : lundi, mercredi, vendredi + selon cadence)
    publish_days = generate_publish_days(start_date, len(to_schedule), cadence)

    modified = 0
    for post, pub_date in zip(to_schedule, publish_days):
        new_date_str = pub_date.isoformat()

        if dry_run:
            print(f"  {new_date_str} — {post['title'][:60]}")
            continue

        # Modifier le fichier
        content = post["file"].read_text(encoding="utf-8")

        # Remplacer la pubDate
        content = re.sub(
            r"(pubDate:\s*)['\"]?\d{4}-\d{2}-\d{2}['\"]?",
            f"\\g<1>'{new_date_str}'",
            content,
        )

        # Ajouter/mettre à jour draft: true si pas présent
        if "draft:" not in content:
            content = re.sub(
                r"(pubDate:[^\n]+\n)",
                r"\1draft: true\n",
                content,
            )
        else:
            content = re.sub(r"draft:\s*(true|false)", "draft: true", content)

        post["file"].write_text(content, encoding="utf-8")
        modified += 1

    if not dry_run:
        print(f"✅ {modified} articles mis à jour (draft: true + nouvelle pubDate)")
        print(f"\n💡 Prochaine étape : révise chaque article et change 'draft: true' → 'draft: false' pour le valider.")


def generate_publish_days(start: date, count: int, per_week: int) -> list[date]:
    """Génère une liste de dates espacées selon la cadence hebdomadaire."""
    days = []
    current = start
    per_week = max(1, min(per_week, 7))
    # Espacement en jours entre publications
    interval = 7 / per_week

    slot = 0
    while len(days) < count:
        pub_date = start + timedelta(days=round(slot * interval))
        # Éviter les doublons
        if not days or pub_date > days[-1]:
            days.append(pub_date)
        slot += 1

    return days[:count]


def main():
    args = parse_args()
    posts = get_all_posts()

    if args.status:
        show_status(posts)
        return

    show_status(posts)

    start_date = date.today() + timedelta(days=1)
    if args.start:
        start_date = date.fromisoformat(args.start)

    schedule_posts(posts, start_date, args.cadence, args.dry_run)


if __name__ == "__main__":
    main()
