<!--
  FilterTags.vue - Interactive Tag Filtering Component
  
  This is the main UI component for multi-tag post filtering.
  
  KEY FEATURES:
  - Hierarchical tag selection (main tags → subtags → sub-subtags)
  - Real-time post filtering with debouncing
  - URL state synchronization (shareable filtered views)
  - Loading states and pagination
  - Theme-aware pill colors
  
  BUSINESS LOGIC:
  - Selecting a subtag automatically selects its parent
  - Deselecting a parent clears all child selections
  - Tag changes are debounced (300ms) to reduce API calls
  - Filters persist in URL for bookmarking/sharing
  
  PERFORMANCE:
  - Debounced API calls (avoid request spam)
  - Leverages static/dynamic caching from API
  - Reactive state updates with Vue 3 Composition API
-->
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import type { Post, PostsUpdateEvent } from '../../utils/types/content';
import { tagHierarchy } from '../tagHierarchy';
import Pill from './Pill.vue';
import PostGridVue from './PostGridVue.vue';

interface Props {
    mainTags: string[];           // Top-level tag categories
    initialPosts: Post[];         // Posts to show before any filtering
    selectedTags?: string[];      // Pre-selected tags (from URL)
    scope?: 'all' | 'apps' | 'blog' | 'tutos' | 'parcours';
}

const props = withDefaults(defineProps<Props>(), {
    mainTags: () => [],
    initialPosts: () => [],
    selectedTags: () => [],
    scope: 'all'
});

// Reactive state for tag selections
// NOTE: Tags are separated by hierarchy level to enable parent-child relationship logic
const selectedMainTags = ref<string[]>(props.selectedTags || []);
const selectedSubTags = ref<string[]>([]);         // Currently unused (commented in template)
const selectedSubSubTags = ref<string[]>([]);     // Currently unused (commented in template)

// Reactive state for posts and UI
const posts = ref<Post[]>(props.initialPosts);
const isLoading = ref(false);
const currentPage = ref(1);
const totalPages = ref(1);

// Debounce timer to avoid excessive API calls during rapid tag selection
let debounceTimer: ReturnType<typeof setTimeout>;

/**
 * Emits custom event for Astro/vanilla JS integration
 * Allows non-Vue code to react to post updates
 */
function emitPostsUpdate() {
    const event = new CustomEvent("posts-updated", {
        detail: {
            posts: posts.value,
            isLoading: isLoading.value,
            currentPage: currentPage.value,
            totalPages: totalPages.value
        }
    }) as PostsUpdateEvent;
    window.dispatchEvent(event);
}

/**
 * Vue events for parent component communication
 */
const emit = defineEmits<{
    (event: 'update:selectedTags', value: string[]): void;
    (event: 'update:posts', value: Post[]): void;
}>();

/**
 * Determines if sub-subtags should be visible (currently unused)
 * Would be used if 3-level tag hierarchy is re-enabled
 */
function isSubSubTagsVisible(mainTag: string, subtagKey: string): boolean {
    return selectedMainTags.value.includes(mainTag) && selectedSubTags.value.includes(subtagKey);
}

/**
 * Toggles a main tag selection
 * 
 * BUSINESS LOGIC:
 * - Adding: Simply add to selection
 * - Removing: Also remove all child subtags and sub-subtags to maintain consistency
 * 
 * PERFORMANCE:
 * - Creates new array reference to ensure Vue reactivity triggers
 * - Uses nextTick to batch DOM updates before calling updateFilters
 * 
 * @param {string} tag - The main tag to toggle
 */
function toggleMainTag(tag: string) {
    const index = selectedMainTags.value.indexOf(tag);
    
    // Create new array reference (avoids Vue reactivity issues)
    const newSelectedMainTags = [...selectedMainTags.value];
    const mainTagData = tagHierarchy[tag];
    
    if (index === -1) {
        // Tag not selected → add it
        newSelectedMainTags.push(tag);
    } else {
        // Tag already selected → remove it AND its children
        newSelectedMainTags.splice(index, 1);
        
        // Clean up associated subtags (maintain consistency)
        if (mainTagData?.subtags) {
            const subtagsToRemove = Object.keys(mainTagData.subtags);
            selectedSubTags.value = selectedSubTags.value.filter(
                subtag => !subtagsToRemove.includes(subtag)
            );
            
            // Also clean up sub-subtags
            selectedSubSubTags.value = selectedSubSubTags.value.filter(subsubtag => {
                for (const subtag of subtagsToRemove) {
                    const subtagData = mainTagData?.subtags?.[subtag];
                    if (subtagData?.subtags?.[subsubtag]) {
                        return false;
                    }
                }
                return true;
            });
        }
    }
    
    // Update state (single update to trigger reactivity once)
    selectedMainTags.value = newSelectedMainTags;
    
    // Force immediate reactivity update
    updateFilters();
}

