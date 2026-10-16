import passagesJson from "./passages.json";
import type { Passage, ScratchLesson } from "@/lib/abu-bakr/types";
import { s01, s02, s03 } from "./lessons-01-03";
import { s04, s05, s06 } from "./lessons-04-06";
import { s07, s08, s09, s10 } from "./lessons-07-10";

export const seerahPassages = passagesJson as unknown as Record<string, Passage>;
export const seerahLessons: ScratchLesson[] = [s01, s02, s03, s04, s05, s06, s07, s08, s09, s10];
export const seerahBySlug: Record<string, ScratchLesson> = Object.fromEntries(seerahLessons.map(l => [l.slug, l]));
for (const l of seerahLessons) {
  if (l.status !== "internal_unapproved") throw new Error(`Unexpected status for ${l.slug}`);
  const ids = new Set(l.cards.map(c => c.id));
  if (ids.size !== l.cards.length) throw new Error(`Duplicate card id in ${l.slug}`);
  for (const q of l.quiz ?? []) if (!ids.has(q.cardId)) throw new Error(`Quiz ${l.slug}/${q.id} points at missing card ${q.cardId}`);
  for (const c of l.cards) for (const ci of c.citations) if (!seerahPassages[ci.key]) throw new Error(`Missing passage ${ci.key}`);
}
