/**
 * Tag Extraction Script
 * 
 * Extracts all unique tags from Markdown files' frontmatter and saves them to tags.json.
 * This is useful for:
 * - Generating a complete list of available tags for UI components
 * - Validating that all tags used in content are recognized
 * - Creating tag indexes for search and filtering
 * 
 * The script supports multiple frontmatter tag formats:
 * - YAML list: tags:\n  - tag1\n  - tag2
 * - JSON array: tags: ["tag1", "tag2"]
 * - Single line: tags: tag1
 * 
 * Run with: node scripts/extract-tags.mjs
 */

import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = './src/data';
const tagsSet = new Set(); // Use Set to automatically deduplicate tags

/**
 * Recursively finds all Markdown files in a directory
 * 
 * @param {string} dir - Directory to search
 * @returns {Promise<string[]>} Array of paths to .md files
 */
async function findMarkdownFiles(dir) {
  const files = await fs.readdir(dir);
  const markdownFiles = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await fs.stat(filePath);

    if (stats.isDirectory()) {
      const nestedFiles = await findMarkdownFiles(filePath);
      markdownFiles.push(...nestedFiles);
    } else if (file.endsWith('.md')) {
      markdownFiles.push(filePath);
    }
  }

  return markdownFiles;
}

/**
 * Extracts tags from a Markdown file's frontmatter
 * 
 * Supports three common YAML/frontmatter tag formats:
 * 
 * 1. YAML list format:
 *    tags:
 *      - tag1
 *      - tag2
 * 
 * 2. JSON array format:
 *    tags: ["tag1", "tag2"]
 *    tags: ['tag1', 'tag2']
 * 
 * 3. Single tag format:
 *    tags: single-tag
 * 
 * The function tries each pattern in order and uses the first match.
 * All quotes are stripped from tag values for consistency.
 * 
 * @param {string} content - Full markdown file content
 * @returns {string[]} Array of extracted tag strings (may be empty)
 */
function extractFrontmatterTags(content) {
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return [];

  const frontmatter = frontmatterMatch[1];
  let tags = [];
  
  // Define extraction patterns in order of preference
  const patterns = [
    {
      // Pattern 1: YAML list format (most common)
      pattern: /tags:\s*\n(\s+-\s+[^\n]+\n)+/,
      extract: (match) => match[0]
        .split('\n')
        .map(line => line.replace(/^\s*-\s*/, '').trim())
        .filter(line => line && !line.startsWith('tags:'))
    },
    {
      // Pattern 2: JSON array format [tag1, tag2]
      pattern: /tags:\s*\[(.*?)\]/,
      extract: (match) => match[1]
        .split(',')
        .map(tag => tag.trim().replace(/['"]/g, ''))
        .filter(Boolean)
    },
    {
      // Pattern 3: Single tag on same line
      pattern: /tags:\s*([^\n\[]+)\n/,
      extract: (match) => [match[1].trim()]
    }
  ];

  // Try each pattern until one matches
  for (const { pattern, extract } of patterns) {
    const match = frontmatter.match(pattern);
    if (match) {
      tags = extract(match);
      break;
    }
  }

  // Clean up tags: remove quotes and extra whitespace
  return tags.map(tag => tag.replace(/['"]/g, '').trim());
}

/**
 * Main extraction function
 * 
 * Process:
 * 1. Find all markdown files in DATA_DIR
 * 2. Extract tags from each file's frontmatter
 * 3. Deduplicate tags using Set
 * 4. Sort alphabetically for consistent output
 * 5. Write to scripts/tags.json for use by other tools
 * 
 * The resulting JSON file can be used for:
 * - Tag autocomplete in editors
 * - Validating tag references
 * - Building tag clouds or navigation
 */
async function extractTags() {
  try {
    const files = await findMarkdownFiles(DATA_DIR);
    
    // Extract and collect all tags from all files
    for (const file of files) {
      const content = await fs.readFile(file, 'utf-8');
      const tags = extractFrontmatterTags(content);
      // Filter out empty strings and add to Set (auto-deduplicates)
      tags.filter(tag => tag.trim()).forEach(tag => tagsSet.add(tag));
    }

    // Convert Set to sorted array for consistent output
    const sortedTags = Array.from(tagsSet).sort();
    await fs.writeFile('scripts/tags.json', JSON.stringify(sortedTags, null, 2));

    console.log(`✅ Extracted ${sortedTags.length} unique tags`);
  } catch (error) {
    console.error('❌ Erreur:', error);
  }
}

// Execute the extraction
extractTags(); 