/**
 * RSS Feed Generator
 * 
 * Generates an RSS 2.0 feed for blog posts, enabling:
 * - Feed readers (Feedly, Inoreader, etc.) to subscribe
 * - Automated content aggregation
 * - Newsletter integrations
 * 
 * The feed is automatically built at build time and served as /feed.xml
 * 
 * RSS SPEC: Follows RSS 2.0 standard
 * - Required: title, description, link
 * - Optional: pubDate, language
 * 
 * @module feed.xml
 */

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

/**
 * Generates RSS feed from all blog posts
 * 
 * @param {Object} context - Astro context with site URL
 * @returns {Response} RSS XML response
 */
export async function GET(context) {
  // Fetch all posts from content collection
  const posts = await getCollection('posts');
  
  return rss({
    title: 'Web\'Indé',
    description: 'Web\'Indé est un blog qui parle de la création de sites web',
    stylesheet: false, // No XSLT styling
    site: context.site, // Base URL from astro.config
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/${post.id}/`, // Relative URL to post
    })),
    customData: '<language>fr-fr</language>', // French language indicator
    canonicalUrl: 'https://webinde.fr', // Canonical domain
  });
}
