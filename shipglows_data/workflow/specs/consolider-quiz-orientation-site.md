---
artifact: spec
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-08-22"
updated: "2026-08-22"
status: ready
source_skill: sg-development
scope: "site-orientation-quiz-consolidation"
owner: "dianedef"
confidence: high
risk_level: medium
security_impact: none
docs_impact: yes
priority: P0
linked_systems:
  - "site/src/components/vue/Quiz.vue"
  - "site/src/data/quizData.js"
  - "site/src/data/quizQuickData.js"
  - "site/src/utils/quizScoring.ts"
depends_on:
  - artifact: "shipglows_data/product/site/product.md"
    artifact_version: "1.1.0"
    required_status: reviewed
supersedes: []
evidence:
  - "Les quiz rapide et avance utilisent le meme composant et cinq archetypes canoniques."
  - "Les maxima de points accessibles different selon les archetypes et les formats."
  - "Le composant appliquait les memes seuils bruts de confiance aux formats 8 et 25 questions."
next_step: "Rejouer les builds statiques complets jusqu'a leur terme, puis effectuer une preuve navigateur des deux quiz."
---

# Consolider les quiz d'orientation du site

## User Story

En tant que visiteur indécis, je veux comparer des directions business à partir d'une lecture cohérente de mes réponses, sans recevoir une certitude artificielle ni perdre mes réponses en passant du quiz rapide au quiz avancé.

## Minimal Behavior Contract

Les quiz rapide et avancé conservent leurs questions, leur préremplissage et les cinq archétypes existants. Le classement compare pour chaque archétype le score obtenu à son maximum réellement accessible dans le questionnaire courant. Les égalités utilisent l'ordre canonique. La restitution explique la force relative du signal, présente deux pistes et conduit en priorité vers le parcours correspondant.

## Invariants

- Les seuls résultats primaires sont `service`, `content`, `ecommerce`, `formation` et `saas`.
- Un format long ne bénéficie pas mécaniquement de seuils de score brut plus élevés.
- La description du résultat vient du contrat du quiz, pas du résumé SEO d'une fiche métier.
- Le résultat est une direction à tester, jamais un diagnostic scientifique ou une garantie de réussite.
- Le passage rapide vers avancé conserve les réponses compatibles.
- Ce chantier ne publie pas les routes exclues du build de lancement.

## Scope

- Fonction pure de maxima, normalisation, classement et lecture du signal.
- Restitution partagée des quiz rapide et avancé.
- Wording d'entrée et métadonnées des deux pages.
- Tests unitaires et documentation technique canonique.

## Scope Out

- Refonte visuelle, nouvelles questions ou nouvelle taxonomie.
- Validation psychométrique ou claim de test de personnalité.
- Publication des quiz dans le build de lancement.
- Analytics, compte utilisateur ou stockage distant.
- Création du playbook ShipGlows partagé sur les quiz.

## Acceptance Criteria

- Given des maxima accessibles différents, when deux scores bruts sont comparés, then le classement utilise leur affinité relative.
- Given une égalité d'affinité, when le résultat est recalculé, then l'ordre canonique produit toujours le même résultat.
- Given les formats rapide et avancé, when leur écart top 1/top 2 est identique en pourcentage, then la lecture du signal est identique.
- Given un résultat, when la restitution s'affiche, then elle ne contient ni score brut ni claim de certitude et montre au plus une action principale de parcours.
- Given un résultat et une fiche éditoriale disponible, when la description s'affiche, then elle reste celle du résultat du quiz.

## Test Strategy

- Tests unitaires Node sur maxima, normalisation, égalités et seuils relatifs.
- Vérification TypeScript/Astro via les deux builds.
- Scan statique du composant pour les claims et actions retirés.
- Preuve navigateur différée si aucun navigateur n'est disponible localement.

## Skill Run History

| Date UTC | Skill | Model | Action | Result | Next step |
| --- | --- | --- | --- | --- | --- |
| 2026-08-22 | sg-development | GPT-5 Codex | Formalisation et implémentation de la consolidation scoring/restitution | implemented | Exécuter les preuves ciblées |
| 2026-08-22 | sg-development | GPT-5 Codex | Tests unitaires et compilation du bundle quiz dans le build complet | verification_partial | Rejouer les builds statiques jusqu'au terme puis preuve navigateur |

## Current Chantier Flow

| Stage | Status | Evidence | Next action |
| --- | --- | --- | --- |
| Specification | completed | Contrat, invariants et critères définis depuis l'audit de l'existant | Préserver le périmètre |
| Readiness | ready | Architecture partagée et données existantes conservées | Vérifier l'implémentation |
| Implementation | completed | Fonction de scoring, restitution et copy des deux formats intégrées | Préserver les invariants |
| Verification | partial | 13/13 tests passent; compilation Vite et génération des routes quiz réussies; build complet interrompu pendant le long corpus statique | Rejouer les builds jusqu'au terme puis preuve navigateur |
| Closure | pending | Non applicable | Après preuve |
| Release | deferred | Aucun commit ou push demandé dans ce lot | Après validation opératrice |
