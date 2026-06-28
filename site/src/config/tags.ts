/**
 * Tag Configuration and Combination Generation
 * 
 * This module configures tag behavior and determines which tag combinations
 * should be pre-generated for optimal performance.
 * 
 * Key concepts:
 * - Main tags: Top-level categories (business, marketing, tech, etc.)
 * - Common combinations: Frequently used tag pairs pre-generated at build
 * - Pagination config: Default page sizes for tag filtering
 * - Cache config: Cache durations for static vs dynamic responses
 * 
 * @module config/tags
 */

import type { TagHierarchy } from '../utils/types/tags';
import { tagHierarchy } from '../components/tagHierarchy';

// Extract main tags dynamically from hierarchy (keeps config DRY)
export const mainTags = Object.keys(tagHierarchy);

// Type safety for tag combinations
type MainTag = keyof typeof tagHierarchy;
type TagCombination = [MainTag, MainTag];

/**
 * Generates relevant tag combinations to pre-render at build time
 * 
 * ALGORITHM:
 * Analyzes tag hierarchy to find "natural" combinations where tags
 * share thematic similarities or complementary subtags.
 * 
 * HEURISTICS:
 * - Tags with overlapping subtag names
 * - Tags with semantically related themes (e.g., marketing + content)
 * - Tags commonly used together in business contexts
 * 
 * TRADE-OFF:
 * - More combinations = longer build time but faster runtime
 * - Fewer combinations = faster builds but more dynamic requests
 * 
 * Current implementation is conservative (few combinations) to keep
 * build times reasonable. Can be expanded based on analytics.
 * 
 * @returns {TagCombination[]} Array of tag pairs to pre-generate
 */
function generateRelevantCombinations(): TagCombination[] {
    const combinations: TagCombination[] = [];
    const tags = Object.keys(tagHierarchy) as MainTag[];

    // Compare each tag pair (avoiding duplicates with i < j pattern)
    for (let i = 0; i < tags.length; i++) {
        const mainTag = tags[i];
        const mainTagData = tagHierarchy[mainTag];

        for (let j = i + 1; j < tags.length; j++) {
            const otherTag = tags[j];
            const otherTagData = tagHierarchy[otherTag];

            // Extract subtag names for comparison
            const mainSubTags = Object.keys(mainTagData.subtags || {});
            const otherSubTags = Object.keys(otherTagData.subtags || {});
            
            // Check if tags have related themes
            const hasCommonThemes = mainSubTags.some(subTag => 
                // Direct subtag name match
                otherSubTags.includes(subTag) ||
                // Semantic relationships (examples of business logic)
                (subTag.includes('marketing') && otherSubTags.some(t => t.includes('contenu'))) ||
                (subTag.includes('tech') && otherSubTags.some(t => t.includes('digital')))
            );

            if (hasCommonThemes) {
                combinations.push([mainTag, otherTag]);
            }
        }
    }

    return combinations;
}

/**
 * Common tag combinations to pre-generate at build time
 * 
 * These combinations will be available as static files, reducing server load
 * and improving response times for frequently accessed tag pairs.
 */
export const commonCombinations: TagCombination[] = generateRelevantCombinations();

/**
 * Pagination configuration
 * 
 * Controls how many posts are shown per page in tag filtering.
 * - defaultPerPage: Standard page size for most use cases
 * - maxPerPage: Upper limit to prevent excessive data transfer
 */
export const paginationConfig = {
    defaultPerPage: 15,  // Good balance between content and load time
    maxPerPage: 50       // Prevent client-side performance issues
} as const;

/**
 * HTTP Cache configuration for API responses
 * 
 * STATIC vs DYNAMIC caching strategy:
 * 
 * STATIC (pre-generated at build):
 * - Max-age: 1 year (31536000 seconds)
 * - Immutable: Content won't change until next deployment
 * - Use for: Main tags, common combinations
 * 
 * DYNAMIC (generated on-demand):
 * - Max-age: 1 week (604800 seconds)
 * - Allows for content updates without deployment
 * - Use for: Rare tag combinations, new content
 * 
 * CDN benefits: Both leverage CDN caching to reduce origin requests
 */
export const cacheConfig = {
    staticMaxAge: 31536000,        // 1 year in seconds
    dynamicMaxAge: 604800,         // 1 week in seconds
    staticCacheControl: 'public, max-age=31536000, immutable',
    dynamicCacheControl: 'public, max-age=604800'
} as const; 