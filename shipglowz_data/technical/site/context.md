---
artifact: technical_context
metadata_schema_version: "1.0"
artifact_version: "1.0.2"
project: "gocharbon"
created: "2026-04-26"
updated: "2026-06-12"
status: reviewed
source_skill: manual
scope: technical
owner: "dianedef"
confidence: "medium"
risk_level: "medium"
security_impact: "none"
docs_impact: "yes"
evidence:
  - "site/package.json"
  - "site/astro.config.mjs"
  - "site/src/content.config.ts"
  - "site/src/pages"
  - "site/src/components"
  - "site/src/utils"
  - "site/src/data"
  - "site/src/gamification"
  - "scripts"
depends_on:
  - "/home/claude/gocharbon/AGENT.md"
  - "/home/claude/gocharbon/shipglowz_data/technical/site/README.md"
  - "/home/claude/gocharbon/shipglowz_data/technical/site/architecture.md"
supersedes: []
next_step: "/sf-docs update shipglowz_data/technical/site/context.md"
---

# CONTEXT — gocharbon

## Positionnement

GoCharbon est une plateforme éditoriale française pour entrepreneurs (site Astro static), orientée :
- parcours d'activation métier,
- catalogue d'outils qualifiés,
- tutoriels/actionnables,
- gamification de progression personnelle.

Le repo est principalement un site marketing/SEO + contenu, avec génération statique.

## Entrypoints

- `pnpm dev` / `pnpm start` → `astro dev`
- `pnpm build` → build de lancement (parcours + périmètre principal)
- `pnpm build:full` → build complet
- `pnpm preview` → prévisualisation du build

## Architecture réelle

### Couche route/page (Astro)
- `site/src/pages/index.astro` → home
- `site/src/pages/blog.astro` → liste blog
- `site/src/pages/outils.astro`, `site/src/pages/outils/[category].astro`, `site/src/pages/tag/[tag].astro` → navigation outil/tags
- `site/src/pages/parcours.astro`, `site/src/pages/parcours/[id].astro` → offre d'activation business
- `site/src/pages/quiz.astro`, `site/src/pages/quiz-rapide.astro`, `site/src/pages/quiz-avance.astro`
- `site/src/pages/progression.astro` + `site/src/pages/gamification.astro`
- `site/src/pages/[...slug].astro` → rendu d'article/fiches
- `site/src/pages/api/filter-posts.json.ts` → filtrage multi-tags (API statique + dynamique)
- `site/src/pages/feed.xml.js` → flux RSS

### Couche données et configuration
- `site/src/content.config.ts` définit deux collections Astro:
  - `posts` (slug glob, frontmatter étendu et validation Zod)
  - `parcours` (données YAML-like pour parcours)
- `site/src/data` contient la majorité du contenu Markdown + méta business (parcours, articles, notes)
- `site/src/config` centralise routes, site, tags, navigation, sections
- `site/src/utils` centralise logique métier partagée:
  - sélection/tagging contenu
  - scopes de build et filtres publication
  - taxonomy outil
  - pré-génération / cache de filtres
  - qualification metadata d'outils

### Couche UI
- `site/src/layouts` : shell commun et layout article
- `site/src/components/components` : composants Astro/JS
- `site/src/components/vue` : islands Vue 3 (quiz, progression, toggles)
- `site/src/components/ParcoursCallToAction.astro`, `site/src/gamification/*` pour la logique de parcours

### Couche gamification
- Stockage local via `localStorage` avec clés `charbon_*` (`site/src/gamification/storageKeys.ts`)
- Tracking d'XP/progression (`site/src/gamification/xp.ts`, `site/src/gamification/pathProgress.ts`)
- Sync optionnelle Convex côté navigateur (`site/src/gamification/convexSync.ts`) en fallback local
- Dépendance runtime partagée consommée sous le scope `@diane-winflowz/gamification`
- Source runtime actuelle: tarball GitHub figé sur commit dans `site/package.json`/`site/pnpm-lock.yaml`
- Source de vérité cible acceptée: GitHub Packages pour ce scope, une fois publication amont prouvée avec licence permissive explicite et métadonnées repository/publish cohérentes

### Couche outils/scripts
- `site/scripts/*.py|.ts|.mjs` : audits qualité, duplication, qualification, ordonnancement
- `skills/*/SKILL.md` : workflows de contenu dédiés (qualification/outils/article research)

## Contraintes métier clés

- La taxonomie de tags est hiérarchique (`site/src/components/tagHierarchy.ts`) et doit rester cohérente.
- Les flux de build doivent respecter les modes `PARCOURS_ONLY_BUILD` / `EXCLUDE_OUTILS_FROM_BUILD`.
- `AGENTS.md` et `shipglowz_data/technical/site/README.md` imposent un ton direct, anti-bullshit, en français.
- Les décisions de qualification locale ne doivent pas être inférées par branding.

## Invariants à surveiller

- Si la structure `site/src/content.config.ts` change, la logique de route/tags doit être réconciliée.
- Les changements de metadata outils impactent l'affichage public (badges, classement).
- Une route dynamique API doit rester compatible cache/static-generation actuelle pour ne pas casser le SEO.
- `shipglowz_data/technical/site/context-function-tree.md` doit être mis à jour pour tout hotspot fonctionnel nouveau.
