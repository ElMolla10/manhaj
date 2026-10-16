import type { ScratchLesson } from "./types";

export const lesson10: ScratchLesson = {
  number: 10, slug: "lesson-10", status: "internal_unapproved",
  title: { ar: "جمع القرآن", en: "Preserving the Qur'an" },
  cards: [
    { id: "yamamah", kind: "hook",
      title: { ar: "قرّاء اليمامة", en: "The reciters at al-Yamamah" },
      body: {
        ar: "في معركة اليمامة ثبت حملة القرآن: قال سالم مولى أبي حذيفة: «بئس حامل القرآن أنا إذًا»، وقال أبو حذيفة: «يا أهل القرآن زيّنوا القرآن بالفعال»، وقُتل زيد بن الخطاب شهيدًا. وذكر ابن كثير أنه قُتل من المسلمين ستمئة، وقيل خمسمئة، وفيهم من سادات الصحابة.",
        en: "At al-Yamamah the bearers of the Qur'an held firm: Salim, freedman of Abu Hudhayfah, said 'What a poor bearer of the Qur'an I would be then!'; Abu Hudhayfah said 'People of the Qur'an, adorn the Qur'an with deeds!'; and Zayd ibn al-Khattab was killed as a martyr. Ibn Kathir reports six hundred Muslims were killed — some say five hundred — among them leading Companions.",
      },
      citations: [
        { key: "bidayah_v4_p34", grading: "grading_unverified" },
        { key: "bidayah_v4_p35", grading: "grading_unverified" },
      ],
      flags: [
        { kind: "conflict", text: { ar: "أعداد القتلى مختلف فيها عند ابن كثير نفسه (ستمئة / خمسمئة من المسلمين؛ نحو عشرة آلاف / واحد وعشرون ألفًا من العدو).", en: "Casualty figures differ within Ibn Kathir himself (600 / 500 Muslims; about 10,000 / 21,000 of the enemy)." } },
      ],
    },
    { id: "umar-proposal", kind: "context",
      title: { ar: "اقتراح عمر وتردد أبي بكر", en: "ʿUmar's proposal and Abu Bakr's hesitation" },
      body: {
        ar: "قال زيد بن ثابت: أرسل إليّ أبو بكر مقتلَ أهل اليمامة وعنده عمر، فقال: إن عمر أتاني فقال: إن القتل قد استحرّ يوم اليمامة بقرّاء القرآن، وإني أخشى أن يذهب كثير من القرآن، وأرى أن تأمر بجمعه. قلت لعمر: كيف أفعل شيئًا لم يفعله رسول الله ﷺ؟ قال: هذا والله خير. فلم يزل يراجعني حتى شرح الله صدري لذلك.",
        en: "Zayd ibn Thabit said: Abu Bakr sent for me after the killing at al-Yamamah, with ʿUmar beside him. He said: ʿUmar came to me and said that killing had raged among the Qur'an reciters at al-Yamamah, that he feared much of the Qur'an would be lost, and that I should order it to be collected. I said to ʿUmar: 'How can I do something the Messenger ﷺ did not do?' He said: 'By Allah, it is good.' He kept urging me until Allah opened my heart to it.",
      },
      citations: [ { key: "bukhari_p1274", grading: "in_sahih_bukhari" } ],
    },
    { id: "zayd", kind: "facts",
      title: { ar: "تكليف زيد بن ثابت", en: "Zayd ibn Thabit's task" },
      body: {
        ar: "قال أبو بكر لزيد: «إنك رجل شاب عاقل لا نتّهمك، وقد كنت تكتب الوحي لرسول الله ﷺ، فتتبّع القرآن فاجمعه». قال زيد: فوالله لو كلّفوني نقل جبل ما كان أثقل عليّ من ذلك. فتتبّع القرآن يجمعه من العُسُب واللِّخاف وصدور الرجال، حتى وجد آخر سورة التوبة مع أبي خزيمة الأنصاري لم يجدها مع أحد غيره.",
        en: "Abu Bakr told Zayd: 'You are a sensible young man whom we do not suspect, and you used to write down the revelation for the Messenger ﷺ, so search out the Qur'an and collect it.' Zayd said: 'By Allah, had they asked me to move a mountain it would not have been heavier for me.' He gathered the Qur'an from palm stalks, flat stones and the memories of men, until he found the end of Surat al-Tawbah with Abu Khuzaymah al-Ansari and with no one else.",
      },
      citations: [
        { key: "bukhari_p1274", excerpt: "إنك رجلٌ شابٌّ عاقلٌ لا نتَّهِمُك، وقد كنتَ تكتُبُ الوحيَ لرسول الله ﷺ، فتتَبَّعِ القرآنَ فاجمَعْه.", grading: "in_sahih_bukhari" },
        { key: "bukhari_p1275", grading: "in_sahih_bukhari" },
      ],
    },
    { id: "suhuf", kind: "reflection",
      title: { ar: "أين حُفظت الصحف", en: "Where the sheets were kept" },
      body: {
        ar: "كانت الصحف عند أبي بكر حتى توفاه الله، ثم عند عمر حياته، ثم عند حفصة بنت عمر. وروى الذهبي عن عليّ قال: «أعظم الناس أجرًا في المصاحف أبو بكر، كان أول من جمع القرآن بين اللوحين»، وحسّن المحقق إسناده.",
        en: "The sheets stayed with Abu Bakr until Allah took him, then with ʿUmar during his life, then with Hafsah bint ʿUmar. Al-Dhahabi reports that ʿAli said: 'The person with the greatest reward for the mushafs is Abu Bakr; he was the first to gather the Qur'an between two covers' — the editor graded its chain hasan.",
      },
      citations: [
        { key: "bukhari_p1274", excerpt: "فكانتِ الصُّحُفُ عند أبي بكرٍ حتى توفّاه الله، ثم عند عُمرَ حياتَه، ثم عند حفصةَ بنتِ عُمر رضي الله عنه", grading: "in_sahih_bukhari" },
        { key: "siyar_p15_b", grading: "editor_hasan" },
      ],
    },
  ],
};

