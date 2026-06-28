#!/usr/bin/env python3
"""
Migration script for French tools from bordel/ to outils/
Transforms frontmatter and organizes by category.
"""

import os
import re
import shutil
from pathlib import Path
from datetime import datetime

# Paths
BORDEL_PATH = Path("/home/claude/GoCharbon/src/data/bordel")
OUTILS_PATH = Path("/home/claude/GoCharbon/src/data/outils")

# Category mapping from bordel folders to outils structure
CATEGORY_MAP = {
    "CRM": "business/crm",
    "Finance": "business/comptabilite",
    "Admin": "business/facturation",
    "Assurance": "business/legal",
    "Légal, Juridique": "business/legal",
    "Ressources Humaines": "business/rh",
    "Marketing": "marketing/email",
    "Plateforme Webmarketing": "marketing/analytics",
    "SEO, Moteurs de recherche": "marketing/seo",
    "Réseaux Sociaux": "marketing/social-media",
    "Ecom": "ecommerce/cms",
    "Business en ligne": "ecommerce/cms",
    "Bureautique, Organisation, Productivité": "productivite/bureautique",
    "Chatbot": "communication/chatbot",
    "Communication": "communication/visio",
    "Création": "creation/design",
    "Multimédia, Création graphique, Animation, interactivité, Visuel, Présentations, Photo": "creation/design",
    "Rédaction, Publication, Communiqués, Pédagogie, Copywriting": "creation/redaction",
    "IA": "tech/ia",
    "Cybersécurité": "tech/securite",
    "Sécurité": "tech/securite",
    "Formation": "formation/lms",
    "Prospection, Presse": "marketing/email",
    "Business analyses, Reporting, Statistiques": "marketing/analytics",
}

# Tags for each category
CATEGORY_TAGS = {
    "business/crm": ["Outils Français", "CRM", "Business"],
    "business/comptabilite": ["Outils Français", "Comptabilité", "Business"],
    "business/facturation": ["Outils Français", "Facturation", "Business"],
    "business/legal": ["Outils Français", "Légal", "Business"],
    "business/rh": ["Outils Français", "RH", "Business"],
    "marketing/email": ["Outils Français", "Email", "Marketing"],
    "marketing/analytics": ["Outils Français", "Analytics", "Marketing"],
    "marketing/seo": ["Outils Français", "SEO", "Marketing"],
    "marketing/social-media": ["Outils Français", "Social Media", "Marketing"],
    "marketing/affiliation": ["Outils Français", "Affiliation", "Marketing"],
    "ecommerce/cms": ["Outils Français", "E-commerce", "CMS"],
    "ecommerce/paiement": ["Outils Français", "E-commerce", "Paiement"],
    "ecommerce/logistique": ["Outils Français", "E-commerce", "Logistique"],
    "productivite/bureautique": ["Outils Français", "Productivité", "Bureautique"],
    "productivite/gestion-projet": ["Outils Français", "Productivité", "Gestion Projet"],
    "productivite/collaboration": ["Outils Français", "Productivité", "Collaboration"],
    "productivite/automatisation": ["Outils Français", "Productivité", "Automatisation"],
    "communication/chatbot": ["Outils Français", "Communication", "Chatbot"],
    "communication/visio": ["Outils Français", "Communication", "Visio"],
    "creation/design": ["Outils Français", "Création", "Design"],
    "creation/video": ["Outils Français", "Création", "Vidéo"],
    "creation/audio": ["Outils Français", "Création", "Audio"],
    "creation/redaction": ["Outils Français", "Création", "Rédaction"],
    "tech/ia": ["Outils Français", "Tech", "IA"],
    "tech/securite": ["Outils Français", "Tech", "Sécurité"],
    "tech/hebergement": ["Outils Français", "Tech", "Hébergement"],
    "tech/dev": ["Outils Français", "Tech", "Dev"],
    "formation/lms": ["Outils Français", "Formation", "LMS"],
    "formation/elearning": ["Outils Français", "Formation", "E-learning"],
}

def slugify(text, max_length=50):
    """Convert text to URL-friendly slug."""
    text = text.lower()
    text = re.sub(r'[àáâãäå]', 'a', text)
    text = re.sub(r'[èéêë]', 'e', text)
    text = re.sub(r'[ìíîï]', 'i', text)
    text = re.sub(r'[òóôõö]', 'o', text)
    text = re.sub(r'[ùúûü]', 'u', text)
    text = re.sub(r'[ç]', 'c', text)
    text = re.sub(r'[^a-z0-9]+', '-', text)
    text = re.sub(r'-+', '-', text)
    text = text.strip('-')
    # Truncate to max length at word boundary
    if len(text) > max_length:
        text = text[:max_length].rsplit('-', 1)[0]
    return text

