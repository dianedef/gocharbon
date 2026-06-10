#!/usr/bin/env python3
"""
Shared helpers for the GoCharbon tool qualification workflow.
"""

from __future__ import annotations

from collections import Counter, defaultdict
from difflib import SequenceMatcher
from pathlib import Path
from typing import Iterator
from urllib.parse import urlparse
import re
import unicodedata

import yaml

ROOT = Path(__file__).resolve().parents[1]
TOOLS_DIR = ROOT / "src" / "data" / "outils"

QUAL_FIELDS = [
    "qualificationLocale",
    "ancrageEconomique",
    "niveauResponsabilite",
    "paysSiege",
    "paysFiscal",
    "paysFondateurs",
    "hebergementDonnees",
    "societeMere",
    "sourcesVerification",
]

SYNCABLE_QUALIFICATION_FIELDS = [
    "metadataEnrichedAt",
    "type",
    *QUAL_FIELDS,
    "notesQualification",
    "methodologieVersion",
]

REQUIRED_WORKFLOW_FIELDS = [
    "metadataEnrichedAt",
    "type",
    "qualificationLocale",
    "ancrageEconomique",
    "niveauResponsabilite",
    "paysSiege",
    "hebergementDonnees",
    "sourcesVerification",
    "notesQualification",
    "methodologieVersion",
]

PATH_PRIORITY_RULES = [
    ("business/admin", 220, "admin-finance"),
    ("business/comptabilite", 210, "admin-finance"),
    ("business/facturation", 190, "admin-finance"),
    ("business/assurance", 200, "assurance-crm"),
    ("business/crm", 190, "assurance-crm"),
    ("communication", 180, "communication-productivite"),
    ("productivite", 180, "communication-productivite"),
    ("business", 120, "general"),
    ("marketing", 70, "general"),
    ("tech", 50, "general"),
    ("ecommerce", 50, "general"),
    ("creation", 40, "general"),
    ("formation", 30, "general"),
]

FRENCH_HINT_TAGS = {
    "outils francais",
    "outil francais",
    "france",
}

DATE_PATTERN = re.compile(r"^\d{4}-\d{2}-\d{2}$")


def is_present(value: object) -> bool:
    if value is None:
        return False
    if isinstance(value, str):
        return value.strip() != ""
    if isinstance(value, (list, tuple, set, dict)):
        return len(value) > 0
    return True


def parse_frontmatter(path: Path) -> dict:
    raw = path.read_text(encoding="utf-8")
    if not raw.startswith("---\n"):
        return {}

    parts = raw.split("---", 2)
    if len(parts) < 3:
        return {}

    parsed = yaml.safe_load(parts[1]) or {}
    return parsed if isinstance(parsed, dict) else {}


def split_frontmatter(path: Path) -> tuple[dict, str]:
    raw = path.read_text(encoding="utf-8")
    if not raw.startswith("---\n"):
        return {}, raw

    parts = raw.split("---", 2)
    if len(parts) < 3:
        return {}, raw

    parsed = yaml.safe_load(parts[1]) or {}
    frontmatter = parsed if isinstance(parsed, dict) else {}
    body = parts[2].lstrip("\n")
    return frontmatter, body


def write_frontmatter(path: Path, frontmatter: dict, body: str) -> None:
    serialized = yaml.safe_dump(frontmatter, allow_unicode=True, sort_keys=False).strip()
    path.write_text(f"---\n{serialized}\n---\n\n{body}", encoding="utf-8")


def iter_tool_files() -> Iterator[Path]:
    for path in sorted(TOOLS_DIR.rglob("*.md")):
        if path.name.startswith("_"):
            continue
        yield path


def tool_rel_path(path: Path) -> str:
    return path.relative_to(ROOT).as_posix()


def rel_path_from_tools(path: Path) -> str:
    return path.relative_to(TOOLS_DIR).as_posix()


def qualification_count(frontmatter: dict, fields: list[str] | None = None) -> int:
    fields = fields or QUAL_FIELDS
    return sum(1 for field in fields if is_present(frontmatter.get(field)))


def missing_fields(frontmatter: dict, fields: list[str]) -> list[str]:
    return [field for field in fields if not is_present(frontmatter.get(field))]


def normalize_text(value: str | None) -> str:
    if not value:
        return ""
    normalized = unicodedata.normalize("NFD", value)
    normalized = "".join(char for char in normalized if unicodedata.category(char) != "Mn")
    normalized = re.sub(r"[^a-zA-Z0-9]+", "-", normalized.lower())
    return normalized.strip("-")


def normalize_site(url: str | None) -> str:
    if not url:
        return ""
    parsed = urlparse(url.strip())
    netloc = parsed.netloc.lower().removeprefix("www.")
    path = parsed.path.rstrip("/")
    return f"{netloc}{path}"


def site_label(url: str | None) -> str:
    if not url:
        return ""
    parsed = urlparse(url.strip())
    netloc = parsed.netloc.lower().removeprefix("www.")
    if not netloc:
        return ""
    host = netloc.split(":")[0]
    parts = [part for part in host.split(".") if part]
    if len(parts) >= 2:
        return normalize_text(parts[-2])
    return normalize_text(parts[0])


def slug_quality_score(row: dict) -> float:
    stem = Path(row["rel_path"]).stem
    norm_stem = normalize_text(stem)
    title = normalize_text(row["title"])
    label = site_label(row.get("u_site"))

    score = 0.0

    if norm_stem:
        score += min(len(norm_stem), 18) / 18

    if label:
        score += SequenceMatcher(None, norm_stem, label).ratio() * 4

    if title:
        score += SequenceMatcher(None, norm_stem, title).ratio() * 2

    if re.search(r"\d$", norm_stem):
        score -= 1.2

    if re.fullmatch(r"\d+", norm_stem):
        score -= 4

    if norm_stem in {"contenu", "contenu-1", "contenu-2", "2021", "4-7", "4-7-1"}:
        score -= 6

    if norm_stem.startswith("contenu"):
        score -= 4

    if len(norm_stem) > 35:
        score -= 1.5

    if norm_stem.count("-") >= 5:
        score -= 1.5

    return score


