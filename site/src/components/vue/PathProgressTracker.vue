<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from "vue";
import type { LearningPath } from "../../data/parcoursData";
import BrutalCheckbox from "./BrutalCheckbox.vue";
import Button from "../components/Button.vue";
import { hydrateGamificationFromConvex } from "../../gamification/convexSync";
import { GAMIFICATION_UPDATED_EVENT } from "../../gamification/storageKeys";
import {
  createPathStepKey,
  getCompletedStepIds,
  setCompletedStepIds,
} from "../../gamification/pathProgress";
import { fireBadgeConfetti } from "@diane-winflowz/gamification";
import {
  getXpState,
  setTaskCompleted,
  type TaskType,
  type XpState,
} from "../../gamification/xp";

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
  props.pathData.modules.reduce((acc, module) => acc + module.steps.length, 0),
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

function moduleProgress(
  moduleId: string,
  stepIds: string[],
): { done: number; total: number } {
  const done = stepIds.filter((id) =>
    completedSteps.value.has(stepKey(moduleId, id)),
  ).length;
  return { done, total: stepIds.length };
}

function stepTypeLabel(type: TaskType): string {
  switch (type) {
    case "quiz":
      return "Quiz";
    case "guide":
      return "Guide";
    case "tuto":
      return "Tuto";
    case "action":
      return "Action";
    default:
      return "Étape";
  }
}

function stepXp(type: TaskType): number {
  switch (type) {
    case "quiz":
      return 15;
    case "guide":
      return 25;
    case "tuto":
      return 30;
    case "action":
      return 40;
    default:
      return 20;
  }
}

function isStepAvailable(href: string, availableInBuild?: boolean): boolean {
  if (typeof availableInBuild === "boolean") return availableInBuild;
  return !!href;
}

function toggleStep(moduleId: string, stepId: string, checked: boolean): void {
  const key = stepKey(moduleId, stepId);
  const taskId = `${props.pathData.id}::${key}`;
  const next = new Set(completedSteps.value);
  const module = props.pathData.modules.find((item) => item.id === moduleId);
  const step = module?.steps.find((item) => item.id === stepId);
  const stepType = step?.type ?? "action";

  if (checked) next.add(key);
  else next.delete(key);

  completedSteps.value = next;
  setCompletedStepIds(props.pathData.id, Array.from(next));
  xp.value = setTaskCompleted(taskId, checked, stepType);

  if (
    next.size === totalSteps.value &&
    totalSteps.value > 0 &&
    !celebrationShown.value
  ) {
    fireBadgeConfetti();
    celebrationShown.value = true;
  }
}

onMounted(() => {
  void hydrateGamificationFromConvex().finally(refreshFromStorage);
  window.addEventListener("storage", refreshFromStorage);
  window.addEventListener(GAMIFICATION_UPDATED_EVENT, refreshFromStorage);
});

onBeforeUnmount(() => {
  window.removeEventListener("storage", refreshFromStorage);
  window.removeEventListener(GAMIFICATION_UPDATED_EVENT, refreshFromStorage);
});
</script>

<template>
  <div class="path-progress">
    <article class="progress-overview">
      <div class="progress-top">
        <div class="progress-title-wrap">
          <h2>Progression du parcours</h2>
          <p class="progress-summary">
            {{ completedCount }} / {{ totalSteps }} étapes complétées
          </p>
        </div>
        <div class="progress-badges">
          <span class="progress-badge progress-badge-percent"
            >{{ progressPercent }}%</span
          >
          <span class="progress-badge progress-badge-xp"
            >⭐ {{ xp.taskXp }} XP</span
          >
        </div>
      </div>
      <div
        class="progress-track"
        role="progressbar"
        :aria-valuenow="progressPercent"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="progress-fill"
          :style="{ width: progressPercent + '%' }"
        ></div>
      </div>
    </article>

    <div class="modules-list">
      <article
        v-for="(module, moduleIndex) in pathData.modules"
        :key="module.id"
        class="module-card gc-card gc-card--informative"
      >
        <div class="module-header">
          <div class="module-header-top">
            <span class="module-index-badge">Module {{ moduleIndex + 1 }}</span>
            <h3 class="module-title-center">{{ module.title }}</h3>
            <p class="module-stats">
              {{
                moduleProgress(
                  module.id,
                  module.steps.map((step) => step.id),
                ).done
              }}
              / {{ module.steps.length }} étapes
            </p>
          </div>
          <p class="module-objective">{{ module.objective }}</p>
        </div>

        <ol>
          <li
            v-for="(step, stepIndex) in module.steps"
            :key="step.id"
            :class="{ 'step-completed': isCompleted(module.id, step.id) }"
          >
            <div class="step-check">
              <BrutalCheckbox
                :model-value="isCompleted(module.id, step.id)"
                :label="`Valider l'étape ${stepIndex + 1}: ${step.title}`"
                @update:model-value="
                  (checked: boolean) => toggleStep(module.id, step.id, checked)
                "
              />
              <div class="step-content">
                <strong>Étape {{ stepIndex + 1 }}: {{ step.title }}</strong>
                <span class="step-meta">
                  <span class="step-type" :class="step.type">{{
                    stepTypeLabel(step.type as TaskType)
                  }}</span>
                  <span class="step-xp"
                    >+{{ stepXp(step.type as TaskType) }} XP</span
                  >
                </span>
                <p>{{ step.description }}</p>
              </div>
            </div>
            <Button
              v-if="isStepAvailable(step.href, step.availableInBuild)"
              :href="step.href"
              variant="secondary"
            >
              Ouvrir
            </Button>
            <span v-else class="step-open-link step-open-link-disabled">
              Bientôt
            </span>
          </li>
        </ol>
      </article>
    </div>
  </div>
