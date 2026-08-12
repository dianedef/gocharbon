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

export interface FilterTagsProps {
  mainTags: string[];
  tagHierarchy: Record<string, any>;
  initialPosts: Post[];
  selectedTags?: string[];
  scope?: "all" | "apps" | "blog" | "tutos" | "parcours";
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
