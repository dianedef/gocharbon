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
  bottom: 1rem;
  right: 1rem;
  z-index: 50;
}

.bar-inner {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  border: 3px solid var(--brand-black);
  border-radius: 9999px;
  background: var(--brand-yellow);
  box-shadow: 4px 4px 0 var(--brand-black);
  font-family: 'Sanchez', serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--brand-black);
}

:global(.dark) .bar-inner {
  background: var(--brand-ink);
  border-color: var(--brand-cream);
  box-shadow: 4px 4px 0 var(--brand-cream);
  color: var(--brand-cream);
}

.streak-section {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.streak-icon {
  font-size: 1.125rem;
  opacity: 0.4;
  transition: opacity 0.3s;
}

.streak-icon.active {
  opacity: 1;
}

.badges-section {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.recent-badge {
  font-size: 1rem;
}

.badge-count,
.read-count {
  opacity: 0.8;
}

.read-section {
  border-left: 2px solid currentColor;
  padding-left: 0.75rem;
  opacity: 0.8;
}

.path-section {
  border-left: 2px solid currentColor;
  padding-left: 0.75rem;
  opacity: 0.85;
}

.xp-section {
  border-left: 2px solid currentColor;
  padding-left: 0.75rem;
  opacity: 0.9;
}

.toast-wrapper {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 100;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border: 3px solid var(--brand-black);
  border-radius: 0.5rem;
  background: var(--brand-yellow);
  box-shadow: 6px 6px 0 var(--brand-black);
  cursor: pointer;
  animation: toast-slide-in 0.4s ease-out;
}

:global(.dark) .toast-content {
  background: var(--brand-ink);
  border-color: var(--brand-cream);
  box-shadow: 6px 6px 0 var(--brand-cream);
  color: var(--brand-cream);
}

.toast-icon {
  font-size: 2rem;
}

.toast-text {
  display: flex;
  flex-direction: column;
  font-family: 'Sanchez', serif;
}

.toast-text strong {
  font-size: 0.875rem;
  text-transform: uppercase;
}

.toast-text span {
  font-size: 1rem;
}

.onboarding-tooltip {
  position: absolute;
  bottom: calc(100% + 0.75rem);
  right: 0;
  width: 280px;
  padding: 0.75rem 1rem;
  border: 3px solid var(--brand-black);
  border-radius: 0.5rem;
  background: var(--brand-cream);
  box-shadow: 4px 4px 0 var(--brand-black);
  font-family: 'Sanchez', serif;
  font-size: 0.85rem;
  color: var(--brand-black);
  animation: tooltip-pop 0.3s ease-out;
}

:global(.dark) .onboarding-tooltip {
  background: var(--brand-ink);
  border-color: var(--brand-cream);
  box-shadow: 4px 4px 0 var(--brand-cream);
  color: var(--brand-cream);
}

.onboarding-tooltip p {
  margin: 0 0 0.5rem;
  line-height: 1.4;
}

.onboarding-dismiss {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border: 2px solid var(--brand-black);
  background: var(--brand-yellow);
  font-family: 'Sanchez', serif;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  transition: transform 0.15s;
}

.onboarding-dismiss:hover {
  transform: translate(1px, 1px);
}

:global(.dark) .onboarding-dismiss {
  border-color: var(--brand-cream);
  background: var(--brand-charcoal);
  color: var(--brand-cream);
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
  animation: toast-slide-in 0.4s ease-out;
}

:global(.toast-leave-active) {
  animation: toast-slide-in 0.3s ease-in reverse;
}
</style>
