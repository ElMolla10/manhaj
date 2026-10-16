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

test("seerah path lists era titles only and no removed subjects", async () => {
  const response = await getPage("/seerah/prophetic-biography");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /العهد المكي/);
  const home = await (await getPage("/")).text();
  assert.doesNotMatch(home, /الفاتحة|الوضوء|al-fatihah|\/fiqh\//i);
});
