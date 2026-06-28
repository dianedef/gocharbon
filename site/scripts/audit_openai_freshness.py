#!/usr/bin/env python3
"""
Audit freshness risk for AI/OpenAI-related content in the GoCharbon corpus.

Outputs:
- scripts/openai_freshness_audit.json
- scripts/openai_freshness_audit.md
"""

from __future__ import annotations

import json
import re
from collections import Counter
from dataclasses import asdict, dataclass
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

import yaml

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "src" / "data"
OUT_JSON = ROOT / "scripts" / "openai_freshness_audit.json"
OUT_MD = ROOT / "scripts" / "openai_freshness_audit.md"

TARGET_TERMS = [
    "openai",
    "chatgpt",
    "gpt",
    "codex",
    "llm",
    "claude",
]

OUTDATED_PATTERNS = {
    "legacy_chat_completions": re.compile(r"\bchat\.completions\b", re.IGNORECASE),
    "legacy_gpt4_reference": re.compile(r"\bgpt-4\b", re.IGNORECASE),
    "legacy_gpt35_reference": re.compile(r"\bgpt-3\.5\b", re.IGNORECASE),
    "legacy_claude35_reference": re.compile(r"\bclaude 3\.5\b", re.IGNORECASE),
    "hardcoded_price_dollar": re.compile(r"\$\s?\d", re.IGNORECASE),
    "hardcoded_price_eur": re.compile(r"\b\d[\d\s]*\s?€", re.IGNORECASE),
    "absolute_benchmark_claims": re.compile(
        r"\b(terminal-bench|swe-bench|mmlu|gsm8k|humaneval)\b", re.IGNORECASE
    ),
}

LOT_B_DIR = "src/data/outils/marketing/autres/"

MANUAL_LOT_B_DECISIONS: dict[str, tuple[str, str, str | None]] = {
    "src/data/outils/marketing/autres/12-astuces-chatgpt-qui-vont-vous-faire-passer.md": (
        "merge",
        "Liste générique sans validation source solide; angle couvert par les guides LLM maintenus.",
        "/tech/ia/llm/introduction-llm",
    ),
    "src/data/outils/marketing/autres/autogpt-lia-qui-va-remplacer-votre-equipe-web.md": (
        "draft",
        "Promesse trompeuse et assertions AGI non sourcées pour un contenu outil.",
        None,
    ),
    "src/data/outils/marketing/autres/gpt-5-et-lagi-le-futur-terrifiant-qui-nous-attend.md": (
        "draft",
        "Contenu spéculatif et alarmiste avec claims invérifiables.",
        None,
    ),
    "src/data/outils/marketing/autres/gpt-et-lia-expliques-ce-que-vous-devez-savoir.md": (
        "draft",
        "Historique GPT daté et framing obsolète sans protocole de vérification.",
        None,
    ),
    "src/data/outils/marketing/autres/hugging-chat-lalternative-a-chatgpt-qui-va.md": (
        "keep/enrich à traiter",
        "Comparatif potentiellement utile mais daté; enrichissement factuel recommandé.",
        None,
    ),
    "src/data/outils/marketing/autres/le-jailbreak-chatgpt-qui-va-rendre-cette-ia.md": (
        "draft",
        "Format notes brutes et liens hétérogènes, risque éditorial élevé.",
        None,
    ),
    "src/data/outils/marketing/autres/les-prompts-chatgpt-qui-vont-revolutionner-votre.md": (
        "merge",
        "Contenu partiellement scrapé; angle déjà mieux traité dans le parcours consultant IA.",
        "/biz/profils/prompt-engineer",
    ),
    "src/data/outils/marketing/autres/openai-partout-comment-cette-ia-va-changer-votre.md": (
        "draft",
        "Article promotionnel mono-outil avec claims intemporels non vérifiés.",
        None,
    ),
}

ENRICH_TREATED_HEADINGS = [
    "## ce que c'est",
    "## ce que ça change concrètement",
    "## limites et risques",
    "## comment l'utiliser sans se raconter d'histoires",
    "## verdict gocharbon",
    "## mise à jour (avril 2026)",
]


def _normalize_for_match(text: str) -> str:
    lowered = text.lower()
    lowered = lowered.replace("’", "'")
    lowered = lowered.replace("c’est", "c'est")
    lowered = lowered.replace("ça", "ca")
    lowered = lowered.replace("à", "a")
    return lowered


def has_enrich_treated_structure(body: str) -> bool:
    body_norm = _normalize_for_match(body)
    return all(_normalize_for_match(heading) in body_norm for heading in ENRICH_TREATED_HEADINGS)


