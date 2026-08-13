<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import {
  useGamification,
  fireBadgeConfetti,
} from "@diane-winflowz/gamification";
import type { Badge } from "@diane-winflowz/gamification";
import { createCharbonConfig } from "../../gamification/config";
import CharbonBadgeCard from "./CharbonBadgeCard.vue";
import { learningPaths } from "../../data/parcoursData";
import { hydrateGamificationFromConvex } from "../../gamification/convexSync";
import { GAMIFICATION_UPDATED_EVENT } from "../../gamification/storageKeys";
import {
  buildPathDescriptors,
  getPathBadges,
  getPathStats,
  type PathBadgeState,
  type PathStats,
} from "../../gamification/pathProgress";
import { getXpLevel, getXpState, type XpState } from "../../gamification/xp";

const mounted = ref(false);
const toastBadge = ref<Badge | null>(null);

const config = createCharbonConfig();
config.onBadgeEarned = (badge: Badge) => {
  toastBadge.value = badge;
  fireBadgeConfetti();
};

const { reader, streak, badges, progress } = useGamification(config);

const pathDescriptors = buildPathDescriptors(learningPaths);
const pathStats = ref<PathStats>({
  activePaths: 0,
  completedPaths: 0,
  totalPaths: pathDescriptors.length,
  completedSteps: 0,
  totalSteps: pathDescriptors.reduce((acc, item) => acc + item.totalSteps, 0),
  percent: 0,
});

const pathBadges = computed<PathBadgeState[]>(() =>
  getPathBadges(pathStats.value),
);
const xp = ref<XpState>({
  totalXp: 0,
  readXp: 0,
  taskXp: 0,
  readCount: 0,
  completedTaskCount: 0,
});
const xpLevel = computed(() => getXpLevel(xp.value.totalXp));

const allBadgeCards = computed(() => {
  const readingBadges = [
    ...badges.earned.value.map((badge) => ({ badge, earned: true })),
    ...badges.unearned.value.map((badge) => ({ badge, earned: false })),
  ];

  const parcoursBadges = pathBadges.value.map((badge) => ({
    badge: {
      id: badge.id,
      name: badge.name,
      description: badge.description,
      icon: badge.icon,
      condition: () => false,
    } as Badge,
    earned: badge.earned,
  }));

  return [...readingBadges, ...parcoursBadges];
});

const totalEarnedBadges = computed(
  () => allBadgeCards.value.filter((item) => item.earned).length,
);

function refreshPathStats() {
  pathStats.value = getPathStats(pathDescriptors);
}

function refreshXp() {
  xp.value = getXpState();
}

onMounted(() => {
  void hydrateGamificationFromConvex().finally(() => {
    refreshPathStats();
    refreshXp();
  });
  window.addEventListener("storage", refreshPathStats);
  window.addEventListener("storage", refreshXp);
  window.addEventListener(GAMIFICATION_UPDATED_EVENT, refreshPathStats);
  window.addEventListener(GAMIFICATION_UPDATED_EVENT, refreshXp);
  mounted.value = true;
});

onBeforeUnmount(() => {
  window.removeEventListener("storage", refreshPathStats);
  window.removeEventListener("storage", refreshXp);
  window.removeEventListener(GAMIFICATION_UPDATED_EVENT, refreshPathStats);
  window.removeEventListener(GAMIFICATION_UPDATED_EVENT, refreshXp);
});
</script>

<template>
  <div v-if="mounted" class="dashboard">
    <!-- Streak -->
    <section class="dashboard-section streak-section">
      <h2 class="section-title">Série de lecture</h2>
      <div class="streak-card gc-card gc-card--informative">
        <span class="streak-fire" :class="{ active: streak.isActive.value }"
          >🔥</span
        >
        <div class="streak-info">
          <span class="streak-current"
            >{{ streak.currentStreak.value }} jour{{
              streak.currentStreak.value > 1 ? "s" : ""
            }}</span
          >
          <span class="streak-best"
            >Record : {{ streak.longestStreak.value }} jour{{
              streak.longestStreak.value > 1 ? "s" : ""
            }}</span
          >
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="dashboard-section stats-section">
      <h2 class="section-title">Statistiques</h2>
      <div class="stats-grid">
        <div class="stat-card gc-card gc-card--informative">
          <span class="stat-value">{{ reader.totalRead.value }}</span>
          <span class="stat-label">Articles lus</span>
        </div>
        <div class="stat-card gc-card gc-card--informative">
          <span class="stat-value">{{ badges.earned.value.length }}</span>
          <span class="stat-label">Badges</span>
        </div>
        <div class="stat-card gc-card gc-card--informative">
          <span class="stat-value">{{ progress.overall.value.percent }}%</span>
          <span class="stat-label">Progression</span>
        </div>
        <div class="stat-card gc-card gc-card--informative">
          <span class="stat-value">{{ pathStats.completedSteps }}</span>
          <span class="stat-label">Étapes parcours</span>
        </div>
        <div class="stat-card gc-card gc-card--informative">
          <span class="stat-value">{{ pathStats.completedPaths }}</span>
          <span class="stat-label">Parcours terminés</span>
        </div>
        <div class="stat-card gc-card gc-card--informative">
          <span class="stat-value">{{ pathStats.percent }}%</span>
          <span class="stat-label">Progression parcours</span>
        </div>
        <div class="stat-card gc-card gc-card--informative">
          <span class="stat-value">{{ xp.totalXp }}</span>
          <span class="stat-label">XP total</span>
        </div>
        <div class="stat-card gc-card gc-card--informative">
          <span class="stat-value">N{{ xpLevel.level }}</span>
          <span class="stat-label">Niveau</span>
        </div>
        <div class="stat-card gc-card gc-card--informative">
          <span class="stat-value">{{ xp.readXp }}</span>
          <span class="stat-label">XP lecture</span>
        </div>
        <div class="stat-card gc-card gc-card--informative">
          <span class="stat-value">{{ xp.taskXp }}</span>
          <span class="stat-label">XP implémentation</span>
        </div>
      </div>
    </section>

    <section class="dashboard-section progress-section">
      <h2 class="section-title">Progression XP</h2>
      <div class="progress-label">
        <span class="progress-cat">Niveau {{ xpLevel.level }}</span>
        <span class="progress-pct"
          >{{ xpLevel.currentLevelXp }} / {{ xpLevel.nextLevelXp }} XP</span
        >
      </div>
      <div class="progress-track">
        <div
          class="progress-fill"
          :style="{ width: xpLevel.progressPercent + '%' }"
        ></div>
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
    <section
      v-if="Object.keys(progress.byCategory.value).length > 0"
      class="dashboard-section progress-section"
    >
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
            <div
              class="progress-fill"
              :style="{ width: entry.percent + '%' }"
            ></div>
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
  gap: var(--gamification-dashboard-gap);
  max-width: var(--gamification-dashboard-max-width);
  margin: 0 auto;
}

