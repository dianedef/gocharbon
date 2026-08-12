import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/data" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      section: z.enum(["blog", "apps", "tutos", "parcours"]).optional(),
      metadataEnrichedAt: z.string().nullable().optional(),
      description: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
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
