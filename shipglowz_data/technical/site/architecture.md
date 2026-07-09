---
artifact: architecture_context
metadata_schema_version: "1.0"
artifact_version: "1.0.1"
project: "gocharbon"
created: "2026-04-26"
updated: "2026-06-12"
status: reviewed
source_skill: manual
scope: architecture
owner: "dianedef"
confidence: "medium"
risk_level: "medium"
security_impact: "low"
docs_impact: "yes"
evidence:
  - "README.md"
  - "CLAUDE.md"
  - "shipglowz_data/branding/branding.md"
  - "shipglowz_data/business/business.md"
  - "shipglowz_data/technical/site/README.md"
  - "site/package.json"
  - "site/astro.config.mjs"
  - "site/src/content.config.ts"
  - "site/src/components"
  - "site/src/data"
  - "site/src/utils"
linked_systems:
  - "AGENT.md"
  - "shipglowz_data/technical/site/context-function-tree.md"
  - "README.md"
  - "CLAUDE.md"
  - "shipglowz_data/branding/branding.md"
  - "shipglowz_data/business/business.md"
  - "shipglowz_data/technical/site/README.md"
  - "site/src/content.config.ts"
  - "site/src/components"
  - "site/src/utils"
  - "site/src/data"
  - "site/src/gamification"
  - "scripts"
external_dependencies:
  - "Astro 6 (static build, file-based routes)"
  - "Vue 3.5 via @astrojs/vue"
  - "UnoCSS 66"
  - "Node.js + pnpm"
  - "@diane-winflowz/gamification"
  - "satori / resvg-js"
  - "Sharp"
invariants:
  - "Le mode build doit respecter les filtres `PARCOURS_ONLY_BUILD` et `EXCLUDE_OUTILS_FROM_BUILD`."
  - "Les collections de contenu (`posts`, `parcours`) restent source de vérité pour les pages dynamiques."
  - "La qualification locale d'outil ne doit pas être inférée sans preuve."
  - "La structure de tags hiérarchique doit rester cohérente pour la recherche, l'indexation et les filtres."
  - "La progression gamifiée doit conserver la source locale de vérité (`localStorage`) avec sync optionnelle."
  - "La navigation principale doit toujours exposer les sections `blog`, `outils`, `tutos`, `parcours`."
depends_on:
  - "/home/claude/gocharbon/AGENT.md"
  - "/home/claude/gocharbon/shipglowz_data/business/business.md"
  - "/home/claude/gocharbon/shipglowz_data/branding/branding.md"
  - "/home/claude/gocharbon/shipglowz_data/gtm/site/gtm.md"
  - "/home/claude/gocharbon/shipglowz_data/technical/site/README.md"
  - "/home/claude/gocharbon/shipglowz_data/technical/site/context-function-tree.md"
supersedes: []
next_review: "2026-07-26"
next_step: /sf-docs audit shipglowz_data/technical/site/context.md
---

# Architecture — gocharbon

## 1) Vue d'ensemble

GoCharbon est une application de génération de contenu statique (SSG) basée sur Astro 6, avec pages dynamiques pré-rendues et islands Vue 3 pour les interactions ciblées.

```text
Auteur/éditeur (site/src/data + compétences SKILL)
        │
        ▼
Astro Content Collections (site/src/content.config.ts)
        │
        ▼
Routes Astro (`site/src/pages/*`) ──────┬────> Layouts (`site/src/layouts/*`)
                                  │
                                  └────> Islands Vue (`site/src/components/vue/*`)
                                           │
                                           ▼
Gamification locale (localStorage + xp/pathProgress)
```

## 2) Couche de contenu

- `site/src/content.config.ts` :
  - collection `posts` : frontmatter validé (tags, auteur, section, métadonnées d'outils)
  - collection `parcours` : définition des profils/séries d'activation
- `site/src/data` :
  - fichiers markdown éditoriaux (hundreds of files)
  - données structurées de navigation (`parcoursData`, `profileTaxonomy`, `launchSignals`)
- `site/scripts/` :
  - audits, normalisation, qualification, priorisation et qualité des contenus

## 3) Système de build/rendus

- `site/astro.config.mjs` active :
  - intégration Vue
  - UnoCSS
  - sitemap
  - intégration personnalisée `createParcoursLaunchBuildIntegration`
- Flux de build principal :
  1. Collecte `posts` + `parcours`
  2. Génération routes statiques via `getStaticPaths`
  3. Application filtres de visibilité:
     - suppression `draft`
     - retrait des posts futurs
     - modes spéciaux de lancement
  4. Exécution hooks de fin de build pour pruner la sortie en mode lancement

## 4) Règles de fonctionnement métier

### 4.1 Parcours / Build launch
- Env var `PARCOURS_ONLY_BUILD=1` active le périmètre réduit.
- Les routes non-prioritaires peuvent être supprimées ou désactivées côté HTML.
- Les XML du sitemap sont filtrés pour conserver un index cohérent.

### 4.2 Filtres tags
- `site/src/components/tagHierarchy.ts` + `static-responses.ts` : logique hiérarchique et normalisation
- `site/src/pages/api/filter-posts.json.ts` :
  - pré-génération des combinaisons courantes (`common combinations`)
  - cache-control long pour routes pré-générées, court pour routes dynamiques

### 4.3 Qualification outil
- Les champs `qualificationLocale`, `ancrageEconomique`, `niveauResponsabilite`...
  orientent le badge public “Engagement français”.
- Les scripts de skill `outils-qualification-locale` opèrent sur ces champs.

## 5) Gamification / progression

- Composants Vue (`PathProgressTracker`, `CharbonGamificationDashboard`) lisent/écrivent dans `localStorage`.
- Calcul XP et niveaux dans `site/src/gamification/xp.ts`.
- Option de synchronisation distante via endpoints Convex (facultatif), avec fallback local robuste.
- Les surfaces runtime consomment `@diane-winflowz/gamification` comme brique partagée externe.
- Tant que la publication GitHub Packages n'est pas prouvée avec licence permissive explicite, le consumer reste sur un commit GitHub figé et documenté, sans migration de runtime vers le registry.
- La cible validée reste un package GitHub Packages scoped, lié à son repository source et publiant des métadonnées de licence exploitables.

## 6) Dépendances d'exécution

- `pnpm` (workflow recommandé), Node, TypeScript.
- `@diane-winflowz/gamification` : dépendance runtime partagée, actuellement résolue via commit GitHub figé; migration vers GitHub Packages en attente de preuve amont
- `sharp`/`satori` pour génération d’assets/image dynamiques OG.
- CDN et cache HTTP sur la route API en fonction du mode de routage.

## 7) Risques techniques

- Le couplage entre frontmatter, taxonomie tags et scripts de build est sensible :
  une incohérence casse routage, filtrage et sitemap.
- Le build launch manipule la sortie HTML ; les règles doivent rester testées sur la surface de production attendue.
- Les modifications de qualification d'outil ont un impact direct sur badge/UX et conformité éditoriale.
