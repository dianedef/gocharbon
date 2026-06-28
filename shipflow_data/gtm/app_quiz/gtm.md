---
artifact: gtm_context
metadata_schema_version: "1.0"
artifact_version: "1.1.0"
project: "gocharbon_quiz"
created: "2026-04-27"
updated: "2026-04-27"
status: reviewed
source_skill: manual
scope: gtm
owner: "dianedef"
confidence: medium
risk_level: medium
security_impact: none
docs_impact: yes
target_segment: "débutants business francophones et visiteurs GoCharbon en phase de démarrage"
offer: "un quiz mobile-first rapide qui transforme une curiosité floue en recommandation actionnable"
channels: "site GoCharbon, newsletter, social, trafic direct vers le quiz"
proof_points: "quiz court, score immédiat, recommandations vers le contenu parent, cohérence de branding GoCharbon"
depends_on:
  - artifact: "shipflow_data/business/business.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
  - artifact: "shipflow_data/product/app_quiz/product.md"
    artifact_version: "1.1.0"
    required_status: "reviewed"
supersedes: []
evidence:
  - "app_quiz/README.md"
  - "shipflow_data/product/app_quiz/product.md"
next_review: "2026-07-28"
next_step: "/sf-docs verify shipflow_data/gtm/app_quiz/gtm.md"
---

# GTM Context

Objectif : transformer une session quiz en trafic qualifié vers `gocharbon.fr`.

Le message et les regles de positionnement doivent rester coherents avec `shipflow_data/gtm/site/gtm.md`.

## Message

**Teste ton niveau, passe à l'action.**

## Canaux

- contenus GoCharbon
- newsletter
- social avec angle mini-diagnostic
- trafic direct vers le quiz

## Objections

- "C'est un simple jeu" : montrer une suite actionnable.
- "Je n'ai pas le temps" : sessions courtes et résultat immédiat.
- "Je suis débutant" : vocabulaire clair et recommandation progressive.

## Risques

- recommandation finale peu pertinente
- gamification qui masque la sortie vers GoCharbon
- friction auth trop tôt dans le parcours
