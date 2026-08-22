<template>
  <div class="quiz-container">
    <div v-if="!quizStarted" class="quiz-intro">
      <h2 class="quiz-title">Trouve une direction business à tester</h2>
      <p class="quiz-description">
        Réponds à quelques questions pour faire ressortir les modèles les plus
        compatibles avec tes contraintes et tes envies du moment.
      </p>
      <button @click="startQuiz" class="gc-action gc-action--primary">
        Commencer le Quiz
      </button>
    </div>

    <div v-else-if="!isFinished" class="quiz-content">
      <div class="quiz-nav">
        <button
          type="button"
          class="gc-control"
          :disabled="!canGoBack"
          @click="goBack"
        >
          ← Retour
        </button>
      </div>

      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: progressPercent + '%' }"
        ></div>
      </div>

      <Transition mode="out-in">
        <div :key="currentIndex" class="question-wrapper">
          <div class="question-card gc-card gc-card--informative">
            <span class="question-number"
              >Question {{ currentIndex + 1 }} /
              {{ activeQuizData.questions.length }}</span
            >
            <h3 class="question-text">{{ currentQuestion.text }}</h3>

            <div class="answers-grid">
              <button
                v-for="(option, index) in currentQuestion.options"
                :key="index"
                @click="submitAnswer(option, index)"
                class="answer-btn gc-control gc-card gc-card--selectable"
              >
                <span class="answer-icon">{{ option.icon }}</span>
                <span class="answer-text">{{ option.text }}</span>
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <div v-else class="quiz-results">
      <h2 class="results-title">Ta direction à tester</h2>
      <div class="result-card gc-card gc-card--reward">
        <div class="result-icon">{{ finalResultData.icon }}</div>
        <h3 class="result-name">{{ finalResultTitle }}</h3>
        <p class="result-description">{{ finalResultDescription }}</p>

        <div class="result-insights">
          <p :class="['confidence-badge', confidenceLevel.level]">
            {{ confidenceLevel.label }}
          </p>
          <p class="confidence-text">{{ confidenceLevel.description }}</p>
        </div>

        <div v-if="secondResultData" class="top-two-wrapper">
          <h4 class="top-two-title">Top 2 profils recommandés</h4>
          <div class="top-two-grid">
            <div class="top-two-card winner gc-card gc-card--reward">
              <span class="top-two-name"
                >{{ finalResultData.icon }} {{ finalResultTitle }}</span
              >
              <span class="top-two-score">{{ topResult.affinity }} %</span>
            </div>
            <div class="top-two-card gc-card gc-card--informative">
              <span class="top-two-name"
                >{{ secondResultData.icon }} {{ secondResultTitle }}</span
              >
              <span class="top-two-score"
                >{{ secondResult?.affinity ?? 0 }} %</span
              >
            </div>
          </div>
        </div>

        <ul class="result-strengths">
          <li
            v-for="(strength, index) in finalResultData.strengths"
            :key="index"
          >
            ✓ {{ strength }}
          </li>
        </ul>

        <div v-if="finalRelatedProfiles.length" class="related-profiles">
          <h4 class="related-profiles-title">Voies concrètes à explorer</h4>
          <div class="related-profiles-grid">
            <a
              v-for="profile in finalRelatedProfiles"
              :key="profile.slug"
              :href="profile.slug"
              class="related-profile-card gc-card gc-card--interactive no-link-style"
            >
              <span class="related-profile-name">{{ profile.title }}</span>
              <span
                v-if="profile.description"
                class="related-profile-description"
                >{{ profile.description }}</span
              >
            </a>
          </div>
        </div>

        <div class="result-actions">
          <a
            v-if="finalBizProfile?.learningPathUrl"
            :href="finalBizProfile.learningPathUrl"
            class="gc-action gc-action--primary no-link-style"
            @click="startLearningPath"
          >
            Commencer le Parcours
          </a>
          <a
            v-if="finalBizProfile && !finalBizProfile.learningPathUrl"
            :href="finalBizProfile.slug"
            class="gc-action gc-action--secondary no-link-style"
          >
            Voir la Fiche
          </a>
          <button @click="resetQuiz" class="gc-action gc-action--secondary">
            Refaire le Quiz
          </button>
          <button
            v-if="mode === 'quick'"
            type="button"
            class="gc-action gc-action--primary"
            @click="goToAdvancedQuiz"
          >
            Passer au Quiz Avancé
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import {
  createPathStepKey,
  getCompletedStepIds,
  setCompletedStepIds,
} from "../../gamification/pathProgress";
import { setTaskCompleted } from "../../gamification/xp";
import { type CanonicalArchetype } from "../../data/profileTaxonomy";
import { ROUTES } from "../../config/routes";
import { describeQuizSignal, rankQuizResults } from "../../utils/quizScoring";

