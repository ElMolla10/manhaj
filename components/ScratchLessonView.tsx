"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import { useState } from "react";
import { Lang, t } from "@/lib/content";
import { passages as abuBakrPassages, scratchLessons as abuBakrLessons } from "@/lib/abu-bakr";
import type { Passage } from "@/lib/abu-bakr/types";

type Ctx = { passages: Record<string, Passage> };
import { gradingLabel, sourceTitles, type Citation, type QuizQ, type ScratchLesson } from "@/lib/abu-bakr/types";

const kindLabel: Record<string, [string, string]> = { hook: ["مدخل", "Introduction"], facts: ["حقائق", "Facts"], context: ["شرح", "Explanation"], map: ["خريطة", "Map"], reflection: ["للمراجعة", "For review"], summary: ["خلاصة", "Summary"], narrative: ["القصة", "Narrative"], glossary: ["مسرد", "Glossary"], lesson: ["تأمل — ليس رواية", "Reflection — not a source claim"] };

const flagLabel = { weak: ["رواية ضعيفة", "Weak report"], conflict: ["اختلاف بين المصادر", "Sources differ"], no_chain: ["بلا إسناد مذكور", "No stated chain"], gap: ["نقص في التوثيق", "Sourcing gap"] } as const;

export function DraftBanner({ lang }: { lang: Lang }) {
  return <div role="note" data-status="internal_unapproved" className="draft-banner" style={{ border: "2px solid #b45309", background: "#fffbeb", color: "#78350f", borderRadius: 12, padding: "12px 16px", margin: "12px 0" }}>
    <b>مسودة — بانتظار المراجعة العلمية</b> · <b>Draft, pending scholarly review</b>
    <div style={{ fontSize: 14, marginTop: 4 }}>{lang === "en" ? "Written from the cited sources but not yet reviewed by a scholar. Do not rely on or share it yet." : "كُتب من المصادر المذكورة ولم يراجعه عالم بعد. لا يُعتمد عليه ولا يُنشر حتى تكتمل المراجعة."}</div>
  </div>;
}

function CitationItem({ c, lang, passages }: { c: Citation; lang: Lang } & Ctx) {
  const p = passages[c.key];
  const en = lang === "en";
  return <div className="source-item" style={{ display: "block" }}>
    <div><span className="status-badge">{t(gradingLabel[c.grading], lang)}</span></div>
    <h3>{t(sourceTitles[p.source], lang)}{p.volume ? ` · ${en ? "vol." : "ج"} ${p.volume}` : ""} · {en ? "p." : "ص"} {p.page}</h3>
    <blockquote dir="rtl" lang="ar" style={{ whiteSpace: "pre-wrap", fontSize: 15, lineHeight: 1.9 }}>{c.excerpt && p.quote.includes(c.excerpt) ? <>{p.quote.slice(0, p.quote.indexOf(c.excerpt))}<mark>{c.excerpt}</mark>{p.quote.slice(p.quote.indexOf(c.excerpt) + c.excerpt.length)}</> : p.quote}</blockquote>
    {p.gradingNote && <small dir="rtl" lang="ar">{en ? "Grader's note: " : "قول المحقق: "}{p.gradingNote}</small>}
  </div>;
}

