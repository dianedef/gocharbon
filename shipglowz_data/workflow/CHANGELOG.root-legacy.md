# Changelog

All notable changes to this project will be documented in this file.

## [2026-06-12]

### Changed
- Hardened the GoCharbon consumer contract around `@diane-winflowz/gamification` by pinning the current GitHub source to an explicit commit and documenting the accepted future move to GitHub Packages.
- Updated project and technical docs to reflect Astro 6 as the active framework baseline.

### Fixed
- Corrected the package-scope registry mapping in `.npmrc` to `@diane-winflowz`.
- Removed the unsupported project-level `minimum-release-age` setting from `.npmrc` for the repo's pinned `pnpm@8.6.0` workflow.

### Security
- Added a verification checklist for the gamification dependency hardening chantier and made the missing upstream GitHub Packages publication and permissive license proof explicit before any consumer migration off the current GitHub tarball source.
