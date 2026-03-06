/**
 * convert-to-webp.js
 *
 * Converts all PNG and JPEG images in src/assets/ to WebP.
 * Original files are preserved so existing imports keep working.
 * WebP siblings are placed next to each source file with a .webp extension.
 *
 * Run manually:  node scripts/convert-to-webp.js
 * Or via npm:    npm run convert:webp
 *
 * Requires sharp (already in devDependencies):
 *   npm install
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.resolve(__dirname, '../src/assets');
const SUPPORTED = new Set(['.png', '.jpg', '.jpeg']);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (SUPPORTED.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function convertToWebP(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const webpPath = filePath.replace(new RegExp(`\\${ext}$`), '.webp');

  try {
    // Skip if WebP already exists and is newer than the source
    const [srcStat, destStat] = await Promise.allSettled([
      stat(filePath),
      stat(webpPath),
    ]);

    if (
      srcStat.status === 'fulfilled' &&
      destStat.status === 'fulfilled' &&
      destStat.value.mtimeMs >= srcStat.value.mtimeMs
    ) {
      console.log(`  skipped (up-to-date): ${path.relative(ASSETS_DIR, webpPath)}`);
      return;
    }

    await sharp(filePath)
      .webp({ quality: 82, effort: 6 })
      .toFile(webpPath);

    const before = (await stat(filePath)).size;
    const after = (await stat(webpPath)).size;
    const saving = (((before - after) / before) * 100).toFixed(1);
    console.log(
      `  converted: ${path.relative(ASSETS_DIR, webpPath)}  (${saving}% smaller)`
    );
  } catch (err) {
    console.error(`  ERROR converting ${filePath}:`, err.message);
  }
}

async function main() {
  console.log(`Scanning: ${ASSETS_DIR}\n`);
  const files = await walk(ASSETS_DIR);

  if (files.length === 0) {
    console.log('No PNG/JPEG files found.');
    return;
  }

  console.log(`Found ${files.length} image(s). Converting to WebP…\n`);
  await Promise.all(files.map(convertToWebP));
  console.log('\nDone.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
