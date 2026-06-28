---
artifact: content_map
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-04-26"
updated: "2026-04-27"
status: reviewed
source_skill: sf-docs
scope: content-map
owner: "Diane"
confidence: medium
risk_level: medium
content_surfaces:
  - "site_landing_pages"
  - "editorial_content"
  - "parcours"
  - "outils"
  - "seo_knowledge"
  - "public_legal_pages"
security_impact: unknown
docs_impact: yes
evidence:
  - "site/src/pages contient index, parcours, outils, quiz, méthode et pages légales"
  - "site/src/content/parcours contient la majorité du contenu SEO métier"
  - "site/src/content directory contient des dossiers de stratégie, marketing, tutos, outils et gestion"
  - "scripts et audits dédiés suivent l'état de qualité des contenus"
linked_artifacts:
  - "README.md"
  - "shipflow_data/product/site/product.md"
  - "shipflow_data/gtm/site/gtm.md"
  - "shipflow_data/branding/branding.md"
depends_on:
  - artifact: "shipflow_data/product/site/product.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
  - artifact: "shipflow_data/gtm/site/gtm.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
supersedes: []
next_review: "2026-05-26"
next_step: "/sf-docs verify shipflow_data/editorial/site/content-map.md"
---

# Content Map

## Rôle

Ce document cartographie les surfaces de contenu de GoCharbon et fixe les règles de routage pour que la production, le repositionnement et la réutilisation éditoriale restent cohérents.

## Content Surfaces

| Surface | Chemin canonique | Rôle | Format | Référence | Déclencheur |
|---|---|---|---|---|---|
| Landing page | `site/src/pages/index.astro` | Promesse principale, accès aux parcours | Astro | `README.md`, `shipflow_data/product/site/product.md`, `shipflow_data/gtm/site/gtm.md`, `shipflow_data/branding/branding.md` | Changement de positionnement public |
| Parcours & méthodes | `site/src/pages/parcours.astro`, `site/src/pages/parcours/[...].astro` | Conversion éditoriale structurée | Astro + données | `site/src/content/parcours`, `site/src/data/parcoursData.ts` | Nouvelle catégorie métier ou refonte méthode |
| Guides & tutorials | `site/src/pages/tutos.astro`, `site/src/pages/v1/*` | Support opérationnel, exemples concrets | Astro | `site/src/data/tutos` | Mise à jour pédagogique |
| Outils & comparatifs | `site/src/pages/outils.astro`, `site/src/pages/outils/*` | Décision d'outils, recommandations, alternatives | Astro + fiches | `site/src/content/outils` et `site/src/pages/tools` | Ajout d'alternative ou mise à jour outil |
| Blog / contenus éditoriaux | `site/src/content/parcours`, `site/src/pages/blog.astro` | Découverte et topo SEO | Markdown + Astro | `site/src/content/parcours` | Nouveau cluster thématique |
| Contenus de marque | `site/src/data/_founder.md`, `site/src/data/_vision.md`, `site/src/content/` | Ton, mission, cadre de confiance | Markdown | `shipflow_data/branding/branding.md`, `shipflow_data/technical/site/README.md` | Changement de ton / vision |
| Pages légales / confiance | `site/src/pages/cgu.astro`, `site/src/pages/confidentialite.astro`, `site/src/pages/mentions-legales.astro` | Transparence, conformité, confiance | Astro | `README.md` | Mise à jour RGPD ou politique |
| SEO support | `site/src/data/seo`, `site/src/data/strategies` | Référencement et architecture sémantique | Markdown | `shipflow_data/technical/site/README.md`, `site/src/content/parcours` | Nouvel angle de recherche |

## Architecture sémantique

| Cluster | Pilier | Pages de support | Intention | Règle interne | Statut |
|---|---|---|---|---|---|
| Démarrage business | `site/src/pages/parcours.astro` | `site/src/content/parcours/*` | Conversion | Lien de progression obligatoire | live |
| Outils IA & stack | `site/src/pages/outils.astro` | `site/src/data/outils/*` | Décision | Comparatif + alternatives locales | live |
| Gamification & activation | `site/src/pages/quiz.astro` | `site/src/pages/quiz-avance.astro`, `site/src/pages/progression.astro` | Engagement | Référence claire des prochaines étapes | live |
| Méthodologie | `site/src/pages/methodologie.astro` | `site/src/pages/tutos.astro`, articles d'intro | Compréhension | Liens vers exemples concrets | live |
| Confiance & marque | `site/src/pages/bio.astro` | `site/src/data/_founder.md`, `site/src/data/_vision.md` | Crédibilité | Ton cohérent avec `shipflow_data/branding/branding.md` | live |

## Rôles de pages

| Type | Mission | Doit contenir | Ne doit pas contenir |
|---|---|---|---|
| Landing | Convertir la première visite | promesse claire, preuve, CTA | promesses irréalistes |
| Parcours | Débloquer une action immédiate | étapes claires, ordre, prochain pas | théorie non-actionnable |
| Guide | Éduquer avec contexte | cas d'usage, limites, alternatives | jargon non expliqué |
| Comparatif | Aider la décision | critères explicites, coût, limites | biais d'affiliation non signalé |
| Content repurposed | Réutiliser sans redondance | angle nouveau, ancrage source | copier-coller du contenu source |

## Règles de repurposing

- Préférer `README.md` et `shipflow_data/product/site/product.md` quand la mise à jour touche la stratégie produit.
- Utiliser `shipflow_data/gtm/site/gtm.md` pour les évolutions de promesse, promesse commerciale, ou canaux d'acquisition.
- Utiliser des pages de parcours quand une idée devient une action concrète.
- Utiliser des contenus d'outils pour toute recommandation impliquant coût ou choix technologique.
- Toujours relier un contenu repurposé au bon pilier sémantique pour éviter les duplications.

## Règles de mise à jour

| Déclencheur | Cibles à revoir |
|---|---|
| Changement de positionnement de marque | `shipflow_data/product/site/product.md`, `shipflow_data/gtm/site/gtm.md`, `shipflow_data/branding/branding.md`, `site/src/pages/index.astro` |
| Nouveau parcours métier | `site/src/content/parcours`, `site/src/pages/parcours.astro`, `site/src/pages/blog.astro` |
| Mise à jour des recommandations outils | `site/src/pages/outils.astro`, `site/src/pages/outils/*`, `site/src/data/outils` |
| Nouveau bloc de preuve ou source | `shipflow_data/product/site/product.md`, `shipflow_data/gtm/site/gtm.md`, pages liées, audit tracker |
| Création d'une section blog ou newsletter externe | `CONTENT_MAP.md`, CTA, plan de distribution |
