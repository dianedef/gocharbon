/**
 * Dynamic API Endpoint: Multi-Tag Post Filtering
 * 
 * This endpoint serves filtered post results for tag combinations.
 * 
 * FILE NAMING CONVENTION:
 * - .json.ts extension tells Astro to:
 *   1. Process file as TypeScript (.ts)
 *   2. Generate JSON endpoint (.json)
 * - Result: /api/filter-posts.json in production
 * 
 * PERFORMANCE STRATEGY:
 * - Common tag combinations are pre-generated at build time (static)
 * - Uncommon combinations are served dynamically (SSR)
 * - Static routes get long cache (1 year), dynamic get shorter cache (1 week)
 * 
 * USAGE:
 * GET /api/filter-posts.json?tags=seo&tags=marketing&page=1&perPage=15
 * 
 * @module api/filter-posts
 */

import type { APIRoute } from 'astro';
import { getFilteredPosts, isCommonCombination } from '../../utils/static-responses';
import { commonCombinations, cacheConfig } from '../../config/tags';

/**
 * Pre-generates static routes for common tag combinations
 * 
 * Called at build time by Astro. For each common combination (defined in config),
 * a static HTML/JSON file is created, enabling:
 * - CDN caching with long TTL
 * - Zero server processing for common queries
 * - Faster response times
 * 
 * Trade-off: Build time increases with more combinations, but runtime is faster.
 * 
 * @returns {Array} Array of paths with their props for static generation
 */
export async function getStaticPaths() {
    return commonCombinations.map(combo => ({
        params: { tags: combo.join(',') },
        props: { isCommonCombo: true }
    }));
}

/**
 * GET request handler for post filtering
 * 
 * Query Parameters:
 * - tags (multiple): Array of tag strings to filter by (e.g., ?tags=seo&tags=marketing)
 * - page (optional): Page number for pagination (default: 1)
 * - perPage (optional): Results per page (default: 15)
 * 
 * Response includes:
 * - posts: Filtered post array
 * - tags: Tags that were applied
 * - page/perPage: Pagination info
 * - isStatic: Whether this was pre-generated (affects caching)
 * - message: Error/info message if applicable
 * 
 * Caching Strategy:
 * - Static (pre-generated): Cache-Control with 1 year max-age
 * - Dynamic (on-demand): Cache-Control with 1 week max-age
 * 
 * @param {Object} context - Astro API context
 * @returns {Response} JSON response with filtered posts and metadata
 */
export const GET: APIRoute = async ({ url, props }) => {
    try {
        // Parse query parameters
        const searchParams = url.searchParams;
        const tags = searchParams.getAll('tags').map(tag => tag.toLowerCase());
        const page = parseInt(searchParams.get('page') || '1');
        const perPage = parseInt(searchParams.get('perPage') || '15');

        // Apply filtering logic (handles tag hierarchy and normalization)
        const posts = await getFilteredPosts(tags, page);
        
        // Determine if this is a pre-generated (static) or dynamic route
        // Static routes get longer cache for better performance
        const isStatic = props?.isCommonCombo || isCommonCombination(tags);

        // User-friendly message when no results found
        const message = posts.length === 0 ? 'Aucun résultat trouvé pour cette combinaison de tags' : undefined;

        return new Response(JSON.stringify({
            tags,
            posts,
            page,
            perPage,
            isStatic,
            message
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': isStatic ? cacheConfig.staticCacheControl : cacheConfig.dynamicCacheControl
            }
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des posts filtrés:', error);
        return new Response(JSON.stringify({
            error: 'Erreur serveur'
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}; 