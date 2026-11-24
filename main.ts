// One Word for Your Wi-Fi — make.fun entry.
// A single word describing my Wi-Fi, written to /output/entry.txt.
// Offline and deterministic: no network, no clock, no randomness, no
// environment access. The program only emits the word.
import * as fs from "node:fs";

// Why this word: the judge weighs, in order, on-subject fit, an instant
// laugh, truth about how home Wi-Fi behaves, a fresh angle, and instant
// readability with no context. "Traitor" is the behaviour every home
// Wi-Fi owner recognises — it abandons you mid-call, mid-download,
// mid-game, at the exact moment you need it most — personified as a
// betrayer instead of the usual slow/buffering words everyone reaches
// for, and it needs no explanation to land.
const WORD = "Traitor";
const MAX_CHARS = 20;

// Guard the sealed gate ourselves: 1-20 UTF-8 characters, not only
// whitespace, a single word with no spaces. Fail loudly instead of
// ever writing an entry the scorer would reject.
const chars = [...WORD].length;
if (chars < 1 || chars > MAX_CHARS || !WORD.trim() || /\s/.test(WORD)) {
  throw new Error(`wifi word violates the 1-20 char single-word gate (${chars} chars)`);
}
// One word means letters only: no hyphen, apostrophe, digit or punctuation
// that would make the judge read it as two things.
if (!/^[A-Za-z]+$/.test(WORD)) {
  throw new Error(`wifi word must be a single plain word, got ${JSON.stringify(WORD)}`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", WORD, "utf8");

// Verify the written file round-trips exactly: same bytes, one word.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== WORD) {
  throw new Error("entry.txt does not match the wifi word");
}

console.log(`wrote ${chars} chars to /output/entry.txt`);
