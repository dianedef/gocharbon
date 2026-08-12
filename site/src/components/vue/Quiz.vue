<template>
  <div class="quiz-container">
    <div v-if="!quizStarted" class="quiz-intro">
      <h2 class="quiz-title">Trouve ton Business en Ligne Idéal</h2>
      <p class="quiz-description">
        Réponds à quelques questions pour découvrir le business model qui correspond le mieux à tes compétences et tes envies.
      </p>
      <button @click="startQuiz" class="quiz-btn primary">
        Commencer le Quiz
      </button>
    </div>

    <div v-else-if="!isFinished" class="quiz-content">
      <div class="quiz-nav">
        <button
          type="button"
          class="quiz-btn secondary back-btn"
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

      <Transition
        mode="out-in"
      >
        <div :key="currentIndex" class="question-wrapper">
          <div class="question-card">
            <span class="question-number">Question {{ currentIndex + 1 }} / {{ activeQuizData.questions.length }}</span>
            <h3 class="question-text">{{ currentQuestion.text }}</h3>
            
            <div class="answers-grid">
              <button
                v-for="(option, index) in currentQuestion.options"
                :key="index"
                @click="submitAnswer(option, index)"
                class="answer-btn"
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
      <h2 class="results-title">Ton Business Idéal :</h2>
      <div class="result-card">
        <div class="result-icon">{{ finalResultData.icon }}</div>
        <h3 class="result-name">{{ finalResultTitle }}</h3>
        <p class="result-description">{{ finalResultDescription }}</p>

        <div class="result-insights">
          <p :class="['confidence-badge', confidenceLevel.level]">{{ confidenceLevel.label }}</p>
          <p class="confidence-text">{{ confidenceLevel.description }}</p>
        </div>

        <div v-if="secondResultData" class="top-two-wrapper">
          <h4 class="top-two-title">Top 2 profils recommandés</h4>
          <div class="top-two-grid">
            <div class="top-two-card winner">
              <span class="top-two-name">{{ finalResultData.icon }} {{ finalResultTitle }}</span>
              <span class="top-two-score">{{ topResult.score }} pts</span>
            </div>
            <div class="top-two-card">
              <span class="top-two-name">{{ secondResultData.icon }} {{ secondResultTitle }}</span>
              <span class="top-two-score">{{ secondResult?.score ?? 0 }} pts</span>
            </div>
          </div>
        </div>

        <ul class="result-strengths">
          <li v-for="(strength, index) in finalResultData.strengths" :key="index">
            ✓ {{ strength }}
          </li>
        </ul>
        <div class="result-actions">
          <a
            v-if="finalBizProfile?.learningPathUrl"
            :href="finalBizProfile.learningPathUrl"
            class="quiz-btn primary no-link-style"
            @click="startLearningPath"
          >
            Commencer le Parcours
          </a>
          <a v-if="finalBizProfile" :href="finalBizProfile.slug" class="quiz-btn primary no-link-style">
            Voir la Fiche
          </a>
          <button @click="resetQuiz" class="quiz-btn secondary">
            Refaire le Quiz
          </button>
          <a href="/apps" class="quiz-btn primary no-link-style">
            Voir les Apps
          </a>
          <button
            v-if="mode === 'quick'"
            type="button"
            class="quiz-btn primary"
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
import { ref, reactive, computed, onMounted } from 'vue';
import {
  createPathStepKey,
  getCompletedStepIds,
  setCompletedStepIds,
} from '../../gamification/pathProgress';
import { setTaskCompleted } from '../../gamification/xp';

type ProfileKey = 'ecommerce' | 'saas' | 'content' | 'service' | 'formation' | 'livecommerce';
type ProfileScores = Record<ProfileKey, number>;

interface BizProfileData {
  title: string;
  description: string;
  slug: string;
  tags: string[];
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
    mode?: 'quick' | 'advanced';
    prefillAnswers?: PrefillAnswer[];
  }>(),
  {
    bizProfiles: () => ({}),
    data: null,
    mode: 'advanced',
    prefillAnswers: () => [],
  }
);