def infer_lane(rel_path: str) -> str:
    for prefix, _score, lane in PATH_PRIORITY_RULES:
        if rel_path.startswith(prefix):
            return lane
    return "general"


def priority_score(frontmatter: dict, rel_path: str) -> int:
    score = 1_000
    qual_count = qualification_count(frontmatter)
    score -= qual_count * 90

    if qual_count == 0:
        score += 120

    if rel_path.endswith("/index.md") or rel_path == "index.md":
        score -= 250

    for prefix, bonus, _lane in PATH_PRIORITY_RULES:
        if rel_path.startswith(prefix):
            score += bonus
            break

    tags = {normalize_text(tag) for tag in frontmatter.get("tags", []) if isinstance(tag, str)}
    if tags & FRENCH_HINT_TAGS:
        score += 80

    if is_present(frontmatter.get("u_site")):
        score += 20

    if frontmatter.get("qualificationLocale") == "indetermine":
        score -= 150

    return score


def priority_tier(score: int) -> str:
    if score >= 1_250:
        return "P1"
    if score >= 1_100:
        return "P2"
    return "P3"


def qualification_status(frontmatter: dict) -> str:
    if frontmatter.get("qualificationLocale") == "indetermine":
        return "blocked"

    qual_count = qualification_count(frontmatter)
    if qual_count == 0:
        return "todo"

    if not missing_fields(frontmatter, REQUIRED_WORKFLOW_FIELDS):
        return "done"

    return "partial"


def build_row(path: Path) -> dict:
    frontmatter = parse_frontmatter(path)
    rel_tool_path = rel_path_from_tools(path)
    score = priority_score(frontmatter, rel_tool_path)

    return {
        "path": tool_rel_path(path),
        "rel_path": rel_tool_path,
        "title": frontmatter.get("title", path.stem),
        "tags": frontmatter.get("tags", []),
        "u_site": frontmatter.get("u_site"),
        "normalized_site": normalize_site(frontmatter.get("u_site")),
        "normalized_title": normalize_text(frontmatter.get("title", path.stem)),
        "qualification_fields_filled": qualification_count(frontmatter),
        "qualification_locale": frontmatter.get("qualificationLocale"),
        "status": qualification_status(frontmatter),
        "lane": infer_lane(rel_tool_path),
        "priority_score": score,
        "priority_tier": priority_tier(score),
        "missing_required_fields": missing_fields(frontmatter, REQUIRED_WORKFLOW_FIELDS),
        "frontmatter": frontmatter,
    }


def collect_rows() -> list[dict]:
    rows = [build_row(path) for path in iter_tool_files()]
    rows.sort(
        key=lambda row: (
            row["status"] == "done",
            row["priority_tier"] != "P1",
            row["priority_tier"] != "P2",
            -row["priority_score"],
            row["path"],
        )
    )
    return rows


def qualification_payload(frontmatter: dict) -> dict:
    payload: dict = {}
    for field in SYNCABLE_QUALIFICATION_FIELDS:
        value = frontmatter.get(field)
        if is_present(value):
            payload[field] = value
    return payload


def qualification_signature(frontmatter: dict) -> tuple:
    payload = qualification_payload(frontmatter)
    normalized: list[tuple[str, object]] = []
    for key in sorted(payload):
        value = payload[key]
        if isinstance(value, list):
            value = tuple(sorted(str(item) for item in value))
        elif isinstance(value, dict):
            value = tuple(sorted((str(k), str(v)) for k, v in value.items()))
        else:
            value = str(value)
        normalized.append((key, value))
    return tuple(normalized)


def duplicate_groups(rows: list[dict]) -> dict[str, list[list[dict]]]:
    by_site: defaultdict[str, list[dict]] = defaultdict(list)
    by_title: defaultdict[str, list[dict]] = defaultdict(list)

    for row in rows:
        if row["normalized_site"]:
            by_site[row["normalized_site"]].append(row)
        else:
            by_title[row["normalized_title"]].append(row)

    return {
        "site": [group for group in by_site.values() if len(group) > 1],
        "title": [group for group in by_title.values() if len(group) > 1 and group[0]["normalized_title"]],
    }


def canonical_duplicate_row(group: list[dict]) -> dict:
    return sorted(
        group,
        key=lambda row: (
            row["status"] != "done",
            row["status"] == "todo",
            -slug_quality_score(row),
            -row["qualification_fields_filled"],
            -row["priority_score"],
            row["path"],
        ),
    )[0]


def status_counter(rows: list[dict]) -> Counter:
    counter: Counter = Counter()
    for row in rows:
        counter[row["status"]] += 1
    return counter


def locale_counter(rows: list[dict]) -> Counter:
    counter: Counter = Counter()
    for row in rows:
        locale = row["qualification_locale"] or "missing"
        counter[locale] += 1
    return counter


def lane_counter(rows: list[dict], only_statuses: set[str] | None = None) -> Counter:
    counter: Counter = Counter()
    for row in rows:
        if only_statuses and row["status"] not in only_statuses:
            continue
        counter[row["lane"]] += 1
    return counter


def top_level_counter(rows: list[dict], only_statuses: set[str] | None = None) -> Counter:
    counter: Counter = Counter()
    for row in rows:
        if only_statuses and row["status"] not in only_statuses:
            continue
        top_level = row["rel_path"].split("/", 1)[0]
        counter[top_level] += 1
    return counter
