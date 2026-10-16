import type { Citation, LessonExtension } from "./types";
import { card, ci, fl, g, q } from "./extensions-01-06";
const B = "in_sahih_bukhari" as const;

export const ext07: LessonExtension = {
  after: {
    address: [
      card("day-narrative", "narrative", "اليوم كما ترويه المصادر بالترتيب", "The day in sequence, as the sources tell it",
        "يوم الإثنين صلّى أبو بكر بالناس الصبح وخرج النبي ﷺ فصلّى قاعدًا إلى جنبه، ثم استأذن أبو بكر فخرج إلى أهله بالسُّنح. ورجع النبي ﷺ إلى بيت عائشة فاضطجع في حجرها، ودخل رجل من آل أبي بكر بسواك فليّنته له فاستنّ به، ثم قال: «بل الرفيق الأعلى من الجنة»، وقُبض. فقام عمر يقول إنه لم يمت. وأقبل أبو بكر من السنح فدخل فقبّله وقال: «أما الموتة التي كتب الله عليك فقد ذقتها»، ثم خرج فخطب الناس وتلا آية آل عمران، فأخذها الناس عنه.",
        "On the Monday Abu Bakr led the dawn prayer and the Prophet ﷺ came out and prayed seated beside him; then Abu Bakr took leave and went to his family at al-Sunh. The Prophet ﷺ returned to ʿAʾishah's house and lay in her lap; a man of Abu Bakr's family came in with a tooth-stick, she softened it for him and he used it, then said 'Rather, the Highest Companion in Paradise', and passed away. ʿUmar stood saying he had not died. Abu Bakr came from al-Sunh, went in, kissed him and said 'The death Allah wrote for you, you have tasted', then went out, addressed the people and recited the verse of Al ʿImran, and the people took it from him.",
        [ci("ibn_hisham_p667_c"), ci("ibn_hisham_p667_b"), ci("ibn_hisham_p667_a"), ci("ibn_hisham_p668_c"), ci("ibn_hisham_p668_a"), ci("ibn_hisham_p668_b")]),
    ],
  },
  append: [
    card("glossary", "glossary", "مسرد المصطلحات", "Glossary", "تعريفات مأخوذة مما تقوله المقاطع نفسها.", "Definitions taken from what the passages themselves say.", [], undefined, [
      g("الرفيق الأعلى", "The Highest Companion", "آخر كلمة سمعتها عائشة منه: «بل الرفيق الأعلى من الجنة».", "The last words ʿAʾishah heard from him: 'Rather, the Highest Companion in Paradise'.", "ibn_hisham_p666_c"),
      g("عبد الرحمن بن أبي بكر", "ʿAbd al-Rahman ibn Abi Bakr", "أخو عائشة، دخل بالسواك الذي استنّ به النبي ﷺ.", "ʿAʾishah's brother, who came in with the tooth-stick the Prophet ﷺ used.", "bukhari_p1091_c"),
      g("موسى بن عمران", "Musa ibn ʿImran", "شبّه به عمر غياب النبي ﷺ: غاب عن قومه أربعين ليلة ثم رجع.", "ʿUmar compared the Prophet's ﷺ absence to his: away from his people forty nights, then returned.", "ibn_hisham_p668_c"),
    ]),
    card("learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
      "تأمل لا رواية: جملة أبي بكر نفسها هي الدرس: «من كان يعبد محمدًا فإن محمدًا قد مات، ومن كان يعبد الله فإن الله حيّ لا يموت». وقال ابن عباس إن الناس كأنهم لم يعلموا الآية حتى تلاها.",
      "A reflection, not a report: Abu Bakr's own sentence is the lesson — 'Whoever worshipped Muhammad, Muhammad has died; whoever worshipped Allah, Allah is Ever-Living and does not die.' Ibn ʿAbbas said it was as if people had not known the verse until he recited it.",
      [ci("bukhari_p1091_a", B)]),
  ],
  quiz: [
    q("q1", "address", "أي آية تلاها أبو بكر يوم الوفاة؟", "Which verse did Abu Bakr recite on the day of the death?", [["﴿وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ﴾ آل عمران ١٤٤", "'Muhammad is but a messenger' (3:144)"], ["آية الكرسي", "Ayat al-Kursi"], ["﴿ثَانِيَ اثْنَيْنِ﴾", "'The second of two'"]], 0, "صحيح البخاري ص١٠٩١.", "Sahih al-Bukhari p. 1091."),
    q("q2", "umar", "بمن شبّه عمر غياب النبي ﷺ؟", "To whom did ʿUmar compare the Prophet's ﷺ absence?", [["موسى بن عمران", "Musa ibn ʿImran"], ["عيسى ابن مريم", "ʿIsa ibn Maryam"], ["يونس", "Yunus"]], 0, "ابن هشام ص٦٦٨.", "Ibn Hisham p. 668."),
    q("q3", "address", "ما سبب وسم بطاقة الخطبة بعلامة اختلاف؟", "Why is the address card flagged?", [["نسبة قول «فعقرت» إلى عمر في البخاري وإلى أبي هريرة عند ابن هشام", "'I was stunned' is ʿUmar's in al-Bukhari but Abu Hurayrah's in Ibn Hisham"], ["اختلاف في الآية", "Disagreement over the verse"], ["لا علامة", "No flag"]], 0, "لم نرجّح بينهما.", "Not resolved here."),
  ],
};