// Gestion des sous-tags
function toggleSubTag(mainTag: string, subtagKey: string) {
    const index = selectedSubTags.value.indexOf(subtagKey);
    if (index === -1) {
        selectedSubTags.value = [...selectedSubTags.value, subtagKey];
    } else {
        selectedSubTags.value = selectedSubTags.value.filter(t => t !== subtagKey);
        // Nettoyer les sous-sous-tags associés
        const mainTagData = tagHierarchy[mainTag];
        if (mainTagData?.subtags?.[subtagKey]) {
            const subtagData = mainTagData.subtags[subtagKey];
            if (subtagData.subtags) {
                const subsubtagsToRemove = Object.keys(subtagData.subtags);
                selectedSubSubTags.value = selectedSubSubTags.value.filter(
                    subsubtag => !subsubtagsToRemove.includes(subsubtag)
                );
            }
        }
    }
    updateFilters();
}

// Gestion des sous-sous-tags
function toggleSubSubTag(mainTag: string, subtagKey: string, subsubtagKey: string) {
    const index = selectedSubSubTags.value.indexOf(subsubtagKey);
    if (index === -1) {
        selectedSubSubTags.value = [...selectedSubSubTags.value, subsubtagKey];
    } else {
        selectedSubSubTags.value = selectedSubSubTags.value.filter(t => t !== subsubtagKey);
    }
    updateFilters();
}

/**
 * Updates filters with debouncing
 * 
 * DEBOUNCING STRATEGY:
 * Waits 300ms after the last tag selection before triggering API call.
 * This prevents excessive requests when user rapidly clicks multiple tags.
 * 
 * Example: User clicks 5 tags quickly → only 1 API call after 300ms of inactivity
 * 
 * EDGE CASES:
 * - No tags selected: Reset to initial posts, clear URL params
 * - Tags selected: Trigger loadPosts() after debounce period
 * 
 * URL SYNC:
 * Updates browser URL without page reload (enables sharing/bookmarking)
 */
function updateFilters() {
    // Cancel previous timer if user is still selecting tags
    if (debounceTimer) clearTimeout(debounceTimer);
    
    // Combine all selected tags across hierarchy levels
    const allSelectedTags = [
        ...selectedMainTags.value,
        ...selectedSubTags.value,
        ...selectedSubSubTags.value
    ];
    
    // Wait 300ms before executing (debounce)
    debounceTimer = setTimeout(() => {
        if (allSelectedTags.length === 0) {
            // No filters → show all posts
            posts.value = props.initialPosts;
            currentPage.value = 1;
            emit('update:posts', posts.value);
            emit('update:selectedTags', []);
            
            // Clear URL query params (clean URL)
            const url = new URL(window.location.href);
            url.searchParams.delete('tags');
            window.history.pushState({}, '', url.toString());
            return;
        }
        loadPosts();
    }, 300); // 300ms debounce (balance between responsiveness and efficiency)
}

// Fonction pour réinitialiser tous les filtres
function resetFilters() {
    selectedMainTags.value = [];
    selectedSubTags.value = [];
    selectedSubSubTags.value = [];
    currentPage.value = 1;
    posts.value = props.initialPosts;
    emit('update:posts', posts.value);
    emit('update:selectedTags', []);
    // Mise à jour de l'URL
    const url = new URL(window.location.href);
    url.searchParams.delete('tags');
    window.history.pushState({}, '', url.toString());
}

/**
 * Loads posts from API based on selected tags
 * 
 * API ROUTING STRATEGY:
 * 1. Single tag: Use /api/tags/{tag}.json (pre-generated, fast)
 * 2. Multiple tags: Use /api/filter-posts.json (may be cached if common combo)
 * 
 * PERFORMANCE OPTIMIZATIONS:
 * - Debounced to avoid request spam
 * - Leverages browser/CDN caching (static routes cached for 1 year)
 * - Shows loading state during fetch
 * 
 * ERROR HANDLING:
 * - Empty results: Shows empty state (handled by PostGridVue)
 * - Fetch errors: Logs to console, shows empty array
 * 
 * URL SYNC:
 * Updates URL with selected tags (enables sharing filtered views)
 */
