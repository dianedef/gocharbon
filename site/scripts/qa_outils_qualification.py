#!/usr/bin/env python3
"""
Run QA checks on GoCharbon tool qualification metadata.
"""

from __future__ import annotations

import argparse
import json
import re

from outils_qualification_common import (
    DATE_PATTERN,
    REQUIRED_WORKFLOW_FIELDS,
    canonical_duplicate_row,
    collect_rows,
    duplicate_groups,
    missing_fields,
    normalize_text,
    qualification_signature,
)


def is_france(value: str | None) -> bool:
    return normalize_text(value) in {"france", "fr", "republique-francaise"}


def check_row(row: dict) -> list[dict]:
    frontmatter = row["frontmatter"]
    issues: list[dict] = []

    if frontmatter.get("section") != "outils":
        issues.append({"severity": "error", "code": "section", "message": "section doit etre `outils`."})

    if frontmatter.get("type") != "outil":
        issues.append({"severity": "error", "code": "type", "message": "type doit etre `outil`."})

    if row["status"] in {"partial", "done", "blocked"}:
        missing = missing_fields(frontmatter, REQUIRED_WORKFLOW_FIELDS)
        if missing:
            issues.append(
                {
                    "severity": "warning",
                    "code": "missing_required_fields",
                    "message": f"Champs workflow manquants: {', '.join(missing)}.",
                }
            )

    metadata_enriched_at = frontmatter.get("metadataEnrichedAt")
    if metadata_enriched_at and not DATE_PATTERN.match(str(metadata_enriched_at)):
        issues.append(
            {
                "severity": "error",
                "code": "metadataEnrichedAt",
                "message": "metadataEnrichedAt doit etre au format YYYY-MM-DD.",
            }
        )

    sources = frontmatter.get("sourcesVerification") or []
    if (frontmatter.get("ancrageEconomique") == "fort" or frontmatter.get("niveauResponsabilite") == "fort") and len(sources) < 2:
        issues.append(
            {
                "severity": "warning",
                "code": "strong_without_sources",
                "message": "Un niveau fort devrait avoir au moins 2 sources officielles.",
            }
        )

    qual_locale = frontmatter.get("qualificationLocale")
    pays_siege = frontmatter.get("paysSiege")
    if qual_locale == "france" and pays_siege and not is_france(pays_siege):
        issues.append(
            {
                "severity": "error",
                "code": "france_without_france_siege",
                "message": "qualificationLocale=france avec un paysSiege non francais.",
            }
        )

    if qual_locale == "union-europeenne" and pays_siege and is_france(pays_siege):
        issues.append(
            {
                "severity": "warning",
                "code": "eu_with_france_siege",
                "message": "qualificationLocale=union-europeenne avec paysSiege=France.",
            }
        )

    if frontmatter.get("methodologieVersion") and frontmatter.get("methodologieVersion") != "gocharbon-v1":
        issues.append(
            {
                "severity": "warning",
                "code": "methodology_version",
                "message": "methodologieVersion differente de gocharbon-v1.",
            }
        )

    return issues


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--format", choices=["markdown", "json"], default="markdown")
    parser.add_argument("--scope", choices=["qualified", "all"], default="qualified")
    parser.add_argument("--fail-on-errors", action="store_true")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    rows = collect_rows()
    rows_for_checks = rows
    if args.scope == "qualified":
        rows_for_checks = [row for row in rows if row["status"] in {"partial", "done", "blocked"}]

    findings: list[dict] = []

    for row in rows_for_checks:
        for issue in check_row(row):
            findings.append(
                {
                    "path": row["path"],
                    "status": row["status"],
                    **issue,
                }
            )

    dupes = duplicate_groups(rows)
    for group in dupes["site"]:
        worked_rows = [row for row in group if row["status"] in {"partial", "done", "blocked"}]
        if len(worked_rows) <= 1:
            continue

        signatures = {qualification_signature(row["frontmatter"]) for row in worked_rows}
        if len(signatures) <= 1:
            continue

        canonical = canonical_duplicate_row(group)
        findings.append(
            {
                "path": ", ".join(item["path"] for item in group),
                "status": "mixed",
                "severity": "warning",
                "code": "duplicate_site_conflict",
                "message": f"Plusieurs fiches partagent le meme u_site avec des qualifications divergentes. Canonique suggere: {canonical['path']}.",
            }
        )

    if args.format == "json":
        print(json.dumps(findings, ensure_ascii=False, indent=2))
    else:
        print("# QA qualification outils\n")
        print(f"- scope: {args.scope}")
        print(f"- total findings: {len(findings)}")
        print("")
        for finding in findings:
            print(f"- [{finding['severity']}] `{finding['code']}` `{finding['path']}`")
            print(f"  status: {finding['status']}")
            print(f"  message: {finding['message']}")

    if args.fail_on_errors and any(finding["severity"] == "error" for finding in findings):
        raise SystemExit(1)


if __name__ == "__main__":
    main()