export default function ScratchLessonView({ lesson, lang, base, passages = abuBakrPassages, lessons = abuBakrLessons, subject = { ar: "أبو بكر الصديق رضي الله عنه", en: "Abu Bakr al-Siddiq" } }: { lesson: ScratchLesson; lang: Lang; base: string; passages?: Record<string, Passage>; lessons?: ScratchLesson[]; subject?: { ar: string; en: string } }) {
  const en = lang === "en";
  const [card, setCard] = useState(0);
  const [evidence, setEvidence] = useState(false);
  const c = lesson.cards[card];
  const go = (n: number) => { setCard(Math.max(0, Math.min(n, lesson.cards.length - 1))); setEvidence(false); };
  const idx = lessons.findIndex(l => l.slug === lesson.slug);
  const next = lessons[idx + 1];
  const [quiz, setQuiz] = useState(false);
  const progress = Math.round(((card + 1) / lesson.cards.length) * 100);
  return <main className="lesson-page">
    <div className="lesson-top"><div><a href={base}>{en ? "Back to path" : "العودة إلى المسار"}</a><span>/</span><b>{t(lesson.title, lang)}</b></div></div>
    <div className="lesson-progress"><span style={{ width: `${progress}%` }} /></div>
    <DraftBanner lang={lang} />
    <div className="lesson-grid">
      <aside className="lesson-context"><span className="eyebrow">{en ? `LESSON ${lesson.number}` : `الدرس ${lesson.number}`}</span><h1>{t(lesson.title, lang)}</h1><p>{en ? subject.en : subject.ar}</p><div className="review-state"><span>◌</span><div><b>{en ? "Review status" : "حالة المراجعة"}</b><small>internal_unapproved — {en ? "pending scholarly review" : "بانتظار المراجعة العلمية"}</small></div></div></aside>
      <section className="lesson-stage">
        {quiz && lesson.quiz ? <Quiz qs={lesson.quiz} lang={lang} onClose={() => setQuiz(false)} onReview={id => { setQuiz(false); go(lesson.cards.findIndex(x => x.id === id)); }} /> : <>
        <article className={`learning-card ${c.kind}`}>
          <div className="card-meta"><span>{kindLabel[c.kind]?.[en ? 1 : 0]}</span><span>{en ? `Card ${card + 1} of ${lesson.cards.length}` : `البطاقة ${card + 1} من ${lesson.cards.length}`}</span></div>
          <h2>{t(c.title, lang)}</h2>
          <p className="card-body">{t(c.body, lang)}</p>
          {c.glossary && <dl className="glossary">{c.glossary.map((gl, i) => <div key={i} style={{ margin: "10px 0" }}><dt><b>{t(gl.term, lang)}</b></dt><dd style={{ margin: 0 }}>{t(gl.gloss, lang)} <small>— {t(sourceTitles[passages[gl.key].source], lang)}, {en ? "p." : "ص"} {passages[gl.key].page}</small></dd></div>)}</dl>}
          {c.flags?.map((f, i) => <div key={i} className="content-safety" data-flag={f.kind}><b>⚑ {flagLabel[f.kind][en ? 1 : 0]}</b><p>{t(f.text, lang)}</p></div>)}
          {c.kind === "glossary" && <button className="evidence-btn" onClick={() => setEvidence(v => !v)} aria-expanded={evidence}>⌕ {en ? "Show the passages" : "اعرض النصوص"}</button>}
          {c.kind === "glossary" && evidence && <div className="evidence-panel">{c.glossary!.map((gl, i) => <CitationItem key={i} c={{ key: gl.key, grading: "grading_unverified" }} lang={lang} passages={passages} />)}</div>}
          {c.citations.length > 0 && c.kind !== "glossary" && <button className="evidence-btn" onClick={() => setEvidence(v => !v)} aria-expanded={evidence}>⌕ {en ? `How do we know this? (${c.citations.length} source${c.citations.length > 1 ? "s" : ""})` : `كيف نعرف ذلك؟ (${c.citations.length})`}</button>}
          {evidence && <div className="evidence-panel">{c.citations.map((ci, i) => <CitationItem key={i} c={ci} lang={lang} passages={passages} />)}<small>{en ? "Arabic passages are quoted verbatim from the edition cited. English text on the card is a draft rendering, not a reviewed translation." : "النصوص العربية منقولة بحروفها من الطبعة المذكورة."}</small></div>}
        </article>
        <div className="lesson-controls sl-controls">
          <button className="sl-btn sl-prev" onClick={() => go(card - 1)} disabled={card === 0}><span aria-hidden="true">{en ? "←" : "→"}</span>{en ? "Previous" : "السابق"}</button>
          <div className="sl-counter" aria-label={en ? `Card ${card + 1} of ${lesson.cards.length}` : `البطاقة ${card + 1} من ${lesson.cards.length}`}><b>{card + 1}/{lesson.cards.length}</b><i>{en ? "Lesson progress" : "تقدّم الدرس"}</i></div>
          {card < lesson.cards.length - 1
            ? <button className="sl-btn sl-next" onClick={() => go(card + 1)}>{en ? "Next" : "التالي"}<span aria-hidden="true">{en ? "→" : "←"}</span></button>
            : next
              ? <a className="sl-btn sl-next sl-main" href={`${base}/${next.slug}`}>{en ? "Next lesson" : "الدرس التالي"}<span aria-hidden="true">{en ? "→" : "←"}</span></a>
              : <button className="sl-btn sl-next sl-main" disabled title={en ? "This is the last lesson" : "هذا آخر درس"}>{en ? "Next lesson" : "الدرس التالي"}<span aria-hidden="true">{en ? "→" : "←"}</span></button>}
        </div>
        {lesson.quiz && <button className="primary-btn quiz-start" onClick={() => setQuiz(true)}>{en ? `Check your understanding (${lesson.quiz.length} questions)` : `اختبر فهمك (${lesson.quiz.length} أسئلة)`}</button>}
        </>}
      </section>
      <aside className="lesson-nav"><div className="lesson-nav-head"><b>{en ? "Lesson cards" : "بطاقات الدرس"}</b><span>{progress}%</span></div>{lesson.cards.map((b, i) => <button onClick={() => go(i)} className={i === card ? "current" : i < card ? "done" : ""} key={b.id}><span>{i + 1}</span><div><b>{t(b.title, lang)}</b></div></button>)}</aside>
    </div>
  </main>;
}

function Quiz({ qs, lang, onClose, onReview }: { qs: QuizQ[]; lang: Lang; onClose: () => void; onReview: (cardId: string) => void }) {
  const en = lang === "en";
  const [ans, setAns] = useState<Record<string, number>>({});
  const done = Object.keys(ans).length === qs.length;
  const score = qs.filter(q => ans[q.id] === q.answer).length;
  return <article className="quiz-panel">
    <h2>{en ? "Check your understanding" : "اختبر فهمك"}</h2>
    <small>{en ? "Questions come only from this lesson's cards." : "الأسئلة مأخوذة من بطاقات هذا الدرس فقط."}</small>
    {qs.map((q, n) => <div key={q.id} style={{ margin: "18px 0" }}>
      <b>{n + 1}. {t(q.q, lang)}</b>
      <div className="quiz-options">{q.options.map((o, i) => { const picked = ans[q.id] === i; const locked = q.id in ans; return <button key={i} disabled={locked} onClick={() => setAns(v => ({ ...v, [q.id]: i }))} className={`${picked ? "selected" : ""} ${locked && i === q.answer ? "correct" : ""} ${locked && picked && i !== q.answer ? "wrong" : ""}`}><span>{t(o, lang)}</span>{locked && i === q.answer && <b>✓</b>}</button>; })}</div>
      {q.id in ans && <div className={ans[q.id] === q.answer ? "feedback right" : "feedback wrong"}><p>{t(q.explain, lang)}</p><button onClick={() => onReview(q.cardId)}>{en ? "Review this card" : "راجع هذه البطاقة"}</button></div>}
    </div>)}
    {done && <p><b>{score}/{qs.length}</b></p>}
    <footer><button className="secondary-btn" onClick={onClose}>{en ? "Back to lesson" : "العودة إلى الدرس"}</button></footer>
  </article>;
}
