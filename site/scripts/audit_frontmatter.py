#!/usr/bin/env python3
"""
Audit script for markdown frontmatter in GoCharbon blog posts.
Checks for missing fields, invalid formats, and content quality issues.
"""

import os
import re
import yaml
from pathlib import Path
from collections import defaultdict
from datetime import datetime
import json


# Required fields according to CLAUDE.md
REQUIRED_FIELDS = ['title', 'author', 'tags', 'description', 'pubDate', 'imgUrl']

# Minimum description length
MIN_DESCRIPTION_LENGTH = 50

# Valid date format regex
DATE_PATTERN = re.compile(r'^\d{4}-\d{2}-\d{2}$')

# Placeholder descriptions to flag
PLACEHOLDER_DESCRIPTIONS = [
    "article en cours de rédaction",
    "en cours de rédaction",
    "à rédiger",
    "todo",
    "placeholder",
    "description",
]


def extract_frontmatter(content: str) -> tuple[dict | None, str | None]:
    """
    Extract YAML frontmatter from markdown content.
    Returns (frontmatter_dict, error_message).
    """
    if not content.startswith('---'):
        return None, "No frontmatter delimiter at start"

    # Find the closing delimiter
    parts = content.split('---', 2)
    if len(parts) < 3:
        return None, "No closing frontmatter delimiter"

    frontmatter_text = parts[1].strip()
    if not frontmatter_text:
        return None, "Empty frontmatter"

    try:
        data = yaml.safe_load(frontmatter_text)
        if not isinstance(data, dict):
            return None, f"Frontmatter is not a dict (got {type(data).__name__})"
        return data, None
    except yaml.YAMLError as e:
        return None, f"YAML parse error: {str(e)[:100]}"


def validate_frontmatter(filepath: Path, frontmatter: dict) -> list[dict]:
    """
    Validate frontmatter against required fields and format rules.
    Returns list of issues found.
    """
    issues = []

    # Check for missing required fields
    for field in REQUIRED_FIELDS:
        if field not in frontmatter:
            issues.append({
                'type': 'missing_field',
                'field': field,
                'severity': 'critical',
                'message': f"Missing required field: {field}"
            })
        elif frontmatter[field] is None or frontmatter[field] == '':
            issues.append({
                'type': 'empty_field',
                'field': field,
                'severity': 'critical',
                'message': f"Empty required field: {field}"
            })

    # Check description length and quality
    description = frontmatter.get('description', '')
    if description:
        # Remove quotes if present
        desc_str = str(description).strip('"\'')

        # Check for placeholder descriptions
        desc_lower = desc_str.lower().strip('.')
        is_placeholder = any(p in desc_lower for p in PLACEHOLDER_DESCRIPTIONS)

        if is_placeholder:
            issues.append({
                'type': 'placeholder_description',
                'field': 'description',
                'severity': 'critical',
                'message': f"Placeholder description found",
                'value': desc_str[:100]
            })
        elif len(desc_str) < MIN_DESCRIPTION_LENGTH:
            issues.append({
                'type': 'short_description',
                'field': 'description',
                'severity': 'warning',
                'message': f"Description too short ({len(desc_str)} chars, min {MIN_DESCRIPTION_LENGTH})",
                'value': desc_str[:100] + ('...' if len(desc_str) > 100 else '')
            })

        # Check for URL in description (common error)
        if desc_str.startswith('http://') or desc_str.startswith('https://'):
            issues.append({
                'type': 'url_in_description',
                'field': 'description',
                'severity': 'critical',
                'message': f"Description starts with URL",
                'value': desc_str[:80]
            })

    # Check pubDate format
    pubDate = frontmatter.get('pubDate')
    if pubDate:
        # Handle datetime objects from YAML parsing
        if isinstance(pubDate, datetime):
            date_str = pubDate.strftime('%Y-%m-%d')
        else:
            date_str = str(pubDate).strip('"\'')

        if not DATE_PATTERN.match(date_str):
            issues.append({
                'type': 'invalid_date_format',
                'field': 'pubDate',
                'severity': 'critical',
                'message': f"Invalid date format (expected YYYY-MM-DD): {date_str}",
                'value': date_str
            })
        else:
            # Validate actual date
            try:
                datetime.strptime(date_str, '%Y-%m-%d')
            except ValueError:
                issues.append({
                    'type': 'invalid_date',
                    'field': 'pubDate',
                    'severity': 'critical',
                    'message': f"Invalid date value: {date_str}",
                    'value': date_str
                })

    # Check tags is an array
    tags = frontmatter.get('tags')
    if tags is not None:
        if isinstance(tags, str):
            issues.append({
                'type': 'tags_not_array',
                'field': 'tags',
                'severity': 'critical',
                'message': f"Tags is a string instead of array: {tags[:50]}",
                'value': tags
            })
        elif not isinstance(tags, list):
            issues.append({
                'type': 'tags_invalid_type',
                'field': 'tags',
                'severity': 'critical',
                'message': f"Tags has invalid type: {type(tags).__name__}",
                'value': str(tags)
            })
        elif len(tags) == 0:
            issues.append({
                'type': 'tags_empty_array',
                'field': 'tags',
                'severity': 'warning',
                'message': "Tags array is empty"
            })

    # Check imgUrl
    imgUrl = frontmatter.get('imgUrl')
    if imgUrl:
        img_str = str(imgUrl).strip('"\'')
        # Check for common issues
        if img_str.startswith('http'):
            issues.append({
                'type': 'imgUrl_external',
                'field': 'imgUrl',
                'severity': 'warning',
                'message': f"imgUrl is external URL (should be relative): {img_str[:80]}"
            })
        elif not (img_str.startswith('./') or img_str.startswith('../')):
            issues.append({
                'type': 'imgUrl_not_relative',
                'field': 'imgUrl',
                'severity': 'warning',
                'message': f"imgUrl may not be a valid relative path: {img_str}"
            })

    return issues