def extract_title(filename, content):
    """Extract title from filename or content."""
    # Try to get from # heading
    match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
    if match:
        title = match.group(1).strip()
        # Clean up markdown
        title = re.sub(r'\*\*(.+?)\*\*', r'\1', title)
        return title

    # Use filename
    title = filename.replace('.md', '')
    title = re.sub(r'^[A-Z]-\s*', '', title)  # Remove "A- " prefix
    return title

def extract_description(content):
    """Extract description from content."""
    # Look for description patterns
    patterns = [
        r'Description\s*:\s*(.+?)(?:\n\n|\n#)',
        r'\*\*Description\s*:\*\*\s*(.+?)(?:\n\n|\n#)',
        r'^([^#\n].{50,200})',  # First substantial paragraph
    ]

    for pattern in patterns:
        match = re.search(pattern, content, re.MULTILINE | re.DOTALL)
        if match:
            desc = match.group(1).strip()
            desc = re.sub(r'\s+', ' ', desc)
            desc = desc[:200] + '...' if len(desc) > 200 else desc
            return desc

    return "Outil français pour entrepreneurs et freelances."

def extract_url(content):
    """Extract site URL from frontmatter or content."""
    match = re.search(r'u_site:\s*(.+)', content)
    if match:
        return match.group(1).strip()
    return ""

def extract_affiliate(content):
    """Extract affiliate URL from frontmatter."""
    match = re.search(r'u_affi:\s*(.+)', content)
    if match:
        return match.group(1).strip()
    return ""

def has_real_content(content):
    """Check if file has substantial content beyond frontmatter."""
    # Remove frontmatter
    content_body = re.sub(r'^---.*?---', '', content, flags=re.DOTALL).strip()
    # Remove empty headings
    content_body = re.sub(r'^#+\s*(Contenu|Ressources)?\s*$', '', content_body, flags=re.MULTILINE)
    # Count meaningful words
    words = len(content_body.split())
    return words > 30

def transform_content(content, title, category):
    """Transform content to new format."""
    # Remove old frontmatter
    content_body = re.sub(r'^---.*?---\s*', '', content, flags=re.DOTALL)

    # Clean up content
    content_body = content_body.strip()

    # Remove duplicate title if present
    content_body = re.sub(rf'^#\s*{re.escape(title)}\s*\n*', '', content_body, flags=re.IGNORECASE)

    return content_body