const emptyQuizData: QuizPayload = {
  questions: [],
  results: {
    ecommerce: { title: 'E-commerce', icon: '🛒', description: '', strengths: [] },
    saas: { title: 'SaaS', icon: '⚙️', description: '', strengths: [] },
    content: { title: 'Contenu', icon: '🎥', description: '', strengths: [] },
    service: { title: 'Service', icon: '🤝', description: '', strengths: [] },
    formation: { title: 'Formation', icon: '📚', description: '', strengths: [] },
    livecommerce: { title: 'Live Commerce', icon: '🎬', description: '', strengths: [] },
  },
};

const quizStarted = ref(false);
const isFinished = ref(false);
const currentIndex = ref(0);
const answerHistory = ref<Array<Partial<ProfileScores>>>([]);
const selectedAnswers = ref<Array<{ questionId: number; optionIndex: number } | null>>([]);
const prefilledQuestionIndexes = ref<Set<number>>(new Set());
const sessionPrefillAnswers = ref<PrefillAnswer[]>([]);

const scores = reactive({
  ecommerce: 0,
  saas: 0,
  content: 0,
  service: 0,
  formation: 0,
  livecommerce: 0,
});
const profileKeys: ProfileKey[] = ['ecommerce', 'saas', 'content', 'service', 'formation', 'livecommerce'];
const activeQuizData = computed<QuizPayload>(() => props.data ?? emptyQuizData);

const currentQuestion = computed(() => activeQuizData.value.questions[currentIndex.value]);

const sortedResults = computed(() =>
  profileKeys
    .map((profile) => ({
      profile,
      score: scores[profile],
    }))
    .sort((a, b) => b.score - a.score)
);

const topResult = computed(
  () => sortedResults.value[0] ?? { profile: 'content' as ProfileKey, score: 0 }
);
const secondResult = computed(() => sortedResults.value[1] ?? null);
const finalResult = computed<ProfileKey>(() => topResult.value.profile);

const finalResultData = computed(() => activeQuizData.value.results[finalResult.value]);
const secondResultData = computed(() =>
  secondResult.value ? activeQuizData.value.results[secondResult.value.profile] : null
);
const finalBizProfile = computed(() => props.bizProfiles[finalResult.value] ?? null);
const secondBizProfile = computed(() =>
  secondResult.value ? props.bizProfiles[secondResult.value.profile] ?? null : null
);

const finalResultTitle = computed(() => finalBizProfile.value?.title ?? finalResultData.value.title);
const finalResultDescription = computed(
  () => finalBizProfile.value?.description ?? finalResultData.value.description
);

const secondResultTitle = computed(() => {
  if (!secondResult.value) {
    return '';
  }

  return secondBizProfile.value?.title ?? secondResultData.value?.title ?? '';
});
const mode = computed(() => props.mode);

const confidenceLevel = computed(() => {
  const topScore = topResult.value.score;
  const secondScore = secondResult.value?.score ?? 0;
  const diff = topScore - secondScore;

  if (diff >= 7) {
    return {
      level: 'high',
      label: 'Confiance forte',
      description: "Ton profil est très net: une direction se démarque clairement.",
    };
  }

  if (diff >= 4) {
    return {
      level: 'medium',
      label: 'Confiance moyenne',
      description: 'Ton résultat principal est solide, avec une alternative crédible.',
    };
  }

  return {
    level: 'low',
    label: 'Confiance exploratoire',
    description: 'Deux voies sont proches: teste rapidement les deux pour trancher.',
  };
});

const answeredCount = computed(() =>
  answerHistory.value.filter((answer) => answer && Object.keys(answer).length > 0).length
);
const progressPercent = computed(() => {
  const total = activeQuizData.value?.questions?.length ?? 0;
  if (!total) return 0;
  return Math.round((answeredCount.value / total) * 100);
});
const canGoBack = computed(() => previousAnswerableIndex(currentIndex.value - 1) >= 0);