type ProfileKey = CanonicalArchetype;
type ProfileScores = Record<ProfileKey, number>;

interface BizProfileData {
  title: string;
  description: string;
  slug: string;
  tags: string[];
  learningPathUrl?: string;
  learningPathId?: string;
  relatedProfiles?: RelatedProfileData[];
}

interface RelatedProfileData {
  title: string;
  description: string;
  slug: string;
  learningPathUrl?: string;
  learningPathId?: string;
}

interface QuizOption {
  text: string;
  icon: string;
  points: Partial<ProfileScores>;
  prefill?: {
    questionId: number;
    optionIndex: number;
  };
}

interface QuizQuestion {
  id: number;
  text: string;
  options: QuizOption[];
}

interface QuizResultData {
  title: string;
  icon: string;
  description: string;
  strengths: string[];
}

interface QuizPayload {
  questions: QuizQuestion[];
  results: Record<ProfileKey, QuizResultData>;
}

interface PrefillAnswer {
  questionId: number;
  optionIndex: number;
}

const props = withDefaults(
  defineProps<{
    bizProfiles?: Partial<Record<ProfileKey, BizProfileData | null>>;
    data?: QuizPayload | null;
    mode?: "quick" | "advanced";
    prefillAnswers?: PrefillAnswer[];
  }>(),
  {
    bizProfiles: () => ({}),
    data: null,
    mode: "advanced",
    prefillAnswers: () => [],
  },
);

const emptyQuizData: QuizPayload = {
  questions: [],
  results: {
    ecommerce: {
      title: "E-commerce",
      icon: "🛒",
      description: "",
      strengths: [],
    },
    saas: { title: "SaaS", icon: "⚙️", description: "", strengths: [] },
    content: { title: "Contenu", icon: "🎥", description: "", strengths: [] },
    service: { title: "Service", icon: "🤝", description: "", strengths: [] },
    formation: {
      title: "Formation",
      icon: "📚",
      description: "",
      strengths: [],
    },
  },
};

const quizStarted = ref(false);
const isFinished = ref(false);
const currentIndex = ref(0);
const answerHistory = ref<Array<Partial<ProfileScores>>>([]);
const selectedAnswers = ref<
  Array<{ questionId: number; optionIndex: number } | null>
>([]);
const prefilledQuestionIndexes = ref<Set<number>>(new Set());
const sessionPrefillAnswers = ref<PrefillAnswer[]>([]);

const scores = reactive({
  ecommerce: 0,
  saas: 0,
  content: 0,
  service: 0,
  formation: 0,
});
const activeQuizData = computed<QuizPayload>(() => props.data ?? emptyQuizData);

const currentQuestion = computed(
  () => activeQuizData.value.questions[currentIndex.value],
);

const sortedResults = computed(() =>
  rankQuizResults(scores, activeQuizData.value.questions),
);

const topResult = computed(
  () =>
    sortedResults.value[0] ?? {
      profile: "content" as ProfileKey,
      rawScore: 0,
      maxScore: 0,
      affinity: 0,
    },
);
const secondResult = computed(() => sortedResults.value[1] ?? null);
const finalResult = computed<ProfileKey>(() => topResult.value.profile);

