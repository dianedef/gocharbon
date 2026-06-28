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
      // Base palette (strict): yellow, orange, black, one charcoal gray
      'yellow-primary': '#f6c700',
      'yellow-gold': '#e2572d',
      'yellow-bright': '#e2572d',
      'purple-medium': '#2f2f2f',
      'purple-light': '#f6c700',
      'yellow-soft': '#f5f5f2',
      'yellow-pale': '#e2572d',
      'yellow': '#f6c700',
      'yellow-dark': '#1c1c1c',
      'white-soft': '#f5f5f2',
      'purple-darker': '#121212',

      // Compatibility aliases (same values to keep existing classnames working)
      'purple-bright': '#e2572d',
      'purple-pale': '#f5f5f2',
      'purple-lighter': '#2f2f2f',
      'purple-darkest': '#1e1b16',
      'purple-dark': '#1e1b16',
      'gray-dark': '#2f2f2f',
      'gray-blue': '#2f2f2f',

      // Semantic aliases
      'primary': '#f6c700',
      'secondary': '#e2572d',
      'accent': '#e2572d',
      'link': '#1e1b16',
      'link-hover': '#e2572d',
    },
    fontFamily: {
      sanchez: ['Sanchez', 'serif'],
    },
  },
  rules: [
    ['dark-text', { color: '#f2eee6' }],
    ['dark-bg', { backgroundColor: '#0b0b0b' }],
    ['user-select-none', { 'user-select': 'none' }],
    // Règles pour les ombres brutales
    ['drop-shadow-brutal', { filter: 'drop-shadow(5px 5px 0 rgb(0 0 0 / 1))' }],
    ['drop-shadow-brutal-dark', { filter: 'drop-shadow(3px 3px 0 #f2eee6)' }],
    // Règle pour la couleur active
    [/^bg-active-color$/, () => ({ 'background-color': 'var(--active-color)' })],
    // Règles spécifiques pour la prose en mode sombre
    [/^prose-dark$/, () => ({
      '--un-prose-headings': '#f2eee6',
      '--un-prose-body': '#f2eee6',
      '--un-prose-links': '#e2572d',
      '--un-prose-links-hover': '#f6c700',
      '--un-prose-lists': '#f2eee6',
      '--un-prose-hr': '#f2eee6',
      '--un-prose-captions': '#f2eee6',
      '--un-prose-code': '#f2eee6',
      '--un-prose-borders': '#f2eee6',
      '--un-prose-bg-soft': '#0b0b0b',
    })],
  ],
  shortcuts: {
    'dark-mode': 'dark:text-yellow-soft dark:bg-purple-darker prose-dark',
    'brutal-card': 'border-3 border-black dark:border-yellow-soft rounded-lg bg-white dark:bg-purple-dark text-black dark:text-yellow-soft drop-shadow-brutal dark:drop-shadow-brutal-dark',
    'brutal-btn': 'border-3 border-black dark:border-yellow-soft bg-white dark:bg-purple-dark text-black dark:text-yellow-soft drop-shadow-brutal dark:drop-shadow-brutal-dark hover:bg-active-color dark:hover:bg-active-color',
    'brutal-pill': 'drop-shadow-brutal dark:drop-shadow-brutal-dark user-select-none bg-white dark:bg-purple-dark text-black dark:text-yellow-soft rounded-full border-1 border-black dark:border-1 dark:border-yellow-soft px-3 py-1 text-sm transform transition-all duration-300 hover:-translate-y-2 hover:bg-active-color dark:hover:bg-active-color',
    'brutal-filter-pill': 'drop-shadow-brutal dark:drop-shadow-brutal-dark user-select-none text-black dark:text-yellow-soft rounded-full border-2 border-black dark:border-2 dark:border-yellow-soft px-6 py-3 text-xl font-bold transform m-3 transition-all duration-200 ease-out will-change-transform bg-white dark:bg-purple-dark',
  },
});
