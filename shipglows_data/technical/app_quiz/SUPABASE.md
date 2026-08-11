---
artifact: documentation
metadata_schema_version: "1.0"
artifact_version: "1.1.0"
project: "gocharbon_quiz"
created: "2026-04-26"
updated: "2026-08-11"
status: stale
source_skill: sg-docs
scope: supabase-legacy-rollback
owner: "team"
confidence: high
risk_level: high
security_impact: yes
docs_impact: yes
linked_systems:
  - "Supabase Auth"
  - "Supabase Postgres"
  - "app_quiz/flutter_app"
  - "shipglows_data/technical/app_quiz/API.md"
depends_on:
  - "shipglows_data/workflow/specs/gocharbon-quiz-firebase-auth-convex-migration.md"
supersedes: []
evidence:
  - "Supabase remains in local code only as a legacy rollback path."
  - "Target runtime decision 2026-08-11: Firebase Auth plus Convex HTTP."
next_step: "Retain until hosted Convex cutover, observation window and separately approved legacy cleanup are complete."
---

# Supabase Legacy Rollback Guide

Supabase is no longer the target identity or data architecture for GoCharbon Quiz. Firebase Authentication plus Convex HTTP is the selected target, documented in the migration spec and the canonical API contract.

## Current role

- Supabase code and migrations remain intact only to support `GOCHARBON_RUNTIME=legacy` while the target path has no hosted proof.
- No new feature, provider setup or user-scoped data change should be added to Supabase.
- No Supabase migration, project deletion or data cleanup is authorized during this transition.

## Safety boundary

- Never expose a `service_role` key to Flutter.
- Do not rely on `user_id` or `user_secret` supplied by a client as an authorization boundary.
- Do not remove the legacy path until Firebase Auth, Convex token validation, quiz submission, recommendations and rollback evidence have been accepted in a hosted environment.

## Historical configuration reference

The legacy Flutter build may still read `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY` and `SUPABASE_AUTH_REDIRECT_URL` when `GOCHARBON_RUNTIME=legacy`. These values are not required for the target Convex path.

For target configuration, use the Firebase and Convex variables described in `app_quiz/.env.example` and the migration spec. This document must be retained as historical context until the separately approved cleanup removes the fallback.
