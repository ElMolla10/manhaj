import type { Card, Citation, Flag, Grading, LessonExtension, QuizQ } from "./types";

// Expansion pass: narrative, glossary, reflection ("what we learn") cards and quizzes.
// Rules: narrative retells only the cited passages; reflection cards are labelled as reflection
// and only draw a lesson the cited text itself states or directly shows; glossary glosses come
// from what the cited passage says; quiz answers come only from lesson cards.

export const ci = (key: string, grading: Grading = "grading_unverified", excerpt?: string): Citation => (excerpt ? { key, excerpt, grading } : { key, grading });
export const card = (id: string, kind: Card["kind"], tAr: string, tEn: string, ar: string, en: string, citations: Citation[], flags?: Flag[], glossary?: Card["glossary"]): Card => ({ id, kind, title: { ar: tAr, en: tEn }, body: { ar, en }, citations, ...(flags ? { flags } : {}), ...(glossary ? { glossary } : {}) });
export const g = (tAr: string, tEn: string, ar: string, en: string, key: string) => ({ term: { ar: tAr, en: tEn }, gloss: { ar, en }, key });
export const fl = (kind: Flag["kind"], ar: string, en: string): Flag => ({ kind, text: { ar, en } });
export const q = (id: string, cardId: string, qAr: string, qEn: string, opts: [string, string][], answer: number, exAr: string, exEn: string): QuizQ => ({ id, cardId, q: { ar: qAr, en: qEn }, options: opts.map(([ar, en]) => ({ ar, en })), answer, explain: { ar: exAr, en: exEn } });
const B = "in_sahih_bukhari" as const;

export const ext01: LessonExtension = {
  after: {
    standing: [
      card("wealth", "narrative", "ماله في سبيل الله", "His wealth in Allah's cause",
        "قال عروة بن الزبير: أسلم أبو بكر يوم أسلم وله أربعون ألف دينار. وقال النبي ﷺ في خطبته إن أمنّ الناس عليه في صحبته وماله أبو بكر. ولما خرج مهاجرًا حمل ماله كله معه، خمسة آلاف درهم أو ستة، كما روت ابنته أسماء.",
        "ʿUrwah ibn al-Zubayr said: Abu Bakr accepted Islam on the day he did with forty thousand dinars. The Prophet ﷺ said in a sermon that the person most generous to him in companionship and wealth was Abu Bakr. When he set out on the Hijrah he took all his money with him — five or six thousand dirhams — as his daughter Asmaʾ related.",
        [ci("siyar_p8"), ci("bukhari_p899_a", B), ci("ibn_hisham_p225")],
        [fl("no_chain", "قول عروة نقله الذهبي دون إسناد في المقطع، وعروة تابعي لم يشهد إسلام أبي بكر.", "ʿUrwah's statement is quoted by al-Dhahabi without a chain in the extract; ʿUrwah was a Tabiʿi and did not witness Abu Bakr's conversion.")]),
    ],
  },
  append: [
    card("glossary", "glossary", "مسرد المصطلحات", "Glossary", "تعريفات مأخوذة مما تقوله المقاطع نفسها.", "Definitions taken from what the passages themselves say.", [],
      undefined, [
        g("عتيق", "ʿAtiq", "لقب غلب عليه، وسمّاه أهله عبد الله؛ قيل لجمال وجهه.", "A nickname that prevailed over his given name ʿAbdullah; said to be for the beauty of his face.", "siyar_p7_a"),
        g("التيمي", "al-Taymi", "نسبة إلى تيم بن مرة من قريش، قبيلته.", "From Taym ibn Murrah of Quraysh, his clan.", "siyar_p7_b"),
        g("أبو قحافة", "Abu Quhafah", "والده، واسمه عثمان بن عامر.", "His father, whose name was ʿUthman ibn ʿAmir.", "ibn_hisham_p117_c"),
        g("عالم قريش", "'The scholar of Quraysh'", "لقب ذكره محقق الفضائل لعلمه بأنساب القبائل وأخبارها.", "A title the Fada'il editor says he had for his knowledge of tribal genealogy and history.", "fadail_p65_a"),
        g("خليفة رسول الله", "Successor of the Messenger of Allah", "اللقب الذي ناداه به المهاجرون؛ استدل أبو بكر بن عياش بأن الله سمّاهم «الصادقين».", "The title the Muhajirun called him by; Abu Bakr ibn ʿAyyash argued that Allah called them 'the truthful'.", "siyar_p13_b"),
      ]),
    card("learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
      "تأمل لا رواية: بكى أبو بكر حين قال النبي ﷺ «ما نفعني مال قط ما نفعني مال أبي بكر» وقال: «وهل أنا ومالي إلا لك يا رسول الله؟». فالنص نفسه يُظهر أنه لم يرَ ماله منّةً.",
      "A reflection, not a report: when the Prophet ﷺ said no wealth had benefited him like Abu Bakr's, Abu Bakr wept and said: 'Are I and my wealth anything but yours?' The text itself shows he did not regard his wealth as a favour he had done.",
      [ci("fadail_p65_b", "editor_sahih")]),
  ],
  quiz: [
    q("q1", "name", "ما اسم أبي بكر الذي سمّاه به أهله؟", "What name did Abu Bakr's family give him?", [["عبد الله", "ʿAbdullah"], ["عثمان", "ʿUthman"], ["عامر", "ʿAmir"]], 0, "قالت عائشة: اسمه الذي سمّاه أهله به عبد الله، ولكن غلب عليه عتيق.", "ʿAʾishah: the name his family gave him was ʿAbdullah, but ʿAtiq prevailed."),
    q("q2", "closeness", "أي باب استُثني حين أمر النبي ﷺ بسدّ الأبواب في المسجد؟", "Which door was excepted when the Prophet ﷺ ordered the mosque doors closed?", [["باب عمر", "ʿUmar's door"], ["باب أبي بكر", "Abu Bakr's door"], ["باب عائشة", "ʿAʾishah's door"]], 1, "«لا يبقين في المسجد باب إلا سُدّ، إلا باب أبي بكر» — صحيح البخاري.", "'No door in the mosque shall remain open except Abu Bakr's' — al-Bukhari."),
    q("q3", "rank", "بحسب ابن عمر، كيف كان الصحابة يرتّبون الناس في زمن النبي ﷺ؟", "According to Ibn ʿUmar, how did the Companions rank people in the Prophet's ﷺ time?", [["أبو بكر ثم عمر ثم عثمان", "Abu Bakr, then ʿUmar, then ʿUthman"], ["عمر ثم أبو بكر ثم علي", "ʿUmar, then Abu Bakr, then ʿAli"], ["لم يكونوا يرتّبون", "They did not rank"]], 0, "صحيح البخاري، ص٨٩٩.", "Sahih al-Bukhari, p. 899."),
    q("q4", "flagged", "ما حكم المحقق على حديث «أما إنك أول من يدخل الجنة من أمتي» كما أورده الذهبي؟", "How did the editor grade 'You will be the first of my Ummah to enter Paradise' as cited by al-Dhahabi?", [["صحيح", "Sahih"], ["ضعيف الإسناد", "Weak chain"], ["حسن", "Hasan"]], 1, "ضعّفه لجهالة أبي خالد مولى جعدة.", "Weak because Abu Khalid, client of Juʿdah, is unknown."),
  ],
};

