<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { quizData } from '../../data/quizData.js'
import { ROUTES } from '../../config/routes'

const questions = {
  goal: {
    placeholder: '______',
    options: [
      { label: 'générer du cash rapidement', points: { service: 3, livecommerce: 2, ecommerce: 1 } },
      { label: 'construire un actif long terme', points: { saas: 3, content: 1 } },
      { label: 'monétiser mon expertise', points: { formation: 3, service: 2 } },
      { label: 'créer une audience', points: { content: 3, livecommerce: 1, formation: 1 } },
    ],
  },
  budget: {
    placeholder: '______',
    options: [
      { label: '0 à 100€', points: { service: 2, content: 2, livecommerce: 2, formation: 1 } },
      { label: '100 à 500€', points: { service: 2, formation: 2, livecommerce: 1, ecommerce: 1 } },
      { label: '500 à 2 000€', points: { ecommerce: 3, saas: 1 } },
      { label: 'plus de 2 000€', points: { saas: 2, ecommerce: 2 } },
    ],
  },
  mode: {
    placeholder: '______',
    options: [
      { label: 'en direct avec des clients', points: { service: 3, livecommerce: 2, formation: 1 } },
      { label: 'sur un produit scalable', points: { saas: 3, ecommerce: 2 } },
      { label: 'en créant du contenu', points: { content: 3, livecommerce: 1, formation: 2 } },
      { label: 'de façon flexible', points: { service: 1, content: 1, ecommerce: 1, formation: 1, saas: 1 } },
    ],
  },
  tech: {
    placeholder: '______',
    options: [
      { label: 'débutant', points: { service: 2, livecommerce: 2, formation: 2, content: 1 } },
      { label: 'à l\'aise en no-code', points: { ecommerce: 2, content: 2, livecommerce: 1, service: 1 } },
      { label: 'plutôt bon', points: { saas: 3, service: 1 } },
      { label: 'très à l\'aise', points: { saas: 3, ecommerce: 1 } },
    ],
  },
}

const profileUrls = {
  ecommerce: { profile: '/biz/profils/ecommerce', parcours: '/parcours/e-commerce' },
  saas: { profile: '/biz/profils/saas', parcours: '/parcours/logiciel-saas' },
  content: { profile: '/biz/profils/content-creator', parcours: '/parcours/createur-contenu' },
  service: { profile: '/biz/profils/freelance', parcours: '/parcours/freelance' },
  formation: { profile: '/biz/profils/formation', parcours: '/parcours/formation' },
  livecommerce: { profile: '/biz/profils/livecommerce', parcours: '/parcours/live-commerce' },
}

const selections = ref({ goal: '', budget: '', mode: '', tech: '' })
const openKey = ref(null)

function toggle(key) {
  openKey.value = openKey.value === key ? null : key
}

function select(key, index) {
  selections.value[key] = String(index)
  openKey.value = null
}

function label(key) {
  const idx = parseInt(selections.value[key])
  if (isNaN(idx)) return null
  return questions[key].options[idx].label
}

function onClickOutside(e) {
  if (openKey.value && !e.target.closest('.sq-dd')) {
    openKey.value = null
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))

const allSelected = computed(() =>
  Object.values(selections.value).every(v => v !== '')
)

const result = computed(() => {
  if (!allSelected.value) return null
  const scores = { ecommerce: 0, saas: 0, content: 0, service: 0, formation: 0, livecommerce: 0 }
  for (const key of ['goal', 'budget', 'mode', 'tech']) {
    const idx = parseInt(selections.value[key])
    if (isNaN(idx)) return null
    const points = questions[key].options[idx].points
    for (const [profile, value] of Object.entries(points)) {
      if (profile in scores) scores[profile] += value
    }
  }
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1])
  const [topProfile] = sorted[0]
  return {
    profile: topProfile,
    ...quizData.results[topProfile],
    urls: profileUrls[topProfile],
  }
})
</script>

