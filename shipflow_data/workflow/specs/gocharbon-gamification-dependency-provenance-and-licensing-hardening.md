---
artifact: spec
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-06-12"
created_at: "2026-06-12 12:56:09 UTC"
updated: "2026-06-12"
updated_at: "2026-06-12 16:00:47 UTC"
status: ready
source_skill: 100-sf-spec
source_model: "GPT-5 Codex"
scope: "gocharbon-gamification-dependency-provenance-and-licensing-hardening"
owner: "Diane"
confidence: medium
user_story: "En tant que mainteneuse de GoCharbon, je veux durcir la provenance, la licence et la stratégie d'approvisionnement de la dépendance gamification afin que la surface runtime reste publiable, maintenable et défendable côté supply chain."
risk_level: high
security_impact: yes
docs_impact: yes
linked_systems:
  - "/home/claude/gocharbon/package.json"
  - "/home/claude/gocharbon/pnpm-lock.yaml"
  - "/home/claude/gocharbon/.npmrc"
  - "/home/claude/gocharbon/src/gamification/config.ts"
  - "/home/claude/gocharbon/src/components/vue/GamificationBar.vue"
  - "/home/claude/gocharbon/src/components/vue/CharbonGamificationDashboard.vue"
  - "/home/claude/gocharbon/src/components/vue/PathProgressTracker.vue"
  - "/home/claude/gocharbon/shipflow_data/technical/architecture.md"
  - "/home/claude/gocharbon/shipflow_data/technical/context.md"
depends_on:
  - artifact: "/home/claude/gocharbon/shipflow_data/business/business.md"
    artifact_version: "1.0.0"
    required_status: reviewed
  - artifact: "/home/claude/gocharbon/shipflow_data/technical/context.md"
    artifact_version: "1.0.1"
    required_status: reviewed
  - artifact: "/home/claude/gocharbon/shipflow_data/technical/architecture.md"
    artifact_version: "1.0.0"
    required_status: reviewed
supersedes: []
evidence:
  - "Chantier potentiel: durcir la provenance et la conformité de la dépendance gamification."
  - "`package.json` référence `@diane-winflowz/gamification` via `github:dianedef/gamification`."
  - "`pnpm-lock.yaml` verrouille un tarball GitHub `codeload.github.com/dianedef/gamification/tar.gz/35a9f64a8eb03ca6774413beb8ebd92b300ec3d4`."
  - "`license-checker` remonte `@diane-winflowz/gamification@0.1.0` avec `licenses: UNKNOWN`."
  - "La dépendance est importée dans `src/gamification/config.ts`, `src/components/vue/GamificationBar.vue`, `src/components/vue/CharbonGamificationDashboard.vue` et `src/components/vue/PathProgressTracker.vue`."
  - "`.npmrc` contient `minimum-release-age=10080`, signalé comme option inconnue par `npm`."
  - "La doc projet mentionne encore Astro 5 alors que `package.json` est sur Astro 6."
next_step: "publish/prove @diane-winflowz/gamification on GitHub Packages with explicit permissive license, then rerun /103-sf-verify"
---
# Title

GoCharbon — durcir la provenance et la conformité de la dépendance gamification

## Status

ready

## User Story

En tant que mainteneuse de GoCharbon, je veux durcir la provenance, la licence et la stratégie d'approvisionnement de la dépendance gamification afin que la surface runtime reste publiable, maintenable et défendable côté supply chain.

## Minimal Behavior Contract

Le chantier doit remplacer l'approvisionnement actuel par un package npm scoped partagé, publié proprement sur GitHub Packages, lié à son repository source et porteur d'une licence open source permissive explicite, idéalement MIT ou équivalent OSI permissif. GoCharbon doit continuer à fournir les mêmes comportements visibles de gamification (badges, confetti, streak, progression, XP, lecture) via cette dépendance partagée sans mélange durable avec le tarball GitHub opaque actuel. En cas d'absence de licence ouverte explicite ou d'impossibilité de publication propre, le chantier doit bloquer le maintien runtime actuel et produire une mitigation de retrait ou de remplacement, pas un statu quo implicite. Le cas limite facile à rater est la conservation d'imports runtime compatibles côté code alors que la résolution dépendance ou la provenance package reste non défendable.

## Success Behavior

