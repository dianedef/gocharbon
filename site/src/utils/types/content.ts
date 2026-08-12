import type { CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export interface FilterTagsProps {
  mainTags: string[];
  tagHierarchy: Record<string, any>;
  initialPosts: Post[];
  selectedTags?: string[];
}

export interface PostGridProps {
  posts: Post[];
  showLoadingSpinner?: boolean;
  currentPage?: number;
  totalPages?: number;
}

export interface PostSummaryCardProps {
  post: Post;
  index?: number;
}

export interface PostsUpdateEvent extends CustomEvent {
  detail: {
    posts: Post[];
    isLoading: boolean;
    currentPage: number;
    totalPages: number;
  };
}

export interface FilterApiResponse {
  posts: Post[];
  page: number;
  perPage: number;
  totalPosts: number;
  totalPages: number;
  hasMore: boolean;
}

export interface TagApiResponse {
  tag: string;
  posts: Post[];
} 