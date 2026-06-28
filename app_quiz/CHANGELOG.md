# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

### Changed

- Flutter is now the only app surface in `main`.
- Root dev script starts FastAPI plus Flutter web.
- Flutter results now consume `recommendation_context` from the backend.
- Documentation now describes the Flutter/FastAPI/Supabase architecture.

### Removed

- Legacy mobile client source and related docs.
- Legacy JavaScript backend source.
- Legacy push-token notification routes tied to the removed client.
