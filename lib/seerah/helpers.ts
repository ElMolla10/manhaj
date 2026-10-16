export { ci, card, g, fl, q } from "@/lib/abu-bakr/extensions-01-06";
import type { Card, QuizQ, ScratchLesson } from "@/lib/abu-bakr/types";
export const L = (number: number, slug: string, ar: string, en: string, cards: Card[], quiz: QuizQ[]): ScratchLesson => ({ number, slug, status: "internal_unapproved", title: { ar, en }, cards, quiz });