async function loadPosts() {
    if (debounceTimer) clearTimeout(debounceTimer);
    
    debounceTimer = setTimeout(async () => {
        isLoading.value = true;
        emitPostsUpdate();

        try {
            const allSelectedTags = [
                ...selectedMainTags.value,
                // Subtags temporarily disabled (see template)
                // ...selectedSubTags.value,
                // ...selectedSubSubTags.value
            ];
            const perPage = props.scope === 'apps' || props.scope === 'tutos' || props.scope === 'parcours' ? 60 : 15;
            
            if (allSelectedTags.length === 0) {
                posts.value = props.initialPosts;
                return;
            }

            let response;
            let data;

            // OPTIMIZATION: Single tag uses static API (faster)
            if (allSelectedTags.length === 1) {
                const mainTag = allSelectedTags[0];
                const params = new URLSearchParams();
                if (props.scope !== 'all') {
                    params.set('scope', props.scope);
                }
                params.set('perPage', String(perPage));

                const endpoint = params.toString()
                    ? `/api/tags/${mainTag}.json?${params}`
                    : `/api/tags/${mainTag}.json`;

                response = await fetch(endpoint);
                data = await response.json();

                if (response.ok) {
                    posts.value = data.posts;
                    totalPages.value = Math.ceil(data.posts.length / perPage);
                }
            }
            // Multiple tags use filter API (may be cached if common combo)
            else {
                const params = new URLSearchParams();
                allSelectedTags.forEach(tag => {
                    params.append('tags', tag.toLowerCase());
                });
                params.set('page', currentPage.value.toString());
                params.set('perPage', String(perPage));
                if (props.scope !== 'all') {
                    params.set('scope', props.scope);
                }

                response = await fetch(`/api/filter-posts.json?${params}`);
                data = await response.json();

                if (response.ok) {
                    posts.value = data.posts;
                    totalPages.value = Math.ceil(data.posts.length / perPage);
                }
            }

            if (response.ok) {
                // Émettre les mises à jour
                emit('update:posts', posts.value);
                emit('update:selectedTags', allSelectedTags);

                // Mise à jour de l'URL sans rechargement
                const url = new URL(window.location.href);
                if (allSelectedTags.length > 0) {
                    url.searchParams.set('tags', allSelectedTags.join(','));
                } else {
                    url.searchParams.delete('tags');
                }
                window.history.pushState({}, '', url.toString());
            } else {
                console.error('Erreur lors du chargement des posts:', data?.error);
                posts.value = [];
            }
        } catch (error) {
            console.error('Erreur lors du chargement des posts:', error);
            posts.value = [];
        } finally {
            isLoading.value = false;
            emitPostsUpdate();
        }
    }, 300);
}

// Surveillance des changements de tags
watch([selectedMainTags, selectedSubTags, selectedSubSubTags], () => {
    // Réinitialiser la page uniquement si on n'est pas déjà en train de charger
    if (!isLoading.value) {
        currentPage.value = 1;
        updateFilters();
    }
}, { deep: true });

// Initialisation
onMounted(() => {
    // Récupérer les tags de l'URL au chargement
    const urlParams = new URLSearchParams(window.location.search);
    const urlTags = urlParams.get('tags');
    if (urlTags) {
        const tags = urlTags.split(',');
        // Trier les tags dans les bonnes catégories
        tags.forEach(tag => {
            if (props.mainTags.includes(tag)) {
                selectedMainTags.value.push(tag);
            } else {
                // Vérifier si c'est un sous-tag ou un sous-sous-tag
                for (const mainTag of props.mainTags) {
                    const mainTagData = tagHierarchy[mainTag];
                    if (mainTagData?.subtags && Object.keys(mainTagData.subtags).includes(tag)) {
                        selectedSubTags.value.push(tag);
                        return;
                    }
                    // Vérifier les sous-sous-tags
                    if (mainTagData?.subtags) {
                        for (const [subtagKey, subtag] of Object.entries(mainTagData.subtags)) {
                            if (subtag.subtags && Object.keys(subtag.subtags).includes(tag)) {
                                selectedSubSubTags.value.push(tag);
                                return;
                            }
                        }
                    }
                }
            }
        });
        loadPosts();
    }
});
</script>

