---
artifact: product_context
metadata_schema_version: "1.0"
artifact_version: "1.1.0"
project: "gocharbon_quiz"
created: "2026-04-27"
updated: "2026-04-27"
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
desired_outcomes: "compléter un quiz court, obtenir un diagnostic utile, cliquer vers la bonne ressource GoCharbon"
non_goals: "devenir une marque indépendante, remplacer un LMS, ou promettre une transformation complète dans le quiz"
depends_on:
  - artifact: "shipflow_data/business/business.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
  - artifact: "shipflow_data/branding/branding.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
supersedes: []
evidence:
  - "app_quiz/flutter_app"
  - "app_quiz/backend"
  - "shipflow_data/business/app_quiz/business.md"
next_review: "2026-07-28"
next_step: "/sf-docs verify shipflow_data/product/app_quiz/product.md"
---

# Product Context

`gocharbon_quiz` est un quiz business mobile-first qui qualifie rapidement l'utilisateur puis l'oriente vers `gocharbon.fr`.

Le cadrage produit parent de reference est porte par `shipflow_data/product/site/product.md` dans le monorepo.

Promesse produit : **Teste ton niveau, passe à l'action.**

## Parcours

- démarrer anonymement
- choisir un thème, un défi du jour ou un quiz aléatoire
- répondre à 10 questions
- obtenir score, XP, badges et diagnostic
- ouvrir une ressource GoCharbon pertinente

## KPI

- north-star : CTR quiz -> `gocharbon.fr`
- secondaires : complétion, clic recommandation, retour court terme

## Périmètre

Inclus : quiz, scoring, progression, classement, recommandations, auth Supabase.

Exclus : LMS complet, coaching individuel premium, marque quiz indépendante.
