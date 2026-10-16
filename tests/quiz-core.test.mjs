import assert from "node:assert/strict";
import test from "node:test";
import { passes, shuffledOptions } from "../lib/quiz-core.mjs";

test("passing requires strictly more than half", () => {
  assert.equal(passes(5, 10), false);
  assert.equal(passes(6, 10), true);
  assert.equal(passes(4, 7), true);
  assert.equal(passes(0, 0), false);
});

test("shuffle is stable for an attempt and never mutates source", () => {
  const source = [{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }];
  const original = source.map(x => x.id);
  const first = shuffledOptions(source, 41).map(x => x.id);
  const rerender = shuffledOptions(source, 41).map(x => x.id);
  assert.deepEqual(first, rerender);
  assert.deepEqual(source.map(x => x.id), original);
  assert.notDeepEqual(shuffledOptions(source, 99).map(x => x.id), first);
});