def audit_markdown_files(data_dir: Path) -> dict:
    """
    Audit all markdown files in the data directory.
    Returns comprehensive audit results.
    """
    results = {
        'total_files': 0,
        'files_with_issues': 0,
        'issues_by_type': defaultdict(int),
        'issues_by_severity': defaultdict(int),
        'files_by_issue_count': defaultdict(list),
        'all_issues': [],
        'parse_errors': [],
        'files_without_frontmatter': []
    }

    md_files = list(data_dir.rglob('*.md'))
    results['total_files'] = len(md_files)

    for filepath in sorted(md_files):
        relative_path = filepath.relative_to(data_dir)

        try:
            content = filepath.read_text(encoding='utf-8')
        except Exception as e:
            results['parse_errors'].append({
                'file': str(relative_path),
                'error': f"Cannot read file: {e}"
            })
            continue

        frontmatter, error = extract_frontmatter(content)

        if error:
            results['files_without_frontmatter'].append({
                'file': str(relative_path),
                'error': error
            })
            results['issues_by_type']['parse_error'] += 1
            results['issues_by_severity']['critical'] += 1
            results['files_with_issues'] += 1
            continue

        issues = validate_frontmatter(filepath, frontmatter)

        if issues:
            results['files_with_issues'] += 1
            results['files_by_issue_count'][len(issues)].append(str(relative_path))

            for issue in issues:
                issue['file'] = str(relative_path)
                results['all_issues'].append(issue)
                results['issues_by_type'][issue['type']] += 1
                results['issues_by_severity'][issue['severity']] += 1

    return results