<template>
  <div class="sq">
    <p class="sq-sentence sq-sentence-desktop">
      Je veux
      <span class="sq-dd" @click.stop="toggle('goal')">
        <span class="sq-trigger" :class="{ filled: label('goal'), open: openKey === 'goal' }">
          {{ label('goal') || questions.goal.placeholder }}
          <svg class="sq-caret" width="10" height="6" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
        </span>
        <div v-if="openKey === 'goal'" class="sq-menu">
          <div
            v-for="(opt, i) in questions.goal.options"
            :key="i"
            class="sq-option"
            :class="{ active: selections.goal === String(i) }"
            @click.stop="select('goal', i)"
          >{{ opt.label }}</div>
        </div>
      </span>
      avec
      <span class="sq-dd" @click.stop="toggle('budget')">
        <span class="sq-trigger" :class="{ filled: label('budget'), open: openKey === 'budget' }">
          {{ label('budget') || questions.budget.placeholder }}
          <svg class="sq-caret" width="10" height="6" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
        </span>
        <div v-if="openKey === 'budget'" class="sq-menu">
          <div
            v-for="(opt, i) in questions.budget.options"
            :key="i"
            class="sq-option"
            :class="{ active: selections.budget === String(i) }"
            @click.stop="select('budget', i)"
          >{{ opt.label }}</div>
        </div>
      </span>
      de budget, bosser
      <span class="sq-dd" @click.stop="toggle('mode')">
        <span class="sq-trigger" :class="{ filled: label('mode'), open: openKey === 'mode' }">
          {{ label('mode') || questions.mode.placeholder }}
          <svg class="sq-caret" width="10" height="6" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
        </span>
        <div v-if="openKey === 'mode'" class="sq-menu">
          <div
            v-for="(opt, i) in questions.mode.options"
            :key="i"
            class="sq-option"
            :class="{ active: selections.mode === String(i) }"
            @click.stop="select('mode', i)"
          >{{ opt.label }}</div>
        </div>
      </span>
      et en technique je suis
      <span class="sq-dd" @click.stop="toggle('tech')">
        <span class="sq-trigger" :class="{ filled: label('tech'), open: openKey === 'tech' }">
          {{ label('tech') || questions.tech.placeholder }}
          <svg class="sq-caret" width="10" height="6" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
        </span>
        <div v-if="openKey === 'tech'" class="sq-menu">
          <div
            v-for="(opt, i) in questions.tech.options"
            :key="i"
            class="sq-option"
            :class="{ active: selections.tech === String(i) }"
            @click.stop="select('tech', i)"
          >{{ opt.label }}</div>
        </div>
      </span>.
    </p>

    <div class="sq-mobile-fields">
      <div v-for="(field, key) in questions" :key="key" class="sq-mobile-field">
        <span class="sq-mobile-label">{{ ({ goal: 'Tu en es où ?', budget: 'Ton objectif ?', mode: 'Ton rythme ?', tech: 'Ton expérience ?' })[key] }}</span>
        <span class="sq-dd" @click.stop="toggle(key)">
          <button type="button" class="sq-trigger" :class="{ filled: label(key), open: openKey === key }" :aria-expanded="openKey === key">
            {{ label(key) || 'Choisir une réponse' }}
            <svg class="sq-caret" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
          </button>
          <div v-if="openKey === key" class="sq-menu">
            <button v-for="(opt, i) in field.options" :key="i" type="button" class="sq-option" :class="{ active: selections[key] === String(i) }" @click.stop="select(key, i)">{{ opt.label }}</button>
          </div>
        </span>
      </div>
      <div class="sq-mobile-cta" :class="{ ready: allSelected }"><span aria-hidden="true">↗</span> TROUVER MON FILON <span aria-hidden="true">›</span></div>
    </div>

    <transition name="sq-fade">
      <div v-if="result" class="sq-result">
        <div class="sq-result-header">
          <span class="sq-result-icon">{{ result.icon }}</span>
          <div>
            <span class="sq-result-label">Ton profil :</span>
            <strong class="sq-result-title">{{ result.title }}</strong>
          </div>
        </div>
        <p class="sq-result-desc">{{ result.description }}</p>
        <div class="sq-result-actions">
          <a :href="result.urls.parcours" class="sq-btn sq-btn-primary">Voir le Parcours</a>
          <a :href="ROUTES.quizRapide" class="sq-btn sq-btn-secondary">Affiner avec le Quiz (2 min)</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.sq-sentence {
  font-size: var(--sentence-quiz-font-size);
  line-height: var(--sentence-quiz-line-height);
  font-weight: var(--sentence-quiz-font-weight);
  color: var(--sentence-quiz-color);
  margin: 0;
  text-align: left;
}