.dashboard-section {
  padding: var(--gamification-dashboard-section-padding);
  border: var(--gamification-dashboard-section-border);
  background: var(--gamification-dashboard-section-background);
  box-shadow: var(--gamification-dashboard-section-shadow);
  color: var(--gamification-dashboard-section-color, inherit);
}

.section-title {
  font-family: var(--gamification-dashboard-section-title-font-family);
  font-size: var(--gamification-dashboard-section-title-size);
  font-weight: var(--gamification-dashboard-section-title-weight);
  margin-bottom: var(--gamification-dashboard-section-title-margin-bottom);
  padding-bottom: var(--gamification-dashboard-section-title-padding-bottom);
  border-bottom: var(--gamification-dashboard-section-title-border-bottom);
}

/* Streak */
.streak-card {
  display: flex;
  align-items: center;
  gap: var(--gamification-dashboard-streak-gap);
}

.streak-fire {
  font-size: var(--gamification-dashboard-streak-icon-size);
  opacity: var(--gamification-dashboard-streak-icon-opacity);
  transition: var(--gamification-dashboard-streak-transition);
}

.streak-fire.active {
  opacity: 1;
}

.streak-info {
  display: flex;
  flex-direction: column;
}

.streak-current {
  font-size: var(--gamification-dashboard-streak-current-size);
  font-weight: var(--gamification-dashboard-streak-current-weight);
  font-family: var(--gamification-dashboard-streak-current-font-family);
}

.streak-best {
  font-size: var(--gamification-dashboard-streak-best-size);
  opacity: var(--gamification-dashboard-streak-best-opacity);
}

/* Stats */
.stats-grid {
  display: grid;
  grid-template-columns: var(--gamification-dashboard-stats-grid-columns);
  gap: var(--gamification-dashboard-stats-grid-gap);
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--gamification-dashboard-stat-card-padding);
}

.stat-value {
  font-size: var(--gamification-dashboard-stat-value-size);
  font-weight: var(--gamification-dashboard-stat-value-font-weight);
  font-family: var(--gamification-dashboard-stat-value-font-family);
}

.stat-label {
  font-size: var(--gamification-dashboard-stat-label-size);
  text-transform: var(--gamification-dashboard-stat-label-transform);
  opacity: var(--gamification-dashboard-stat-label-opacity);
}

@media (width <= 900px) {
  .stats-grid {
    grid-template-columns: var(
      --gamification-dashboard-stats-grid-columns-medium
    );
  }
}

@media (width <= 580px) {
  .stats-grid {
    grid-template-columns: var(
      --gamification-dashboard-stats-grid-columns-small
    );
  }
}

/* Badges */
.badges-grid {
  display: grid;
  grid-template-columns: var(--gamification-dashboard-badges-grid-columns);
  gap: var(--gamification-dashboard-badges-grid-gap);
}

/* Progress */
.progress-list {
  display: flex;
  flex-direction: column;
  gap: var(--gamification-dashboard-progress-list-gap);
}

.progress-item {
  display: flex;
  flex-direction: column;
  gap: var(--gamification-dashboard-progress-item-gap);
}

.progress-label {
  display: flex;
  justify-content: space-between;
  font-size: var(--gamification-dashboard-progress-label-size);
}

.progress-cat {
  font-weight: 600;
  text-transform: capitalize;
}

.progress-pct {
  opacity: 0.7;
}

.progress-track {
  height: var(--gamification-dashboard-progress-track-height);
  background: var(--gamification-dashboard-progress-track-background);
  border-radius: var(--gc-component-pixel-frame-radius);
  border: var(--gamification-dashboard-progress-track-border);
  overflow: hidden;
}

.progress-fill {
  height: var(--gamification-dashboard-progress-fill-height);
  background: var(--gamification-dashboard-progress-fill-background);
  border-radius: var(--gc-component-pixel-frame-radius);
  transition: var(--gamification-dashboard-progress-fill-transition);
}
</style>
