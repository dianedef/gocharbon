<script setup lang="ts">
import type { Badge } from '@diane-winflowz/gamification'

defineProps<{
  badge: Badge
  earned: boolean
}>()
</script>

<template>
  <div class="badge-card" :class="{ earned, locked: !earned }">
    <div class="badge-icon-wrap">
      <span class="badge-icon">{{ badge.icon }}</span>
    </div>
    <div class="badge-info">
      <span class="badge-name">{{ badge.name }}</span>
      <span v-if="earned" class="badge-desc">{{ badge.description }}</span>
      <span v-else class="badge-locked">???</span>
    </div>
  </div>
</template>

<style scoped>
.badge-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: 3px solid var(--brand-black);
  border-radius: 0.5rem;
  background: var(--brand-cream);
  box-shadow: 4px 4px 0 var(--brand-black);
  transition: transform 0.2s, box-shadow 0.2s;
}

.badge-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--brand-black);
}

:global(.dark) .badge-card {
  background: var(--brand-ink);
  border-color: var(--brand-cream);
  box-shadow: 4px 4px 0 var(--brand-cream);
  color: var(--brand-cream);
}

:global(.dark) .badge-card:hover {
  box-shadow: 6px 6px 0 var(--brand-cream);
}

.badge-card.locked {
  opacity: 0.5;
}

.badge-card.earned {
  background: var(--brand-yellow);
}

:global(.dark) .badge-card.earned {
  background: var(--brand-anthracite);
}

.badge-icon-wrap {
  font-size: 2rem;
  flex-shrink: 0;
}

.badge-info {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.badge-name {
  font-family: 'Sanchez', serif;
  font-weight: 700;
  font-size: 0.9375rem;
}

.badge-desc {
  font-size: 0.8125rem;
  opacity: 0.8;
}

.badge-locked {
  font-size: 0.8125rem;
  opacity: 0.5;
  font-style: italic;
}
</style>
