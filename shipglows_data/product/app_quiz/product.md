---
artifact: product_context
metadata_schema_version: "1.0"
artifact_version: "1.3.0"
project: "gocharbon_quiz"
created: "2026-04-27"
updated: "2026-08-20"
status: reviewed
source_skill: manual
scope: product
owner: "dianedef"
confidence: medium
risk_level: medium
security_impact: low
docs_impact: yes
target_user: "joueur francophone qui veut tester ses connaissances business et obtenir une ressource utile sans friction d'inscription"
user_problem: "l'utilisateur veut situer rapidement sa maîtrise de notions business et savoir quoi approfondir ensuite"
desired_outcomes: "jouer immédiatement à un quiz business court, défier un proche, comparer sa maîtrise et ouvrir facultativement une ressource GoCharbon publiée"
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

`gocharbon_quiz` est un jeu de connaissances business mobile-first qui mesure la maîtrise de notions puis oriente vers une ressource publiée sur `gocharbon.fr`.

Le cadrage produit parent de référence est porté par `shipglows_data/product/site/product.md` dans le monorepo. Le site porte la progression éducative longue; l'application est d'abord un jeu de quiz business.

L'app ne répond pas à la question « quel business est fait pour toi ? ». Cette orientation appartient au site et à sa taxonomie d'archétypes. Les catégories de connaissances `finance`, `marketing`, `management` et `ecommerce` ne doivent jamais être converties implicitement en profil métier.

Promesse produit : **Joue. Défie. Progresse.**

## Parcours

- démarrer anonymement
- choisir un thème, un défi du jour, un quiz aléatoire ou un défi reçu
- répondre à 7 questions dans une partie compétitive
- obtenir score, XP, badges et comparaison
- partager un défi ou prendre sa revanche
- consulter facultativement une correction courte ou une ressource GoCharbon

## KPI

- north-star : taux d'ouverture d'une recommandation publiée après un quiz terminé
- secondaires : complétion, précision par catégorie, défi accepté et retour court terme

## Périmètre

Inclus : quiz, scoring, progression, classement, défis asynchrones, revanche, recommandations discrètes et identité anonyme-first.

Exclus : LMS complet, coaching individuel premium, chat, clans, temps réel, publicité intrusive et économie virtuelle artificielle.
