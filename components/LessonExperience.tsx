"use client";

import Icon from "@/components/Icon";
import { useEffect, useMemo, useState } from "react";
import { Lang, Path, t } from "@/lib/content";
import { demoQuestions, passes, shuffledOptions } from "@/lib/quiz";

type QuizState = "idle" | "question" | "results";

export default function LessonExperience({ path, lang }: { path: Path; lang: Lang }) {
  const en=lang==="en";
  const [card,setCard]=useState(0);
  const [focus,setFocus]=useState(false);
  const [deeper,setDeeper]=useState(false);
  const [evidence,setEvidence]=useState(false);
  const [sources,setSources]=useState(false);
  const [saved,setSaved]=useState(false);
  const [noteOpen,setNoteOpen]=useState(false);
  const [note,setNote]=useState("");
  const [quizState,setQuizState]=useState<QuizState>("idle");
  const [questionIndex,setQuestionIndex]=useState(0);
  const [answers,setAnswers]=useState<Record<string,string>>({});
  const [checked,setChecked]=useState<Record<string,boolean>>({});
  const [seed,setSeed]=useState(71);
  const blocks=path.blocks;
  const current=blocks[card];
  const lessonTitle=path.lessons[0].title;

  useEffect(()=>{
    const raw=localStorage.getItem(`manhaj:${path.id}:progress`);
    const storedNote=localStorage.getItem(`manhaj:${path.id}:note`);
    const storedSaved=localStorage.getItem(`manhaj:${path.id}:saved`);
    queueMicrotask(()=>{if(raw){const n=Number(raw);if(Number.isFinite(n))setCard(Math.min(n,blocks.length-1));}if(storedNote)setNote(storedNote);setSaved(storedSaved==="true");});
  },[path.id,blocks.length]);
  useEffect(()=>{localStorage.setItem(`manhaj:${path.id}:progress`,String(card));},[card,path.id]);

  function go(next:number){setCard(Math.max(0,Math.min(next,blocks.length-1)));setDeeper(false);setEvidence(false);setQuizState("idle");window.scrollTo({top:0,behavior:"smooth"});}
  function startQuiz(){setSeed(Date.now()%99991);setAnswers({});setChecked({});setQuestionIndex(0);setQuizState("question");}
  function review(conceptId:string,deeperRequired?:boolean){const idx=blocks.findIndex(b=>b.id===conceptId);setCard(idx>=0?idx:0);setQuizState("idle");setDeeper(Boolean(deeperRequired));}
  const correct=demoQuestions.filter(q=>answers[q.id]&&q.correctIds.includes(answers[q.id])).length;
  const passed=passes(correct,demoQuestions.length);
  const progress=Math.round(((card+1)/blocks.length)*100);

  return <main className={focus?"lesson-page focus":"lesson-page"}>
    <div className="lesson-top"><div><a href={path.href}>{en?"Back to path":"العودة إلى المسار"}</a><span>/</span><b>{t(lessonTitle,lang)}</b></div><div><button onClick={()=>setSaved(v=>{const next=!v;localStorage.setItem(`manhaj:${path.id}:saved`,String(next));return next;})} className={saved?"saved":""}>{saved?"✓ ":"＋ "}{en?(saved?"Saved":"Save"):(saved?"محفوظ":"حفظ")}</button><button onClick={()=>setNoteOpen(v=>!v)}>✎ {en?"Note":"ملاحظة"}</button><button onClick={()=>setFocus(v=>!v)}>◫ {focus?(en?"Exit focus":"إنهاء التركيز"):(en?"Focus":"وضع التركيز")}</button></div></div>
    <div className="lesson-progress" aria-label={en?`${progress}% complete`:`اكتمل ${progress}%`}><span style={{width:`${progress}%`}}/></div>
    <div className="lesson-grid">
      <aside className="lesson-context"><span className="eyebrow">{en?"LESSON 1":"الدرس الأول"}</span><h1>{t(lessonTitle,lang)}</h1><p>{t(path.title,lang)}</p>{path.school&&<strong className="school-badge">{t(path.school,lang)}</strong>}<button className="source-trigger" onClick={()=>setSources(true)}>☷ <span>{en?"Sources for this lesson":"مصادر هذا الدرس"}</span></button><div className="review-state"><Icon name="clock" size={18}/><div><b>{en?"Review status":"حالة المراجعة"}</b><small>{en?"Teaching text withheld pending review":"النص التعليمي محجوب حتى اكتمال المراجعة"}</small></div></div></aside>
      <section className="lesson-stage">
        {quizState==="question"?<QuizPanel lang={lang} index={questionIndex} seed={seed} answers={answers} checked={checked} onAnswer={(q,a)=>setAnswers(v=>({...v,[q]:a}))} onCheck={q=>setChecked(v=>({...v,[q]:true}))} onNext={()=>questionIndex===demoQuestions.length-1?setQuizState("results"):setQuestionIndex(i=>i+1)}/>:quizState==="results"?<Results lang={lang} correct={correct} passed={passed} answers={answers} onRetry={startQuiz} onReturn={()=>setQuizState("idle")} onReview={review}/>:<article className={`learning-card ${current.kind}`}>
          <div className="card-meta"><span>{kindLabel(current.kind,lang)}</span><span>{en?`Card ${card+1} of ${blocks.length}`:`البطاقة ${card+1} من ${blocks.length}`}</span></div>
          <h2>{t(current.title,lang)}</h2>
          <p className="card-body">{t(current.body,lang)}</p>
          <div className="content-safety"><b><Icon name="info" size={15}/> {en?"Content status":"حالة المحتوى"}</b><p>{en?"Internal draft — not publication-approved. No unverified religious claim is shown on this prototype card.":"مسودة داخلية غير معتمدة للنشر. لا تعرض هذه البطاقة التجريبية أي معلومة دينية غير موثقة."}</p></div>
          {current.deeper&&<div className="deeper"><button aria-expanded={deeper} onClick={()=>setDeeper(v=>!v)}><span>＋</span><b>{en?"Go deeper":"تعمّق أكثر"}</b><em>{deeper?"−":"+"}</em></button>{deeper&&<div><p>{t(current.deeper,lang)}</p><span className="advanced-label">{en?"Optional advanced section":"قسم متقدم اختياري"}</span></div>}</div>}
          {current.evidence&&<button className="evidence-btn" onClick={()=>setEvidence(v=>!v)} aria-expanded={evidence}><Icon name="sources" size={17}/> {en?"How do we know this?":"كيف نعرف ذلك؟"}</button>}
          {evidence&&<div className="evidence-panel"><strong>{en?"Evidence placeholder":"مساحة الدليل"}</strong><p>{t(current.evidence!,lang)}</p><small>{en?"No claim is published until its source mapping and review are complete.":"لا تُنشر الفكرة حتى يكتمل ربطها بالمصدر ومراجعتها."}</small></div>}
          {current.id==="assessment"&&<button className="primary-btn quiz-start" onClick={startQuiz}>{en?"Start prototype quiz":"ابدأ الاختبار التجريبي"}</button>}
        </article>}
        {quizState==="idle"&&<div className="lesson-controls"><button onClick={()=>go(card-1)} disabled={card===0}>{en?"Previous":"السابق"}</button><div><span>{card+1}/{blocks.length}</span><i>{en?"Lesson progress":"تقدّم الدرس"}</i></div><button className="next" onClick={()=>go(card+1)} disabled={card===blocks.length-1}>{en?"Next":"التالي"}</button></div>}
      </section>
      <aside className="lesson-nav"><div className="lesson-nav-head"><b>{en?"Lesson cards":"بطاقات الدرس"}</b><span>{progress}%</span></div>{blocks.map((b,i)=><button onClick={()=>go(i)} className={i===card?"current":i<card?"done":""} key={b.id}><span>{i<card?"✓":i+1}</span><div><b>{t(b.title,lang)}</b><small>{i===card?(en?"Current":"الحالي"):i<card?(en?"Visited":"تمت زيارته"):(en?"Available":"متاح")}</small></div></button>)}</aside>
    </div>
    {noteOpen&&<div className="floating-note"><div><b>{en?"Private note":"ملاحظة خاصة"}</b><button onClick={()=>setNoteOpen(false)}>×</button></div><p>{en?"Your note is always visually separate from platform explanation.":"تبقى ملاحظتك مميّزة بوضوح عن شرح المنصة."}</p><textarea value={note} onChange={e=>setNote(e.target.value)} placeholder={en?"Write for yourself…":"اكتب لنفسك…"}/><button className="primary-btn" onClick={()=>{localStorage.setItem(`manhaj:${path.id}:note`,note);setNoteOpen(false)}}>{en?"Save note":"حفظ الملاحظة"}</button></div>}
    {sources&&<SourceDrawer lang={lang} close={()=>setSources(false)}/>}<div className={sources?"drawer-backdrop show":"drawer-backdrop"} onClick={()=>setSources(false)}/>
  </main>;
}

