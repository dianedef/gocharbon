export const parcoursSlugById: Record<string, string> = {
  affiliation: 'affiliation',
  agence: 'agence',
  'ai-automation': 'automatisation-ia',
  'ai-content-creator': 'createur-contenu-ia',
  'amazon-fba': 'amazon-fba',
  'app-developer': 'developpeur-applications',
  blogging: 'blogueur',
  'chatbot-developer': 'developpeur-chatbot',
  closing: 'closing',
  coaching: 'coaching',
  'community-builder': 'createur-communaute',
  consulting: 'conseil',
  'content-creator': 'createur-contenu',
  copywriter: 'redacteur-marketing',
  'data-entry-specialist': 'operateur-saisie-donnees',
  'design-graphique': 'design-graphique',
  dropshipping: 'dropshipping',
  ecommerce: 'e-commerce',
  'elearning-creator': 'createur-formation-en-ligne',
  'email-marketer': 'marketing-email',
  formation: 'formation',
  freelance: 'freelance',
  infoproduits: 'infoproduits',
  'lead-generation': 'generation-leads',
  livecommerce: 'live-commerce',
  newsletter: 'newsletter',
  'notion-expert': 'expert-notion',
  'online-tutor': 'tuteur-en-ligne',
  'pet-sitter': 'garde-animaux',
  podcast: 'podcast',
  'print-on-demand': 'impression-a-la-demande',
  'prompt-engineer': 'ingenieur-prompt',
  saas: 'logiciel-saas',
  'seo-consultant': 'consultant-seo',
  setter: 'setter',
  'social-media-ads-manager': 'gestionnaire-publicites-reseaux-sociaux',
  'social-media-manager': 'gestionnaire-reseaux-sociaux',
  'stock-photography': 'photographie-de-stock',
  'translation-services': 'services-traduction',
  'virtual-assistant': 'assistant-virtuel',
  'voiceover-artist': 'artiste-voix-off',
  'web-scraping-expert': 'expert-scraping-web',
  youtube: 'youtube',
};

export const parcoursIdBySlug: Record<string, string> = Object.fromEntries(
  Object.entries(parcoursSlugById).map(([id, slug]) => [slug, id])
);

export function getParcoursSlug(pathId: string): string {
  return parcoursSlugById[pathId] ?? pathId;
}

export function getParcoursIdFromSlug(slug: string): string {
  return parcoursIdBySlug[slug] ?? slug;
}