const finalResultData = computed(
  () => activeQuizData.value.results[finalResult.value],
);
const secondResultData = computed(() =>
  secondResult.value
    ? activeQuizData.value.results[secondResult.value.profile]
    : null,
);
const finalBizProfile = computed(
  () => props.bizProfiles[finalResult.value] ?? null,
);
const finalRelatedProfiles = computed(
  () => finalBizProfile.value?.relatedProfiles ?? [],
);

const finalResultTitle = computed(() => finalResultData.value.title);
const finalResultDescription = computed(
  () => finalResultData.value.description,
);

const secondResultTitle = computed(() => {
  if (!secondResult.value) {
    return "";
  }

  return secondResultData.value?.title ?? "";
});
const mode = computed(() => props.mode);

const confidenceLevel = computed(() => {
  return describeQuizSignal(
    topResult.value.affinity,
    secondResult.value?.affinity ?? 0,
  );
});

const answeredCount = computed(
  () =>
    answerHistory.value.filter(
      (answer) => answer && Object.keys(answer).length > 0,
    ).length,
);
const progressPercent = computed(() => {
  const total = activeQuizData.value?.questions?.length ?? 0;
  if (!total) return 0;
  return Math.round((answeredCount.value / total) * 100);
});
const canGoBack = computed(
  () => previousAnswerableIndex(currentIndex.value - 1) >= 0,
);

const buildPrefillPayload = () =>
  selectedAnswers.value
    .filter(
      (item): item is { questionId: number; optionIndex: number } =>
        item !== null,
    )
    .map((item) => {
      const question = activeQuizData.value.questions.find(
        (q) => q.id === item.questionId,
      );
      const option = question?.options[item.optionIndex];
      return option?.prefill ?? null;
    })
    .filter((item): item is { questionId: number; optionIndex: number } =>
      Boolean(
        item &&
        Number.isInteger(item.questionId) &&
        Number.isInteger(item.optionIndex),
      ),
    );

const advancedPrefillUrl = computed(() => {
  const payload = buildPrefillPayload();
  if (payload.length === 0) {
    return "";
  }
  return `${ROUTES.quizAvance}?prefill=${encodeURIComponent(JSON.stringify(payload))}`;
});

const goToAdvancedQuiz = () => {
  const payload = buildPrefillPayload();
  if (typeof window === "undefined") {
    return;
  }

  try {
    if (payload.length > 0) {
      window.sessionStorage.setItem(
        "quiz_prefill_answers",
        JSON.stringify(payload),
      );
    } else {
      window.sessionStorage.removeItem("quiz_prefill_answers");
    }
  } catch {
    // Ignore storage errors, fallback to query string if available.
    if (advancedPrefillUrl.value) {
      window.location.assign(advancedPrefillUrl.value);
      return;
    }
  }

  window.location.assign(ROUTES.quizAvance);
};

function markQuizStepAsCompleted(pathId: string): void {
  if (!pathId) return;

  const stepId =
    mode.value === "quick" ? "orientation-rapide" : "orientation-avance";
  const stepKey = createPathStepKey("fondations", stepId);
  const completed = new Set(getCompletedStepIds(pathId));

  completed.add(stepKey);
  setCompletedStepIds(pathId, Array.from(completed));
  setTaskCompleted(`${pathId}::${stepKey}`, true, "quiz");
}

function startLearningPath(event: MouseEvent): void {
  const href = finalBizProfile.value?.learningPathUrl;
  if (!href || typeof window === "undefined") {
    return;
  }

  event.preventDefault();
  const pathId = finalBizProfile.value?.learningPathId;
  if (pathId) {
    markQuizStepAsCompleted(pathId);
  }
  window.location.assign(href);
}

const addPoints = (points: Partial<ProfileScores>) => {
  for (const [profile, value] of Object.entries(points)) {
    if (profile in scores) {
      scores[profile as keyof typeof scores] += value ?? 0;
    }
  }
};

const removePoints = (points: Partial<ProfileScores>) => {
  for (const [profile, value] of Object.entries(points)) {
    if (profile in scores) {
      scores[profile as keyof typeof scores] -= value ?? 0;
    }
  }
};