export const lesson11: ScratchLesson = {
  number: 11, slug: "lesson-11", status: "internal_unapproved",
  title: { ar: "أيامه الأخيرة وإرثه", en: "His Final Days and Legacy" },
  cards: [
    { id: "illness", kind: "hook",
      title: { ar: "مرضه", en: "His illness" },
      body: {
        ar: "قالت عائشة: أول ما بدأ مرض أبي بكر أنه اغتسل في يوم بارد فحُمّ خمسة عشر يومًا لا يخرج إلى الصلاة، وكان يأمر عمر بالصلاة، وكان عثمان ألزمهم له في مرضه.",
        en: "ʿAʾishah said: Abu Bakr's illness began when he bathed on a cold day; he had a fever for fifteen days, did not go out to prayer, and had ʿUmar lead it. ʿUthman stayed with him most during his illness.",
      },
      citations: [ { key: "siyar_p16", excerpt: "وعن عائشة، قالت: أوّل ما بُدِيء مرضُ أبي بكر أنّه اغتَسَل، وكان يوماً بارداً فحُمَّ خمسةَ عَشَرَ يوماً لا يخرج إلى صلاة، وكان يأمر عمرَ بالصّلاة، وكانوا يعودونه، وكان عثمانُ ألزَمَهُم له في مرضه.", grading: "grading_unverified" } ],
      flags: [
        { kind: "no_chain", text: { ar: "خبر أن اليهود سمّته أورده الذهبي بصيغة «ويُقال» فلم نذكره في النص.", en: "The report that he was poisoned by Jews is given by al-Dhahabi only as 'it is said', so it is not used in the text." } },
      ],
    },
    { id: "umar", kind: "context",
      title: { ar: "العهد إلى عمر", en: "Appointing ʿUmar" },
      body: {
        ar: "لما ثقل أبو بكر استشار عبد الرحمن بن عوف في عمر فقال: هو والله أفضل من رأيك فيه، واستشار عثمان فقال: سريرته خير من علانيته، وليس فينا مثله. وقيل له: ما تقول لربك وقد ترى غلظته؟ فقال: «أقول: استخلفت عليهم خير أهلك». ثم أملى على عثمان عهدًا: «إني استخلفت عليكم بعدي عمر بن الخطاب فاسمعوا له وأطيعوا… فإن عدل فذلك ظني به، وإن بدّل فلكل امرئ ما اكتسب، والخير أردت ولا أعلم الغيب».",
        en: "When Abu Bakr grew gravely ill he consulted ʿAbd al-Rahman ibn ʿAwf about ʿUmar, who said: 'By Allah, he is better than your opinion of him'; and ʿUthman, who said: 'His inner self is better than his outward, and there is none like him among us.' Someone asked: 'What will you tell your Lord, seeing his harshness?' He said: 'I will say: I appointed over them the best of Your people.' He then dictated to ʿUthman: 'I have appointed ʿUmar ibn al-Khattab over you after me, so listen to him and obey… If he is just, that is my opinion of him; if he changes, every person bears what he earns. I intended good, and I do not know the unseen.'",
      },
      citations: [ { key: "siyar_p16_a", grading: "grading_unverified" } ],
      flags: [
        { kind: "no_chain", text: { ar: "الرواية من طريق الواقدي وقد «دخل حديث بعضهم في بعض» كما قال الذهبي؛ لم نجد حكمًا على إسنادها.", en: "This comes via al-Waqidi with, as al-Dhahabi notes, 'the reports merged into one another'; no grading located." } },
      ],
    },
    { id: "austerity", kind: "reflection",
      title: { ar: "«لقد أتعب من بعده»", en: "'He has made it hard for those after him'" },
      body: {
        ar: "قال أبو بكر لعائشة عند موته: منذ ولينا أمر المسلمين لم نأكل لهم دينارًا ولا درهمًا، ولكنا أكلنا من جريش طعامهم ولبسنا من خشن ثيابهم، وليس عندنا من فيء المسلمين إلا هذا العبد وهذا البعير وهذه القطيفة، فإذا متّ فابعثي بهن إلى عمر. وفي رواية القاسم عن عائشة: فلما دُفع ذلك إلى عمر قال: «رحم الله أبا بكر، لقد أتعب من بعده».",
        en: "Abu Bakr told ʿAʾishah as he was dying: since we took charge of the Muslims we have not eaten a dinar or dirham of theirs, only their coarse food and their rough clothes; we have nothing of the Muslims' wealth except this slave, this camel and this cloth — when I die, send them to ʿUmar. In al-Qasim's report from ʿAʾishah, when it was handed to ʿUmar he said: 'May Allah have mercy on Abu Bakr; he has made it hard for those who come after him.'",
      },
      citations: [
        { key: "siyar_p18_a", grading: "grading_unverified" },
        { key: "siyar_p19", grading: "grading_unverified" },
      ],
    },
    { id: "death", kind: "facts",
      title: { ar: "وفاته ودفنه", en: "His death and burial" },
      body: {
        ar: "تمثّلت عائشة ببيت شعر وهو يُحتضر، فقال: ليس كذلك، ولكن ﴿وَجَاءَتْ سَكْرَةُ الْمَوْتِ بِالْحَقِّ﴾. وأوصى أن تغسّله زوجته أسماء بنت عميس، وأن يُدفن إلى جنب رسول الله ﷺ، فجُعل رأسه عند كتفي رسول الله ﷺ. توفي ليلة الثلاثاء لثمان بقين من جمادى الآخرة، ودُفن قبل أن يُصبح. وقال عليّ لما سُجّي: ما أحد ألقى الله بصحيفته أحب إليّ من هذا المسجّى.",
        en: "As he was dying ʿAʾishah quoted a line of poetry, and he said: 'Not so — rather: And the stupor of death comes in truth' (50:19). He asked that his wife Asmaʾ bint ʿUmays wash his body and that he be buried beside the Messenger ﷺ; his head was placed at the level of the Messenger's ﷺ shoulders. He died on the eve of Tuesday, eight days before the end of Jumada al-Akhirah, and was buried before morning. ʿAli said when he had been covered: 'There is no one whose record I would rather meet Allah with than this man lying here.'",
      },
      citations: [
        { key: "siyar_p18", grading: "grading_unverified" },
        { key: "siyar_p19_a", grading: "grading_unverified" },
        { key: "siyar_p19_c", grading: "grading_unverified" },
        { key: "siyar_p16", excerpt: "وتُوُفِّي مساءَ ليلةِ الثلاثاء لثمانٍ بَقِين من جُمادى الآخرة.", grading: "grading_unverified" },
        { key: "siyar_p19_d", grading: "grading_unverified" },
        { key: "siyar_p19_b", grading: "grading_unverified" },
      ],
      flags: [
      ],
    },
    { id: "length", kind: "summary",
      title: { ar: "مدة خلافته وعمره", en: "Length of his caliphate and his age" },
      body: {
        ar: "قيل: كانت خلافته سنتين ومئة يوم، وقال أبو معشر: سنتين وأربعة أشهر إلا أربع ليال، عن ثلاث وستين سنة.",
        en: "One report gives his caliphate as two years and a hundred days; Abu Maʿshar says two years and four months less four nights, and that he died aged sixty-three.",
      },
      citations: [ { key: "siyar_p16", excerpt: "وكانت خلافته سنتين ومئة يوم.\n\nوقال أبو مَعْشَر: سنتين وأربعة أشهر إلاّ أربعَ ليالٍ، عن ثلاثٍ وستّين سنة.", grading: "grading_unverified" } ],
      flags: [
        { kind: "conflict", text: { ar: "روايتان مختلفتان في مدة الخلافة.", en: "Two differing reports on the length of his caliphate." } },
        { kind: "gap", text: { ar: "لم نستعمل خبر «الأمور الثلاث التي وددت» من السير لأنه لم يُعثر على حكم لإسناده ويتضمن مسائل حساسة تحتاج مراجعة علمية أولًا.", en: "The 'three things I wish' report in the Siyar is not used: no grading of its chain was located and it touches sensitive matters that need scholarly review first." } },
      ],
    },
  ],
};