- Une source de vérité unique explique d'où vient la brique gamification, sous quelle licence elle est utilisable, comment elle est versionnée, et pourquoi cette stratégie est acceptable pour GoCharbon.
- Les imports runtime de gamification pointent tous vers la stratégie retenue sans mélange durable entre tarball GitHub opaque et code local/registry.
- Le build `pnpm build` ou `pnpm build:full` continue à produire les surfaces gamification sans casse de typage ou de bundle.
- La documentation technique du projet ne contredit plus l'état réel du stack quand ce chantier touche la stratégie dépendances/runtime.

## Error Behavior

- Si la licence du package amont ne peut pas être prouvée, le chantier ne valide pas un simple commentaire de dette; il doit soit bloquer le maintien en runtime, soit documenter une mitigation bornée avec propriétaire et sortie explicite.
- Si la migration casse les hooks `useGamification`, `fireBadgeConfetti`, `AchievementToast` ou les types `Badge`, le chantier reste incomplet tant que les composants consommateurs ne sont pas réalignés.
- Si une solution de remplacement impose un comportement différent pour les données `localStorage` ou l'XP, la compatibilité ou la migration doit être documentée.

## Problem

GoCharbon embarque en production une dépendance runtime critique pour sa gamification depuis un tarball GitHub figé (`github:dianedef/gamification`) sans métadonnée de licence exploitable par l'outillage et sans contrat de provenance suffisamment documenté dans le repo. Cette situation crée un risque P1 de conformité et de confiance supply chain: on peut reconstruire l'état technique par le lockfile, mais pas défendre proprement la chaîne d'approvisionnement, la licence, ni la maintenance future. Le problème est aggravé par le fait que cette dépendance est réellement câblée dans plusieurs composants Vue visibles et dans la configuration gamification, donc la dette n'est ni théorique ni purement documentaire.

## Solution

Créer un chantier de durcissement dédié qui republie `@diane-winflowz/gamification` comme package npm scoped partagé sur GitHub Packages, avec licence permissive explicite, repository lié, et consommation propre depuis GoCharbon. Le chantier inclut la suppression du tarball GitHub opaque, la remise en cohérence de la configuration pnpm/GitHub Packages, et l'alignement de la documentation technique associée, y compris le warning `.npmrc` et la dérive Astro 5/6 quand ils restent dans le périmètre dépendances.

## Scope In

- Stratégie de provenance/licence/versioning pour `@diane-winflowz/gamification`.
- Publication et consommation via GitHub Packages comme source de vérité runtime partagée.
- Mise à jour des fichiers d'approvisionnement et de résolution: `package.json`, `pnpm-lock.yaml`, `.npmrc` si nécessaire.
- Réalignement des consommateurs runtime dans `src/gamification/*` et `src/components/vue/*` touchés par la stratégie retenue.
- Mise à jour des docs techniques/fonctionnelles qui décrivent la dépendance ou le stack runtime (`CLAUDE.md`, `shipflow_data/technical/context.md`, `shipflow_data/technical/architecture.md`, éventuellement README si impacté).
- Vérification du build et de la continuité fonctionnelle minimale sur les surfaces gamification.

## Scope Out

- Refonte UX ou design de la gamification.
- Refonte du modèle métier badges/XP/parcours.
- Migration générale des dépendances non liées à ce chantier.
- Reconfiguration CI/CD globale en dehors de ce qui est strictement nécessaire pour la stratégie retenue.
- Réécriture fonctionnelle profonde du package amont hors nécessité directe pour sécuriser provenance/licence/utilisation.

## Constraints

- Ne pas laisser un état hybride durable où certains imports utilisent encore le tarball GitHub opaque et d'autres un remplacement local non documenté.
- La dépendance doit rester partagée, pas internalisée dans GoCharbon.
- GitHub Packages est la source de vérité acceptée pour cette brique runtime.
- Le package publié doit exposer une licence open source permissive explicite; préférence MIT, mais toute licence permissive OSI-compatible documentée est acceptable.
- Préserver les comportements utilisateurs actuels des barres, dashboard, badges et parcours, sauf décision explicite et documentée de retrait.
- Pas d'upgrade majeur opportuniste non requis pour ce chantier.
- La solution doit rester compatible avec le workflow `pnpm` du repo et les versions Node/pnpm déjà pinées.
- Toute affirmation de licence ou de provenance doit être prouvée par un artefact lisible depuis le repo cible ou la dépendance retenue, pas par supposition.

