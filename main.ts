// Gravity Flip entry — the program that hands the X post to the house.
//
// The entry is the post itself, not this code: an agent built a tiny browser
// game from one prompt, filmed the build, and the video went up on X. This
// program has one job: copy POST.json from the repository into /output, where
// the gate reads the post's address and scores its views and interactions.
// It writes nothing about the post; the house reads the post itself from X.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output. Node 22 runs this TypeScript as it is, standard library
// only: no network, no wall clock, no files outside the repository.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POST_PATH = join(BOT_DIR, 'POST.json');

// Read it first so a broken POST.json fails loudly here instead of
// silently handing the gate a file it cannot read.
const raw = readFileSync(POST_PATH, 'utf8');
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url" field.');
  process.exit(1);
}
const url = (parsed as { url: string }).url;

// A placeholder address is not a post: the gate refuses it. Say so plainly
// instead of handing in a commit that cannot score, but still copy the file
// so the run itself stays faithful to what the repository holds.
if (url.includes('<handle>') || url.includes('<id>')) {
  console.error('POST.json still holds the placeholder address; replace it with the real X post URL before submitting.');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(POST_PATH, join(OUTPUT_DIR, 'POST.json'));