def print_report(results: dict):
    """Print a formatted audit report."""
    print("=" * 80)
    print("FRONTMATTER AUDIT REPORT")
    print("=" * 80)
    print()

    # Summary
    print("SUMMARY")
    print("-" * 40)
    print(f"Total files scanned:     {results['total_files']}")
    print(f"Files with issues:       {results['files_with_issues']}")
    print(f"Files without issues:    {results['total_files'] - results['files_with_issues']}")
    print(f"Total issues found:      {len(results['all_issues']) + len(results['files_without_frontmatter'])}")
    print()

    # Issues by severity
    print("ISSUES BY SEVERITY")
    print("-" * 40)
    for severity in ['critical', 'warning']:
        count = results['issues_by_severity'].get(severity, 0)
        print(f"  {severity.upper():12} {count}")
    print()

    # Issues by type
    print("ISSUES BY TYPE")
    print("-" * 40)
    for issue_type, count in sorted(results['issues_by_type'].items(), key=lambda x: -x[1]):
        print(f"  {issue_type:30} {count}")
    print()

    # Parse errors
    if results['files_without_frontmatter']:
        print("FILES WITH FRONTMATTER PARSE ERRORS")
        print("-" * 40)
        for item in results['files_without_frontmatter'][:20]:
            print(f"  {item['file']}")
            print(f"    Error: {item['error']}")
        if len(results['files_without_frontmatter']) > 20:
            print(f"  ... and {len(results['files_without_frontmatter']) - 20} more")
        print()

    # Critical issues (first 50)
    critical_issues = [i for i in results['all_issues'] if i['severity'] == 'critical']
    if critical_issues:
        print("CRITICAL ISSUES (first 50)")
        print("-" * 40)
        for issue in critical_issues[:50]:
            print(f"  {issue['file']}")
            print(f"    {issue['message']}")
            if 'value' in issue:
                print(f"    Value: {issue['value']}")
        if len(critical_issues) > 50:
            print(f"  ... and {len(critical_issues) - 50} more critical issues")
        print()

    # Short descriptions (first 30)
    short_desc_issues = [i for i in results['all_issues'] if i['type'] == 'short_description']
    if short_desc_issues:
        print("SHORT DESCRIPTIONS (first 30)")
        print("-" * 40)
        for issue in short_desc_issues[:30]:
            print(f"  {issue['file']}")
            if 'value' in issue:
                print(f"    \"{issue['value']}\"")
        if len(short_desc_issues) > 30:
            print(f"  ... and {len(short_desc_issues) - 30} more")
        print()

    # Most problematic files
    print("MOST PROBLEMATIC FILES (5+ issues)")
    print("-" * 40)
    for count in sorted(results['files_by_issue_count'].keys(), reverse=True):
        if count >= 5:
            files = results['files_by_issue_count'][count]
            print(f"  {count} issues:")
            for f in files[:10]:
                print(f"    - {f}")
            if len(files) > 10:
                print(f"    ... and {len(files) - 10} more")
    print()

    print("=" * 80)
    print("END OF REPORT")
    print("=" * 80)


def export_json(results: dict, output_path: Path):
    """Export results to JSON file for further processing."""
    # Convert defaultdict to regular dict for JSON serialization
    export_data = {
        'summary': {
            'total_files': results['total_files'],
            'files_with_issues': results['files_with_issues'],
            'files_without_issues': results['total_files'] - results['files_with_issues'],
            'total_issues': len(results['all_issues']) + len(results['files_without_frontmatter']),
            'critical_count': results['issues_by_severity'].get('critical', 0),
            'warning_count': results['issues_by_severity'].get('warning', 0),
        },
        'issues_by_type': dict(results['issues_by_type']),
        'parse_errors': results['files_without_frontmatter'],
        'all_issues': results['all_issues'],
        'files_needing_descriptions': [
            i['file'] for i in results['all_issues']
            if i['type'] in ('placeholder_description', 'short_description', 'url_in_description')
        ]
    }

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(export_data, f, indent=2, ensure_ascii=False)

    print(f"\nJSON report exported to: {output_path}")


def main():
    import argparse

    parser = argparse.ArgumentParser(description='Audit markdown frontmatter in GoCharbon blog posts')
    parser.add_argument('--json', '-j', type=str, help='Export results to JSON file')
    parser.add_argument('--data-dir', '-d', type=str, default='/home/claude/GoCharbon/src/data',
                        help='Path to data directory')
    args = parser.parse_args()

    data_dir = Path(args.data_dir)

    if not data_dir.exists():
        print(f"Error: Data directory not found: {data_dir}")
        return 1

    print(f"Scanning markdown files in: {data_dir}")
    print()

    results = audit_markdown_files(data_dir)
    print_report(results)

    if args.json:
        export_json(results, Path(args.json))

    return 0 if results['files_with_issues'] == 0 else 1


if __name__ == '__main__':
    exit(main())