const nextAnswerableIndex = (fromIndex: number) => {
  let nextIndex = fromIndex;

  while (
    nextIndex < activeQuizData.value.questions.length &&
    prefilledQuestionIndexes.value.has(nextIndex)
  ) {
    nextIndex += 1;
  }

  return nextIndex;
};

const previousAnswerableIndex = (fromIndex: number) => {
  let previousIndex = fromIndex;

  while (
    previousIndex >= 0 &&
    prefilledQuestionIndexes.value.has(previousIndex)
  ) {
    previousIndex -= 1;
  }

  return previousIndex;
};

const updateProgressBar = () => {
  // Progression geree en CSS via progressPercent.
};

const applyPrefillAnswers = () => {
  const rawPrefill =
    props.prefillAnswers.length > 0
      ? props.prefillAnswers
      : sessionPrefillAnswers.value;

  if (mode.value !== "advanced" || rawPrefill.length === 0) {
    return;
  }

  const parsed = rawPrefill
    .filter(
      (item) =>
        Number.isInteger(item.questionId) &&
        Number.isInteger(item.optionIndex) &&
        item.optionIndex >= 0,
    )
    .slice(0, 12);

  parsed.forEach((prefill) => {
    const questionIndex = activeQuizData.value.questions.findIndex(
      (q) => q.id === prefill.questionId,
    );

    if (questionIndex === -1) {
      return;
    }

    const option =
      activeQuizData.value.questions[questionIndex]?.options?.[
        prefill.optionIndex
      ];

    if (!option) {
      return;
    }

    addPoints(option.points);
    answerHistory.value[questionIndex] = { ...option.points };
    selectedAnswers.value[questionIndex] = {
      questionId: prefill.questionId,
      optionIndex: prefill.optionIndex,
    };
    prefilledQuestionIndexes.value.add(questionIndex);
  });
};

onMounted(() => {
  if (
    mode.value !== "advanced" ||
    props.prefillAnswers.length > 0 ||
    typeof window === "undefined"
  ) {
    return;
  }

  try {
    const raw = window.sessionStorage.getItem("quiz_prefill_answers");
    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      sessionPrefillAnswers.value = parsed.filter(
        (item) =>
          item &&
          Number.isInteger(item.questionId) &&
          Number.isInteger(item.optionIndex) &&
          item.optionIndex >= 0,
      );
    }

    window.sessionStorage.removeItem("quiz_prefill_answers");
  } catch {
    sessionPrefillAnswers.value = [];
  }
});

const startQuiz = () => {
  if (!quizStarted.value) {
    applyPrefillAnswers();
    currentIndex.value = nextAnswerableIndex(0);
    if (currentIndex.value >= activeQuizData.value.questions.length) {
      isFinished.value = true;
    }
  }

  quizStarted.value = true;
  updateProgressBar();
};

const submitAnswer = (option: QuizOption, optionIndex: number) => {
  const points = option.points;
  answerHistory.value[currentIndex.value] = { ...points };
  selectedAnswers.value[currentIndex.value] = {
    questionId: currentQuestion.value.id,
    optionIndex,
  };

  addPoints(points);

  updateProgressBar();

  const nextIndex = nextAnswerableIndex(currentIndex.value + 1);

  if (nextIndex < activeQuizData.value.questions.length) {
    currentIndex.value = nextIndex;
  } else {
    isFinished.value = true;
  }
};

const goBack = () => {
  const previousIndex = previousAnswerableIndex(currentIndex.value - 1);

  if (previousIndex < 0) {
    return;
  }

  const previousPoints = answerHistory.value[previousIndex];

  if (previousPoints && Object.keys(previousPoints).length > 0) {
    removePoints(previousPoints);
  }

  answerHistory.value[previousIndex] = {};
  selectedAnswers.value[previousIndex] = null;
  currentIndex.value = previousIndex;
  updateProgressBar();
};

const resetQuiz = () => {
  quizStarted.value = false;
  isFinished.value = false;
  currentIndex.value = 0;
  answerHistory.value = [];
  selectedAnswers.value = [];
  prefilledQuestionIndexes.value = new Set();

  Object.keys(scores).forEach((key) => {
    scores[key as keyof typeof scores] = 0;
  });
};
</script>

