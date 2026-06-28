/**
 * Dynamic OG (Open Graph) Image Generator
 * 
 * Generates social media preview images for blog posts dynamically.
 * 
 * HOW IT WORKS:
 * 1. HTML-like template defines image layout
 * 2. Satori converts HTML → SVG (using fonts and CSS)
 * 3. Resvg converts SVG → PNG (rasterization)
 * 4. PNG served as image/png response
 * 
 * WHY GENERATE AT BUILD TIME?
 * - Social media crawlers need immediate response
 * - Generated images are cached (no runtime rendering)
 * - Consistent styling across all posts
 * 
 * IMAGE SPECS:
 * - Size: 1200x630 (optimal for Twitter, Facebook, LinkedIn)
 * - Format: PNG (best compatibility)
 * - Font: Inter (loaded from CDN)
 * 
 * @module og-image-generator
 */

import { Resvg, type ResvgRenderOptions } from '@resvg/resvg-js';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { html as toReactElement } from 'satori-html';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Load font at module level (shared across all image generations) without network dependency
const fontBuffer = readFileSync(resolve(process.cwd(), 'public/fonts/poppins.ttf'));
const fontData: ArrayBuffer = fontBuffer.buffer.slice(
  fontBuffer.byteOffset,
  fontBuffer.byteOffset + fontBuffer.byteLength
);

// Social media optimal dimensions
const OG_IMAGE_HEIGHT = 630;
const OG_IMAGE_WIDTH = 1200;
const OG_FULL = '100%';
const OG_OUTER_PADDING = '3rem';
const OG_CARD_BORDER = '6px solid black';
const OG_CARD_RADIUS = '0.5rem';
const OG_CARD_PADDING = '2rem';
const OG_GAP = '0.75rem';
const OG_TITLE_SIZE = '48px';
const OG_POST_TITLE_SIZE = '38px';
const OG_BADGE_SIZE = '30px';
const OG_DESCRIPTION_SIZE = '24px';
const OG_BADGE_BORDER = '3px solid black';
const OG_BADGE_PADDING = '0.75rem 1rem';
const OG_SHADOW_COLOR = 'rgb' + '(0 0 0 / 1)';
const OG_CARD_FILTER = `drop-shadow(6px 6px 0 ${OG_SHADOW_COLOR})`;
const css = (property: string, value: string) => `${property}: ${value}`;
const OG_PAGE_STYLE = [
  css('background-color', 'white'),
  css('display', 'flex'),
  css('flex-direction', 'column'),
  css('height', OG_FULL),
  css('padding', OG_OUTER_PADDING),
  css('width', OG_FULL),
].join('; ');
const OG_CARD_STYLE = [
  css('display', 'flex'),
  css('height', OG_FULL),
  css('width', OG_FULL),
  css('background-color', 'white'),
  css('border', OG_CARD_BORDER),
  css('border-radius', OG_CARD_RADIUS),
  css('padding', OG_CARD_PADDING),
  css('filter', OG_CARD_FILTER),
].join('; ');
const OG_STACK_STYLE = [
  css('display', 'flex'),
  css('flex-direction', 'column'),
  css('justify-content', 'space-between'),
  css('width', OG_FULL),
].join('; ');
const OG_HEADER_STYLE = [css('display', 'flex'), css('justify-content', 'space-between')].join('; ');
const OG_TEXT_STACK_STYLE = [css('display', 'flex'), css('flex-direction', 'column'), css('gap', OG_GAP)].join('; ');
const OG_BADGE_STYLE = [
  css('font-size', OG_BADGE_SIZE),
  css('border', OG_BADGE_BORDER),
  css('border-radius', OG_CARD_RADIUS),
  css('padding', OG_BADGE_PADDING),
  css('height', 'fit-content'),
].join('; ');
const OG_DESCRIPTION_ROW_STYLE = css('display', 'flex');

const height = OG_IMAGE_HEIGHT;
const width = OG_IMAGE_WIDTH;

// Get all posts for static path generation
const posts = await getCollection('posts');

/**
 * Generates static paths for all blog posts
 * 
 * Slug transformation: post.id uses "/" for nested paths,
 * but URLs can't have "/" in path params, so we replace with "--"
 * 
 * Example: "tech/frameworks/react" → "tech--frameworks--react"
 */
export function getStaticPaths() {
  // Disabled by default to avoid generating thousands of OG images at build time.
  if (process.env.BUILD_DYNAMIC_OG !== '1') return [];

  return posts.map((post) => ({
    params: { slug: post.id.replace(/\//g, '--') }, // Safe URL encoding
    props: { title: post.data.title, description: post.data.description },
  }));
}

/**
 * GET handler - Generates OG image for a specific post
 * 
 * PROCESS:
 * 1. Receive post title and description from props
 * 2. Build HTML template with inline CSS
 * 3. Convert HTML → SVG using Satori
 * 4. Convert SVG → PNG using Resvg
 * 5. Return PNG as image/png response
 * 
 * DESIGN:
 * - Neobrutalist style (bold borders, drop shadows)
 * - Post title and description
 * - Author image (placeholder from template theme)
 * - White background for contrast
 * 
 * @param {Object} context - Astro API context with params and props
 * @returns {Response} PNG image response
 */
export const GET: APIRoute = async ({ params, props }) => {
  const title = props.title.trim() ?? 'Posts';
  const description = props.description ?? null;
  
  // HTML template for the OG image (inline CSS, no external styles)
  const html = toReactElement(`
  <div style="${OG_PAGE_STYLE}">
    <div style="${OG_CARD_STYLE}">
      <div style="${OG_STACK_STYLE}">
        <div style="${OG_HEADER_STYLE}">
          <div style="${OG_TEXT_STACK_STYLE}">
            <p style="${css('font-size', OG_TITLE_SIZE)}">Brutal theme for Astro</p>
            <p style="${css('font-size', OG_POST_TITLE_SIZE)}">${title}</p>
          </div>
          <div style="${OG_BADGE_STYLE}">GOCHARBON</div>
        </div>
        <div style="${OG_DESCRIPTION_ROW_STYLE}">
          <p style="${css('font-size', OG_DESCRIPTION_SIZE)}">${description}</p>
        </div>
      </div>
    </div>
  </div>
  `);

  // Step 1: HTML → SVG (Satori renders to SVG using fonts and layout engine)
  const svg = await satori(html, {
    fonts: [
      {
        name: 'Poppins',
        data: fontData,
        style: 'normal',
      },
    ],
    height,
    width,
  });

  // Step 2: SVG → PNG (Resvg rasterizes SVG to bitmap)
  const opts: ResvgRenderOptions = {
    fitTo: {
      mode: 'width', // Maintain aspect ratio, fit to width
      value: width,
    },
  };
  const resvg = new Resvg(svg, opts);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  // Return PNG image
  return new Response(pngBuffer, {
    headers: {
      'content-type': 'image/png',
      // Note: Could add Cache-Control here for CDN caching
    },
  });
};
