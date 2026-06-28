import { XP_STORAGE_KEY } from './storageKeys';
import {
  notifyGamificationLocalWrite,
  scheduleConvexGamificationSync,
} from './convexSync';
const READ_XP = 20;
const DEFAULT_TASK_XP = 35;

export type TaskType = 'quiz' | 'guide' | 'tuto' | 'action';

const TASK_XP_BY_TYPE: Record<TaskType, number> = {
  quiz: 15,
  guide: 25,
  tuto: 30,
  action: 40,
};

interface XpStore {
  readSlugs: string[];
  completedTasks: Record<string, number>;
}

export interface XpState {
  totalXp: number;
  readXp: number;
  taskXp: number;
  readCount: number;
  completedTaskCount: number;
}

export interface XpLevelState {
  level: number;
  currentLevelXp: number;
  nextLevelXp: number;
  progressPercent: number;
}

function isClient(): boolean {
  return typeof window !== 'undefined';
}

function readStore(): XpStore {
  if (!isClient()) return { readSlugs: [], completedTasks: {} };

  try {
    const raw = window.localStorage.getItem(XP_STORAGE_KEY);
    if (!raw) return { readSlugs: [], completedTasks: {} };
    const parsed = JSON.parse(raw) as Partial<XpStore>;
    const completedTasksRaw = (parsed as any).completedTasks;
    let completedTasks: Record<string, number> = {};

    // Migration from old array shape (task ids only).
    if (Array.isArray(completedTasksRaw)) {
      completedTasks = Object.fromEntries(
        completedTasksRaw.map((taskId: string) => [taskId, DEFAULT_TASK_XP])
      );
    } else if (completedTasksRaw && typeof completedTasksRaw === 'object') {
      completedTasks = Object.fromEntries(
        Object.entries(completedTasksRaw).map(([taskId, xp]) => [
          taskId,
          Number.isFinite(Number(xp)) ? Number(xp) : DEFAULT_TASK_XP,
        ])
      );
    }

    return {
      readSlugs: Array.isArray(parsed.readSlugs) ? parsed.readSlugs : [],
      completedTasks,
    };
  } catch {
    return { readSlugs: [], completedTasks: {} };
  }
}

function writeStore(store: XpStore): void {
  if (!isClient()) return;
  window.localStorage.setItem(XP_STORAGE_KEY, JSON.stringify(store));
  notifyGamificationLocalWrite();
  scheduleConvexGamificationSync();
}

export function getXpState(): XpState {
  const store = readStore();
  const readCount = store.readSlugs.length;
  const completedTaskEntries = Object.entries(store.completedTasks);
  const completedTaskCount = completedTaskEntries.length;
  const readXp = readCount * READ_XP;
  const taskXp = completedTaskEntries.reduce((acc, [, xp]) => acc + xp, 0);

  return {
    totalXp: readXp + taskXp,
    readXp,
    taskXp,
    readCount,
    completedTaskCount,
  };
}

export function awardReadXp(slug: string): XpState {
  if (!slug) return getXpState();
  const store = readStore();
  if (!store.readSlugs.includes(slug)) {
    store.readSlugs.push(slug);
    writeStore(store);
  }
  return getXpState();
}

export function setTaskCompleted(
  taskId: string,
  completed: boolean,
  taskType: TaskType = 'action'
): XpState {
  if (!taskId) return getXpState();
  const store = readStore();
  const exists = Object.prototype.hasOwnProperty.call(store.completedTasks, taskId);

  if (completed && !exists) {
    store.completedTasks[taskId] = TASK_XP_BY_TYPE[taskType] ?? DEFAULT_TASK_XP;
    writeStore(store);
  } else if (!completed && exists) {
    delete store.completedTasks[taskId];
    writeStore(store);
  }

  return getXpState();
}

export function getXpLevel(totalXp: number): XpLevelState {
  const levelSize = 250;
  const level = Math.floor(totalXp / levelSize) + 1;
  const currentLevelXp = totalXp % levelSize;
  const nextLevelXp = levelSize;
  const progressPercent = Math.round((currentLevelXp / nextLevelXp) * 100);

  return {
    level,
    currentLevelXp,
    nextLevelXp,
    progressPercent,
  };
}