function kindLabel(kind:string,lang:Lang){const en=lang==="en";const labels:Record<string,[string,string]>={hook:["مدخل","HOOK"],facts:["حقائق سريعة","QUICK FACTS"],context:["شرح","EXPLANATION"],map:["خريطة الفكرة","IDEA MAP"],reflection:["تأمل","REFLECTION"],summary:["خلاصة","SUMMARY"]};return labels[kind]?.[en?1:0]??kind;}

function QuizPanel({lang,index,seed,answers,checked,onAnswer,onCheck,onNext}:{lang:Lang;index:number;seed:number;answers:Record<string,string>;checked:Record<string,boolean>;onAnswer:(q:string,a:string)=>void;onCheck:(q:string)=>void;onNext:()=>void}){
  const en=lang==="en";const q=demoQuestions[index];const options=useMemo(()=>shuffledOptions(q.options,seed+index*97),[q.options,seed,index]);const selected=answers[q.id];const locked=checked[q.id];const right=locked&&q.correctIds.includes(selected);
  return <article className="quiz-panel"><div className="quiz-count"><b>{en?`Question ${index+1} of ${demoQuestions.length}`:`السؤال ${index+1} من ${demoQuestions.length}`}</b><div>{demoQuestions.map((_,i)=><span className={i<=index?"active":""} key={i}/>)}</div></div><h2>{t(q.prompt,lang)}</h2><div className="quiz-options">{options.map(o=><button disabled={locked} onClick={()=>onAnswer(q.id,o.id)} className={`${selected===o.id?"selected":""} ${locked&&q.correctIds.includes(o.id)?"correct":""} ${locked&&selected===o.id&&!q.correctIds.includes(o.id)?"wrong":""}`} key={o.id}><i>{selected===o.id?"●":"○"}</i><span>{t(o.label,lang)}</span>{locked&&q.correctIds.includes(o.id)&&<b>✓</b>}{locked&&selected===o.id&&!q.correctIds.includes(o.id)&&<b>×</b>}</button>)}</div>{locked&&<div className={right?"feedback right":"feedback wrong"}><strong>{right?(en?"Correct answer":"إجابة صحيحة"):(en?"Not the best answer":"ليست الإجابة الأدق")}</strong><p>{t(q.explanation,lang)}</p></div>}<footer>{!locked?<button className="primary-btn" disabled={!selected} onClick={()=>onCheck(q.id)}>{en?"Check answer":"تحقق من الإجابة"}</button>:<button className="primary-btn" onClick={onNext}>{index===demoQuestions.length-1?(en?"View results":"عرض النتيجة"):(en?"Next question":"السؤال التالي")}</button>}</footer></article>;
}

