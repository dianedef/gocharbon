<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    label?: string;
    disabled?: boolean;
  }>(),
  {
    label: 'Basculer la case',
    disabled: false,
  }
);

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

function toggle(): void {
  if (props.disabled) return;
  emit('update:modelValue', !props.modelValue);
}

function onKeydown(event: KeyboardEvent): void {
  if (props.disabled) return;
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggle();
  }
}
</script>

<template>
  <button
    type="button"
    role="checkbox"
    class="brutal-checkbox"
    :class="{ checked: modelValue, disabled: disabled }"
    :aria-checked="String(modelValue)"
    :aria-label="label"
    :disabled="disabled"
    @click="toggle"
    @keydown="onKeydown"
  >
    <span class="icon" aria-hidden="true">
      <svg v-if="modelValue" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M5 12.5l4.2 4.2L19 7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
  </button>
</template>