## Test Contract

- surface: Astro 6 + Vue 3.5 + dependency/runtime + docs/config mixed
- proof_profile:
  - dependency-resolution
  - build
  - source-consumer
  - manual-browser
- proof_order:
  1. package provenance and license proof
  2. dependency resolution and install proof
  3. build proof
  4. source-consumer proof
  5. manual browser proof
- checklist_path: `shipflow_data/workflow/test-checklists/gocharbon-gamification-dependency-hardening.md`
- required_scenario_ids:
  - `deps-publishconfig-github-packages`
  - `deps-license-open-source-explicit`
  - `deps-no-opaque-github-tarball`
  - `ui-gamification-bar-renders`
  - `ui-gamification-dashboard-renders`
  - `ui-path-progress-tracker-renders`
- required_results:
  - `package.json` resolves the shared package through GitHub Packages-compatible metadata and no longer via `github:` tarball.
  - Published package source of truth exposes an explicit permissive open-source license and repository link.
  - Lockfile/install path resolves cleanly without opaque git tarball sourcing.
  - `pnpm build` passes on the affected repo state.
  - Runtime consumers still compile and render the expected gamification surfaces.
- exception_with_proof:
  - Manual browser proof may be deferred only if local runtime launch is unavailable and build plus source-consumer proof both pass, with the missing manual scenario listed explicitly for `/103-sf-verify`.
- exception_without_proof:
  - None.

## Dependencies

- `@diane-winflowz/gamification` est aujourd'hui une dépendance runtime externe via tarball GitHub.
- `vue@3.5.34`, `astro@^6.3.7`, `@astrojs/vue@6.0.1`, `pnpm@8.6.0`.
- Fresh docs verdict: `fresh-docs checked`.
- Official sources consulted for this spec:
  - GitHub Docs, `Working with the npm registry`: GitHub Packages supports publishing/installing npm packages through `https://npm.pkg.github.com`, requires scoped package names, and expects matching `repository` metadata plus registry mapping.
  - pnpm docs, `pnpm publish`: `pnpm publish` is native in v11+, supports `publishConfig`, `--dry-run`, and package publication workflows from pnpm directly.
  - pnpm docs, `Settings (pnpm-workspace.yaml)` / supply-chain docs: `minimumReleaseAge` is a pnpm setting, not a generic npm config concern in modern pnpm config layout.

## Invariants

- La gamification reste une couche locale de progression reposant sur `localStorage` avec sync Convex optionnelle.
- Les composants existants continuent à pouvoir consommer les concepts `Badge`, confetti, progression lecteur, XP et parcours.
- La navigation principale et les routes de contenu ne changent pas à cause de ce chantier.
- Les docs techniques ne doivent pas présenter un état Astro/dépendances obsolète après clôture du chantier.

## Links & Consequences

- `src/gamification/config.ts` fixe le contrat de badges et d'options de la lib.
- `src/components/vue/GamificationBar.vue`, `src/components/vue/CharbonGamificationDashboard.vue`, `src/components/vue/PathProgressTracker.vue` dépendent directement des exports du package.
- `shipflow_data/technical/context.md` et `shipflow_data/technical/architecture.md` décrivent la couche gamification et la dépendance externe.
- Le warning `.npmrc` autour de `minimum-release-age` touche la crédibilité de la posture supply chain si l'équipe utilise aussi `npm` pour certains diagnostics.

## Documentation Coherence

- Mettre à jour toute doc qui cite encore Astro 5 si le chantier modifie ou confirme la base Astro 6.
- Documenter explicitement la stratégie finale de la dépendance gamification, sa licence, sa provenance et la raison de ce choix.
- Si la dépendance est internalisée ou remplacée, supprimer les mentions obsolètes de package externe dans les docs techniques.
- Si la dépendance reste externe via package registry, documenter le chemin de publication/versionning attendu.

## Edge Cases