function Results({lang,correct,passed,answers,onRetry,onReturn,onReview}:{lang:Lang;correct:number;passed:boolean;answers:Record<string,string>;onRetry:()=>void;onReturn:()=>void;onReview:(id:string,deeper?:boolean)=>void}){const en=lang==="en";const missed=demoQuestions.filter(q=>!q.correctIds.includes(answers[q.id]));return <article className="results-panel"><span className={passed?"result-ring pass":"result-ring"}>{correct}/{demoQuestions.length}</span><h2>{passed?(en?"Prototype check passed":"اجتزت الاختبار التجريبي"):(en?"A little review will help":"بعض المراجعة ستفيدك")}</h2><p>{en?`You understood ${correct} of ${demoQuestions.length} concepts. A score must be above 50% to pass.`:`فهمت ${correct} من ${demoQuestions.length} مفاهيم. يلزم أكثر من ٥٠٪ للاجتياز.`}</p><div className="review-links"><b>{en?"Concepts to revisit":"مفاهيم تستحق المراجعة"}</b>{missed.length?missed.map(q=><button onClick={()=>onReview(q.conceptId,q.deeper)} key={q.id}>{en?"Review this idea":"راجع هذه الفكرة"} <span aria-hidden="true">{en?"→":"←"}</span></button>):<span>{en?"No missed concepts in this attempt.":"لا توجد مفاهيم فائتة في هذه المحاولة."}</span>}</div><footer><button className="secondary-btn" onClick={onReturn}>{en?"Return to lesson":"العودة إلى الدرس"}</button><button className="primary-btn" onClick={onRetry}>{en?"Retry with new order":"إعادة بترتيب جديد"}</button></footer></article>}

function SourceDrawer({lang,close}:{lang:Lang;close:()=>void}){const en=lang==="en";return <aside className="source-drawer" role="dialog" aria-modal="true" aria-label={en?"Lesson sources":"مصادر الدرس"}><header><div><span className="eyebrow">{en?"TRACEABLE LEARNING":"تعلم قابل للتوثيق"}</span><h2>{en?"Sources for this lesson":"مصادر هذا الدرس"}</h2></div><button onClick={close} aria-label={en?"Close":"إغلاق"}>×</button></header><p>{en?"This drawer will show learner-friendly source cards once the lesson’s claims complete scholarly review.":"يعرض هذا الدرج بطاقات مصادر واضحة بعد اكتمال مراجعة أفكار الدرس علميًا."}</p><div className="source-item"><div><span className="status-badge">{en?"Primary source":"المصدر الأصلي"}</span><h3>{en?"Primary biographical sources":"مصادر السيرة والتراجم الأصلية"}</h3><p>{en?"Work, volume and printed-page references will appear here after review.":"ستظهر هنا إحالات الكتاب والجزء والصفحة المطبوعة بعد المراجعة."}</p></div><button>＋</button></div><div className="source-item muted"><div><span className="status-badge">{en?"Pending review":"بانتظار المراجعة"}</span><h3>{en?"Supporting references":"مراجع مساندة"}</h3><p>{en?"Work, author, role, edition and grouped page references will be attached after inspection.":"يُضاف الكتاب والمؤلف ودور المصدر والطبعة والصفحات المجمعة بعد الفحص."}</p></div><button>＋</button></div><div className="source-note"><Icon name="info" size={16}/> <span>{en?"No empty authors, raw filesystem paths or internal reviewer notes are exposed here.":"لا تظهر هنا خانات مؤلف فارغة، ولا مسارات ملفات، ولا ملاحظات مراجعين داخلية."}</span></div></aside>}
