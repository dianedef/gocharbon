import type { IconifyJSON } from '@iconify/types';
import {
  defineConfig,
  presetIcons,
  presetWind,
  presetTypography,
  presetUno,
  presetAttributify,
} from 'unocss';

export default defineConfig({
  presets: [
    presetWind(),
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        logos: () =>
          import('@iconify-json/logos/icons.json').then((i) => i.default as IconifyJSON),
        uil: () =>
          import('@iconify-json/uil/icons.json').then((l) => l.default as IconifyJSON),
      },
      scale: 1.2,
      cdn: 'https://esm.sh/'
    }),
    presetTypography(),
  ],
  theme: {
    colors: {
      softWhite: '#FFD35AD9',
    },
    fontFamily: {
      sanchez: ['Sanchez', 'serif'],
    },
  },
  rules: [
    ['dark-text', { color: '#FFD35AD9' }],
    ['dark-bg', { backgroundColor: '#1a1a1a' }],
    ['user-select-none', { 'user-select': 'none' }],
    // Règles pour les ombres brutales
    ['drop-shadow-brutal', { filter: 'drop-shadow(5px 5px 0 rgb(0 0 0 / 1))' }],
    ['drop-shadow-brutal-dark', { filter: 'drop-shadow(3px 3px 0 #FFD35AD9)' }],
    // Règle pour la couleur active
    [/^bg-active-color$/, () => ({ 'background-color': 'var(--active-color)' })],
    // Règles spécifiques pour la prose en mode sombre
    [/^prose-dark$/, () => ({
      '--un-prose-headings': '#FFD35AD9',
      '--un-prose-body': '#FFD35AD9',
      '--un-prose-links': '#FFD35AD9',
      '--un-prose-lists': '#FFD35AD9',
      '--un-prose-hr': '#FFD35AD9',
      '--un-prose-captions': '#FFD35AD9',
      '--un-prose-code': '#FFD35AD9',
      '--un-prose-borders': '#FFD35AD9',
      '--un-prose-bg-soft': '#1a1a1a',
    })],
  ],
  shortcuts: {
    'dark-mode': 'dark:text-[#FFD35AD9] dark:bg-black prose-dark',
    'brutal-card': 'border-3 border-black dark:border-[#FFD35AD9] rounded-lg bg-white dark:bg-black text-black dark:text-[#FFD35AD9] drop-shadow-brutal dark:drop-shadow-brutal-dark',
    'brutal-btn': 'border-3 border-black dark:border-[#FFD35AD9] bg-white dark:bg-black text-black dark:text-[#FFD35AD9] drop-shadow-brutal dark:drop-shadow-brutal-dark hover:bg-active-color dark:hover:bg-active-color',
    'brutal-pill': 'drop-shadow-brutal dark:drop-shadow-brutal-dark user-select-none bg-white dark:bg-black text-black dark:text-[#FFD35AD9] rounded-full border-1 border-black dark:border-1 dark:border-[#FFD35AD9] px-3 py-1 text-sm transform transition-all duration-300 hover:-translate-y-2 hover:bg-active-color dark:hover:bg-active-color',
    'brutal-filter-pill': 'drop-shadow-brutal dark:drop-shadow-brutal-dark user-select-none text-black dark:text-[#FFD35AD9] rounded-full border-1 border-black dark:border-1 dark:border-[#FFD35AD9] px-3 py-1 text-sm transform scale-160 m-1 transition-transform duration-200 ease-out will-change-transform [&:not(.bg-active-color)]:hover:(-translate-x-25px -rotate-5deg) hover:bg-active-color dark:hover:bg-active-color bg-white [&:not(.bg-active-color)]:dark:bg-black [&.bg-active-color]:(-translate-x-25px -translate-y-10px)',
  },
});
