import {
  ANON_USER_ID_STORAGE_KEY,
  GAMIFICATION_UPDATED_EVENT,
  PATH_PROGRESS_STORAGE_KEY,
  XP_STORAGE_KEY,
} from './storageKeys';

type JSONObject = Record<string, unknown>;

const PUSH_URL = import.meta.env.PUBLIC_CONVEX_GAMIFICATION_PUSH_URL ?? '';
const PULL_URL = import.meta.env.PUBLIC_CONVEX_GAMIFICATION_PULL_URL ?? '';

let syncTimer: number | null = null;
let inFlight = false;
let hydrated = false;

function isClient(): boolean {
  return typeof window !== 'undefined';
}

function readJsonObject(key: string): JSONObject {
  if (!isClient()) return {};
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? (parsed as JSONObject) : {};
  } catch {
    return {};
  }
}

function stableAnonUserId(): string {
  if (!isClient()) return 'server';
  const existing = window.localStorage.getItem(ANON_USER_ID_STORAGE_KEY);
  if (existing) return existing;

  const generated =
    typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `anon_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;

  window.localStorage.setItem(ANON_USER_ID_STORAGE_KEY, generated);
  return generated;
}

function emitGamificationUpdated(): void {
  if (!isClient()) return;
  window.dispatchEvent(new Event(GAMIFICATION_UPDATED_EVENT));
}

function snapshotPayload(): JSONObject {
  return {
    userId: stableAnonUserId(),
    source: 'gocharbon-web',
    sentAt: new Date().toISOString(),
    pathProgress: readJsonObject(PATH_PROGRESS_STORAGE_KEY),
    xp: readJsonObject(XP_STORAGE_KEY),
  };
}

export function notifyGamificationLocalWrite(): void {
  emitGamificationUpdated();
}

export function scheduleConvexGamificationSync(): void {
  if (!isClient() || !PUSH_URL) return;

  if (syncTimer) window.clearTimeout(syncTimer);
  syncTimer = window.setTimeout(() => {
    void flushConvexGamificationSync();
  }, 1200);
}

export async function flushConvexGamificationSync(): Promise<void> {
  if (!isClient() || !PUSH_URL || inFlight) return;
  inFlight = true;

  try {
    await fetch(PUSH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(snapshotPayload()),
      keepalive: true,
    });
  } catch {
    // Silent fallback: localStorage remains source of truth.
  } finally {
    inFlight = false;
  }
}

export async function hydrateGamificationFromConvex(): Promise<void> {
  if (!isClient() || !PULL_URL || hydrated) return;
  hydrated = true;

  try {
    const userId = stableAnonUserId();
    const res = await fetch(`${PULL_URL}?userId=${encodeURIComponent(userId)}`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return;

    const data = (await res.json()) as {
      pathProgress?: JSONObject;
      xp?: JSONObject;
    };

    if (data.pathProgress && typeof data.pathProgress === 'object') {
      window.localStorage.setItem(PATH_PROGRESS_STORAGE_KEY, JSON.stringify(data.pathProgress));
    }
    if (data.xp && typeof data.xp === 'object') {
      window.localStorage.setItem(XP_STORAGE_KEY, JSON.stringify(data.xp));
    }

    emitGamificationUpdated();
  } catch {
    // Local fallback only.
  }
}
