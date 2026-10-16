import type { ScratchLesson } from "./types";

export const lesson04: ScratchLesson = {
  number: 4, slug: "lesson-4", status: "internal_unapproved",
  title: { ar: "صاحب الغار", en: "The Companion of the Cave" },
  cards: [
    { id: "waiting", kind: "hook",
      title: { ar: "«على رِسْلك»", en: "'Wait a while'" },
      body: {
        ar: "أخبر النبي ﷺ المسلمين أنه أُري دار هجرتهم ذات نخل بين لابتين، فهاجر من هاجر قِبَل المدينة. وتجهّز أبو بكر للهجرة، فقال له النبي ﷺ: «على رِسْلك، فإني أرجو أن يُؤذن لي». فحبس أبو بكر نفسه على رسول الله ﷺ ليصحبه، وعلف راحلتين كانتا عنده ورق السَّمُر أربعة أشهر.",
        en: "The Prophet ﷺ told the Muslims he had been shown the place of their emigration, a land of palms between two lava fields, and those who emigrated set out toward Madinah. Abu Bakr prepared to emigrate too, but the Prophet ﷺ said: 'Wait a while, for I hope to be given permission.' So Abu Bakr held himself back to accompany the Messenger ﷺ and fed two riding camels he owned on samur leaves for four months.",
      },
      citations: [ { key: "bukhari_p957_c", grading: "in_sahih_bukhari" } ],
    },
    { id: "permission", kind: "context",
      title: { ar: "«الصحابةَ يا رسول الله؟»", en: "'Companionship, O Messenger of Allah?'" },
      body: {
        ar: "قالت عائشة: بينما نحن جلوس في بيت أبي بكر في نحر الظهيرة جاء رسول الله ﷺ متقنّعًا في ساعة لم يكن يأتي فيها، فقال أبو بكر: فداء له أبي وأمي، والله ما جاء به في هذه الساعة إلا أمر. فقال ﷺ: «فإني قد أُذن لي في الخروج». فقال أبو بكر: الصحابةَ بأبي أنت يا رسول الله؟ قال: «نعم». وعرض عليه إحدى راحلتيه، فقال ﷺ: «بالثمن».",
        en: "ʿAʾishah said: while we were sitting in Abu Bakr's house at the height of noon, the Messenger ﷺ came with his head covered, at an hour he did not usually come. Abu Bakr said: 'May my father and mother be his ransom — only something important brings him at this hour.' The Prophet ﷺ said: 'I have been given permission to leave.' Abu Bakr asked: 'Companionship, may my father be your ransom?' He said: 'Yes.' Abu Bakr offered him one of his two camels, and he said: 'For its price.'",
      },
      citations: [ { key: "bukhari_p957_a", grading: "in_sahih_bukhari" } ],
    },
    { id: "nitaq", kind: "facts",
      title: { ar: "ذات النطاقين", en: "She of the two waistbands" },
      body: {
        ar: "جهّزوا لهما سفرة في جراب، فشقّت أسماء بنت أبي بكر نطاقها فربطت به فم الجراب، فسُمّيت «ذات النطاقين». وفي رواية أسماء نفسها: قالت لأبيها لا أجد ما أربطه إلا نطاقي، فقال: «فشقّيه».",
        en: "They prepared provisions in a leather bag, and Asmaʾ bint Abi Bakr cut her waistband to tie its mouth, so she was named 'she of the two waistbands'. In Asmaʾ's own account, she told her father she could find nothing to tie it with but her waistband, and he said: 'Split it.'",
      },
      citations: [
        { key: "bukhari_p957_d", grading: "in_sahih_bukhari" },
        { key: "bukhari_p959_c", grading: "in_sahih_bukhari" },
        { key: "ibn_hisham_p224_a", grading: "grading_unverified" },
      ],
      flags: [
        { kind: "conflict", text: { ar: "اختلاف يسير في اللفظ: «ذات النطاق» (ابن عباس، وابن إسحاق) و«ذات النطاقين» (أسماء نفسها، وابن هشام عن أهل العلم).", en: "Minor difference in wording: 'of the waistband' (Ibn ʿAbbas; Ibn Ishaq) versus 'of the two waistbands' (Asmaʾ herself; Ibn Hisham citing scholars)." } },
      ],
    },
    { id: "thawr", kind: "context",
      title: { ar: "ثلاث ليال في غار ثور", en: "Three nights in the cave of Thawr" },
      body: {
        ar: "لحق النبي ﷺ وأبو بكر بغار في جبل ثور فمكثا فيه ثلاث ليال. كان عبد الله بن أبي بكر — وهو شاب فطن — يبيت عندهما ثم يصبح مع قريش بمكة فيسمع ما يدبّرون ويأتيهما بالخبر عند الظلام، وكان عامر بن فهيرة مولى أبي بكر يرعى عليهما غنمًا فيريحها عليهما فيشربان من لبنها.",
        en: "The Prophet ﷺ and Abu Bakr reached a cave in Mount Thawr and stayed there three nights. ʿAbdullah ibn Abi Bakr, a sharp young man, would spend the night with them, then be among Quraysh in Makkah by morning, listen to what they were plotting and bring them the news after dark. ʿAmir ibn Fuhayrah, Abu Bakr's freedman, grazed sheep nearby and brought them in the evening so the two could drink their milk.",
      },
      citations: [ { key: "bukhari_p957_b", grading: "in_sahih_bukhari" } ],
    },
    { id: "two", kind: "reflection",
      title: { ar: "«ما ظنّك باثنين الله ثالثهما»", en: "'What do you think of two, the third of whom is Allah?'" },
      body: {
        ar: "قال أبو بكر: قلت للنبي ﷺ وأنا في الغار: لو أن أحدهم نظر تحت قدميه لأبصرنا. فقال: «ما ظنك يا أبا بكر باثنين الله ثالثهما». وقد ذكر البخاري في باب مناقب المهاجرين أن أبا بكر كان مع النبي ﷺ في الغار، من رواية عائشة وأبي سعيد وابن عباس.",
        en: "Abu Bakr said: I said to the Prophet ﷺ while in the cave: 'If one of them looked beneath his feet he would see us.' He replied: 'What do you think, Abu Bakr, of two whose third is Allah?' Al-Bukhari's chapter on the virtues of the Muhajirun notes, from ʿAʾishah, Abu Saʿid and Ibn ʿAbbas, that Abu Bakr was with the Prophet ﷺ in the cave.",
      },
      citations: [ { key: "bukhari_p898", excerpt: "٣٦٥٣ - حدَّثنا محمدُ بن سِنان حدَّثنا هَمَّامٌ عن ثابت عن أنس عن أبي بكر رضي الله عنه قال: قلتُ للنبي ﷺ وأنا في الغار: لو أنّ أحدَهم نظر تحت قدَمَيه لأبصرَنا. فقال: ما ظنُّك يا أبا بكر باثنين الله ثالثُهما.", grading: "in_sahih_bukhari" } ],
      flags: [
        { kind: "no_chain", text: { ar: "خبر دخول أبي بكر الغار قبل النبي ﷺ ليتفقده من السباع والحيات نقله ابن هشام عن «بعض أهل العلم» عن الحسن البصري، بلا إسناد متصل؛ لم نعتمد عليه في نص الدرس.", en: "The report that Abu Bakr entered the cave first to check it for animals and snakes is relayed by Ibn Hisham from 'some scholars' citing al-Hasan al-Basri, with no connected chain; not used in the lesson text." } },
      ],
    },
    { id: "road", kind: "context",
      title: { ar: "الطريق وسراقة", en: "The road and Suraqah" },
      body: {
        ar: "استأجرا دليلًا ماهرًا من بني الدِّيل وهو على دين قريش فأمِناه، ومضى معهما عامر بن فهيرة، وأخذ بهم طريق السواحل. وفي الطريق فرش أبو بكر للنبي ﷺ في ظل صخرة وجاءه بلبن، ثم لحقهما سراقة بن مالك على فرس، فقال أبو بكر: هذا الطلب قد لحقنا، فقال ﷺ: «لا تحزن، إن الله معنا». وحكى سراقة أن قريشًا جعلت فيهما الدية، وأن قوائم فرسه ساخت في الأرض مرتين، فطلب الأمان، فكتب له عامر بن فهيرة كتاب أمن.",
        en: "They hired a skilled guide from Banu al-Dil who still followed Quraysh's religion but whom they trusted; ʿAmir ibn Fuhayrah went with them and the guide took the coastal route. On the way Abu Bakr spread a place for the Prophet ﷺ in the shade of a rock and brought him milk. Then Suraqah ibn Malik caught up on horseback; Abu Bakr said 'the pursuers have reached us', and the Prophet ﷺ said: 'Do not grieve; Allah is with us.' Suraqah related that Quraysh had offered the blood-price for each of them, that his horse's legs sank into the ground twice, and that he asked for safe-conduct, which ʿAmir ibn Fuhayrah wrote for him.",
      },
      citations: [
        { key: "bukhari_p958_b", grading: "in_sahih_bukhari" },
        { key: "bukhari_p898", excerpt: "فلم يُدركْنا أحدٌ منهم غير سُراقة بن مالك بن جُعشم على فرسٍ له، فقلتُ: هذا الطلَبُ قد لحِقَنا يا رسولَ الله، فقال: لا تحزَنْ، إنّ اللهَ معنا.", grading: "in_sahih_bukhari" },
        { key: "bukhari_p958_a", grading: "in_sahih_bukhari" },
        { key: "ibn_hisham_p226", grading: "grading_unverified" },
      ],
      flags: [
        { kind: "conflict", text: { ar: "في البخاري: جعلت قريش «دية كل واحد منهما»، وعند ابن إسحاق: «مائة ناقة لمن ردّه». والمقطع الموثق من ابن هشام لا يسمّي كاتب كتاب الأمان.", en: "Al-Bukhari: Quraysh offered 'the blood-price of each of them'; Ibn Ishaq: 'a hundred she-camels to whoever brought him back'. The verified Ibn Hisham extract does not name who wrote the safe-conduct." } },
      ],
    },
    { id: "arrival", kind: "context",
      title: { ar: "الوصول إلى المدينة", en: "Arrival in Madinah" },
      body: {
        ar: "كان المسلمون في المدينة يخرجون كل غداة إلى الحرّة ينتظرونه حتى يردّهم حرّ الظهيرة. ونزل النبي ﷺ في بني عمرو بن عوف يوم الإثنين من شهر ربيع الأول. وقام أبو بكر للناس وجلس النبي ﷺ صامتًا، فجعل من لم يره من الأنصار يحيّي أبا بكر، حتى أصابت الشمس رسول الله ﷺ فظلّل عليه أبو بكر بردائه، فعرفه الناس عند ذلك. وكان أبو بكر يُسأل في الطريق: من هذا الرجل بين يديك؟ فيقول: «هذا الرجل يهديني السبيل».",
        en: "The Muslims of Madinah went out every morning to the lava field to wait for him until the noon heat drove them back. The Prophet ﷺ arrived among Banu ʿAmr ibn ʿAwf on a Monday in Rabiʿ al-Awwal. Abu Bakr stood to receive people while the Prophet ﷺ sat silent, and Ansar who had never seen the Prophet greeted Abu Bakr — until the sun fell on the Messenger ﷺ and Abu Bakr shaded him with his cloak, and then people recognised him. On the road, when asked 'Who is this man ahead of you?', Abu Bakr would say: 'This man guides me on the way.'",
      },
      citations: [
        { key: "bukhari_p959_a", grading: "in_sahih_bukhari" },
        { key: "bukhari_p959_b", grading: "in_sahih_bukhari" },
        { key: "ibn_hisham_p227", grading: "grading_unverified" },
        { key: "bukhari_p960_b", grading: "in_sahih_bukhari" },
      ],
    },
    { id: "family-left", kind: "reflection",
      title: { ar: "ما تركه لأهله", en: "What he left his family" },
      body: {
        ar: "روت أسماء أن أبا بكر حمل ماله كله معه — خمسة آلاف درهم أو ستة — فدخل جدّها أبو قحافة، وقد ذهب بصره، فقال: أراه قد فجعكم بماله مع نفسه. فوضعت أحجارًا في كوّة كان أبوها يضع فيها ماله وغطّتها بثوب، ووضعت يده عليها ليطمئن، قالت: ولا والله ما ترك لنا شيئًا، ولكني أردت أن أسكّن الشيخ.",
        en: "Asmaʾ related that Abu Bakr took all his money with him — five or six thousand dirhams. Her grandfather Abu Quhafah, who had lost his sight, came in and said: 'I think he has hurt you by taking his money as well as himself.' She put stones in the niche where her father kept his money, covered them with a cloth and placed the old man's hand on them to reassure him. She said: 'By Allah, he left us nothing; I only wanted to calm the old man.'",
      },
      citations: [ { key: "ibn_hisham_p225", grading: "umari_hasan_chain" }, { key: "umari_p211", grading: "umari_hasan_chain" } ],
    },
  ],
};

