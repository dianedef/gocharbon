#!/usr/bin/env python3
"""
Delete same-folder duplicate tool pages when they share the same u_site and
the losing slug is not referenced elsewhere in the repo.
"""

from __future__ import annotations

import argparse
import json
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


def loser_candidates(items: list[dict]) -> list[tuple[str, str]]:
    pairs: list[tuple[str, str]] = []
    for item in items:
        parents = {path.rsplit("/", 1)[0] for path in item["paths"]}
        if len(parents) != 1:
            continue
        canonical = item["canonical"]
        losers = [path for path in item["paths"] if path != canonical]
        if len(losers) != 1:
            continue
        pairs.append((canonical, losers[0]))
    return pairs


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


def render_markdown(actions: list[dict], dry_run: bool) -> str:
    lines = ["# Prune doublons meme dossier", ""]
    lines.append(f"- mode: {'dry-run' if dry_run else 'write'}")
    lines.append(f"- candidats: {len(actions)}")
    lines.append("")
    for action in actions:
        lines.append(f"- `{action['loser']}`")
        lines.append(f"  canonique: {action['canonical']}")
        if action["references"]:
            lines.append("  statut: garde")
            lines.append(f"  references: {' | '.join(action['references'][:3])}")
        else:
            lines.append("  statut: suppression")
    return "\n".join(lines)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--format", choices=["markdown", "json"], default="markdown")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    actions: list[dict] = []
    for canonical, loser in loser_candidates(load_probable_duplicates()):
        references = external_references(loser)
        actions.append(
            {
                "canonical": canonical,
                "loser": loser,
                "references": references,
            }
        )

    if not args.dry_run:
        for action in actions:
            if action["references"]:
                continue
            (ROOT / action["loser"]).unlink(missing_ok=True)

    if args.format == "json":
        print(json.dumps(actions, ensure_ascii=False, indent=2))
        return

    print(render_markdown(actions, args.dry_run))


if __name__ == "__main__":
    main()
