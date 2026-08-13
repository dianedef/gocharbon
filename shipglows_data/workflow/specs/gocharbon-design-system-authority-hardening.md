---
artifact: spec
metadata_schema_version: "1.0"
artifact_version: "2.2.0"
project: "gocharbon"
created: "2026-06-11"
updated: "2026-08-13"
status: ready
source_skill: sg-design
source_model: "GPT-5 Codex"
scope: "cross-surface-design-token-system"
owner: "Diane"
confidence: high
risk_level: high
security_impact: none
docs_impact: yes
user_story: "En tant qu'équipe, nous voulons piloter le site Astro et l'application Flutter depuis une source de tokens sémantiques unique afin de préserver une identité GoCharbon cohérente et d'empêcher toute dérive visuelle locale."
linked_systems:
  - "shipglows_data/branding/design-tokens.json"
  - "site/src/styles/generated/design-tokens.css"
  - "site/src/generated/design-tokens.ts"
  - "app_quiz/flutter_app/lib/src/theme/generated/design_tokens.g.dart"
depends_on:
  - artifact: "shipglows_data/branding/branding.md"
    required_status: reviewed
supersedes: []
evidence:
  - "Le site contient une autorité CSS centrale mais aussi des centaines de tokens auto-spécifiques et des littéraux résiduels."
  - "L'application Flutter centralise surtout ses couleurs; typographie, espacements, rayons, ombres, motion et adaptatif restent majoritairement locaux."
  - "Les palettes résolues du site et de l'application divergent actuellement."
next_step: "Exécuter les lots A à F et collecter les preuves cross-surface."
---

# Spec: système de tokens design conjoint GoCharbon

## Résultat attendu

Le site Astro/Vue et l'application Flutter consomment une seule autorité sémantique versionnée. Les sorties propres aux plateformes sont générées, jamais maintenues à la main. Les fichiers UI ne contiennent plus de décisions visuelles arbitraires; seules les exceptions techniques bornées et documentées sont admises.

## Identité préservée

- Direction: brutal néobrutaliste, charbon, crème, or et orange.
- Couleurs de marque: or `#e7ad18`, orange `#e2572d`, noir ardoise `#111820`, encre bleu-noir `#050b10`, charbon bleu profond `#182933`, creme mineral `#e7e0d2`, roche bleu petrole `#0d1a22`.
- Typographies: Pixelify Sans pour le display, Poppins pour le corps, Sanchez pour les labels et actions.
- Profondeur: bordures franches et ombres dures; les adaptations tactiles Flutter conservent les mêmes rôles sans copier les contraintes web.

## Autorité et génération

- Source canonique: `shipglows_data/branding/design-tokens.json`.
- Schéma: `shipglows_data/branding/design-tokens.schema.json`.
- Générateur déterministe: `tools/design-tokens/generate.mjs` avec mode `--check`.
- Audit anti-dérive: `tools/design-tokens/audit.mjs` et allowlist bornée.
- Sorties générées:
  - `site/src/styles/generated/design-tokens.css`
  - `site/src/generated/design-tokens.ts`
  - `app_quiz/flutter_app/lib/src/theme/generated/design_tokens.g.dart`

Le modèle comprend primitives, rôles sémantiques, recettes de composants partagées et adaptations de plateforme. Les adaptations `surface.web.*` et `surface.app.*` ne peuvent pas redéfinir l'identité de marque.

## Scope in

- couleurs et opacités;
- typographie complète;
- espacements, tailles, densité et touch targets;
- rayons, bordures, ombres et élévation;
- motion, durées, courbes et reduced motion;
- breakpoints et constantes adaptatives;
- focus, feedback, états et thèmes clair/sombre;
- composants et recettes visuelles partagées;
- migration des composants, pages, widgets et écrans;
- génération, audit, tests, CI et gouvernance.

## Scope out

- refonte éditoriale ou fonctionnelle;
- changement volontaire de parcours utilisateur;
- remplacement des frameworks Astro, Vue ou Flutter;
- couleurs intrinsèques aux illustrations, médias et contenus tiers, lorsqu'elles ne pilotent pas l'UI.

## Invariants

