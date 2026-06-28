#!/usr/bin/env python3
"""
Audit the coverage and workflow status of tool qualification metadata.
"""

from __future__ import annotations

from collections import Counter

from outils_qualification_common import (
    QUAL_FIELDS,
    collect_rows,
    lane_counter,
    locale_counter,
    status_counter,
    top_level_counter,
)


def main() -> None:
    rows = collect_rows()
    coverage = Counter()
    missing = []
    partial = []

    for row in rows:
        frontmatter = row["frontmatter"]
        for field in QUAL_FIELDS:
            value = frontmatter.get(field)
            if value not in (None, "", []):
                coverage[field] += 1

        if row["status"] == "todo":
            missing.append(row["path"])
        elif row["status"] in {"partial", "blocked"}:
            partial.append(row["path"])

    print(f"Total outils audites: {len(rows)}")
    print("")
    print("Workflow status:")
    for status, count in status_counter(rows).most_common():
        print(f"- {status}: {count}/{len(rows)}")
    print("")
    print("Couverture par champ:")
    for field in QUAL_FIELDS:
        print(f"- {field}: {coverage[field]}/{len(rows)}")

    print("")
    print("Qualification locale:")
    for locale, count in locale_counter(rows).most_common():
        print(f"- {locale}: {count}/{len(rows)}")

    print("")
    print("Backlog par lane (todo + partial + blocked):")
    for lane, count in lane_counter(rows, {"todo", "partial", "blocked"}).most_common():
        print(f"- {lane}: {count}")

    print("")
    print("Top categories encore a traiter:")
    for category, count in top_level_counter(rows, {"todo", "partial", "blocked"}).most_common(6):
        print(f"- {category}: {count}")

    print("")
    print(f"Fiches sans aucune qualification: {len(missing)}")
    for rel_path in missing[:20]:
        print(f"  - {rel_path}")

    if len(missing) > 20:
        print(f"  ... {len(missing) - 20} autres")

    print("")
    print(f"Fiches en cours / bloquees: {len(partial)}")
    for rel_path in partial[:20]:
        print(f"  - {rel_path}")

    if len(partial) > 20:
        print(f"  ... {len(partial) - 20} autres")


if __name__ == "__main__":
    main()
