<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue';
import type { LearningPath } from '../../data/parcoursData';
import BrutalCheckbox from './BrutalCheckbox.vue';
import { hydrateGamificationFromConvex } from '../../gamification/convexSync';
import { GAMIFICATION_UPDATED_EVENT } from '../../gamification/storageKeys';
import {
  createPathStepKey,
  getCompletedStepIds,
  setCompletedStepIds,
} from '../../gamification/pathProgress';
import { fireBadgeConfetti } from '@diane-winflowz/gamification';
import { getXpState, setTaskCompleted, type TaskType, type XpState } from '../../gamification/xp';

const props = defineProps<{
  pathData: LearningPath;
}>();

const completedSteps = ref<Set<string>>(new Set());
const celebrationShown = ref(false);
const xp = ref<XpState>({
  totalXp: 0,
  readXp: 0,
  taskXp: 0,
  readCount: 0,
  completedTaskCount: 0,
});

const totalSteps = computed(() =>
  props.pathData.modules.reduce((acc, module) => acc + module.steps.length, 0)
);

const completedCount = computed(() => completedSteps.value.size);
const progressPercent = computed(() => {
  if (!totalSteps.value) return 0;
  return Math.round((completedCount.value / totalSteps.value) * 100);
});

function refreshFromStorage() {
  completedSteps.value = new Set(getCompletedStepIds(props.pathData.id));
  xp.value = getXpState();
}

function stepKey(moduleId: string, stepId: string): string {
  return createPathStepKey(moduleId, stepId);
}

function isCompleted(moduleId: string, stepId: string): boolean {
  return completedSteps.value.has(stepKey(moduleId, stepId));
}

function moduleProgress(moduleId: string, stepIds: string[]): { done: number; total: number } {
  const done = stepIds.filter((id) => completedSteps.value.has(stepKey(moduleId, id))).length;
  return { done, total: stepIds.length };
}

function stepTypeLabel(type: TaskType): string {
  switch (type) {
    case 'quiz':
      return 'Quiz';
    case 'guide':
      return 'Guide';
    case 'tuto':
      return 'Tuto';
    case 'action':
      return 'Action';
    default:
      return 'Étape';
  }
}

function stepXp(type: TaskType): number {
  switch (type) {
    case 'quiz':
      return 15;
    case 'guide':
      return 25;
    case 'tuto':
      return 30;
    case 'action':
      return 40;
    default:
      return 20;
  }
}

function toggleStep(moduleId: string, stepId: string, checked: boolean): void {
  const key = stepKey(moduleId, stepId);
  const taskId = `${props.pathData.id}::${key}`;
  const next = new Set(completedSteps.value);
  const module = props.pathData.modules.find((item) => item.id === moduleId);
  const step = module?.steps.find((item) => item.id === stepId);
  const stepType = step?.type ?? 'action';

  if (checked) next.add(key);
  else next.delete(key);

  completedSteps.value = next;
  setCompletedStepIds(props.pathData.id, Array.from(next));
  xp.value = setTaskCompleted(taskId, checked, stepType);

  if (next.size === totalSteps.value && totalSteps.value > 0 && !celebrationShown.value) {
    fireBadgeConfetti();
    celebrationShown.value = true;
  }
}

onMounted(() => {
  void hydrateGamificationFromConvex().finally(refreshFromStorage);
  window.addEventListener('storage', refreshFromStorage);
  window.addEventListener(GAMIFICATION_UPDATED_EVENT, refreshFromStorage);
});

onBeforeUnmount(() => {
  window.removeEventListener('storage', refreshFromStorage);
  window.removeEventListener(GAMIFICATION_UPDATED_EVENT, refreshFromStorage);
});
</script>

