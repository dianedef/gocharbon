<script setup lang="ts">
import { computed } from 'vue';
import { useRandomColor, type ColorProps } from '../../composables/useRandomColor';

interface Props extends ColorProps {
    class?: string;
    isSelected?: boolean;
    content?: string;
    isFilter?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    isSelected: false,
    content: '',
    isFilter: false
});

const emit = defineEmits<{
    (e: 'update:isSelected', value: boolean): void;
    (e: 'toggle'): void;
}>();

const { randomColor, randomDarkColor, isDarkTheme } = useRandomColor({
    ...props,
    content: props.content
});

// Calculer la couleur active en fonction du thème
const activeColor = computed(() => isDarkTheme.value ? randomDarkColor.value : randomColor.value);

// Fonction pour gérer le clic
function handleClick() {
    emit('update:isSelected', !props.isSelected);
    emit('toggle');
}
</script>

<template>
    <span 
        :class="[
            isFilter ? 'brutal-filter-pill' : 'brutal-pill', 
            { 
                'bg-active-color': isSelected,
                'pill-selected': isSelected
            }
        ]"
        :style="{ '--active-color': activeColor }"
        @click="handleClick"
    >
        <slot></slot>
    </span>
</template>

<style>
/* Variables globales */
:root {
    --softWhite: var(--brand-cream);
}

.vue-brutal-pill {
    background-color: var(--background-color, var(--brand-cream));
    border-radius: 9999px;
    border: 2px solid currentColor;
    padding: 0.25rem 0.75rem;
    font-size: small;
    color: var(--brand-black);
    transition: all 0.2s ease-out;
    will-change: transform, background-color, color;
    user-select: none;
    box-shadow: 3px 3px 0 var(--brand-black);
}

.vue-brutal-pill:hover {
    background-color: var(--color);
}

.vue-brutal-pill.selected {
    background-color: var(--selected-color, var(--color));
}

:global(.dark) .vue-brutal-pill {
    background-color: var(--background-color, var(--brand-ink));
    color: var(--softWhite);
    box-shadow: 3px 3px 0 var(--softWhite);
}

:global(.dark) .vue-brutal-pill:hover {
    background-color: var(--color);
}

:global(.dark) .vue-brutal-pill.selected {
    background-color: var(--selected-color, var(--color));
}

.vue-brutal-pill:hover,
.vue-brutal-pill.is-selected {
    background-color: var(--active-color) !important;
}

:global(.dark) .vue-brutal-pill:hover,
:global(.dark) .vue-brutal-pill.is-selected {
    background-color: var(--active-color) !important;
}

/* Animations pour brutal-filter-pill */
.brutal-filter-pill:not(.pill-selected):hover {
    transform: translateX(-10px) rotate(-5deg);
}

.brutal-filter-pill.pill-selected {
    transform: translateX(-10px) translateY(-15px);
}

.brutal-filter-pill.pill-selected.bg-active-color {
    background-color: var(--active-color) !important;
}

:global(.dark) .brutal-filter-pill.pill-selected.bg-active-color {
    background-color: var(--active-color) !important;
}
</style> 
