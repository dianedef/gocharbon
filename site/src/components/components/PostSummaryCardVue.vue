<script setup lang="ts">
import type { Post, PostSummaryCardProps } from "../../utils/types/content";
import Button from "./Button.vue";
import Pill from "./Pill.vue";
import { extractMainTags, getMainTagLabel } from "../../utils/tag-groups";
import { computed } from "vue";
import { computeEngagementBadge } from "../../utils/tool-qualification";
import { getToolDisplayChips } from "../../utils/tool-taxonomy";

interface Props extends PostSummaryCardProps {
  post: Post;
  index?: number;
}

const props = withDefaults(defineProps<Props>(), {
  index: 0,
});

const { data } = props.post;
const isInitialLoad = props.index < 2;

// Utiliser le composable pour générer les couleurs de manière réactive

// Vérifier que l'URL de l'image est valide
const imgSrc = computed(() => {
  if (typeof data.imgUrl === "string") {
    return data.imgUrl;
  }
  return data.imgUrl.src;
});

const mainTags = computed(() => extractMainTags(data.tags).slice(0, 2));
const toolDisplayChips = computed(() =>
  getToolDisplayChips({ id: props.post.id, data }),
);
const engagementBadge = computed(() => {
  if (data.section !== "outils") {
    return null;
  }

  return computeEngagementBadge({
    qualificationLocale: data.qualificationLocale,
    ancrageEconomique: data.ancrageEconomique,
    niveauResponsabilite: data.niveauResponsabilite,
    paysSiege: data.paysSiege,
    paysFiscal: data.paysFiscal,
    paysFondateurs: data.paysFondateurs,
    hebergementDonnees: data.hebergementDonnees,
    societeMere: data.societeMere,
    sourcesVerification: data.sourcesVerification,
    notesQualification: data.notesQualification,
    methodologieVersion: data.methodologieVersion,
  });
});
</script>

<template>
  <div
    class="brutal-card gc-card gc-card--informative"
    :transition:name="`post-${post.id}`"
  >
    <div class="p-3 md:p-4 rounded-lg dark:bg-black">
      <h3
        class="poppins text-base md:text-xl dark:text-yellow-soft"
        :transition:name="`title-${post.id}`"
      >
        {{ data.title }}
      </h3>
      <div
        class="rounded-lg border-3 my-3 md:my-4 h-24 md:h-50 overflow-hidden"
      >
        <img
          :src="imgSrc"
          :alt="data.title"
          width="800"
          height="400"
          :loading="isInitialLoad ? 'eager' : 'lazy'"
          :decoding="isInitialLoad ? 'sync' : 'async'"
          class="rounded h-full w-full object-cover"
          :transition:name="`image-${post.id}`"
          @error="($event.target as HTMLImageElement).src = '/placeholder.jpg'"
        />
      </div>
      <div class="flex flex-col gap-2 md:gap-4">
        <p class="poppins dark:text-yellow-soft text-sm md:text-base">
          {{ data.description }}
        </p>
        <div
          v-if="engagementBadge"
          class="engagement-chip"
          :class="`engagement-chip--${engagementBadge.tone}`"
        >
          <span class="engagement-chip__eyebrow">Badge GoCharbon</span>
          <strong>{{ engagementBadge.shortLabel }}</strong>
          <span class="engagement-chip__score"
            >Score {{ engagementBadge.score }}/{{
              engagementBadge.maxScore
            }}</span
          >
        </div>

        <div class="flex justify-end">
          <div class="rounded-lg">
            <Button :href="`/${post.id}`" variant="secondary">
              <span>Lire &rarr;</span>
            </Button>
          </div>
        </div>
      </div>

      <div class="hidden sm:inline-block mt-4">
        <div class="flex justify-between items-center">
          <ul class="flex flex-wrap gap-4 mt-2">
            <template v-if="data.section === 'outils'">
              <li v-for="chip in toolDisplayChips" :key="chip.label">
                <a
                  v-if="chip.href"
                  class="sanchez text-sm md:text-base"
                  :href="chip.href"
                >
                  <Pill :content="chip.label">{{ chip.label }}</Pill>
                </a>
                <Pill v-else :content="chip.label">{{ chip.label }}</Pill>
              </li>
            </template>
            <template v-else>
              <li v-for="mainTag in mainTags" :key="mainTag">
                <a
                  class="sanchez text-sm md:text-base"
                  :href="`/tag/${encodeURIComponent(mainTag)}`"
                >
                  <Pill :content="getMainTagLabel(mainTag)">{{
                    getMainTagLabel(mainTag)
                  }}</Pill>
                </a>
              </li>
            </template>
          </ul>
          <span
            v-if="data.draft"
            class="bg-primary rounded-full border-2 border-black dark:border-yellow-soft py-1 px-3 md:px-4 text-xs md:text-sm dark:text-yellow-soft"
          >
            Brouillon
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