<template>
  <div class="path-progress">
    <article class="progress-overview">
      <div class="progress-top">
        <div class="progress-title-wrap">
          <h2>Progression du parcours</h2>
          <p class="progress-summary">{{ completedCount }} / {{ totalSteps }} étapes complétées</p>
        </div>
        <div class="progress-badges">
          <span class="progress-badge progress-badge-percent">{{ progressPercent }}%</span>
          <span class="progress-badge progress-badge-xp">⭐ {{ xp.taskXp }} XP</span>
        </div>
      </div>
      <div class="progress-track" role="progressbar" :aria-valuenow="progressPercent" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
      </div>
    </article>

    <div class="modules-list">
      <article v-for="(module, moduleIndex) in pathData.modules" :key="module.id" class="module-card">
        <div class="module-header">
          <div class="module-header-top">
            <span class="module-index-badge">Module {{ moduleIndex + 1 }}</span>
            <h3 class="module-title-center">{{ module.title }}</h3>
            <p class="module-stats">
              {{ moduleProgress(module.id, module.steps.map((step) => step.id)).done }} / {{ module.steps.length }} étapes
            </p>
          </div>
          <p class="module-objective">{{ module.objective }}</p>
        </div>

        <ol>
          <li v-for="(step, stepIndex) in module.steps" :key="step.id">
            <div class="step-check">
              <BrutalCheckbox
                :model-value="isCompleted(module.id, step.id)"
                :label="`Valider l'étape ${stepIndex + 1}: ${step.title}`"
                @update:model-value="(checked: boolean) => toggleStep(module.id, step.id, checked)"
              />
              <div class="step-content">
                <strong>Étape {{ stepIndex + 1 }}: {{ step.title }}</strong>
                <span class="step-meta">
                  <span class="step-type" :class="step.type">{{ stepTypeLabel(step.type as TaskType) }}</span>
                  <span class="step-xp">+{{ stepXp(step.type as TaskType) }} XP</span>
                </span>
                <p>{{ step.description }}</p>
              </div>
            </div>
            <a :href="step.href" class="step-open-link no-link-style" data-astro-prefetch>Ouvrir</a>
          </li>
        </ol>
      </article>
    </div>
  </div>
</template>

<style scoped>
.path-progress {
  --pp-surface: var(--brand-cream);
  --pp-surface-muted: var(--brand-cream);
  --pp-border: var(--brand-black);
  --pp-shadow: var(--brand-black);
  --pp-text: var(--brand-black);
  --pp-link: var(--brand-black);
  --pp-link-hover: var(--brand-orange);
  --pp-progress-track: var(--brand-cream-warm);
  --pp-progress-fill: var(--brand-orange);
  --pp-badge-text: var(--brand-black);
  --pp-module-stats-bg: var(--brand-cream);
  --pp-module-stats-border: var(--pp-border);
  --pp-module-stats-text: var(--pp-text);

  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.progress-overview {
  background: var(--pp-surface);
  border: 3px solid var(--pp-border);
  box-shadow: none;
  filter: drop-shadow(6px 6px 0 var(--pp-shadow));
  color: var(--pp-text);
  padding: 0.75rem 0.85rem !important;
  position: sticky;
  top: 4.6rem;
  z-index: 35;
  overflow: visible;
  margin-bottom: 30px;
  padding-bottom: 20px !important;
}

.progress-overview::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -30px;
  height: 30px;
  background-color: inherit;
  border-bottom: 5px solid var(--pp-border);
  clip-path: polygon(
    0 0,
    100% 0,
    95% 15px,
    90% 0,
    85% 15px,
    80% 0,
    75% 15px,
    70% 0,
    65% 15px,
    60% 0,
    55% 15px,
    50% 0,
    45% 15px,
    40% 0,
    35% 15px,
    30% 0,
    25% 15px,
    20% 0,
    15% 15px,
    10% 0,
    5% 15px,
    0 0
  );
  pointer-events: none;
  z-index: 2;
}

.progress-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.progress-title-wrap {
  min-width: 0;
}

.progress-overview h2 {
  margin: 0;
  font-size: 1rem;
  line-height: 1.2;
}

.progress-summary {
  margin: 0.12rem 0 0;
  font-size: 0.88rem;
  opacity: 0.85;
  line-height: 1.2;
}

.progress-badges {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.progress-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--pp-border);
  padding: 0.16rem 0.52rem;
  font-size: 0.78rem;
  font-weight: 800;
  line-height: 1.15;
  white-space: nowrap;
}

.progress-badge-percent {
  background: var(--pp-progress-fill);
  color: var(--brand-black);
}

.progress-badge-xp {
  background: var(--brand-yellow);
  color: var(--brand-black);
}

.progress-track {
  height: 0.58rem;
  border: 2px solid var(--pp-border);
  background: var(--pp-progress-track);
  border-radius: 0;
  overflow: hidden;
}

@media (min-width: 768px) {
  .progress-overview {
    top: 5.6rem;
  }
}

.progress-fill {
  height: 100%;
  background: var(--pp-progress-fill);
  transition: width 0.25s ease;
}

.modules-list {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.module-card {
  background: var(--pp-surface);
  border: 3px solid var(--pp-border);
  box-shadow: none;
  filter: drop-shadow(5px 5px 0 var(--pp-shadow));
  color: var(--pp-text);
  padding: 1rem;
  position: relative;
  overflow: visible;
  margin-bottom: 30px;
  padding-bottom: 20px;
}

.module-card::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -30px;
  height: 30px;
  background-color: inherit;
  border-bottom: 5px solid var(--pp-border);
  clip-path: polygon(
    0 0,
    100% 0,
    95% 15px,
    90% 0,
    85% 15px,
    80% 0,
    75% 15px,
    70% 0,
    65% 15px,
    60% 0,
    55% 15px,
    50% 0,
    45% 15px,
    40% 0,
    35% 15px,
    30% 0,
    25% 15px,
    20% 0,
    15% 15px,
    10% 0,
    5% 15px,
    0 0
  );
  pointer-events: none;
  z-index: 2;
}

