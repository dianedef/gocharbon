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

// Load font at module level (shared across all image generations)
const fontFile = await fetch(
  'https://og-playground.vercel.app/inter-latin-ext-700-normal.woff'
);
const fontData: ArrayBuffer = await fontFile.arrayBuffer();

// Social media optimal dimensions
const height = 630;  // Twitter/Facebook recommended height
const width = 1200;  // Twitter/Facebook recommended width

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
  <div style="background-color: white; display: flex; flex-direction: column; height: 100%; padding: 3rem; width: 100%">
    <div style="display:flex; height: 100%; width: 100%; background-color: white; border: 6px solid black; border-radius: 0.5rem; padding: 2rem; filter: drop-shadow(6px 6px 0 rgb(0 0 0 / 1));">
      <div style="display: flex; flex-direction: column; justify-content: space-between; width: 100%; filter: drop-shadow()">
        <div style="display: flex; justify-content: space-between;">
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <p style="font-size: 48px;">Brutal theme for Astro</p>
            <p style="font-size: 38px;">${title}</p>
          </div>
          <img src="https://www.elian.codes/assets/img/elian.jpg" width="200px" height="200px" style="border: 3px solid black; border-radius: 0.5rem;" />
        </div>
        <div style="display: flex;">
          <p style="font-size: 24px;">${description}</p>
        </div>
      </div>
    </div>
  </div>
  `);

  // Step 1: HTML → SVG (Satori renders to SVG using fonts and layout engine)
  const svg = await satori(html, {
    fonts: [
      {
        name: 'Inter Latin',
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
