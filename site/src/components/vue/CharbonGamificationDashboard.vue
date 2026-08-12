<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useGamification, fireBadgeConfetti } from '@diane-winflowz/gamification'
import type { Badge } from '@diane-winflowz/gamification'
import { createCharbonConfig } from '../../gamification/config'
import CharbonBadgeCard from './CharbonBadgeCard.vue'
import { learningPaths } from '../../data/parcoursData'
import { hydrateGamificationFromConvex } from '../../gamification/convexSync'
import { GAMIFICATION_UPDATED_EVENT } from '../../gamification/storageKeys'
import {
  buildPathDescriptors,
  getPathBadges,
  getPathStats,
  type PathBadgeState,
  type PathStats,
} from '../../gamification/pathProgress'
import { getXpLevel, getXpState, type XpState } from '../../gamification/xp'

const mounted = ref(false)
const toastBadge = ref<Badge | null>(null)

const config = createCharbonConfig()
config.onBadgeEarned = (badge: Badge) => {
  toastBadge.value = badge
  fireBadgeConfetti()
}

const { reader, streak, badges, progress } = useGamification(config)

const pathDescriptors = buildPathDescriptors(learningPaths)
const pathStats = ref<PathStats>({
  activePaths: 0,
  completedPaths: 0,
  totalPaths: pathDescriptors.length,
  completedSteps: 0,
  totalSteps: pathDescriptors.reduce((acc, item) => acc + item.totalSteps, 0),
  percent: 0,
})

const pathBadges = computed<PathBadgeState[]>(() => getPathBadges(pathStats.value))
const xp = ref<XpState>({
  totalXp: 0,
  readXp: 0,
  taskXp: 0,
  readCount: 0,
  completedTaskCount: 0,
})
const xpLevel = computed(() => getXpLevel(xp.value.totalXp))

const allBadgeCards = computed(() => {
  const readingBadges = [
    ...badges.earned.value.map((badge) => ({ badge, earned: true })),
    ...badges.unearned.value.map((badge) => ({ badge, earned: false })),
  ]

  const parcoursBadges = pathBadges.value.map((badge) => ({
    badge: {
      id: badge.id,
      name: badge.name,
      description: badge.description,
      icon: badge.icon,
      condition: () => false,
    } as Badge,
    earned: badge.earned,
  }))

  return [...readingBadges, ...parcoursBadges]
})

const totalEarnedBadges = computed(() => allBadgeCards.value.filter((item) => item.earned).length)

function refreshPathStats() {
  pathStats.value = getPathStats(pathDescriptors)
}

function refreshXp() {
  xp.value = getXpState()
}

onMounted(() => {
  void hydrateGamificationFromConvex().finally(() => {
    refreshPathStats()
    refreshXp()
  })
  window.addEventListener('storage', refreshPathStats)
  window.addEventListener('storage', refreshXp)
  window.addEventListener(GAMIFICATION_UPDATED_EVENT, refreshPathStats)
  window.addEventListener(GAMIFICATION_UPDATED_EVENT, refreshXp)
  mounted.value = true
})

onBeforeUnmount(() => {
  window.removeEventListener('storage', refreshPathStats)
  window.removeEventListener('storage', refreshXp)
  window.removeEventListener(GAMIFICATION_UPDATED_EVENT, refreshPathStats)
  window.removeEventListener(GAMIFICATION_UPDATED_EVENT, refreshXp)
})
</script>

