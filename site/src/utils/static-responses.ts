/**
 * Utilitaires pour la gestion des réponses statiques et dynamiques des posts
 * 
 * Ce module gère la logique complexe de filtrage des posts par tags avec les règles suivantes:
 * - Les tags sont organisés en hiérarchie (principal > sous-tag > sous-sous-tag)
 * - Les tags principaux sont ignorés si leurs sous-tags sont sélectionnés (évite la redondance)
 * - Tous les tags sélectionnés doivent être présents dans un post (logique ET)
 * - La normalisation garantit des comparaisons insensibles aux accents et à la casse
 * 
 * @module static-responses
 */

import { getCollection } from 'astro:content';
import type { Post } from './types/content';
import { commonCombinations, paginationConfig } from '../config/tags';
import { tagHierarchy } from '../components/tagHierarchy';

/**
 * Normalise une chaîne en retirant les accents et en mettant en minuscules
 * 
 * Utilise NFD (Normalization Form Canonical Decomposition) pour décomposer
 * les caractères accentués en caractères de base + diacritiques, puis supprime
 * ces diacritiques. Essentiel pour la comparaison de tags car les utilisateurs
 * peuvent entrer des tags avec ou sans accents.
 * 
 * @param str - La chaîne à normaliser
 * @returns La chaîne normalisée (minuscules, sans accents)
 * @example normalizeString("Référencement") // returns "referencement"
 */