- Le package amont peut avoir une licence réelle mais absente/mal publiée: la spec doit exiger une preuve exploitable, pas seulement une conviction.
- L'internalisation peut casser les types `Badge` ou `GamificationOptions` importés dans le code TypeScript sans casser immédiatement le build métier.
- Un lockfile propre peut coexister avec une provenance juridiquement ou opérationnellement non défendable.
- Corriger uniquement `.npmrc` ou la doc Astro sans traiter la dépendance runtime laisserait intact le principal risque P1.
- La solution retenue peut devoir migrer des noms d'import ou ré-exporter une API de compatibilité pour limiter le blast radius.

## Implementation Tasks

1. Établir le contrat cible de provenance.
   - Formaliser la cible: package partagé publié via GitHub Packages.
   - Exiger une licence permissive explicite sur le package source et des métadonnées `repository` cohérentes.
   - Documenter la décision et les invariants rejetant l'internalisation locale pour GoCharbon.
2. Réparer l'approvisionnement dépendance.
   - Mettre à jour `package.json`, `pnpm-lock.yaml`, et la configuration package manager pour refléter la consommation via GitHub Packages.
   - Éliminer le tarball GitHub opaque.
   - Déplacer ou corriger `minimum-release-age` selon le support pnpm réel retenu par le repo.
3. Réaligner les consommateurs runtime.
   - Mettre à jour `src/gamification/config.ts` et les composants Vue qui importent le package.
   - Garantir une API de compatibilité suffisante pour `useGamification`, `AchievementToast`, `fireBadgeConfetti`, `Badge`, `GamificationOptions`.
4. Réaligner la documentation.
   - Corriger `CLAUDE.md`, `shipflow_data/technical/context.md`, `shipflow_data/technical/architecture.md`, et tout autre contrat touché.
   - Ajouter une note explicite sur la provenance/licence/maintenance de la brique gamification.
5. Vérifier.
   - Prouver l'absence de dépendance ou de référence obsolète via recherche ciblée.
   - Faire passer le build et un contrôle manuel minimal des surfaces gamification.

## Acceptance Criteria

- Une stratégie unique et défendable existe pour la brique gamification runtime: package partagé publié via GitHub Packages.
- Le repo ne dépend plus d'une provenance GitHub opaque non justifiée pour cette brique.
- La licence du package partagé est explicite, open source permissive, et documentée dans les artefacts pertinents.
- Les composants gamification compilent et conservent leur comportement attendu.
- Les docs techniques ne disent plus Astro 5 si le code est en Astro 6.
- Le warning `.npmrc` est soit supprimé/corrigé, soit explicitement assumé avec justification documentée.
- Le chantier fournit assez de contexte pour qu'un agent frais implémente et vérifie sans relire l'audit précédent.

## Test Strategy

- Rechercher tous les imports et références:
  - `rg -n '@diane-winflowz/gamification|gamification_charbon|useGamification|fireBadgeConfetti|AchievementToast' src package.json pnpm-lock.yaml shipflow_data`
- Vérifier les métadonnées package partagées:
  - `name`, `repository`, `license`, `publishConfig.registry`, scope GitHub Packages, et absence de source `github:` dans le consumer final.
- Vérifier la résolution dépendance:
  - commande d'installation ou lockfile appropriée selon la stratégie retenue.
- Vérifier le build:
  - `pnpm build` minimum; `pnpm build:full` si le chantier touche des surfaces hors périmètre launch.
- Vérifier manuellement:
  - page progression/dashboard
  - une page article avec barre gamification
  - une page parcours avec tracker d'étapes

## Risks

- Risque principal: traiter la doc et non la vraie dette runtime.
- Risque de régression: casser les exports/types de la brique gamification et donc les composants Vue.
- Risque produit: retirer la dépendance sans préserver l'expérience lecture/progression.
- Risque de faux vert: build OK mais surface manuelle gamification cassée ou vide.
- Risque de maintenance: internaliser du code sans documenter sa source et sa stratégie d'évolution.

## Execution Notes

- Le chantier vient du `Chantier potentiel` ouvert par `402-sf-deps` le 2026-06-12.
- Ce chantier est distinct de `gocharbon-design-system-authority-hardening.md`.
- Le scope doit rester centré sur la brique gamification et ses métadonnées/runtime proches, pas dériver en audit dépendances global.
- Fichiers à relire d'abord:
  - `package.json`
  - `.npmrc`
  - `pnpm-lock.yaml`
  - `src/gamification/config.ts`
  - `src/components/vue/GamificationBar.vue`
  - `src/components/vue/CharbonGamificationDashboard.vue`
  - `src/components/vue/PathProgressTracker.vue`
  - `shipflow_data/technical/context.md`
  - `shipflow_data/technical/architecture.md`
