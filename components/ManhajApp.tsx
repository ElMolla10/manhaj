"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import { useEffect, useState } from "react";
import { Lang, paths } from "@/lib/content";
import Icon from "@/components/Icon";
import LessonExperience from "@/components/LessonExperience";
import ScratchLessonView from "@/components/ScratchLessonView";
import { scratchBySlug } from "@/lib/abu-bakr";
import { seerahBySlug, seerahLessons, seerahPassages } from "@/lib/seerah";
import { ComingSoon, HomeView, LearnView, PathView, SearchView, SubjectView, UtilityView } from "@/components/Views";

export default function ManhajApp({ route = [] }: { route?: string[] }) {
  const [lang,setLang]=useState<Lang>("ar");
  const [theme,setTheme]=useState<"light"|"dark"|"system">("dark");
  const [themeLoaded,setThemeLoaded]=useState(false);
  useEffect(()=>{const l=localStorage.getItem("manhaj:lang");const th=localStorage.getItem("manhaj:theme");queueMicrotask(()=>{if(l==="ar"||l==="en")setLang(l);if(th==="light"||th==="dark"||th==="system")setTheme(th);setThemeLoaded(true);});},[]);
  useEffect(()=>{document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";localStorage.setItem("manhaj:lang",lang);},[lang]);
  useEffect(()=>{if(!themeLoaded)return;localStorage.setItem("manhaj:theme",theme);const isDark=theme==="dark"||(theme==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",isDark);document.documentElement.style.colorScheme=isDark?"dark":"light";},[theme,themeLoaded]);
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
  return <div className="site-shell">
    <header className="topbar"><nav className="nav" aria-label={en?"Main navigation":"التنقل الرئيسي"}>
      <a className="brand" href="/"><span className="brand-mark">م</span><span>{en?"Manhaj":"منهج"}</span></a>
      <div className="nav-links"><a className={first==="learn"?"active":""} href="/learn">{en?"Learn":"تعلّم"}</a><a className={first==="seerah"?"active":""} href="/seerah">{en?"Seerah":"السيرة"}</a><a className={first==="sahabah"?"active":""} href="/sahabah">{en?"Sahabah":"الصحابة"}</a><div className="more-menu"><button>{en?"More":"المزيد"}<Icon name="chevronDown" size={16}/></button><div><a href="/library">{en?"Sources":"المصادر"}</a></div></div></div>
      <div className="nav-actions"><a className="icon-btn" href="/search" aria-label={en?"Search":"بحث"} title={en?"Search":"بحث"}><Icon name="search"/></a><button className="icon-btn" onClick={changeTheme} aria-label={en?`Theme: ${theme}. Change theme`:`المظهر: ${theme==="light"?"فاتح":theme==="dark"?"داكن":"حسب النظام"}. تغيير المظهر`} title={en?"Change theme":"تغيير المظهر"}><Icon name={theme==="light"?"moon":theme==="dark"?"sun":"monitor"}/></button><button className="lang-btn" onClick={()=>setLang(v=>v==="ar"?"en":"ar")} aria-label={en?"التبديل إلى العربية":"Switch to English"} lang={en?"ar":"en"}><Icon name="languages" size={18}/><span>{en?"عربي":"EN"}</span></button><a className="continue-btn" href="/sahabah/abu-bakr/who-was-abu-bakr">{en?"Continue learning":"تابع التعلّم"}</a></div>
    </nav></header>
    {view}
    <nav className="bottom-nav" aria-label={en?"Mobile navigation":"تنقل الهاتف"}><a className={first==="home"?"active":""} href="/"><Icon name="home" size={22}/><span>{en?"Home":"الرئيسية"}</span></a><a className={first==="learn"?"active":""} href="/learn"><Icon name="book" size={22}/><span>{en?"Learn":"تعلّم"}</span></a><a className={first==="search"?"active":""} href="/search"><Icon name="search" size={22}/><span>{en?"Search":"بحث"}</span></a><a className={first==="progress"?"active":""} href="/progress"><Icon name="progress" size={22}/><span>{en?"Progress":"تقدّمي"}</span></a><a className={first==="settings"?"active":""} href="/settings"><Icon name="settings" size={22}/><span>{en?"Settings":"الإعدادات"}</span></a></nav>
  </div>;
}