1. Une valeur visuelle résout vers la source canonique ou une exception documentée.
2. Les sorties générées portent un hash de la source et échouent si elles sont modifiées à la main.
3. UnoCSS consomme la sortie TypeScript; il ne maintient plus une palette concurrente.
4. Flutter consomme `ThemeData`, `ColorScheme`, `TextTheme`, `ThemeExtension` et des primitives partagées; les écrans ne consomment plus `AppColors` directement.
5. Les états accessibles ne reposent jamais uniquement sur la couleur.
6. Les cibles tactiles Flutter restent au moins à 48 dp sauf exception de plateforme justifiée.
7. Aucun changement visuel volontaire n'est introduit sur le site pendant la migration; l'app est réalignée sur l'identité officielle.

## Exceptions admises

- `transparent`, `currentColor`, `inherit` et couleurs système requises;
- safe areas et mesures fournies par les API de plateforme;
- illustrations et médias;
- data visualisation accessible explicitement allowlistée.

Chaque exception doit déclarer motif, propriétaire, portée et expiration. Une exception expirée ou inutilisée fait échouer l'audit.

## Execution Batches

| Lot | Portée d'écriture exclusive | Dépendance | Résultat |
|---|---|---|---|
| A | `shipglows_data/branding/**`, `shipglows_data/technical/**`, `tools/design-tokens/**`, spec | aucune | source, schéma, générateur, contrat |
| B | `site/uno.config.ts`, sorties générées site, imports d'infrastructure | A | infrastructure web branchée |
| C | `app_quiz/flutter_app/lib/src/theme/**`, assets/fonts et `pubspec.yaml` | A | infrastructure Flutter branchée |
| D | `site/src/components/**`, `site/src/pages/**`, `site/src/layouts/**`, styles UI hors sorties | B | consommation web complète |
| E | `app_quiz/flutter_app/lib/src/ui/**`, tests Flutter | C | consommation Flutter complète |
| F | `.github/workflows/**`, audits, preuves, documentation de clôture | D et E | garde anti-dérive et preuves |

Les lots B/C et D/E peuvent s'exécuter en parallèle car leurs racines d'écriture ne se chevauchent pas. Les agents ne modifient pas les fichiers d'un autre lot.

## Proof path

- génération idempotente et `--check` byte-for-byte;
- audit des littéraux avec allowlist stricte;
- build Astro et contrôles TypeScript;
- `flutter analyze`, tests unitaires/widget et build web Flutter;
- tests de contraste sur les paires sémantiques;
- vérification focus, clavier, touch targets, text scale et reduced motion;
- captures comparatives light/dark et tailles mobile/desktop;
- comparaison des valeurs résolues et rôles site/app.

## ZOMBIES coverage

- Z: absence de token, sortie manquante, thème vide, liste vide.
- O: une primitive, un rôle, une plateforme, un thème.
- M: références imbriquées, modes, composants, aliases temporaires et adaptations.
- B/I/E/S: frontières de contraste et taille, interfaces générées, erreurs de référence/cycle, ordre/hashes stables.

## Critères de succès

- une seule autorité canonique gouverne les deux surfaces;
- consommation site et Flutter complète ou exceptions explicitement recensées;
- zéro littéral visuel inexpliqué dans le code UI;
- sorties générées à jour et reproductibles;
- builds et tests passent;
- preuves visuelles et accessibilité collectées avant la clôture.

## Skill Run History

| Date UTC | Skill | Model | Action | Result | Next step |
|---|---|---|---|---|---|
| 2026-08-12 | sg-design | GPT-5 Codex | Audit conjoint et formalisation | ready | Exécuter les lots A à F |
| 2026-08-12 | sg-design | GPT-5 Codex | Lot A: autorité, schéma, génération, audit et contrat cross-surface | implemented | Brancher les lots B et C puis exécuter les preuves cross-surface |
| 2026-08-12 | sg-design | GPT-5 Codex | Lot F: CI path-aware, audits et dossier de vérification durable | implemented_local | Collecter le run CI et les preuves visuelles/accessibilité avant clôture |

## Current Chantier Flow

- Spécification: ready
- Implémentation: in progress
- Vérification: in progress
- Clôture: pending
