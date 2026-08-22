---
artifact: architecture_context
metadata_schema_version: "1.0"
artifact_version: "1.7.0"
project: "gocharbon_quiz"
created: "2026-04-27"
updated: "2026-08-18"
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
  - "Firebase anonymous auth, Convex data/functions, and the Vercel preview were activated and verified 2026-08-18."
  - "Production cutover to https://quiz.gocharbon.fr was completed and verified 2026-08-19."
  - "Commit 185bd8c9 delivers shared Flutter component authority; analyze and 9 tests pass locally."
next_review: "2026-08-25"
next_step: "Monitor production and retain the legacy rollback until the observation window closes."
---

# Architecture

## Target architecture

- Flutter remains the universal application surface.
- Firebase Authentication is the sole target identity provider: anonymous first, then Google linking.
- Convex is the target server authority for question selection, attempts, scoring, XP, badges, leaderboard and GoCharbon recommendations.
- Convex is also the authority for cross-surface recommendation safety: only routes published by the reduced site build may be returned, otherwise the recommendation converges on the attributed `/parcours` hub with generic copy.
- Flutter calls Convex through HTTP with a fresh Firebase ID token. The client never supplies a trusted UID, score, correct answer or durable `user_secret`.
- Vercel serves the Flutter Web build; provider configuration is injected through build variables only.

## Current transition state

Production runs behind `GOCHARBON_RUNTIME=convex` at `https://quiz.gocharbon.fr`; the preview remains at `https://gocharbon-quiz-preview.vercel.app`. The `legacy` path preserves Supabase/FastAPI/Mongo as a controlled rollback.

Firebase anonymous authentication and the Convex development deployment are provisioned. Hosted verification proved token validation, server-side quiz submission, a two-player challenge, rejection of a third identity, and answer-key non-disclosure. Google linking and native platform configuration remain follow-up work; the legacy runtime must not be removed until the observation window and a separately approved production cutover are complete.

## Surfaces

- `app_quiz/flutter_app/lib/src/ui` : screens, widgets and navigation.
- `app_quiz/flutter_app/lib/src/services/auth` : Firebase bootstrap and the legacy auth adapter.
- `app_quiz/flutter_app/lib/src/services/api` : provider-neutral quiz API and Convex HTTP client.
- `app_quiz/convex` : target schema, authenticated functions, scoring and recommendations.
- `app_quiz/backend` and `app_quiz/supabase` : legacy rollback sources; no new product behavior belongs there.

## Design-system authority

Flutter consumes generated tokens through the theme and shared widgets
`GcButton`, `GcIconButton`, `AppCard`, `GcNavigationCard`, `GcSelectableCard`,
`GcStatusCard`, `GcStatusPill`, `GcQuizAnswerOption` and
`GcSegmentedControl`. Screens may compose layout, avatars, gauges and other
specialized content, but must not recreate button or card recipes with local
decoration. Typography follows Chakra Petch, Oxanium and Sanchez through the
generated theme. Commit `185bd8c9` is delivered; local analysis and nine tests
pass, while automated Browser proof remains outstanding.

## Security contracts

- Convex receives only a validated Firebase identity from `ctx.auth`.
- Question listing never returns correct answers.
- Submission is server-authoritative, bounded, rate-limited and idempotent per player and attempt token.
- Asynchronous challenges reference completed server attempts, reuse a fixed display-safe question set, expire after seven days and accept two distinct identities at most.
- Public leaderboard data excludes email, Firebase UID and private progression details.
- Firebase Admin credentials, OAuth secrets, Convex deploy keys and Supabase service-role keys never enter the Flutter bundle or repository.

## Product boundary

- The app result describes knowledge mastery in `finance`, `marketing`, `management` or `ecommerce`; these categories never infer a business archetype.
- Score sharing points back to the quiz app. Optional learning recommendations point to the published GoCharbon site with stable `knowledge_quiz` attribution.
- A stored course URL outside the public route allowlist is treated as unavailable. Its specific title and description are not retained over a generic hub fallback, preventing a misleading promise even when historical seed data is stale.
