import type { Badge, GamificationOptions } from '@diane-winflowz/gamification'

// 10 badges for Charbon, leveraging the 8 root tag categories
export const charbonBadges: Badge[] = [
  {
    id: 'premier-pas',
    name: 'Premier Pas',
    description: 'Tu as lu ton premier article !',
    icon: '👣',
    condition: (s) => s.totalRead >= 1,
  },
  {
    id: 'curieux',
    name: 'Curieux',
    description: '10 articles lus — la curiosité paie !',
    icon: '🔍',
    condition: (s) => s.totalRead >= 10,
  },
  {
    id: 'assidu',
    name: 'Assidu',
    description: '25 articles lus, tu es un lecteur régulier.',
    icon: '📖',
    condition: (s) => s.totalRead >= 25,
  },
  {
    id: 'encyclopediste',
    name: 'Encyclopédiste',
    description: '50 articles ! Tu connais le blog par cœur.',
    icon: '📚',
    condition: (s) => s.totalRead >= 50,
    secret: true,
  },
  {
    id: 'streak-3',
    name: 'Régulier',
    description: '3 jours de suite — belle habitude !',
    icon: '🔥',
    condition: (s) => s.currentStreak >= 3,
  },
  {
    id: 'streak-7',
    name: 'Flamme',
    description: '7 jours consécutifs de lecture.',
    icon: '🔥',
    condition: (s) => s.currentStreak >= 7,
  },
  {
    id: 'expert-business',
    name: 'Expert Business',
    description: '5 articles business lus.',
    icon: '💼',
    category: 'business',
    condition: (s) => (s.readByCategory['business']?.length ?? 0) >= 5,
  },
  {
    id: 'expert-tech',
    name: 'Expert Tech',
    description: '5 articles tech lus.',
    icon: '💻',
    category: 'tech',
    condition: (s) => (s.readByCategory['tech']?.length ?? 0) >= 5,
  },
  {
    id: 'expert-seo',
    name: 'Expert SEO',
    description: '5 articles SEO lus.',
    icon: '🔎',
    category: 'seo',
    condition: (s) => (s.readByCategory['seo']?.length ?? 0) >= 5,
  },
  {
    id: 'touche-a-tout',
    name: 'Touche-à-tout',
    description: 'Tu as lu au moins un article dans 4 catégories.',
    icon: '🌈',
    condition: (s) => {
      const cats = Object.values(s.readByCategory).filter((arr) => arr.length > 0)
      return cats.length >= 4
    },
  },
]

// Map root tag categories to slug lists — populated dynamically by the consumer
// In Charbon, tags are on posts. We use categories as the grouping.
export const charbonCategories: Record<string, string[]> = {
  business: [],
  marketing: [],
  tech: [],
  contenu: [],
  seo: [],
  productivite: [],
  tutoriels: [],
  apps: [],
}

export function createCharbonConfig(
  overrideCategories?: Record<string, string[]>
): GamificationOptions {
  return {
    badges: charbonBadges,
    categories: overrideCategories ?? charbonCategories,
    storagePrefix: 'gamification_charbon',
    gracePeriodHours: 36,
  }
}
