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
  - "site/src/pages/index.astro"
  - "site/src/pages/parcours/[id].astro"
  - "site/src/pages/api/filter-posts.json.ts"
  - "site/src/utils/static-responses.ts"
  - "site/src/utils/build-scope.ts"
  - "site/src/content.config.ts"
  - "site/src/data/parcoursData.ts"
  - "site/src/gamification/pathProgress.ts"
depends_on:
  - "/home/claude/gocharbon/AGENT.md"
  - "/home/claude/gocharbon/CONTEXT.md"
  - "/home/claude/gocharbon/shipglows_data/technical/site/context.md"
next_step: /sf-docs audit shipglows_data/technical/site/context-function-tree.md
# NOTE: This artifact was migrated from CONTEXT-FUNCTION-TREE.md
---
# CONTEXT-FUNCTION-TREE.md — gocharbon

## `site/src/pages` (routes principales)

- `site/src/pages/index.astro`
  - charge `posts` et données parcours
  - calcule métriques d'affichage (counts, signaux launch)
  - rend hero + cartes de preuve + liens de navigation
- `site/src/pages/parcours.astro`
  - génère liste des parcours (avec filtre launch)
  - oriente la navigation selon profil/entrées
- `site/src/pages/parcours/[id].astro`
  - `getStaticPaths` calculé depuis `learningPaths`
  - charge la fiche contenu `parcours/<id>`
  - prépare données de progression `PathProgressTracker`
- `site/src/pages/blog.astro`
  - liste `posts` filtrés par scope blog
- `site/src/pages/outils.astro`
  - page d'index d'outils
  - applique taxonomie outil + `getFeaturedToolsByCategory`
- `site/src/pages/outils/[category].astro`
  - routes statiques dynamiques par catégorie
  - affiche sous-catégories/outils
- `site/src/pages/tag/[tag].astro`
  - pré-génère routes pour tags racine via `getStaticPaths`
  - hydrate composant `FilterTags.vue`
- `site/src/pages/api/filter-posts.json.ts`
  - parse tags + pagination + portée
  - retourne JSON + `Cache-Control` différent statique/dynamique
- `site/src/pages/[...slug].astro`
  - SSR de chaque contenu métier
  - injecte bloc `toolQualification` dans `Post` layout
- `site/src/pages/quiz*.astro` et `site/src/pages/progression.astro`
  - orchestrent les parcours décisionnels et le suivi gamifié
- `site/src/pages/feed.xml.js`
  - génère flux RSS

## `site/src/layouts`

- `site/src/layouts/Default.astro` → shell global, metadata, nav, footer
- `site/src/layouts/Post.astro` → shell article + sidebar + metadata secondaire

## `site/src/components/components`

- `Button.astro`, `PostGrid.astro`, `PostSummaryCard*`, `RecentPosts`, `PostSideBar`
  - rendu listage et cellules d'article
- `FilterTags.vue` / `Tag` components
  - filtre côté client
- `ThemeToggle.astro`, `LocalFont.astro`, helpers UX
- `PostList`, `BaseHead`, `BaseFooter`, etc.

## `site/src/components/vue`

- `SentenceQuiz.vue` → island pour quiz court
- `PathProgressTracker.vue` → suivi des étapes parcours + XP
- `CharbonGamificationDashboard.vue` + `GamificationBar.vue`, `CharbonBadgeCard.vue`, `BrutalCheckbox.vue`
- logique de progression + animation + persistance locale

## `site/src/data`

- `parcoursData.ts` : définition des parcours (modules, étapes, progression)
- `parcoursSlugs.ts` : normalisation des slugs
- `profileTaxonomy.ts` : cartographie familles / arches profils
- `launchSignals.ts` : signaux de lancement pour mode restreint
- `tag-hierarchy` (dans `site/src/components/tagHierarchy.ts`) + fichiers markdown `site/src/data/*` (sections blog/outils/tutos)

## `site/src/utils`

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

## `site/src/gamification`

- `xp.ts` : calcul XP et niveaux
- `pathProgress.ts` : sérialisation progression parcours
- `convexSync.ts` : sync optionnelle vers endpoint Convex
- `storageKeys.ts` : clés localStorage et events
- `pathProgress.ts` : état local des étapes complétées

## Scripts (support métier)

- `site/scripts/audit_outils_content.py`, `audit_outils_qualification.py`
- `site/scripts/prune_outils_*`, `site/scripts/sync_outils_qualification_duplicates.py`
- `site/scripts/audit_parcours_content.mjs`, `site/scripts/qa_outils_qualification.py`
- `site/scripts/quiz` (build/maintenance de taxonomies) selon disponibilité

## Édition recommandée

- Pour une modification contenu : cibler `site/src/data/*` + `site/src/content.config.ts`.
- Pour une modification parcours : `site/src/data/parcours*`, `site/src/data/parcoursData.ts`, `site/src/pages/parcours/*`.
- Pour une modification filtres/SEO : `site/src/utils/static-responses.ts`, `site/src/utils/tags.ts`, `site/src/pages/api/filter-posts.json.ts`.
- Pour une modification gamification : `site/src/gamification/*`, `site/src/components/vue`.