const buildPrefillPayload = () =>
  selectedAnswers.value
    .filter((item): item is { questionId: number; optionIndex: number } => item !== null)
    .map((item) => {
      const question = activeQuizData.value.questions.find((q) => q.id === item.questionId);
      const option = question?.options[item.optionIndex];
      return option?.prefill ?? null;
    })
    .filter(
      (item): item is { questionId: number; optionIndex: number } =>
        Boolean(item && Number.isInteger(item.questionId) && Number.isInteger(item.optionIndex))
    );

const advancedPrefillUrl = computed(() => {
  const payload = buildPrefillPayload();
  if (payload.length === 0) {
    return '';
  }
  return `/quiz-avance?prefill=${encodeURIComponent(JSON.stringify(payload))}`;
});

const goToAdvancedQuiz = () => {
  const payload = buildPrefillPayload();
  if (typeof window === 'undefined') {
    return;
  }

  try {
    if (payload.length > 0) {
      window.sessionStorage.setItem('quiz_prefill_answers', JSON.stringify(payload));
    } else {
      window.sessionStorage.removeItem('quiz_prefill_answers');
    }
  } catch {
    // Ignore storage errors, fallback to query string if available.
    if (advancedPrefillUrl.value) {
      window.location.assign(advancedPrefillUrl.value);
      return;
    }
  }

  window.location.assign('/quiz-avance');
};

function markQuizStepAsCompleted(pathId: string): void {
  if (!pathId) return;

  const stepId = mode.value === 'quick' ? 'orientation-rapide' : 'orientation-avance';
  const stepKey = createPathStepKey('fondations', stepId);
  const completed = new Set(getCompletedStepIds(pathId));

  completed.add(stepKey);
  setCompletedStepIds(pathId, Array.from(completed));
  setTaskCompleted(`${pathId}::${stepKey}`, true, 'quiz');
}

function startLearningPath(event: MouseEvent): void {
  const href = finalBizProfile.value?.learningPathUrl;
  if (!href || typeof window === 'undefined') {
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

  while (previousIndex >= 0 && prefilledQuestionIndexes.value.has(previousIndex)) {
    previousIndex -= 1;
  }

  return previousIndex;
};

const updateProgressBar = () => {
  // Progression geree en CSS via progressPercent.
};

const applyPrefillAnswers = () => {
  const rawPrefill =
    props.prefillAnswers.length > 0 ? props.prefillAnswers : sessionPrefillAnswers.value;

  if (mode.value !== 'advanced' || rawPrefill.length === 0) {
    return;
  }

  const parsed = rawPrefill
    .filter(
      (item) =>
        Number.isInteger(item.questionId) &&
        Number.isInteger(item.optionIndex) &&
        item.optionIndex >= 0
    )
    .slice(0, 12);

  parsed.forEach((prefill) => {
    const questionIndex = activeQuizData.value.questions.findIndex((q) => q.id === prefill.questionId);

    if (questionIndex === -1) {
      return;
    }

    const option = activeQuizData.value.questions[questionIndex]?.options?.[prefill.optionIndex];

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
  if (mode.value !== 'advanced' || props.prefillAnswers.length > 0 || typeof window === 'undefined') {
    return;
  }

  try {
    const raw = window.sessionStorage.getItem('quiz_prefill_answers');
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
          item.optionIndex >= 0
      );
    }

    window.sessionStorage.removeItem('quiz_prefill_answers');
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
  max-width: 860px;
  margin: 0 auto;
  padding: 1.5rem;
}

.quiz-intro,
.quiz-results {
  text-align: center;
  background: var(--brand-cream);
  border: 3px solid var(--brand-black);
  box-shadow: 6px 6px 0 var(--brand-black);
  padding: 2rem;
}

.quiz-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--brand-black);
}

