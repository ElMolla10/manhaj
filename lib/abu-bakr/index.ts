import passagesJson from "./passages.json";
import type { Card, Citation, LessonExtension, Passage, ScratchLesson } from "./types";
import { lesson01, lesson02, lesson03 } from "./lessons-01-03";
import { lesson04, lesson05, lesson06 } from "./lessons-04-06";
import { lesson07, lesson08, lesson09 } from "./lessons-07-09";
import { lesson10, lesson11, lesson12 } from "./lessons-10-12";
import { ext01, ext02, ext03, ext04, ext05, ext06, extraCitations } from "./extensions-01-06";
import { ext07, ext08, ext09, ext10, ext11, ext12, extraCitations2 } from "./extensions-07-12";
import { v3 } from "./extensions-v3";

export const passages = passagesJson as unknown as Record<string, Passage>;

function expand(l: ScratchLesson, ext: LessonExtension, extra: Record<string, Citation[]> = {}): ScratchLesson {
  const cards: Card[] = [];
  const more = v3[l.number];
  for (const c of l.cards) {
    cards.push(extra[c.id] ? { ...c, citations: [...c.citations, ...extra[c.id]] } : c);
    for (const a of more?.after[c.id] ?? []) cards.push(a);
    for (const a of ext.after?.[c.id] ?? []) cards.push(a);
  }
  for (const id of Object.keys(more?.after ?? {})) if (!l.cards.some(c => c.id === id)) throw new Error(`v3 anchor ${l.slug}/${id} missing`);
  // keep the closing summary card last if the lesson ends with one
  const last = cards[cards.length - 1];
  const tail = last.kind === "summary" && l.cards[l.cards.length - 1].id === last.id ? [cards.pop()!] : [];
  return { ...l, cards: [...cards, ...(ext.append ?? []), ...tail], quiz: [...ext.quiz, ...(more?.quiz ?? [])] };
}
const extras = { ...extraCitations } as Record<number, Record<string, Citation[]>>;
for (const [n, v] of Object.entries(extraCitations2)) extras[+n] = { ...(extras[+n] ?? {}), ...v };
const pairs: [ScratchLesson, LessonExtension][] = [[lesson01, ext01], [lesson02, ext02], [lesson03, ext03], [lesson04, ext04], [lesson05, ext05], [lesson06, ext06], [lesson07, ext07], [lesson08, ext08], [lesson09, ext09], [lesson10, ext10], [lesson11, ext11], [lesson12, ext12]];
export const scratchLessons: ScratchLesson[] = pairs.map(([l, e]) => expand(l, e, extras[l.number]));
export const scratchBySlug: Record<string, ScratchLesson> = Object.fromEntries(scratchLessons.map(l => [l.slug, l]));
for (const l of scratchLessons) {
  if (l.status !== "internal_unapproved") throw new Error(`Unexpected status for ${l.slug}`);
  const ids = new Set(l.cards.map(c => c.id));
  if (ids.size !== l.cards.length) throw new Error(`Duplicate card id in ${l.slug}`);
  for (const q of l.quiz ?? []) if (!ids.has(q.cardId)) throw new Error(`Quiz ${l.slug}/${q.id} points at missing card ${q.cardId}`);
}
