#!/usr/bin/env python3
"""
Fix frontmatter issues in GoCharbon markdown files.
"""

import os
import re
import yaml
from pathlib import Path

DATA_DIR = Path("/home/claude/GoCharbon/src/data")

# Description templates based on file type/path
DESCRIPTION_TEMPLATES = {
    # Business profiles
    "biz/profils/affiliation": "Découvre comment gagner de l'argent avec l'affiliation : stratégies, plateformes et conseils pour réussir en tant qu'affilié.",
    "biz/profils/agence": "Lance ton agence de services : étapes clés, positionnement, acquisition clients et croissance pour entrepreneurs ambitieux.",
    "biz/profils/ai-automation": "Maîtrise l'automatisation IA pour créer des revenus : outils, workflows et stratégies pour entrepreneurs tech-savvy.",
    "biz/profils/ai-content-creator": "Crée du contenu avec l'IA : outils, techniques et monétisation pour les créateurs qui veulent scaler leur production.",
    "biz/profils/amazon-fba": "Guide complet Amazon FBA : sélection produits, sourcing, logistique et stratégies pour réussir sur la marketplace.",
    "biz/profils/app-developer": "Deviens développeur d'applications indépendant : compétences, outils, clients et stratégies de monétisation.",
    "biz/profils/blogging": "Lance un blog rentable : niches, SEO, monétisation et stratégies pour transformer ton blog en business.",
    "biz/profils/chatbot-developer": "Crée des chatbots pour entreprises : technologies, outils no-code et stratégies pour vendre tes services.",
    "biz/profils/closing": "Maîtrise l'art du closing : techniques de vente, scripts et psychologie pour convertir tes prospects en clients.",
    "biz/profils/coaching": "Lance ton activité de coaching : positionnement, acquisition clients, tarification et scaling pour coachs ambitieux.",
    "biz/profils/community-builder": "Construis des communautés engagées : plateformes, stratégies d'animation et monétisation pour community managers.",
    "biz/profils/consulting": "Deviens consultant indépendant : expertise, prospection, tarification et fidélisation clients pour réussir.",
    "biz/profils/content-creator": "Guide du créateur de contenu : plateformes, formats, monétisation et stratégies pour vivre de ta création.",
    "biz/profils/copywriter": "Deviens copywriter freelance : techniques de persuasion, niches rentables et stratégies d'acquisition clients.",
    "biz/profils/data-entry-specialist": "Lance-toi dans la saisie de données : outils, plateformes de freelance et stratégies pour décrocher des missions.",
    "biz/profils/design-graphique": "Deviens designer graphique freelance : portfolio, clients, tarification et outils pour créatifs indépendants.",
    "biz/profils/dropshipping": "Guide complet dropshipping : fournisseurs, boutique e-commerce et stratégies marketing pour réussir en 2024.",
    "biz/profils/ecommerce": "Lance ta boutique e-commerce : plateformes, produits, marketing et logistique pour entrepreneurs du digital.",
    "biz/profils/elearning-creator": "Crée et vends des formations en ligne : plateformes, pédagogie et stratégies de lancement pour formateurs.",
    "biz/profils/email-marketer": "Deviens expert email marketing : stratégies, outils et techniques pour aider les entreprises à convertir.",
    "biz/profils/formation": "Crée ton organisme de formation : réglementation, financement CPF et stratégies pour formateurs professionnels.",
    "biz/profils/freelance": "Guide du freelance : statuts, prospection, tarification et gestion pour indépendants qui veulent réussir.",
    "biz/profils/infoproduits": "Crée et vends des infoproduits : ebooks, templates et ressources digitales pour revenus passifs.",
    "biz/profils/lead-generation": "Maîtrise la génération de leads : stratégies, outils et techniques pour vendre ce service aux entreprises.",
    "biz/profils/newsletter": "Lance une newsletter rentable : acquisition, rétention et monétisation pour créateurs indépendants.",
    "biz/profils/notion-expert": "Deviens expert Notion : templates, consulting et formations pour aider les entreprises à s'organiser.",
    "biz/profils/online-tutor": "Lance ton activité de cours particuliers en ligne : plateformes, tarification et acquisition d'élèves.",
    "biz/profils/pet-sitter": "Deviens pet-sitter professionnel : plateformes, tarification et conseils pour gardiens d'animaux.",
    "biz/profils/podcast": "Lance un podcast rentable : équipement, distribution, monétisation et stratégies de croissance.",
    "biz/profils/print-on-demand": "Guide print-on-demand : designs, plateformes et marketing pour vendre des produits personnalisés sans stock.",
    "biz/profils/prompt-engineer": "Deviens prompt engineer : techniques, outils IA et stratégies pour vendre tes compétences en prompting.",
    "biz/profils/saas": "Lance ton SaaS : idéation, développement, pricing et croissance pour entrepreneurs tech.",
    "biz/profils/seo-consultant": "Deviens consultant SEO : audits, stratégies et acquisition clients pour experts du référencement.",
    "biz/profils/setter": "Maîtrise le setting : techniques de qualification, scripts et stratégies pour closers en devenir.",
    "biz/profils/social-media-ads-manager": "Gère les publicités social media : Meta Ads, stratégies et acquisition clients pour freelances.",
    "biz/profils/social-media-manager": "Deviens social media manager : stratégies, outils et tarification pour gérer les réseaux sociaux.",
    "biz/profils/stock-photography": "Vends tes photos en stock : plateformes, techniques et stratégies pour photographes indépendants.",
    "biz/profils/translation-services": "Lance ton activité de traduction : spécialisations, outils et stratégies pour traducteurs freelance.",
    "biz/profils/virtual-assistant": "Deviens assistant virtuel : services, outils et stratégies pour travailler à distance avec succès.",
    "biz/profils/voiceover-artist": "Lance ta carrière de voix-off : équipement, plateformes et techniques pour comédiens vocaux.",
    "biz/profils/web-scraping-expert": "Deviens expert web scraping : outils, éthique et stratégies pour extraire des données à grande échelle.",
    "biz/profils/youtube": "Lance ta chaîne YouTube rentable : niche, contenu, monétisation et croissance pour créateurs vidéo.",

    # Short descriptions to improve
    "biz/freelance/index": "Guide complet du freelancing : statuts juridiques, prospection, tarification et gestion pour réussir en indépendant.",
    "ethique/entrepreneuriat-social": "L'entrepreneuriat social expliqué : modèles économiques, impact et stratégies pour entreprises à mission sociale.",
    "ethique/ethique": "L'éthique en business : principes, bonnes pratiques et responsabilité pour entrepreneurs conscients.",
    "gestion/financement/crowdfunding": "Guide crowdfunding : plateformes, campagnes et stratégies pour financer ton projet par la foule.",
    "gestion/financement/finances": "Gestion financière pour entrepreneurs : trésorerie, prévisionnel et indicateurs clés à maîtriser.",
    "gestion/financement/levee-de-fonds": "Lever des fonds : investisseurs, pitch deck et négociation pour startups en recherche de financement.",
    "gestion/financement/subventions": "Guide des subventions : aides publiques, BPI et financements pour entrepreneurs français.",
    "gestion/gestion-crise/resilience": "Développe ta résilience d'entrepreneur : mindset, stratégies et rebond face aux difficultés.",
    "gestion/gestion-crise/strategies": "Stratégies de gestion de crise : anticipation, réaction et communication pour entreprises.",
    "marketing/client/experience-client": "Optimise l'expérience client : parcours, points de contact et satisfaction pour fidéliser.",
    "marketing/client/retention": "Stratégies de rétention client : fidélisation, churn et techniques pour garder tes clients.",
    "performance/feedback": "Culture du feedback : donner, recevoir et intégrer les retours pour progresser en entreprise.",
    "performance/indicateurs": "KPIs et indicateurs de performance : métriques essentielles pour piloter ton business.",
    "performance/mental/competences": "Développe tes compétences d'entrepreneur : soft skills et hard skills pour réussir.",
    "performance/mental/leadership": "Leadership pour entrepreneurs : styles, influence et management pour inspirer ton équipe.",
    "performance/plan/analyse-marche": "Analyse de marché : méthodologie, outils et techniques pour valider ton idée business.",
    "performance/plan/business-plan": "Rédige un business plan convaincant : structure, chiffres et conseils pour investisseurs.",
    "rh/culture": "Culture d'entreprise : valeurs, rituels et pratiques pour attirer et retenir les talents.",
    "rh/management": "Management d'équipe : techniques, motivation et leadership pour dirigeants de PME.",
    "rh/recrutement": "Recrutement pour startups : sourcing, entretiens et onboarding pour bien embaucher.",
    "seo/fondamentaux/bonnes-pratiques": "Bonnes pratiques SEO : checklist et fondamentaux pour optimiser ton référencement naturel.",
    "seo/fondamentaux/facteurs-classement": "Facteurs de classement Google : critères SEO et algorithmes pour mieux te positionner.",
    "seo/fondamentaux/fonctionnement-moteurs": "Comment fonctionnent les moteurs de recherche : crawl, index et ranking expliqués.",
    "seo/fondamentaux/mobile-first": "SEO mobile-first : optimisation pour smartphones et Core Web Vitals pour Google.",
    "seo/guides/checklist": "Checklist SEO complète : audit technique, contenu et netlinking pour ton site.",
    "seo/guides/ecommerce": "SEO e-commerce : optimisation boutique en ligne, fiches produits et catégories.",
    "seo/guides/international": "SEO international : hreflang, multilingue et stratégies pour sites globaux.",
    "seo/guides/migration": "Migration SEO : checklist, redirections et bonnes pratiques pour changer de site.",
    "seo/local/citations": "Citations locales SEO : annuaires, NAP et stratégies pour référencement local.",
    "seo/netlinking/analyse": "Analyse de backlinks : outils, métriques et audit pour évaluer ton profil de liens.",
    "seo/technique/core-web-vitals": "Core Web Vitals : LCP, FID, CLS expliqués et optimisations pour ton site.",
}