</template>

<style scoped>
.path-progress {
  --pp-surface: var(--progress-tracker-surface);
  --pp-surface-muted: var(--progress-tracker-surface-muted);
  --pp-border: var(--progress-tracker-border);
  --pp-shadow: var(--progress-tracker-shadow);
  --pp-text: var(--progress-tracker-text);
  --pp-link: var(--progress-tracker-link);
  --pp-link-hover: var(--progress-tracker-link-hover);
  --pp-progress-track: var(--progress-tracker-progress-track);
  --pp-progress-fill: var(--progress-tracker-progress-fill);
  --pp-badge-text: var(--progress-tracker-badge-text);
  --pp-module-stats-bg: var(--progress-tracker-module-stats-bg);
  --pp-module-stats-border: var(--progress-tracker-module-stats-border);
  --pp-module-stats-text: var(--progress-tracker-module-stats-text);

  display: flex;
  flex-direction: column;
  gap: var(--home-grid-gap);
}

.progress-overview {
  background: var(--pp-surface);
  border: var(--path-page-surface-border-width) solid var(--pp-border);
  box-shadow: var(--progress-tracker-overview-shadow);
  filter: var(--progress-tracker-overview-shadow-filter);
  color: var(--pp-text);
  padding: var(--progress-tracker-overview-padding) !important;
  position: sticky;
  top: var(--progress-tracker-overview-top);
  z-index: 35;
  overflow: visible;
  margin-bottom: var(--progress-tracker-module-margin-bottom);
  padding-bottom: var(--progress-tracker-module-padding-bottom) !important;
}

.progress-overview::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: var(--progress-tracker-overview-after-offset);
  height: var(--progress-tracker-overview-after-height);
  background-color: inherit;
  border-bottom: var(--progress-tracker-overview-after-border-width) solid
    var(--pp-border);
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
  gap: var(--progress-tracker-overview-gap);
  margin-bottom: var(--gc-primitive-space-2);
}

.progress-title-wrap {
  min-width: 0;
}

.progress-overview h2 {
  margin: 0;
  font-size: var(--gc-primitive-space-4);
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
  border: var(--progress-tracker-track-border-width) solid var(--pp-border);
  padding: var(--progress-tracker-badge-padding);
  font-size: var(--progress-tracker-badge-font-size);
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
  height: var(--progress-tracker-track-height);
  border: var(--progress-tracker-track-border-width) solid var(--pp-border);
  background: var(--pp-progress-track);
  border-radius: var(--progress-tracker-track-radius);
  overflow: hidden;
}

@media (min-width: var(--progress-tracker-desktop-breakpoint)) {
  .progress-overview {
    top: var(--progress-tracker-overview-top-desktop);
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
  gap: var(--progress-tracker-module-gap);
}

.module-card {
  color: var(--pp-text);
  padding: var(--progress-tracker-module-padding);
  position: relative;
  overflow: visible;
  margin-bottom: var(--progress-tracker-module-margin-bottom);
  padding-bottom: var(--progress-tracker-module-padding-bottom);
}

.module-card::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: var(--progress-tracker-module-after-offset);
  height: var(--progress-tracker-module-after-height);
  background-color: inherit;
  border-bottom: var(--progress-tracker-module-after-border-width) solid
    var(--pp-border);
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
  padding-bottom: var(--progress-tracker-module-padding);
}

.modules-list .module-card:last-child::after {
  display: none;
}

.module-header {
  display: flex;
  flex-direction: column;
  gap: var(--progress-tracker-module-header-gap);
  padding: 0;
  margin-bottom: 0.65rem;
}

.module-header-top {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--progress-tracker-module-header-top-gap);
}

.module-index-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: var(--progress-tracker-step-link-border-width) solid var(--pp-border);
  background: var(--brand-yellow);
  color: var(--brand-black);
  font-size: var(--progress-tracker-module-index-font-size);
  font-weight: 800;
  letter-spacing: var(--gc-primitive-font-letter-spacing-wide);
  text-transform: uppercase;
  white-space: nowrap;
  padding: var(--progress-tracker-module-index-padding);
  line-height: 1.2;
}

.module-title-center {
  margin: 0;
  font-size: var(--progress-tracker-module-title-size);
  line-height: 1.25;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: var(--gc-primitive-font-letter-spacing-wide);
  text-align: center;
  min-width: 0;
}

