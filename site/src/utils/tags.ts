/**
 * Tag Normalization Utility
 * 
 * Normalizes tags for URL slugs and consistent comparisons.
 * 
 * Transformations applied (in order):
 * 1. Convert to lowercase
 * 2. Remove accents (é → e, à → a, etc.)
 * 3. Replace non-alphanumeric chars with hyphens
 * 4. Collapse multiple hyphens to single hyphen
 * 5. Remove leading/trailing hyphens
 * 
 * WHY?
 * - URLs need ASCII-safe characters
 * - Tags should match regardless of accent/case variations
 * - Consistent slugs enable reliable routing and caching
 * 
 * @param {string} tag - Raw tag string (e.g., "SEO & Marketing", "Référencement")
 * @returns {string} Normalized slug (e.g., "seo-marketing", "referencement")
 * 
 * @example
 * normalizeTag("SEO & Marketing")  // "seo-marketing"
 * normalizeTag("Référencement")    // "referencement"
 * normalizeTag("E-commerce/Vente") // "e-commerce-vente"
 */
export function normalizeTag(tag: string): string {
    return tag
        .toLowerCase()                          // case-insensitive
        .normalize('NFD')                       // decompose accents (é → e + ´)
        .replace(/[\u0300-\u036f]/g, '')       // remove accent marks
        .replace(/[^a-z0-9-]/g, '-')           // non-alphanumeric → hyphen
        .replace(/-+/g, '-')                    // collapse multiple hyphens
        .replace(/^-|-$/g, '');                // trim hyphens from ends
} 