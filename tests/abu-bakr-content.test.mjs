import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync, readdirSync } from "node:fs";

const dir = new URL("../lib/abu-bakr/", import.meta.url);
const passages = JSON.parse(readFileSync(new URL("passages.json", dir), "utf8"));
const files = readdirSync(dir).filter(f => /^(lessons|extensions)-.*\.ts$/.test(f));
const un = s => JSON.parse(`"${s}"`);
function check(key, grading, excerpt, f) {
  const p = passages[key];
  assert.ok(p, `missing passage ${key} in ${f}`);
  if (excerpt) assert.ok(p.quote.includes(un(excerpt)), `excerpt not verbatim in ${key} (${f})`);
  if (grading?.startsWith("editor_")) assert.ok(p.gradingNote, `${key} labelled ${grading} but no grader note`);
  if (grading === "in_sahih_bukhari") assert.equal(p.source, "bukhari", `${key} labelled bukhari`);
}

test("every citation points at a located passage and every excerpt is verbatim", () => {
  let n = 0;
  for (const f of files) {
    const src = readFileSync(new URL(f, dir), "utf8");
    for (const m of src.matchAll(/\{ key: "([^"]+)"(?:, excerpt: "((?:[^"\\]|\\.)*)")?, grading: "([a-z_]+)"/g)) { n++; check(m[1], m[3], m[2], f); }
    for (const m of src.matchAll(/\bci\("([^"]+)"(?:, (?:"([a-z_]+)"|B))?(?:, "((?:[^"\\]|\\.)*)")?\)/g)) { n++; check(m[1], m[0].includes(", B") ? "in_sahih_bukhari" : m[2], m[3], f); }
    for (const m of src.matchAll(/\bg\((?:"(?:[^"\\]|\\.)*", ){4}"([^"]+)"\)/g)) { n++; check(m[1], undefined, undefined, f); }
  }
  assert.ok(n > 150, `only ${n} citations found`);
});

test("no lesson is marked approved or published", () => {
  for (const f of files) {
    const src = readFileSync(new URL(f, dir), "utf8");
    assert.doesNotMatch(src, /status: "(approved|published|under_review)"/);
    for (const m of src.matchAll(/status: "([a-z_]+)"/g)) assert.equal(m[1], "internal_unapproved");
  }
});
