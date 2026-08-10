# Changelog

All notable changes to the GoCharbon monorepo are documented in this file.

## [Unreleased]

### App quiz

#### Changed

- Flutter is now the only app surface in `app_quiz/`.
- The app root development script starts FastAPI plus Flutter web.
- Flutter results now consume `recommendation_context` from the backend.
- Documentation now describes the Flutter/FastAPI/Supabase architecture.
- The former standalone `gocharbon_quiz` project is consolidated into the GoCharbon monorepo.

#### Removed

- Legacy mobile client source and related docs.
- Legacy JavaScript backend source.
- Legacy push-token notification routes tied to the removed client.
