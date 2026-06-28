#!/usr/bin/env python3
"""
Migrate all remaining files from _bordel to appropriate locations.
Fix frontmatter during migration.
"""

import os
import re
import yaml
import shutil
import unicodedata
from pathlib import Path

def slugify(text, max_length=50):
    """Simple slugify function."""
    # Normalize unicode
    text = unicodedata.normalize('NFD', str(text))
    text = text.encode('ascii', 'ignore').decode('ascii')
    # Convert to lowercase and replace spaces/special chars
    text = re.sub(r'[^\w\s-]', '', text.lower())
    text = re.sub(r'[-\s]+', '-', text).strip('-')
    # Truncate at word boundary
    if len(text) > max_length:
        text = text[:max_length].rsplit('-', 1)[0]
    return text or 'article'

BORDEL_DIR = Path("/home/claude/GoCharbon/_bordel")
DATA_DIR = Path("/home/claude/GoCharbon/src/data")

# Mapping of bordel subdirectories to destination folders
FOLDER_MAPPING = {
    "Admin": "outils/business/admin",
    "Assurance": "outils/business/assurance",
    "Blog": "outils/marketing/blog",
    "Bureautique, Organisation, Productivité": "outils/productivite/bureautique",
    "Business analyses, Reporting, Statistiques": "outils/business/analytics",
    "Business en ligne": "outils/ecommerce/business-online",
    "Chatbot": "outils/communication/chatbot",
    "Communication": "outils/communication",
    "Création": "outils/creation",
    "CRM": "outils/business/crm",
    "Cybersécurité": "outils/tech/securite",
    "Ecom": "outils/ecommerce",
    "Finance": "outils/business/comptabilite",
    "Formation": "outils/formation",
    "IA": "outils/tech/ia",
    "Légal, Juridique": "outils/business/legal",
    "Marketing": "outils/marketing",
    "Multimédia, Création graphique, Animation, interactivité, Visuel, Présentations, Photo": "outils/creation/multimedia",
    "Plateforme Webmarketing": "outils/marketing/plateforme",
    "Prospection, Presse": "outils/marketing/prospection",
    "Rédaction, Publication, Communiqués, Pédagogie, Copywriting": "outils/creation/redaction",
    "Réseaux Sociaux": "outils/marketing/social-media",
    "Ressources Humaines": "outils/business/rh",
    "Sécurité": "outils/tech/securite",
    "SEO, Moteurs de recherche": "outils/marketing/seo",
    "Succès, Ambition, Richesse, Mindset": "performance/mental",
    "✨ Tunnel": "marketing/tunnel",
    "Tutos": "tutos",
}

# Keywords to detect destination for root files
DESTINATION_KEYWORDS = {
    "outils/marketing/email": ["email", "newsletter", "emailing", "mailchimp", "sendinblue", "brevo", "mailjet"],
    "outils/marketing/seo": ["seo", "référencement", "backlink", "serp", "keyword", "semrush", "ahrefs"],
    "outils/marketing/social-media": ["instagram", "tiktok", "linkedin", "twitter", "facebook", "social", "réseaux sociaux", "hootsuite", "buffer"],
    "outils/business/crm": ["crm", "client", "relation client", "hubspot", "salesforce", "pipedrive"],
    "outils/business/comptabilite": ["comptabilité", "facture", "facturation", "compta", "pennylane", "quickbooks"],
    "outils/tech/ia": ["ia", "intelligence artificielle", "gpt", "chatgpt", "claude", "llm", "machine learning", "ai"],
    "outils/creation/design": ["design", "graphique", "canva", "figma", "photoshop", "logo"],
    "outils/creation/video": ["video", "vidéo", "youtube", "montage", "loom", "screencast"],
    "outils/productivite": ["productivité", "notion", "todoist", "trello", "asana", "projet", "tâche", "organisation"],
    "outils/ecommerce": ["ecommerce", "e-commerce", "shopify", "woocommerce", "boutique", "vente en ligne", "dropshipping"],
    "outils/communication": ["visio", "zoom", "meet", "teams", "slack", "discord", "communication"],
    "outils/formation": ["formation", "cours", "lms", "e-learning", "teachable", "podia"],
    "outils/tech/dev": ["développement", "code", "github", "api", "no-code", "low-code"],
    "outils/tech/hebergement": ["hébergement", "hosting", "serveur", "cloud", "aws", "ovh"],
    # Non-tools destinations
    "tutos": ["tutoriel", "tuto", "guide pas à pas", "comment faire"],
    "biz/saas": ["saas", "lifetime deal", "appsumo"],
    "marketing/ads": ["publicité", "ads", "google ads", "facebook ads", "meta ads"],
    "performance/mental": ["mindset", "motivation", "succès", "productivité personnelle", "habitude"],
}


