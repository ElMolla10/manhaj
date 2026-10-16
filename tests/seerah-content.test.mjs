import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync, readdirSync } from "node:fs";

const dir = new URL("../lib/seerah/", import.meta.url);
const passages = JSON.parse(readFileSync(new URL("passages.json", dir), "utf8"));
const files = readdirSync(dir).filter(f => /^lessons-.*\.ts$/.test(f));
const TITLES = new Set(["الرحيق المختوم", "السيرة النبوية الصحيحة", "زاد المعاد", "السيرة النبوية لابن هشام", "البداية والنهاية", "الفصول في سيرة الرسول"]);
const un = s => JSON.parse(`"${s}"`);
function check(key, grading, excerpt, f) {
  const p = passages[key];
  assert.ok(p, `missing passage ${key} in ${f}`);
  if (excerpt) assert.ok(p.quote.includes(un(excerpt)), `excerpt not verbatim in ${key} (${f})`);
  if (grading?.startsWith("editor_")) assert.ok(p.gradingNote, `${key} labelled ${grading} but no grader note`);
  if (grading?.startsWith("umari_")) assert.equal(p.source, "umari", `${key} labelled ${grading} but not from al-Umari`);
  if (grading === "in_sahih_bukhari") assert.equal(p.source, "bukhari", `${key} labelled bukhari`);
  if (grading === "source_cites_bukhari") assert.match(p.quote, /البخاري/, `${key} labelled source_cites_bukhari but the passage does not name al-Bukhari`);
}

test("seerah: every citation points at a located passage and every excerpt is verbatim", () => {
  let n = 0;
  for (const f of files) {
    const src = readFileSync(new URL(f, dir), "utf8");
    for (const m of src.matchAll(/\bci\("([^"]+)"(?:, "([a-z_]+)")?(?:, "((?:[^"\\]|\\.)*)")?\)/g)) { n++; check(m[1], m[2], m[3], f); }
    for (const m of src.matchAll(/\bg\((?:"(?:[^"\\]|\\.)*", ){4}"([^"]+)"\)/g)) { n++; check(m[1], undefined, undefined, f); }
  }
  assert.ok(n >= 30, `only ${n} citations found`);
});

test("seerah: static check of «quotes» in card bodies", () => {
  for (const f of files) {
    const src = readFileSync(new URL(f, dir), "utf8");
    // split into card(...) calls
    for (const chunk of src.split(/\n\s*card\(/).slice(1)) {
      const strs = [...chunk.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(m => un(m[1]));
      const id = strs[0];
      const arBody = strs[4] ?? "";
      const keys = [...chunk.matchAll(/\b(?:ci|g)\(([^)]*?)"([a-z0-9_]+)"(?:, "[a-z_]+")?(?:, "(?:[^"\\]|\\.)*")?\)/g)].map(m => m[2]).filter(k => passages[k]);
      const pool = keys.map(k => passages[k].quote).join("\n");
      for (const m of arBody.matchAll(/«([^»]+)»/g)) {
        if (m[1].length < 12 || TITLES.has(m[1])) continue;
        assert.ok(pool.includes(m[1]), `card ${id} (${f}) quotes «${m[1]}» which is not in its cited passages`);
      }
    }
  }
});

test("seerah: no lesson is marked approved or published", () => {
  for (const f of readdirSync(dir).filter(f => f.endsWith(".ts"))) {
    const src = readFileSync(new URL(f, dir), "utf8");
    assert.doesNotMatch(src, /status: "(approved|published|under_review)"/);
    for (const m of src.matchAll(/status: "([a-z_]+)"/g)) assert.equal(m[1], "internal_unapproved");
  }
});