@dataclass
class Entry:
    path: str
    section: str | None
    title: str | None
    pubDate: str | None
    draft: bool
    hit_terms: list[str]
    pattern_hits: dict[str, int]
    risk_score: int
    risk_level: str
    lot_b_candidate: bool
    lot_b_decision: str | None
    lot_b_reason: str | None
    lot_b_canonical_target: str | None


def classify_lot_b(
    path: str, risk_score: int, is_draft: bool, body: str
) -> tuple[str, str, str | None]:
    is_treated = has_enrich_treated_structure(body)

    if path in MANUAL_LOT_B_DECISIONS:
        decision, reason, target = MANUAL_LOT_B_DECISIONS[path]
        if decision == "keep/enrich à traiter" and is_treated:
            return (
                "keep/enrich traité",
                "Page enrichie selon le format cible (sections de cadrage + mise à jour).",
                target,
            )
        return decision, reason, target

    if risk_score >= 9:
        if is_draft:
            return (
                "draft",
                "Risque élevé confirmé; page déjà en draft et à garder hors build tant qu'elle n'est pas réécrite.",
                None,
            )
        return (
            "draft",
            "Risque élevé (claims instables ou obsolètes) par rapport au standard éditorial.",
            None,
        )

    if is_draft:
        return (
            "keep/enrich à traiter",
            "Déjà en draft; conserver hors build et enrichir seulement si reprise éditoriale.",
            None,
        )

    if is_treated:
        return (
            "keep/enrich traité",
            "Page enrichie selon le format cible (sections de cadrage + mise à jour).",
            None,
        )

    return (
        "keep/enrich à traiter",
        "Contenu potentiellement récupérable; enrichissement ciblé recommandé.",
        None,
    )


def split_frontmatter(raw: str) -> tuple[dict[str, Any], str]:
    if not raw.startswith("---\n"):
        return {}, raw
    parts = raw.split("---", 2)
    if len(parts) < 3:
        return {}, raw
    try:
        data = yaml.safe_load(parts[1]) or {}
        if not isinstance(data, dict):
            data = {}
    except Exception:
        data = {}
    return data, parts[2]


def compute_risk_score(
    pub_date: str | None, pattern_hits: dict[str, int], draft: bool
) -> int:
    score = 0

    if pub_date:
        try:
            year = datetime.fromisoformat(pub_date).year
            if year <= 2024:
                score += 3
            elif year == 2025:
                score += 2
            else:
                score += 1
        except ValueError:
            score += 2
    else:
        score += 2

    score += min(sum(pattern_hits.values()), 8)

    if draft:
        score = max(score - 2, 0)

    return score


def to_risk_level(score: int) -> str:
    if score >= 9:
        return "high"
    if score >= 5:
        return "medium"
    return "low"


def scan() -> list[Entry]:
    entries: list[Entry] = []

    files = sorted(p for p in DATA_DIR.rglob("*.md") if not p.name.startswith("_"))
    for file_path in files:
        rel_path = file_path.relative_to(ROOT).as_posix()
        raw = file_path.read_text(encoding="utf-8", errors="replace")
        fm, body = split_frontmatter(raw)

        haystack = "\n".join(
            [
                rel_path.lower(),
                str(fm.get("title", "")).lower(),
                body.lower(),
            ]
        )

        hit_terms = [t for t in TARGET_TERMS if t in haystack]
        if not hit_terms:
            continue

        pattern_hits: dict[str, int] = {}
        for name, regex in OUTDATED_PATTERNS.items():
            count = len(regex.findall(body))
            if count:
                pattern_hits[name] = count

        pub_date = fm.get("pubDate")
        pub_date_str = str(pub_date) if isinstance(pub_date, str) else None
        draft = bool(fm.get("draft", False))
        risk_score = compute_risk_score(pub_date_str, pattern_hits, draft)
        risk_level = to_risk_level(risk_score)
        lot_b_candidate = rel_path.startswith(LOT_B_DIR)
        lot_b_decision: str | None = None
        lot_b_reason: str | None = None
        lot_b_canonical_target: str | None = None

        if lot_b_candidate:
            lot_b_decision, lot_b_reason, lot_b_canonical_target = classify_lot_b(
                rel_path, risk_score, draft, body
            )

        entries.append(
            Entry(
                path=rel_path,
                section=fm.get("section") if isinstance(fm.get("section"), str) else None,
                title=fm.get("title") if isinstance(fm.get("title"), str) else None,
                pubDate=pub_date_str,
                draft=draft,
                hit_terms=hit_terms,
                pattern_hits=pattern_hits,
                risk_score=risk_score,
                risk_level=risk_level,
                lot_b_candidate=lot_b_candidate,
                lot_b_decision=lot_b_decision,
                lot_b_reason=lot_b_reason,
                lot_b_canonical_target=lot_b_canonical_target,
            )
        )

    entries.sort(key=lambda e: (-e.risk_score, e.path))
    return entries