export const ext08: LessonExtension = {
  after: {
    saqifah: [
      card("two-men", "narrative", "الرجلان الصالحان في الطريق", "The two righteous men on the way",
        "قال عمر: لما انطلقنا إلى الأنصار لقينا منهم رجلان صالحان فقالا: لا عليكم ألا تقربوهم، اقضوا أمركم. فقلت: والله لنأتينّهم. وذكر عروة أنهما عويم بن ساعدة ومعن بن عدي. وبلغ الزهري أن الناس لما استُخلف أبو بكر قالوا: وددنا أنا متنا قبله، فقال معن: لكني ما أحب أني متّ قبله حتى أصدّقه ميتًا كما صدّقته حيًّا، فقُتل معن شهيدًا يوم اليمامة.",
        "ʿUmar said: on our way to the Ansar two righteous men of them met us and said 'You need not go to them; settle your affair.' I said: 'By Allah, we will go to them.' ʿUrwah names them as ʿUwaym ibn Saʿidah and Maʿn ibn ʿAdi. It reached al-Zuhri that when Abu Bakr became caliph people said 'We wish we had died before him', and Maʿn said: 'I would not wish to have died before him, so that I may believe him in death as I believed him in life.' Maʿn was killed as a martyr at al-Yamamah.",
        [ci("ibn_hisham_p669_670"), ci("ibn_hisham_p670_b", "no_chain_stated")],
        [fl("no_chain", "ما يخص عويمًا ومعنًا جاء بصيغة «بلغنا».", "The details about ʿUwaym and Maʿn are introduced with 'it reached us'.")]),
    ],
  },
  append: [
    card("glossary", "glossary", "مسرد المصطلحات", "Glossary", "تعريفات مأخوذة مما تقوله المقاطع نفسها.", "Definitions taken from what the passages themselves say.", [ci("bidayah_v4_v4_p7_c")], undefined, [
      g("سقيفة بني ساعدة", "Saqifah of Banu Saʿidah", "الموضع الذي اجتمعت فيه الأنصار إلى سعد بن عبادة.", "Where the Ansar gathered around Saʿd ibn ʿUbadah.", "bukhari_p902_a"),
      g("حُباب بن المنذر", "al-Hubab ibn al-Mundhir", "قال: «منا أمير ومنكم أمير».", "He said: 'A leader from us and a leader from you.'", "bukhari_p902_a"),
      g("الفَلْتة", "Faltah", "وصف بعضهم بيعة أبي بكر بأنها «فلتة فتمّت»، فقال عمر: قد كانت كذلك إلا أن الله وقى شرها.", "Some called Abu Bakr's pledge 'sudden, and it happened'; ʿUmar said it was so, but Allah averted its harm.", "ibn_hisham_p669_670"),
      g("البيعة العامة", "The general pledge", "بيعة الناس لأبي بكر في المسجد في الغد بعد بيعة السقيفة.", "The people's pledge to Abu Bakr in the mosque the next day, after the Saqifah pledge.", "ibn_hisham_p670_c"),
    ]),
    card("learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
      "تأمل لا رواية: بدأ أبو بكر ولايته بقوله: «ولستُ بخيركم، فإن أحسنت فأعينوني، وإن أسأت فقوّموني… أطيعوني ما أطعت الله ورسوله». النص يربط طاعة الحاكم بطاعته لله ورسوله صراحة.",
      "A reflection, not a report: Abu Bakr opened his rule with 'I am not the best of you; if I do well help me, if I do wrong set me right… obey me as long as I obey Allah and His Messenger.' The text explicitly ties obedience to the ruler to his obedience to Allah and His Messenger.",
      [ci("ibn_hisham_p671")]),
  ],
  quiz: [
    q("q1", "bayah", "ماذا قال أبو بكر للأنصار في السقيفة؟", "What did Abu Bakr tell the Ansar at the Saqifah?", [["نحن الأمراء وأنتم الوزراء", "We are the leaders and you the ministers"], ["منا أمير ومنكم أمير", "A leader from us and one from you"], ["لا حاجة لأمير", "No leader is needed"]], 0, "صحيح البخاري ص٩٠٢.", "Sahih al-Bukhari p. 902."),
    q("q2", "bayah", "من أوّل من بايع أبا بكر في السقيفة؟", "Who first pledged allegiance to Abu Bakr at the Saqifah?", [["عمر", "ʿUmar"], ["أبو عبيدة", "Abu ʿUbaydah"], ["سعد بن عبادة", "Saʿd ibn ʿUbadah"]], 0, "«فأخذ عمر بيده فبايعه».", "'ʿUmar took his hand and pledged.'"),
    q("q3", "speech", "متى قال أبو بكر إنه لا طاعة له على الناس؟", "When did Abu Bakr say people owed him no obedience?", [["إذا عصى الله ورسوله", "If he disobeyed Allah and His Messenger"], ["إذا مرض", "If he fell ill"], ["بعد سنة", "After a year"]], 0, "ابن هشام ص٦٧١.", "Ibn Hisham p. 671."),
    q("q4", "ali", "بحسب موسى بن عقبة، ما الذي أغضب عليًّا والزبير؟", "Per Musa ibn ʿUqbah, what had upset ʿAli and al-Zubayr?", [["تأخيرهما عن المشورة", "Being left out of the consultation"], ["اختيار أبي بكر نفسه", "The choice of Abu Bakr himself"], ["مسألة الزكاة", "The zakah question"]], 0, "وقالا: إنا نرى أبا بكر أحق الناس بها.", "And they said they saw Abu Bakr as the most entitled."),
  ],
};

