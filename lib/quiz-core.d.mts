import type { QuizOption } from "./quiz";
export function shuffledOptions(options: QuizOption[], seed: number): QuizOption[];
export function passes(correct: number, total: number): boolean;
