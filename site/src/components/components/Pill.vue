<script setup lang="ts">
defineOptions({ inheritAttrs: false });

interface Props {
  isSelected?: boolean;
  content?: string;
  isFilter?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isSelected: false,
  content: "",
  isFilter: false,
});

const emit = defineEmits<{
  (e: "update:isSelected", value: boolean): void;
  (e: "toggle"): void;
}>();

// Calculer la couleur active en fonction du thème
// Fonction pour gérer le clic
function handleClick() {
  emit("update:isSelected", !props.isSelected);
  emit("toggle");
}
</script>

<template>
  <component
    :is="isFilter ? 'button' : 'span'"
    :type="isFilter ? 'button' : undefined"
    :aria-pressed="isFilter ? isSelected : undefined"
    :class="[
      isFilter ? 'brutal-filter-pill gc-chip' : 'brutal-pill gc-chip',
      { 'is-active': isSelected },
    ]"
    @click="isFilter && handleClick()"
  >
    <slot></slot>
  </component>
</template>