def get_file_key(filepath: str) -> str:
    """Extract key from filepath for template lookup."""
    # Remove .md extension and data directory prefix
    rel_path = filepath.replace(str(DATA_DIR) + "/", "").replace(".md", "")
    return rel_path

def fix_yaml_parse_error(filepath: Path) -> bool:
    """Fix YAML parse errors by properly escaping content."""
    try:
        content = filepath.read_text(encoding='utf-8')

        # Split frontmatter from body
        if not content.startswith('---'):
            return False

        parts = content.split('---', 2)
        if len(parts) < 3:
            return False

        frontmatter_raw = parts[1]
        body = parts[2]

        # Try to parse - if it works, no fix needed
        try:
            yaml.safe_load(frontmatter_raw)
            return False
        except yaml.YAMLError:
            pass

        # Fix common issues
        lines = frontmatter_raw.strip().split('\n')
        fixed_lines = []

        for line in lines:
            if ': ' in line and not line.strip().startswith('-'):
                key, value = line.split(': ', 1)
                # If value contains problematic characters, quote it
                if value and not value.startswith('"') and not value.startswith("'"):
                    if ':' in value or '"' in value or '\n' in value:
                        # Escape and quote
                        value = '"' + value.replace('"', '\\"').replace('\n', ' ') + '"'
                        line = f"{key}: {value}"
            fixed_lines.append(line)

        fixed_frontmatter = '\n'.join(fixed_lines)

        # Verify fix works
        try:
            yaml.safe_load(fixed_frontmatter)
        except yaml.YAMLError:
            print(f"  Could not fix YAML in {filepath}")
            return False

        # Write fixed content
        new_content = f"---\n{fixed_frontmatter}\n---{body}"
        filepath.write_text(new_content, encoding='utf-8')
        return True

    except Exception as e:
        print(f"  Error fixing {filepath}: {e}")
        return False

