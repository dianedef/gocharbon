import type { LearningPath } from '../data/parcoursData';
import type { TaskType } from './xp';
import { PATH_PROGRESS_STORAGE_KEY } from './storageKeys';
import {
  notifyGamificationLocalWrite,
  scheduleConvexGamificationSync,
} from './convexSync';

export interface StoredPathProgress {
  startedAt: string;
  updatedAt: string;
  completedStepIds: string[];
}

type PathProgressStore = Record<string, StoredPathProgress>;

export interface PathDescriptor {
  id: string;
  totalSteps: number;
}

export interface PathStats {
  activePaths: number;
  completedPaths: number;
  totalPaths: number;
  completedSteps: number;
  totalSteps: number;
  percent: number;
}

export interface PathBadgeState {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
}

export interface AutoCompletedTask {
  pathId: string;
  stepKey: string;
  stepType: TaskType;
}

function isClient(): boolean {
  return typeof window !== 'undefined';
}

function readStore(): PathProgressStore {
  if (!isClient()) return {};

  try {
    const raw = window.localStorage.getItem(PATH_PROGRESS_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as PathProgressStore;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function writeStore(store: PathProgressStore): void {
  if (!isClient()) return;
  window.localStorage.setItem(PATH_PROGRESS_STORAGE_KEY, JSON.stringify(store));
  notifyGamificationLocalWrite();
  scheduleConvexGamificationSync();
}

function normalizePath(path: string): string {
  const noQuery = path.split('?')[0]?.split('#')[0] ?? '';
  if (!noQuery) return '/';
  const withLeading = noQuery.startsWith('/') ? noQuery : `/${noQuery}`;
  return withLeading.endsWith('/') && withLeading !== '/'
    ? withLeading.slice(0, -1)
    : withLeading;
}

export function createPathStepKey(moduleId: string, stepId: string): string {
  return `${moduleId}::${stepId}`;
}

export function getCompletedStepIds(pathId: string): string[] {
  const store = readStore();
  return store[pathId]?.completedStepIds ?? [];
}

export function setCompletedStepIds(pathId: string, completedStepIds: string[]): string[] {
  const store = readStore();
  const now = new Date().toISOString();
  const uniqueIds = Array.from(new Set(completedStepIds));
  const previous = store[pathId];

  store[pathId] = {
    startedAt: previous?.startedAt ?? now,
    updatedAt: now,
    completedStepIds: uniqueIds,
  };

  writeStore(store);
  return uniqueIds;
}

export function buildPathDescriptors(paths: LearningPath[]): PathDescriptor[] {
  return paths.map((path) => ({
    id: path.id,
    totalSteps: path.modules.reduce((acc, mod) => acc + mod.steps.length, 0),
  }));
}

export function getPathStats(descriptors: PathDescriptor[]): PathStats {
  const store = readStore();

  let activePaths = 0;
  let completedPaths = 0;
  let completedSteps = 0;
  let totalSteps = 0;

  for (const descriptor of descriptors) {
    const completed = store[descriptor.id]?.completedStepIds.length ?? 0;
    const clampedCompleted = Math.min(completed, descriptor.totalSteps);
    totalSteps += descriptor.totalSteps;
    completedSteps += clampedCompleted;

    if (clampedCompleted > 0) activePaths += 1;
    if (descriptor.totalSteps > 0 && clampedCompleted >= descriptor.totalSteps) {
      completedPaths += 1;
    }
  }

  const percent = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;

  return {
    activePaths,
    completedPaths,
    totalPaths: descriptors.length,
    completedSteps,
    totalSteps,
    percent,
  };
}

export function getPathBadges(stats: PathStats): PathBadgeState[] {
  return [
    {
      id: 'parcours-starter',
      name: 'Explorateur',
      description: 'Tu as commence ton premier parcours.',
      icon: '🧭',
      earned: stats.activePaths >= 1,
    },
    {
      id: 'parcours-10',
      name: 'Execution',
      description: '10 étapes de parcours complétées.',
      icon: '⚙️',
      earned: stats.completedSteps >= 10,
    },
    {
      id: 'parcours-25',
      name: 'Marathonien',
      description: '25 étapes complétées, rythme solide.',
      icon: '🏃',
      earned: stats.completedSteps >= 25,
    },
    {
      id: 'parcours-finisher',
      name: 'Finisher',
      description: 'Tu as termine un parcours complet.',
      icon: '🏁',
      earned: stats.completedPaths >= 1,
    },
    {
      id: 'parcours-master',
      name: 'Master Builder',
      description: '3 parcours complets, niveau avancé.',
      icon: '🏆',
      earned: stats.completedPaths >= 3,
    },
  ];
}

export function autoCompleteStepsFromVisitedPath(
  paths: LearningPath[],
  visitedPath: string
): AutoCompletedTask[] {
  const normalizedVisited = normalizePath(visitedPath);
  const store = readStore();
  const now = new Date().toISOString();
  const completedTasks: AutoCompletedTask[] = [];

  for (const path of paths) {
    const existing = new Set(store[path.id]?.completedStepIds ?? []);

    for (const module of path.modules) {
      for (const step of module.steps) {
        if (normalizePath(step.href) !== normalizedVisited) continue;

        const key = createPathStepKey(module.id, step.id);
        if (existing.has(key)) continue;

        existing.add(key);
        completedTasks.push({
          pathId: path.id,
          stepKey: key,
          stepType: step.type as TaskType,
        });
      }
    }

    if (completedTasks.some((item) => item.pathId === path.id)) {
      store[path.id] = {
        startedAt: store[path.id]?.startedAt ?? now,
        updatedAt: now,
        completedStepIds: Array.from(existing),
      };
    }
  }

  if (completedTasks.length > 0) {
    writeStore(store);
  }

  return completedTasks;
}
