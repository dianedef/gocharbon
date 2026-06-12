---
artifact: verification_checklist
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-06-12"
updated: "2026-06-12"
status: draft
source_skill: 102-sf-start
scope: "gocharbon-gamification-dependency-hardening"
owner: "Diane"
confidence: medium
risk_level: high
security_impact: yes
docs_impact: yes
linked_systems:
  - "/home/claude/gocharbon/package.json"
  - "/home/claude/gocharbon/.npmrc"
  - "/home/claude/gocharbon/pnpm-lock.yaml"
  - "/home/claude/gocharbon/src/gamification/config.ts"
  - "/home/claude/gocharbon/src/components/vue/GamificationBar.vue"
  - "/home/claude/gocharbon/src/components/vue/CharbonGamificationDashboard.vue"
  - "/home/claude/gocharbon/src/components/vue/PathProgressTracker.vue"
depends_on:
  - artifact: "/home/claude/gocharbon/shipflow_data/workflow/specs/gocharbon-gamification-dependency-provenance-and-licensing-hardening.md"
    artifact_version: "1.0.0"
    required_status: ready
supersedes: []
evidence:
  - "`npm view @diane-winflowz/gamification --registry=https://npm.pkg.github.com` retourne `404` depuis ce workspace le 2026-06-12."
  - "`pnpm build` passe côté consumer après durcissement local."
  - "Le consumer reste volontairement sur un commit GitHub figé tant que la publication GitHub Packages et la licence explicite du package partagé ne sont pas prouvées."
next_step: "/103-sf-verify gocharbon gamification dependency provenance and licensing hardening"
---

# Checklist — durcissement dépendance gamification

## Statut actuel de cette checklist

- Localement vérifiable côté consumer: oui
- Vérification amont GitHub Packages depuis ce workspace: non prouvée
- Décision de sécurité actuelle: ne pas prétendre que la migration registry est terminée tant que le package amont n'expose pas la preuve requise

## Scénarios requis

### `deps-publishconfig-github-packages`

- [ ] Le package amont publié expose un scope GitHub Packages cohérent avec le consumer (`@diane-winflowz`).
- [ ] Le package amont expose un `repository.url` pointant vers le repository source réel.
- [ ] Le package amont expose une publication GitHub Packages prouvable (`publishConfig.registry` ou artefact équivalent lisible).
- [ ] La preuve est archivée dans le chantier avant migration du consumer hors tarball GitHub.

Preuve locale actuelle:
- `npm view @diane-winflowz/gamification version --registry=https://npm.pkg.github.com` retourne `404` depuis ce workspace le 2026-06-12.

### `deps-license-open-source-explicit`

- [ ] Le package amont publié expose un champ `license` explicite.
- [ ] La licence est permissive et OSI-compatible.
- [ ] La documentation consumer cite cette licence sans extrapolation.

Preuve locale actuelle:
- Le `package.json` installé depuis le tarball GitHub ne contient pas de champ `license`.

### `deps-no-opaque-github-tarball`

- [ ] `package.json` ne référence plus `github:dianedef/gamification`.
- [ ] `pnpm-lock.yaml` ne résout plus la dépendance via `github.com/dianedef/gamification/...`.
- [ ] La résolution se fait via GitHub Packages ou autre source explicitement acceptée par le chantier.

Statut actuel:
- Non atteint volontairement. Le consumer reste sur un commit GitHub figé tant que la publication GitHub Packages n'est pas prouvée.

### `ui-gamification-bar-renders`

- [ ] `pnpm build` passe avec la barre de gamification inchangée côté compilation.
- [ ] Une page article affiche toujours la barre et son toast sans erreur console en vérification manuelle.

### `ui-gamification-dashboard-renders`

- [ ] `pnpm build` passe avec le dashboard inchangé côté compilation.
- [ ] `/progression` ou la surface dashboard équivalente reste exploitable en vérification manuelle.

### `ui-path-progress-tracker-renders`

- [ ] `pnpm build` passe avec le tracker de parcours inchangé côté compilation.
- [ ] Une page parcours affiche toujours la progression et la complétion d'étapes en vérification manuelle.

## Commandes locales

```bash
rg -n '@diane-winflowz/gamification|github:dianedef/gamification|minimum-release-age|useGamification|fireBadgeConfetti|AchievementToast' package.json .npmrc pnpm-lock.yaml src shipflow_data
pnpm install --lockfile-only --ignore-scripts
pnpm build
```

## Verdict local attendu avant `/103-sf-verify`

- Consumer préparé pour GitHub Packages: oui
- Runtime actuel préservé: oui
- Aucune fausse preuve de publication/licence amont: oui
- Migration complète hors tarball GitHub: non, bloquée par preuve amont manquante