def fix_description(filepath: Path, issue_type: str) -> bool:
    """Fix description issues in frontmatter."""
    try:
        content = filepath.read_text(encoding='utf-8')

        if not content.startswith('---'):
            return False

        parts = content.split('---', 2)
        if len(parts) < 3:
            return False

        frontmatter_raw = parts[1]
        body = parts[2]

        try:
            frontmatter = yaml.safe_load(frontmatter_raw)
        except yaml.YAMLError:
            return False

        if not frontmatter:
            return False

        # Get file key for template lookup
        file_key = get_file_key(str(filepath))

        # Check if we have a template for this file
        new_description = None

        if file_key in DESCRIPTION_TEMPLATES:
            new_description = DESCRIPTION_TEMPLATES[file_key]
        else:
            # Generate description from title and body content
            title = frontmatter.get('title', '')

            if issue_type == 'url_in_description':
                # Remove URL and use remaining content or generate from title
                old_desc = frontmatter.get('description', '')
                # Try to extract useful text after URL
                url_match = re.search(r'https?://[^\s]+\s*(.*)', old_desc)
                if url_match and len(url_match.group(1).strip()) > 50:
                    new_description = url_match.group(1).strip()[:200]
                else:
                    new_description = f"Découvre {title} : fonctionnalités, avantages et guide d'utilisation pour entrepreneurs français."

            elif issue_type == 'placeholder_description':
                # Generate from title
                if 'outils/' in str(filepath):
                    new_description = f"Découvre {title} : outil français pour entrepreneurs, fonctionnalités clés et avis complet."
                else:
                    new_description = f"Guide complet sur {title.lower()} : conseils, stratégies et bonnes pratiques pour entrepreneurs."

            elif issue_type == 'short_description':
                # Expand short description
                old_desc = frontmatter.get('description', '')
                topic = old_desc.replace('Guide complet sur ', '').strip()
                new_description = f"Guide complet sur {topic} : définition, stratégies et conseils pratiques pour entrepreneurs français."

        if new_description:
            frontmatter['description'] = new_description

            # Rebuild frontmatter
            new_frontmatter = yaml.dump(frontmatter, allow_unicode=True, default_flow_style=False, sort_keys=False)
            new_content = f"---\n{new_frontmatter}---{body}"
            filepath.write_text(new_content, encoding='utf-8')
            return True

        return False

    except Exception as e:
        print(f"  Error fixing description in {filepath}: {e}")
        return False

