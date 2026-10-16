export type Lang = "ar" | "en";
export type BiText = { ar: string; en: string };
export type ContentStatus = "internal_unapproved" | "under_review" | "approved" | "published";
export type Certainty = "established_quran" | "established_sahih_hadith" | "strong_early_report" | "accepted_biographical_summary" | "strong_scholarly_consensus" | "majority_or_preferred_view" | "recognised_disagreement" | "contextual_synthesis" | "excluded_unverified";
export type Claim = { id:string; formulation:BiText; claimType:string; certainty:Certainty; sourceIds:string[]; lessonId:string; blockId:string; sourceRole:"quotation"|"paraphrase"|"synthesis"; disagreementNote?:BiText; reviewerStatus:ContentStatus; publicationStatus:ContentStatus };
export type Source = { id:string; title:BiText; author?:BiText; role:BiText; reason:BiText; edition?:string; references:SourceReference[] };
export type SourceReference = { id:string; sourceId:string; volume?:string; printedPages?:number[]; pdfPages?:number[]; hadithNumber?:string; surah?:number; ayahFrom?:number; ayahTo?:number; inspectedArabicPassage?:string };
export type Person = { id:string; name:BiText; aliases:BiText[]; lifespan?:BiText; role:BiText; shortBio?:BiText; relationshipIds:string[]; eventIds:string[]; lessonIds:string[] };
export type Event = { id:string; title:BiText; approximateDate?:BiText; hijriDate?:BiText; locationId?:string; personIds:string[]; description?:BiText; claimIds:string[]; certainty?:Certainty };
export type Place = { id:string; name:BiText; historicalSignificance?:BiText; modernIdentification?:BiText; eventIds:string[]; claimIds:string[] };
export type Relationship = { id:string; personA:string; personB:string; relationshipType:BiText; chronology?:BiText; eventIds:string[]; claimIds:string[] };
export type LearnerProgress = { pathId:string; lessonId:string; currentCard:number; visitedCardIds:string[]; completedLessonIds:string[]; bestQuizScore:number; updatedAt:string };
export type Bookmark = { id:string; entityType:"lesson"|"card"|"ayah"|"hadith"|"person"|"concept"|"source"; entityId:string; createdAt:string };
export type UserNote = { id:string; entityType:Bookmark["entityType"]; entityId:string; text:string; createdAt:string; updatedAt:string };
export type LessonBlock = {
  id: string;
  kind: "hook" | "facts" | "context" | "map" | "reflection" | "summary";
  title: BiText;
  body: BiText;
  deeper?: BiText;
  evidence?: BiText;
};
export type Path = {
  id: string;
  subject: string;
  title: BiText;
  subtitle: BiText;
  school?: BiText;
  accent: string;
  href: string;
  lessons: { id: string; title: BiText; status: "available" | "development" }[];
  blocks: LessonBlock[];
};

export const subjects = [
  { id: "seerah", mark: "س", title: { ar: "السيرة", en: "Seerah" }, note: { ar: "قيد الإعداد", en: "In development" } },
  { id: "sahabah", mark: "ص", title: { ar: "الصحابة", en: "Sahabah" }, note: { ar: "سير وتراجم", en: "Biographies" } },
] as const;

const pending = {
  ar: "النص التعليمي لهذه البطاقة ينتظر التوثيق والمراجعة العلمية قبل نشره. يمكنك الآن استكشاف شكل الدرس وطريقة التعلّم دون عرض مادة غير معتمدة.",
  en: "This card’s teaching text is awaiting evidence checks and scholarly review before publication. You can explore the lesson flow without being shown unapproved material.",
};

export const paths: Record<string, Path> = {
  abuBakr: {
    id:"abu-bakr", subject:"sahabah", accent:"sahabah", href:"/sahabah/abu-bakr", title:{ar:"أبو بكر الصديق رضي الله عنه",en:"Abu Bakr al-Siddiq"}, subtitle:{ar:"سيرة منظّمة عبر ١٢ درسًا",en:"A structured biography across 12 lessons"},
    lessons:["من كان أبو بكر الصديق؟","الأيام الأولى للإسلام","الثبات وقت الابتلاء","صاحب الغار","في المدينة","مرض النبي ﷺ الأخير","يوم وفاة النبي ﷺ","الخليفة الأول","حروب الردة","جمع القرآن","أيامه الأخيرة وإرثه","مراجعة الخط الزمني"].map((ar,i)=>({id:i===0?"who-was-abu-bakr":`lesson-${i+1}`,title:{ar,en:["Who Was Abu Bakr?","The First Days of Islam","Faith Under Persecution","The Companion of the Cave","Abu Bakr in Madinah","The Final Illness of the Prophet ﷺ","The Day the Prophet ﷺ Died","The First Caliph","The Ridda Crisis","Preserving the Qur’an","His Final Days and Legacy","Timeline Review"][i]},status:i===0?"available":"development"})),
    blocks:[
      {id:"identity",kind:"hook",title:{ar:"من كان أبو بكر؟",en:"Who was Abu Bakr?"},body:pending},
      {id:"name",kind:"facts",title:{ar:"الاسم والكنية والألقاب",en:"Name, kunyah and titles"},body:pending},
      {id:"relationship",kind:"context",title:{ar:"صلته بالنبي ﷺ",en:"His relationship with the Prophet ﷺ"},body:pending},
      {id:"family",kind:"map",title:{ar:"العائلة والصلات",en:"Family and relationships"},body:pending},
      {id:"phases",kind:"map",title:{ar:"ثماني مراحل من حياته",en:"Eight phases of his life"},body:pending},
      {id:"character",kind:"reflection",title:{ar:"صفات تشهد لها المواقف",en:"Character evidenced by events"},body:pending},
      {id:"why-path",kind:"summary",title:{ar:"لماذا مسار كامل؟",en:"Why a complete path?"},body:pending},
      {id:"assessment",kind:"summary",title:{ar:"اختبر فهمك",en:"Check your understanding"},body:{ar:"اختبار تجريبي حتى اكتمال المراجعة.",en:"A prototype check until review is complete."}},
    ]
  },
  seerah: {
    id:"seerah", subject:"seerah", accent:"seerah", href:"/seerah/prophetic-biography", title:{ar:"السيرة النبوية",en:"The Prophetic Biography"}, subtitle:{ar:"قيد الإعداد — العناوين فقط، دون محتوى",en:"In development — titles only, no content yet"},
    lessons:[
      ["pre-islamic-arabia-and-lineage","جزيرة العرب قبل الإسلام والنسب","Pre-Islamic Arabia & Lineage"],
      ["birth-to-revelation","من المولد إلى البعثة","Birth to Revelation"],
      ["makkan-period","العهد المكي","The Makkan Period"],
      ["hijrah","الهجرة","The Hijrah"],
      ["madinan-period-and-battles","العهد المدني والغزوات","The Madinan Period & Battles"],
      ["final-years","السنوات الأخيرة","The Final Years"],
    ].map(([id,ar,en])=>({id,title:{ar,en},status:"development" as const})),
    blocks:[],
  },
};

export const t = (value: BiText, lang: Lang) => value[lang];
