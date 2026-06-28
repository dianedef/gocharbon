#!/usr/bin/env python3
"""
Audit duplicate `u_site` groups and classify them as likely editorial mirrors
or likely redundant duplicates.
"""

from __future__ import annotations

import argparse
import json
from collections import Counter
from difflib import SequenceMatcher
from pathlib import Path

from outils_qualification_common import (
    ROOT,
    canonical_duplicate_row,
    collect_rows,
    duplicate_groups,
    normalize_text,
)


def path_parts(row: dict) -> list[str]:
    return Path(row["rel_path"]).parts


def stem(row: dict) -> str:
    return normalize_text(Path(row["rel_path"]).stem)


def title_norm(row: dict) -> str:
    return normalize_text(row["title"])


def similarity(a: str, b: str) -> float:
    if not a or not b:
        return 0.0
    return SequenceMatcher(None, a, b).ratio()


def classify_group(group: list[dict]) -> tuple[str, str]:
    canonical = canonical_duplicate_row(group)
    rows = sorted(group, key=lambda row: row["path"])
    parents = {str(Path(row["rel_path"]).parent) for row in rows}
    top_levels = {path_parts(row)[0] for row in rows if path_parts(row)}
    second_levels = {"/".join(path_parts(row)[:2]) for row in rows if len(path_parts(row)) >= 2}
    stems_set = {stem(row) for row in rows}
    titles_set = {title_norm(row) for row in rows}

    max_stem_similarity = 0.0
    max_title_similarity = 0.0
    for i, left in enumerate(rows):
        for right in rows[i + 1 :]:
            max_stem_similarity = max(max_stem_similarity, similarity(stem(left), stem(right)))
            max_title_similarity = max(max_title_similarity, similarity(title_norm(left), title_norm(right)))

    if len(parents) == 1:
        return (
            "doublon_probable",
            f"Meme dossier ({next(iter(parents))}) pour le meme outil; canonique suggere: {canonical['path']}.",
        )

    if len(stems_set) == 1 or len(titles_set) == 1:
        return (
            "doublon_probable",
            f"Slug ou titre quasi identique sur plusieurs fiches; canonique suggere: {canonical['path']}.",
        )

    if max_stem_similarity >= 0.92 or max_title_similarity >= 0.95:
        return (
            "doublon_probable",
            f"Variantes tres proches de slug/titre detectees; canonique suggere: {canonical['path']}.",
        )

    if len(top_levels) > 1:
        return (
            "miroir_editorial_plausible",
            f"Memes outil/site reutilise dans plusieurs univers editoriaux ({', '.join(sorted(top_levels))}).",
        )

    if len(second_levels) > 1:
        return (
            "miroir_editorial_plausible",
            f"Meme outil decliné dans plusieurs sous-categories ({', '.join(sorted(second_levels))}); canonique suggere: {canonical['path']}.",
        )

    return (
        "a_revoir",
        f"Groupe ambigu a verifier manuellement; canonique suggere: {canonical['path']}.",
    )


def build_findings() -> list[dict]:
    findings: list[dict] = []
    for group in duplicate_groups(collect_rows())["site"]:
        classification, reason = classify_group(group)
        canonical = canonical_duplicate_row(group)
        findings.append(
            {
                "classification": classification,
                "canonical": canonical["path"],
                "u_site": canonical["u_site"],
                "paths": [row["path"] for row in sorted(group, key=lambda row: row["path"])],
                "reason": reason,
            }
        )
    findings.sort(key=lambda item: (item["classification"], item["canonical"]))
    return findings


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--format", choices=["markdown", "json"], default="markdown")
    parser.add_argument(
        "--classification",
        choices=["all", "miroir_editorial_plausible", "doublon_probable", "a_revoir"],
        default="all",
    )
    parser.add_argument("--limit", type=int, default=200)
    return parser.parse_args()


def render_markdown(findings: list[dict]) -> str:
    counts = Counter(item["classification"] for item in findings)
    lines = ["# Audit doublons outils", ""]
    lines.append(f"- groupes analyses: {len(findings)}")
    for key in ["miroir_editorial_plausible", "doublon_probable", "a_revoir"]:
        lines.append(f"- {key}: {counts.get(key, 0)}")
    lines.append("")
    for finding in findings:
        lines.append(f"- `{finding['classification']}`")
        lines.append(f"  canonique: {finding['canonical']}")
        lines.append(f"  site: {finding['u_site']}")
        lines.append(f"  raison: {finding['reason']}")
        lines.append(f"  chemins: {', '.join(finding['paths'])}")
    return "\n".join(lines)


def main() -> None:
    args = parse_args()
    findings = build_findings()
    if args.classification != "all":
        findings = [item for item in findings if item["classification"] == args.classification]
    findings = findings[: args.limit]

    if args.format == "json":
        print(json.dumps(findings, ensure_ascii=False, indent=2))
        return

    print(render_markdown(findings))


if __name__ == "__main__":
    main()
