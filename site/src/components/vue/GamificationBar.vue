<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import {
  useGamification,
  AchievementToast,
  fireBadgeConfetti,
} from '@diane-winflowz/gamification'
import type { Badge } from '@diane-winflowz/gamification'
import { createCharbonConfig } from '../../gamification/config'
import { learningPaths } from '../../data/parcoursData'
import { hydrateGamificationFromConvex } from '../../gamification/convexSync'
import { GAMIFICATION_UPDATED_EVENT } from '../../gamification/storageKeys'
import {
  autoCompleteStepsFromVisitedPath,
  buildPathDescriptors,
  getPathStats,
  type PathStats,
} from '../../gamification/pathProgress'
import { awardReadXp, getXpLevel, getXpState, setTaskCompleted, type XpState } from '../../gamification/xp'

const props = defineProps<{
  slug: string
  category?: string
}>()

const toastBadge = ref<Badge | null>(null)
const mounted = ref(false)
const showOnboarding = ref(false)

function dismissOnboarding() {
  showOnboarding.value = false
  try { localStorage.setItem('gamification_charbon_onboarded', '1') } catch {}
}

const config = createCharbonConfig()
config.onBadgeEarned = (badge: Badge) => {
  toastBadge.value = badge
  fireBadgeConfetti()
}

const { reader, streak, badges, markAsRead } = useGamification(config)

const recentBadges = computed(() => badges.earned.value.slice(-3))
const pathDescriptors = buildPathDescriptors(learningPaths)
const pathStats = ref<PathStats>({
  activePaths: 0,
  completedPaths: 0,
  totalPaths: pathDescriptors.length,
  completedSteps: 0,
  totalSteps: pathDescriptors.reduce((acc, item) => acc + item.totalSteps, 0),
  percent: 0,
})
const xp = ref<XpState>({
  totalXp: 0,
  readXp: 0,
  taskXp: 0,
  readCount: 0,
  completedTaskCount: 0,
})
const xpLevel = computed(() => getXpLevel(xp.value.totalXp))

function refreshPathStats() {
  pathStats.value = getPathStats(pathDescriptors)
}

function refreshXp() {
  xp.value = getXpState()
}

