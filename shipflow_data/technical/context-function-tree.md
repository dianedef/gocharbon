---
artifact: artifact_context
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-04-26"
updated: "2026-04-27"
status: reviewed
source_skill: manual
scope: function_tree
owner: "dianedef"
confidence: "medium"
risk_level: "medium"
security_impact: "none"
docs_impact: "yes"
linked_systems: []
supersedes: []
evidence:
  - "src/pages/index.astro"
  - "src/pages/parcours/[id].astro"
  - "src/pages/api/filter-posts.json.ts"
  - "src/utils/static-responses.ts"
  - "src/utils/build-scope.ts"
  - "src/content.config.ts"
  - "src/data/parcoursData.ts"
  - "src/gamification/pathProgress.ts"
depends_on:
  - "/home/claude/gocharbon/AGENT.md"
  - "/home/claude/gocharbon/CONTEXT.md"
  - "/home/claude/gocharbon/shipflow_data/technical/context.md"
next_step: /sf-docs audit shipflow_data/technical/context-function-tree.md
# NOTE: This artifact was migrated from CONTEXT-FUNCTION-TREE.md
---
# CONTEXT-FUNCTION-TREE.md — gocharbon

## `src/pages` (routes principales)

- `src/pages/index.astro`
  - charge `posts` et données parcours
  - calcule métriques d'affichage (counts, signaux launch)
  - rend hero + cartes de preuve + liens de navigation
- `src/pages/parcours.astro`
  - génère liste des parcours (avec filtre launch)
  - oriente la navigation selon profil/entrées
- `src/pages/parcours/[id].astro`
  - `getStaticPaths` calculé depuis `learningPaths`
  - charge la fiche contenu `parcours/<id>`
  - prépare données de progression `PathProgressTracker`
- `src/pages/blog.astro`
  - liste `posts` filtrés par scope blog
- `src/pages/outils.astro`
  - page d'index d'outils
  - applique taxonomie outil + `getFeaturedToolsByCategory`
- `src/pages/outils/[category].astro`
  - routes statiques dynamiques par catégorie
  - affiche sous-catégories/outils
- `src/pages/tag/[tag].astro`
  - pré-génère routes pour tags racine via `getStaticPaths`
  - hydrate composant `FilterTags.vue`
- `src/pages/api/filter-posts.json.ts`
  - parse tags + pagination + portée
  - retourne JSON + `Cache-Control` différent statique/dynamique
- `src/pages/[...slug].astro`
  - SSR de chaque contenu métier
  - injecte bloc `toolQualification` dans `Post` layout
- `src/pages/quiz*.astro` et `src/pages/progression.astro`
  - orchestrent les parcours décisionnels et le suivi gamifié
- `src/pages/feed.xml.js`
  - génère flux RSS

## `src/layouts`

- `src/layouts/Default.astro` → shell global, metadata, nav, footer
- `src/layouts/Post.astro` → shell article + sidebar + metadata secondaire

## `src/components/components`

- `Button.astro`, `PostGrid.astro`, `PostSummaryCard*`, `RecentPosts`, `PostSideBar`
  - rendu listage et cellules d'article
- `FilterTags.vue` / `Tag` components
  - filtre côté client
- `ThemeToggle.astro`, `LocalFont.astro`, helpers UX
- `PostList`, `BaseHead`, `BaseFooter`, etc.

## `src/components/vue`

- `SentenceQuiz.vue` → island pour quiz court
- `PathProgressTracker.vue` → suivi des étapes parcours + XP
- `CharbonGamificationDashboard.vue` + `GamificationBar.vue`, `CharbonBadgeCard.vue`, `BrutalCheckbox.vue`
- logique de progression + animation + persistance locale

## `src/data`

- `parcoursData.ts` : définition des parcours (modules, étapes, progression)
- `parcoursSlugs.ts` : normalisation des slugs
- `profileTaxonomy.ts` : cartographie familles / arches profils
- `launchSignals.ts` : signaux de lancement pour mode restreint
- `tag-hierarchy` (dans `src/components/tagHierarchy.ts`) + fichiers markdown `src/data/*` (sections blog/outils/tutos)

## `src/utils`

- `build-scope.ts`
  - `isParcoursOnlyBuild()`, `isLaunchBuildPath()`, filtrage routes visibles
- `build-posts.ts`
  - visibilité build + exclusion `draft` / dates / outils
- `static-responses.ts`
  - logique de filtres tags + hiérarchie
- `tags.ts`, `tag-groups.ts`, `content-section.ts`
  - parsing/normalisation/tagging par scope
- `tool-qualification.ts`
  - types + calcul badge d'engagement
- `tool-taxonomy.ts`, `post-preview.ts`, `launch-build.ts`
  - taxonomy, prévisualisation API, post-build cleanup

## `src/gamification`

- `xp.ts` : calcul XP et niveaux
- `pathProgress.ts` : sérialisation progression parcours
- `convexSync.ts` : sync optionnelle vers endpoint Convex
- `storageKeys.ts` : clés localStorage et events
- `pathProgress.ts` : état local des étapes complétées

## Scripts (support métier)

- `scripts/audit_outils_content.py`, `audit_outils_qualification.py`
- `scripts/prune_outils_*`, `scripts/sync_outils_qualification_duplicates.py`
- `scripts/audit_parcours_content.mjs`, `scripts/qa_outils_qualification.py`
- `scripts/quiz` (build/maintenance de taxonomies) selon disponibilité

## Édition recommandée

- Pour une modification contenu : cibler `src/data/*` + `src/content.config.ts`.
- Pour une modification parcours : `src/data/parcours*`, `src/data/parcoursData.ts`, `src/pages/parcours/*`.
- Pour une modification filtres/SEO : `src/utils/static-responses.ts`, `src/utils/tags.ts`, `src/pages/api/filter-posts.json.ts`.
- Pour une modification gamification : `src/gamification/*`, `src/components/vue`.
