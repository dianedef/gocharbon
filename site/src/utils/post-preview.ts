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
    },
  };
}

export function toPostPreviews(posts: PostEntry[]): Post[] {
  return posts.map(toPostPreview);
}
