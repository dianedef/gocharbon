import type { CollectionEntry } from "astro:content";
import { normalizeTag } from "./tags";
import type { Post } from "./types/content";

type ToolLikeData = {
  section?: "blog" | "outils" | "tutos" | "parcours";
  tags?: string[];
  toolCategoryPrimary?: string;
  toolSubcategoryPrimary?: string;
  toolFacets?: string[];
};

type ToolLike = {
  id: string;
  data: ToolLikeData;
};

export type ToolTaxonomy = {
  category: string | null;
  categoryLabel: string | null;
  subcategory: string | null;
  subcategoryLabel: string | null;
  facets: string[];
  facetLabels: string[];
};

export type ToolDisplayChip = {
  kind: "category" | "subcategory" | "facet";
  label: string;
  href: string | null;
};

export type ToolSubcategorySummary = {
  category: string;
  categoryLabel: string;
  slug: string;
  label: string;
  count: number;
};

export type ToolCategorySummary = {
  slug: string;
  label: string;
  count: number;
  subcategories: ToolSubcategorySummary[];
};

const TOOL_LABELS: Record<string, string> = {
  admin: "Admin",
  affiliation: "Affiliation",
  assistant: "Assistant",
  ai: "IA",
  analytics: "Analytics",
  audio: "Audio",
  autres: "Autres",
  blog: "Blog",
  business: "Business",
  bureautique: "Bureautique",
  chatbot: "Chatbot",
  cms: "CMS",
  communication: "Communication",
  collaboration: "Collaboration",
  coaching: "Coaching",
  "coaching-sportif": "Coaching sportif",
  communaute: "Communauté",
  comptabilite: "Comptabilite",
  copywriting: "Copywriting",
  creation: "Creation",
  "creation-contenu": "Creation de contenu",
  "content-interactif": "Contenu interactif",
  crm: "CRM",
  design: "Design",
  dev: "Developpement",
  "e-commerce": "E-commerce",
  ecommerce: "E-commerce",
  email: "Email",
  "email-marketing": "Email marketing",
  emailing: "Emailing",
  facturation: "Facturation",
  formation: "Formation",
  "gestion-documentaire": "Gestion documentaire",
  "gestion-projet": "Gestion de projet",
  "gestion-ressources": "Gestion des ressources",
  hebergement: "Hebergement",
  ia: "IA",
  legal: "Legal",
  logistique: "Logistique",
  lms: "LMS",
  "marketplace-competences": "Marketplace de compétences",
  marketing: "Marketing",
  "micro-learning": "Micro-learning",
  "navigation-ia": "Navigation IA",
  "no-code": "No-code",
  paiement: "Paiement",
  print: "Print",
  pdf: "PDF",
  planning: "Planning",
  productivite: "Productivite",
  prospection: "Prospection",
  "prise-rendez-vous": "Prise de rendez-vous",
  reunions: "Reunions",
  "repurposing": "Repurposing",
  "relecture-academique": "Relecture académique",
  rh: "Ressources humaines",
  "social-media": "Social Media",
  publication: "Publication",
  quiz: "Quiz",
  seo: "SEO",
  "lecture-rapide": "Lecture rapide",
  stockage: "Stockage",
  tech: "Tech",
  "travail-hybride": "Travail hybride",
  "workplace": "Espace de travail",
  "zero-knowledge": "Zero-knowledge",
  "open-source": "Open source",
  "self-hosted": "Auto-hebergeable",
  "automatisation": "Automatisation",
  video: "Video",
};

function getSection(value: ToolLikeData["section"], tags: string[] = []): ToolLikeData["section"] {
  if (value) return value;
  if (tags.some((tag) => normalizeTag(tag) === "outils")) return "outils";
  return undefined;
}

