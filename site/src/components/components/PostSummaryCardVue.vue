<script setup lang="ts">
import type { Post, PostSummaryCardProps } from "../../utils/types/content";
import Button from "./Button.vue";
import Pill from "./Pill.vue";
import { normalizeTag } from "../../utils/tags";
import { useRandomColor } from "../../composables/useRandomColor";
import { computed } from "vue";

interface Props extends PostSummaryCardProps {
    post: Post;
    index?: number;
}

const props = withDefaults(defineProps<Props>(), {
    index: 0
});

const { data } = props.post;
const isInitialLoad = props.index < 15;

// Utiliser le composable pour générer les couleurs de manière réactive
const { randomColor, randomDarkColor } = useRandomColor({
    content: data.title
});

// Vérifier que l'URL de l'image est valide
const imgSrc = computed(() => {
    if (typeof data.imgUrl === 'string') {
        return data.imgUrl;
    }
    return data.imgUrl.src;
});
</script>

<template>
    <div class="brutal-card" :transition:name="`post-${post.id}`">
        <div class="p-3 md:p-4 rounded-lg dark:bg-black">
            <h3 class="poppins text-base md:text-xl dark:text-[#FFD35AD9]" :transition:name="`title-${post.id}`">
                {{ data.title }}
            </h3>
            <div class="rounded-lg border-3 my-3 md:my-4 h-24 md:h-50 overflow-hidden">
                <img :src="imgSrc" 
                     :alt="data.title"
                     width="800"
                     height="400"
                     :loading="isInitialLoad ? 'eager' : 'lazy'"
                     :decoding="isInitialLoad ? 'sync' : 'async'"
                     class="rounded h-full w-full object-cover"
                     :transition:name="`image-${post.id}`"
                     @error="($event.target as HTMLImageElement).src = '/placeholder.jpg'" />
            </div>
            <div class="flex flex-col gap-2 md:gap-4">
                <p class="poppins dark:text-[#FFD35AD9] text-sm md:text-base">
                    {{ data.description }}
                </p>

                <div class="flex justify-end">
                    <div class="rounded-lg">
                        <Button 
                            :href="`/${post.id}`" 
                            :color="randomColor" 
                            :darkColor="randomDarkColor"
                            class="text-sm md:text-base"
                        >
                            <span>Lire &rarr;</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div class="hidden sm:inline-block mt-4">
                <div class="flex justify-between items-center">
                    <ul class="flex flex-wrap gap-4 mt-2">
                        <li v-for="tag in data.tags" :key="tag">
                            <a class="sanchez text-sm md:text-base" :href="`/tag/${encodeURIComponent(normalizeTag(tag))}`">
                                <Pill :content="tag">{{ tag }}</Pill>
                            </a>
                        </li>
                    </ul>
                    <span v-if="data.draft" class="bg-green rounded-full border-2 border-black dark:border-[#FFD35AD9] py-1 px-3 md:px-4 text-xs md:text-sm dark:text-[#FFD35AD9]">
                        Brouillon
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.brutal-card {
    border-radius: 0.5rem;
    background-color: white;
    border: 3px solid var(--border-color);
}

:global(.dark) .brutal-card {
    background-color: black;
}

.brutal-card * {
    border-color: var(--border-color);
}
</style>