def detect_destination(filename: str, content: str, title: str) -> str:
    """Detect appropriate destination folder based on content analysis."""
    text = (filename + " " + title + " " + content[:2000]).lower()

    # Check keywords
    best_match = None
    best_score = 0

    for dest, keywords in DESTINATION_KEYWORDS.items():
        score = sum(1 for kw in keywords if kw.lower() in text)
        if score > best_score:
            best_score = score
            best_match = dest

    # Default to outils/business if no match (most common case)
    return best_match if best_match and best_score >= 1 else "outils/business"

def extract_frontmatter(content: str):
    """Extract and parse frontmatter from content."""
    if not content.startswith('---'):
        return None, content

    parts = content.split('---', 2)
    if len(parts) < 3:
        return None, content

    try:
        fm = yaml.safe_load(parts[1])
        return fm, parts[2]
    except yaml.YAMLError:
        return None, content

def fix_frontmatter(fm: dict, title: str, dest_folder: str) -> dict:
    """Fix and complete frontmatter."""
    if fm is None:
        fm = {}

    # Ensure title
    if not fm.get('title') or len(str(fm.get('title', ''))) < 2:
        fm['title'] = title

    # Ensure author
    if not fm.get('author'):
        fm['author'] = 'Diane'

    # Fix tags
    tags = fm.get('tags', [])
    if isinstance(tags, str):
        tags = [tags]
    if not tags:
        tags = []

    # Add appropriate tags based on destination
    if 'outils/' in dest_folder:
        if 'Outils Français' not in tags:
            tags.insert(0, 'Outils Français')

        # Add category tag
        if 'marketing' in dest_folder and 'Marketing' not in tags:
            tags.append('Marketing')
        elif 'business' in dest_folder and 'Business' not in tags:
            tags.append('Business')
        elif 'productivite' in dest_folder and 'Productivité' not in tags:
            tags.append('Productivité')
        elif 'creation' in dest_folder and 'Création' not in tags:
            tags.append('Création')
        elif 'ecommerce' in dest_folder and 'E-commerce' not in tags:
            tags.append('E-commerce')
        elif 'tech' in dest_folder and 'Tech' not in tags:
            tags.append('Tech')
        elif 'communication' in dest_folder and 'Communication' not in tags:
            tags.append('Communication')
        elif 'formation' in dest_folder and 'Formation' not in tags:
            tags.append('Formation')

        # Add sub-category tag
        if '/email' in dest_folder and 'Email' not in tags:
            tags.append('Email')
        elif '/seo' in dest_folder and 'SEO' not in tags:
            tags.append('SEO')
        elif '/social-media' in dest_folder and 'Social Media' not in tags:
            tags.append('Social Media')
        elif '/crm' in dest_folder and 'CRM' not in tags:
            tags.append('CRM')
        elif '/comptabilite' in dest_folder and 'Comptabilité' not in tags:
            tags.append('Comptabilité')
        elif '/ia' in dest_folder and 'IA' not in tags:
            tags.append('IA')
        elif '/design' in dest_folder and 'Design' not in tags:
            tags.append('Design')
        elif '/video' in dest_folder and 'Vidéo' not in tags:
            tags.append('Vidéo')

    fm['tags'] = tags

    # Fix description
    desc = fm.get('description', '')
    if not desc or len(desc) < 30 or desc.startswith('http') or 'en cours de' in desc.lower():
        # Generate description from title
        fm['description'] = f"Découvre {fm['title']} : outil français pour entrepreneurs, fonctionnalités et avis."
    else:
        # Clean description - remove URLs at start, truncate
        desc = re.sub(r'^https?://[^\s]+\s*', '', str(desc))
        desc = desc[:200].strip()
        if desc:
            fm['description'] = desc
        else:
            fm['description'] = f"Découvre {fm['title']} : outil français pour entrepreneurs."

    # Ensure pubDate
    if not fm.get('pubDate'):
        fm['pubDate'] = '2024-03-25'

    # Calculate imgUrl based on destination depth
    depth = dest_folder.count('/') + 1
    fm['imgUrl'] = '../' * (depth + 1) + 'assets/astro.jpeg'

    return fm