export const lesson12: ScratchLesson = {
  number: 12, slug: "lesson-12", status: "internal_unapproved",
  title: { ar: "مراجعة الخط الزمني", en: "Timeline Review" },
  cards: [
    { id: "timeline", kind: "map",
      title: { ar: "المحطات بالترتيب", en: "The milestones in order" },
      body: {
        ar: "مراجعة دون معلومات جديدة: (١) نسبه ومكانته في قريش — الدرس ١. (٢) إسلامه ودعوته — الدرس ٢. (٣) الثبات وعتق المستضعفين — الدرس ٣. (٤) الهجرة والغار — الدرس ٤. (٥) بدر وأحد — الدرس ٥. (٦) مرض النبي ﷺ وإمامته الصلاة — الدرس ٦. (٧) يوم الوفاة وخطبته — الدرس ٧. (٨) السقيفة والبيعة — الدرس ٨. (٩) جيش أسامة ومانعو الزكاة — الدرس ٩. (١٠) جمع القرآن — الدرس ١٠. (١١) العهد إلى عمر ووفاته — الدرس ١١.",
        en: "Review with no new information: (1) lineage and standing in Quraysh — lesson 1; (2) his Islam and da'wah — lesson 2; (3) steadfastness and freeing the oppressed — lesson 3; (4) the Hijrah and the cave — lesson 4; (5) Badr and Uhud — lesson 5; (6) the Prophet's ﷺ illness and Abu Bakr leading prayer — lesson 6; (7) the day of death and his address — lesson 7; (8) the Saqifah and the pledge — lesson 8; (9) Usamah's army and those withholding zakah — lesson 9; (10) compiling the Qur'an — lesson 10; (11) appointing ʿUmar and his death — lesson 11.",
      },
      citations: [],
    },
    { id: "open", kind: "summary",
      title: { ar: "ما بقي مفتوحًا للمراجعة", en: "What remains open for review" },
      body: {
        ar: "مواضع الاختلاف المعلّمة في الدروس: ترتيبه بين أوائل المسلمين، ولفظ «ذات النطاق/النطاقين»، ومقدار ما جعلته قريش في طلبه، ومن قال «فعقرت» يوم الوفاة، ومسألة الاستخلاف، وبيعة عليّ، وقضية مالك بن نويرة، ومدة الخلافة. هذه تُحسم بالمراجعة العلمية لا في هذا الدرس.",
        en: "Points of difference flagged in the lessons: his order among the first Muslims; 'waistband' vs 'two waistbands'; the bounty Quraysh set; who said 'I was stunned' on the day of death; the succession question; ʿAli's pledge; the Malik ibn Nuwayrah affair; and the length of the caliphate. These are for scholarly review, not settled here.",
      },
      citations: [],
    },
  ],
};
