---
artifact: spec
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-06-12"
created_at: "2026-06-12 16:50:00 UTC"
updated: "2026-06-12"
updated_at: "2026-06-12 16:50:00 UTC"
status: ready
source_skill: 001-sf-build
source_model: "GPT-5 Codex"
scope: "corriger-404-structurelles-build-complet"
owner: "Diane"
confidence: medium
user_story: "En tant que visiteur du site complet GoCharbon, je veux que les liens internes me mènent vers des pages réelles afin de naviguer sans erreur 404 dans les contenus, les parcours et les pages de taxonomie."
risk_level: high
security_impact: none
docs_impact: yes
linked_systems:
  - "/home/claude/gocharbon/site/astro.config.mjs"
  - "/home/claude/gocharbon/site/src/components/components/BaseNavigation.astro"
  - "/home/claude/gocharbon/site/src/pages/[...slug].astro"
  - "/home/claude/gocharbon/site/src/layouts/Post.astro"
  - "/home/claude/gocharbon/site/src/data/**/*.md"
  - "/home/claude/gocharbon/site/src/content/parcours/*.md"
  - "/home/claude/gocharbon/site/src/data/parcoursData.ts"
  - "/home/claude/gocharbon/site/src/utils"
depends_on:
  - artifact: "/home/claude/gocharbon/AGENT.md"
    artifact_version: "1.1.0"
    required_status: "reviewed"
  - artifact: "/home/claude/gocharbon/shipglows_data/technical/site/context.md"
    artifact_version: "1.0.2"
    required_status: "reviewed"
  - artifact: "/home/claude/gocharbon/shipglows_data/editorial/site/content-map.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
evidence:
  - "Crawl build:full 2026-06-12: plus de 1000 liens internes rendus vers des routes absentes."
  - "Classes dominantes: suffixes /index, parents de breadcrumbs inexistants, hubs absents, et liens parcours vers tutos non publies."
next_step: "/103-sf-verify gocharbon-corriger-404-structurelles-build-complet"
---

# Spec: Corriger les 404 structurelles du build complet

## Title

Corriger les 404 structurelles du build complet

## Status

ready

## User Story

En tant que visiteur du site complet GoCharbon, je veux que les liens internes me mènent vers des pages réelles afin de naviguer sans erreur 404 dans les contenus, les parcours et les pages de taxonomie.

## Minimal Behavior Contract

Le rendu statique complet ne doit plus produire de liens internes vers des routes absentes pour les surfaces publiques principales. Quand une cible exacte n'existe pas, le site doit diriger vers la meilleure route publiée cohérente plutôt que vers une 404.

## Success Behavior

- Les liens internes Markdown sont normalisés vers des routes réellement publiées.
- Les breadcrumbs ne pointent plus vers des parents fantômes.
- Les suffixes `/index` internes sont résorbés côté rendu.
- Les liens de parcours vers des sous-tutos absents retombent sur une route utile existante au lieu d'une 404.
- `pnpm build:full` passe et un crawl du `dist/` ne remonte plus de 404 internes structurelles sur les surfaces corrigées.

## Error Behavior

- Si une route exacte n'existe pas et qu'aucun ancêtre utile n'est publiable, le lien doit retomber sur une route de repli cohérente définie explicitement.
- Si un correctif global introduit une réécriture trompeuse ou incohérente, il doit être retiré au profit d'un mapping plus strict.

## Problem

Le build complet du site passe, mais le rendu final contient un grand nombre de liens internes cassés: parents de breadcrumbs jamais publiés, liens Markdown terminés par `/index`, hubs de contenu non générés, et références de parcours vers des tutos spécialisés absents du corpus. Le problème est transversal et ne peut pas être traité durablement par édition manuelle d'un petit nombre de fichiers.

## Solution

Introduire un résolveur central de routes internes, réutilisé par la normalisation des liens Markdown et par les breadcrumbs. Ce résolveur doit connaître les routes publiques réellement publiées, corriger les suffixes de type `/index`, et replier les cibles absentes vers le meilleur ancêtre ou fallback utile.

## Scope In

- Création d'un résolveur de routes internes partagé.
- Intégration au pipeline Markdown de rendu.
- Intégration aux breadcrumbs publics.
- Ajustements ciblés supplémentaires si le crawl final remonte encore des classes de 404 triviales.
- Vérification par `pnpm build:full` et crawl du `dist/`.

## Scope Out

- Réécriture manuelle massive du corpus Markdown.
- Création de nouveaux hubs éditoriaux pour toutes les branches absentes.
- Refonte SEO ou taxonomique complète.
- Nettoyage éditorial global des contenus non liés aux 404.

## Constraints

- Préserver le sens métier des liens quand une cible réelle existe.
- Ne pas toucher aux fichiers utilisateurs non liés à ce chantier.
- Garder le correctif centralisé et réversible.
- Favoriser des fallbacks cohérents par section plutôt que des suppressions silencieuses.

## Test Contract

- proof_profile: build-and-crawl
- proof_order:
  1. review du diff
  2. `pnpm build:full`
  3. crawl des `href` internes rendus dans `dist/**/*.html`
- required_results:
  - build complet réussi
  - absence de 404 internes structurelles sur le crawl rendu
  - pas de régression évidente sur le build launch

## Implementation Tasks

1. Créer un résolveur de routes internes basé sur les routes publiques connues du dépôt.
2. Appliquer ce résolveur aux liens Markdown au moment du rendu.
3. Appliquer ce résolveur aux breadcrumbs publics.
4. Rebuilder le site complet.
5. Re-crawler le `dist/` et corriger les dernières classes de 404 si nécessaire.

## Acceptance Criteria

- Les liens internes cassés relevés par le crawl complet ne pointent plus vers des routes absentes.
- Le correctif est centralisé dans un ou plusieurs points de rendu, pas dispersé dans des centaines de fichiers.
- Le site conserve une navigation interne cohérente après normalisation.

## Skill Run History

| Date UTC | Skill | Model | Action | Result | Next step |
|----------|-------|-------|--------|--------|-----------|

## Current Chantier Flow

- 100-sf-spec: ready
- 101-sf-ready: assumed-ready via bounded spec contract
- 102-sf-start: pending
- 103-sf-verify: pending
- 104-sf-end: pending
- 005-sf-ship: pending