<template>
    <div>
        <div class="tags-filter sticky top-[68px] md:top-[72px] z-[9999] py-2 md:py-3">
            <div class="filters-shell">
                <div class="filters-head">
                    <p class="filters-title">Filtres</p>
                    <div class="filters-actions">
                        <span class="filters-count">
                            {{ selectedMainTags.length }} actif<span v-if="selectedMainTags.length > 1">s</span>
                        </span>
                        <button
                            v-if="selectedMainTags.length > 0"
                            type="button"
                            class="filters-reset"
                            @click="resetFilters"
                        >
                            Réinitialiser
                        </button>
                    </div>
                </div>

                <!-- Tags principaux -->
                <ul class="tags-list">
                    <li v-for="tag in mainTags" :key="tag">
                        <label class="cursor-pointer mobile-pill-wrapper" @click.prevent="toggleMainTag(tag)">
                            <Pill 
                                :is-selected="selectedMainTags.includes(tag)" 
                                :content="tagHierarchy[tag]?.label || tag" 
                                :is-filter="true"
                                class="mobile-pill"
                            >
                                {{ tagHierarchy[tag]?.label || tag }}
                            </Pill>
                        </label>
                    </li>
                </ul>
            </div>

            <!-- Sous-tags niveau 2 (temporairement désactivés) -->
            <!-- <div v-for="mainTag in mainTags" 
                :key="mainTag"
                class="subtags-container"
                :class="{ 'hidden': !selectedMainTags.includes(mainTag) }"
                :data-parent="mainTag">
                <ul class="flex flex-wrap gap-1 md:gap-4 justify-center">
                    <li v-for="[subtagKey, subtag] in Object.entries(tagHierarchy[mainTag]?.subtags || {})"
                        :key="subtagKey">
                        <label class="cursor-pointer mobile-pill-wrapper">
                            <input
                                type="checkbox"
                                name="subtag-filter"
                                :value="subtagKey"
                                :data-parent="mainTag"
                                class="hidden subtag-checkbox"
                                :checked="selectedSubTags.includes(subtagKey)"
                                @change="toggleSubTag(mainTag, subtagKey)"
                            />
                            <a class="sanchez inline-flex items-center">
                                <Pill 
                                    :is-selected="selectedSubTags.includes(subtagKey)" 
                                    :content="subtag.label" 
                                    :is-filter="true"
                                    class="mobile-pill"
                                >
                                    {{ subtag.label }}
                                </Pill>
                            </a>
                        </label>
                    </li>
                </ul>
            </div> -->

            <!-- Sous-tags niveau 3 (temporairement désactivés) -->
            <!-- <div v-for="mainTag in mainTags" :key="`level3-${mainTag}`">
                <template v-for="[subtagKey, subtag] in Object.entries(tagHierarchy[mainTag]?.subtags || {})" :key="subtagKey">
                    <div class="subsubtags-container"
                        :class="{ 'hidden': !isSubSubTagsVisible(mainTag, subtagKey) }"
                        :data-parent="`${mainTag}-${subtagKey}`">
                        <ul class="flex flex-wrap gap-1 md:gap-4 justify-center">
                            <li v-for="[subsubtagKey, subsubtag] in Object.entries(subtag.subtags || {})"
                                :key="subsubtagKey">
                                <label class="cursor-pointer mobile-pill-wrapper">
                                    <input
                                        type="checkbox"
                                        name="subsubtag-filter"
                                        :value="subsubtagKey"
                                        :data-parent="`${mainTag}-${subtagKey}`"
                                        class="hidden subsubtag-checkbox"
                                        :checked="selectedSubSubTags.includes(subsubtagKey)"
                                        @change="toggleSubSubTag(mainTag, subtagKey, subsubtagKey)"
                                    />
                                    <a class="sanchez inline-flex items-center">
                                        <Pill 
                                            :is-selected="selectedSubSubTags.includes(subsubtagKey)" 
                                            :content="subsubtag.label" 
                                            :is-filter="true"
                                            class="mobile-pill"
                                        >
                                            {{ subsubtag.label }}
                                        </Pill>
                                    </a>
                                </label>
                            </li>
                        </ul>
                    </div>
                </template>
            </div> -->
        </div>

        <!-- Grille de posts avec un padding pour compenser le sticky -->
        <div class="pt-2 md:pt-2">
            <PostGridVue 
                :posts="posts"
                :show-loading-spinner="isLoading"
                :current-page="currentPage"
                :total-pages="totalPages"
            />
        </div>
    </div>
