import type { ImageMetadata } from "astro";
import type { Heading } from "./heading";
import type { CollectionEntry } from "astro:content";

export interface BaseProps {
	title: string;
	description: string;
	classList?: string;
	pageTitle?: string;
	ogImage?: string;
	metaRobots?: string;
}

export interface PostProps {
	author: string;
	pubDate: Date;
	headings: Heading[];
	description: string;
	title: string;
	id: string;
	imgUrl: ImageMetadata;
	section?: "blog" | "outils" | "tutos" | "parcours";
	toolCategoryPrimary?: string;
	toolSubcategoryPrimary?: string;
	toolFacets?: string[];
}

export interface PostCardProps {
	post: CollectionEntry<"posts">;
	index?: number;
}

export interface PostSideBarProps {
	headings: Heading[];
}

export interface PostContentProps {
	postId: string;
	pubDate: Date;
	author: string;
	section?: "blog" | "outils" | "tutos" | "parcours";
	toolCategoryPrimary?: string;
	toolSubcategoryPrimary?: string;
	toolFacets?: string[];
}

export interface FilterTagsProps {
	mainTags: string[];
	selectedTags?: string[];
	scope?: "all" | "outils" | "blog" | "tutos" | "parcours";
}
