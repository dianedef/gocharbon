# Auth web QA smoke test

Script: `scripts/qa_auth_web_e2e.js`

Purpose: lightweight E2E repro for web auth without completing a provider login.

It checks:

1. Home screen renders (`home-screen`).
2. Profile screen renders (`profile-screen`).
3. A Google CTA click triggers an OAuth request/navigation, then the script stops.

For Flutter web builds, it enables Flutter semantics and falls back to text-based detection/clicking when DOM test IDs are not available.

## Usage

Start the web app separately, then run:

```bash
node scripts/qa_auth_web_e2e.js http://localhost:3000
```

Against production or preview:

```bash
node scripts/qa_auth_web_e2e.js https://gocharbon-quiz.vercel.app
```

Useful overrides:

```bash
GOOGLE_CTA_SELECTOR='[data-testid="google-auth-cta-btn"]' \
OAUTH_URL_PATTERN='(accounts\.google\.com|/auth/v1/authorize|/oauth|/authorize)' \
AUTH_QA_PROFILE_PATH='/profile' \
node scripts/qa_auth_web_e2e.js http://localhost:3000
```

## Environment variables

- `AUTH_QA_BASE_URL`: base URL when no CLI URL is passed. Defaults to `http://localhost:3000`.
- `AUTH_QA_PROFILE_PATH`: profile route. Defaults to `/profile`.
- `AUTH_QA_HOME_TEXT_PATTERN`: fallback regex for home readiness. Defaults to home quiz labels.
- `AUTH_QA_PROFILE_TEXT_PATTERN`: fallback regex for profile readiness. Defaults to profile/OAuth labels.
- `GOOGLE_CTA_SELECTOR`: explicit selector for the Google CTA if no standard testID is present.
- `OAUTH_URL_PATTERN`: regex used to detect the OAuth endpoint. Defaults to Google/OAuth/Auth authorize URLs.
- `AUTH_QA_TIMEOUT_MS`: per-step timeout. Defaults to `30000`.
- `AUTH_QA_ARTIFACT_DIR`: screenshots output directory. Defaults to `test-results/auth-web-smoke`.
- `HEADLESS`: set `false` to see the browser. Defaults to `true`.
- `SLOWMO_MS`: optional Playwright slow motion delay.

## CTA selector convention

Preferred CTA testID: `google-auth-cta-btn`.

The script also tries common alternatives like `google-login-btn`, `google-signin-btn`, and any visible button/link/text containing `Google`. If the app uses a different selector, pass `GOOGLE_CTA_SELECTOR`.

Output URLs are redacted for transient OAuth parameters such as `state`, `code_challenge`, and Google continuation payloads.