export const ext09: LessonExtension = {
  after: {
    zakah: [
      card("letter", "narrative", "كتاب الصدقات", "The letter on zakah",
        "روى أنس أن أبا بكر كتب له كتاب الصدقة التي فرض رسول الله ﷺ، وفيه: «ولا يُجمع بين متفرّق، ولا يُفرّق بين مجتمع خشية الصدقة»، وفيه أحكام الأسنان في الإبل. فالخليفة الذي قاتل على منع الزكاة هو الذي كتب أحكامها كما فرضها رسول الله ﷺ.",
        "Anas related that Abu Bakr wrote him the letter on the zakah the Messenger ﷺ had prescribed, including: 'Separate holdings are not combined, nor combined ones separated, for fear of zakah', along with rules on the ages of camels due. The caliph who fought over withheld zakah is the one who wrote down its rules as the Messenger ﷺ had laid them down.",
        [ci("bukhari_p352", B)]),
    ],
  },
  append: [
    card("glossary", "glossary", "مسرد المصطلحات", "Glossary", "تعريفات مأخوذة مما تقوله المقاطع نفسها.", "Definitions taken from what the passages themselves say.", [], undefined, [
      g("الجُرْف", "al-Jurf", "معسكر جيش أسامة؛ نادى منادي أبي بكر ألا يقيم أحد من جيشه بالمدينة.", "Usamah's army camp; Abu Bakr's crier ordered every soldier of it out of Madinah to it.", "bidayah_v4_v4_p8_a"),
      g("ذو حُسى / ذو القَصّة", "Dhu Husa / Dhu al-Qassah", "موضعان تبع إليهما أبو بكر المغيرين على المدينة، وكان ذو القصة «أول الفتح».", "Places to which Abu Bakr pursued the raiders of Madinah; Dhu al-Qassah was 'the first victory'.", "bidayah_v4_v4_p20"),
      g("بنو حنيفة", "Banu Hanifah", "قوم مسيلمة باليمامة، قال ابن كثير إنهم نحو أربعين ألف مقاتل.", "Musaylimah's people at al-Yamamah; Ibn Kathir puts them at about forty thousand fighters.", "bidayah_v4_v4_p32"),
    ]),
    card("learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
      "تأمل لا رواية: قال عمر: «فما هو إلا أن رأيت أن الله شرح صدر أبي بكر للقتال فعرفت أنه الحق». النص يُظهر أن عمر خالف أولًا ثم رجع إلى رأي أبي بكر.",
      "A reflection, not a report: ʿUmar said 'As soon as I saw Allah had opened Abu Bakr's heart to fighting, I knew it was the truth.' The text shows ʿUmar first disagreed and then came round to Abu Bakr's view.",
      [ci("bukhari_p354", B)]),
  ],
  quiz: [
    q("q1", "usamah", "ماذا قال أبو بكر حين طُلب منه ألا ينفذ جيش أسامة؟", "What did Abu Bakr say when urged not to send Usamah's army?", [["لو ظننت أن السباع تخطفني لأنفذته", "Even if wild beasts would snatch me, I would send it"], ["نؤخره سنة", "We will delay it a year"], ["نستشير الأنصار", "We will consult the Ansar"]], 0, "البداية والنهاية ج٤ ص١٠ (من طريق سيف بن عمر).", "al-Bidayah vol. 4 p. 10 (via Sayf ibn ʿUmar)."),
    q("q2", "zakah", "على أي شيء قال أبو بكر إنه سيقاتل لو منعوه؟", "Over what did Abu Bakr say he would fight if it were withheld?", [["عَناق كانوا يؤدونها إلى رسول الله ﷺ", "A young goat they used to give the Messenger ﷺ"], ["الصلاة", "Prayer"], ["الجزية", "Jizyah"]], 0, "صحيح البخاري ١٤٥٦.", "Sahih al-Bukhari 1456."),
    q("q3", "khalid", "ماذا قال أبو بكر حين طلب عمر عزل خالد؟", "What did Abu Bakr say when ʿUmar asked him to dismiss Khalid?", [["لا أشيم سيفًا سلّه الله على الكفار", "I will not sheathe a sword Allah drew against the disbelievers"], ["أعزله غدًا", "I will dismiss him tomorrow"], ["الأمر لك", "It is your decision"]], 0, "البداية والنهاية ج٤ ص٣١–٣٢؛ القضية موسومة للمراجعة.", "al-Bidayah vol. 4 pp. 31–32; the affair is flagged for review."),
  ],
};

