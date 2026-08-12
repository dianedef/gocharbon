import type { CollectionEntry } from "astro:content";

export interface Post {
    id: string;
    data: {
        title: string;
        description: string;
        pubDate: Date;
        author: string;
        tags: string[];
        imgUrl: {
            src: string;
            width: number;
            height: number;
            format: string;
        };
        draft?: boolean;
    };
}

export interface PostGridProps {
    posts: CollectionEntry<"posts">[];
    showLoadingSpinner?: boolean;
    currentPage?: number;
    totalPages?: number;
    onLoadMore?: () => void;
}

export interface PostListProps {
  posts: CollectionEntry<"posts">[];
}

export interface RecentPostsProps {
  count?: number;
}

export interface FilterTagsProps {
  mainTags: string[];
  tagHierarchy: TagHierarchy;
  initialPosts: Post[];
}

export interface PostMetadata {
  title: string;
  description: string;
  pubDate: Date;
  author: string;
  tags: string[];
  draft?: boolean;
}

export interface PostData extends PostMetadata {
  id: string;
  slug: string;
  collection: string;
}

export interface PostsUpdateEvent extends CustomEvent {
  detail: {
    posts: Post[];
    isLoading: boolean;
    currentPage: number;
    totalPages: number;
  };
} 