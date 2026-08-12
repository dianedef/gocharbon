#!/usr/bin/env python3
"""
Rewrite markdown frontmatter tags to a compact, canonical taxonomy.

Scope:
- src/data/**/*.md (excluding files starting with "_")
- Replaces tags with a single main tag chosen from:
  Business, Marketing, Tech, Contenu, SEO, Productivité, Tutoriels, Outils
"""

from __future__ import annotations

import re
import unicodedata
from collections import Counter
from pathlib import Path

import yaml

ROOT = Path("/home/claude/GoCharbon")
DATA_DIR = ROOT / "src" / "data"

CANONICAL_LABELS = {
    "business": "Business",
    "marketing": "Marketing",
    "tech": "Tech",
    "contenu": "Contenu",
    "seo": "SEO",
    "productivite": "Productivité",
    "tutoriels": "Tutoriels",
    "outils": "Outils",
}

PREFIX_TO_MAIN = [
    ("outils/", "outils"),
    ("tutos/", "tutoriels"),
    ("seo/", "seo"),
    ("marketing/", "marketing"),
    ("tech/", "tech"),
    ("contenu/", "contenu"),
    ("performance/", "productivite"),
    ("biz/", "business"),
    ("strategies/", "business"),
    ("gestion/", "business"),
    ("rh/", "business"),
    ("ethique/", "business"),
    ("site/", "tech"),
]

ALIAS_TO_MAIN = {
    "business": "business",
    "entrepreneuriat": "business",
    "startup": "business",
    "freelancing": "business",
    "e-commerce": "business",
    "e-commerce-vente": "business",
    "strategie": "business",
    "rse": "business",
    "finance": "business",
    "financement": "business",
    "gestion": "business",
    "marketing": "marketing",
    "social-media": "marketing",
    "communication": "marketing",
    "email": "marketing",
    "publicite": "marketing",
    "acquisition": "marketing",
    "contenu": "contenu",
    "creation": "contenu",
    "redaction": "contenu",
    "youtube": "contenu",
    "video": "contenu",
    "seo": "seo",
    "referencement": "seo",
    "backlinks": "seo",
    "netlinking": "seo",
    "tech": "tech",
    "ia": "tech",
    "developpement": "tech",
    "web": "tech",
    "apps": "tech",
    "application": "tech",
    "productivite": "productivite",
    "organisation": "productivite",
    "tutoriels": "tutoriels",
    "tuto": "tutoriels",
    "tutos": "tutoriels",
    "tutoriel": "tutoriels",
    "outils": "outils",
    "outils-francais": "outils",
}


def normalize(value: str) -> str:
    value = value.lower().strip()
    value = unicodedata.normalize("NFD", value)
    value = "".join(ch for ch in value if not unicodedata.combining(ch))
    value = re.sub(r"[^a-z0-9-]+", "-", value)
    value = re.sub(r"-{2,}", "-", value).strip("-")
    return value


def choose_main_tag(rel_path: str, tags: list[str]) -> str:
    for prefix, main in PREFIX_TO_MAIN:
        if rel_path.startswith(prefix):
            return main

    for tag in tags:
        mapped = ALIAS_TO_MAIN.get(normalize(tag))
        if mapped:
            return mapped

    return "business"


def rewrite_file(filepath: Path) -> tuple[bool, str | None]:
    raw = filepath.read_text(encoding="utf-8")
    if not raw.startswith("---\n"):
        return False, None

    parts = raw.split("---", 2)
    if len(parts) < 3:
        return False, None

    fm_raw = parts[1]
    body = parts[2]

    try:
        fm = yaml.safe_load(fm_raw) or {}
    except yaml.YAMLError:
        return False, None

    if not isinstance(fm, dict):
        return False, None

    existing_tags = fm.get("tags", [])
    if isinstance(existing_tags, str):
        existing_tags = [existing_tags]
    elif not isinstance(existing_tags, list):
        existing_tags = []

    rel_path = filepath.relative_to(DATA_DIR).as_posix()
    main_key = choose_main_tag(rel_path, [str(t) for t in existing_tags])
    canonical_label = CANONICAL_LABELS[main_key]

    old_tags = [str(t) for t in existing_tags]
    new_tags = [canonical_label]

    if old_tags == new_tags:
        return False, main_key

    fm["tags"] = new_tags
    new_fm = yaml.dump(
        fm,
        allow_unicode=True,
        default_flow_style=False,
        sort_keys=False,
    )
    filepath.write_text(f"---\n{new_fm}---{body}", encoding="utf-8")
    return True, main_key


def main() -> None:
    files = sorted(
        p
        for p in DATA_DIR.rglob("*.md")
        if not p.name.startswith("_")
    )

    changed = 0
    skipped = 0
    distribution = Counter()

    for filepath in files:
        file_changed, main_key = rewrite_file(filepath)
        if main_key:
            distribution[main_key] += 1
        if file_changed:
            changed += 1
        else:
            skipped += 1

    print(f"Scanned: {len(files)}")
    print(f"Changed: {changed}")
    print(f"Unchanged/Skipped: {skipped}")
    print("Distribution:")
    for key, count in sorted(distribution.items(), key=lambda item: item[0]):
        print(f"  - {key}: {count}")


if __name__ == "__main__":
    main()
