#!/usr/bin/env python3
"""
Propagate qualification metadata across duplicate tool pages sharing the same u_site.
"""

from __future__ import annotations

import argparse
import json

from outils_qualification_common import (
    QUAL_FIELDS,
    ROOT,
    SYNCABLE_QUALIFICATION_FIELDS,
    canonical_duplicate_row,
    collect_rows,
    duplicate_groups,
    is_present,
    qualification_count,
    qualification_payload,
    split_frontmatter,
    write_frontmatter,
)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--format", choices=["markdown", "json"], default="markdown")
    parser.add_argument("--force", action="store_true")
    return parser.parse_args()


def sync_group(group: list[dict], force: bool) -> list[dict]:
    canonical = canonical_duplicate_row(group)
    if qualification_count(canonical["frontmatter"], QUAL_FIELDS) == 0:
        return []
    canonical_payload = qualification_payload(canonical["frontmatter"])
    if not canonical_payload:
        return []

    updates: list[dict] = []
    for row in group:
        if row["path"] == canonical["path"]:
            continue

        path = ROOT / row["path"]
        frontmatter, body = split_frontmatter(path)
        changed_fields: list[str] = []

        for field in SYNCABLE_QUALIFICATION_FIELDS:
            source_value = canonical_payload.get(field)
            current_value = frontmatter.get(field)

            if not is_present(source_value):
                continue

            if is_present(current_value) and not force:
                continue

            if current_value != source_value:
                frontmatter[field] = source_value
                changed_fields.append(field)

        if changed_fields:
            updates.append(
                {
                    "canonical": canonical["path"],
                    "target": row["path"],
                    "fields": changed_fields,
                    "frontmatter": frontmatter,
                    "body": body,
                }
            )

    return updates


def render_markdown(updates: list[dict], dry_run: bool) -> str:
    lines = ["# Sync qualification doublons", ""]
    lines.append(f"- mode: {'dry-run' if dry_run else 'write'}")
    lines.append(f"- updates: {len(updates)}")
    lines.append("")
    for update in updates:
        lines.append(f"- `{update['target']}`")
        lines.append(f"  source: {update['canonical']}")
        lines.append(f"  fields: {', '.join(update['fields'])}")
    return "\n".join(lines)


def main() -> None:
    args = parse_args()
    rows = collect_rows()
    updates: list[dict] = []

    for group in duplicate_groups(rows)["site"]:
        updates.extend(sync_group(group, force=args.force))

    if not args.dry_run:
        for update in updates:
            write_frontmatter(ROOT / update["target"], update["frontmatter"], update["body"])

    if args.format == "json":
        print(json.dumps(updates, ensure_ascii=False, indent=2))
        return

    print(render_markdown(updates, args.dry_run))


if __name__ == "__main__":
    main()
