---
artifact: spec
metadata_schema_version: "1.0"
artifact_version: "2.6.0"
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
  - "Le diagnostic initial trouvait des tokens auto-spécifiques et des littéraux résiduels malgré l'autorité CSS centrale du site."
  - "Le diagnostic initial trouvait dans Flutter une centralisation limitée surtout aux couleurs."
  - "Le diagnostic initial constatait une divergence entre les palettes résolues du site et de l'application."
  - "Le commit 185bd8c9 livre l'autorité des composants partagés web et Flutter; les audits et builds locaux passent."
next_step: "Collecter la preuve Browser automatisée clair/sombre, desktop/mobile et clavier."
---

# Spec: système de tokens design conjoint GoCharbon

## Résultat attendu

Le site Astro/Vue et l'application Flutter consomment une seule autorité sémantique versionnée. Les sorties propres aux plateformes sont générées, jamais maintenues à la main. Les fichiers UI ne contiennent plus de décisions visuelles arbitraires; seules les exceptions techniques bornées et documentées sont admises.

## Identité préservée

- Direction: Pixel Mine, charbon, crème minérale, or vieilli et orange secondaire.
- Couleurs de marque: or `#e7ad18`, orange `#e2572d`, noir ardoise `#111820`, encre bleu-noir `#050b10`, charbon bleu profond `#182933`, creme mineral `#e7e0d2`, roche bleu petrole `#0d1a22`.
- Typographies: Chakra Petch pour le display, Oxanium pour le corps et les libelles, Sanchez uniquement pour les CTA et actions interactives.
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
| 2026-08-13 | sg-design | GPT-5 Codex | Lot D ciblé: migration Pixel Mine de la home et ajout du toggle de thème au footer global | implemented_local | Collecter la preuve visuelle light/dark desktop/mobile puis poursuivre les autres pages |
| 2026-08-13 | sg-development | GPT-5 Codex | Migration typographique web: Chakra Petch display, Oxanium body, Sanchez CTA; suppression des familles CSS littérales et garde d'audit dédiée | verified_local | Collecter la preuve visuelle light/dark puis poursuivre la migration cross-surface |
| 2026-08-13 | sg-design | GPT-5 Codex | Mise en place d'une recette de bordure Pixel Mine imbriquÃ©e (ombre dure, filon, séparation sombre, cadre intérieur) pour la landing | implemented_local | Ajouter le mapping des variantes visuelles par type de carte (hover/active/reward/disabled) puis valider visuellement |
| 2026-08-13 | sg-design | GPT-5 Codex | Audit puis harmonisation des panneaux de la landing autour d'une recette Pixel Mine commune aux composants du hero et aux cartes des sections | implemented_local | Collecter les captures light/dark desktop/mobile dès qu'un navigateur est disponible |
| 2026-08-13 | sg-design | GPT-5 Codex | Unification du composant Button autour d'une géométrie Pixel Mine et de deux variantes sémantiques | verified_local | Collecter les captures light/dark desktop/mobile dès qu'un navigateur est disponible |
| 2026-08-13 | sg-design | GPT-5 Codex | Lot D: unification cross-framework des CTA Astro/Vue et séparation des contrôles fonctionnels | verified_local | Collecter les captures light/dark desktop/mobile et les parcours clavier dès qu'un navigateur est disponible |

| 2026-08-13 | sg-design | GPT-5 Codex | Autorite complete des composants web et Flutter validee par l'operatrice | verified_local | Connecter une instance Browser pour les captures light/dark desktop/mobile et la preuve clavier |
| 2026-08-13 | sg-docs | GPT-5 Codex | Documentation canonique alignee sur les primitives livrees dans `185bd8c9` | documented_local | Collecter la preuve Browser automatisee avant cloture visuelle |

## Current Chantier Flow

- Spécification: ready
- Implementation: complete (autorite fermee pour cartes, actions, controles, champs, chips, statuts, notices et composants metier web/Flutter; anciennes recettes concurrentes et API de contournement retirees)
- Verification: in progress (generation deterministe, audit tokens 0/0, build Astro 23 pages, analyse Flutter et 9 tests, scan structurel et routes locales passes; preuve navigateur light/dark desktop/mobile et clavier a collecter faute d'instance connectee)
- Clôture: pending