export const ext10: LessonExtension = {
  after: {
    zayd: [
      card("compile-narrative", "narrative", "رواية زيد كاملة", "Zayd's full account",
        "يروي زيد بن ثابت القصة كلها: أرسل إليه أبو بكر بعد مقتل أهل اليمامة وعمر عنده، فحكى له أبو بكر خشية عمر على القرآن وتردده هو ثم انشراح صدره. ثم كلّفه بجمعه لأنه شاب عاقل لا يُتّهم وكان يكتب الوحي. فاستثقل زيد الأمر وسأل السؤال نفسه: كيف تفعلون شيئًا لم يفعله رسول الله ﷺ؟ فلم يزل أبو بكر يراجعه حتى شرح الله صدره. فتتبّع القرآن من العسب واللخاف وصدور الرجال، ووجد آخر التوبة مع أبي خزيمة الأنصاري. وبقيت الصحف عند أبي بكر ثم عمر ثم حفصة.",
        "Zayd ibn Thabit tells the whole story: Abu Bakr sent for him after the killing at al-Yamamah, with ʿUmar present, and told him of ʿUmar's fear for the Qur'an, his own hesitation and how his heart was then opened to it. He tasked Zayd because he was a sensible young man above suspicion who used to write the revelation. Zayd found it heavy and asked the same question — how can you do what the Messenger ﷺ did not? — and Abu Bakr kept urging him until Allah opened his heart. He gathered the Qur'an from palm stalks, flat stones and men's memories, finding the end of al-Tawbah with Abu Khuzaymah al-Ansari. The sheets stayed with Abu Bakr, then ʿUmar, then Hafsah.",
        [ci("bukhari_p1274", B)]),
    ],
  },
  append: [
    card("glossary", "glossary", "مسرد المصطلحات", "Glossary", "تعريفات مأخوذة مما تقوله المقاطع نفسها.", "Definitions taken from what the passages themselves say.", [], undefined, [
      g("زيد بن ثابت", "Zayd ibn Thabit", "شاب عاقل كان يكتب الوحي لرسول الله ﷺ، كلّفه أبو بكر بجمع القرآن.", "A sensible young man who wrote the revelation for the Messenger ﷺ; Abu Bakr tasked him with collecting the Qur'an.", "bukhari_p1274"),
      g("أبو خزيمة الأنصاري", "Abu Khuzaymah al-Ansari", "وجد زيد معه آخر سورة التوبة ولم يجدها مع غيره.", "Zayd found the end of Surat al-Tawbah with him and with no one else.", "bukhari_p1275"),
      g("حفصة بنت عمر", "Hafsah bint ʿUmar", "انتقلت إليها الصحف بعد عمر.", "The sheets passed to her after ʿUmar.", "bukhari_p1274"),
      g("سالم مولى أبي حذيفة", "Salim, freedman of Abu Hudhayfah", "من حملة القرآن يوم اليمامة، قال: «بئس حامل القرآن أنا إذًا».", "A bearer of the Qur'an at al-Yamamah who said 'What a poor bearer of the Qur'an I would be then!'", "bidayah_v4_p34"),
    ]),
    card("learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
      "تأمل لا رواية: تكرّر في النص سؤال «كيف أفعل شيئًا لم يفعله رسول الله ﷺ؟» من أبي بكر ثم من زيد، وتكرّر الجواب «هو والله خير» حتى «شرح الله صدري». النص يُظهر أن القرار جاء بعد مراجعة وتثبّت لا باندفاع.",
      "A reflection, not a report: the question 'How can I do something the Messenger ﷺ did not do?' recurs — from Abu Bakr, then from Zayd — and so does the answer 'By Allah, it is good', until 'Allah opened my heart'. The text shows the decision came after deliberation, not haste.",
      [ci("bukhari_p1274", B)]),
  ],
  quiz: [
    q("q1", "umar-proposal", "من اقترح جمع القرآن أولًا؟", "Who first proposed collecting the Qur'an?", [["عمر", "ʿUmar"], ["زيد بن ثابت", "Zayd ibn Thabit"], ["علي", "ʿAli"]], 0, "صحيح البخاري ٤٩٨٦.", "Sahih al-Bukhari 4986."),
    q("q2", "zayd", "لماذا اختار أبو بكر زيدًا؟", "Why did Abu Bakr choose Zayd?", [["شاب عاقل لا يُتّهم وكان يكتب الوحي", "A sensible young man above suspicion who wrote the revelation"], ["لأنه أكبر الصحابة", "He was the eldest Companion"], ["لأنه من قريش", "He was from Quraysh"]], 0, "صحيح البخاري ٤٩٨٦.", "Sahih al-Bukhari 4986."),
    q("q3", "suhuf", "عند من استقرت الصحف بعد عمر؟", "With whom did the sheets end up after ʿUmar?", [["حفصة بنت عمر", "Hafsah bint ʿUmar"], ["عائشة", "ʿAʾishah"], ["زيد بن ثابت", "Zayd ibn Thabit"]], 0, "صحيح البخاري ٤٩٨٦.", "Sahih al-Bukhari 4986."),
    q("q4", "suhuf", "ما حكم المحقق على قول علي «أعظم الناس أجرًا في المصاحف أبو بكر»؟", "How did the editor grade ʿAli's saying about Abu Bakr and the mushafs?", [["إسناده حسن", "Hasan chain"], ["ضعيف", "Weak"], ["لم يُحكم عليه", "Ungraded"]], 0, "سير أعلام النبلاء ص١٥.", "Siyar p. 15."),
  ],
};

