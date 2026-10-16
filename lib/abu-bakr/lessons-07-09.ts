import type { ScratchLesson } from "./types";

export const lesson07: ScratchLesson = {
  number: 7, slug: "lesson-7", status: "internal_unapproved",
  title: { ar: "يوم وفاة النبي ﷺ", en: "The Day the Prophet ﷺ Died" },
  cards: [
    { id: "death", kind: "hook",
      title: { ar: "«بل الرفيق الأعلى»", en: "'Rather, the Highest Companion'" },
      body: {
        ar: "قالت عائشة: مات رسول الله ﷺ في يومها وفي بيتها ورأسه بين سَحْرها ونحرها. ودخل أخوها عبد الرحمن بن أبي بكر ومعه سواك، فرأته ينظر إليه، فأخذته فمضغته ثم أعطته إياه فاستنّ به. وكان آخر كلمة سمعتها منه: «بل الرفيق الأعلى من الجنة».",
        en: "ʿAʾishah said the Messenger ﷺ died on her day, in her house, with his head between her chest and neck. Her brother ʿAbd al-Rahman ibn Abi Bakr came in with a tooth-stick; she saw the Prophet look at it, took it, softened it with her teeth and gave it to him, and he used it. The last words she heard from him were: 'Rather, the Highest Companion in Paradise.'",
      },
      citations: [
        { key: "bukhari_p1091_c", grading: "in_sahih_bukhari" },
        { key: "ibn_hisham_p666_c", grading: "grading_unverified" },
        { key: "ibn_hisham_p667_a", grading: "grading_unverified" },
      ],
    },
    { id: "umar", kind: "context",
      title: { ar: "ما قاله عمر", en: "What ʿUmar said" },
      body: {
        ar: "قام عمر بن الخطاب فقال: إن رجالًا من المنافقين يزعمون أن رسول الله ﷺ قد توفي، وإنه والله ما مات ولكنه ذهب إلى ربه كما ذهب موسى بن عمران ثم رجع إلى قومه، وليرجعن رسول الله ﷺ.",
        en: "ʿUmar ibn al-Khattab stood and said that some hypocrites claimed the Messenger ﷺ had died, but by Allah he had not died; he had gone to his Lord as Musa ibn ʿImran went and returned to his people, and the Messenger ﷺ would return.",
      },
      citations: [ { key: "ibn_hisham_p668_c", grading: "grading_unverified" } ],
    },
    { id: "abubakr-arrives", kind: "context",
      title: { ar: "أبو بكر يأتي من السُّنْح", en: "Abu Bakr comes from al-Sunh" },
      body: {
        ar: "أقبل أبو بكر على فرس من مسكنه بالسُّنح، فلم يكلّم الناس حتى دخل على عائشة، فكشف عن وجه رسول الله ﷺ وهو مسجّى بثوب حِبَرة، ثم أكبّ عليه فقبّله وبكى، وقال: «بأبي أنت وأمي، والله لا يجمع الله عليك موتتين، أما الموتة التي كُتبت عليك فقد مُتّها».",
        en: "Abu Bakr rode from his home at al-Sunh and spoke to no one until he went in to ʿAʾishah. He uncovered the face of the Messenger ﷺ, who was covered with a striped cloak, bent over him, kissed him and wept, and said: 'May my father and mother be your ransom. By Allah, Allah will not bring two deaths upon you; the death that was written for you, you have now died.'",
      },
      citations: [
        { key: "bukhari_p1091_b", grading: "in_sahih_bukhari" },
        { key: "ibn_hisham_p668_a", grading: "grading_unverified" },
      ],
    },
    { id: "address", kind: "facts",
      title: { ar: "«من كان يعبد محمدًا…»", en: "'Whoever worshipped Muhammad…'" },
      body: {
        ar: "خرج أبو بكر وعمر يكلّم الناس، فقال: اجلس يا عمر، فأبى، فأقبل الناس إلى أبي بكر وتركوا عمر. فقال: «أما بعد، من كان منكم يعبد محمدًا ﷺ فإن محمدًا قد مات، ومن كان منكم يعبد الله فإن الله حيّ لا يموت»، ثم تلا: ﴿وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ﴾ [آل عمران: ١٤٤]. قال ابن عباس: والله لكأن الناس لم يعلموا أن الله أنزل هذه الآية حتى تلاها أبو بكر، فتلقّاها منه الناس كلهم.",
        en: "Abu Bakr came out while ʿUmar was addressing the people. He said 'Sit down, ʿUmar', but ʿUmar refused, and the people turned to Abu Bakr and left ʿUmar. He said: 'Whoever among you worshipped Muhammad ﷺ, Muhammad has died; and whoever worshipped Allah, Allah is Ever-Living and does not die.' Then he recited: 'Muhammad is but a messenger; messengers have passed away before him…' (3:144). Ibn ʿAbbas said: it was as if people had not known Allah revealed this verse until Abu Bakr recited it, and then everyone took it from him.",
      },
      citations: [
        { key: "bukhari_p1091_a", grading: "in_sahih_bukhari" },
        { key: "ibn_hisham_p668_b", grading: "grading_unverified" },
      ],
      flags: [
        { kind: "conflict", text: { ar: "في البخاري قول «فعقرت حتى…» منسوب إلى عمر (عن سعيد بن المسيب)، وفي مقطع ابن هشام منسوب إلى أبي هريرة. لم نرجّح بينهما.", en: "In al-Bukhari the words 'I was so stunned that [I fell]…' are attributed to ʿUmar (via Saʿid ibn al-Musayyib); in the Ibn Hisham extract they are attributed to Abu Hurayrah. Not resolved here." } },
      ],
    },
    { id: "aisha", kind: "reflection",
      title: { ar: "حزن عائشة", en: "ʿAʾishah's grief" },
      body: {
        ar: "قالت عائشة: مات رسول الله ﷺ بين سحري ونحري وفي دولتي، ثم وضعت رأسه على وسادة وقمت ألتدم مع النساء وأضرب وجهي، وعدّت ذلك من سفهها وحداثة سنها.",
        en: "ʿAʾishah said: the Messenger ﷺ died between my chest and neck, on my day; then I laid his head on a pillow and got up to beat my face with the women — and she counted that as the foolishness of her young age.",
      },
      citations: [ { key: "ibn_hisham_p668_d", grading: "grading_unverified" } ],
    },
  ],
};