def delete_bad_files():
    """Delete files with problematic names that shouldn't exist."""
    bad_files = [
        DATA_DIR / "outils/business/crm/un-suivi-personnalise-pour-des-coachings.md",
        DATA_DIR / "outils/business/crm/pre-requis-du-poste-https-sellsy-recruitee-com-o-candidature-spontanee.md",
        DATA_DIR / "outils/business/crm/pre-requis-du-poste-https-sellsy-recruitee-com-o.md",
    ]

    deleted = 0
    for f in bad_files:
        if f.exists():
            f.unlink()
            print(f"  Deleted: {f.name}")
            deleted += 1

    return deleted

def main():
    print("=== Fixing Frontmatter Issues ===\n")

    # First, delete problematic files
    print("1. Deleting problematic files...")
    deleted = delete_bad_files()
    print(f"   Deleted {deleted} files\n")

    # Load audit results
    import json
    audit_file = Path("/home/claude/GoCharbon/scripts/audit_results.json")

    if not audit_file.exists():
        print("Audit results not found. Run audit first.")
        return

    with open(audit_file) as f:
        audit_data = json.load(f)

    issues = audit_data.get('all_issues', [])

    # Group by issue type
    by_type = {}
    for issue in issues:
        issue_type = issue['type']
        if issue_type not in by_type:
            by_type[issue_type] = []
        by_type[issue_type].append(issue)

    print(f"2. Found {len(issues)} issues to fix:\n")
    for issue_type, items in by_type.items():
        print(f"   - {issue_type}: {len(items)}")

    print("\n3. Fixing issues...\n")

    fixed_count = 0

    # Fix descriptions
    for issue in issues:
        filepath = DATA_DIR / issue['file']

        if not filepath.exists():
            continue

        issue_type = issue['type']

        if issue_type == 'parse_error':
            if fix_yaml_parse_error(filepath):
                print(f"   Fixed YAML: {issue['file']}")
                fixed_count += 1

        elif issue_type in ['placeholder_description', 'short_description', 'url_in_description']:
            if fix_description(filepath, issue_type):
                print(f"   Fixed description: {issue['file']}")
                fixed_count += 1

    print(f"\n=== Fixed {fixed_count} files ===")

if __name__ == "__main__":
    main()
