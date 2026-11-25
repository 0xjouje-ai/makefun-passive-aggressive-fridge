// Notes From a Passive-Aggressive Fridge — make.fun entry.
//
// The program writes one funny passive-aggressive note from a smart fridge
// to /output/entry.txt. The note is fixed: the fridge's grudge is specific,
// petty, and already decided. No randomness, no network, no clock — the same
// note on every run, byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";

const NOTE = "You left the door open for 47 seconds. The cheese saw everything.";

// The gate only accepts UTF-8 text of 1 to 200 characters, a single line,
// not only white space. Refuse to write anything that would fail it.
if (NOTE.length < 1 || NOTE.length > 200 || NOTE.includes("\n") || NOTE.trim().length === 0) {
  throw new Error(`Note fails the gate: ${NOTE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", NOTE, "utf8");
console.log(`Wrote ${NOTE.length} characters to /output/entry.txt`);
