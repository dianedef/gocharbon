---
artifact: brand_context
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: gocharbon_quiz
created: "2026-04-25"
updated: "2026-04-26"
status: reviewed
source_skill: sf-docs
scope: brand
owner: "Fondateur GoCharbon"
confidence: high
risk_level: medium
security_impact: none
docs_impact: yes
brand_voice: "Directe, utile, anti-bullshit, orientée action"
trust_posture: "Promesses réalistes, preuve par usage, pas de posture guru"
depends_on:
  - artifact: "shipflow_data/app_quiz/business/business.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
supersedes: []
evidence:
  - "shipflow_data/app_quiz/business/business.md"
  - "README.md"
  - "docs/copywriting/persona.md"
  - "docs/copywriting/strategie.md"
next_review: "2026-05-26"
next_step: "/sf-docs audit shipflow_data/app_quiz/business/branding.md"
---
# Branding — gocharbon_quiz

## Relation à la marque mère

Le quiz est une extension de GoCharbon. Il ne doit jamais construire une personnalité indépendante ou contradictoire.

La gouvernance de marque source de vérité est maintenant portée par `shipflow_data/site/business/branding.md` à la racine du monorepo.

## Voix de marque

La voix du quiz doit être :

- directe
- accessible
- énergique
- crédible
- jamais corporate
- jamais guru

Repère de validation : **un produit d'entrée GoCharbon qui aide à passer à l'action sans faire la leçon**.

## Guardrails de ton

- tutoiement systématique
- français clair
- anti-bullshit explicite
- emojis autorisés de manière limitée, jamais en surcharge

## Tagline

Teste ton niveau, passe à l'action.

## Ce qu'il faut éviter

- promesses de succès rapide
- humour forcé
- gamification gadget
- identité verbale qui ferait oublier GoCharbon
