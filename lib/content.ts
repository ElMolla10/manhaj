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

/** Number of Abu Bakr lessons with from-scratch draft content (pending scholarly review). */
export const AVAILABLE_ABU_BAKR = 17;
/** Number of Seerah lessons with from-scratch draft content (pending scholarly review). */
export const AVAILABLE_SEERAH = 14;

const pending = {
  ar: "النص التعليمي لهذه البطاقة ينتظر التوثيق والمراجعة العلمية قبل نشره. يمكنك الآن استكشاف شكل الدرس وطريقة التعلّم دون عرض مادة غير معتمدة.",
  en: "This card’s teaching text is awaiting evidence checks and scholarly review before publication. You can explore the lesson flow without being shown unapproved material.",
};

export const paths: Record<string, Path> = {
  abuBakr: {
    id:"abu-bakr", subject:"sahabah", accent:"sahabah", href:"/sahabah/abu-bakr", title:{ar:"أبو بكر الصديق رضي الله عنه",en:"Abu Bakr al-Siddiq"}, subtitle:{ar:"سيرة منظّمة عبر ١٧ درسًا",en:"A structured biography across 17 lessons"},
    lessons:["من كان أبو بكر الصديق؟","الأيام الأولى للإسلام","الثبات وقت الابتلاء","صاحب الغار","في المدينة","مرض النبي ﷺ الأخير","يوم وفاة النبي ﷺ","الخليفة الأول","حروب الردة","جمع القرآن","أيامه الأخيرة وإرثه","كيف حكم: العطاء والعمّال وتركة النبي ﷺ","أسرته وأهل بيته","من أقواله وخطبه","أخلاقه وزهده","فتوح العراق والشام","مراجعة الخط الزمني"].map((ar,i)=>({id:i===0?"who-was-abu-bakr":`lesson-${i+1}`,title:{ar,en:["Who Was Abu Bakr?","The First Days of Islam","Faith Under Persecution","The Companion of the Cave","Abu Bakr in Madinah","The Final Illness of the Prophet ﷺ","The Day the Prophet ﷺ Died","The First Caliph","The Ridda Crisis","Preserving the Qur’an","His Final Days and Legacy","How He Governed","His Family and Household","His Sayings and Sermons","His Character and Asceticism","The Conquests of Iraq and Syria","Timeline Review"][i]},status:(i<AVAILABLE_ABU_BAKR?"available":"development") as "available"|"development"})),
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
    id:"seerah", subject:"seerah", accent:"seerah", href:"/seerah/prophetic-biography", title:{ar:"السيرة النبوية",en:"The Prophetic Biography"}, subtitle:{ar:`مسودة قيد المراجعة العلمية — ${AVAILABLE_SEERAH} من 51 درسًا`,en:`Draft pending scholarly review — ${AVAILABLE_SEERAH} of 51 lessons`},
    lessons:[
      ["arabia-before-islam","جزيرة العرب قبل الإسلام","Arabia Before Islam"],
      ["religion-of-the-arabs","دين العرب قبل الإسلام","The Religion of the Arabs Before Islam"],
      ["society-in-the-jahiliyyah","المجتمع والأخلاق في الجاهلية","Society and Morals in the Jahiliyyah"],
      ["lineage-and-family","النسب والأسرة","Lineage and Family"],
      ["year-of-the-elephant","عام الفيل","The Year of the Elephant"],
      ["birth-and-nursing","المولد والرضاع","Birth and Nursing"],
      ["orphanhood","اليتم والكفالة","Orphanhood and Guardianship"],
      ["youth","الشباب: الفجار وحلف الفضول","Youth: Fijar and Hilf al-Fudul"],
      ["khadijah","الزواج بخديجة رضي الله عنها","Marriage to Khadijah"],
      ["rebuilding-the-kaabah","بناء الكعبة والأمين","Rebuilding the Kaʿbah; al-Amin"],
      ["first-revelation","غار حراء وبدء الوحي","Hiraʾ and the First Revelation"],
      ["stages-of-revelation","فترة الوحي ومراتبه","The Pause and Stages of Revelation"],
      ["secret-call","الدعوة السرية","The Secret Call"],
      ["open-call","الجهر بالدعوة","The Open Call"],
      ["quraysh-methods","أساليب قريش","Quraysh's Methods"],
      ["persecution","اضطهاد المؤمنين","Persecution of the Believers"],
      ["quraysh-and-abu-talib","قريش وأبو طالب","Quraysh and Abu Talib"],
      ["abyssinia","الهجرة إلى الحبشة","The Migrations to Abyssinia"],
      ["hamzah-and-umar","إسلام حمزة وعمر","Hamzah and ʿUmar Accept Islam"],
      ["boycott","المقاطعة","The Boycott"],
      ["year-of-grief","عام الحزن","The Year of Grief"],
      ["taif","الطائف","Taʾif"],
      ["tribes","عرض الإسلام على القبائل","Presenting Islam to the Tribes"],
      ["isra-and-miraj","الإسراء والمعراج","al-Israʾ and al-Miʿraj"],
      ["aqabah","بيعتا العقبة","The Pledges of ʿAqabah"],
      ["hijrah-night","المؤامرة وليلة الهجرة","The Plot and the Night of Hijrah"],
      ["the-road","الغار والطريق","The Cave and the Road"],
      ["arrival","الوصول إلى قباء والمدينة","Arrival at Qubaʾ and Madinah"],
      ["madinah-at-hijrah","المدينة عند الهجرة","Madinah at the Hijrah"],
      ["new-society","بناء المجتمع الجديد","Building the New Society"],
      ["before-badr","السرايا قبل بدر","Expeditions Before Badr"],
      ["badr-1","غزوة بدر (١)","Badr (1)"],
      ["badr-2","غزوة بدر (٢)","Badr (2)"],
      ["badr-to-uhud","بين بدر وأحد","Between Badr and Uhud"],
      ["uhud-1","غزوة أحد (١)","Uhud (1)"],
      ["uhud-2","غزوة أحد (٢)","Uhud (2)"],
      ["after-uhud","بعد أحد","After Uhud"],
      ["ahzab","الأحزاب وبنو قريظة","al-Ahzab and Banu Qurayzah"],
      ["mustaliq-and-ifk","بنو المصطلق والإفك","Banu al-Mustaliq and the Ifk"],
      ["hudaybiyah","الحديبية","al-Hudaybiyah"],
      ["letters","مكاتبة الملوك","Letters to the Kings"],
      ["khaybar","خيبر وعمرة القضاء","Khaybar and ʿUmrat al-Qadaʾ"],
      ["mutah","مؤتة","Muʾtah"],
      ["conquest","فتح مكة","The Conquest of Makkah"],
      ["hunayn","حنين والطائف","Hunayn and Taʾif"],
      ["tabuk","تبوك وعام الوفود","Tabuk and the Year of Delegations"],
      ["farewell-hajj","حجة الوداع","The Farewell Hajj"],
      ["final-illness","المرض والوفاة","The Final Illness and Death"],
      ["household","البيت النبوي","The Prophet's Household"],
      ["character","الصفات والأخلاق","His Description and Character"],
      ["timeline","مراجعة الخط الزمني","Timeline Review"],
    ].map(([id,ar,en],i)=>({id,title:{ar,en},status:(i<AVAILABLE_SEERAH?"available":"development") as "available"|"development"})),
    blocks:[],
  },
};

export const t = (value: BiText, lang: Lang) => value[lang];