.module-objective {
  margin: 0.24rem 0 0;
  line-height: 1.35;
  font-size: var(--progress-tracker-module-objective-size);
}

.module-stats {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: var(--progress-tracker-module-stats-border-width) solid
    var(--pp-module-stats-border);
  background: var(--pp-module-stats-bg);
  color: var(--pp-module-stats-text);
  font-size: var(--progress-tracker-module-stats-font-size);
  font-weight: 800;
  white-space: nowrap;
  margin: 0;
  padding: var(--progress-tracker-module-stats-padding);
  line-height: 1.2;
}

.module-card ol {
  margin: 0.6rem 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--progress-tracker-module-gap);
}

.module-card li {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: flex-start;
  gap: var(--progress-tracker-step-gap);
  background: var(--pp-surface-muted);
  border: var(--progress-tracker-step-border-width) solid var(--pp-border);
  padding: var(--progress-tracker-step-padding);
  transition:
    border-color 0.16s ease,
    background-color 0.16s ease;
}

.module-card li:hover {
  border-color: var(--pp-link-hover);
}

.module-card li.step-completed {
  background: linear-gradient(
    120deg,
    var(--pp-surface-muted),
    color-mix(in srgb, var(--gc-primitive-color-brand-cream) 75%, transparent)
  );
}

.step-completed .step-content > strong {
  text-decoration: line-through;
  opacity: 0.78;
}

.step-check {
  display: flex;
  align-items: flex-start;
  gap: var(--gc-primitive-space-2);
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
  font-size: var(--progress-tracker-step-type-font-size);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: var(--gc-primitive-font-letter-spacing-wide);
  border: var(--progress-tracker-step-link-border-width) solid var(--pp-border);
  padding: var(--progress-tracker-step-type-padding);
  line-height: 1.2;
  text-align: center;
}

.step-type.quiz {
  background: var(--progress-tracker-step-quiz-bg);
  color: var(--progress-tracker-step-quiz-color);
}

.step-type.guide {
  background: var(--progress-tracker-step-guide-bg);
  color: var(--progress-tracker-step-guide-color);
}

.step-type.tuto {
  background: var(--progress-tracker-step-tuto-bg);
  color: var(--progress-tracker-step-tuto-color);
}

.step-type.action {
  background: var(--progress-tracker-step-action-bg);
  color: var(--progress-tracker-step-action-color);
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
  min-width: var(--progress-tracker-step-link-min-width);
  padding: var(--progress-tracker-step-link-padding);
  border: var(--progress-tracker-step-link-border-width) solid var(--pp-border);
  background: var(--pp-surface);
  text-decoration: none;
  line-height: 1.2;
  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    background-color 0.16s ease;
}

.step-open-link-disabled {
  opacity: 0.72;
  cursor: default;
}

.step-open-link:hover {
  transform: translate(1px, 1px);
  box-shadow: var(--progress-tracker-step-link-shadow-hover);
}

.step-open-link:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
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
  background: var(--progress-tracker-step-quiz-bg-dark);
  color: var(--progress-tracker-step-quiz-color-dark);
}

:global(.dark) .step-type.guide {
  background: var(--progress-tracker-step-guide-bg-dark);
  color: var(--progress-tracker-step-guide-color-dark);
}

:global(.dark) .step-type.tuto {
  background: var(--progress-tracker-step-tuto-bg-dark);
  color: var(--progress-tracker-step-tuto-color-dark);
}

:global(.dark) .step-type.action {
  background: var(--progress-tracker-step-action-bg-dark);
  color: var(--progress-tracker-step-action-color-dark);
}

:global(.dark) .step-xp {
  color: var(--brand-black);
}

@media (max-width: var(--progress-tracker-mobile-breakpoint)) {
  .module-stats {
    font-size: var(--progress-tracker-module-stats-font-size-mobile);
    padding: 0.18rem 0.45rem;
  }

  .module-title-center {
    font-size: var(--progress-tracker-module-title-size-mobile);
  }

  .module-objective {
    font-size: var(--progress-tracker-module-objective-size-mobile);
  }
}
</style>

<style>
html.dark .path-progress,
.dark .path-progress {
  --pp-surface: var(--progress-tracker-surface-dark);
  --pp-surface-muted: var(--progress-tracker-surface-muted-dark);
  --pp-border: var(--progress-tracker-border-dark);
  --pp-shadow: var(--progress-tracker-shadow-dark);
  --pp-text: var(--progress-tracker-text-dark);
  --pp-link: var(--progress-tracker-link-dark);
  --pp-link-hover: var(--progress-tracker-link-hover-dark);
  --pp-progress-track: var(--progress-tracker-progress-track-dark);
  --pp-progress-fill: var(--progress-tracker-progress-fill-dark);
  --pp-badge-text: var(--progress-tracker-badge-text-dark);
  --pp-module-stats-bg: var(--progress-tracker-module-stats-bg-dark);
  --pp-module-stats-border: var(--progress-tracker-module-stats-border-dark);
  --pp-module-stats-text: var(--progress-tracker-module-stats-text-dark);
}
</style>