export const ext02: LessonExtension = {
  after: {
    eight: [
      card("eight-narrative", "narrative", "كيف انتشرت الدعوة عبره", "How the call spread through him",
        "يروي ابن إسحاق القصة بالترتيب: أسلم أبو بكر فأظهر إسلامه، وكان رجال قومه يألفونه لعلمه وتجارته وحسن مجالسته، فجعل يدعو من يثق به ممن يغشاه ويجلس إليه. فأسلم بدعائه — فيما بلغ ابن إسحاق — عثمان والزبير وعبد الرحمن بن عوف وسعد وطلحة، فجاء بهم إلى النبي ﷺ فأسلموا وصلّوا. وبهم وبمن سبقهم اكتمل النفر الثمانية الذين سبقوا الناس بالإسلام.",
        "Ibn Ishaq tells it in sequence: Abu Bakr accepted Islam and made it public; the men of his tribe were drawn to him for his knowledge, his trade and his good company, so he invited those he trusted who visited and sat with him. Through his invitation — as reported to Ibn Ishaq — ʿUthman, al-Zubayr, ʿAbd al-Rahman ibn ʿAwf, Saʿd and Talhah accepted Islam; he brought them to the Prophet ﷺ and they accepted Islam and prayed. With them and those before them the eight who preceded everyone in Islam were complete.",
        [ci("ibn_hisham_p117_b"), ci("ibn_hisham_p117_a", "no_chain_stated"), ci("ibn_hisham_p117_f")]),
    ],
  },
  append: [
    card("glossary", "glossary", "مسرد المصطلحات", "Glossary", "تعريفات مأخوذة مما تقوله المقاطع نفسها.", "Definitions taken from what the passages themselves say.", [], undefined, [
      g("زيد بن حارثة", "Zayd ibn Harithah", "مولى رسول الله ﷺ، وعند ابن إسحاق أول ذكر أسلم وصلّى بعد علي.", "Freedman of the Messenger ﷺ; for Ibn Ishaq the first male to accept Islam and pray after ʿAli.", "ibn_hisham_p116"),
      g("النفر الثمانية", "The eight", "الذين سبقوا الناس بالإسلام فصلّوا وصدّقوا رسول الله ﷺ.", "Those who preceded everyone in Islam, praying and believing the Messenger ﷺ.", "ibn_hisham_p117_f"),
      g("أم كلثوم بنت أبي بكر", "Umm Kulthum bint Abi Bakr", "ابنته؛ عن بعض آلها رُوي خبر ما أصاب أباها يوم دافع عن النبي ﷺ.", "His daughter; members of her family related what happened to her father when he defended the Prophet ﷺ.", "ibn_hisham_p133_b"),
    ]),
    card("learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
      "تأمل لا رواية: سؤال أبي بكر «أتقتلون رجلًا أن يقول ربي الله؟» يُظهر بنصّه أنه رأى الاعتداء على النبي ﷺ اعتداءً على كلمة التوحيد نفسها، فوقف دونه وهو يبكي.",
      "A reflection, not a report: Abu Bakr's own words — 'Would you kill a man for saying: My Lord is Allah?' — show that he saw the attack as an attack on the declaration of tawhid itself, and he stood in front of the Prophet ﷺ weeping.",
      [ci("ibn_hisham_p133_a")]),
  ],
  quiz: [
    q("q1", "dawah", "من الذين أسلموا بدعوة أبي بكر بحسب ابن إسحاق؟", "Who accepted Islam through Abu Bakr's invitation according to Ibn Ishaq?", [["عثمان والزبير وعبد الرحمن وسعد وطلحة", "ʿUthman, al-Zubayr, ʿAbd al-Rahman, Saʿd and Talhah"], ["عمر وحمزة", "ʿUmar and Hamzah"], ["بلال وخباب", "Bilal and Khabbab"]], 0, "ابن هشام ص١١٧، بصيغة «فيما بلغني».", "Ibn Hisham p. 117, introduced with 'as it reached me'."),
    q("q2", "islam", "لماذا وُسم ترتيب أبي بكر بين أوائل المسلمين بعلامة اختلاف؟", "Why is Abu Bakr's order among the first Muslims flagged?", [["لأن المصادر المعروضة تختلف في الصياغة", "Because the sources shown word it differently"], ["لأنه لم يسلم مبكرًا", "Because he did not accept Islam early"], ["لا يوجد اختلاف", "There is no difference"]], 0, "ابن إسحاق يذكر زيدًا أول ذكر بعد علي، والذهبي يقول أبو بكر أول من آمن من الرجال.", "Ibn Ishaq names Zayd first male after ʿAli; al-Dhahabi says Abu Bakr was the first man to believe."),
    q("q3", "defence", "ماذا قال أبو بكر حين أحاط المشركون بالنبي ﷺ؟", "What did Abu Bakr say when the idolaters surrounded the Prophet ﷺ?", [["أتقتلون رجلًا أن يقول ربي الله؟", "Would you kill a man for saying: My Lord is Allah?"], ["لا تحزن إن الله معنا", "Do not grieve, Allah is with us"], ["على رسلك", "Wait a while"]], 0, "ابن هشام ص١٣٣.", "Ibn Hisham p. 133."),
  ],
};

