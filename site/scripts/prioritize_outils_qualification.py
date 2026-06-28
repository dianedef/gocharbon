#!/usr/bin/env python3
"""
Build a stable prioritized backlog for GoCharbon tool qualification.
"""

from __future__ import annotations

import argparse
import csv
import json
import sys

from outils_qualification_common import collect_rows


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=300)
    parser.add_argument("--contains", type=str, default=None)
    parser.add_argument("--status", choices=["all", "todo", "partial", "blocked", "done"], default="all")
    parser.add_argument("--lane", type=str, default=None)
    parser.add_argument("--priority", choices=["P1", "P2", "P3"], default=None)
    parser.add_argument("--format", choices=["json", "markdown", "csv", "paths"], default="markdown")
    return parser.parse_args()


def filter_rows(rows: list[dict], args: argparse.Namespace) -> list[dict]:
    filtered = rows

    if args.contains:
        filtered = [row for row in filtered if args.contains in row["path"]]

    if args.status != "all":
        filtered = [row for row in filtered if row["status"] == args.status]

    if args.lane:
        filtered = [row for row in filtered if row["lane"] == args.lane]

    if args.priority:
        tiers = {"P1": {"P1"}, "P2": {"P1", "P2"}, "P3": {"P1", "P2", "P3"}}
        filtered = [row for row in filtered if row["priority_tier"] in tiers[args.priority]]

    return filtered[: args.limit]


def render_markdown(rows: list[dict]) -> str:
    lines = ["# Backlog qualification outils", ""]
    for row in rows:
        lines.append(f"- `{row['path']}`")
        lines.append(f"  title: {row['title']}")
        lines.append(f"  lane: {row['lane']}")
        lines.append(f"  status: {row['status']}")
        lines.append(f"  priorite: {row['priority_tier']} ({row['priority_score']})")
        lines.append(
            f"  tags: {', '.join(row['tags']) if row['tags'] else '-'}"
        )
        lines.append(f"  champs remplis: {row['qualification_fields_filled']}")
    return "\n".join(lines)


def render_csv(rows: list[dict]) -> str:
    fieldnames = [
        "path",
        "title",
        "lane",
        "status",
        "priority_tier",
        "priority_score",
        "qualification_fields_filled",
        "qualification_locale",
        "u_site",
    ]
    writer = csv.DictWriter(sys.stdout, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows({field: row.get(field) for field in fieldnames} for row in rows)
    return ""


def main() -> None:
    args = parse_args()
    rows = filter_rows(collect_rows(), args)

    if args.format == "json":
        print(json.dumps(rows, ensure_ascii=False, indent=2))
        return

    if args.format == "markdown":
        print(render_markdown(rows))
        return

    if args.format == "csv":
        render_csv(rows)
        return

    for row in rows:
        print(row["path"])


if __name__ == "__main__":
    main()
