// gta6-meme-x-01 entry (Node 22, standard library only).
// The entry is the X post itself: this program only copies POST.json
// from the repository root to /output/POST.json, where the gate reads it.
// The house reads the post from X (its first picture, meme.png, and its
// text) and hands that dossier to the judge. Nothing written here is judged.
//
// Run locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  const postPath = join(BOT_DIR, 'POST.json');
  // Fail loudly on a malformed POST.json instead of silently handing the
  // grader a file it cannot read. The gate itself validates that the url
  // is a real X post address; here we only check the JSON shape, so the
  // placeholder still copies byte-identical for a local test run.
  const parsed = JSON.parse(readFileSync(postPath, 'utf8')) as { url?: unknown };
  if (typeof parsed.url !== 'string' || parsed.url.length === 0) {
    console.error('POST.json has no url string.');
    process.exit(1);
  }
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
