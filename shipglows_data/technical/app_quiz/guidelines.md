---
artifact: technical_guidelines
metadata_schema_version: "1.0"
artifact_version: "1.2.0"
project: "gocharbon_quiz"
created: "2026-04-27"
updated: "2026-08-11"
status: active
source_skill: sg-docs
scope: technical
owner: "dianedef"
confidence: high
risk_level: high
security_impact: yes
docs_impact: yes
linked_systems:
  - "app_quiz/flutter_app"
  - "app_quiz/convex"
  - "Firebase Authentication"
depends_on:
  - "shipglows_data/technical/app_quiz/architecture.md"
  - "shipglows_data/technical/app_quiz/API.md"
supersedes: []
evidence:
  - "Firebase/Convex local scaffold and migration spec, 2026-08-11."
next_review: "2026-08-25"
next_step: "Apply provider configuration and record hosted proof."
---

# Guidelines

- Flutter is the only application surface to maintain.
- The quiz stays short, mobile-first and oriented to a useful next action on `gocharbon.fr`.
- Default tone is French, direct, useful and non-promotional.
- Firebase Auth is identity-only. Convex owns data and server-side business rules; Firestore and Cloud Functions are out of scope.
- New authenticated or progression behavior belongs to the Convex path, never to FastAPI/Mongo or Supabase.
- Keep `GOCHARBON_RUNTIME=legacy` as a deliberate rollback until Firebase/Convex hosted proof and the migration observation window are complete.
- Never put Firebase Admin credentials, OAuth secrets, Convex deploy keys, Supabase service-role keys or Mongo credentials in Flutter, client build variables or committed files.
- Never return correct answers before server-side submission; never trust a client score, UID, attempt ownership or time value without validation.
- Keep mutations idempotent, rate-limited and server-authoritative for score, XP, badges, rank and recommendations.
- Update this API document whenever an API capability, payload or security boundary changes.
- Update environment templates and the relevant README whenever a build variable changes.
- The product, brand and workflow governance lives under `shipglows_data/` at the monorepo root.