.quiz-description {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: var(--brand-soot);
  line-height: 1.6;
}

.quiz-btn {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 700;
  font-family: "Sanchez", serif;
  border: 3px solid var(--brand-black);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: inline-block;
  box-shadow: 5px 5px 0 var(--brand-black);
}

.quiz-btn.primary {
  background-color: var(--brand-yellow);
  color: var(--brand-black);
}

.quiz-btn.primary:hover {
  background-color: var(--brand-orange);
  transform: translate(2px, 2px);
  box-shadow: 3px 3px 0 var(--brand-black);
}

.quiz-btn.secondary {
  background-color: var(--brand-black);
  color: var(--brand-cream);
  margin-right: 1rem;
}

.quiz-btn.secondary:hover {
  background-color: var(--brand-charcoal);
  transform: translate(2px, 2px);
  box-shadow: 3px 3px 0 var(--brand-black);
}

.quiz-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: 5px 5px 0 var(--brand-black);
}

.quiz-nav {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.back-btn {
  padding: 0.65rem 1rem;
  font-size: 1rem;
}

.progress-bar {
  width: 100%;
  height: 16px;
  background-color: var(--brand-cream);
  border: 3px solid var(--brand-black);
  margin-bottom: 2rem;
  overflow: clip;
}

.progress-fill {
  width: 0%;
  height: 100%;
  background-color: var(--brand-yellow);
  transition: width 120ms linear;
}

.question-wrapper {
  min-height: 420px;
}

:deep(.v-enter-active),
:deep(.v-leave-active) {
  transition: opacity 0.2s ease, transform 0.2s ease;
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
  background: var(--brand-cream);
  border: 3px solid var(--brand-black);
  box-shadow: 6px 6px 0 var(--brand-black);
  padding: 2rem;
}

.question-number {
  display: block;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: "Sanchez", serif;
  margin-bottom: 1rem;
  color: var(--brand-orange);
  text-transform: uppercase;
}

.question-text {
  font-size: 1.85rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--brand-black);
}

.answers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.answer-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: var(--brand-cream);
  border: 3px solid var(--brand-black);
  box-shadow: 4px 4px 0 var(--brand-black);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: left;
}

.answer-btn:hover {
  background: var(--brand-yellow);
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 var(--brand-black);
}

.answer-icon {
  font-size: 2rem;
}

.answer-text {
  font-size: 1rem;
  font-weight: 600;
  color: var(--brand-black);
}

.results-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--brand-black);
}

.result-card {
  background: var(--brand-cream);
  border: 3px solid var(--brand-black);
  box-shadow: 6px 6px 0 var(--brand-black);
  padding: 3rem;
  text-align: left;
}

.result-icon {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;
}

.result-name {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--brand-black);
}

.result-description {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  text-align: center;
  color: var(--brand-soot);
}

.result-insights {
  margin-bottom: 1.5rem;
}

.confidence-badge {
  display: inline-block;
  font-weight: 700;
  font-family: "Sanchez", serif;
  border: 2px solid var(--brand-black);
  padding: 0.35rem 0.75rem;
  margin-bottom: 0.5rem;
}

.confidence-badge.high {
  background: var(--brand-yellow);
}

.confidence-badge.medium {
  background: #ffd89b;
}

.confidence-badge.low {
  background: #ffe8d6;
}

.confidence-text {
  margin: 0;
  color: var(--brand-soot);
}

.top-two-wrapper {
  margin-bottom: 2rem;
}

.top-two-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--brand-black);
}

.top-two-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.top-two-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  border: 2px solid var(--brand-black);
  padding: 0.75rem;
  background: var(--brand-cream);
}

.top-two-card.winner {
  background: var(--brand-yellow);
}

.top-two-name {
  font-weight: 600;
}

.top-two-score {
  font-weight: 700;
  font-family: "Sanchez", serif;
}