</template>

<style scoped>
.tags-filter {
    transition: opacity 0.3s ease-out;
}

.filters-shell {
    border: 3px solid var(--brand-black);
    background: color-mix(in srgb, var(--brand-cream) 93%, white 7%);
    box-shadow: 6px 6px 0 var(--brand-black);
    border-radius: 0.85rem;
    padding: 0.9rem 0.9rem 0.7rem;
}

:global(.dark) .filters-shell {
    border-color: var(--brand-cream);
    background: color-mix(in srgb, var(--brand-ink) 92%, var(--brand-charcoal) 8%);
    box-shadow: 6px 6px 0 var(--brand-cream);
}

.filters-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 0.1rem 0.2rem 0.85rem;
}

.filters-title {
    margin: 0;
    font-family: "Righteous", sans-serif;
    letter-spacing: 0.02em;
    font-size: 1.15rem;
    line-height: 1;
    color: var(--brand-black);
}

:global(.dark) .filters-title {
    color: var(--brand-cream);
}

.filters-actions {
    display: flex;
    align-items: center;
    gap: 0.55rem;
}

.filters-count {
    border: 2px solid var(--brand-black);
    border-radius: 999px;
    padding: 0.15rem 0.55rem;
    font-size: 0.78rem;
    font-weight: 700;
    line-height: 1;
    color: var(--brand-black);
}

:global(.dark) .filters-count {
    border-color: var(--brand-cream);
    color: var(--brand-cream);
}

.filters-reset {
    border: 2px solid var(--brand-black);
    border-radius: 999px;
    padding: 0.25rem 0.65rem;
    background: var(--brand-orange);
    color: var(--brand-cream);
    font-size: 0.78rem;
    font-weight: 800;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
    box-shadow: 2px 2px 0 var(--brand-black);
}

.filters-reset:hover {
    transform: translate(-1px, -1px);
}

.filters-reset:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 var(--brand-black);
}

:global(.dark) .filters-reset {
    border-color: var(--brand-cream);
    box-shadow: 2px 2px 0 var(--brand-cream);
}

:global(.dark) .filters-reset:active {
    box-shadow: 1px 1px 0 var(--brand-cream);
}

.tags-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem 0.75rem;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
}

:deep(.mobile-pill.brutal-filter-pill) {
    margin: 0;
    padding: 0.5rem 0.9rem;
    font-size: 0.95rem;
    line-height: 1.1;
    border-width: 2px;
    box-shadow: none;
    filter: none;
    transform: none !important;
    transition: transform 0.15s ease, background-color 0.15s ease, color 0.15s ease;
}

:deep(.mobile-pill.brutal-filter-pill:hover) {
    transform: translateY(-1px) !important;
}

:deep(.mobile-pill.brutal-filter-pill.pill-selected) {
    border-color: var(--brand-black);
    box-shadow: inset 0 0 0 2px var(--brand-black);
}

:global(.dark) :deep(.mobile-pill.brutal-filter-pill.pill-selected) {
    border-color: var(--brand-cream);
    box-shadow: inset 0 0 0 2px var(--brand-cream);
}

.subtags-container,
.subsubtags-container {
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.subtags-container:not(.hidden),
.subsubtags-container:not(.hidden) {
    opacity: 1;
    transform: translateY(0);
}

/* Animation pour le chargement */
.loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid var(--brand-cream);
    border-top: 5px solid var(--brand-orange);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.infinite-hidden {
    display: none;
}

/* Les styles des pills ont été migrés vers UnoCSS dans brutal-filter-pill */

/* Ajustements pour mobile */
@media (max-width: 640px) {
    .filters-shell {
        border-radius: 0.65rem;
        padding: 0.75rem 0.65rem 0.6rem;
    }

    .filters-head {
        padding-bottom: 0.7rem;
    }

    .filters-title {
        font-size: 1rem;
    }

    .filters-count,
    .filters-reset {
        font-size: 0.72rem;
    }

    .tags-list {
        gap: 0.5rem;
    }

    :deep(.mobile-pill-wrapper) {
        display: inline-block;
    }
}
</style> 
