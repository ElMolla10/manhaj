import type { BiText } from "@/lib/content";

/** Grading labels. Only used when the located source (or its printed editor/grader) says so. */
export type Grading =
  | "in_sahih_bukhari"        // hadith located in Sahih al-Bukhari
  | "editor_sahih"            // printed editor/grader says sahih
  | "editor_hasan"            // printed editor/grader says hasan
  | "editor_weak"             // printed editor/grader says weak
  | "editor_very_weak"        // printed editor/grader says very weak
  | "no_chain_stated"         // e.g. Ibn Ishaq "فيما بلغني" / "يُقال" — no chain given in the source
  | "source_cites_sahihayn"   // the source's author attributes it to al-Bukhari and Muslim (stated in the text)
  | "grading_unverified";     // no grading located

export const gradingLabel: Record<Grading, BiText> = {
  in_sahih_bukhari: { ar: "في صحيح البخاري", en: "In Sahih al-Bukhari" },
  editor_sahih: { ar: "صحّحه محقق الطبعة", en: "Graded sahih by the edition's editor" },
  editor_hasan: { ar: "حسّنه محقق الطبعة", en: "Graded hasan by the edition's editor" },
  editor_weak: { ar: "ضعّفه محقق الطبعة", en: "Graded weak by the edition's editor" },
  editor_very_weak: { ar: "ضعيف جدًا عند محقق الطبعة", en: "Graded very weak by the edition's editor" },
  no_chain_stated: { ar: "رواية بلا إسناد مذكور", en: "Reported without a stated chain" },
  source_cites_sahihayn: { ar: "عزاه المصنف إلى الصحيحين", en: "The author attributes it to al-Bukhari and Muslim" },
  grading_unverified: { ar: "لم يُتحقق من الدرجة", en: "Grading unverified" },
};

export type Citation = {
  key: string;           // key in passages.json (copied verbatim from the research repo's master citation index)
  excerpt?: string;      // optional verbatim substring of the passage to display
  grading: Grading;
};

export type Passage = {
  source: "bukhari" | "ibn_hisham" | "siyar" | "fadail" | "bidayah" | "raheeq" | "fusul" | "usd" | "zad";
  volume: string | null;
  page: string;
  quote: string;
  gradingNote: string | null;
  gradedBy: string | null;
};

export type Flag = { kind: "weak" | "conflict" | "no_chain" | "gap"; text: BiText };

export type Card = {
  id: string;
  kind: "hook" | "facts" | "context" | "map" | "reflection" | "summary" | "narrative" | "glossary" | "lesson";
  title: BiText;
  body: BiText;
  citations: Citation[];
  flags?: Flag[];
  /** glossary entries: every gloss is taken from what the cited passage itself says */
  glossary?: { term: BiText; gloss: BiText; key: string }[];
};

export type ScratchLesson = {
  number: number;
  slug: string;              // public route segment
  status: "internal_unapproved";
  title: BiText;
  cards: Card[];
  quiz?: QuizQ[];
};

export type QuizQ = { id: string; q: BiText; options: BiText[]; answer: number; explain: BiText; cardId: string };

export type LessonExtension = { after?: Record<string, Card[]>; append?: Card[]; quiz: QuizQ[] };

export const sourceTitles: Record<Passage["source"], BiText> = {
  bukhari: { ar: "صحيح البخاري", en: "Sahih al-Bukhari" },
  ibn_hisham: { ar: "السيرة النبوية لابن هشام", en: "Sirat Ibn Hisham" },
  siyar: { ar: "سير أعلام النبلاء للذهبي", en: "al-Dhahabi, Siyar A'lam al-Nubala" },
  fadail: { ar: "فضائل الصحابة للإمام أحمد", en: "Ahmad ibn Hanbal, Fada'il al-Sahabah" },
  bidayah: { ar: "البداية والنهاية لابن كثير", en: "Ibn Kathir, al-Bidayah wa al-Nihayah" },
  raheeq: { ar: "الرحيق المختوم للمباركفوري", en: "al-Mubarakpuri, al-Raheeq al-Makhtum" },
  fusul: { ar: "الفصول في سيرة الرسول لابن كثير", en: "Ibn Kathir, al-Fusul fi Sirat al-Rasul" },
  usd: { ar: "أسد الغابة لابن الأثير", en: "Ibn al-Athir, Usd al-Ghabah" },
  zad: { ar: "زاد المعاد لابن القيم", en: "Ibn al-Qayyim, Zad al-Ma'ad" },
};
