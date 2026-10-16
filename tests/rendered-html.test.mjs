import assert from "node:assert/strict";
import test from "node:test";

async function getPage(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders finished product metadata and Arabic-first shell", async () => {
  const response = await getPage("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Manhaj \| Learn Islam through a clear path<\/title>/i);
  assert.match(html, /تعلم|تعلّم/);
  assert.doesNotMatch(html, /Starter Project|codex-preview/);
});

test("renders a nested guided lesson route", async () => {
  const response = await getPage("/sahabah/abu-bakr/who-was-abu-bakr");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /من كان أبو بكر/);
  assert.doesNotMatch(html, /\/Users\/|\/root\/|\/workspace\//);
});

test("seerah lesson renders with draft banner", async () => {
  const response = await getPage("/seerah/prophetic-biography/arabia-before-islam");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /بانتظار المراجعة العلمية/);
  assert.match(html, /الأرض التي بُعث فيها النبي/);
});

test("seerah path lists era titles only and no removed subjects", async () => {
  const response = await getPage("/seerah/prophetic-biography");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /جزيرة العرب قبل الإسلام/);
  const home = await (await getPage("/")).text();
  assert.doesNotMatch(home, /الفاتحة|الوضوء|al-fatihah|\/fiqh\//i);
});

test("from-scratch Abu Bakr lessons render with the draft banner", async () => {
  for (const slug of ["who-was-abu-bakr", "lesson-2", "lesson-3", "lesson-4", "lesson-5", "lesson-6", "lesson-7", "lesson-8", "lesson-9", "lesson-10", "lesson-11", "lesson-12", "lesson-13", "lesson-14", "lesson-15", "lesson-16", "lesson-17"]) {
    const html = await (await getPage(`/sahabah/abu-bakr/${slug}`)).text();
    assert.match(html, /بانتظار المراجعة العلمية/);
    assert.match(html, /Draft, pending scholarly review/);
    assert.match(html, /internal_unapproved/);
  }
});

test("subject pages show real courses only — no planned-path placeholders", async () => {
  for (const path of ["/seerah", "/sahabah", "/"]) {
    const html = await (await getPage(path)).text();
    assert.doesNotMatch(html, /المسارات المخططة|Planned paths/);
    assert.doesNotMatch(html, /لا نملأ المسارات غير المكتملة|No unreviewed lesson text is used to fill unfinished paths/);
    assert.doesNotMatch(html, /planned-grid|planned-card/);
  }
  const seerah = await (await getPage("/seerah")).text();
  assert.match(seerah, /السيرة النبوية|The Prophetic Biography/);
  const sahabah = await (await getPage("/sahabah")).text();
  assert.match(sahabah, /أبو بكر|Abu Bakr/);
});