.result-strengths {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.result-strengths li {
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: var(--brand-cream);
  border: 2px solid var(--brand-black);
  color: var(--brand-black);
}

.result-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .quiz-container {
    padding: 0.75rem;
  }

  .quiz-intro,
  .quiz-results {
    padding: 1.5rem;
  }

  .quiz-title {
    font-size: 2rem;
  }

  .question-text {
    font-size: 1.5rem;
  }

  .answers-grid {
    grid-template-columns: 1fr;
  }

  .result-card {
    padding: 1.75rem 1.25rem;
  }

  .top-two-grid {
    grid-template-columns: 1fr;
  }

  .result-actions {
    flex-direction: column;
  }

  .quiz-btn.secondary {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}
</style>

<!-- Dark mode styles - unscoped because Astro breaks :global(.dark) in Vue scoped CSS -->
<style>
.dark .quiz-intro,
.dark .quiz-results {
  background: var(--brand-ink);
  border-color: var(--brand-cream);
  box-shadow: 6px 6px 0 var(--brand-cream);
  color: var(--brand-cream);
}

.dark .quiz-title,
.dark .quiz-description,
.dark .question-text,
.dark .answer-text,
.dark .results-title,
.dark .result-name,
.dark .result-description,
.dark .result-card {
  color: var(--brand-cream);
}

.dark .quiz-btn {
  border-color: var(--brand-cream);
  box-shadow: 5px 5px 0 var(--brand-cream);
}

.dark .quiz-btn.primary {
  background-color: var(--brand-yellow);
  color: var(--brand-black);
}

.dark .quiz-btn.primary:hover {
  background-color: var(--brand-orange);
  box-shadow: 3px 3px 0 var(--brand-cream);
}

.dark .quiz-btn.secondary {
  background-color: var(--brand-charcoal);
  color: var(--brand-cream);
}

.dark .quiz-btn.secondary:hover {
  background-color: var(--brand-soot);
  box-shadow: 3px 3px 0 var(--brand-cream);
}

.dark .quiz-btn:disabled {
  box-shadow: 5px 5px 0 var(--brand-cream);
}

.dark .progress-bar {
  background-color: var(--brand-ink);
  border-color: var(--brand-cream);
}

.dark .progress-fill {
  background-color: var(--brand-yellow);
}

.dark .question-card {
  background: var(--brand-ink);
  border-color: var(--brand-cream);
  box-shadow: 6px 6px 0 var(--brand-cream);
}

.dark .question-number {
  color: var(--brand-yellow);
}

.dark .answer-btn {
  background: var(--brand-charcoal);
  border-color: var(--brand-cream);
  box-shadow: 4px 4px 0 var(--brand-cream);
}

.dark .answer-btn:hover {
  background: var(--brand-yellow);
  color: var(--brand-black);
  box-shadow: 2px 2px 0 var(--brand-cream);
}

.dark .answer-btn:hover .answer-text,
.dark .answer-btn:hover .answer-icon {
  color: var(--brand-black);
}

.dark .result-card {
  background: var(--brand-ink);
  border-color: var(--brand-cream);
  box-shadow: 6px 6px 0 var(--brand-cream);
}

.dark .result-strengths li {
  background: var(--brand-charcoal);
  border-color: var(--brand-cream);
  color: var(--brand-cream);
}

.dark .confidence-text,
.dark .top-two-title {
  color: var(--brand-cream);
}

.dark .confidence-badge {
  border-color: var(--brand-cream);
}

.dark .confidence-badge.high {
  background: var(--brand-yellow);
  color: var(--brand-black);
}

.dark .confidence-badge.medium {
  background: #d29238;
  color: var(--brand-black);
}

.dark .confidence-badge.low {
  background: #6d4a3a;
  color: var(--brand-cream);
}

.dark .top-two-card {
  background: var(--brand-charcoal);
  border-color: var(--brand-cream);
  color: var(--brand-cream);
}

.dark .top-two-card.winner {
  background: var(--brand-yellow);
  color: var(--brand-black);
}
</style>
