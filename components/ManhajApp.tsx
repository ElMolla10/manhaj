"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import { useEffect, useState } from "react";
import { Lang, paths } from "@/lib/content";
import LessonExperience from "@/components/LessonExperience";
import ScratchLessonView from "@/components/ScratchLessonView";
import { scratchBySlug } from "@/lib/abu-bakr";
import { seerahBySlug, seerahLessons, seerahPassages } from "@/lib/seerah";
import { ComingSoon, HomeView, LearnView, PathView, SearchView, SubjectView, UtilityView } from "@/components/Views";

export default function ManhajApp({ route = [] }: { route?: string[] }) {
  const [lang,setLang]=useState<Lang>("ar");
  const [theme,setTheme]=useState<"light"|"dark"|"system">("light");
  useEffect(()=>{const l=localStorage.getItem("manhaj:lang");const th=localStorage.getItem("manhaj:theme");queueMicrotask(()=>{if(l==="ar"||l==="en")setLang(l);if(th==="light"||th==="dark"||th==="system")setTheme(th);});},[]);
  useEffect(()=>{document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";localStorage.setItem("manhaj:lang",lang);},[lang]);
  useEffect(()=>{localStorage.setItem("manhaj:theme",theme);},[theme]);
  const dark=theme==="dark"||(theme==="system"&&typeof window!=="undefined"&&window.matchMedia("(prefers-color-scheme: dark)").matches);
  const first=route[0]??"home";
  const isLesson=route.length>=3;
  let view:React.ReactNode;
  if(first==="home") view=<HomeView lang={lang}/>;
  else if(first==="learn") view=<LearnView lang={lang}/>;
  else if(isLesson&&first==="sahabah"&&scratchBySlug[route[2]]) view=<ScratchLessonView lesson={scratchBySlug[route[2]]} lang={lang} base={paths.abuBakr.href}/>;
  else if(isLesson&&first==="sahabah") view=<LessonExperience path={paths.abuBakr} lang={lang}/>;
  else if(route.length===2&&first==="sahabah") view=<PathView path={paths.abuBakr} lang={lang}/>;
  else if(isLesson&&first==="seerah"&&seerahBySlug[route[2]]) view=<ScratchLessonView lesson={seerahBySlug[route[2]]} lang={lang} base={paths.seerah.href} passages={seerahPassages} lessons={seerahLessons} subject={{ar:"السيرة النبوية",en:"The Prophetic Biography"}}/>;
  else if(isLesson&&first==="seerah") view=<ComingSoon id="seerah" lang={lang}/>;
  else if(route.length===2&&first==="seerah") view=<PathView path={paths.seerah} lang={lang}/>;
  else if(["seerah","sahabah"].includes(first)) view=<SubjectView id={first} lang={lang}/>;
  else if(first==="search") view=<SearchView lang={lang}/>;
  else if(["progress","bookmarks","notes","review","library","settings"].includes(first)) view=<UtilityView id={first} lang={lang}/>;
  else view=<ComingSoon id={first} lang={lang}/>;

  const changeTheme=()=>setTheme(v=>v==="light"?"dark":v==="dark"?"system":"light");
  const en=lang==="en";
  return <div className={dark?"site-shell dark-mode":"site-shell"}>
    <header className="topbar"><nav className="nav" aria-label={en?"Main navigation":"التنقل الرئيسي"}>
      <a className="brand" href="/"><span className="brand-mark">م</span><span>{en?"Manhaj":"منهج"}</span></a>
      <div className="nav-links"><a className={first==="learn"?"active":""} href="/learn">{en?"Learn":"تعلّم"}</a><a className={first==="seerah"?"active":""} href="/seerah">{en?"Seerah":"السيرة"}</a><a className={first==="sahabah"?"active":""} href="/sahabah">{en?"Sahabah":"الصحابة"}</a><div className="more-menu"><button>{en?"More":"المزيد"}⌄</button><div><a href="/library">{en?"Sources":"المصادر"}</a></div></div></div>
      <div className="nav-actions"><a className="icon-btn" href="/search" aria-label={en?"Search":"بحث"}>⌕</a><button className="icon-btn" onClick={changeTheme} aria-label={en?"Change theme":"تغيير المظهر"}>{theme==="light"?"◐":theme==="dark"?"☀":"A"}</button><button className="lang-btn" onClick={()=>setLang(v=>v==="ar"?"en":"ar")}>{en?"ع":"EN"}</button><a className="continue-btn" href="/sahabah/abu-bakr/who-was-abu-bakr">{en?"Continue learning":"تابع التعلّم"}</a></div>
    </nav></header>
    {view}
    <nav className="bottom-nav" aria-label={en?"Mobile navigation":"تنقل الهاتف"}><a className={first==="home"?"active":""} href="/"><b>⌂</b><span>{en?"Home":"الرئيسية"}</span></a><a className={first==="learn"?"active":""} href="/learn"><b>▤</b><span>{en?"Learn":"تعلّم"}</span></a><a className={first==="search"?"active":""} href="/search"><b>⌕</b><span>{en?"Search":"بحث"}</span></a><a className={first==="progress"?"active":""} href="/progress"><b>◴</b><span>{en?"Progress":"تقدّمي"}</span></a><a className={first==="settings"?"active":""} href="/settings"><b>⚙</b><span>{en?"Settings":"الإعدادات"}</span></a></nav>
  </div>;
}