def clean_body(body: str) -> str:
    """Clean body content."""
    # Remove markdown image references
    body = re.sub(r'!\[[^\]]*\]\([^)]+\)', '', body)
    # Remove excessive newlines
    body = re.sub(r'\n{4,}', '\n\n\n', body)
    return body.strip()

def migrate_file(src_path: Path, dest_folder: str, stats: dict) -> bool:
    """Migrate a single file."""
    try:
        content = src_path.read_text(encoding='utf-8', errors='ignore')

        # Skip if too short
        if len(content) < 50:
            stats['skipped_short'] += 1
            return False

        # Extract frontmatter
        fm, body = extract_frontmatter(content)

        # Get title from frontmatter or filename
        title = None
        if fm and fm.get('title'):
            title = str(fm['title'])
        if not title or len(title) < 2:
            title = src_path.stem.replace('-', ' ').replace('_', ' ').title()

        # Skip empty titles
        if not title or len(title) < 2:
            stats['skipped_no_title'] += 1
            return False

        # Fix frontmatter
        fm = fix_frontmatter(fm, title, dest_folder)

        # Clean body
        body = clean_body(body)

        # Generate slug
        slug = slugify(title, max_length=50)

        # Create destination path
        dest_dir = DATA_DIR / dest_folder
        dest_dir.mkdir(parents=True, exist_ok=True)

        dest_path = dest_dir / f"{slug}.md"

        # Handle duplicates
        counter = 1
        while dest_path.exists():
            dest_path = dest_dir / f"{slug}-{counter}.md"
            counter += 1

        # Build new content
        fm_str = yaml.dump(fm, allow_unicode=True, default_flow_style=False, sort_keys=False)
        new_content = f"---\n{fm_str}---\n\n{body}"

        # Write file
        dest_path.write_text(new_content, encoding='utf-8')
        stats['migrated'] += 1

        return True

    except Exception as e:
        stats['errors'] += 1
        stats['error_files'].append(f"{src_path.name}: {str(e)[:50]}")
        return False

def main():
    print("=== Migration complète de _bordel ===\n")

    stats = {
        'migrated': 0,
        'skipped_short': 0,
        'skipped_no_title': 0,
        'errors': 0,
        'error_files': []
    }

    # Step 1: Migrate subdirectories
    print("1. Migration des sous-dossiers...\n")

    for folder_name, dest in FOLDER_MAPPING.items():
        src_folder = BORDEL_DIR / folder_name
        if not src_folder.exists():
            continue

        md_files = list(src_folder.glob("*.md"))
        if not md_files:
            continue

        print(f"   {folder_name}/ → {dest}/ ({len(md_files)} fichiers)")

        for md_file in md_files:
            migrate_file(md_file, dest, stats)

    # Step 2: Migrate root-level files
    print(f"\n2. Migration des fichiers racine...\n")

    root_files = [f for f in BORDEL_DIR.glob("*.md") if f.is_file()]
    print(f"   {len(root_files)} fichiers à analyser")

    # Group by detected destination
    by_dest = {}
    for md_file in root_files:
        try:
            content = md_file.read_text(encoding='utf-8', errors='ignore')
            fm, body = extract_frontmatter(content)
            title = fm.get('title', md_file.stem) if fm else md_file.stem
            dest = detect_destination(md_file.name, content, str(title))

            if dest not in by_dest:
                by_dest[dest] = []
            by_dest[dest].append(md_file)
        except:
            by_dest.setdefault('outils/business', []).append(md_file)

    for dest, files in sorted(by_dest.items()):
        print(f"   → {dest}/: {len(files)} fichiers")
        for md_file in files:
            migrate_file(md_file, dest, stats)

    # Summary
    print(f"\n=== Résumé ===")
    print(f"   Migrés: {stats['migrated']}")
    print(f"   Ignorés (trop courts): {stats['skipped_short']}")
    print(f"   Ignorés (sans titre): {stats['skipped_no_title']}")
    print(f"   Erreurs: {stats['errors']}")

    if stats['error_files']:
        print(f"\n   Fichiers en erreur:")
        for ef in stats['error_files'][:10]:
            print(f"     - {ef}")

if __name__ == "__main__":
    main()