export const lesson08: ScratchLesson = {
  number: 8, slug: "lesson-8", status: "internal_unapproved",
  title: { ar: "الخليفة الأول", en: "The First Caliph" },
  cards: [
    { id: "saqifah", kind: "hook",
      title: { ar: "سقيفة بني ساعدة", en: "The Saqifah of Banu Saʿidah" },
      body: {
        ar: "اجتمعت الأنصار إلى سعد بن عبادة في سقيفة بني ساعدة وقالوا: منا أمير ومنكم أمير. فذهب إليهم أبو بكر وعمر وأبو عبيدة بن الجراح. أراد عمر أن يتكلم فأسكته أبو بكر، قال عمر: وكنت قد هيّأت كلامًا أعجبني، فتكلم أبو بكر فما ترك كلمة أعجبتني إلا قال مثلها أو أفضل منها.",
        en: "The Ansar gathered around Saʿd ibn ʿUbadah in the Saqifah of Banu Saʿidah and said: 'A leader from us and a leader from you.' Abu Bakr, ʿUmar and Abu ʿUbaydah ibn al-Jarrah went to them. ʿUmar wanted to speak but Abu Bakr stopped him; ʿUmar said he had prepared a speech he liked, but Abu Bakr spoke and left out nothing he had prepared, saying the same or better on the spot.",
      },
      citations: [
        { key: "bukhari_p902_a", grading: "in_sahih_bukhari" },
        { key: "ibn_hisham_p670_a", grading: "grading_unverified" },
      ],
    },
    { id: "bayah", kind: "context",
      title: { ar: "البيعة", en: "The pledge" },
      body: {
        ar: "قال أبو بكر: «نحن الأمراء وأنتم الوزراء»، وقال إن العرب لا تعرف هذا الأمر إلا لهذا الحي من قريش، ورشّح عمر أو أبا عبيدة. فقال عمر: بل نبايعك أنت، فأنت سيدنا وخيرنا وأحبنا إلى رسول الله ﷺ، فأخذ بيده فبايعه وبايعه الناس. وفي اليوم التالي قام عمر قبل أبي بكر على المنبر فقال إن الله قد جمع أمركم على خيركم، صاحب رسول الله ﷺ ﴿ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ﴾، فبايعه الناس بيعة عامة بعد بيعة السقيفة.",
        en: "Abu Bakr said: 'We are the leaders and you are the ministers', said the Arabs would recognise authority only in this clan of Quraysh, and nominated ʿUmar or Abu ʿUbaydah. ʿUmar said: 'No — we pledge to you; you are our master, the best of us and the most beloved of us to the Messenger ﷺ', took his hand and pledged allegiance, and the people pledged. The next day ʿUmar spoke before Abu Bakr on the minbar: Allah has united your affair under the best of you, the companion of the Messenger ﷺ, 'the second of two when they were in the cave' — and the people gave Abu Bakr the general pledge after the Saqifah pledge.",
      },
      citations: [
        { key: "bukhari_p902_a", grading: "in_sahih_bukhari" },
        { key: "ibn_hisham_p670_c", grading: "grading_unverified" },
      ],
    },
    { id: "falta", kind: "context",
      title: { ar: "«فلتة» وقى الله شرّها", en: "'Sudden' — but Allah averted its harm" },
      body: {
        ar: "بلغ عمرَ في خلافته أن قائلًا يقول: كانت بيعة أبي بكر فلتة فتمّت. فخطب بالمدينة فقال: إنها قد كانت كذلك، إلا أن الله وقى شرّها، وليس فيكم من تُقطع الأعناق إليه مثل أبي بكر، ومن بايع رجلًا عن غير مشورة من المسلمين فلا يُبايَع هو ولا الذي بايعه.",
        en: "During his caliphate ʿUmar heard that someone was saying Abu Bakr's pledge had been sudden ('faltah') and simply happened. He addressed the people in Madinah: it was indeed so, but Allah averted its harm, and there is none among you to whom people look up as they did to Abu Bakr; whoever pledges to a man without consultation of the Muslims, neither he nor the one he pledged to is to be followed.",
      },
      citations: [
        { key: "ibn_hisham_p669", excerpt: "والله، ما كانت بيعةُ أبي بكرٍ إلا فَلْتَةً فتَمَّت", grading: "grading_unverified" },
        { key: "ibn_hisham_p669_670", grading: "grading_unverified" },
      ],
    },
    { id: "speech", kind: "facts",
      title: { ar: "خطبته الأولى", en: "His first address" },
      body: {
        ar: "قال أبو بكر: «أيها الناس، فإني قد وُلّيت عليكم ولست بخيركم، فإن أحسنت فأعينوني، وإن أسأت فقوّموني. الصدق أمانة والكذب خيانة، والضعيف فيكم قوي عندي حتى أريح عليه حقه، والقوي فيكم ضعيف عندي حتى آخذ الحق منه… أطيعوني ما أطعت الله ورسوله، فإذا عصيت الله ورسوله فلا طاعة لي عليكم».",
        en: "Abu Bakr said: 'O people, I have been put in authority over you though I am not the best of you. If I do well, help me; if I do wrong, set me right. Truthfulness is a trust and lying is betrayal. The weak among you is strong in my eyes until I secure his right, and the strong among you is weak in my eyes until I take from him what is due… Obey me as long as I obey Allah and His Messenger; if I disobey Allah and His Messenger, you owe me no obedience.'",
      },
      citations: [ { key: "ibn_hisham_p671", grading: "grading_unverified" } ],
    },
    { id: "ali", kind: "context",
      title: { ar: "عليّ والزبير", en: "ʿAli and al-Zubayr" },
      body: {
        ar: "ذكر عمر أن عليًّا والزبير ومن معهما تخلّفوا عن اجتماع السقيفة. ونقل ابن كثير عن موسى بن عقبة أن أبا بكر اعتذر إلى الناس وقال: ما كنت حريصًا على الإمارة يومًا ولا ليلة، وأن عليًّا والزبير قالا: ما غضبنا إلا لأنا أُخّرنا عن المشورة، وإنا نرى أبا بكر أحق الناس بها، إنه لصاحب الغار، ولقد أمره رسول الله ﷺ بالصلاة بالناس. وسُئل عليٌّ: أي الناس خير بعد رسول الله ﷺ؟ قال: أبو بكر، ثم عمر.",
        en: "ʿUmar mentioned that ʿAli, al-Zubayr and those with them were absent from the Saqifah. Ibn Kathir cites Musa ibn ʿUqbah that Abu Bakr apologised to the people, saying he had never once coveted leadership, and that ʿAli and al-Zubayr said: 'We were upset only because we were left out of the consultation; we see Abu Bakr as the most entitled to it — he is the companion of the cave, and the Messenger ﷺ ordered him to lead the prayer.' ʿAli, asked who was best after the Messenger ﷺ, said: 'Abu Bakr', then ʿUmar.",
      },
      citations: [
        { key: "ibn_hisham_p669_670", excerpt: "وتخلَّف عنّا عليُّ بن أبي طالب والزُّبيرُ بن العوّام ومَن معهما", grading: "grading_unverified" },
        { key: "bidayah_v4_v4_p7_a", grading: "grading_unverified" },
        { key: "bukhari_p902_b", grading: "in_sahih_bukhari" },
      ],
      flags: [
        { kind: "conflict", text: { ar: "ذكر ابن كثير أن مبايعة عليّ بعد وفاة فاطمة (بعد ستة أشهر) «محمولة على أنها بيعة ثانية» أزالت وحشة سببها مسألة الميراث. هذا جمعٌ من ابن كثير بين الروايات، ويحتاج إلى مراجعة علمية.", en: "Ibn Kathir explains ʿAli's pledge after Fatimah's death (six months later) as 'a second pledge' that removed estrangement over the inheritance question. This is Ibn Kathir's reconciliation of the reports and needs scholarly review." } },
        { kind: "gap", text: { ar: "رقم حديث محمد بن الحنفية مطبوع في المقطع «٤٦٧١» في ص٩٠٢؛ يحتاج إلى مطابقة مع الطبعة.", en: "The hadith number for Muhammad ibn al-Hanafiyyah's report is transcribed as '4671' on p. 902; needs checking against the edition." } },
      ],
    },
    { id: "treasury", kind: "reflection",
      title: { ar: "ترك التجارة", en: "Leaving his trade" },
      body: {
        ar: "قالت عائشة: لما استُخلف أبو بكر ألقى كل دينار ودرهم عنده في بيت المال، وقال: قد كنت أتّجر فيه وألتمس به، فلما وُلّيتهم شغلوني.",
        en: "ʿAʾishah said: when Abu Bakr became caliph he put every dinar and dirham he had into the treasury and said: 'I used to trade with it and seek my living by it; now that I am responsible for them, they keep me occupied.'",
      },
      citations: [ { key: "siyar_p14", grading: "grading_unverified" } ],
      flags: [
        { kind: "weak", text: { ar: "قول عمر لأبي عبيدة «ابسط يدك حتى أبايعك» في السير ضعّف المحقق إسناده للانقطاع؛ لم نعتمد عليه.", en: "ʿUmar's words to Abu ʿUbaydah 'Stretch out your hand so I can pledge to you' (Siyar) — the editor grades the chain weak (broken); not relied on." } },
      ],
    },
  ],
};

