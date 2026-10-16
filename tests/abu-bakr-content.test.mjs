import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync, readdirSync } from "node:fs";

const dir = new URL("../lib/abu-bakr/", import.meta.url);
const passages = JSON.parse(readFileSync(new URL("passages.json", dir), "utf8"));
const files = readdirSync(dir).filter(f => /^lessons-.*\.ts$/.test(f));

test("every citation points at a located passage and every excerpt is verbatim", () => {
  let n = 0;
  for (const f of files) {
    const src = readFileSync(new URL(f, dir), "utf8");
    for (const m of src.matchAll(/\{ key: "([^"]+)"(?:, excerpt: "((?:[^"\\]|\\.)*)")?, grading: "([a-z_]+)"/g)) {
      n++;
      const p = passages[m[1]];
      assert.ok(p, `missing passage ${m[1]} in ${f}`);
      if (m[2]) assert.ok(p.quote.includes(JSON.parse(`"${m[2]}"`)), `excerpt not verbatim in ${m[1]} (${f})`);
      if (m[3].startsWith("editor_")) assert.ok(p.gradingNote, `${m[1]} labelled ${m[3]} but no grader note`);
      if (m[3] === "in_sahih_bukhari") assert.equal(p.source, "bukhari", `${m[1]} labelled bukhari`);
    }
  }
  assert.ok(n > 10);
});

test("no lesson is marked approved or published", () => {
  for (const f of files) {
    const src = readFileSync(new URL(f, dir), "utf8");
    assert.doesNotMatch(src, /status: "(approved|published|under_review)"/);
    for (const m of src.matchAll(/status: "([a-z_]+)"/g)) assert.equal(m[1], "internal_unapproved");
  }
});
