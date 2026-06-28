import type { App } from 'vue';
import colors from './components/config/colors.json';

export default function(app: App) {
    // Configuration des propriétés globales
    app.config.globalProperties.$colors = colors;
    
    // Configuration du mode production
    if (import.meta.env.PROD) {
        app.config.errorHandler = (err) => {
            console.error('Erreur Vue:', err);
        };
    }
} 