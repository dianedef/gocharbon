#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

PORT="${PORT:-3000}"
API_PORT="$((PORT + 1))"

export API_BASE_URL="${API_BASE_URL:-http://localhost:${API_PORT}}"

backend_pid=""

cleanup() {
  if [ -n "${backend_pid:-}" ] && kill -0 "$backend_pid" >/dev/null 2>&1; then
    kill "$backend_pid" >/dev/null 2>&1 || true
    wait "$backend_pid" >/dev/null 2>&1 || true
  fi
}
trap cleanup EXIT INT TERM

(
  cd "${ROOT_DIR}/backend"
  exec python3 -m uvicorn server:app --reload --host 0.0.0.0 --port "${API_PORT}"
) &
backend_pid="$!"

cd "${ROOT_DIR}/flutter_app"
exec flutter run -d chrome --web-port "${PORT}" --dart-define=API_BASE_URL="${API_BASE_URL}"
