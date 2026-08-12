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

<style scoped>
.brutal-checkbox {
  width: 1.45rem;
  height: 1.45rem;
  min-width: 1.45rem;
  border: 3px solid var(--brand-black);
  box-shadow: 2px 2px 0 var(--brand-black);
  background: var(--brand-cream);
  color: var(--brand-black);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.15rem;
  transition: transform 0.1s ease, box-shadow 0.1s ease, background-color 0.15s ease;
}

.brutal-checkbox:hover {
  transform: translate(1px, 1px);
  box-shadow: 1px 1px 0 var(--brand-black);
}

.brutal-checkbox:focus-visible {
  outline: 2px dashed var(--brand-orange);
  outline-offset: 2px;
}

.brutal-checkbox.checked {
  background: var(--brand-yellow);
  border-color: var(--brand-black);
  box-shadow: 2px 2px 0 var(--brand-black);
}

.brutal-checkbox.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.icon {
  width: 1rem;
  height: 1rem;
}

.icon svg {
  width: 100%;
  height: 100%;
}

:global(.dark) .brutal-checkbox,
:global(html.dark) .brutal-checkbox {
  border-color: var(--brand-yellow) !important;
  box-shadow: 2px 2px 0 var(--brand-yellow) !important;
  background: var(--brand-ink) !important;
  color: var(--brand-yellow) !important;
}

:global(.dark) .brutal-checkbox:hover,
:global(html.dark) .brutal-checkbox:hover {
  box-shadow: 1px 1px 0 var(--brand-yellow) !important;
}

:global(.dark) .brutal-checkbox:focus-visible {
  outline-color: var(--brand-yellow);
}

:global(.dark) .brutal-checkbox.checked,
:global(html.dark) .brutal-checkbox.checked {
  background: var(--brand-ink) !important;
  color: var(--brand-yellow) !important;
  border-color: var(--brand-yellow) !important;
  box-shadow: 2px 2px 0 var(--brand-yellow) !important;
}
</style>