export const ext03: LessonExtension = {
  after: {
    mosque: [
      card("dughunna-narrative", "narrative", "القصة كاملة كما روتها عائشة", "The full account as ʿAʾishah told it",
        "قالت عائشة إنها لم تعقل أبويها إلا وهما يدينان الدين، وكان النبي ﷺ يأتيهم كل يوم طرفي النهار. ولما ابتُلي المسلمون خرج أبو بكر نحو الحبشة، فردّه ابن الدغنة في جواره، وطاف في أشراف قريش يذكّرهم بخصاله، فلم تكذّب قريش جواره، واشترطت أن يعبد ربه في داره. فلبث كذلك ثم بنى مسجدًا بفناء داره، فاجتمع عليه النساء والأبناء لبكائه بالقرآن، فشكت قريش إلى ابن الدغنة، فجاءه يخيّره بين الاقتصار على ذلك أو ردّ ذمته.",
        "ʿAʾishah said she never knew her parents except as followers of the religion, and the Prophet ﷺ visited them every day, morning and evening. When the Muslims were put to trial Abu Bakr left for Abyssinia; Ibn al-Dughunnah brought him back under his protection and went round the nobles of Quraysh listing his virtues. Quraysh did not reject the protection but required that he worship inside his house. He did so, then built a prayer place in his courtyard; women and children gathered round him because he wept when he recited. Quraysh complained to Ibn al-Dughunnah, who came and gave him the choice: keep to the condition or return his protection.",
        [ci("bukhari_p956", B), ci("bukhari_p956_957", B), ci("bukhari_p957_e", B)],
        [fl("gap", "جواب أبي بكر غير موجود في المقطع الموثق.", "Abu Bakr's answer is not in the verified extract.")]),
    ],
  },
  append: [
    card("glossary", "glossary", "مسرد المصطلحات", "Glossary", "تعريفات مأخوذة مما تقوله المقاطع نفسها.", "Definitions taken from what the passages themselves say.", [], undefined, [
      g("ابن الدَّغِنة", "Ibn al-Dughunnah", "سيد القارة، أجار أبا بكر.", "Chief of the Qarah, who gave Abu Bakr protection.", "bukhari_p956"),
      g("بَرْك الغِماد", "Bark al-Ghimad", "الموضع الذي لقيه فيه ابن الدغنة وهو في طريقه نحو الحبشة.", "The place where Ibn al-Dughunnah met him on his way toward Abyssinia.", "bukhari_p956"),
      g("الجوار", "Jiwar (protection)", "عهد حماية؛ قالت قريش لابن الدغنة: إن أبى إلا أن يعلن فسله أن يردّ إليك ذمتك.", "A protection pact; Quraysh told Ibn al-Dughunnah that if Abu Bakr insisted on praying openly he should return the pledge.", "bukhari_p956_957"),
      g("زِنّيرة", "Zinnirah", "ممن أعتقهم؛ ذهب بصرها فقالت قريش: أذهبته اللات والعزى، فردّ الله بصرها.", "One he freed; she lost her sight, Quraysh blamed al-Lat and al-ʿUzza, and Allah restored it.", "ibn_hisham_p147_b"),
      g("بنو مؤمّل", "Banu Muʾammal", "حيّ من بني عديّ بن كعب، كانت لهم جارية مسلمة اشتراها أبو بكر وأعتقها.", "A clan of Banu ʿAdi ibn Kaʿb whose Muslim slave girl Abu Bakr bought and freed.", "ibn_hisham_p147_d"),
    ]),
    card("learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
      "تأمل لا رواية: صرّح أبو بكر بالغاية حين لامه أبوه: «إني إنما أريد ما أريد لله». وحين أرادت النهدية وابنتها أن تفرغا من الطحين قبل ردّه قال: «ذلك إن شئتما» — فالنص يُظهر أنه أعتقهما ثم عاملهما معاملة الأحرار في الحال.",
      "A reflection, not a report: Abu Bakr stated his aim when his father criticised him: 'I only seek what I seek for Allah.' When al-Nahdiyyah and her daughter wanted to finish the flour before returning it he said: 'That is up to you' — the text shows he treated them as free women at once.",
      [ci("ibn_hisham_p147_a", "no_chain_stated"), ci("ibn_hisham_p147_c")]),
  ],
  quiz: [
    q("q1", "abyssinia", "إلى أين كان أبو بكر متوجهًا حين لقيه ابن الدغنة؟", "Where was Abu Bakr heading when Ibn al-Dughunnah met him?", [["الحبشة", "Abyssinia"], ["المدينة", "Madinah"], ["الطائف", "Taʾif"]], 0, "صحيح البخاري ص٩٥٦.", "Sahih al-Bukhari p. 956."),
    q("q2", "mosque", "لماذا فزع أشراف قريش من صلاة أبي بكر في فناء داره؟", "Why were the nobles of Quraysh alarmed by Abu Bakr praying in his courtyard?", [["خشوا أن يفتن نساءهم وأبناءهم", "They feared he would sway their women and children"], ["لأنه رفع صوته بالشعر", "He recited poetry loudly"], ["لأنه جمع السلاح", "He gathered weapons"]], 0, "«إنا قد خشينا أن يفتن نساءنا وأبناءنا».", "'We fear he will sway our women and children.'"),
    q("q3", "freeing", "من الذي كان يعذّب جارية بني مؤمّل وهو يومئذ مشرك؟", "Who used to beat the slave girl of Banu Muʾammal while still an idolater?", [["عمر بن الخطاب", "ʿUmar ibn al-Khattab"], ["أبو جهل", "Abu Jahl"], ["أمية بن خلف", "Umayyah ibn Khalaf"]], 0, "ابن هشام ص١٤٧.", "Ibn Hisham p. 147."),
    q("q4", "intention", "ما صيغة خبر نزول آيات سورة الليل في أبي بكر؟", "How is the report that verses of Surat al-Layl were revealed about Abu Bakr worded?", [["«فيُتحدّث» بلا إسناد", "'It is related', without a chain"], ["حديث في البخاري", "A hadith in al-Bukhari"], ["صحّحه المحقق", "Graded sahih by the editor"]], 0, "لذلك وُسم بعلامة «بلا إسناد مذكور».", "Hence the 'no stated chain' flag."),
  ],
};

