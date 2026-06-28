#!/usr/bin/env bash
set -euo pipefail
DEBUG_BUILD="${VERCEL_BUILD_DEBUG:-0}"

log() {
  echo "[VERCEL-FLUTTER] $*"
}

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
log "Working directory: ${ROOT_DIR}"
log "Debug mode: ${DEBUG_BUILD}"

FLUTTER_VERSION="${FLUTTER_VERSION:-3.41.6}"
DEFAULT_API_BASE_URL="http://localhost:3001"
API_BASE_URL_OVERRIDE="${API_BASE_URL:-}"
SUPABASE_URL_VALUE="${SUPABASE_URL:-}"
SUPABASE_PUBLISHABLE_KEY_VALUE="${SUPABASE_PUBLISHABLE_KEY:-${SUPABASE_ANON_KEY:-}}"
SUPABASE_AUTH_REDIRECT_URL_VALUE="${SUPABASE_AUTH_REDIRECT_URL:-${SUPABASE_REDIRECT_URL:-}}"
RUN_CHECKS="${RUN_CHECKS:-}" # 1 = flutter analyze + flutter test before build
ENABLE_SOURCE_MAPS="${ENABLE_SOURCE_MAPS:-}" # 1 = build web with --source-maps

if [ -n "${VERCEL:-}" ]; then
  # The published Flutter web app must target an explicitly configured API.
  if [ -z "${API_BASE_URL_OVERRIDE}" ]; then
    log "Missing API_BASE_URL for Vercel build."
    exit 1
  fi
  API_BASE_URL="${API_BASE_URL_OVERRIDE}"
else
  API_BASE_URL="${API_BASE_URL_OVERRIDE:-${DEFAULT_API_BASE_URL}}"
fi

# Cache Flutter SDK + pub cache between builds (Vercel caches `.vercel/cache`).
CACHE_BASE="${ROOT_DIR}/.vercel/cache"
SDK_DIR="${CACHE_BASE}/flutter_${FLUTTER_VERSION}"
PUB_CACHE_DIR="${CACHE_BASE}/pub-cache"

if [ ! -x "${SDK_DIR}/bin/flutter" ]; then
  rm -rf "${SDK_DIR}"
  mkdir -p "${CACHE_BASE}"

  TMP_DIR="${CACHE_BASE}/tmp_extract"
  rm -rf "${TMP_DIR}"
  mkdir -p "${TMP_DIR}"

  ARCHIVE_URL="https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_${FLUTTER_VERSION}-stable.tar.xz"
  curl -fsSL "${ARCHIVE_URL}" | tar -xJ -C "${TMP_DIR}"
  mv "${TMP_DIR}/flutter" "${SDK_DIR}"
  rm -rf "${TMP_DIR}"
fi

git config --global --add safe.directory "${SDK_DIR}" || true
git config --global --get-all safe.directory || true

mkdir -p "${PUB_CACHE_DIR}"
export PUB_CACHE="${PUB_CACHE_DIR}"
export PATH="${SDK_DIR}/bin:${PATH}"
log "Using Flutter SDK at ${SDK_DIR}"
log "Using pub cache at ${PUB_CACHE_DIR}"
log "Build target API URL: ${API_BASE_URL}"
if [ -n "${VERCEL:-}" ]; then
  missing_supabase=()
  [ -z "${SUPABASE_URL_VALUE}" ] && missing_supabase+=("SUPABASE_URL")
  [ -z "${SUPABASE_PUBLISHABLE_KEY_VALUE}" ] && missing_supabase+=("SUPABASE_PUBLISHABLE_KEY")
  [ -z "${SUPABASE_AUTH_REDIRECT_URL_VALUE}" ] && missing_supabase+=("SUPABASE_AUTH_REDIRECT_URL")
  if [ "${#missing_supabase[@]}" -gt 0 ]; then
    log "Supabase auth dart-defines missing: ${missing_supabase[*]} (OAuth web restera indisponible)."
  else
    log "Supabase auth dart-defines detected (URL + publishable key + redirect URL)."
  fi
fi

if [ "${DEBUG_BUILD}" = "1" ]; then
  set -x
fi

flutter --version
flutter config --no-analytics
flutter precache --web

cd "${ROOT_DIR}/flutter_app"

if [ -z "${RUN_CHECKS}" ]; then
  # Default: Vercel builds should be fast. Run checks in GitHub Actions instead.
  if [ -n "${VERCEL:-}" ]; then
    RUN_CHECKS="0"
  else
    RUN_CHECKS="1"
  fi
fi

log "Running flutter pub get"
flutter pub get
if [ "${RUN_CHECKS}" = "1" ]; then
  log "Running flutter analyze"
  flutter analyze
  log "Running flutter test"
  flutter test
fi

if [ -z "${ENABLE_SOURCE_MAPS}" ]; then
  if [ "${VERCEL_ENV:-}" = "production" ]; then
    ENABLE_SOURCE_MAPS="0"
  else
    ENABLE_SOURCE_MAPS="1"
  fi
fi

BUILD_FLAGS=(--release --no-wasm-dry-run --dart-define="API_BASE_URL=${API_BASE_URL}")
BUILD_FLAGS_LOG=(--release --no-wasm-dry-run --dart-define="API_BASE_URL=<set>")
if [ -n "${SUPABASE_URL_VALUE}" ]; then
  BUILD_FLAGS+=(--dart-define="SUPABASE_URL=${SUPABASE_URL_VALUE}")
  BUILD_FLAGS_LOG+=(--dart-define="SUPABASE_URL=<set>")
fi
if [ -n "${SUPABASE_PUBLISHABLE_KEY_VALUE}" ]; then
  BUILD_FLAGS+=(--dart-define="SUPABASE_PUBLISHABLE_KEY=${SUPABASE_PUBLISHABLE_KEY_VALUE}")
  BUILD_FLAGS_LOG+=(--dart-define="SUPABASE_PUBLISHABLE_KEY=<set>")
fi
if [ -n "${SUPABASE_AUTH_REDIRECT_URL_VALUE}" ]; then
  BUILD_FLAGS+=(--dart-define="SUPABASE_AUTH_REDIRECT_URL=${SUPABASE_AUTH_REDIRECT_URL_VALUE}")
  BUILD_FLAGS_LOG+=(--dart-define="SUPABASE_AUTH_REDIRECT_URL=<set>")
fi
if [ "${ENABLE_SOURCE_MAPS}" = "1" ]; then
  BUILD_FLAGS+=(--source-maps)
  BUILD_FLAGS_LOG+=(--source-maps)
fi

log "Build flags: ${BUILD_FLAGS_LOG[*]}"
log "Running flutter build web"
if [ "${DEBUG_BUILD}" = "1" ]; then
  # Avoid leaking dart-define values through bash xtrace when debug builds run.
  set +x
fi
flutter build web "${BUILD_FLAGS[@]}"
