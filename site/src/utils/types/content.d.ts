export interface Post {
    id: string;
    data: {
        title: string;
        description: string;
        tags: string[];
        imgUrl:
            | string
            | {
                  src: string;
                  width?: number;
                  height?: number;
                  format?: string;
              };
        draft?: boolean;
        pubDate?: Date | string;
        author?: string;
    };
}

export interface PostGridProps {
    posts: Post[];
    showLoadingSpinner?: boolean;
    currentPage?: number;
    totalPages?: number;
    onLoadMore?: () => void;
}

export interface PostListProps {
  posts: Post[];
}

export interface RecentPostsProps {
  count?: number;
}

export interface FilterTagsProps {
  mainTags: string[];
  tagHierarchy: TagHierarchy;
  initialPosts: Post[];
  scope?: "all" | "apps" | "blog" | "tutos" | "parcours";
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
