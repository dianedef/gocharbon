---
artifact: verification
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-08-12"
updated: "2026-08-12"
status: in_progress
source_skill: sg-design
scope: cross-surface-design-token-system
owner: "Diane"
confidence: high
risk_level: medium
security_impact: none
docs_impact: yes
linked_systems:
  - ".github/workflows/design-tokens.yml"
  - "shipglows_data/branding/design-tokens.json"
  - "site/src/styles/generated/design-tokens.css"
  - "app_quiz/flutter_app/lib/src/theme/generated/design_tokens.g.dart"
depends_on:
  - "shipglows_data/workflow/specs/gocharbon-design-system-authority-hardening.md"
next_review: "2026-08-13"
next_step: "Collecter le premier run CI et la validation visuelle cross-surface."
---

# Verification du design system conjoint

## Etat

Le contrat mecanique local est prouve. La verification reste ouverte jusqu'au
premier run GitHub Actions et aux preuves visuelles/accessibilite demandees par
la spec. Ce document ne constitue donc pas une cloture du chantier.

## Preuves locales du 12 aout 2026

| Controle | Resultat | Portee |
|---|---|---|
| Tests du generateur Node | 4/4 passes | resolution, cycles, determinisme, audit |
| Generation `--check` | passe | CSS, TypeScript et Dart byte-for-byte |
| Audit site | passe, 0 litteral | `site/src` hors sorties generees |
| Audit Flutter | passe, 0 litteral couleur | `app_quiz/flutter_app/lib` hors sortie generee |
| Suite Flutter locale | 5/5 passes | roles semantiques, categories et drift UI |
| Syntaxe workflow | passee | parsing/formatage Prettier YAML |
| Diff whitespace | passe | fichiers du lot F |

## Contrat CI

- Node 24 execute tests, generation `--check` et audits des deux surfaces.
- La classification native des chemins active Astro et Flutter seulement quand
  leur surface ou l'autorite partagee change.
- Flutter est fixe a `3.41.6`, version declaree par le build Vercel du depot.
- La suite Flutter complete couvre le mapping multi-categories et le test de
  derive visuelle; `flutter analyze` et le build web completent la preuve.
- Le site execute une installation pnpm 8.6 verrouillee puis son build Astro.
- Un lancement manuel force les deux consommateurs.

## Preuves encore requises

1. Run vert du workflow sur GitHub pour prouver l'environnement heberge.
2. Captures comparatives clair/sombre, mobile/desktop et app.
3. Verification contraste, focus clavier, touch targets, text scale et reduced
   motion sur les parcours principaux.
4. Revue visuelle confirmant l'absence de changement volontaire du site et le
   realignement de l'app sur l'identite officielle.
