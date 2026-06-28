---
artifact: architecture_context
metadata_schema_version: "1.0"
artifact_version: "1.1.0"
project: "gocharbon_quiz"
created: "2026-04-27"
updated: "2026-04-27"
status: reviewed
source_skill: manual
scope: architecture
owner: "dianedef"
confidence: medium
risk_level: medium
security_impact: medium
docs_impact: yes
linked_systems:
  - "app_quiz/flutter_app"
  - "app_quiz/backend"
  - "app_quiz/supabase"
  - "shipflow_data/technical/app_quiz/API.md"
external_dependencies:
  - "Flutter"
  - "FastAPI"
  - "Supabase"
  - "Vercel"
invariants:
  - "Flutter reste la surface applicative principale."
  - "Les routes `/api/*` legacy restent stables tant que la migration n'est pas finie."
  - "Aucune clé Supabase sensible ne fuit côté client."
  - "Toute évolution de payload met à jour la doc API canonique."
depends_on:
  - "shipflow_data/technical/app_quiz/API.md"
  - "shipflow_data/technical/app_quiz/SUPABASE.md"
supersedes: []
evidence:
  - "app_quiz/flutter_app"
  - "app_quiz/backend/server.py"
  - "app_quiz/supabase/migrations"
next_review: "2026-07-28"
next_step: "/sf-docs verify shipflow_data/technical/app_quiz/architecture.md"
---

# Architecture

La gouvernance technique partagee de cette application vit a `shipflow_data/technical/app_quiz/`.

## Cible

- Flutter est la seule surface applicative du dépôt.
- FastAPI conserve les routes `/api/*` tant que la migration Supabase n'est pas complète.
- Supabase est la cible auth et données user-scoped.
- Vercel sert le build web Flutter depuis `flutter_app/build/web`.

## Surfaces

- `app_quiz/flutter_app/lib/src/ui` : écrans, widgets, navigation
- `app_quiz/flutter_app/lib/src/services` : API, session, auth, stockage, notifications, sons
- `app_quiz/flutter_app/lib/src/models` : modèles JSON et persistance locale
- `backend/server.py` : questions, scoring, leaderboard, recommandations, seed
- `supabase/migrations` : schéma cible, RPC et RLS

## Contrats

- `/api/questions`, `/api/questions/daily`, `/api/quiz/submit`, `/api/leaderboard`, `/api/badges` restent stables pour Flutter.
- Les mutations de score/progression restent contrôlées côté backend.
- Aucune clé Supabase service-role ne doit être exposée au client Flutter.
- Toute évolution de route ou payload met à jour `shipflow_data/technical/app_quiz/API.md`.