export const ext11: LessonExtension = {
  after: {
    umar: [
      card("covenant", "narrative", "كتابة العهد", "Writing the covenant",
        "في رواية عند الذهبي أن عثمان لما كتب الكتاب أُغمي على أبي بكر، فكتب عثمان من عنده اسم عمر، فلما أفاق قال: اقرأ ما كتبت، فلما قرأ اسم عمر كبّر وقال: أراك خفت الاختلاف إن افتلتت نفسي، فجزاك الله عن الإسلام خيرًا. ودخل عليه عبد الرحمن بن عوف يعوده فقال أبو بكر: جعلت لكم عهدًا بعدي واخترت لكم خيركم في نفسي فكلّكم وَرِم أنفه لذلك.",
        "In a report cited by al-Dhahabi, as ʿUthman was writing the document Abu Bakr fainted, and ʿUthman wrote ʿUmar's name himself; when Abu Bakr came to he asked him to read it, and on hearing ʿUmar's name he said 'Allahu akbar' and: 'I see you feared disagreement if my soul slipped away — may Allah reward you on behalf of Islam.' When ʿAbd al-Rahman ibn ʿAwf visited him, Abu Bakr said: 'I have made a covenant for you after me and chosen the best of you in my view, and each of you is put out by it, wanting the matter for himself.'",
        [ci("siyar_p17", "no_chain_stated"), ci("siyar_p17_a")],
        [fl("no_chain", "خبر إغماء أبي بكر جاء بصيغة «وقال بعضهم في الحديث».", "The fainting report is introduced with 'some said in the hadith'.")]),
    ],
    death: [
      card("after", "narrative", "بعد وفاته", "After his death",
        "عن مجاهد أن أبا قحافة كُلّم في ميراثه من ابنه فقال: قد رددت ذلك على ولده، ثم لم يعش بعده إلا ستة أشهر وأيامًا.",
        "Mujahid reported that Abu Quhafah was spoken to about his inheritance from his son and said: 'I have given it back to his children'; he lived only six months and some days after him.",
        [ci("siyar_p19_e")]),
    ],
  },
  append: [
    card("withheld", "reflection", "رواية موقوفة للمراجعة", "A report held back for review",
      "يورد الذهبي خبرًا طويلًا عن «ثلاث فعلتهن وثلاث لم أفعلهن وثلاث وددت أني سألت عنهن». لم نبنِ عليه شيئًا في الدرس لأنه لم يُعثر على حكم لإسناده ويتضمن مسائل حساسة؛ يُعرض النص هنا للمراجعة العلمية فقط.",
      "Al-Dhahabi cites a long report on 'three things I did, three I did not do, and three I wish I had asked about'. Nothing in the lesson rests on it: no grading of its chain was located and it touches sensitive matters. The text is shown here only for scholarly review.",
      [ci("siyar_p17_b"), ci("siyar_p20", "no_chain_stated")],
      [fl("gap", "بانتظار حكم على الإسناد قبل أي استعمال تعليمي.", "Awaiting a grading of the chain before any teaching use."), fl("no_chain", "خبر السمّ بصيغة «ويُقال».", "The poisoning report is given only as 'it is said'.")]),
    card("glossary", "glossary", "مسرد المصطلحات", "Glossary", "تعريفات مأخوذة مما تقوله المقاطع نفسها.", "Definitions taken from what the passages themselves say.", [], undefined, [
      g("أسماء بنت عميس", "Asmaʾ bint ʿUmays", "زوجته، أوصى أن تغسّله، فإن لم تستطع استعانت بابنه عبد الرحمن.", "His wife, whom he asked to wash his body, with his son ʿAbd al-Rahman helping if needed.", "siyar_p19_a"),
      g("الغلام الصَّيْقَل", "The sword-polisher servant", "غلام كان يعمل سيوف المسلمين ويخدمهم، أوصى أن يُدفع إلى عمر.", "A servant who made the Muslims' swords and served the family; he asked that he be handed to ʿUmar.", "siyar_p19"),
      g("جمادى الآخرة", "Jumada al-Akhirah", "الشهر الذي توفي فيه، لثمان بقين منه.", "The month he died in, with eight days remaining.", "siyar_p16"),
    ]),
    card("learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
      "تأمل لا رواية: ردّ أبو بكر ما أخذه من مال المسلمين عند موته، فقال عمر: «لقد أتعب من بعده». النص نفسه يجعل زهد أبي بكر معيارًا صعبًا لمن بعده.",
      "A reflection, not a report: Abu Bakr returned what he held of the Muslims' property at his death, and ʿUmar said 'He has made it hard for those after him.' The text itself makes Abu Bakr's austerity a demanding standard for his successors.",
      [ci("siyar_p19")]),
  ],
  quiz: [
    q("q1", "illness", "كيف بدأ مرض أبي بكر بحسب عائشة؟", "How did Abu Bakr's illness begin according to ʿAʾishah?", [["اغتسل في يوم بارد فحُمّ", "He bathed on a cold day and caught a fever"], ["سُمّ في طعام", "He was poisoned"], ["جُرح في غزوة", "He was wounded in battle"]], 0, "السير ص١٦؛ خبر السمّ بصيغة «ويُقال».", "Siyar p. 16; the poisoning report is only 'it is said'."),
    q("q2", "umar", "من استخلف أبو بكر بعده؟", "Whom did Abu Bakr appoint after him?", [["عمر بن الخطاب", "ʿUmar ibn al-Khattab"], ["عثمان بن عفان", "ʿUthman ibn ʿAffan"], ["لم يستخلف", "No one"]], 0, "السير ص١٦–١٧.", "Siyar pp. 16–17."),
    q("q3", "death", "أين دُفن أبو بكر؟", "Where was Abu Bakr buried?", [["إلى جنب رسول الله ﷺ", "Beside the Messenger ﷺ"], ["في البقيع", "In al-Baqiʿ"], ["في السنح", "At al-Sunh"]], 0, "السير ص١٩.", "Siyar p. 19."),
    q("q4", "length", "لماذا وُسمت مدة خلافته بعلامة اختلاف؟", "Why is the length of his caliphate flagged?", [["روايتان مختلفتان: سنتان ومئة يوم، وسنتان وأربعة أشهر إلا أربع ليال", "Two reports: 2 years 100 days vs 2 years 4 months less 4 nights"], ["لا يُعرف شيء", "Nothing is known"], ["لا اختلاف", "No difference"]], 0, "السير ص١٦.", "Siyar p. 16."),
  ],
};

