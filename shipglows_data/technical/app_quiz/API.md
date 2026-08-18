---
artifact: documentation
metadata_schema_version: "1.0"
artifact_version: "1.3.0"
project: "gocharbon_quiz"
created: "2026-04-27"
updated: "2026-08-18"
status: active
scope: api
source_skill: sg-docs
owner: "dianedef"
confidence: high
risk_level: high
security_impact: yes
docs_impact: yes
linked_systems:
  - "app_quiz/convex"
  - "app_quiz/flutter_app/lib/src/services/api/gocharbon_api.dart"
  - "Firebase Authentication"
depends_on:
  - "shipglows_data/technical/app_quiz/architecture.md"
supersedes:
  - "Legacy FastAPI and Supabase API contract as the target runtime"
evidence:
  - "Convex HTTP client and local functions scaffold added 2026-08-11."
  - "No deployed Convex URL or Firebase project is available in this phase."
next_step: "Confirm deployed Convex function names and append hosted request/response proof."
---

# API

This document defines the target Firebase Auth plus Convex contract and the explicit rollback boundary. It is not evidence that a provider endpoint is deployed.

## Runtime selection

- `GOCHARBON_RUNTIME=convex` selects the target path.
- `GOCHARBON_RUNTIME=legacy` is the default rollback path until hosted verification succeeds.
- `CONVEX_HTTP_URL` is required only for the Convex path.

## Authentication

Flutter creates or restores an anonymous Firebase session, then may link Google without changing the Firebase UID. Every private Convex request carries a fresh `Authorization: Bearer <Firebase ID token>` header.

The server derives the player identity exclusively from the validated token. A missing, expired or invalid token returns `401`; a non-owned resource returns `403`. Client-provided `user_id`, `user_secret`, score and privilege fields are not part of the target contract.

## Target Convex capabilities

| Capability | Access | Contract |
| --- | --- | --- |
| Questions | authenticated player | Returns display-safe question fields only; never `correct_answer`. |
| Daily challenge | authenticated player | Stable UTC-day challenge with display-safe questions. |
| Profile and badges | authenticated player | Returns only the current player's private progression. |
| Quiz submission | authenticated player | Accepts an issued attempt token and selected answers; the server validates, scores and writes atomically. |
| Create challenge | authenticated player | Converts one owned completed attempt into a seven-day asynchronous challenge and returns an opaque share code. |
| Read challenge | public by opaque code | Returns the fixed display-safe question set and public comparison entries; never answer keys or private identifiers. |
| Join challenge | authenticated player | Attaches one owned attempt with the exact same rules and question set; a challenge accepts two distinct players. |
| Leaderboard | public display data | Returns rank and presentation fields only, without UID or email. |
| Recommendations | authenticated player | Returns GoCharbon recommendations derived from the server-calculated result. |
| Rank notification | authenticated player | Checks only the caller's known rank. |

## Submission invariants

- The server owns question answers, category/mode bounds, score, XP, level, streak, badges and rank.
- A submission must reference the server-issued attempt and a unique attempt token.
- Repeating the same token returns the prior result without adding progression a second time.
- Invalid question IDs, duplicate answers, out-of-range selections and invalid durations fail before a partial write.

## Asynchronous challenge invariants

- The creator can only challenge from an attempt owned by the authenticated identity.
- The share code is generated from cryptographic randomness, omits ambiguous characters and expires after seven days.
- Both players receive exactly the same question IDs, category and mode.
- Joining compares the server-owned attempt, never a score supplied by Flutter.
- A challenge accepts no more than two distinct identities and one entry per identity.
- Challenge payloads expose only display names, score totals and answer counts.

## Legacy boundary

The `/api/*` FastAPI routes, Supabase RPCs and `x-user-secret` are legacy-only. They remain documented by source code during rollback, but must not be extended or selected by new features. In particular, legacy question responses must not be treated as a safe answer-distribution contract.
