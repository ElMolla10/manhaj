import passagesJson from "./passages.json";
import type { Passage, ScratchLesson } from "./types";
import { lesson01, lesson02, lesson03 } from "./lessons-01-03";
import { lesson04, lesson05, lesson06 } from "./lessons-04-06";

export const passages = passagesJson as Record<string, Passage>;
export const scratchLessons: ScratchLesson[] = [lesson01, lesson02, lesson03, lesson04, lesson05, lesson06];
export const scratchBySlug: Record<string, ScratchLesson> = Object.fromEntries(scratchLessons.map(l => [l.slug, l]));
for (const l of scratchLessons) if (l.status !== "internal_unapproved") throw new Error(`Unexpected status for ${l.slug}`);