export const ext04: LessonExtension = {
  after: {
    permission: [
      card("secret", "narrative", "من علم بالخروج", "Who knew of the departure",
        "قال ابن إسحاق — فيما بلغه — إنه لم يعلم بخروج النبي ﷺ أحد إلا عليّ وأبو بكر وآل أبي بكر، وإن النبي ﷺ أمر عليًّا أن يتخلّف بمكة حتى يؤدي عنه الودائع التي كانت عنده للناس، لما يعلمون من صدقه وأمانته.",
        "Ibn Ishaq says — as reported to him — that no one knew of the Prophet's ﷺ departure except ʿAli, Abu Bakr and Abu Bakr's family, and that the Prophet ﷺ told ʿAli to stay behind in Makkah to return the deposits people had left with him, because they knew his truthfulness and trustworthiness.",
        [ci("ibn_hisham_p223_224", "no_chain_stated")]),
    ],
    thawr: [
      card("thawr-ibn-hisham", "narrative", "رواية ابن إسحاق للأيام الثلاثة", "Ibn Ishaq's account of the three days",
        "يوافق ابن إسحاق البخاريَّ ويزيد: كان عبد الله بن أبي بكر يكون في قريش نهاره يسمع ما يأتمرون به في شأن النبي ﷺ وأبي بكر ثم يأتيهما إذا أمسى، وكان عامر بن فهيرة إذا غدا عبد الله من عندهما إلى مكة اتّبع أثره بالغنم حتى يُعفّي عليه.",
        "Ibn Ishaq agrees with al-Bukhari and adds: ʿAbdullah ibn Abi Bakr spent the day among Quraysh hearing what they plotted about the Prophet ﷺ and Abu Bakr, then came to them at nightfall; and when ʿAbdullah left them for Makkah, ʿAmir ibn Fuhayrah drove the sheep over his tracks to erase them.",
        [ci("ibn_hisham_p224_b")]),
    ],
    road: [
      card("horseman", "narrative", "«هذا الرجل يهديني السبيل»", "'This man guides me on the way'",
        "روى أنس أن النبي ﷺ أقبل إلى المدينة مُردفًا أبا بكر، وأبو بكر شيخ يُعرف والنبي ﷺ شاب لا يُعرف، فكان الرجل يلقى أبا بكر فيسأله عنه فيقول: «هذا الرجل يهديني السبيل»، فيحسب السائل أنه يعني الطريق وإنما يعني سبيل الخير. ثم لحقهم فارس فدعا عليه النبي ﷺ فصرعه فرسه، فطلب أن يأمره بما شاء، فقال: قف مكانك لا تترك أحدًا يلحق بنا. فكان أول النهار جاهدًا عليه وآخره مَسلحة له.",
        "Anas related that the Prophet ﷺ came toward Madinah with Abu Bakr riding behind him; Abu Bakr was an older man people knew, and the Prophet ﷺ a younger man they did not. A man would meet Abu Bakr and ask who he was, and he would say: 'This man guides me on the way' — the asker thought he meant the road, but he meant the way of good. Then a horseman caught up; the Prophet ﷺ prayed against him and his horse threw him. He asked to be commanded, and was told: 'Stay where you are and let no one reach us.' He was against the Prophet at the start of the day and his guard by its end.",
        [ci("bukhari_p960_a", B)],
        [fl("conflict", "وصف النبي ﷺ بأنه «شاب لا يُعرف» مقابل وصف ابن إسحاق بأن أبا بكر كان «في مثل سنّه»؛ اختلاف في اللفظ يحتاج مراجعة.", "Anas describes the Prophet ﷺ as 'a younger man', while Ibn Ishaq's report says Abu Bakr was 'of the same age'; a wording difference for review.")]),
    ],
  },
  append: [
    card("glossary", "glossary", "مسرد المصطلحات", "Glossary", "تعريفات مأخوذة مما تقوله المقاطع نفسها.", "Definitions taken from what the passages themselves say.", [ci("bukhari_p959_d", B)], undefined, [
      g("لابتان / الحرّتان", "The two lava fields", "وصف دار الهجرة: «ذات نخل بين لابتين، وهما الحرّتان».", "Description of the land of emigration: 'palms between two labahs, which are the two harrahs'.", "bukhari_p957_c"),
      g("الخَبَط", "al-Khabat", "ورق السَّمُر، علف به أبو بكر راحلتيه أربعة أشهر.", "Samur leaves, which Abu Bakr fed his two camels for four months.", "bukhari_p957_c"),
      g("الخِرِّيت", "al-Khirrit", "الماهر بالهداية — وصف الدليل الذي استأجراه.", "One skilled at guiding — said of the guide they hired.", "bukhari_p958_b"),
      g("غار ثور", "Cave of Thawr", "غار في جبل ثور مكثا فيه ثلاث ليال.", "A cave in Mount Thawr where they stayed three nights.", "bukhari_p957_b"),
      g("سراقة بن مالك بن جعشم", "Suraqah ibn Malik ibn Juʿshum", "من بني مدلج، خرج في طلبهما ثم طلب الأمان.", "Of Banu Mudlij; he pursued them and then asked for safe-conduct.", "bukhari_p958_a"),
      g("بنو عمرو بن عوف", "Banu ʿAmr ibn ʿAwf", "نزل فيهم النبي ﷺ بضع عشرة ليلة وأسّس المسجد الذي أُسّس على التقوى.", "Where the Prophet ﷺ stayed some ten-plus nights and founded the mosque built on piety.", "bukhari_p959_b"),
    ]),
    card("learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
      "تأمل لا رواية: خاف أبو بكر في الغار أن يبصرهم المشركون، فكان الجواب: «ما ظنك باثنين الله ثالثهما»، وعلى الطريق: «لا تحزن إن الله معنا». النصّان يقرنان الخوف الطبيعي بالطمأنينة إلى معية الله.",
      "A reflection, not a report: in the cave Abu Bakr feared the pursuers would see them and was answered 'What do you think of two whose third is Allah?'; on the road, 'Do not grieve, Allah is with us.' Both texts pair natural fear with reassurance in Allah's company.",
      [ci("bukhari_p898", B)]),
  ],
  quiz: [
    q("q1", "waiting", "كم شهرًا علف أبو بكر راحلتيه استعدادًا للهجرة؟", "For how many months did Abu Bakr feed his two camels in preparation?", [["أربعة أشهر", "Four months"], ["شهرين", "Two months"], ["سنة", "A year"]], 0, "صحيح البخاري ص٩٥٧.", "Sahih al-Bukhari p. 957."),
    q("q2", "thawr", "كم ليلة مكثا في غار ثور؟", "How many nights did they stay in the cave of Thawr?", [["ثلاث ليال", "Three"], ["سبع ليال", "Seven"], ["ليلة واحدة", "One"]], 0, "«فكمنا فيه ثلاث ليال».", "'They stayed hidden there three nights.'"),
    q("q3", "nitaq", "لماذا سُمّيت أسماء «ذات النطاقين»؟", "Why was Asmaʾ called 'she of the two waistbands'?", [["شقّت نطاقها لتربط به السفرة", "She split her waistband to tie the provisions"], ["لأنها حملت سيفين", "She carried two swords"], ["لقب أبيها", "Her father's title"]], 0, "صحيح البخاري ص٩٥٩.", "Sahih al-Bukhari p. 959."),
    q("q4", "road", "من كتب لسراقة كتاب الأمن بحسب البخاري؟", "Who wrote Suraqah's safe-conduct according to al-Bukhari?", [["عامر بن فهيرة", "ʿAmir ibn Fuhayrah"], ["علي بن أبي طالب", "ʿAli ibn Abi Talib"], ["عبد الله بن أبي بكر", "ʿAbdullah ibn Abi Bakr"]], 0, "«فأمر عامر بن فهيرة فكتب في رقعة من أدم».", "'He told ʿAmir ibn Fuhayrah, who wrote on a piece of leather.'"),
    q("q5", "arrival", "كيف عرف الأنصار النبيَّ ﷺ عند قدومه؟", "How did the Ansar recognise the Prophet ﷺ on arrival?", [["حين ظلّل عليه أبو بكر بردائه", "When Abu Bakr shaded him with his cloak"], ["حين خطب فيهم", "When he addressed them"], ["حين نزل عن ناقته", "When he dismounted"]], 0, "صحيح البخاري ص٩٥٩.", "Sahih al-Bukhari p. 959."),
  ],
};

