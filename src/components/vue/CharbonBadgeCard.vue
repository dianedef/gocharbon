<script setup lang="ts">
import type { Badge } from '@diane-winflowz/gamification'

defineProps<{
  badge: Badge
  earned: boolean
}>()
</script>

<template>
  <div class="charbon-badge-card" :class="{ earned, locked: !earned }">
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
