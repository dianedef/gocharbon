---
artifact: product_context
metadata_schema_version: "1.0"
artifact_version: "1.2.0"
project: "gocharbon_quiz"
created: "2026-04-27"
updated: "2026-08-18"
status: reviewed
source_skill: manual
scope: product
owner: "dianedef"
confidence: medium
risk_level: medium
security_impact: low
docs_impact: yes
target_user: "visiteur francophone qui veut un diagnostic business rapide et un prochain pas concret"
user_problem: "l'utilisateur ne sait pas quel type de business ou quelle prochaine action prioriser"
desired_outcomes: "jouer immédiatement à un quiz business court, défier un proche, comparer sa maîtrise et ouvrir facultativement la bonne ressource GoCharbon"
non_goals: "remplacer un LMS, devenir un réseau social, ou construire du multijoueur temps réel avant preuve de rétention"
depends_on:
  - artifact: "shipglows_data/business/business.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
  - artifact: "shipglows_data/branding/branding.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
supersedes: []
evidence:
  - "app_quiz/flutter_app"
  - "app_quiz/backend"
  - "shipglows_data/business/app_quiz/business.md"
next_review: "2026-07-28"
next_step: "/sf-docs verify shipglows_data/product/app_quiz/product.md"
---

# Product Context

`gocharbon_quiz` est un quiz business mobile-first qui qualifie rapidement l'utilisateur puis l'oriente vers `gocharbon.fr`.

Le cadrage produit parent de référence est porté par `shipglows_data/product/site/product.md` dans le monorepo. Le site porte la progression éducative longue; l'application est d'abord un jeu de quiz business.

Promesse produit : **Joue. Défie. Progresse.**

## Parcours

- démarrer anonymement
- choisir un thème, un défi du jour, un quiz aléatoire ou un défi reçu
- répondre à 7 questions dans une partie compétitive
- obtenir score, XP, badges et comparaison
- partager un défi ou prendre sa revanche
- consulter facultativement une correction courte ou une ressource GoCharbon

## KPI

- north-star : CTR quiz -> `gocharbon.fr`
- secondaires : complétion, clic recommandation, retour court terme

## Périmètre

Inclus : quiz, scoring, progression, classement, défis asynchrones, revanche, recommandations discrètes et identité anonyme-first.

Exclus : LMS complet, coaching individuel premium, chat, clans, temps réel, publicité intrusive et économie virtuelle artificielle.