<style scoped>
.quiz-container {
  max-width: var(--quiz-container-max-width);
  margin: 0 auto;
  padding: var(--quiz-container-padding);
}

.quiz-intro,
.quiz-results {
  text-align: center;
  background: var(--quiz-panel-background);
  border: var(--quiz-panel-border);
  box-shadow: var(--quiz-panel-shadow);
  padding: var(--quiz-panel-padding);
}

.quiz-title {
  font-size: var(--quiz-title-size);
  font-weight: var(--quiz-title-weight);
  margin-bottom: var(--quiz-title-margin-bottom);
  color: var(--quiz-title-color);
}

.quiz-description {
  font-size: var(--quiz-description-size);
  margin-bottom: var(--quiz-description-margin-bottom);
  color: var(--quiz-description-color);
  line-height: var(--quiz-description-line-height);
}

.quiz-nav {
  display: flex;
  justify-content: flex-start;
  margin-bottom: var(--quiz-nav-margin-bottom);
}

.progress-bar {
  width: var(--quiz-progress-bar-width);
  height: var(--quiz-progress-height);
  background-color: var(--quiz-progress-background);
  border: var(--quiz-progress-border);
  margin-bottom: var(--quiz-progress-margin-bottom);
  overflow: clip;
}

.progress-fill {
  width: var(--quiz-progress-fill-width);
  height: var(--quiz-progress-fill-height);
  background-color: var(--quiz-progress-fill-bg);
  transition: var(--quiz-progress-fill-transition);
}

.question-wrapper {
  min-height: var(--quiz-question-wrapper-min-height);
}

:deep(.v-enter-active),
:deep(.v-leave-active) {
  transition: var(--quiz-question-transition);
}

:deep(.v-enter-from) {
  opacity: 0;
  transform: translateY(30px);
}

:deep(.v-leave-to) {
  opacity: 0;
  transform: translateY(-20px);
}

.question-card {
  padding: var(--quiz-question-card-padding);
}

.question-number {
  display: block;
  font-size: var(--quiz-question-number-size);
  font-weight: 700;
  font-family: var(--quiz-question-number-family);
  margin-bottom: var(--quiz-question-number-margin-bottom);
  color: var(--quiz-question-number-color);
  text-transform: uppercase;
}

.question-text {
  font-size: var(--quiz-question-text-size);
  font-weight: var(--quiz-question-text-weight);
  margin-bottom: var(--quiz-question-text-margin-bottom);
  color: var(--quiz-question-text-color);
}

.answers-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--quiz-answers-grid-min-width), 1fr)
  );
  gap: var(--quiz-answers-grid-gap);
}

.answer-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--quiz-answer-gap);
  padding: var(--quiz-answer-padding);
  cursor: pointer;
  text-align: left;
}

.answer-icon {
  font-size: var(--quiz-answer-icon-size);
}

.answer-text {
  font-size: var(--quiz-answer-text-size);
  font-weight: var(--quiz-answer-text-weight);
  color: var(--quiz-answer-text-color);
}

.results-title {
  font-size: var(--quiz-results-title-size);
  font-weight: var(--quiz-title-weight);
  margin-bottom: var(--quiz-results-title-margin-bottom);
  color: var(--quiz-results-title-color);
}

.result-card {
  padding: var(--quiz-result-card-padding);
  text-align: left;
}

.result-icon {
  font-size: var(--quiz-result-icon-size);
  text-align: center;
  margin-bottom: var(--quiz-result-icon-margin-bottom);
}

.result-name {
  font-size: var(--quiz-result-name-size);
  font-weight: var(--quiz-title-weight);
  text-align: center;
  margin-bottom: var(--quiz-result-name-margin-bottom);
  color: var(--quiz-result-name-color);
}

.result-description {
  font-size: var(--quiz-result-description-size);
  line-height: var(--quiz-result-description-line-height);
  margin-bottom: var(--quiz-result-description-margin-bottom);
  text-align: center;
  color: var(--quiz-result-description-color);
}