export const ext12: LessonExtension = {
  quiz: [
    q("q1", "timeline", "في أي درس تجد قصة سقيفة بني ساعدة؟", "Which lesson covers the Saqifah of Banu Saʿidah?", [["الدرس ٨", "Lesson 8"], ["الدرس ٤", "Lesson 4"], ["الدرس ١٠", "Lesson 10"]], 0, "الخليفة الأول.", "The First Caliph."),
    q("q2", "timeline", "رتّب: الهجرة، جمع القرآن، الإسلام المبكر", "Order: the Hijrah, compiling the Qur'an, early Islam", [["الإسلام المبكر ← الهجرة ← جمع القرآن", "Early Islam → Hijrah → Qur'an"], ["الهجرة ← الإسلام ← جمع القرآن", "Hijrah → Islam → Qur'an"], ["جمع القرآن ← الهجرة ← الإسلام", "Qur'an → Hijrah → Islam"]], 0, "الدروس ٢ و٤ و١٠.", "Lessons 2, 4 and 10."),
    q("q3", "open", "أيّ هذه المسائل ما زال موسومًا للمراجعة العلمية؟", "Which of these is still flagged for scholarly review?", [["قضية مالك بن نويرة", "The Malik ibn Nuwayrah affair"], ["أن أبا بكر كان في الغار", "That Abu Bakr was in the cave"], ["أن زيدًا جمع القرآن", "That Zayd collected the Qur'an"]], 0, "الدرس ٩.", "Lesson 9."),
  ],
};

export const extraCitations2: Record<number, Record<string, Citation[]>> = {
  8: { ali: [ci("bidayah_v4_v4_p8_b"), ci("bidayah_v4_v4_p7_b")], treasury: [ci("siyar_p13_c", "editor_weak")] },
  11: { illness: [ci("siyar_p20", "no_chain_stated")] },
};
