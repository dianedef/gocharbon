---
artifact: product_spec
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon_quiz"
created: "2026-08-18"
updated: "2026-08-18"
status: implemented
source_skill: sg-development
scope: "competitive-quiz-loop"
owner: "Diane"
confidence: high
risk_level: medium
security_impact: yes
docs_impact: yes
next_review: "2026-09-18"
next_step: "Provision and deploy the Firebase/Convex target runtime, then run a two-device hosted challenge proof."
---

# GoCharbon Quiz — boucle compétitive

## Décision produit

L'application est d'abord un jeu de quiz business. Le site porte la progression éducative longue. L'app conserve des corrections courtes et des recommandations facultatives, mais sa boucle principale devient : jouer, défier, comparer, prendre sa revanche.

## Tranche livrable

- Une partie compétitive contient sept questions.
- Un joueur peut transformer son résultat en défi partageable.
- Le défi réutilise exactement le même lot de questions, la même catégorie et le même mode.
- Le destinataire peut ouvrir le lien, jouer sans chercher le thème et rejoindre le résultat comparatif.
- Le résultat montre les deux scores, les bonnes réponses et l'état attente/gagné/perdu/égalité.
- Une revanche crée un nouveau défi à partir d'une nouvelle partie.
- Les explications restent courtes et les ressources GoCharbon restent secondaires.

## Garde-fous

- Pas de temps réel, chat, clans, publicité, roue, coffre ou monnaie additionnelle.
- Le score et l'identité proviennent du serveur; le client ne peut pas désigner un gagnant durable.
- Un défi possède un code imprévisible, expire et accepte au maximum deux participants distincts.
- Les réponses correctes ne sont jamais exposées avant soumission.
- L'entrée anonyme reste possible; le compte sert uniquement à retrouver une progression durable.

## Critères d'acceptation

1. Une partie normale charge sept questions.
2. Après soumission, le résultat possède un identifiant de tentative utilisable pour créer un défi.
3. Le lien `/challenge/:code` charge le même lot de questions sans réponse correcte.
4. Le créateur apparaît immédiatement dans le comparatif; le second joueur apparaît après sa soumission.
5. Une troisième identité, une tentative étrangère, un défi expiré ou une seconde inscription de la même tentative est refusé proprement.
6. Le partage, la revanche et le retour à l'accueil restent accessibles avec réduction des animations et tailles de texte système.
7. Les tests Flutter, les contrats Convex, l'audit design et le contrôle de dérive des tokens passent.

## Lots d'exécution

- A — domaine et API Convex : schéma, création, lecture, participation et comparaison.
- B — contrat Flutter : modèles, client HTTP, routage et conservation du contexte de défi.
- C — expérience : entrée défi, partie en sept questions, résultat comparatif et revanche.
- D — documentation et preuves ciblées.

## Preuves locales du 2026-08-18

- `flutter analyze` : succès.
- `flutter test` : 12 tests réussis.
- `flutter build web --release` : succès, dry-run Wasm réussi.
- `npx tsc --noEmit` dans le package Convex : succès.
- Tests, génération et audit du design system : succès, zéro littéral et zéro exception.
- La preuve hébergée à deux appareils reste conditionnée au déploiement Firebase/Convex déjà identifié par l'architecture.
