import type { Lang } from "@/lib/content";
const ar = new Intl.NumberFormat("ar-EG", { useGrouping: false });
/** Locale-consistent numerals: Arabic-Indic digits in Arabic, Western digits in English. */
export function num(n: number | string, lang: Lang, pad = 0): string {
  const s = typeof n === "number" ? String(n).padStart(pad, "0") : n;
  return lang === "ar" ? s.replace(/[0-9]/g, d => ar.format(Number(d))) : s;
}
