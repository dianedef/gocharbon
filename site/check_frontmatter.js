/**
 * Frontmatter Validation and Fixing Script
 * 
 * This script ensures all Markdown files in src/content/docs have valid frontmatter
 * with required fields: title, description, pubDate, category, and author.
 * 
 * Key features:
 * - Recursively scans directories for .md files
 * - Adds missing frontmatter if none exists
 * - Fixes improperly quoted fields (YAML requires quotes for special chars)
 * - Generates default values from filename when fields are missing
 * - Infers category from file path (seo, marketing, tech, etc.)
 * 
 * Run with: node check_frontmatter.js
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module compatibility for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Recursively finds all Markdown files in a directory
 * 
 * @param {string} dir - The directory to search
 * @returns {Promise<string[]>} Array of absolute paths to .md files
 */
async function findMarkdownFiles(dir) {
    const files = await fs.readdir(dir);
    let mdFiles = [];

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stats = await fs.stat(filePath);

        if (stats.isDirectory()) {
            mdFiles = mdFiles.concat(await findMarkdownFiles(filePath));
        } else if (file.endsWith('.md')) {
            mdFiles.push(filePath);
        }
    }

    return mdFiles;
}

/**
 * Generates a human-readable title from a filename
 * 
 * Converts kebab-case filenames to Title Case.
 * Example: "seo-technique-vitesse.md" → "Seo Technique Vitesse"
 * 
 * @param {string} filePath - Path to the markdown file
 * @returns {string} A title-cased string suitable for frontmatter
 */
function generateDefaultTitle(filePath) {
    const fileName = path.basename(filePath, '.md');
    return fileName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Generates a default French description based on the title
 * 
 * @param {string} title - The page title
 * @returns {string} A generic French description
 */
function generateDefaultDescription(title) {
    return `Guide complet sur ${title.toLowerCase()}`;
}

/**
 * Validates and fixes frontmatter in a Markdown file
 * 
 * This function handles several scenarios:
 * 1. No frontmatter exists → Creates complete frontmatter block
 * 2. Frontmatter exists but fields are missing → Adds missing fields
 * 3. Fields are improperly quoted → Adds proper quotes (required by YAML)
 * 
 * YAML Requirements:
 * - String values with special characters MUST be quoted
 * - Dates should be quoted for consistency
 * - All modifications preserve existing content
 * 
 * @param {string} filePath - Absolute path to the markdown file
 */
async function fixFrontmatter(filePath) {
    try {
        let content = await fs.readFile(filePath, 'utf8');
        let modified = false;

        // Extract existing frontmatter using regex (matches YAML between --- delimiters)
        const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
        
        if (!frontmatterMatch) {
            // No frontmatter found - create a complete new one
            const defaultTitle = generateDefaultTitle(filePath);
            const defaultDescription = generateDefaultDescription(defaultTitle);
            // Infer category from file path (simple heuristic)
            const category = filePath.includes('seo') ? 'SEO' : 
                           filePath.includes('marketing') ? 'Marketing' :
                           filePath.includes('tech') ? 'Tech' : 'Général';
            
            const newFrontmatter = `---
title: "${defaultTitle}"
description: "${defaultDescription}"
pubDate: "2024-03-25"
category: "${category}"
author: "Diane"
---

`;
            // Prepend frontmatter to existing content
            content = newFrontmatter + content.trimStart();
            await fs.writeFile(filePath, content, 'utf8');
            console.log(`✅ Nouveau frontmatter ajouté dans ${filePath}`);
            return;
        }

        // Frontmatter exists - validate and fix fields
        const frontmatter = frontmatterMatch[1];
        let newFrontmatter = frontmatter;

        // Check and fix title format (must be quoted)
        const titleMatch = frontmatter.match(/^title:\s*(.*)$/m);
        if (titleMatch) {
            const title = titleMatch[1].trim();
            if (!title.startsWith('"') || !title.endsWith('"')) {
                newFrontmatter = newFrontmatter.replace(
                    /^title:\s*(.*)$/m,
                    `title: "${title.replace(/^"|"$/g, '')}"`
                );
                modified = true;
            }
        } else {
            const defaultTitle = generateDefaultTitle(filePath);
            newFrontmatter += `\ntitle: "${defaultTitle}"`;
            modified = true;
        }

        // Check and fix description format (must be quoted)
        const descMatch = frontmatter.match(/^description:\s*(.*)$/m);
        if (descMatch) {
            const desc = descMatch[1].trim();
            if (!desc.startsWith('"') || !desc.endsWith('"')) {
                newFrontmatter = newFrontmatter.replace(
                    /^description:\s*(.*)$/m,
                    `description: "${desc.replace(/^"|"$/g, '')}"`
                );
                modified = true;
            }
        } else {
            const title = titleMatch ? titleMatch[1].trim().replace(/^"|"$/g, '') : generateDefaultTitle(filePath);
            const defaultDescription = generateDefaultDescription(title);
            newFrontmatter += `\ndescription: "${defaultDescription}"`;
            modified = true;
        }

        // Check and add publication date if missing (default to March 25, 2024)
        if (!frontmatter.match(/^pubDate:/m)) {
            newFrontmatter += '\npubDate: "2024-03-25"';
            modified = true;
        }

        // Check and add category if missing (inferred from path)
        if (!frontmatter.match(/^category:/m)) {
            const category = filePath.includes('seo') ? 'SEO' : 
                           filePath.includes('marketing') ? 'Marketing' :
                           filePath.includes('tech') ? 'Tech' : 'Général';
            newFrontmatter += `\ncategory: "${category}"`;
            modified = true;
        }

        // Check and add author if missing (default to "Diane")
        if (!frontmatter.match(/^author:/m)) {
            newFrontmatter += '\nauthor: "Diane"';
            modified = true;
        }

        // Write changes back to file if any modifications were made
        if (modified) {
            const newContent = content.replace(
                /^---\s*\n[\s\S]*?\n---/,
                `---\n${newFrontmatter}\n---`
            );
            await fs.writeFile(filePath, newContent, 'utf8');
            console.log(`✅ Frontmatter corrigé dans ${filePath}`);
        } else {
            console.log(`✅ Frontmatter déjà correct dans ${filePath}`);
        }
    } catch (error) {
        console.error(`❌ Erreur avec le fichier ${filePath}:`, error);
    }
}

async function main() {
    try {
        const contentDir = path.join(__dirname, 'src', 'content', 'docs');
        const mdFiles = await findMarkdownFiles(contentDir);
        console.log(`🔍 ${mdFiles.length} fichiers Markdown trouvés`);

        for (const file of mdFiles) {
            await fixFrontmatter(file);
        }
        
        console.log('✨ Traitement terminé');
    } catch (error) {
        console.error('❌ Erreur:', error);
    }
}

main(); 