function humanizeToolValue(value: string | null | undefined): string | null {
  if (!value) return null;
  const normalized = normalizeTag(value);
  if (TOOL_LABELS[normalized]) return TOOL_LABELS[normalized];
  const cleaned = value.replace(/[_-]+/g, " ").trim();
  if (!cleaned) return null;
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function deriveFromId(id: string): { category: string | null; subcategory: string | null } {
  const parts = id.split("/").filter(Boolean);
  if (parts[0] !== "outils") return { category: null, subcategory: null };
  const category = parts[1] ?? null;
  const subcategory = parts.length >= 4 ? parts[2] : null;
  return { category, subcategory };
}

export function getToolTaxonomy(post: ToolLike): ToolTaxonomy | null {
  const tags = post.data.tags ?? [];
  if (getSection(post.data.section, tags) !== "outils") return null;

  const derived = deriveFromId(post.id);
  const category = post.data.toolCategoryPrimary ?? derived.category;
  const subcategory = post.data.toolSubcategoryPrimary ?? derived.subcategory;
  const facets = Array.from(
    new Set((post.data.toolFacets ?? []).map((facet) => normalizeTag(facet)).filter(Boolean))
  );

  return {
    category: category ? normalizeTag(category) : null,
    categoryLabel: humanizeToolValue(category),
    subcategory: subcategory ? normalizeTag(subcategory) : null,
    subcategoryLabel: humanizeToolValue(subcategory),
    facets,
    facetLabels: facets.map((facet) => humanizeToolValue(facet) ?? facet),
  };
}

export function getToolNavigationMainTags(post: ToolLike): string[] {
  return getToolTaxonomy(post) ? ["outils"] : [];
}

export function getToolCategoryHref(category: string): string {
  return `/outils/${normalizeTag(category)}`;
}

export function getToolSubcategoryHref(category: string, subcategory: string): string {
  return `/outils/${normalizeTag(category)}/${normalizeTag(subcategory)}`;
}

export function getToolDisplayChips(post: ToolLike, maxFacets = 2): ToolDisplayChip[] {
  const taxonomy = getToolTaxonomy(post);
  if (!taxonomy) return [];

  const chips: ToolDisplayChip[] = [];

  if (taxonomy.category && taxonomy.categoryLabel) {
    chips.push({
      kind: "category",
      label: taxonomy.categoryLabel,
      href: getToolCategoryHref(taxonomy.category),
    });
  }
  if (
    taxonomy.category &&
    taxonomy.subcategory &&
    taxonomy.subcategoryLabel &&
    taxonomy.subcategory !== "autres"
  ) {
    chips.push({
      kind: "subcategory",
      label: taxonomy.subcategoryLabel,
      href: getToolSubcategoryHref(taxonomy.category, taxonomy.subcategory),
    });
  }

  for (const label of taxonomy.facetLabels.slice(0, maxFacets)) {
    if (!chips.some((chip) => chip.label === label)) {
      chips.push({
        kind: "facet",
        label,
        href: null,
      });
    }
  }

  return chips;
}

export function buildToolTaxonomyIndex(posts: ToolLike[]): ToolCategorySummary[] {
  const categories = new Map<string, ToolCategorySummary>();

  for (const post of posts) {
    const taxonomy = getToolTaxonomy(post);
    if (!taxonomy?.category || !taxonomy.categoryLabel) continue;

    const categorySlug = taxonomy.category;
    let categorySummary = categories.get(categorySlug);
    if (!categorySummary) {
      categorySummary = {
        slug: categorySlug,
        label: taxonomy.categoryLabel,
        count: 0,
        subcategories: [],
      };
      categories.set(categorySlug, categorySummary);
    }

    categorySummary.count += 1;

    if (
      taxonomy.subcategory &&
      taxonomy.subcategoryLabel &&
      taxonomy.subcategory !== "autres"
    ) {
      const existingSubcategory = categorySummary.subcategories.find(
        (subcategory) => subcategory.slug === taxonomy.subcategory
      );

      if (existingSubcategory) {
        existingSubcategory.count += 1;
      } else {
        categorySummary.subcategories.push({
          category: categorySlug,
          categoryLabel: taxonomy.categoryLabel,
          slug: taxonomy.subcategory,
          label: taxonomy.subcategoryLabel,
          count: 1,
        });
      }
    }
  }

  return [...categories.values()]
    .map((category) => ({
      ...category,
      subcategories: [...category.subcategories].sort((a, b) => {
        if (b.count !== a.count) return b.count - a.count;
        return a.label.localeCompare(b.label, "fr");
      }),
    }))
    .sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count;
      return a.label.localeCompare(b.label, "fr");
    });
}

export function scoreToolSimilarity(current: ToolLike, candidate: ToolLike): number {
  const currentTaxonomy = getToolTaxonomy(current);
  const candidateTaxonomy = getToolTaxonomy(candidate);
  if (!currentTaxonomy || !candidateTaxonomy) return 0;

  let score = 0;

  if (currentTaxonomy.category && currentTaxonomy.category === candidateTaxonomy.category) {
    score += 4;
  }

  if (
    currentTaxonomy.subcategory &&
    candidateTaxonomy.subcategory &&
    currentTaxonomy.subcategory === candidateTaxonomy.subcategory
  ) {
    score += 5;
  }

  const currentFacets = new Set(currentTaxonomy.facets);
  for (const facet of candidateTaxonomy.facets) {
    if (currentFacets.has(facet)) score += 2;
  }

  return score;
}

export type ToolPostEntry = CollectionEntry<"posts">;
export type ToolPreview = Post;