export const lesson05: ScratchLesson = {
  number: 5, slug: "lesson-5", status: "internal_unapproved",
  title: { ar: "أبو بكر في المدينة", en: "Abu Bakr in Madinah" },
  cards: [
    { id: "badr", kind: "hook",
      title: { ar: "في العريش يوم بدر", en: "In the shelter at Badr" },
      body: {
        ar: "ذكر ابن إسحاق أن النبي ﷺ عدّل الصفوف يوم بدر ثم رجع إلى العريش ومعه أبو بكر وحده، والنبي ﷺ يناشد ربه ما وعده من النصر، فقال أبو بكر: يا نبي الله، بعض مناشدتك ربك، فإن الله منجز لك ما وعدك. ثم قال النبي ﷺ: «أبشر يا أبا بكر، أتاك نصر الله».",
        en: "Ibn Ishaq reports that at Badr the Prophet ﷺ straightened the ranks and returned to the shelter with Abu Bakr alone, imploring his Lord for the victory He had promised. Abu Bakr said: 'O Prophet of Allah, enough of your imploring; Allah will fulfil what He promised you.' Then the Prophet ﷺ said: 'Glad tidings, Abu Bakr — Allah's help has come to you.'",
      },
      citations: [ { key: "ibn_hisham_p300", grading: "grading_unverified" }, { key: "umari_p362", grading: "umari_cites_muslim" } ],
    },
    { id: "uhud", kind: "context",
      title: { ar: "يوم أُحد", en: "The day of Uhud" },
      body: {
        ar: "لما عرف المسلمون رسول الله ﷺ يوم أحد نهضوا به نحو الشِّعب، ومعه أبو بكر وعمر وعلي وطلحة والزبير ورهط من المسلمين. وروى ابن هشام عن عائشة عن أبي بكر أن أبا عبيدة بن الجراح نزع حلقتي المغفر من وجه النبي ﷺ فسقطت ثنيّتاه، فكان أبو عبيدة ساقط الثنيتين. ولما خاف النبي ﷺ أن يرجع المشركون قال: «من يذهب في إثرهم؟» فانتدب سبعون رجلًا، فيهم أبو بكر والزبير، وفيهم نزل: ﴿الَّذِينَ اسْتَجَابُوا لِلَّهِ وَالرَّسُولِ﴾.",
        en: "When the Muslims recognised the Messenger ﷺ at Uhud, they rose with him toward the mountain pass, with Abu Bakr, ʿUmar, ʿAli, Talhah, al-Zubayr and a group of Muslims. Ibn Hisham reports, from ʿAʾishah from Abu Bakr, that Abu ʿUbaydah ibn al-Jarrah pulled the two rings of the helmet from the Prophet's ﷺ face and lost his own front teeth doing so. When the Prophet ﷺ feared the idolaters would return, he asked 'Who will go after them?' and seventy men volunteered, among them Abu Bakr and al-Zubayr; about them came 'Those who responded to Allah and the Messenger…' (3:172).",
      },
      citations: [
        { key: "ibn_hisham_p388", grading: "grading_unverified" },
        { key: "ibn_hisham_p387", grading: "grading_unverified" },
        { key: "bukhari_p1001", grading: "in_sahih_bukhari" },
      ],
    },
    { id: "sad", kind: "reflection",
      title: { ar: "«بنت رجل خير مني»", en: "'The daughter of a man better than me'" },
      body: {
        ar: "روى ابن هشام أن رجلًا دخل على أبي بكر وعلى صدره بنت صغيرة لسعد بن الربيع يقبّلها، فسأله عنها فقال: هذه بنت رجل خير مني، سعد بن الربيع، كان من النقباء يوم العقبة، وشهد بدرًا، واستُشهد يوم أحد.",
        en: "Ibn Hisham reports that a man visited Abu Bakr and found the young daughter of Saʿd ibn al-Rabiʿ on his chest as he kissed her. Asked who she was, he said: 'The daughter of a man better than me — Saʿd ibn al-Rabiʿ, one of the leaders at ʿAqabah, who fought at Badr and was martyred at Uhud.'",
      },
      citations: [ { key: "ibn_hisham_p395", grading: "grading_unverified" } ],
      flags: [
        { kind: "no_chain", text: { ar: "رواه ابن هشام عن أبي بكر الزبيري (راوٍ آخر غير الصديق) دون إسناد متصل إلى الواقعة.", en: "Ibn Hisham relays it from Abu Bakr al-Zubayri (a different narrator, not al-Siddiq) without a connected chain to the event." } },
      ],
    },
    { id: "hajj", kind: "facts",
      title: { ar: "إمارة الحج", en: "Leading the Hajj" },
      body: {
        ar: "عقد ابن هشام فصلًا بعنوان «حجّ أبي بكر بالناس، واختصاص النبي ﷺ عليًّا بتأدية أول براءة عنه»، وفيه أن عليًّا قام يوم النحر فأذّن في الناس: لا يدخل الجنة كافر، ولا يحج بعد العام مشرك، ولا يطوف بالبيت عريان.",
        en: "Ibn Hisham has a section titled 'Abu Bakr leading the people in Hajj, and the Prophet ﷺ assigning ʿAli to proclaim the opening of Baraʾah on his behalf', in which ʿAli stood on the Day of Sacrifice and proclaimed: no disbeliever will enter Paradise, no idolater will perform Hajj after this year, and no one will circle the House naked.",
      },
      citations: [
        { key: "ibn_hisham_p611", grading: "grading_unverified" },
        { key: "ibn_hisham_p613", grading: "grading_unverified" },
      ],
      flags: [
      ],
    },
    { id: "gaps", kind: "summary",
      title: { ar: "ما لم نوثّقه بعد", en: "What is not yet sourced" },
      body: {
        ar: "أُضيفت نصوص الحديبية وتبوك وفتح مكة وسنة الحجة (٩ هـ) في البطاقات السابقة من كتب أُرسلت حديثًا. وما زال دور أبي بكر في غزوة الخندق غير موثّق، ولن يُضاف حتى يُستخرج نصه.",
        en: "Hudaybiyyah, Tabuk, the Conquest of Makkah and the year of the Hajj (9 AH) are now covered in the cards above, from newly supplied books. Abu Bakr's role at the Trench is still unsourced and will be added only once its text is extracted.",
      },
      citations: [],
      flags: [
        { kind: "gap", text: { ar: "لم نجد بعد نصًّا عن دور أبي بكر في غزوة الخندق.", en: "No passage on Abu Bakr's role at the Trench has been found yet." } },
      ],
    },
  ],
};