.sq-mobile-fields { display: none; }

/* Dropdown wrapper */
.sq-dd {
  position: relative;
  display: inline;
}

/* Trigger */
.sq-trigger {
  display: inline-flex;
  align-items: center;
  gap: var(--sentence-quiz-trigger-gap);
  padding: var(--sentence-quiz-trigger-padding);
  border-bottom: var(--sentence-quiz-trigger-border-width) var(--sentence-quiz-trigger-border-style) var(--sentence-quiz-trigger-border-color);
  color: var(--sentence-quiz-trigger-border-color);
  cursor: pointer;
  transition: var(--sentence-quiz-trigger-transition);
  font-weight: 700;
}

.sq-trigger:hover {
  border-bottom-color: var(--sentence-quiz-trigger-hover-border-color);
  color: var(--sentence-quiz-trigger-hover-color);
}

.sq-trigger.filled {
  border-bottom-width: var(--sentence-quiz-trigger-border-width-filled);
  border-bottom-style: solid;
  border-bottom-color: var(--sentence-quiz-trigger-filled-border-color);
  color: var(--sentence-quiz-trigger-filled-color);
  background: var(--sentence-quiz-trigger-filled-bg);
  padding: var(--sentence-quiz-trigger-padding-filled);
}

.sq-trigger.open {
  border-bottom-style: solid;
  border-bottom-color: var(--sentence-quiz-trigger-open-border-color);
}

.sq-caret {
  flex-shrink: 0;
  transition: var(--sentence-quiz-caret-transition);
}

.sq-trigger.open .sq-caret {
  transform: rotate(180deg);
}

/* Menu */
.sq-menu {
  position: absolute;
  top: calc(100% + var(--sentence-quiz-menu-offset));
  left: 0;
  z-index: var(--sentence-quiz-menu-z-index);
  background: var(--sentence-quiz-menu-background);
  border: var(--sentence-quiz-menu-border);
  box-shadow: var(--sentence-quiz-menu-shadow);
  min-width: var(--sentence-quiz-menu-min-width);
  max-width: var(--sentence-quiz-menu-max-width);
}

.sq-option {
  padding: var(--sentence-quiz-option-padding);
  font-size: var(--sentence-quiz-option-font-size);
  font-weight: var(--sentence-quiz-option-font-weight);
  cursor: pointer;
  white-space: nowrap;
  color: var(--sentence-quiz-option-color);
  transition: var(--sentence-quiz-option-transition);
}

.sq-option:hover {
  background: var(--sentence-quiz-option-hover-bg);
  color: var(--sentence-quiz-option-hover-color);
}

.sq-option.active {
  background: var(--sentence-quiz-option-active-bg);
  font-weight: 800;
}

.sq-option + .sq-option {
  border-top: var(--sentence-quiz-option-divider);
}

/* Result */
.sq-result {
  margin-top: var(--sentence-quiz-result-margin-top);
  padding: var(--sentence-quiz-result-padding);
  border: var(--sentence-quiz-result-border);
  background: var(--sentence-quiz-result-background);
  box-shadow: var(--sentence-quiz-result-shadow);
  text-align: left;
}

.sq-result-header {
  display: flex;
  align-items: center;
  gap: var(--sentence-quiz-result-header-gap);
  margin-bottom: var(--sentence-quiz-result-header-margin-bottom);
}

.sq-result-icon {
  font-size: var(--sentence-quiz-result-icon-size);
  line-height: var(--sentence-quiz-result-icon-line-height);
}

.sq-result-label {
  font-size: var(--sentence-quiz-result-label-size);
  text-transform: uppercase;
  letter-spacing: var(--sentence-quiz-result-label-letter-spacing);
  font-weight: 700;
  color: var(--sentence-quiz-result-label-color);
  display: block;
}

.sq-result-title {
  font-size: var(--sentence-quiz-result-title-size);
  font-weight: 800;
  color: var(--sentence-quiz-result-title-color);
  font-family: var(--sentence-quiz-result-title-font-family);
  display: block;
}