export const ext05: LessonExtension = {
  after: {
    uhud: [
      card("water", "narrative", "سقي الجرحى", "Carrying water",
        "في موضع من صحيح البخاري (ص٩٩٧) قال الراوي: رأيت عائشة بنت أبي بكر وأم سليم مشمّرتين تحملان القِرَب على متونهما فتفرغانها في أفواه القوم ثم ترجعان فتملآنها.",
        "In a passage of Sahih al-Bukhari (p. 997) the narrator says he saw ʿAʾishah bint Abi Bakr and Umm Sulaym with their garments tucked up, carrying waterskins on their backs and pouring water into the people's mouths, then going back to refill them.",
        [ci("bukhari_p997", B)],
        [fl("gap", "المقطع الموثق لا يسمّي الغزوة ولا الراوي؛ نُقل ضمن مقاطع أُحد في ملف البحث، لكن لم نذكر اسم الغزوة لعدم وروده في النص.", "The verified extract names neither the battle nor the narrator; the research file groups it with Uhud, but we do not name the battle because the text does not.")]),
    ],
  },
  append: [
    card("glossary", "glossary", "مسرد المصطلحات", "Glossary", "تعريفات مأخوذة مما تقوله المقاطع نفسها.", "Definitions taken from what the passages themselves say.", [], undefined, [
      g("العريش", "The shelter (ʿarish)", "الموضع الذي رجع إليه النبي ﷺ يوم بدر بعد تعديل الصفوف ومعه أبو بكر وحده.", "Where the Prophet ﷺ returned at Badr after straightening the ranks, with only Abu Bakr.", "ibn_hisham_p300"),
      g("الشِّعب", "The mountain pass", "نهض المسلمون بالنبي ﷺ نحوه يوم أحد.", "The Muslims rose with the Prophet ﷺ toward it at Uhud.", "ibn_hisham_p388"),
      g("سعد بن الربيع", "Saʿd ibn al-Rabiʿ", "من النقباء يوم العقبة، شهد بدرًا واستشهد يوم أحد.", "One of the leaders at ʿAqabah; fought at Badr and was martyred at Uhud.", "ibn_hisham_p395"),
      g("خزاعة", "Khuzaʿah", "كان مسلمهم ومشركهم «عيبة نصح» لرسول الله ﷺ بتهامة.", "Their Muslims and idolaters alike were 'trusted well-wishers' of the Messenger ﷺ in Tihamah.", "ibn_hisham_p398"),
    ]),
    card("learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
      "تأمل لا رواية: قال أبو بكر عن طفلة سعد بن الربيع: «هذه بنت رجل خير مني»، ثم عدّد سبب ذلك: العقبة وبدر والشهادة يوم أحد. النص يُظهر أنه كان يقيس الفضل بالسابقة والبذل لا بالمنصب.",
      "A reflection, not a report: Abu Bakr said of Saʿd ibn al-Rabiʿ's little daughter 'She is the daughter of a man better than me', and gave his reasons: ʿAqabah, Badr and martyrdom at Uhud. The text shows he measured merit by precedence and sacrifice, not position.",
      [ci("ibn_hisham_p395")]),
  ],
  quiz: [
    q("q1", "badr", "من كان مع النبي ﷺ في العريش يوم بدر؟", "Who was with the Prophet ﷺ in the shelter at Badr?", [["أبو بكر وحده", "Abu Bakr alone"], ["عمر وعلي", "ʿUmar and ʿAli"], ["لا أحد", "No one"]], 0, "«ومعه فيه أبو بكر ليس معه فيه غيره».", "'With him was Abu Bakr; no one else.'"),
    q("q2", "uhud", "في من نزلت ﴿الَّذِينَ اسْتَجَابُوا لِلَّهِ وَالرَّسُولِ﴾ بحسب عائشة لعروة؟", "Per ʿAʾishah to ʿUrwah, who were 'those who responded to Allah and the Messenger'?", [["سبعون فيهم أبو بكر والزبير", "Seventy, among them Abu Bakr and al-Zubayr"], ["أهل بدر جميعًا", "All the people of Badr"], ["الأنصار وحدهم", "The Ansar alone"]], 0, "صحيح البخاري ٤٠٧٧.", "Sahih al-Bukhari 4077."),
    q("q3", "gaps", "لماذا لا يذكر الدرس دور أبي بكر في تبوك؟", "Why does the lesson not mention Abu Bakr's role at Tabuk?", [["لأن المقاطع الموثقة عن تبوك لا تذكره", "The verified Tabuk passages do not mention him"], ["لأنه لم يشهدها", "He did not take part"], ["لأنها غير مهمة", "It is unimportant"]], 0, "فجوة توثيق، لا نفيٌ للواقعة.", "A sourcing gap — not a denial of the event."),
  ],
};