def write_outputs(entries: list[Entry]) -> None:
    OUT_JSON.write_text(
        json.dumps(
            {
                "generatedAt": datetime.now(UTC).isoformat(),
                "scope": "src/data/**/*.md",
                "terms": TARGET_TERMS,
                "entries": [asdict(e) for e in entries],
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )

    lot_b_entries = [e for e in entries if e.lot_b_candidate]
    level_counts = Counter(e.risk_level for e in entries)

    lines: list[str] = []
    lines.append("# OpenAI freshness audit")
    lines.append("")
    lines.append(f"- Generated at: `{datetime.now(UTC).isoformat()}`")
    lines.append(f"- Scanned files: `{len(entries)}` matching IA terms")
    lines.append(f"- High risk: `{level_counts.get('high', 0)}`")
    lines.append(f"- Medium risk: `{level_counts.get('medium', 0)}`")
    lines.append(f"- Low risk: `{level_counts.get('low', 0)}`")
    lines.append(f"- Lot B candidates (`{LOT_B_DIR}*`): `{len(lot_b_entries)}`")
    lines.append("")
    lines.append("## Priority list (top 50)")
    lines.append("")
    lines.append("| Risk | Score | Path | Key signals |")
    lines.append("| --- | ---: | --- | --- |")

    for entry in entries[:50]:
        signals = ", ".join(sorted(entry.pattern_hits.keys())) or "term_hit_only"
        lines.append(
            f"| {entry.risk_level} | {entry.risk_score} | `{entry.path}` | `{signals}` |"
        )

    lines.append("")
    lines.append("## Lot B raw inventory")
    lines.append("")
    lines.append("| Risk | Score | Draft | Decision | Canonical target | Path | Reason |")
    lines.append("| --- | ---: | :---: | --- | --- | --- | --- |")
    for entry in lot_b_entries:
        canonical = entry.lot_b_canonical_target or "-"
        decision = entry.lot_b_decision or "-"
        reason = (entry.lot_b_reason or "-").replace("|", "/")
        lines.append(
            f"| {entry.risk_level} | {entry.risk_score} | "
            f"{'yes' if entry.draft else 'no'} | `{decision}` | `{canonical}` | "
            f"`{entry.path}` | {reason} |"
        )

    lines.append("")
    lines.append("## Wave summary")
    lines.append("")
    lines.append("### Pages priority lot A (updated)")
    lines.append("")
    lines.append("- `site/src/data/tech/ia/llm/choisir-llm.md`")
    lines.append("- `site/src/data/tech/ia/llm/introduction-llm.md`")
    lines.append("- `site/src/data/tech/ia/llm/llm-hallucinations.md`")
    lines.append("- `site/src/data/biz/profils/prompt-engineer.md`")

    drafted = [e.path for e in lot_b_entries if e.lot_b_decision == "draft"]
    merged = [
        (e.path, e.lot_b_canonical_target)
        for e in lot_b_entries
        if e.lot_b_decision == "merge"
    ]

    lines.append("")
    lines.append("### Lot B actions (this wave)")
    lines.append("")
    lines.append(f"- Draft decisions: `{len(drafted)}`")
    for path in drafted:
        lines.append(f"  - `{path}`")
    lines.append(f"- Merge recommendations: `{len(merged)}`")
    for path, target in merged:
        lines.append(f"  - `{path}` -> `{target}`")
    lines.append("- `delete-candidate`: none in this wave (backlog-only policy)")

    lines.append("")
    lines.append("### Fresh sources used")
    lines.append("")
    lines.append("- https://developers.openai.com/api/docs/guides/latest-model")
    lines.append("- https://developers.openai.com/api/docs/guides/code-generation")
    lines.append("- https://developers.openai.com/api/docs/api-reference/responses")
    lines.append("- https://developers.openai.com/api/docs/guides/structured-outputs")
    lines.append("- https://developers.openai.com/api/docs/guides/tools")
    lines.append("- https://developers.openai.com/codex/cli")
    lines.append("- https://developers.openai.com/codex/pricing")

    lines.append("")
    lines.append("### Remaining risks")
    lines.append("")
    lines.append(
        "- Prioriser uniquement les pages marquées `keep/enrich à traiter`; "
        "`keep/enrich traité` = vagues déjà appliquées."
    )
    lines.append("- Volatile pricing/plan claims can stale quickly; recheck before publishing exact numbers.")
    lines.append("- Build logs currently include legacy route/id warnings unrelated to this specific wave.")

    OUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    entries = scan()
    write_outputs(entries)
    print(f"Wrote {OUT_JSON.relative_to(ROOT)}")
    print(f"Wrote {OUT_MD.relative_to(ROOT)}")
    print(f"Entries: {len(entries)}")


if __name__ == "__main__":
    main()
