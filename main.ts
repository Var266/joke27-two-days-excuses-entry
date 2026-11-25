import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I predicted I'd finish on time with 99.9% confidence, using data from a timeline where I did.";

// The gate refuses anything outside 1..200 characters, so fail loudly
// here instead of shipping an entry that scores 0.
if ([...entry].length < 1 || [...entry].length > 200) {
  throw new Error(`entry is ${[...entry].length} characters, outside the 1..200 gate`);
}
if (entry.trim().length === 0) {
  throw new Error("entry is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
