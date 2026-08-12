import type { IconifyJSON } from "@iconify/types";
import {
  defineConfig,
  presetIcons,
  presetWind,
  presetTypography,
  presetUno,
  presetAttributify,
} from "unocss";
import { designTokens } from "./src/generated/design-tokens";

const light = designTokens.light;
const asDropShadow = (shadow: {
  x: string;
  y: string;
  blur: string;
  color: string;
}) => `drop-shadow(${shadow.x} ${shadow.y} ${shadow.blur} ${shadow.color})`;

export default defineConfig({
  presets: [
    presetWind(),
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        logos: () =>
          import("@iconify-json/logos/icons.json").then(
            (i) => i.default as IconifyJSON,
          ),
        uil: () =>
          import("@iconify-json/uil/icons.json").then(
            (l) => l.default as IconifyJSON,
          ),
      },
      scale: 1.2,
      cdn: "https://esm.sh/",
    }),
    presetTypography(),
  ],
  theme: {
    colors: {
      // Compatibility names resolve from the generated canonical authority.
      "yellow-primary": light["primitive.color.brand.yellow"],
      "yellow-gold": light["primitive.color.brand.orange"],
      "yellow-bright": light["primitive.color.brand.orange"],
      "purple-medium": light["primitive.color.brand.charcoal"],
      "purple-light": light["primitive.color.brand.yellow"],
      "yellow-soft": light["primitive.color.brand.cream"],
      "yellow-pale": light["primitive.color.brand.orange"],
      yellow: light["primitive.color.brand.yellow"],
      "yellow-dark": light["primitive.color.brand.black"],
      "white-soft": light["primitive.color.brand.cream"],
      "purple-darker": light["primitive.color.brand.ink"],

      // Compatibility aliases (same values to keep existing classnames working)
      "purple-bright": light["primitive.color.brand.orange"],
      "purple-pale": light["primitive.color.brand.cream"],
      "purple-lighter": light["primitive.color.brand.charcoal"],
      "purple-darkest": light["primitive.color.brand.black"],
      "purple-dark": light["primitive.color.brand.black"],
      "gray-dark": light["primitive.color.brand.charcoal"],
      "gray-blue": light["primitive.color.brand.charcoal"],

      // Semantic aliases
      primary: light["semantic.color.actionPrimary"],
      secondary: light["semantic.color.actionSecondary"],
      accent: light["semantic.color.focus"],
      link: light["semantic.color.link"],
      "link-hover": light["semantic.color.linkHover"],
    },
    fontFamily: {
      sanchez: ["Sanchez", "serif"],
    },
  },
  rules: [
    ["dark-text", { color: designTokens.dark["semantic.color.text"] }],
    [
      "dark-bg",
      { backgroundColor: designTokens.dark["semantic.color.background"] },
    ],
    ["user-select-none", { "user-select": "none" }],
    // Règles pour les ombres brutales
    [
      "drop-shadow-brutal",
      { filter: asDropShadow(light["primitive.shadow.brutalMedium"]) },
    ],
    [
      "drop-shadow-brutal-dark",
      {
        filter: asDropShadow(
          designTokens.dark["primitive.shadow.brutalMedium"],
        ),
      },
    ],
    // Règle pour la couleur active
    [
      /^bg-active-color$/,
      () => ({ "background-color": "var(--active-color)" }),
    ],
    // Règles spécifiques pour la prose en mode sombre
    [
      /^prose-dark$/,
      () => ({
        "--un-prose-headings": designTokens.dark["semantic.color.text"],
        "--un-prose-body": designTokens.dark["semantic.color.text"],
        "--un-prose-links": designTokens.dark["semantic.color.link"],
        "--un-prose-links-hover": designTokens.dark["semantic.color.linkHover"],
        "--un-prose-lists": designTokens.dark["semantic.color.text"],
        "--un-prose-hr": designTokens.dark["semantic.color.border"],
        "--un-prose-captions": designTokens.dark["semantic.color.text"],
        "--un-prose-code": designTokens.dark["semantic.color.text"],
        "--un-prose-borders": designTokens.dark["semantic.color.border"],
        "--un-prose-bg-soft": designTokens.dark["semantic.color.background"],
      }),
    ],
  ],
  shortcuts: {
    "dark-mode": "dark:text-yellow-soft dark:bg-purple-darker prose-dark",
    "brutal-card":
      "border-3 border-black dark:border-yellow-soft rounded-lg bg-white dark:bg-purple-dark text-black dark:text-yellow-soft drop-shadow-brutal dark:drop-shadow-brutal-dark",
    "brutal-btn":
      "border-3 border-black dark:border-yellow-soft bg-white dark:bg-purple-dark text-black dark:text-yellow-soft drop-shadow-brutal dark:drop-shadow-brutal-dark hover:bg-active-color dark:hover:bg-active-color",
    "brutal-pill":
      "drop-shadow-brutal dark:drop-shadow-brutal-dark user-select-none bg-white dark:bg-purple-dark text-black dark:text-yellow-soft rounded-full border-1 border-black dark:border-1 dark:border-yellow-soft px-3 py-1 text-sm transform transition-all duration-300 hover:-translate-y-2 hover:bg-active-color dark:hover:bg-active-color",
    "brutal-filter-pill":
      "drop-shadow-brutal dark:drop-shadow-brutal-dark user-select-none text-black dark:text-yellow-soft rounded-full border-2 border-black dark:border-2 dark:border-yellow-soft px-6 py-3 text-xl font-bold transform m-3 transition-all duration-200 ease-out will-change-transform bg-white dark:bg-purple-dark",
  },
});
