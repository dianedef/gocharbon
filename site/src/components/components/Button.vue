<script setup lang="ts">
interface Props {
    href: string;
    target?: string;
    variant?: 'primary' | 'secondary';
}

withDefaults(defineProps<Props>(), {
    target: '_self',
    variant: 'primary'
});
</script>

<template>
    <a 
        :href="href" 
        :target="target" 
        :class="['gc-action', `gc-action--${variant}`]"
    >
        <slot />
    </a>
</template>