export const ext06: LessonExtension = {
  after: {
    prayer: [
      card("zama", "narrative", "قصة عبد الله بن زمعة كاملة", "ʿAbdullah ibn Zamʿah's full account",
        "قال عبد الله بن زمعة: لما اشتد المرض بالنبي ﷺ دعاه بلال إلى الصلاة، فقال: «مروا من يصلّي بالناس». فخرجت فإذا عمر في الناس وأبو بكر غائب، فقلت: قم يا عمر فصلّ. فلما كبّر سمع النبي ﷺ صوته، وكان عمر مجهرًا، فقال: «فأين أبو بكر؟ يأبى الله ذلك والمسلمون». فبُعث إلى أبي بكر فجاء بعد أن صلّى عمر تلك الصلاة فصلّى بالناس. فقال عمر لعبد الله: ما ظننت إلا أن رسول الله ﷺ أمرك بذلك، فقال: ما أمرني، ولكن لم أرَ أبا بكر فرأيتك أحقّ من حضر.",
        "ʿAbdullah ibn Zamʿah said: when the Prophet's ﷺ illness grew severe Bilal called him to prayer, and he said 'Tell someone to lead the people.' I went out and found ʿUmar among the people, Abu Bakr being absent, and said: 'ʿUmar, lead the prayer.' When he said the takbir the Prophet ﷺ heard his voice — ʿUmar had a loud voice — and said: 'Where is Abu Bakr? Allah and the Muslims refuse that.' Abu Bakr was sent for and came after ʿUmar had led that prayer, and then led the people. ʿUmar told ʿAbdullah he had assumed the Messenger ﷺ ordered it; ʿAbdullah said he had not — but not seeing Abu Bakr, he thought ʿUmar the most deserving of those present.",
        [ci("ibn_hisham_p666_a")]),
    ],
  },
  append: [
    card("glossary", "glossary", "مسرد المصطلحات", "Glossary", "تعريفات مأخوذة مما تقوله المقاطع نفسها.", "Definitions taken from what the passages themselves say.", [], undefined, [
      g("السُّنْح", "al-Sunh", "موضع أهل أبي بكر، خرج إليه بإذن النبي ﷺ يوم الإثنين.", "Where Abu Bakr's family lived; he went there with the Prophet's ﷺ leave on the Monday.", "ibn_hisham_p667_b"),
      g("بنت خارجة", "Bint Kharijah", "زوجته التي قال: «اليوم يوم بنت خارجة».", "His wife; he said 'today is Bint Kharijah's day'.", "ibn_hisham_p667_b"),
      g("الفضل بن العباس", "al-Fadl ibn al-ʿAbbas", "أحد الرجلين اللذين مشى النبي ﷺ بينهما إلى بيت عائشة.", "One of the two men between whom the Prophet ﷺ walked to ʿAʾishah's house.", "ibn_hisham_p664_b"),
    ]),
    card("learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
      "تأمل لا رواية: قال أبو سعيد: «وكان أبو بكر أعلمنا» — فالنص نفسه يجعل بكاء أبي بكر دليل فهمه لما خفي على الحاضرين من قول النبي ﷺ.",
      "A reflection, not a report: Abu Saʿid says 'Abu Bakr understood best of us' — the text itself presents his weeping as evidence that he grasped what the others missed in the Prophet's ﷺ words.",
      [ci("bukhari_p899_a", B)]),
  ],
  quiz: [
    q("q1", "choice", "لماذا بكى أبو بكر حين ذكر النبي ﷺ العبد المخيَّر؟", "Why did Abu Bakr weep when the Prophet ﷺ spoke of the servant given a choice?", [["فهم أن النبي ﷺ هو المخيَّر", "He understood the Prophet ﷺ himself was the one given the choice"], ["لأنه مرض", "He was ill"], ["لأنه لم يُذكر", "He was not mentioned"]], 0, "قال أبو سعيد: «وكان رسول الله ﷺ هو المخيَّر، وكان أبو بكر أعلمنا».", "Abu Saʿid: 'The Messenger ﷺ was the one given the choice, and Abu Bakr understood best.'"),
    q("q2", "prayer", "بماذا اعتذرت عائشة عن أبيها لإمامة الصلاة؟", "What reason did ʿAʾishah give against her father leading prayer?", [["رقيق الصوت كثير البكاء إذا قرأ", "Soft-voiced and weeping much when reciting"], ["أنه مسافر", "He was travelling"], ["أنه مريض", "He was ill"]], 0, "ابن هشام ص٦٦٦.", "Ibn Hisham p. 666."),
    q("q3", "monday", "ماذا فعل النبي ﷺ حين نكص أبو بكر عن مصلّاه يوم الإثنين؟", "What did the Prophet ﷺ do when Abu Bakr stepped back on the Monday?", [["دفعه في ظهره وقال: صلّ بالناس", "Pushed him forward and said 'Lead the people'"], ["تقدّم وأمّ الناس قائمًا", "Stepped forward and led standing"], ["رجع إلى بيته", "Returned home"]], 0, "ابن هشام ص٦٦٧.", "Ibn Hisham p. 667."),
    q("q4", "succession", "ما حكم المحقق على حديث «ادعي لي أباك وأخاك حتى أكتب كتابًا»؟", "How did the editor grade 'Call your father and brother so I can write a document'?", [["صحيح", "Sahih"], ["ضعيف", "Weak"], ["موضوع", "Fabricated"]], 0, "«هذا حديث صحيح» — سير أعلام النبلاء ص١٢.", "'This hadith is sahih' — Siyar p. 12."),
  ],
};

// Extra citations attached to existing cards (unused index passages that support those cards).
export const extraCitations: Record<number, Record<string, Citation[]>> = {
  1: { name: [ci("siyar_p7_c")], standing: [ci("fadail_p65_c")], rank: [ci("fadail_p65_d")], closeness: [ci("fadail_p70", "editor_very_weak")] },
  4: { arrival: [ci("bukhari_p959_d", B)], two: [ci("ibn_hisham_p224_c", "no_chain_stated")] },
  5: { gaps: [ci("ibn_hisham_p503"), ci("ibn_hisham_p597"), ci("ibn_hisham_p598"), ci("ibn_hisham_p398")] },
  6: { succession: [ci("siyar_p12_a", "editor_weak")] },
};
