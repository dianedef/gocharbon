#!/usr/bin/env python3
"""
Audit tool-directory content quality under src/data/outils.

Checks:
- Required frontmatter fields
- Basic metadata validity (URL, date, section, tags)
- Body completeness heuristics (min words, heading presence)
- Noise/scraping artifacts signals

Outputs:
- scripts/outils_content_audit.json
- scripts/outils_content_audit.md
"""

from __future__ import annotations

import json
import re
from collections import Counter
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import yaml

ROOT = Path("/home/claude/GoCharbon")
DATA_DIR = ROOT / "src" / "data" / "outils"
OUT_JSON = ROOT / "scripts" / "outils_content_audit.json"
OUT_MD = ROOT / "scripts" / "outils_content_audit.md"

REQUIRED_FIELDS = ["title", "description", "pubDate", "author", "imgUrl", "tags"]
NOISE_PATTERNS = [
    "Articles populaires",
    "Recevoir la Newsletter",
    "Obtenez une estimation de prix",
    "La Fabrique du Net",
    "Hello Defores",
    "|---|",
    "ESSAI GRATUIT",
]

URL_RE = re.compile(r"^https?://", re.IGNORECASE)
H1_RE = re.compile(r"^#\s+\S+", re.MULTILINE)
WORD_RE = re.compile(r"\b[\w'-]{2,}\b", re.UNICODE)


@dataclass
class AuditResult:
    path: str
    score: int
    status: str
    word_count: int
    issues: list[str]
    warnings: list[str]


def split_frontmatter(raw: str) -> tuple[dict[str, Any], str] | None:
    if not raw.startswith("---\n"):
        return None
    parts = raw.split("---", 2)
    if len(parts) < 3:
        return None
    try:
        fm = yaml.safe_load(parts[1]) or {}
    except Exception:
        return None
    if not isinstance(fm, dict):
        return None
    return fm, parts[2]


def parse_pubdate(value: Any) -> bool:
    if not isinstance(value, str):
        return False
    try:
        datetime.fromisoformat(value)
        return True
    except ValueError:
        return False


def audit_file(file_path: Path) -> AuditResult:
    raw = file_path.read_text(encoding="utf-8", errors="replace")
    rel_path = file_path.relative_to(ROOT).as_posix()

    parsed = split_frontmatter(raw)
    if not parsed:
        return AuditResult(
            path=rel_path,
            score=0,
            status="fail",
            word_count=0,
            issues=["Frontmatter manquant ou invalide"],
            warnings=[],
        )

    fm, body = parsed
    score = 100
    issues: list[str] = []
    warnings: list[str] = []

    for field in REQUIRED_FIELDS:
        if field not in fm:
            score -= 20
            issues.append(f"Champ requis manquant: {field}")

    title = fm.get("title")
    if isinstance(title, str):
        if len(title.strip()) < 3:
            score -= 10
            issues.append("Titre trop court")
    else:
        score -= 10
        issues.append("Titre invalide")

    description = fm.get("description")
    if isinstance(description, str):
        length = len(description.strip())
        if length < 60:
            score -= 10
            warnings.append("Description courte (< 60 caractères)")
        if length > 320:
            score -= 5
            warnings.append("Description très longue (> 320 caractères)")
    else:
        score -= 10
        issues.append("Description invalide")

    pub_date = fm.get("pubDate")
    if not parse_pubdate(pub_date):
        score -= 10
        issues.append("pubDate invalide (format ISO attendu)")

    section = fm.get("section")
    if section != "apps":
        score -= 5
        warnings.append("section devrait être 'apps'")

    tags = fm.get("tags")
    normalized_tags: list[str] = []
    if isinstance(tags, list):
        normalized_tags = [str(tag).strip().lower() for tag in tags]
    elif isinstance(tags, str):
        normalized_tags = [tags.strip().lower()]
    else:
        score -= 10
        issues.append("tags invalide (liste attendue)")

    if normalized_tags and "outils" not in normalized_tags:
        score -= 8
        warnings.append("Tag principal 'Outils' absent")

    u_site = fm.get("u_site")
    if not isinstance(u_site, str) or not URL_RE.match(u_site.strip()):
        score -= 12
        issues.append("u_site manquant ou URL invalide")

    body_words = WORD_RE.findall(body)
    word_count = len(body_words)

    if word_count < 120:
        score -= 25
        issues.append("Contenu trop court (< 120 mots)")
    elif word_count < 250:
        score -= 10
        warnings.append("Contenu léger (< 250 mots)")

    if not H1_RE.search(body):
        score -= 8
        warnings.append("Aucun titre H1 (# ...) détecté")

    for pattern in NOISE_PATTERNS:
        if pattern in body:
            score -= 10
            warnings.append(f"Artefact de contenu détecté: '{pattern}'")

    # repeated lines often indicate messy copy/paste imports
    cleaned_lines = [line.strip() for line in body.splitlines() if line.strip()]
    duplicate_line_hits = sum(1 for count in Counter(cleaned_lines).values() if count >= 3)
    if duplicate_line_hits >= 3:
        score -= 8
        warnings.append("Lignes répétées détectées (possible bruit de copie)")

    score = max(score, 0)
    if score >= 80 and not issues:
        status = "ok"
    elif score >= 60:
        status = "warn"
    else:
        status = "fail"

    return AuditResult(
        path=rel_path,
        score=score,
        status=status,
        word_count=word_count,
        issues=issues,
        warnings=warnings,
    )


