import type { CollectionEntry } from "astro:content";
import type { Post } from "./types/content";

type PostEntry = CollectionEntry<"posts">;

function getImageSrc(image: PostEntry["data"]["imgUrl"]): string {
  if (typeof image === "string") return image;
  if (image && typeof image === "object" && "src" in image) return image.src;
  return "/placeholder.jpg";
}

export function toPostPreview(post: PostEntry): Post {
  return {
    id: post.id,
    data: {
      title: post.data.title,
      description: post.data.description,
      tags: post.data.tags,
      imgUrl: getImageSrc(post.data.imgUrl),
      draft: post.data.draft,
      pubDate: post.data.pubDate,
      author: post.data.author,
      section: post.data.section,
      toolCategoryPrimary: post.data.toolCategoryPrimary,
      toolSubcategoryPrimary: post.data.toolSubcategoryPrimary,
      toolFacets: post.data.toolFacets,
      qualificationLocale: post.data.qualificationLocale,
      ancrageEconomique: post.data.ancrageEconomique,
      niveauResponsabilite: post.data.niveauResponsabilite,
      paysSiege: post.data.paysSiege,
      paysFiscal: post.data.paysFiscal,
      paysFondateurs: post.data.paysFondateurs,
      hebergementDonnees: post.data.hebergementDonnees,
      societeMere: post.data.societeMere,
      sourcesVerification: post.data.sourcesVerification,
      notesQualification: post.data.notesQualification,
      methodologieVersion: post.data.methodologieVersion,
    },
  };
}

export function toPostPreviews(posts: PostEntry[]): Post[] {
  return posts.map(toPostPreview);
}