.modules-list .module-card:last-child {
  margin-bottom: 0;
  padding-bottom: 1rem;
}

.modules-list .module-card:last-child::after {
  display: none;
}

.module-header {
  display: flex;
  flex-direction: column;
  gap: 0.48rem;
  padding: 0;
  margin-bottom: 0.65rem;
}

.module-header-top {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.55rem;
}

.module-index-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--pp-border);
  background: var(--brand-yellow);
  color: var(--brand-black);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  white-space: nowrap;
  padding: 0.18rem 0.48rem;
  line-height: 1.2;
}

.module-title-center {
  margin: 0;
  font-size: 1.22rem;
  line-height: 1.25;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  text-align: center;
  min-width: 0;
}

.module-objective {
  margin: 0.24rem 0 0;
  line-height: 1.35;
  font-size: 1rem;
}

.module-stats {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--pp-module-stats-border);
  background: var(--pp-module-stats-bg);
  color: var(--pp-module-stats-text);
  font-size: 0.9rem;
  font-weight: 800;
  white-space: nowrap;
  margin: 0;
  padding: 0.2rem 0.55rem;
  line-height: 1.2;
}

.module-card ol {
  margin: 0.6rem 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.module-card li {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: flex-start;
  gap: 0.8rem;
  background: var(--pp-surface-muted);
  border: 2px solid var(--pp-border);
  padding: 0.6rem;
}

.step-check {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
  min-width: 0;
}

.step-content {
  display: block;
  width: 100%;
}

.step-meta {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 0.2rem;
}

.step-type,
.step-xp {
  display: inline-block;
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  border: 2px solid var(--pp-border);
  padding: 0.12rem 0.52rem;
  line-height: 1.2;
  text-align: center;
}

.step-type.quiz {
  background: #bfd8ff;
  color: #0e2b4d;
}

.step-type.guide {
  background: #c9efcd;
  color: #12381f;
}

.step-type.tuto {
  background: #ffd8b2;
  color: #4a2b0f;
}

.step-type.action {
  background: #ffc2c2;
  color: #4e1313;
}

.step-xp {
  background: var(--brand-yellow);
  color: var(--brand-black);
}

.module-card li a {
  white-space: nowrap;
  font-weight: 700;
  color: var(--pp-link) !important;
}

.step-open-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  min-width: 5.5rem;
  padding: 0.35rem 0.6rem;
  border: 2px solid var(--pp-border);
  background: var(--pp-surface);
  text-decoration: none;
  line-height: 1.2;
}

.module-card li a:hover {
  color: var(--pp-link-hover);
}

:global(.dark) .step-type,
:global(.dark) .step-xp {
  border-color: var(--pp-border);
}

:global(.dark) .module-index-badge {
  border-color: var(--pp-border);
  background: var(--brand-yellow);
  color: var(--brand-black);
}

:global(.dark) .module-objective {
  color: var(--brand-cream);
  opacity: 0.95;
}

:global(.dark) .step-type {
  color: var(--pp-badge-text);
}

:global(.dark) .step-type.quiz {
  background: #0f4c81;
  color: #f5f5f2;
}

:global(.dark) .step-type.guide {
  background: #1f6b3a;
  color: #f5f5f2;
}

:global(.dark) .step-type.tuto {
  background: #8a4b11;
  color: #f5f5f2;
}

:global(.dark) .step-type.action {
  background: #8b1f1f;
  color: #f5f5f2;
}

:global(.dark) .step-xp {
  color: var(--brand-black);
}

@media (max-width: 780px) {
  .module-stats {
    font-size: 0.84rem;
    padding: 0.18rem 0.45rem;
  }

  .module-title-center {
    font-size: 1.05rem;
  }

  .module-objective {
    font-size: 0.94rem;
  }
}

</style>

<style>
html.dark .path-progress,
.dark .path-progress {
  --pp-surface: var(--brand-ink);
  --pp-surface-muted: var(--brand-charcoal);
  --pp-border: var(--brand-cream);
  --pp-shadow: var(--brand-cream);
  --pp-text: var(--brand-cream);
  --pp-link: var(--brand-yellow);
  --pp-link-hover: var(--brand-cream);
  --pp-progress-track: var(--brand-soot);
  --pp-progress-fill: var(--brand-yellow);
  --pp-badge-text: var(--brand-cream);
  --pp-module-stats-bg: var(--brand-charcoal);
  --pp-module-stats-border: var(--brand-yellow);
  --pp-module-stats-text: var(--brand-yellow);
}
</style>