export const lesson09: ScratchLesson = {
  number: 9, slug: "lesson-9", status: "internal_unapproved",
  title: { ar: "حروب الردة", en: "The Ridda Crisis" },
  cards: [
    { id: "usamah", kind: "hook",
      title: { ar: "إنفاذ جيش أسامة", en: "Sending Usamah's army" },
      body: {
        ar: "نقل ابن كثير أنه لما بويع أبو بكر ارتدّت العرب ونجم النفاق، فقال له الناس: لا ينبغي أن تفرّق عنك جماعة المسلمين. فقال: «والذي نفس أبي بكر بيده، لو ظننت أن السباع تخطفني لأنفذت بعث أسامة كما أمر به رسول الله ﷺ». وقالت عائشة: نزل بأبي ما لو نزل بالجبال الراسيات لهاضها.",
        en: "Ibn Kathir reports that when Abu Bakr was given the pledge, Arabs apostatised and hypocrisy surfaced; people told him not to disperse the Muslims' forces. He said: 'By Him in whose hand is Abu Bakr's soul, even if I thought wild beasts would snatch me, I would send Usamah's expedition as the Messenger ﷺ ordered.' ʿAʾishah said: there befell my father what would have crushed firm mountains.",
      },
      citations: [
        { key: "bidayah_v4_v4_p10", grading: "grading_unverified" },
        { key: "bidayah_v4_v4_p8_a", excerpt: "نادى منادي أبي بكر من الغد من مُتوفَّى رسولِ الله ﷺ ليَتَمِّم بعثَ أسامة: ألا لا يُقيمَنَّ أحدٌ بالمدينة من جيش أسامة إلا خرَج إلى عسكرِه بالجُرْف.", grading: "grading_unverified" },
      ],
      flags: [
        { kind: "no_chain", text: { ar: "الخبران عند ابن كثير من طريق سيف بن عمر؛ لم نجد حكمًا على إسنادهما في المقاطع الموثقة.", en: "Both reports in Ibn Kathir come via Sayf ibn ʿUmar; no grading of their chains was located." } },
      ],
    },
    { id: "zakah", kind: "context",
      title: { ar: "مانعو الزكاة", en: "Those who withheld zakah" },
      body: {
        ar: "جعلت وفود العرب تقدم المدينة يقرّون بالصلاة ويمتنعون من أداء الزكاة. فقال أبو بكر: «والله لو منعوني عَناقًا كانوا يؤدونها إلى رسول الله ﷺ لقاتلتهم على منعها». قال عمر: فما هو إلا أن رأيت أن الله شرح صدر أبي بكر للقتال فعرفت أنه الحق.",
        en: "Delegations of Arabs came to Madinah accepting the prayer but refusing to pay zakah. Abu Bakr said: 'By Allah, if they withheld from me even a young goat they used to give to the Messenger ﷺ, I would fight them over it.' ʿUmar said: 'As soon as I saw that Allah had opened Abu Bakr's heart to fighting, I knew it was the truth.'",
      },
      citations: [
        { key: "bidayah_v4_v4_p18", grading: "grading_unverified" },
        { key: "bukhari_p354", grading: "in_sahih_bukhari" },
      ],
    },
    { id: "dhu-qassah", kind: "facts",
      title: { ar: "ذو القَصّة", en: "Dhu al-Qassah" },
      body: {
        ar: "أغار قوم على المدينة، فخرج أبو بكر بأهل المسجد إليهم فانفشّ العدو، ثم بات ليلته يعبّئ الناس وخرج من آخر الليل، فما طلعت الشمس حتى ولّوا الأدبار، واتّبعهم حتى نزل بذي القصة. قال ابن كثير: وكان أول الفتح.",
        en: "Raiders attacked Madinah; Abu Bakr went out against them with the people of the mosque and the enemy scattered. He then spent the night organising the Muslims and set out before dawn; by sunrise the enemy had fled, and he pursued them as far as Dhu al-Qassah. Ibn Kathir says: it was the first victory.",
      },
      citations: [ { key: "bidayah_v4_v4_p20", grading: "grading_unverified" } ],
    },
    { id: "khalid", kind: "context",
      title: { ar: "خالد ومالك بن نويرة", en: "Khalid and Malik ibn Nuwayrah" },
      body: {
        ar: "شكا أبو قتادة خالد بن الوليد إلى أبي بكر فيما صنع بمالك بن نويرة، وقال عمر: اعزله فإن في سيفه رَهَقًا. فقال أبو بكر: «لا أشيم سيفًا سلّه الله على الكفار»، ودفع دية مالك من عنده، وقبل عذر خالد وأبقاه على الإمرة. ثم بعثه إلى بني حنيفة باليمامة لقتال مسيلمة.",
        en: "Abu Qatadah complained to Abu Bakr about what Khalid ibn al-Walid had done to Malik ibn Nuwayrah, and ʿUmar said: 'Dismiss him; there is recklessness in his sword.' Abu Bakr said: 'I will not sheathe a sword that Allah has drawn against the disbelievers', paid Malik's blood-money himself, accepted Khalid's excuse and kept him in command. He then sent him against Banu Hanifah at al-Yamamah to fight Musaylimah.",
      },
      citations: [
        { key: "bidayah_v4_v4_p31_32", grading: "grading_unverified" },
        { key: "bidayah_v4_v4_p32", grading: "grading_unverified" },
      ],
      flags: [
        { kind: "conflict", text: { ar: "قضية مالك بن نويرة موضع خلاف بين الصحابة أنفسهم (أبو قتادة وعمر في جهة، وأبو بكر في جهة). وحكم ابن كثير أن خالدًا «اجتهد… وأخطأ» رأيٌ لابن كثير. يحتاج هذا البطاقة مراجعة علمية دقيقة.", en: "The Malik ibn Nuwayrah affair was disputed among the Companions themselves (Abu Qatadah and ʿUmar on one side, Abu Bakr on the other). Ibn Kathir's verdict that Khalid 'made an ijtihad and erred' is Ibn Kathir's opinion. This card needs careful scholarly review." } },
      ],
    },
    { id: "musaylimah", kind: "reflection",
      title: { ar: "قرآن مسيلمة", en: "Musaylimah's 'Qur'an'" },
      body: {
        ar: "لما قدمت وفود بني حنيفة على أبي بكر قال لهم: أسمعونا شيئًا من قرآن مسيلمة، فذكروا أشياء وصفها ابن كثير بأنها خرافات يأنف منها الصبيان. ويقال إن أبا بكر قال: «إن هذا الكلام لم يخرج من إلّ».",
        en: "When delegations of Banu Hanifah came to Abu Bakr he asked them to recite some of Musaylimah's 'Qur'an'; they quoted things Ibn Kathir calls nonsense even children would scorn. It is said Abu Bakr replied: 'This speech did not come from a divine source.'",
      },
      citations: [ { key: "bidayah_v4_v4_p36", grading: "no_chain_stated" } ],
      flags: [
        { kind: "no_chain", text: { ar: "قول أبي بكر أورده ابن كثير بصيغة «فيُقال».", en: "Ibn Kathir gives Abu Bakr's remark with 'it is said'." } },
        { kind: "gap", text: { ar: "لم تُستخرج بعد نصوص عن الأسود العنسي وطليحة وسجاح ومعركة اليمامة بتفصيلها.", en: "Texts on al-Aswad al-ʿAnsi, Tulayhah, Sajah and the detailed Battle of al-Yamamah have not been extracted yet." } },
      ],
    },
  ],
};
