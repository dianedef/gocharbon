import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const postCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/data" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      section: z.enum(["blog", "outils", "tutos", "parcours"]).optional(),
      toolCategoryPrimary: z.string().optional(),
      toolSubcategoryPrimary: z.string().optional(),
      toolFacets: z.array(z.string()).optional(),
      qualificationLocale: z.enum([
        "france",
        "union-europeenne",
        "hors-union-europeenne",
        "indetermine",
      ]).optional(),
      ancrageEconomique: z.enum([
        "fort",
        "partiel",
        "faible",
        "indetermine",
      ]).optional(),
      niveauResponsabilite: z.enum([
        "fort",
        "partiel",
        "faible",
        "indetermine",
      ]).optional(),
      paysSiege: z.string().optional(),
      paysFiscal: z.string().optional(),
      paysFondateurs: z.array(z.string()).optional(),
      hebergementDonnees: z.enum([
        "france",
        "union-europeenne",
        "hors-union-europeenne",
        "multi-region",
        "inconnu",
      ]).optional(),
      societeMere: z.string().optional(),
      sourcesVerification: z.array(z.string()).optional(),
      notesQualification: z.string().optional(),
      methodologieVersion: z.string().optional(),
      metadataEnrichedAt: z.string().nullable().optional(),
      description: z.string(),
      pubDate: z.preprocess(
        (value) => {
          if (value instanceof Date) return value.toISOString().slice(0, 10);
          return value;
        },
        z.string().transform((str) => new Date(str)),
      ),
      imgUrl: image(),
      draft: z.boolean().optional().default(false),
    }).passthrough(),
});

const parcoursCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: "./src/content/parcours" }),
  schema: z.object({
    profileId: z.string(),
    title: z.string(),
    description: z.string(),
    category: z.string(),
    level: z.enum(["debutant", "intermediaire", "avance"]),
    status: z.enum(["draft", "active"]).default("active"),
    updatedAt: z.string(),
  }),
});

export const collections = {
  posts: postCollection,
  parcours: parcoursCollection,
};
