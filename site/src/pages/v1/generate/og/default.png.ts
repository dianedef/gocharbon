import { Resvg, type ResvgRenderOptions } from '@resvg/resvg-js';
import type { APIRoute } from 'astro';
import satori from 'satori';
import { html as toReactElement } from 'satori-html';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const fontBuffer = readFileSync(resolve(process.cwd(), 'public/fonts/poppins.ttf'));
const fontData: ArrayBuffer = fontBuffer.buffer.slice(
  fontBuffer.byteOffset,
  fontBuffer.byteOffset + fontBuffer.byteLength
);

const OG_IMAGE_HEIGHT = 630;
const OG_IMAGE_WIDTH = 1200;
const OG_FULL = '100%';
const OG_OUTER_PADDING = '3rem';
const OG_CARD_BORDER = '6px solid black';
const OG_CARD_RADIUS = '0.5rem';
const OG_CARD_PADDING = '2rem';
const OG_GAP = '0.75rem';
const OG_TITLE_SIZE = '48px';
const OG_SUBTITLE_SIZE = '38px';
const OG_META_SIZE = '32px';
const OG_BADGE_BORDER = '3px solid black';
const OG_BADGE_PADDING = '0.75rem 1rem';
const OG_NEGATIVE_TOP_PADDING = '-2rem';
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
const OG_TEXT_STACK_STYLE = [css('display', 'flex'), css('flex-direction', 'column'), css('gap', OG_GAP)].join('; ');
const OG_FOOTER_STYLE = [css('display', 'flex'), css('justify-content', 'space-between'), css('align-items', 'baseline'), css('padding-top', OG_NEGATIVE_TOP_PADDING)].join('; ');
const OG_BADGE_STYLE = [css('font-size', OG_META_SIZE), css('border', OG_BADGE_BORDER), css('border-radius', OG_CARD_RADIUS), css('padding', OG_BADGE_PADDING)].join('; ');

const height = OG_IMAGE_HEIGHT;
const width = OG_IMAGE_WIDTH;

export const GET: APIRoute = async () => {
  const link = 'https://brutal.elian.codes';
  const html = toReactElement(`
  <div style="${OG_PAGE_STYLE}">
    <div style="${OG_CARD_STYLE}">
      <div style="${OG_STACK_STYLE}">
        <div style="${OG_TEXT_STACK_STYLE}">
          <p style="${css('font-size', OG_TITLE_SIZE)}">Brutal</p>
          <p style="${css('font-size', OG_SUBTITLE_SIZE)}">A theme for Astro</p>
          <p style="${css('font-size', OG_SUBTITLE_SIZE)}">Brought to you by Elian</p>
        </div>
        <div style="${OG_FOOTER_STYLE}">
          <p style="${css('font-size', OG_META_SIZE)}">${link}</p>
          <div style="${OG_BADGE_STYLE}">GOCHARBON</div>
        </div>
      </div>
    </div>
  </div>
  `);

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

  const opts: ResvgRenderOptions = {
    fitTo: {
      mode: 'width',
      value: width,
    },
  };
  const resvg = new Resvg(svg, opts);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer, {
    headers: {
      'content-type': 'image/png',
    },
  });
};
