---
artifact: architecture_context
metadata_schema_version: "1.0"
artifact_version: "1.2.0"
project: "gocharbon_quiz"
created: "2026-04-27"
updated: "2026-08-11"
status: active
source_skill: sg-docs
scope: architecture
owner: "dianedef"
confidence: high
risk_level: high
security_impact: yes
docs_impact: yes
linked_systems:
  - "app_quiz/flutter_app"
  - "app_quiz/convex"
  - "app_quiz/backend"
  - "app_quiz/supabase"
  - "shipglows_data/technical/app_quiz/API.md"
external_dependencies:
  - "Flutter"
  - "Firebase Authentication"
  - "Convex"
  - "Vercel"
invariants:
  - "Flutter reste la surface applicative principale."
  - "Firebase Auth est l'identite cible; Convex est l'autorite de donnees et de calcul."
  - "Le runtime legacy reste un rollback explicite jusqu'a preuve hebergee de la bascule."
  - "Les questions ne revelent jamais leur reponse correcte avant soumission."
  - "Toute evolution de payload met a jour la doc API canonique."
depends_on:
  - "shipglows_data/technical/app_quiz/API.md"
  - "shipglows_data/workflow/specs/gocharbon-quiz-firebase-auth-convex-migration.md"
supersedes:
  - "Supabase as target auth/data architecture"
evidence:
  - "Local Firebase Auth and Convex scaffold added 2026-08-11."
  - "Provider setup, hosted proof, and production cutover are not yet available."
next_review: "2026-08-25"
next_step: "Provision Firebase and Convex, then execute hosted verification before enabling GOCHARBON_RUNTIME=convex in production."
---

# Architecture

## Target architecture

- Flutter remains the universal application surface.
- Firebase Authentication is the sole target identity provider: anonymous first, then Google linking.
- Convex is the target server authority for question selection, attempts, scoring, XP, badges, leaderboard and GoCharbon recommendations.
- Flutter calls Convex through HTTP with a fresh Firebase ID token. The client never supplies a trusted UID, score, correct answer or durable `user_secret`.
- Vercel serves the Flutter Web build; provider configuration is injected through build variables only.

## Current transition state

The local code is ready behind `GOCHARBON_RUNTIME=convex`. The default remains `legacy`, which preserves Supabase/FastAPI/Mongo only as a controlled rollback.

Firebase and Convex have not been provisioned in this repository's environments. Consequently, no production path, OAuth redirect, token verification or hosted data migration is proven. The legacy runtime must not be removed until the migration spec acceptance criteria and observation window are complete.

## Surfaces

- `app_quiz/flutter_app/lib/src/ui` : screens, widgets and navigation.
- `app_quiz/flutter_app/lib/src/services/auth` : Firebase bootstrap and the legacy auth adapter.
- `app_quiz/flutter_app/lib/src/services/api` : provider-neutral quiz API and Convex HTTP client.
- `app_quiz/convex` : target schema, authenticated functions, scoring and recommendations.
- `app_quiz/backend` and `app_quiz/supabase` : legacy rollback sources; no new product behavior belongs there.

## Security contracts

- Convex receives only a validated Firebase identity from `ctx.auth`.
- Question listing never returns correct answers.
- Submission is server-authoritative, bounded, rate-limited and idempotent per player and attempt token.
- Public leaderboard data excludes email, Firebase UID and private progression details.
- Firebase Admin credentials, OAuth secrets, Convex deploy keys and Supabase service-role keys never enter the Flutter bundle or repository.