def main() -> None:
    files = sorted(DATA_DIR.rglob("*.md"))
    results = [audit_file(path) for path in files if not path.name.startswith("_")]

    status_counts = Counter(result.status for result in results)
    issue_counts = Counter()
    warning_counts = Counter()

    for result in results:
        issue_counts.update(result.issues)
        warning_counts.update(result.warnings)

    worst = sorted(results, key=lambda item: (item.score, item.path))[:200]

    payload = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "scope": "src/data/outils/**/*.md",
        "summary": {
            "total": len(results),
            "ok": status_counts.get("ok", 0),
            "warn": status_counts.get("warn", 0),
            "fail": status_counts.get("fail", 0),
        },
        "topIssues": issue_counts.most_common(20),
        "topWarnings": warning_counts.most_common(20),
        "worstFiles": [
            {
                "path": item.path,
                "score": item.score,
                "status": item.status,
                "wordCount": item.word_count,
                "issues": item.issues,
                "warnings": item.warnings,
            }
            for item in worst
        ],
    }

    OUT_JSON.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")

    lines: list[str] = []
    lines.append("# Audit Qualité des fiches Outils")
    lines.append("")
    lines.append(f"- Généré le: {payload['generatedAt']}")
    lines.append(f"- Scope: `{payload['scope']}`")
    lines.append(f"- Total: {payload['summary']['total']}")
    lines.append(f"- OK: {payload['summary']['ok']}")
    lines.append(f"- Warn: {payload['summary']['warn']}")
    lines.append(f"- Fail: {payload['summary']['fail']}")
    lines.append("")
    lines.append("## Top problèmes")
    lines.append("")
    if payload["topIssues"]:
        for label, count in payload["topIssues"]:
            lines.append(f"- {label}: {count}")
    else:
        lines.append("- Aucun problème bloquant détecté")

    lines.append("")
    lines.append("## Top avertissements")
    lines.append("")
    if payload["topWarnings"]:
        for label, count in payload["topWarnings"]:
            lines.append(f"- {label}: {count}")
    else:
        lines.append("- Aucun avertissement détecté")

    lines.append("")
    lines.append("## 50 pires fiches (priorité de correction)")
    lines.append("")
    for item in worst[:50]:
        lines.append(f"- `{item.path}` | score={item.score} | status={item.status} | mots={item.word_count}")
        for issue in item.issues:
            lines.append(f"  - issue: {issue}")
        for warning in item.warnings[:3]:
            lines.append(f"  - warn: {warning}")

    OUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(f"Scanned: {len(results)}")
    print(f"OK: {payload['summary']['ok']}")
    print(f"WARN: {payload['summary']['warn']}")
    print(f"FAIL: {payload['summary']['fail']}")
    print(f"JSON: {OUT_JSON}")
    print(f"MD: {OUT_MD}")


if __name__ == "__main__":
    main()
