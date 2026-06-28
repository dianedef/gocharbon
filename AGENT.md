---
artifact: agent_context
metadata_schema_version: "1.0"
artifact_version: "1.1.0"
project: "gocharbon"
created: "2026-04-26"
updated: "2026-05-11"
status: reviewed
source_skill: manual
scope: agent
owner: "dianedef"
confidence: "medium"
risk_level: "medium"
security_impact: "none"
docs_impact: "yes"
next_review: "2026-07-26"
linked_systems:
  - "Astro 5"
  - "Vue 3"
  - "UnoCSS"
  - "Satori / resvg-js"
  - "Static content collections"
evidence:
  - "README.md"
  - "CLAUDE.md"
  - "shipflow_data/branding/branding.md"
  - "shipflow_data/business/site/business.md"
  - "shipflow_data/technical/site/README.md"
  - "AGENTS.md compatibility symlink"
  - "package.json"
  - "astro.config.mjs"
  - "src/content.config.ts"
  - "Legacy AGENTS.md agent rules folded into this canonical entrypoint."
depends_on: []
supersedes: []
next_step: "/sf-docs update AGENT.md"
---

# AGENT — gocharbon

Ce document est le point d'entrée opérationnel pour démarrer une tâche dans ce dépôt.

## Ordre de lecture rapide (obligatoire)

1. Lire `CLAUDE.md` (contraintes humaines et règles d'écriture).
2. Lire `shipflow_data/technical/site/README.md` (conventions éditoriales).
3. Lire `shipflow_data/business/site/business.md` (positionnement produit/audience).
4. Lire ce document.
5. Lire ensuite `shipflow_data/technical/site/context.md`, `shipflow_data/technical/site/context-function-tree.md` et `shipflow_data/technical/site/architecture.md`.

## Priorités de la plateforme

- Gocharbon est un site **contenu/statique** Astro 5 avec sections de contenu métier, outils, tutoriels et parcours.
- Le ton éditorial, la taxonomie et la qualification d'outils sont des actifs centraux.
- Les changements de contenu et de structure doivent rester alignés avec :
  - `src/data`
  - `src/content.config.ts`
  - Les scripts d'audit/qualification
  - Les contrats de routes/rendus dans `src/pages/*`

## Règles de route de travail

- Avant toute modification :
  - Identifier le périmètre (`contenu`, `outils`, `parcours`, `gamification`, `scripts`).
  - Vérifier la doc principale pertinente (AGENT/CONTEXT/CONTEXT-FUNCTION-TREE/ARCHITECTURE).
- Pour les tâches éditoriales :
  - Toujours respecter les contraintes de ton, source, preuve, et anti-marketing.
  - Ne pas modifier l'essence technique sans raison métier explicite.
- Pour la qualification des outils :
  - Suivre ce fichier + `skills/outils-qualification-locale/SKILL.md`.
  - Utiliser les scripts dédiés (`qa`, `audit`, `prioritize`) avant de valider des lots.
  - Mettre à jour uniquement les champs de frontmatter de qualification sauf demande explicite de réécriture éditoriale.
  - Renseigner `sourcesVerification`.
  - Préférer `indetermine` ou `partiel` quand la preuve est incomplète.
  - Garder une fiche canonique par outil par défaut; maintenir deux fiches seulement quand l'intention de recherche est vraiment différente.
- Pour la maintenance de performance :
  - Vérifier l'impact de build (scripts/build mode) avant d'étendre les pré-rendus.

## Points d'entrée utiles par tâche

- Réglages de taxonomie, frontmatter, qualification : `src/utils`, `src/data`, `scripts`, `skills/*`.
- Nouveau format de parcours/quiz : `src/data/parcours*`, `src/pages/parcours*`, `src/components/vue/PathProgressTracker.vue`.
- Modification de routes/page list : `src/pages` puis `src/layouts`.
- Déploiement / build : `package.json`, `astro.config.mjs`, `src/utils/launch-build.ts`.

## Contraintes non négociables

- `section` taxonomie `blog/outils/tutos/parcours` doit rester cohérente.
- Ne pas inventer de label "French" sans preuve.
- Ne pas réintroduire `apps` comme section ou route.
- Traiter catégorisation de contenu, qualification locale et niveau de responsabilité comme des décisions séparées.
- Les métadonnées de qualification influencent un badge public (`Engagement français`) : rester prudent.
- Si la règle métier change, mettre à jour la doc (`AGENT.md`, `shipflow_data/technical/site/context.md`, `shipflow_data/technical/site/context-function-tree.md`, `shipflow_data/technical/site/architecture.md`) avant de valider.

## Mémoire éditoriale

- GoCharbon est porté par Diane, fondatrice française, product-minded, avec une voix humaine, claire, directe et anti-bullshit.
- Éviter la prose IA, le storytelling startup générique et les promesses gonflées.
- Pour les contenus founder, marque ou manifeste, partir de `src/data/_founder.md` et `src/data/_vision.md` quand ils existent.