- Commandes de validation à enchaîner:
  - recherche ciblée `rg`
  - résolution/installation dépendance
  - `pnpm build`
  - preuve manuelle navigateur selon la checklist
- Stop conditions:
  - ne pas continuer si la licence du package partagé reste absente ou non permissive
  - ne pas continuer si la publication GitHub Packages ne peut pas être configurée proprement
  - ne pas continuer si la dépendance finale reste résolue via `github:` tarball opaque

## Open Questions

None.

## Skill Run History

| Date UTC | Skill | Model | Action | Result | Next step |
|----------|-------|-------|--------|--------|-----------|
| 2026-06-12 12:56:09 UTC | 100-sf-spec | GPT-5 Codex | Created spec from 402-sf-deps chantier potentiel and repo audit evidence | Spec created in draft | /101-sf-ready gocharbon gamification dependency provenance and licensing hardening |
| 2026-06-12 12:58:23 UTC | 101-sf-ready | GPT-5 Codex | Reviewed readiness gate for dependency provenance chantier | Not ready; unresolved sourcing decisions and incomplete proof contract | /100-sf-spec gocharbon gamification dependency provenance and licensing hardening |
| 2026-06-12 14:26:45 UTC | 100-sf-spec | GPT-5 Codex | Updated spec after operator decisions on shared ownership, GitHub Packages, and permissive open license requirement | Spec revised for renewed readiness review | /101-sf-ready gocharbon gamification dependency provenance and licensing hardening |
| 2026-06-12 14:28:22 UTC | 101-sf-ready | GPT-5 Codex | Re-ran readiness gate after operator decisions and proof-contract hardening | Ready | /102-sf-start gocharbon gamification dependency provenance and licensing hardening |
| 2026-06-12 15:44:00 UTC | 001-sf-build | GPT-5 Codex | Tried delegated sequential execution with Spark subagent as requested | Blocked; requested `gpt-5.3-codex-spark` subagent hit provider usage limit before file work started | user decision: allow another subagent model or wait for Spark reset |
| 2026-06-12 15:57:02 UTC | 102-sf-start | GPT-5 Codex | Hardened the consumer-side dependency contract, `.npmrc`, docs, and verification checklist without faking upstream package publication | Partial; runtime preserved on pinned GitHub commit, but GitHub Packages publication and explicit permissive license are still unproven upstream | upstream package publication proof then rerun /102-sf-start or continue with /103-sf-verify as partial |
| 2026-06-12 15:59:59 UTC | 001-sf-build | GPT-5 Codex | Continued delegated sequential execution with a non-Spark Codex worker after provider-limit degradation | Partial; consumer-side hardening completed and verified locally, but the upstream shared package publication/licensing proof is still missing | /103-sf-verify gocharbon gamification dependency provenance and licensing hardening |
| 2026-06-12 15:59:59 UTC | 103-sf-verify | GPT-5 Codex | Verified local implementation, build, metadata, and checklist against the ready spec | Partial; local consumer/doc hardening is verified, but upstream GitHub Packages publication and explicit permissive license proof are still missing, and manual browser scenarios remain unrun | /104-sf-end gocharbon gamification dependency provenance and licensing hardening |
| 2026-06-12 16:00:47 UTC | 104-sf-end | GPT-5 Codex | Closed the work session without ship by updating trackers and changelog to match the verified proof level | Deferred; local hardening is recorded, but the chantier remains open until upstream package publication/licensing proof and manual runtime scenarios are completed | publish/prove @diane-winflowz/gamification on GitHub Packages with explicit permissive license, then rerun /103-sf-verify |
| 2026-06-12 16:31:21 UTC | 309-sf-tasks | GPT-5 Codex | Reclassified the remaining gamification dependency provenance work as deferred backlog at user request | Done | Revisit later only when ready to publish or prove the shared package provenance and license |

## Current Chantier Flow

- 100-sf-spec: complete
- 101-sf-ready: ready
- 102-sf-start: partial
- 103-sf-verify: partial
- 104-sf-end: deferred
- 005-sf-ship: pending