def migrate_file(src_path, category, stats):
    """Migrate a single file to the new structure."""
    try:
        with open(src_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        stats['errors'].append(f"{src_path}: {e}")
        return False

    # Skip if no real content
    if not has_real_content(content):
        stats['skipped_empty'] += 1
        return False

    # Extract metadata
    filename = src_path.name
    title = extract_title(filename, content)
    description = extract_description(content)
    url = extract_url(content)
    affiliate = extract_affiliate(content)

    # Get tags for category
    tags = CATEGORY_TAGS.get(category, ["Outils Français"])

    # Transform content
    body = transform_content(content, title, category)

    # Build new frontmatter
    tags_yaml = "\n".join([f"  - '{tag}'" for tag in tags])

    new_content = f'''---
title: "{title}"
author: Diane
tags:
{tags_yaml}
description: "{description}"
pubDate: "2024-03-25"
imgUrl: ../../../assets/astro.jpeg
'''

    if url:
        new_content += f'u_site: "{url}"\n'
    if affiliate:
        new_content += f'u_affi: "{affiliate}"\n'

    new_content += f'''---

# {title}

{body}
'''

    # Create destination path
    slug = slugify(title)
    if not slug:
        slug = slugify(filename.replace('.md', ''))

    dest_path = OUTILS_PATH / category / f"{slug}.md"

    # Handle duplicates
    counter = 1
    while dest_path.exists():
        dest_path = OUTILS_PATH / category / f"{slug}-{counter}.md"
        counter += 1

    # Write file
    try:
        with open(dest_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        stats['migrated'] += 1
        return True
    except Exception as e:
        stats['errors'].append(f"Write {dest_path}: {e}")
        return False

def migrate_folder(folder_name, category, stats):
    """Migrate all files from a bordel subfolder."""
    folder_path = BORDEL_PATH / folder_name
    if not folder_path.exists():
        return

    for file_path in folder_path.glob("*.md"):
        migrate_file(file_path, category, stats)

def guess_category_from_content(content, filename):
    """Guess category from content keywords."""
    content_lower = content.lower()
    filename_lower = filename.lower()

    # Keyword mapping
    if any(kw in content_lower for kw in ['crm', 'client', 'relation client', 'pipeline']):
        return "business/crm"
    if any(kw in content_lower for kw in ['factur', 'devis', 'comptab']):
        return "business/comptabilite"
    if any(kw in content_lower for kw in ['email', 'newsletter', 'mailing', 'smtp']):
        return "marketing/email"
    if any(kw in content_lower for kw in ['seo', 'référencement', 'backlink']):
        return "marketing/seo"
    if any(kw in content_lower for kw in ['social', 'instagram', 'linkedin', 'twitter', 'facebook']):
        return "marketing/social-media"
    if any(kw in content_lower for kw in ['affili', 'commission', 'partenaire']):
        return "marketing/affiliation"
    if any(kw in content_lower for kw in ['ecommerce', 'boutique', 'shop', 'vente en ligne']):
        return "ecommerce/cms"
    if any(kw in content_lower for kw in ['paiement', 'stripe', 'payment', 'transaction']):
        return "ecommerce/paiement"
    if any(kw in content_lower for kw in ['projet', 'tâche', 'kanban', 'agile']):
        return "productivite/gestion-projet"
    if any(kw in content_lower for kw in ['collaborat', 'équipe', 'partage']):
        return "productivite/collaboration"
    if any(kw in content_lower for kw in ['automat', 'workflow', 'zapier', 'intégration']):
        return "productivite/automatisation"
    if any(kw in content_lower for kw in ['chatbot', 'bot', 'conversation']):
        return "communication/chatbot"
    if any(kw in content_lower for kw in ['visio', 'vidéo', 'réunion', 'appel']):
        return "communication/visio"
    if any(kw in content_lower for kw in ['design', 'graph', 'visuel', 'image']):
        return "creation/design"
    if any(kw in content_lower for kw in ['vidéo', 'montage', 'youtube']):
        return "creation/video"
    if any(kw in content_lower for kw in ['audio', 'podcast', 'son']):
        return "creation/audio"
    if any(kw in content_lower for kw in ['rédac', 'contenu', 'texte', 'copywriting']):
        return "creation/redaction"
    if any(kw in content_lower for kw in ['ia', 'intelligence artificielle', 'ai', 'gpt', 'llm']):
        return "tech/ia"
    if any(kw in content_lower for kw in ['sécurité', 'cyber', 'protection']):
        return "tech/securite"
    if any(kw in content_lower for kw in ['héberg', 'serveur', 'cloud', 'hosting']):
        return "tech/hebergement"
    if any(kw in content_lower for kw in ['formation', 'cours', 'learning', 'lms']):
        return "formation/lms"
    if any(kw in content_lower for kw in ['rh', 'recrutement', 'talent', 'salaire']):
        return "business/rh"
    if any(kw in content_lower for kw in ['légal', 'juridique', 'contrat', 'avocat']):
        return "business/legal"

    # Default
    return "productivite/bureautique"

def main():
    stats = {
        'migrated': 0,
        'skipped_empty': 0,
        'errors': []
    }

    print("=== Migration des Outils Français ===\n")

    # 1. Migrate categorized folders first
    print("1. Migration des dossiers catégorisés...")
    for folder_name, category in CATEGORY_MAP.items():
        migrate_folder(folder_name, category, stats)
        print(f"   - {folder_name} → {category}")

    # 2. Migrate root-level tool files
    print("\n2. Migration des fichiers racine...")
    for file_path in BORDEL_PATH.glob("*.md"):
        # Skip non-tool files
        if any(skip in file_path.name.lower() for skip in ['blog', 'tuto', 'bienvenue', 'a propos']):
            continue

        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            if has_real_content(content):
                category = guess_category_from_content(content, file_path.name)
                migrate_file(file_path, category, stats)
        except Exception as e:
            stats['errors'].append(f"{file_path}: {e}")

    # Print results
    print(f"\n=== Résultats ===")
    print(f"Fichiers migrés: {stats['migrated']}")
    print(f"Fichiers vides ignorés: {stats['skipped_empty']}")
    print(f"Erreurs: {len(stats['errors'])}")

    if stats['errors'][:10]:
        print("\nPremières erreurs:")
        for err in stats['errors'][:10]:
            print(f"  - {err}")

if __name__ == "__main__":
    main()
