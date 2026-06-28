/**
 * Static API Endpoint: Single Tag Post Filtering
 * 
 * This endpoint serves posts filtered by a single tag.
 * All main tags are pre-generated at build time for optimal performance.
 * 
 * Route Pattern: /api/tags/[tag].json
 * Example: /api/tags/seo.json, /api/tags/marketing.json
 * 
 * PERFORMANCE:
 * - All main tags (from tagHierarchy) are pre-rendered at build time
 * - Results in static JSON files on CDN with 1-year cache
 * - No server processing needed for repeat requests
 * 
 * @module api/tags/[tag]
 */

import type { APIRoute } from 'astro';
import { getTagPosts, isMainTag } from '../../../utils/static-responses';
import { cacheConfig } from '../../../config/tags';
import { tagHierarchy } from '../../../components/tagHierarchy';
import { parseContentScope } from '../../../utils/content-section';
import { toPostPreviews } from '../../../utils/post-preview';

/**
 * Pre-generates routes for all main tags at build time
 * 
 * Astro calls this function during build to determine which [tag] values
 * should be statically generated. We generate one route per main tag.
 * 
 * @returns {Array} Array of route params with props
 */
export async function getStaticPaths() {
    const mainTags = Object.keys(tagHierarchy);
    return mainTags.map(tag => ({
        params: { tag },
        props: { isMainTag: true }
    }));
}

/**
 * GET handler for single tag filtering
 * 
 * Query Parameters: None required (tag is in URL path)
 * 
 * Response:
 * - tag: The tag that was filtered
 * - posts: Array of matching posts
 * - isStatic: Whether this was pre-generated (affects cache headers)
 * 
 * Error Handling:
 * - 400: Tag parameter missing
 * - 500: Server error during post retrieval
 * 
 * @param {Object} context - Astro API context with params and props
 * @returns {Response} JSON response with posts or error
 */
export const GET: APIRoute = async ({ params, props, url }) => {
    try {
        const tag = params.tag?.toLowerCase();
        const scope = parseContentScope(url.searchParams.get('scope'));
        const perPage = parseInt(url.searchParams.get('perPage') || '15');
        if (!tag) {
            return new Response(JSON.stringify({
                error: 'Tag non spécifié'
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // Fetch posts for this tag (with date sorting)
        const posts = await getTagPosts(tag, 1, scope, perPage);
        const postPreviews = toPostPreviews(posts);
        const isStatic = props?.isMainTag || isMainTag(tag);

        return new Response(JSON.stringify({
            tag,
            posts: postPreviews,
            scope,
            isStatic
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': `public, max-age=${isStatic ? cacheConfig.staticMaxAge : cacheConfig.dynamicMaxAge}`
            }
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des posts :', error);
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
