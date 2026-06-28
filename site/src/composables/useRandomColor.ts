/**
 * Vue Composable: Random Color Generator with Theme Support
 * 
 * Generates consistent, deterministic colors for UI elements based on content.
 * Key features:
 * - Deterministic: Same content always gets same color (using hash function)
 * - Theme-aware: Automatically switches between light/dark palettes
 * - Reactive: Updates colors when theme changes
 * - Customizable: Allows color overrides via props
 * 
 * Use cases:
 * - Tag pills with consistent colors per tag name
 * - Category badges that maintain color across sessions
 * - User avatars with color derived from username
 * 
 * @module useRandomColor
 */

import { computed, ref, onMounted, onUnmounted } from 'vue';
import colors from '../components/config/colors.json';

export interface ColorProps {
    color?: string;        // Override light mode color
    darkColor?: string;    // Override dark mode color
    content?: string;      // Seed for deterministic color (e.g., tag name, username)
}

/**
 * Composable for generating theme-aware, content-based colors
 * 
 * @param {ColorProps} props - Optional configuration
 * @returns Color values and utilities
 */
export function useRandomColor(props?: ColorProps) {
    const isDarkTheme = ref(false);

    /**
     * Generates a consistent hash from a string
     * 
     * Uses a simple but effective hash algorithm (djb2-like) that:
     * 1. Iterates through each character
     * 2. Shifts hash left by 5 bits (multiply by 32)
     * 3. Subtracts original hash and adds character code
     * 4. Applies bitwise AND to keep as 32-bit integer
     * 
     * This ensures the same string always produces the same hash,
     * enabling deterministic color selection.
     * 
     * @param {string} str - String to hash (e.g., "SEO", "Marketing")
     * @returns {number} Positive integer hash value
     */
    function hashString(str: string): number {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash);
    }

    /**
     * Gets a color from the palette (random or deterministic)
     * 
     * @param {boolean} isDark - Whether to use dark theme palette
     * @param {string} seed - Optional seed for deterministic selection
     * @returns {string} CSS color value (e.g., "#FF5733", "rgb(255, 87, 51)")
     */
    function getRandomColor(isDark = false, seed?: string): string {
        const colorArray = isDark ? colors.dark : colors.light;
        if (seed) {
            // Deterministic: use hash to pick color (same seed = same color)
            const hash = hashString(seed);
            return colorArray[hash % colorArray.length];
        }
        // Random: pick any color from palette
        return colorArray[Math.floor(Math.random() * colorArray.length)];
    }

    // Reactive color values that update when theme or props change
    
    /** Light theme color (respects color prop override) */
    const randomColor = computed(() => {
        if (props?.color) return props.color;
        return getRandomColor(false, props?.content);
    });
    
    /** Dark theme color (respects darkColor prop override) */
    const randomDarkColor = computed(() => {
        if (props?.darkColor) return props.darkColor;
        return getRandomColor(true, props?.content);
    });
    
    /** Current color based on active theme */
    const currentColor = computed(() => isDarkTheme.value ? randomDarkColor.value : randomColor.value);

    /** Selected color (null if no content seed provided) */
    const selectedColor = computed(() => {
        if (!props?.content) return null;
        return isDarkTheme.value ? randomDarkColor.value : randomColor.value;
    });

    function updateSelectedColor(color: string | null) {
        selectedColor.value = color;
    }

    /**
     * Checks if dark theme is currently active
     * 
     * Dark theme is detected by the 'dark' class on <html> element,
     * which is standard practice in Tailwind and similar frameworks.
     */
    function checkDarkTheme() {
        if (typeof document !== 'undefined') {
            isDarkTheme.value = document.documentElement.classList.contains('dark');
        }
    }

    // MutationObserver to watch for theme changes
    let observer: MutationObserver | null = null;

    onMounted(() => {
        // Initial theme detection
        checkDarkTheme();
        
        // Set up observer to detect theme changes (e.g., user clicks theme toggle)
        if (typeof document !== 'undefined' && typeof MutationObserver !== 'undefined') {
            observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    // Check if the 'class' attribute changed on <html>
                    if (mutation.target instanceof HTMLElement && 
                        mutation.attributeName === 'class') {
                        checkDarkTheme();
                    }
                });
            });

            // Watch <html> element for class attribute changes
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['class'] // Only watch 'class' changes
            });
        }
    });

    onUnmounted(() => {
        if (observer) {
            observer.disconnect();
        }
    });

    return {
        randomColor,
        randomDarkColor,
        currentColor,
        selectedColor,
        updateSelectedColor,
        getRandomColor,
        isDarkTheme
    };
} 