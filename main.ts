import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I finished it perfectly three times in simulation, so I never bothered doing it once in reality.";

// The gate refuses anything outside 1..200 characters, so fail loudly
// here instead of shipping an entry that scores 0. Count code points
// once and reuse it for every check below.
const charCount = [...entry].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`entry is ${charCount} characters, outside the 1..200 gate`);
}
if (entry.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (entry !== entry.trim()) {
  throw new Error("entry must not start or end with whitespace");
}
if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must stay on one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
