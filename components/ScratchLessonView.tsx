"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import { useState } from "react";
import { Lang, t } from "@/lib/content";
import { passages, scratchLessons } from "@/lib/abu-bakr";
import { gradingLabel, sourceTitles, type Citation, type ScratchLesson } from "@/lib/abu-bakr/types";

const flagLabel = { weak: ["رواية ضعيفة", "Weak report"], conflict: ["اختلاف بين المصادر", "Sources differ"], no_chain: ["بلا إسناد مذكور", "No stated chain"], gap: ["نقص في التوثيق", "Sourcing gap"] } as const;

export function DraftBanner({ lang }: { lang: Lang }) {
  return <div role="note" data-status="internal_unapproved" className="draft-banner" style={{ border: "2px solid #b45309", background: "#fffbeb", color: "#78350f", borderRadius: 12, padding: "12px 16px", margin: "12px 0" }}>
    <b>مسودة — بانتظار المراجعة العلمية</b> · <b>Draft, pending scholarly review</b>
    <div style={{ fontSize: 14, marginTop: 4 }}>{lang === "en" ? "Written from the cited sources but not yet reviewed by a scholar. Do not rely on or share it yet." : "كُتب من المصادر المذكورة ولم يراجعه عالم بعد. لا يُعتمد عليه ولا يُنشر حتى تكتمل المراجعة."}</div>
  </div>;
}

function CitationItem({ c, lang }: { c: Citation; lang: Lang }) {
  const p = passages[c.key];
  const en = lang === "en";
  return <div className="source-item" style={{ display: "block" }}>
    <div><span className="status-badge">{t(gradingLabel[c.grading], lang)}</span></div>
    <h3>{t(sourceTitles[p.source], lang)}{p.volume ? ` · ${en ? "vol." : "ج"} ${p.volume}` : ""} · {en ? "p." : "ص"} {p.page}</h3>
    <blockquote dir="rtl" lang="ar" style={{ whiteSpace: "pre-wrap", fontSize: 15, lineHeight: 1.9 }}>{c.excerpt ?? p.quote}</blockquote>
    {p.gradingNote && <small dir="rtl" lang="ar">{en ? "Grader's note: " : "قول المحقق: "}{p.gradingNote}</small>}
  </div>;
}

export default function ScratchLessonView({ lesson, lang, base }: { lesson: ScratchLesson; lang: Lang; base: string }) {
  const en = lang === "en";
  const [card, setCard] = useState(0);
  const [evidence, setEvidence] = useState(false);
  const c = lesson.cards[card];
  const go = (n: number) => { setCard(Math.max(0, Math.min(n, lesson.cards.length - 1))); setEvidence(false); };
  const idx = scratchLessons.findIndex(l => l.slug === lesson.slug);
  const next = scratchLessons[idx + 1];
  const progress = Math.round(((card + 1) / lesson.cards.length) * 100);
  return <main className="lesson-page">
    <div className="lesson-top"><div><a href={base}>{en ? "Back to path" : "العودة إلى المسار"}</a><span>/</span><b>{t(lesson.title, lang)}</b></div></div>
    <div className="lesson-progress"><span style={{ width: `${progress}%` }} /></div>
    <DraftBanner lang={lang} />
    <div className="lesson-grid">
      <aside className="lesson-context"><span className="eyebrow">{en ? `LESSON ${lesson.number}` : `الدرس ${lesson.number}`}</span><h1>{t(lesson.title, lang)}</h1><p>{en ? "Abu Bakr al-Siddiq" : "أبو بكر الصديق رضي الله عنه"}</p><div className="review-state"><span>◌</span><div><b>{en ? "Review status" : "حالة المراجعة"}</b><small>internal_unapproved — {en ? "pending scholarly review" : "بانتظار المراجعة العلمية"}</small></div></div></aside>
      <section className="lesson-stage">
        <article className={`learning-card ${c.kind}`}>
          <div className="card-meta"><span>{en ? `Card ${card + 1} of ${lesson.cards.length}` : `البطاقة ${card + 1} من ${lesson.cards.length}`}</span></div>
          <h2>{t(c.title, lang)}</h2>
          <p className="card-body">{t(c.body, lang)}</p>
          {c.flags?.map((f, i) => <div key={i} className="content-safety" data-flag={f.kind}><b>⚑ {flagLabel[f.kind][en ? 1 : 0]}</b><p>{t(f.text, lang)}</p></div>)}
          {c.citations.length > 0 && <button className="evidence-btn" onClick={() => setEvidence(v => !v)} aria-expanded={evidence}>⌕ {en ? `How do we know this? (${c.citations.length} source${c.citations.length > 1 ? "s" : ""})` : `كيف نعرف ذلك؟ (${c.citations.length})`}</button>}
          {evidence && <div className="evidence-panel">{c.citations.map((ci, i) => <CitationItem key={i} c={ci} lang={lang} />)}<small>{en ? "Arabic passages are quoted verbatim from the edition cited. English text on the card is a draft rendering, not a reviewed translation." : "النصوص العربية منقولة بحروفها من الطبعة المذكورة."}</small></div>}
        </article>
        <div className="lesson-controls"><button onClick={() => go(card - 1)} disabled={card === 0}>{en ? "Previous" : "السابق"}</button><div><span>{card + 1}/{lesson.cards.length}</span></div>{card < lesson.cards.length - 1 ? <button className="next" onClick={() => go(card + 1)}>{en ? "Next" : "التالي"}</button> : next ? <a className="next" href={`${base}/${next.slug}`}>{en ? "Next lesson" : "الدرس التالي"}</a> : <a className="next" href={base}>{en ? "Back to path" : "العودة إلى المسار"}</a>}</div>
      </section>
      <aside className="lesson-nav"><div className="lesson-nav-head"><b>{en ? "Lesson cards" : "بطاقات الدرس"}</b><span>{progress}%</span></div>{lesson.cards.map((b, i) => <button onClick={() => go(i)} className={i === card ? "current" : i < card ? "done" : ""} key={b.id}><span>{i + 1}</span><div><b>{t(b.title, lang)}</b></div></button>)}</aside>
    </div>
  </main>;
}
