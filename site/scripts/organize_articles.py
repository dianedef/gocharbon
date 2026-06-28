#!/usr/bin/env python3
"""
Organize root-level articles into proper folders.
Update imgUrl paths accordingly.
"""

import os
import re
import shutil
from pathlib import Path

DATA_DIR = Path("/home/claude/GoCharbon/src/data")

# Mapping of root files to their destination folders
FILE_MOVES = {
    "accelerer-youtube.md": "contenu/youtube/",
    "alternatives-appsumo.md": "biz/saas/",
    "analytics.md": "marketing/analytics/",
    "cash-machine-v3-un-revenu-passif-sur-internet-pour-tous.md": "biz/revenus/",
    "cest-quoi-appsumo.md": "biz/saas/",
    "enregistreur-pas-cher.md": "tech/outils/",
    "innovation-digitale.md": "strategies/innovation/",
    "mes-echecs-dinvestissement.md": "biz/finance/",
    "prompt.md": "tech/ia/prompts/",
    # services.md stays at root - it's a special page
}

def calculate_depth(dest_path: str) -> int:
    """Calculate folder depth from data root."""
    return dest_path.rstrip('/').count('/')

def update_img_path(content: str, old_depth: int, new_depth: int) -> str:
    """Update imgUrl relative path based on new folder depth."""
    # Pattern to match imgUrl in frontmatter
    pattern = r'(imgUrl:\s*)(\.\.\/)*assets/'

    # Calculate new path prefix
    new_prefix = '../' * (new_depth + 1)

    # Replace
    def replace_img(match):
        return f'{match.group(1)}{new_prefix}assets/'

    return re.sub(pattern, replace_img, content)

def move_file(filename: str, dest_folder: str):
    """Move a file to destination folder, creating folder if needed."""
    src_path = DATA_DIR / filename
    dest_dir = DATA_DIR / dest_folder
    dest_path = dest_dir / filename

    if not src_path.exists():
        print(f"  Skip (not found): {filename}")
        return False

    # Create destination folder if needed
    dest_dir.mkdir(parents=True, exist_ok=True)

    # Read content
    content = src_path.read_text(encoding='utf-8')

    # Calculate depths
    old_depth = 0  # Root level
    new_depth = calculate_depth(dest_folder)

    # Update image path
    updated_content = update_img_path(content, old_depth, new_depth)

    # Write to new location
    dest_path.write_text(updated_content, encoding='utf-8')

    # Remove old file
    src_path.unlink()

    print(f"  Moved: {filename} → {dest_folder}")
    return True

def create_missing_index_files():
    """Create index.md files for new folders if they don't exist."""
    new_folders = set(FILE_MOVES.values())

    for folder in new_folders:
        folder_path = DATA_DIR / folder
        index_path = folder_path / "index.md"

        if folder_path.exists() and not index_path.exists():
            # Extract folder name for title
            folder_name = folder.rstrip('/').split('/')[-1]
            title = folder_name.replace('-', ' ').title()

            # Create simple index
            content = f"""---
title: "{title}"
author: Diane
tags:
  - 'Guide'
description: "Articles et guides sur {title.lower()} pour entrepreneurs."
pubDate: "2024-01-15"
imgUrl: {'../' * (calculate_depth(folder) + 1)}assets/astro.jpeg
---

# {title}

Retrouve tous nos articles sur {title.lower()}.
"""
            index_path.write_text(content, encoding='utf-8')
            print(f"  Created index: {folder}index.md")

def main():
    print("=== Organizing Root Articles ===\n")

    moved = 0
    for filename, dest in FILE_MOVES.items():
        if move_file(filename, dest):
            moved += 1

    print(f"\n  Moved {moved} files\n")

    print("=== Creating Missing Index Files ===\n")
    create_missing_index_files()

    print("\n=== Done ===")

if __name__ == "__main__":
    main()
