<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    as?: "article" | "aside" | "div" | "section";
    variant?: "informative" | "interactive" | "selectable" | "reward";
  }>(),
  {
    as: "div",
    variant: "informative",
  },
);

const classes = computed(() => ["gc-card", `gc-card--${props.variant}`]);
</script>

<template>
  <component :is="as" :class="classes">
    <slot />
  </component>
</template>