function normalizeString(str: string): string {
    return str.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Groupe les tags par leur tag parent, en ignorant les parents qui ont des sous-tags sélectionnés
 * 
 * Cette fonction implémente une règle métier critique: si un sous-tag est sélectionné,
 * le tag parent ne doit PAS être inclus dans le filtre, car cela serait redondant
 * et créerait des résultats vides (un post ne peut pas avoir à la fois "SEO" et "Backlinks"
 * où "Backlinks" est déjà un sous-tag de "SEO").
 * 
 * Algorithme:
 * 1. Identifier tous les sous-tags dans la liste et marquer leurs parents comme "à ignorer"
 * 2. Grouper les sous-tags par leur parent
 * 3. Ne garder que les tags principaux qui n'ont aucun sous-tag sélectionné
 * 
 * @param {string[]} tags - Liste des tags à grouper (mélange de tags principaux et sous-tags)
 * @returns {Object} Un objet avec:
 *   - mainTags: Tags principaux sans sous-tags sélectionnés
 *   - subTagsByParent: Sous-tags groupés par leur tag parent
 * 
 * @example
 * // Si l'utilisateur sélectionne ["seo", "backlinks"] où "backlinks" est un sous-tag de "seo"
 * groupTagsByParent(["seo", "backlinks"])
 * // returns { mainTags: [], subTagsByParent: { "seo": ["backlinks"] } }
 * // "seo" est ignoré car il a un sous-tag sélectionné
 */
function groupTagsByParent(tags: string[]): { mainTags: string[], subTagsByParent: { [key: string]: string[] } } {
    console.log('=== Début groupTagsByParent ===');
    console.log('Tags reçus:', tags);
    
    const mainTags: string[] = [];
    const subTagsByParent: { [key: string]: string[] } = {};
    const parentsToIgnore = new Set<string>();

    // D'abord, identifier tous les sous-tags et marquer leurs parents comme à ignorer
    tags.forEach(tag => {
        const normalizedTag = normalizeString(tag);
        console.log(`\nAnalyse du tag "${tag}" (normalisé: "${normalizedTag}")`);
        
        for (const [parentTag, data] of Object.entries(tagHierarchy)) {
            const normalizedParentTag = normalizeString(parentTag);
            console.log(`- Vérification avec le parent "${parentTag}" (normalisé: "${normalizedParentTag}")`);
            
            if (data.subtags) {
                const subtags = Object.keys(data.subtags);
                console.log(`  Sous-tags disponibles:`, subtags);
                const normalizedSubtags = subtags.map(t => normalizeString(t));
                console.log(`  Sous-tags normalisés:`, normalizedSubtags);
                
                if (normalizedSubtags.includes(normalizedTag)) {
                    console.log(`  ✓ Le tag "${tag}" est un sous-tag de "${parentTag}"`);
                    if (!subTagsByParent[parentTag]) {
                        subTagsByParent[parentTag] = [];
                    }
                    subTagsByParent[parentTag].push(tag);
                    parentsToIgnore.add(normalizedParentTag);
                }
            }
        }
    });

    console.log('\nParents à ignorer:', Array.from(parentsToIgnore));

    // Ensuite, ajouter uniquement les tags principaux qui n'ont pas de sous-tags sélectionnés
    tags.forEach(tag => {
        const normalizedTag = normalizeString(tag);
        console.log(`\nVérification si "${tag}" est un tag principal`);
        if (Object.keys(tagHierarchy).some(t => normalizeString(t) === normalizedTag)) {
            if (!parentsToIgnore.has(normalizedTag)) {
                console.log(`✓ "${tag}" est un tag principal et n'a pas de sous-tags sélectionnés`);
                mainTags.push(tag);
            } else {
                console.log(`✗ "${tag}" est ignoré car il a des sous-tags sélectionnés`);
            }
        } else {
            console.log(`- "${tag}" n'est pas un tag principal`);
        }
    });

    console.log('\nRésultat final:');
    console.log('Tags principaux:', mainTags);
    console.log('Sous-tags par parent:', subTagsByParent);
    console.log('=== Fin groupTagsByParent ===\n');

    return { mainTags, subTagsByParent };
}

/**
 * Récupère les posts pour un tag principal spécifique
 * 
 * Utilisé pour les routes statiques pré-générées lors du build (/api/tags/[tag].json).
 * Ces routes bénéficient d'un cache long (1 an) car elles ne changent qu'au build.
 * 
 * @param {string} tag - Le tag principal à filtrer (ex: "seo", "marketing")
 * @param {number} page - Numéro de la page pour la pagination (défaut: 1)
 * @returns {Promise<Post[]>} Les posts filtrés et paginés, triés par date décroissante
 * 
 * @example
 * const seoPosts = await getTagPosts("seo", 1); // Première page des posts SEO
 */
export async function getTagPosts(tag: string, page: number = 1): Promise<Post[]> {
    const allPosts = await getCollection('posts');
    const normalizedSearchTag = normalizeString(tag);
    const filteredPosts = allPosts
        .filter(post => 
            post.data.tags.some(t => normalizeString(t) === normalizedSearchTag)
        )
        .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

    const start = (page - 1) * paginationConfig.defaultPerPage;
    const end = start + paginationConfig.defaultPerPage;
    
    return filteredPosts.slice(start, end);
}

/**
 * Récupère les posts filtrés par une combinaison de tags
 * 
 * Cette fonction implémente la logique métier complexe du filtrage multi-tags:
 * 
 * RÈGLES MÉTIER:
 * 1. Les tags principaux sont COMPLÈTEMENT ignorés si un de leurs sous-tags est sélectionné
 *    (évite la redondance: un post tagué "Backlinks" a déjà implicitement "SEO")
 * 
 * 2. Tous les tags finaux (après groupement) doivent être présents dans le post (logique ET)
 *    Exemple: ["seo", "marketing"] ne retourne que les posts qui ont LES DEUX tags
 * 
 * 3. Les sous-tags remplacent leur parent dans le filtre
 *    Exemple: Si l'utilisateur sélectionne ["seo", "backlinks"], seul "backlinks" est cherché
 * 
 * PERFORMANCE:
 * - Utilise la normalisation pour les comparaisons (insensible aux accents/casse)
 * - Inclut des logs de debug (à retirer en production pour meilleures performances)
 * - Trie les résultats par date décroissante
 * 
 * PAGINATION:
 * - Applique la pagination après le filtrage (pas de requête DB, tout en mémoire)
 * - Page 1 = premiers X posts, Page 2 = X posts suivants, etc.
 * 
 * @param {string[]} tags - Liste des tags à filtrer (peut contenir tags principaux ET sous-tags)
 * @param {number} page - Numéro de la page pour la pagination (défaut: 1)
 * @returns {Promise<Post[]>} Les posts filtrés et paginés, ou tableau vide si aucun résultat
 * 
 * @example
 * // Utilisateur sélectionne "SEO" + "Marketing"
 * await getFilteredPosts(["seo", "marketing"], 1)
 * // Retourne les posts qui ont TOUS les deux tags
 * 
 * @example
 * // Utilisateur sélectionne "SEO" + "Backlinks" (sous-tag de SEO)
 * await getFilteredPosts(["seo", "backlinks"], 1)
 * // Retourne seulement les posts avec "Backlinks" (SEO est ignoré car redondant)
 */
export async function getFilteredPosts(tags: string[], page: number = 1): Promise<Post[]> {
    console.log('\n=== Début getFilteredPosts ===');
    
    // Si aucun tag, retourner un tableau vide
    if (tags.length === 0) {
        console.log('Aucun tag fourni, retour tableau vide');
        return [];
    }

    console.log('Tags reçus:', tags);

    // Grouper les tags par leur parent pour déterminer quels tags utiliser
    const { mainTags, subTagsByParent } = groupTagsByParent(tags);
    console.log('\nTags groupés:');
    console.log('- Tags principaux:', mainTags);
    console.log('- Sous-tags par parent:', subTagsByParent);

    // Récupérer tous les tags à rechercher (sous-tags + tags principaux sans sous-tags)
    const tagsToSearch = [
        ...mainTags,
        ...Object.values(subTagsByParent).flat()
    ];
    console.log('\nTags à rechercher:', tagsToSearch);

    // Normaliser les tags à rechercher
    const normalizedTagsToSearch = tagsToSearch.map(tag => normalizeString(tag));
    console.log('Tags à rechercher (normalisés):', normalizedTagsToSearch);

    const allPosts = await getCollection('posts');
    console.log(`\nNombre total de posts: ${allPosts.length}`);

    const filteredPosts = allPosts
        .filter(post => {
            console.log(`\nAnalyse du post "${post.data.title}"`);
            // Normaliser tous les tags du post
            const normalizedPostTags = post.data.tags.map(t => normalizeString(t));
            console.log('Tags du post (normalisés):', normalizedPostTags);
            
            // Vérifier que le post contient tous les tags recherchés
            const hasAllTags = normalizedTagsToSearch.every(searchTag => {
                const hasTag = normalizedPostTags.includes(searchTag);
                if (hasTag) {
                    console.log(`✓ Tag trouvé: "${searchTag}"`);
                } else {
                    console.log(`✗ Tag manquant: "${searchTag}"`);
                }
                return hasTag;
            });
            
            console.log('Post a tous les tags?', hasAllTags ? '✓ Oui' : '✗ Non');
            return hasAllTags;
        })
        .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

    console.log(`\nNombre de posts filtrés: ${filteredPosts.length}`);
    if (filteredPosts.length > 0) {
        console.log('Posts trouvés:', filteredPosts.map(p => p.data.title));
    }

    const start = (page - 1) * paginationConfig.defaultPerPage;
    const end = start + paginationConfig.defaultPerPage;
    
    console.log('=== Fin getFilteredPosts ===\n');
    return filteredPosts.slice(start, end);
}

/**
 * Vérifie si un tag est un tag principal (racine de la hiérarchie)
 * 
 * Utilisé pour déterminer si une route peut être pré-générée statiquement.
 * Les tags principaux bénéficient de routes statiques optimisées au build.
 * 
 * @param {string} tag - Le tag à vérifier
 * @returns {boolean} True si le tag est un tag principal (ex: "seo", "marketing", "tech")
 * 
 * @example
 * isMainTag("seo") // true
 * isMainTag("backlinks") // false (c'est un sous-tag)
 */
export function isMainTag(tag: string): boolean {
    const normalizedTag = normalizeString(tag);
    const mainTagsSet = new Set(Object.keys(tagHierarchy).map(key => normalizeString(key as string)));
    return mainTagsSet.has(normalizedTag);
}

/**
 * Vérifie si une combinaison de tags est une combinaison courante pré-générée
 * 
 * Les combinaisons courantes sont pré-générées au build pour des performances optimales.
 * Cela permet d'avoir des routes statiques avec un cache long (1 an) pour les combinaisons
 * les plus utilisées, réduisant ainsi la charge serveur et améliorant les temps de réponse.
 * 
 * @param {string[]} tags - Liste des tags à vérifier (ordre n'importe pas, sera normalisé)
 * @returns {boolean} True si la combinaison est pré-générée et peut bénéficier d'un cache long
 * 
 * @example
 * isCommonCombination(["seo", "marketing"]) // true si pré-généré au build
 * isCommonCombination(["marketing", "seo"]) // true (ordre n'importe pas)
 * isCommonCombination(["tag-rare-1", "tag-rare-2"]) // false, sera servi dynamiquement
 */
export function isCommonCombination(tags: string[]): boolean {
    const normalizedTags = tags.map(t => normalizeString(t)).sort();
    return commonCombinations.some(combo => 
        JSON.stringify(combo.map(t => normalizeString(t)).sort()) === JSON.stringify(normalizedTags)
    );
}

/**
 * Génère le chemin statique pour une combinaison de tags
 * 
 * Construit l'URL de l'API appropriée selon le nombre de tags:
 * - Tag unique: /api/tags/{tag}.json (route optimisée pour tag principal)
 * - Multiple tags: /api/combinations/{tag1-tag2}.json (ordre alphabétique pour cohérence)
 * 
 * Note: Les tags sont triés alphabétiquement pour garantir un chemin unique
 * indépendamment de l'ordre de sélection par l'utilisateur.
 * 
 * @param {string[]} tags - Liste des tags (sera triée automatiquement)
 * @returns {string} Le chemin de l'API pour cette combinaison
 * 
 * @example
 * generateStaticPath(["seo"]) // "/api/tags/seo.json"
 * generateStaticPath(["seo", "marketing"]) // "/api/combinations/marketing-seo.json"
 * generateStaticPath(["marketing", "seo"]) // "/api/combinations/marketing-seo.json" (même résultat)
 */
export function generateStaticPath(tags: string[]): string {
    return tags.length === 1 
        ? `/api/tags/${tags[0]}.json`
        : `/api/combinations/${tags.sort().join('-')}.json`;
} 