.result-insights {
  margin-bottom: var(--quiz-result-insights-margin-bottom);
}

.confidence-badge {
  display: inline-block;
  font-weight: 700;
  font-family: var(--quiz-confidence-badge-font-family);
  border: var(--quiz-confidence-badge-border);
  padding: var(--quiz-confidence-badge-padding);
  margin-bottom: var(--quiz-confidence-badge-margin-bottom);
}

.confidence-badge.high {
  background: var(--quiz-confidence-high-bg);
}

.confidence-badge.medium {
  background: var(--quiz-confidence-medium-bg);
}

.confidence-badge.low {
  background: var(--quiz-confidence-low-bg);
}

.confidence-text {
  margin: 0;
  color: var(--quiz-confidence-text-color);
}

.top-two-wrapper {
  margin-bottom: var(--quiz-top-two-wrapper-margin-bottom);
}

.top-two-title {
  font-size: var(--quiz-top-two-title-size);
  font-weight: 700;
  margin-bottom: var(--quiz-top-two-title-margin-bottom);
  color: var(--quiz-results-title-color);
}

.top-two-grid {
  display: grid;
  grid-template-columns: var(--quiz-top-two-grid-columns);
  gap: var(--quiz-top-two-grid-gap);
}

.top-two-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--quiz-top-two-grid-gap);
  padding: var(--quiz-top-two-card-padding);
}

.top-two-name {
  font-weight: 600;
}

.top-two-score {
  font-weight: 700;
  font-family: var(--quiz-question-number-family);
}

.result-strengths {
  list-style: none;
  padding: 0;
  margin-bottom: var(--quiz-top-two-wrapper-margin-bottom);
}

.result-strengths li {
  padding: var(--quiz-result-strengths-item-padding);
  margin-bottom: var(--quiz-result-strengths-item-margin-bottom);
  background: var(--quiz-result-strengths-item-background);
  border: var(--quiz-result-strengths-item-border);
  color: var(--quiz-result-strengths-item-color);
}

.related-profiles {
  margin-bottom: var(--quiz-related-profiles-margin-bottom);
}

.related-profiles-title {
  font-size: var(--quiz-related-profiles-title-size);
  font-weight: 700;
  margin-bottom: var(--quiz-related-profiles-title-margin-bottom);
  color: var(--quiz-results-title-color);
}

.related-profiles-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--quiz-related-profiles-grid-min-width), 1fr)
  );
  gap: var(--quiz-related-profiles-grid-gap);
}

.related-profile-card {
  display: flex;
  flex-direction: column;
  gap: var(--quiz-related-profile-card-gap);
  padding: var(--quiz-related-profile-card-padding);
  color: var(--quiz-related-profile-card-color);
}

.related-profile-name {
  font-weight: 700;
}

.related-profile-description {
  font-size: var(--quiz-related-profile-description-size);
  line-height: var(--quiz-related-profile-description-line-height);
  color: var(--quiz-related-profile-description-color);
}

.result-actions {
  display: flex;
  justify-content: center;
  gap: var(--quiz-result-actions-gap);
  margin-top: var(--quiz-result-actions-margin-top);
  flex-wrap: wrap;
}

@media (width <= 640px) {
  .quiz-container {
    padding: var(--quiz-shell-padding-mobile);
  }

  .quiz-intro,
  .quiz-results {
    padding: var(--quiz-panel-padding-mobile);
  }

  .quiz-title {
    font-size: var(--quiz-title-size-mobile);
  }

  .question-text {
    font-size: var(--quiz-question-text-size-mobile);
  }

  .answers-grid {
    grid-template-columns: 1fr;
  }

  .result-card {
    padding: var(--quiz-result-card-padding-mobile);
  }

  .top-two-grid {
    grid-template-columns: var(--quiz-top-two-grid-columns-mobile);
  }

  .result-actions {
    flex-direction: var(--quiz-result-actions-direction-mobile);
  }

  .gc-action--secondary {
    margin-bottom: var(--quiz-result-secondary-action-margin-bottom-mobile);
  }
}
</style>
