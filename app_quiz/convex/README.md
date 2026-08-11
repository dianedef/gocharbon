# Convex backend scaffold

This directory is the target backend for GoCharbon Quiz. It is local-only until
a Firebase project and a Convex deployment are explicitly created by an
authorized operator.

## Security contract

- Every write derives the subject from a verified Firebase ID token. A Flutter
  client never sends a user ID or a secret used as identity.
- `questions.list` serializes only public question fields. `correctAnswer` is
  stored server-side and is never part of a question response.
- `submissions.submit` validates payload limits, scores from server-side data,
  limits submissions, and is idempotent on `(Firebase UID, attempt token)`.
- The public leaderboard returns display fields only, never Firebase UIDs or
  email addresses.

## Later provider setup

1. Create Firebase Authentication with Anonymous and Google providers.
2. Create a Convex project in the selected region.
3. Set `FIREBASE_AUTH_ISSUER` and `FIREBASE_AUTH_AUDIENCE` from `.env.example`.
4. Deploy this directory, import the reviewed questions/courses, then connect
   Flutter through its Convex URL and Firebase configuration.

No provider CLI command, account, secret, deployment, or data import has been
performed by this scaffold. The FastAPI, MongoDB, and Supabase paths remain the
rollback path until production acceptance is complete.