<template>
  <div v-if="mounted" class="dashboard">
    <!-- Streak -->
    <section class="dashboard-section streak-section">
      <h2 class="section-title">Série de lecture</h2>
      <div class="streak-card">
        <span class="streak-fire" :class="{ active: streak.isActive.value }">🔥</span>
        <div class="streak-info">
          <span class="streak-current">{{ streak.currentStreak.value }} jour{{ streak.currentStreak.value > 1 ? 's' : '' }}</span>
          <span class="streak-best">Record : {{ streak.longestStreak.value }} jour{{ streak.longestStreak.value > 1 ? 's' : '' }}</span>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="dashboard-section stats-section">
      <h2 class="section-title">Statistiques</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-value">{{ reader.totalRead.value }}</span>
          <span class="stat-label">Articles lus</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">{{ badges.earned.value.length }}</span>
          <span class="stat-label">Badges</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">{{ progress.overall.value.percent }}%</span>
          <span class="stat-label">Progression</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">{{ pathStats.completedSteps }}</span>
          <span class="stat-label">Étapes parcours</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">{{ pathStats.completedPaths }}</span>
          <span class="stat-label">Parcours terminés</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">{{ pathStats.percent }}%</span>
          <span class="stat-label">Progression parcours</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">{{ xp.totalXp }}</span>
          <span class="stat-label">XP total</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">N{{ xpLevel.level }}</span>
          <span class="stat-label">Niveau</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">{{ xp.readXp }}</span>
          <span class="stat-label">XP lecture</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">{{ xp.taskXp }}</span>
          <span class="stat-label">XP implémentation</span>
        </div>
      </div>
    </section>

    <section class="dashboard-section progress-section">
      <h2 class="section-title">Progression XP</h2>
      <div class="progress-label">
        <span class="progress-cat">Niveau {{ xpLevel.level }}</span>
        <span class="progress-pct">{{ xpLevel.currentLevelXp }} / {{ xpLevel.nextLevelXp }} XP</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" :style="{ width: xpLevel.progressPercent + '%' }"></div>
      </div>
    </section>

    <!-- Badges -->
    <section class="dashboard-section badges-section">
      <h2 class="section-title">
        Badges ({{ totalEarnedBadges }} / {{ allBadgeCards.length }})
      </h2>
      <div class="badges-grid">
        <CharbonBadgeCard
          v-for="item in allBadgeCards"
          :key="item.badge.id"
          :badge="item.badge"
          :earned="item.earned"
        />
      </div>
    </section>

    <!-- Progress by category -->
    <section v-if="Object.keys(progress.byCategory.value).length > 0" class="dashboard-section progress-section">
      <h2 class="section-title">Progression par catégorie</h2>
      <div class="progress-list">
        <div
          v-for="(entry, cat) in progress.byCategory.value"
          :key="cat"
          class="progress-item"
        >
          <div class="progress-label">
            <span class="progress-cat">{{ cat }}</span>
            <span class="progress-pct">{{ entry.read }}/{{ entry.total }}</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" :style="{ width: entry.percent + '%' }"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 48rem;
  margin: 0 auto;
}

.dashboard-section {
  padding: 1.5rem;
  border: 3px solid var(--brand-black);
  border-radius: 0.75rem;
  background: var(--brand-cream);
  box-shadow: 6px 6px 0 var(--brand-black);
}

:global(.dark) .dashboard-section {
  background: var(--brand-ink);
  border-color: var(--brand-cream);
  box-shadow: 6px 6px 0 var(--brand-cream);
  color: var(--brand-cream);
}

.section-title {
  font-family: 'Sanchez', serif;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid currentColor;
}

/* Streak */
.streak-card {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.streak-fire {
  font-size: 3rem;
  opacity: 0.3;
  transition: opacity 0.3s;
}

.streak-fire.active {
  opacity: 1;
}

.streak-info {
  display: flex;
  flex-direction: column;
}

.streak-current {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Sanchez', serif;
}

.streak-best {
  font-size: 0.875rem;
  opacity: 0.7;
}

/* Stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 2px solid var(--brand-black);
  border-radius: 0.5rem;
  background: var(--brand-yellow);
}

:global(.dark) .stat-card {
  background: var(--brand-anthracite);
  border-color: var(--brand-cream);
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Sanchez', serif;
}

.stat-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  opacity: 0.8;
}

@media (max-width: 900px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 580px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}

/* Badges */
.badges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

/* Progress */
.progress-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.progress-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
}

.progress-cat {
  font-weight: 600;
  text-transform: capitalize;
}

.progress-pct {
  opacity: 0.7;
}

.progress-track {
  height: 0.5rem;
  background: var(--brand-cream-warm);
  border-radius: 9999px;
  border: 1px solid var(--brand-black);
  overflow: hidden;
}

:global(.dark) .progress-track {
  background: var(--brand-soot);
  border-color: var(--brand-cream);
}

.progress-fill {
  height: 100%;
  background: var(--brand-orange);
  border-radius: 9999px;
  transition: width 0.5s ease;
}
</style>
