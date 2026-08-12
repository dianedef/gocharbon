<script setup lang="ts">
import type { PostGridProps } from "../../utils/types/content";
import PostSummaryCardVue from "./PostSummaryCardVue.vue";

interface Props extends PostGridProps {
    posts: any[];
    showLoadingSpinner?: boolean;
    currentPage?: number;
    totalPages?: number;
}

const props = withDefaults(defineProps<Props>(), {
    showLoadingSpinner: false,
    currentPage: 1,
    totalPages: 1
});
</script>

<template>
    <div class="posts mt-2">
        <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 posts-container p-4 rounded-lg">
            <li v-for="(post, index) in posts" 
                :key="post.id"
                class="post transition-transform hover:scale-[1.02] duration-200"
                :data-tags="JSON.stringify(post.data.tags)">
                <PostSummaryCardVue :post="post" :index="index" />
            </li>
        </ul>
        <div v-if="showLoadingSpinner" class="flex justify-center mt-8">
            <div class="loading-spinner hidden" />
        </div>
    </div>
</template>

<style scoped>
.loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

:global(.dark) .loading-spinner {
    border-color: #374151;
    border-top-color: #60a5fa;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.hidden {
    display: none;
}
</style> 