onMounted(() => {
  mounted.value = true
  try {
    if (!localStorage.getItem('gamification_charbon_onboarded')) {
      showOnboarding.value = true
    }
  } catch {}
  void hydrateGamificationFromConvex().finally(() => {
    refreshPathStats()
    refreshXp()
  })
  window.addEventListener('storage', refreshPathStats)
  window.addEventListener('storage', refreshXp)
  window.addEventListener(GAMIFICATION_UPDATED_EVENT, refreshPathStats)
  window.addEventListener(GAMIFICATION_UPDATED_EVENT, refreshXp)
  if (props.slug) {
    markAsRead(props.slug, props.category)
    xp.value = awardReadXp(props.slug)
    const autoCompleted = autoCompleteStepsFromVisitedPath(learningPaths, `/${props.slug}`)
    if (autoCompleted.length > 0) {
      for (const item of autoCompleted) {
        xp.value = setTaskCompleted(`${item.pathId}::${item.stepKey}`, true, item.stepType)
      }
      refreshPathStats()
    }
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('storage', refreshPathStats)
  window.removeEventListener('storage', refreshXp)
  window.removeEventListener(GAMIFICATION_UPDATED_EVENT, refreshPathStats)
  window.removeEventListener(GAMIFICATION_UPDATED_EVENT, refreshXp)
})

watch(
  () => props.slug,
  (newSlug) => {
    if (newSlug && mounted.value) {
      markAsRead(newSlug, props.category)
      xp.value = awardReadXp(newSlug)
      const autoCompleted = autoCompleteStepsFromVisitedPath(learningPaths, `/${newSlug}`)
      if (autoCompleted.length > 0) {
        for (const item of autoCompleted) {
          xp.value = setTaskCompleted(`${item.pathId}::${item.stepKey}`, true, item.stepType)
        }
        refreshPathStats()
      }
    }
  }
)
</script>

<template>
  <div v-if="mounted" class="gamification-bar">
    <div class="bar-inner">
      <div class="streak-section">
        <span class="streak-icon" :class="{ active: streak.isActive.value }">
          🔥
        </span>
        <span class="streak-count">{{ streak.currentStreak.value }}</span>
      </div>

      <div class="badges-section">
        <span class="badge-count">
          {{ badges.earned.value.length }} badge{{ badges.earned.value.length > 1 ? 's' : '' }}
        </span>
        <span
          v-for="badge in recentBadges"
          :key="badge.id"
          class="recent-badge"
          :title="badge.name"
        >
          {{ badge.icon }}
        </span>
      </div>

      <div class="path-section">
        <span class="path-count">🎯 {{ pathStats.completedSteps }} étapes</span>
      </div>

      <div class="xp-section">
        <span class="xp-count">⭐ N{{ xpLevel.level }} • {{ xp.totalXp }} XP</span>
      </div>

      <div class="read-section">
        <span class="read-count">{{ reader.totalRead.value }} lu{{ reader.totalRead.value > 1 ? 's' : '' }}</span>
      </div>
    </div>

    <div v-if="showOnboarding" class="onboarding-tooltip">
      <p>Tes stats de progression GoCharbon. Lis des articles, complete des parcours, debloque des badges !</p>
      <button class="onboarding-dismiss" @click="dismissOnboarding">OK, compris</button>
    </div>

    <Teleport to="body">
      <AchievementToast :badge="toastBadge" :duration="5000" class="toast-wrapper">
        <template #default="{ badge: b, dismiss }">
          <div class="toast-content" @click="dismiss">
            <span class="toast-icon">{{ b.icon }}</span>
            <div class="toast-text">
              <strong>Badge débloqué !</strong>
              <span>{{ b.name }}</span>
            </div>
          </div>
        </template>
      </AchievementToast>
    </Teleport>
  </div>
</template>

<style scoped>
.gamification-bar {
  position: fixed;
  bottom: var(--gamification-bar-offset);
  right: var(--gamification-bar-offset);
  z-index: var(--gamification-bar-z-index);
}

.bar-inner {
  display: flex;
  align-items: center;
  gap: var(--gamification-bar-inner-gap);
  padding: var(--gamification-bar-inner-padding);
  border: var(--gamification-bar-inner-border);
  border-radius: var(--gamification-bar-inner-radius);
  background: var(--gamification-bar-inner-background);
  box-shadow: var(--gamification-bar-inner-shadow);
  font-family: var(--gamification-bar-inner-font-family);
  font-size: var(--gamification-bar-inner-font-size);
  font-weight: var(--gamification-bar-inner-font-weight);
  color: var(--gamification-bar-inner-color);
}

.streak-section {
  display: flex;
  align-items: center;
  gap: var(--gamification-bar-streak-gap);
}

.streak-icon {
  font-size: var(--gamification-bar-streak-icon-size);
  opacity: var(--gamification-bar-streak-opacity);
  transition: var(--gamification-bar-streak-transition);
}

.streak-icon.active {
  opacity: 1;
}

.badges-section {
  display: flex;
  align-items: center;
  gap: var(--gamification-bar-badge-gap);
}

.recent-badge {
  font-size: var(--gamification-bar-badge-font-size);
}

.badge-count,
.read-count {
  opacity: var(--gamification-bar-section-opacity);
}

.read-section {
  border-left: var(--gamification-bar-section-border-left);
  padding-left: var(--gamification-bar-section-padding-left);
  opacity: var(--gamification-bar-section-opacity);
}

.path-section {
  border-left: var(--gamification-bar-section-border-left);
  padding-left: var(--gamification-bar-section-padding-left);
  opacity: var(--gamification-bar-section-opacity-path);
}

.xp-section {
  border-left: var(--gamification-bar-section-border-left);
  padding-left: var(--gamification-bar-section-padding-left);
  opacity: var(--gamification-bar-section-opacity-xp);
}

.toast-wrapper {
  position: fixed;
  top: var(--gamification-bar-toast-offset);
  right: var(--gamification-bar-toast-offset);
  z-index: var(--gamification-bar-toast-z-index);
}

.toast-content {
  display: flex;
  align-items: center;
  gap: var(--gamification-bar-toast-gap);
  padding: var(--gamification-bar-toast-padding);
  border: var(--gamification-bar-toast-border);
  border-radius: var(--gamification-bar-toast-radius);
  background: var(--gamification-bar-toast-background);
  box-shadow: var(--gamification-bar-toast-shadow);
  cursor: pointer;
  animation: var(--gamification-bar-toast-animation);
  color: var(--gamification-bar-toast-color);
}

.toast-icon {
  font-size: var(--gamification-bar-toast-icon-size);
}

.toast-text {
  display: flex;
  flex-direction: column;
  font-family: var(--gamification-bar-toast-font-family);
  color: var(--gamification-bar-toast-color);
}

.toast-text strong {
  font-size: var(--gamification-bar-toast-text-strong-size);
  text-transform: uppercase;
}

.toast-text span {
  font-size: var(--gamification-bar-toast-text-span-size);
}

.onboarding-tooltip {
  position: absolute;
  bottom: var(--gamification-bar-onboarding-offset);
  right: 0;
  width: var(--gamification-bar-onboarding-width);
  padding: var(--gamification-bar-onboarding-padding);
  border: var(--gamification-bar-onboarding-border);
  border-radius: var(--gamification-bar-onboarding-radius);
  background: var(--gamification-bar-onboarding-background);
  box-shadow: var(--gamification-bar-onboarding-shadow);
  font-family: var(--gamification-bar-onboarding-font-family);
  font-size: var(--gamification-bar-onboarding-font-size);
  color: var(--gamification-bar-onboarding-color);
  animation: var(--gamification-bar-tooltip-animation);
}

.onboarding-tooltip p {
  margin: 0 0 0.5rem;
  line-height: var(--gamification-bar-onboarding-line-height);
}

.onboarding-dismiss {
  display: inline-block;
  padding: var(--gamification-bar-onboarding-dismiss-padding);
  border: var(--gamification-bar-onboarding-dismiss-border);
  background: var(--gamification-bar-onboarding-dismiss-background);
  font-family: var(--gamification-bar-onboarding-dismiss-font-family);
  font-weight: 700;
  font-size: var(--gamification-bar-onboarding-dismiss-font-size);
  color: var(--gamification-bar-onboarding-dismiss-color);
  cursor: pointer;
  transition: var(--gamification-bar-dismiss-transition);
}

.onboarding-dismiss:hover {
  transform: var(--gamification-bar-onboarding-dismiss-hover-translate);
}

@keyframes tooltip-pop {
  from { transform: translateY(8px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes toast-slide-in {
  from {
    transform: translateX(120%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Transition classes for AchievementToast */
:global(.toast-enter-active) {
  animation: var(--gamification-bar-toast-animation);
}

:global(.toast-leave-active) {
  animation: var(--gamification-bar-toast-animation-reverse);
}
</style>
