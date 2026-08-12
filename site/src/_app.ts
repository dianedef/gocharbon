import type { App } from "vue";
import { designTokens } from "./generated/design-tokens";

export default function (app: App) {
  // Configuration des propriétés globales
  app.config.globalProperties.$colors = designTokens;

  // Configuration du mode production
  if (import.meta.env.PROD) {
    app.config.errorHandler = (err) => {
      console.error("Erreur Vue:", err);
    };
  }
}
