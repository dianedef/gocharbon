---
artifact: technical_context
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-04-26"
updated: "2026-04-27"
status: reviewed
source_skill: manual
scope: technical
owner: "dianedef"
confidence: "medium"
risk_level: "medium"
security_impact: "none"
docs_impact: "yes"
evidence:
  - "package.json"
  - "astro.config.mjs"
  - "src/content.config.ts"
  - "src/pages"
  - "src/components"
  - "src/utils"
  - "src/data"
  - "src/gamification"
  - "scripts"
depends_on:
  - "/home/claude/gocharbon/AGENT.md"
  - "/home/claude/gocharbon/shipflow_data/technical/README.md"
  - "/home/claude/gocharbon/AGENTS.md"
supersedes: []
next_step: "/sf-docs update CONTEXT.md"
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
- `src/pages/index.astro` → home
- `src/pages/blog.astro` → liste blog
- `src/pages/outils.astro`, `src/pages/outils/[category].astro`, `src/pages/tag/[tag].astro` → navigation outil/tags
- `src/pages/parcours.astro`, `src/pages/parcours/[id].astro` → offre d'activation business
- `src/pages/quiz.astro`, `src/pages/quiz-rapide.astro`, `src/pages/quiz-avance.astro`
- `src/pages/progression.astro` + `src/pages/gamification.astro`
- `src/pages/[...slug].astro` → rendu d'article/fiches
- `src/pages/api/filter-posts.json.ts` → filtrage multi-tags (API statique + dynamique)
- `src/pages/feed.xml.js` → flux RSS

### Couche données et configuration
- `src/content.config.ts` définit deux collections Astro:
  - `posts` (slug glob, frontmatter étendu et validation Zod)
  - `parcours` (données YAML-like pour parcours)
- `src/data` contient la majorité du contenu Markdown + méta business (parcours, articles, notes)
- `src/config` centralise routes, site, tags, navigation, sections
- `src/utils` centralise logique métier partagée:
  - sélection/tagging contenu
  - scopes de build et filtres publication
  - taxonomy outil
  - pré-génération / cache de filtres
  - qualification metadata d'outils

### Couche UI
- `src/layouts` : shell commun et layout article
- `src/components/components` : composants Astro/JS
- `src/components/vue` : islands Vue 3 (quiz, progression, toggles)
- `src/components/ParcoursCallToAction.astro`, `src/gamification/*` pour la logique de parcours

### Couche gamification
- Stockage local via `localStorage` avec clés `charbon_*` (`src/gamification/storageKeys.ts`)
- Tracking d'XP/progression (`src/gamification/xp.ts`, `src/gamification/pathProgress.ts`)
- Sync optionnelle Convex côté navigateur (`src/gamification/convexSync.ts`) en fallback local

### Couche outils/scripts
- `scripts/*.py|.ts|.mjs` : audits qualité, duplication, qualification, ordonnancement
- `skills/*/SKILL.md` : workflows de contenu dédiés (qualification/outils/article research)

## Contraintes métier clés

- La taxonomie de tags est hiérarchique (`src/components/tagHierarchy.ts`) et doit rester cohérente.
- Les flux de build doivent respecter les modes `PARCOURS_ONLY_BUILD` / `EXCLUDE_OUTILS_FROM_BUILD`.
- `AGENTS.md` et `shipflow_data/technical/README.md` imposent un ton direct, anti-bullshit, en français.
- Les décisions de qualification locale ne doivent pas être inférées par branding.

## Invariants à surveiller

- Si la structure `src/content.config.ts` change, la logique de route/tags doit être réconciliée.
- Les changements de metadata outils impactent l'affichage public (badges, classement).
- Une route dynamique API doit rester compatible cache/static-generation actuelle pour ne pas casser le SEO.
- `shipflow_data/technical/context-function-tree.md` doit être mis à jour pour tout hotspot fonctionnel nouveau.
