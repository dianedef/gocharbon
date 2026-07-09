---
artifact: technical_guidelines
metadata_schema_version: "1.0"
artifact_version: "1.1.0"
project: "gocharbon_quiz"
created: "2026-04-27"
updated: "2026-04-27"
status: reviewed
source_skill: manual
scope: technical
owner: "dianedef"
confidence: medium
risk_level: medium
security_impact: medium
docs_impact: yes
linked_systems:
  - "app_quiz/flutter_app"
  - "app_quiz/backend"
  - "app_quiz/supabase"
depends_on:
  - "shipglowz_data/technical/app_quiz/architecture.md"
  - "shipglowz_data/technical/app_quiz/API.md"
supersedes: []
evidence:
  - "app_quiz/README.md"
  - "shipglowz_data/technical/app_quiz/architecture.md"
next_review: "2026-07-28"
next_step: "/sf-docs verify shipglowz_data/technical/app_quiz/guidelines.md"
---

# Guidelines

- Flutter est la seule surface applicative à maintenir.
- Le quiz reste court, mobile-first, orienté activation vers `gocharbon.fr`.
- Ton par défaut : français, tutoiement, direct, utile, anti-bullshit.
- La gamification sert la progression et le clic utile, pas le divertissement pur.
- RLS obligatoire sur les données utilisateur Supabase.
- Aucune clé service-role dans le client.
- Si une route ou un payload change, mettre à jour `shipglowz_data/technical/app_quiz/API.md`.
- Si une commande change, mettre à jour `README.md`.
- Si un env change, mettre à jour `app_quiz/.env.example` ou `app_quiz/backend/.env.example`.
- La gouvernance produit et marque vit dans `shipglowz_data/product/app_quiz/`, `shipglowz_data/gtm/app_quiz/`, `shipglowz_data/business/app_quiz/`, et `shipglowz_data/branding/branding.md` au niveau du monorepo.