.sq-result-desc {
  font-size: var(--sentence-quiz-result-desc-size);
  line-height: var(--sentence-quiz-result-desc-line-height);
  color: var(--sentence-quiz-result-desc-color);
  margin: var(--sentence-quiz-result-desc-margin);
}

.sq-result-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sentence-quiz-result-actions-gap);
}

.sq-btn {
  display: inline-block;
  padding: var(--sentence-quiz-btn-padding);
  font-size: var(--sentence-quiz-btn-font-size);
  font-weight: 700;
  font-family: var(--sentence-quiz-btn-font-family);
  text-decoration: none;
  border: var(--sentence-quiz-btn-border);
  transition: var(--sentence-quiz-btn-transition);
}

.sq-btn:hover {
  transform: var(--sentence-quiz-btn-hover-translate);
  box-shadow: var(--sentence-quiz-btn-shadow-hover);
}

.sq-btn-primary {
  background: var(--sentence-quiz-btn-primary-bg);
  color: var(--sentence-quiz-btn-primary-color);
}

.sq-btn-secondary {
  background: transparent;
  color: var(--sentence-quiz-btn-secondary-color);
}

/* Transition */
.sq-fade-enter-active { transition: var(--sentence-quiz-fade-enter-transition); }
.sq-fade-leave-active { transition: var(--sentence-quiz-fade-leave-transition); }
.sq-fade-enter-from { opacity: 0; transform: translateY(8px); }
.sq-fade-leave-to { opacity: 0; }

@media (width <= 640px) {
  .sq-sentence-desktop { display: none; }

  .sq-mobile-fields {
    display: grid;
    gap: 0.65rem;
  }

  .sq-mobile-field {
    position: relative;
    display: grid;
    gap: 0.25rem;
    padding: 0.65rem 0.75rem;
    border: var(--gc-semantic-shape-pixel-unit) solid var(--gc-primitive-color-brand-gold-deep);
    background: color-mix(in srgb, var(--gc-primitive-color-brand-ink) 88%, transparent);
  }

  .sq-mobile-label {
    color: var(--gc-primitive-color-brand-cream);
    font-family: var(--gc-semantic-type-action-family);
    font-size: 0.82rem;
  }

  .sq-mobile-field .sq-dd,
  .sq-mobile-field .sq-trigger {
    display: flex;
    width: 100%;
  }

  .sq-mobile-field .sq-trigger {
    justify-content: space-between;
    min-height: 24px;
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--gc-primitive-color-brand-yellow);
    font: inherit;
    font-size: 0.72rem;
    text-align: left;
  }

  .sq-mobile-field .sq-trigger.filled {
    padding: 0;
    background: transparent;
    color: var(--gc-primitive-color-brand-yellow);
  }

  .sq-mobile-field .sq-menu {
    top: calc(100% + 0.7rem);
    left: -0.75rem;
    width: calc(100% + 1.5rem);
    min-width: 0;
    max-width: none;
  }

  .sq-mobile-field .sq-option {
    display: block;
    width: 100%;
    border: 0;
    background: transparent;
    text-align: left;
  }

  .sq-mobile-cta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 54px;
    margin: 0.35rem auto 0;
    padding: 0.75rem 1rem;
    border: var(--gc-component-pixel-frame-border-width) solid var(--gc-primitive-color-brand-gold-deep);
    background: color-mix(in srgb, var(--gc-primitive-color-brand-yellow) 72%, var(--gc-primitive-color-brand-gold-deep));
    box-shadow: var(--gc-primitive-space-1) var(--gc-primitive-space-1) 0 var(--gc-primitive-color-brand-black);
    color: var(--gc-primitive-color-brand-black);
    font-family: var(--gc-semantic-type-action-family);
    font-weight: 800;
    opacity: 0.72;
  }

  .sq-mobile-cta.ready { opacity: 1; }

  .sq-sentence {
    font-size: var(--sentence-quiz-font-size-mobile);
    line-height: var(--sentence-quiz-line-height-mobile);
  }

  .sq-result-actions {
    flex-direction: var(--sentence-quiz-result-actions-direction-mobile);
  }

  .sq-btn {
    text-align: center;
    width: var(--sentence-quiz-btn-width-mobile);
  }
}
</style>
