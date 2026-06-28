#!/usr/bin/env python3
"""
Delete cross-category duplicate tool pages when content similarity is very high
and the losing slug is not referenced elsewhere in the repo.
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
from pathlib import Path

from outils_qualification_common import ROOT

IGNORED_REFERENCE_PATHS = {
    "scripts/audit_results.json",
}


def load_probable_duplicates() -> list[dict]:
    result = subprocess.run(
        [
            "python3",
            "scripts/audit_outils_duplicate_mirrors.py",
            "--classification",
            "doublon_probable",
            "--format",
            "json",
            "--limit",
            "500",
        ],
        cwd=ROOT,
        capture_output=True,
        text=True,
        check=True,
    )
    return json.loads(result.stdout)


def body(path: str) -> str:
    file_path = ROOT / path
    if not file_path.exists():
        return ""
    raw = file_path.read_text(encoding="utf-8")
    parts = raw.split("---", 2)
    return parts[2] if len(parts) >= 3 else raw


def normalize_body(text: str) -> str:
    text = text.lower()
    text = re.sub(r"https?://\S+", " ", text)
    text = re.sub(r"[^a-z0-9]+", " ", text)
    return " ".join(text.split())


def similarity(left: str, right: str) -> float:
    left_tokens = set(normalize_body(left).split())
    right_tokens = set(normalize_body(right).split())
    if not left_tokens or not right_tokens:
        return 0.0
    return len(left_tokens & right_tokens) / len(left_tokens | right_tokens)


def external_references(loser_path: str) -> list[str]:
    slug = loser_path.replace("src/data/", "").replace(".md", "")
    result = subprocess.run(
        ["rg", "-n", "-F", slug, "."],
        cwd=ROOT,
        capture_output=True,
        text=True,
        check=False,
    )
    refs: list[str] = []
    for line in result.stdout.splitlines():
        path = line.split(":", 1)[0].removeprefix("./")
        if path == loser_path:
            continue
        if path in IGNORED_REFERENCE_PATHS:
            continue
        refs.append(line.removeprefix("./"))
    return refs


def candidate_actions(threshold: float) -> list[dict]:
    actions: list[dict] = []
    for item in load_probable_duplicates():
        if len(item["paths"]) != 2:
            continue
        parents = {path.rsplit("/", 1)[0] for path in item["paths"]}
        if len(parents) == 1:
            continue
        canonical = item["canonical"]
        losers = [path for path in item["paths"] if path != canonical]
        if len(losers) != 1:
            continue
        loser = losers[0]
        score = similarity(body(canonical), body(loser))
        if score < threshold:
            continue
        actions.append(
            {
                "canonical": canonical,
                "loser": loser,
                "similarity": round(score, 3),
                "references": external_references(loser),
            }
        )
    return actions


def render_markdown(actions: list[dict], dry_run: bool, threshold: float) -> str:
    lines = ["# Prune doublons forte similarite", ""]
    lines.append(f"- mode: {'dry-run' if dry_run else 'write'}")
    lines.append(f"- seuil: {threshold}")
    lines.append(f"- candidats: {len(actions)}")
    lines.append("")
    for action in actions:
        lines.append(f"- `{action['loser']}`")
        lines.append(f"  canonique: {action['canonical']}")
        lines.append(f"  similarite: {action['similarity']}")
        if action["references"]:
            lines.append("  statut: garde")
            lines.append(f"  references: {' | '.join(action['references'][:3])}")
        else:
            lines.append("  statut: suppression")
    return "\n".join(lines)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--threshold", type=float, default=0.75)
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--format", choices=["markdown", "json"], default="markdown")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    actions = candidate_actions(args.threshold)

    if not args.dry_run:
        for action in actions:
            if action["references"]:
                continue
            (ROOT / action["loser"]).unlink(missing_ok=True)

    if args.format == "json":
        print(json.dumps(actions, ensure_ascii=False, indent=2))
        return

    print(render_markdown(actions, args.dry_run, args.threshold))


if __name__ == "__main__":
    main()
