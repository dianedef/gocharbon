---
artifact: product_context
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-04-26"
updated: "2026-04-27"
status: reviewed
source_skill: sf-docs
scope: product
owner: "Diane"
confidence: medium
risk_level: medium
target_user: "solopreneurs francophones, freelances et indépendants, et créateurs qui veulent lancer un revenu en ligne sans passer des mois à se perdre dans les infos"
user_problem: "les prospects ne savent pas par où commencer, les contenus sont trop théoriques ou trop bullshit, les parcours sont mal priorisés, et les recommandations d'outils manquent de cadrage local et de preuves d'usage"
desired_outcomes: "produire des parcours d'activation courts et actionnables, réduire l'abandon de démarrage, guider vers des décisions concrètes, et améliorer la conversion vers des outils/solutions partenaires de manière transparente"
non_goals: "former tout un cursus long, remplacer la validation terrain par de la hype marketing, promettre un revenu rapide, ou proposer une solution qui évince le jugement entrepreneurial humain"
security_impact: unknown
docs_impact: yes
evidence:
  - "shipflow_data/business/site/business.md pose les personas, objectifs et modele de revenus"
  - "shipflow_data/branding/branding.md fixe ton attendu de voix cash, anti-bullshit et actionnable"
  - "src/content/parcours contient 43 fichiers de contenu orientés parcours métiers et démarrage"
  - "src/pages/parcours.astro centralise la logique de découverte et de progression"
linked_artifacts:
  - "shipflow_data/business/site/business.md"
  - "shipflow_data/branding/branding.md"
depends_on:
  - artifact: "shipflow_data/business/site/business.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
  - artifact: "shipflow_data/branding/branding.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
supersedes: []
next_review: "2026-05-26"
next_step: "/sf-docs verify shipflow_data/product/site/product.md"
---

# Product Context

## Cible

- Solopreneurs francophones avec budget limité et besoin de clarté immédiate.
- Freelances qui veulent arrêter d'empiler des essais d'outils sans plan.
- Créatifs, commerçants locaux et profils intermédiaires qui veulent un premier revenu réel en ligne.

## Problème

- L'écosystème de lancement business en ligne est saturé d'opinions contradictoires.
- Les débutants manquent d'un ordre opérationnel pour passer de la théorie à l'action.
- Les recommandations manquent souvent de transparence (coût, alternatives françaises, cas d'usage réel).
- La progression est difficile à suivre quand l'utilisateur n'a que quelques heures par semaine.

## Résultats attendus

- Aider un nouvel arrivant à obtenir un premier pas concret en quelques heures.
- Structurer des parcours par ordre de priorité métier au lieu d'empiler du contenu.
- Faire des recommandations d'outils avec contexte de coût, usage et limites.
- Préserver la tonalité fondatrice (francophone, réaliste, utile) dans tous les points de contact.

## Workflows principaux

- Découverte SEO/social → qualification via parcours ou quiz → activation dans un parcours court.
- Activation → guidance étape par étape avec actions immédiates → orientation vers expert, outil ou programme approprié.
- Qualification continue du public via profil, progrès et intérêts réels.
- Référencement pratique via pages `src/pages` + contenus métiers détaillés.

## Portée incluse

- Site GoCharbon orienté contenu, activation et comparaison pratique d'outils.
- Parcours métiers, quiz et outils de progression.
- Positionnement de marque en français centré sur la simplicité et l'honnêteté.

## Portée exclue

- Coaching personnalisé individuel.
- Gestion opérationnelle de comptes publicitaires pour clients.
- Création de contenus premium vendus dans un cadre académique long-format.

## Indicateurs de succès

- Diminution du taux d'abandon des parcours courts.
- Hausse du taux de progression entre profils.
- Hausse de la qualité des clics vers les pages d'action (quiz, parcours, comparatifs).
- Réduction des objections liées à la compréhension du prochain pas.

## Risques

- Risque de dilution si la promesse se transforme en promesse générale sans preuve terrain.
- Risque de surcharge éditoriale si le taux de publication dépasse la capacité de validation.
- Risque de décalage entre promesse produit et preuve opérationnelle.