export const lesson06: ScratchLesson = {
  number: 6, slug: "lesson-6", status: "internal_unapproved",
  title: { ar: "مرض النبي ﷺ الأخير", en: "The Final Illness of the Prophet ﷺ" },
  cards: [
    { id: "choice", kind: "hook",
      title: { ar: "عبدٌ خيّره الله", en: "A servant given a choice" },
      body: {
        ar: "خطب النبي ﷺ فقال: «إن الله خيّر عبدًا بين الدنيا وبين ما عنده فاختار ذلك العبد ما عند الله»، فبكى أبو بكر. قال أبو سعيد: فعجبنا لبكائه، وكان رسول الله ﷺ هو المخيَّر، وكان أبو بكر أعلمنا. وعند ابن إسحاق أن ذلك كان في مرضه، وأنه ﷺ قال: «على رِسلك يا أبا بكر»، وأمر بسدّ الأبواب إلا باب أبي بكر.",
        en: "The Prophet ﷺ said in a sermon: 'Allah gave a servant the choice between this world and what is with Him, and that servant chose what is with Allah.' Abu Bakr wept. Abu Saʿid said: we were surprised at his weeping — but the Messenger ﷺ was the one given the choice, and Abu Bakr understood best. Ibn Ishaq places this during his final illness and adds that the Prophet ﷺ said 'Gently, Abu Bakr', and ordered the doors closed except Abu Bakr's.",
      },
      citations: [
        { key: "bukhari_p899_a", grading: "in_sahih_bukhari" },
        { key: "ibn_hisham_p664_a", grading: "grading_unverified" },
      ],
    },
    { id: "aisha-house", kind: "facts",
      title: { ar: "إلى بيت عائشة", en: "To ʿAʾishah's house" },
      body: {
        ar: "قالت عائشة: خرج رسول الله ﷺ يمشي بين رجلين من أهله، أحدهما الفضل بن العباس، عاصبًا رأسه، تخطّ قدماه، حتى دخل بيتي.",
        en: "ʿAʾishah said: the Messenger ﷺ came out walking between two men of his family, one of them al-Fadl ibn al-ʿAbbas, his head bound, his feet dragging, until he entered my house.",
      },
      citations: [ { key: "ibn_hisham_p664_b", grading: "grading_unverified" } ],
    },
    { id: "prayer", kind: "context",
      title: { ar: "«مروا أبا بكر فليصلّ بالناس»", en: "'Tell Abu Bakr to lead the people in prayer'" },
      body: {
        ar: "لما اشتد به المرض قال: «مروا أبا بكر فليصلّ بالناس». فقالت عائشة: إن أبا بكر رجل رقيق الصوت كثير البكاء إذا قرأ القرآن، فأعاد الأمر، فلما راجعته قال: «إنكن صواحب يوسف، فمروه فليصلّ بالناس». وذكرت أنها إنما أرادت أن يُصرف ذلك عن أبيه خشية أن يتشاءم الناس به. وفي خبر عبد الله بن زمعة أن عمر تقدّم مرةً في غياب أبي بكر، فلما سمع النبي ﷺ صوته قال: «فأين أبو بكر؟ يأبى الله ذلك والمسلمون»، فبُعث إلى أبي بكر فصلى بالناس.",
        en: "When his illness grew severe he said: 'Tell Abu Bakr to lead the people in prayer.' ʿAʾishah said Abu Bakr was soft-voiced and wept much when reciting; he repeated the order, and when she objected again he said: 'You are like the women with Yusuf — tell him to lead the people in prayer.' She explained she only wanted it turned away from her father, fearing people would see it as a bad omen. In ʿAbdullah ibn Zamʿah's report, ʿUmar once led in Abu Bakr's absence; hearing his voice the Prophet ﷺ said: 'Where is Abu Bakr? Allah and the Muslims refuse that', and Abu Bakr was sent for and led the people.",
      },
      citations: [
        { key: "ibn_hisham_p666_b", grading: "grading_unverified" },
        { key: "ibn_hisham_p666_a", grading: "grading_unverified" },
      ],
    },
    { id: "monday", kind: "context",
      title: { ar: "صبح يوم الإثنين", en: "The dawn prayer on Monday" },
      body: {
        ar: "خرج رسول الله ﷺ يوم الإثنين عاصبًا رأسه وأبو بكر يصلّي بالناس الصبح، فتفرّج الناس، فعرف أبو بكر أنهم لم يصنعوا ذلك إلا لرسول الله ﷺ فنكص عن مصلّاه، فدفعه ﷺ في ظهره وقال: «صلِّ بالناس»، وجلس عن يمينه فصلّى قاعدًا. ثم كلّم الناس، فقال له أبو بكر: أراك قد أصبحت بنعمة من الله وفضل كما نحب، فأذن له فخرج إلى أهله بالسُّنْح.",
        en: "On Monday the Messenger ﷺ came out with his head bound while Abu Bakr was leading the dawn prayer. People made way, and Abu Bakr, realising they did so only for the Messenger ﷺ, stepped back from his place; the Prophet ﷺ pushed him forward by his back, said 'Lead the people', and sat at his right, praying seated. Afterwards he addressed the people, and Abu Bakr said: 'I see you have woken by Allah's grace as we would wish'; he gave him leave and Abu Bakr went to his family at al-Sunh.",
      },
      citations: [
        { key: "ibn_hisham_p667_c", grading: "grading_unverified" },
        { key: "ibn_hisham_p667_b", grading: "grading_unverified" },
      ],
    },
    { id: "succession", kind: "reflection",
      title: { ar: "هل استخلفه؟", en: "Did he appoint him?" },
      body: {
        ar: "روى الذهبي عن عائشة أن النبي ﷺ قال لها في مرضه: «ادعي لي أباك وأخاك حتى أكتب كتابًا، فإني أخاف أن يتمنى متمنٍّ ويقول قائل، ويأبى الله والمؤمنون إلا أبا بكر»، وصحّحه المحقق. وفي المقابل نقل ابن إسحاق قول عمر عند وفاته: «إن أستخلف فقد استخلف من هو خير مني: أبو بكر، وإن أتركهم فقد تركهم من هو خير مني: رسول الله ﷺ»، فعرف الناس أن رسول الله ﷺ لم يستخلف أحدًا نصًّا.",
        en: "Al-Dhahabi reports from ʿAʾishah that in his illness the Prophet ﷺ told her: 'Call your father and brother so I can write a document, for I fear someone may wish and someone may say — yet Allah and the believers refuse anyone but Abu Bakr'; the editor graded it sahih. On the other hand Ibn Ishaq records ʿUmar's words at his own death: 'If I appoint a successor, one better than me — Abu Bakr — appointed; if I leave them, one better than me — the Messenger ﷺ — left them', and people understood that the Messenger ﷺ had not formally appointed anyone.",
      },
      citations: [
        { key: "siyar_p12_b", grading: "editor_sahih" },
        { key: "ibn_hisham_p667_d", grading: "grading_unverified" },
      ],
      flags: [
        { kind: "conflict", text: { ar: "النصان يتناولان مسألة الاستخلاف من جهتين؛ لم نجد في المقاطع الموثقة كلامًا يجمع بينهما، فيُترك للمراجعة العلمية.", en: "The two texts address succession from different angles; no reconciling passage was located, so it is left for scholarly review." } },
        { kind: "weak", text: { ar: "رواية أخرى «ادعوا لي أبا بكر وابنه فليكتب كتابًا» فيها مؤمل بن إسماعيل، قال المحقق: شيخ ضعيف يعتبر به عند المتابعة.", en: "Another version ('Call Abu Bakr and his son to write a document') includes Muʾammal ibn Ismaʿil, whom the editor calls a weak shaykh, only usable as corroboration." } },
      ],
    },
  ],
};
