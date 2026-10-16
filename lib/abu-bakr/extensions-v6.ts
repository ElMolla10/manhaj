import type { Card, QuizQ, ScratchLesson } from "./types";
import { card, ci, fl, g, q } from "./extensions-01-06";

// Pass 5, batch 2 (2026-10-16): al-Bidayah (mujallad 4) pp. 62-99 (Iraq & Sham), p. 79 (Qur'an compilation);
// Siyar (al-Khulafa' vol.) pp. 19-20, 26-28; Siyar (Sirah vol.) pp. 438-439; Usd al-Ghabah p. 710;
// Fada'il al-Sahabah pp. 390-391; gradings from al-ʿUmari and Mahdi Rizq Allah where they grade the same report.

export type V6 = { after: Record<string, Card[]>; quiz: QuizQ[] };

export const v6: Record<number, V6> = {
  5: {
    after: {
      uhud: [
        card("hamra", "narrative", "حمراء الأسد: «الذين استجابوا لله والرسول»", "Hamra' al-Asad: 'Those who responded to Allah and the Messenger'",
          "عن عائشة أنها قالت لعروة: «يا ابن أختي كان أبواك ـ تعني الزبير وأبا بكر ـ من الذين استجابوا لله والرسول من بعد ما أصابهم القرح». لما انصرف المشركون من أحد خاف النبي ﷺ أن يرجعوا، فقال: «من ينتدب لهؤلاء في آثارهم حتى يعلموا أن بنا قوة؟» «فانتدب أبو بكر والزبير في سبعين خرجوا في آثار القوم»، «لم يلقوا عدوًا».",
          "ʿAʾishah told ʿUrwah: 'O son of my sister, your forefathers — meaning al-Zubayr and Abu Bakr — were among those who responded to Allah and the Messenger after being wounded.' When the idolaters left Uhud, the Prophet ﷺ feared they would return and said: 'Who will go after them so they know we still have strength?' 'Abu Bakr and al-Zubayr volunteered among seventy who went after them'; 'they did not meet the enemy.'",
          [ci("siyar_s_p438_439", "source_cites_sahihayn", "فانتدب أبو بكر والزبير في سبعين خرجوا في آثار القوم")]),
      ],
    },
    quiz: [
      q("v6q1", "hamra", "من الصحابيان اللذان ذكرت عائشة أنهما من «الذين استجابوا لله والرسول»؟", "Which two Companions did ʿAʾishah name among 'those who responded to Allah and the Messenger'?",
        [["أبو بكر والزبير", "Abu Bakr and al-Zubayr"], ["عمر وعثمان", "ʿUmar and ʿUthman"], ["علي وطلحة", "ʿAli and Talhah"]], 0, "عزاه الذهبي إلى الصحيحين («أخرجاه»).", "Al-Dhahabi attributes it to both Sahihs."),
    ],
  },
  6: {
    after: {
      prayer: [
        card("prayer-weak", "context", "حديث ضعيف جدًا في الباب", "A very weak hadith on the topic",
          "روى أحمد في فضائل الصحابة بإسناده إلى ابن عمر مرفوعًا: «لا يموت نبي حتى يؤمّه رجل من أمته». قال محقق الطبعة: «إسناده ضعيف جدًا»، لأن فيه سلامًا الطويل وهو «متروك». نذكره للتنبيه لا للاحتجاج.",
          "In Fada'il al-Sahabah, Ahmad narrates with his chain from Ibn ʿUmar, from the Prophet ﷺ: 'No prophet dies until a man of his community leads him in prayer.' The edition's editor says: 'Its chain is very weak,' because it contains Sallam al-Tawil, who is 'abandoned'. It is mentioned as a warning, not as evidence.",
          [ci("fadail_p391_b", "editor_very_weak", "لا يموت نبي حتى يؤمه رجل من أمته.")],
          [fl("weak", "ضعيف جدًا بحكم محقق الفضائل؛ لا يُبنى عليه.", "Very weak per the Fada'il editor; nothing is built on it.")]),
      ],
    },
    quiz: [],
  },
  8: {
    after: {
      ali: [
        card("ali-reconcile", "narrative", "«لأن أصلكم أحبّ إليّ»", "'To keep ties with you is dearer to me'",
          "عن عائشة: لما توفيت فاطمة بعد أبيها بستة أشهر بعث عليّ وأهل بيته إلى أبي بكر: ائتنا. فقال عمر: لا والله لا تأتهم. فقال أبو بكر: «والله لآتينّهم، وما تخاف عليّ منهم!» فجاءهم وقال: إنه لم يصنع في هذه الصدقات إلا أنه لم يرد أن يكل شيئًا من أمر رسول الله ﷺ إلى غيره، «ووالله لأن أصلكم أحب إليّ من أن أصل أهل قرابتي لقرابتكم من رسول الله ﷺ ولعظيم حقه». فقال عليّ: «ما نفسنا عليك خيرًا جعله الله لك… وقد رأيت أن أبايع»، ثم بايعه بعد الظهر على المنبر، وذكر فضل أبي بكر وسنّه. قال الذهبي: «أخرجه البخاري».",
          "From ʿAʾishah: when Fatimah died six months after her father, ʿAli and his household sent to Abu Bakr: 'Come to us.' ʿUmar said: 'No, by Allah, do not go to them.' Abu Bakr said: 'By Allah I will go to them — what do you fear they would do to me?' He went and told them he had acted over these charitable estates only because he did not want to hand any matter of the Messenger of Allah ﷺ to someone else, 'and by Allah, to keep ties with you is dearer to me than keeping ties with my own kin, because of your kinship to the Messenger of Allah ﷺ and his great right.' ʿAli said: 'We did not begrudge you a good Allah gave you… I have decided to pledge allegiance,' and after the noon prayer he pledged allegiance at the pulpit, mentioning Abu Bakr's virtue and seniority. Al-Dhahabi: 'Al-Bukhari narrated it.'",
          [ci("siyar_k_p27_28", "source_cites_bukhari", "ووالله لأن أصلكم أحب إلي من أن أصل أهل قرابتي لقرابتكم من رسول الله ﷺ ولعظيم حقه.")],
          [fl("conflict", "تذكر هذه الرواية بيعة عليّ بعد ستة أشهر، وفي الدرس روايات أخرى في توقيت بيعته؛ لا نرجّح.", "This report places ʿAli's pledge after six months; other reports in this lesson differ on the timing. We do not choose.")]),
      ],
    },
    quiz: [
      q("v6q2", "ali-reconcile", "ماذا قال أبو بكر حين نهاه عمر عن الذهاب إلى بيت علي؟", "What did Abu Bakr say when ʿUmar told him not to go to ʿAli's house?",
        [["والله لآتينّهم، وما تخاف عليّ منهم!", "'By Allah I will go to them — what do you fear?'"], ["أرسل إليهم عمر", "'Send ʿUmar to them'"], ["لا حاجة لي بهم", "'I have no need of them'"]], 0, "رواية عائشة عند الذهبي.", "ʿAʾishah's report in Siyar."),
    ],
  },
  10: {
    after: {
      "compile-narrative": [
        card("compile-fadail", "context", "رواية الفضائل ورواية البداية", "The Fada'il and al-Bidayah reports",
          "في فضائل الصحابة عن زيد بن ثابت: «قبض رسول الله ﷺ ولم يكن القرآن جمع، إنما كان في العسب والكرانيف وجرائد النخل والسعف»، فلما قُتل سالم مولى أبي حذيفة يوم اليمامة جاء عمر إلى أبي بكر فقال: «فاجمع القرآن في شيء فإني أخاف أن يذهب»، فقال: «فكيف تأمرني أن أفعل شيئًا لم يفعله رسول الله ﷺ؟» حتى شرح الله صدره. وقال ابن كثير في حوادث سنة ١٢: «أمر الصديق زيد بن ثابت أن يجمع القرآن من اللخاف والعسب وصدور الرجال… كما ثبت به الحديث في صحيح البخاري».",
          "In Fada'il al-Sahabah, from Zayd ibn Thabit: 'The Messenger of Allah ﷺ died and the Qur'an had not been gathered; it was on palm stalks, palm-stump bases, palm branches and fronds.' When Salim, the freedman of Abu Hudhayfah, was killed at Yamamah, ʿUmar came to Abu Bakr and said: 'Gather the Qur'an in one thing, for I fear it will be lost.' He replied: 'How can you tell me to do something the Messenger of Allah ﷺ did not do?' until Allah opened his heart to it. Ibn Kathir, among the events of 12 AH: 'Al-Siddiq ordered Zayd ibn Thabit to gather the Qur'an from flat white stones, palm stalks and the breasts of men… as the hadith in Sahih al-Bukhari establishes.'",
          [ci("fadail_p390_391", "editor_cites_bukhari", "فكيف تأمرني ان أفعل شيئاً لم يفعله رسول الله ﷺ"), ci("bidayah_v4_v4_p79", "source_cites_bukhari", "فيها أمر الصديق زيد بن ثابت أن يجمع القرآن من اللخاف والعسب وصدور الرجال")],
          [fl("weak", "قال محقق الفضائل: إسناد هذا الطريق «منقطع بين الثوري والزهري»، وعزا الحديث إلى البخاري من طريق آخر.", "The Fada'il editor says this route's chain is 'broken between al-Thawri and al-Zuhri', and attributes the hadith to al-Bukhari through another route.")],
          [g("العسب", "ʿUsub", "جمع عسيب: جريدة النخل، وهي السعفة مما لا ينبت عليه الخوص (حاشية المحقق).", "Plural of ʿasib: a palm stalk stripped of leaves (editor's footnote).", "fadail_p390_391"),
           g("اللخاف", "Likhaf", "جمع لخفة، وهي حجارة بيض رقاق (حاشية المحقق).", "Plural of lakhfah: thin white stones (editor's footnote).", "bidayah_v4_v4_p79")]),
      ],
    },
    quiz: [
      q("v6q3", "compile-fadail", "ماذا قال أبو بكر أول ما اقترح عليه عمر جمع القرآن؟", "What did Abu Bakr first say when ʿUmar proposed gathering the Qur'an?",
        [["كيف أفعل شيئًا لم يفعله رسول الله ﷺ؟", "'How can I do something the Messenger ﷺ did not do?'"], ["افعل ما شئت", "'Do as you wish'"], ["نؤخره إلى ما بعد الردة", "'We will leave it until after the Ridda'"]], 0, "ثم شرح الله صدره لذلك.", "Then Allah opened his heart to it."),
    ],
  },
};

const L = (number: number, ar: string, en: string, cards: Card[], quiz: QuizQ[]): ScratchLesson =>
  ({ number, slug: `lesson-${number}`, status: "internal_unapproved", title: { ar, en }, cards, quiz });

export const lessonFamily = L(13, "أسرته وأهل بيته", "His Family and Household", [
  card("heirs", "facts", "من ورثه؟", "Who inherited from him?",
    "قال الذهبي: «وجاء أنه ورثه أبوه وزوجتاه أسماء بنت عميس، وحبيبة بنت خارجة والدة أم كلثوم، وعبدالرحمن، ومحمد، وعائشة، وأسماء، وأم كلثوم». وفي أسد الغابة أنه كان ينزل بالسُّنح «عند زوجته حبيبة بنت خارجة بن زيد بن أبي زهير، من بني الحارث بن الخزرج».",
    "Al-Dhahabi: 'It is reported that his heirs were his father, his two wives Asmaʾ bint ʿUmays and Habibah bint Kharijah — mother of Umm Kulthum — and ʿAbd al-Rahman, Muhammad, ʿAʾishah, Asmaʾ and Umm Kulthum.' Usd al-Ghabah says he lived at al-Sunh 'with his wife Habibah bint Kharijah ibn Zayd ibn Abi Zuhayr, of Banu al-Harith ibn al-Khazraj'.",
    [ci("siyar_k_p19_20", "grading_unverified"), ci("usd_p710", "grading_unverified")],
    [fl("no_chain", "صيغة «وجاء أنه» بلا إسناد في هذا الموضع.", "'It is reported that' — no chain at this point."),
     fl("gap", "لا تذكر هذه القائمة إلا من كان حيًا عند وفاته؛ ولم نجد في الكتب المرسلة قائمة كاملة بأزواجه جميعًا موثّقة بالصفحة.", "This list names only those alive at his death; we found no page-verified full list of all his wives in the books received.")]),
  card("father", "narrative", "أبوه أبو قحافة", "His father Abu Quhafah",
    "عن مجاهد: كُلِّم أبو قحافة في ميراثه من ابنه فقال: «قد رددت ذلك على ولده»، ثم لم يعش بعده إلا ستة أشهر وأيامًا. وقد مرّ في درس المدينة إسلام أبي قحافة يوم الفتح.",
    "From Mujahid: Abu Quhafah was spoken to about his share of his son's estate and said: 'I have given it back to his children.' He lived only six months and some days after him. His acceptance of Islam at the Conquest was covered in the Madinah lesson.",
    [ci("siyar_p19_e", "grading_unverified"), ci("ibn_hisham_p546", "grading_unverified")]),
  card("aisha-gift", "narrative", "وصيته لعائشة في النِّحلة", "His request to ʿAʾishah about the gift",
    "قال لعائشة عند موته: «نحلتك حائطًا وإن في نفسي منه شيئًا فرُدّيه على الميراث»، قالت: نعم. ثم ذكر أنهم منذ ولوا أمر المسلمين لم يأكلوا لهم دينارًا ولا درهمًا.",
    "At his death he told ʿAʾishah: 'I gave you an orchard, and I feel uneasy about it — return it to the estate.' She said yes. He then said that since taking charge of the Muslims they had not eaten a dinar or dirham of theirs.",
    [ci("siyar_p18_a", "grading_unverified")]),
  card("asma-wash", "facts", "زوجته أسماء بنت عميس", "His wife Asmaʾ bint ʿUmays",
    "قال الزهري: «أوصى أبو بكر أن تغسّله امرأته أسماء بنت عميس، فإن لم تستطع استعانت بابنه عبدالرحمن».",
    "Al-Zuhri: 'Abu Bakr instructed that his wife Asmaʾ bint ʿUmays should wash his body, and if she could not, she should get help from his son ʿAbd al-Rahman.'",
    [ci("siyar_p19_a", "grading_unverified")],
    [fl("no_chain", "قول الزهري (تابعي) دون ذكر من حدّثه.", "Al-Zuhri (a Successor) does not name his source.")]),
  card("glossary", "glossary", "مسرد المصطلحات", "Glossary", "تعريفات مأخوذة مما تقوله المقاطع نفسها.", "Definitions taken from what the passages themselves say.", [], undefined, [
    g("السُّنح", "al-Sunh", "منازل بني الحارث بن الخزرج بالمدينة، بينها وبين منزل رسول الله ﷺ ميل (حاشية محقق السير).", "The quarter of Banu al-Harith ibn al-Khazraj in Madinah, a mile from the Prophet's ﷺ house (Siyar editor's footnote).", "siyar_k_p19_20"),
  ]),
  card("learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
    "تأمل لا رواية: طلب من ابنته ردّ ما نحلها إلى الميراث وقال «إن في نفسي منه شيئًا». فالنص نفسه يُظهر أنه لم يخصّ أهله بشيء عند موته.",
    "A reflection, not a report: he asked his daughter to return his gift to the estate, saying 'I feel uneasy about it.' The text itself shows he did not single out his family for anything at his death.",
    [ci("siyar_p18_a", "grading_unverified")]),
], [
  q("q1", "heirs", "من أُمّ أم كلثوم بنت أبي بكر في نقل الذهبي؟", "Who was the mother of Umm Kulthum bint Abi Bakr, per al-Dhahabi?",
    [["حبيبة بنت خارجة", "Habibah bint Kharijah"], ["أسماء بنت عميس", "Asmaʾ bint ʿUmays"], ["أم رومان", "Umm Ruman"]], 0, "«وحبيبة بنت خارجة والدة أم كلثوم».", "'Habibah bint Kharijah, mother of Umm Kulthum.'"),
  q("q2", "father", "ماذا فعل أبو قحافة بميراثه من ابنه؟", "What did Abu Quhafah do with his share of his son's estate?",
    [["ردّه على ولد أبي بكر", "Gave it back to Abu Bakr's children"], ["تصدّق به", "Gave it in charity"], ["أخذه", "Kept it"]], 0, "رواية مجاهد.", "Mujahid's report."),
  q("q3", "asma-wash", "من أوصى أبو بكر أن تغسّله؟", "Whom did Abu Bakr ask to wash his body?",
    [["زوجته أسماء بنت عميس", "His wife Asmaʾ bint ʿUmays"], ["ابنته عائشة", "His daughter ʿAʾishah"], ["عمر بن الخطاب", "ʿUmar ibn al-Khattab"]], 0, "قول الزهري.", "Al-Zuhri's statement."),
]);

export const lessonSayings = L(14, "من أقواله وخطبه", "His Sayings and Sermons", [
  card("not-coveted", "narrative", "«ما كنت حريصًا على الإمارة»", "'I never coveted leadership'",
    "عن عبدالرحمن بن عوف: خطب أبو بكر واعتذر إلى الناس وقال: «والله ما كنت حريصًا على الإمارة يومًا ولا ليلة ولا سألتها الله في سر ولا علانية»، فقبل المهاجرون مقالته، وقال علي والزبير: «ما غضبنا إلا لأنا أُخّرنا عن المشاورة، وإنا نرى أبا بكر أحق الناس بها بعد رسول الله ﷺ».",
    "From ʿAbd al-Rahman ibn ʿAwf: Abu Bakr addressed the people, apologised and said: 'By Allah, I never coveted leadership for a day or a night, nor asked Allah for it in private or in public.' The Muhajirun accepted what he said, and ʿAli and al-Zubayr said: 'We were upset only because we were left out of the consultation; we hold Abu Bakr the most deserving of it after the Messenger of Allah ﷺ.'",
    [ci("siyar_k_p26_27", "grading_unverified", "حريصاً على الإمارة يوماً ولا ليلة ولا سألتها الله في سر ولا علانية.")]),
  card("jihad-sermon", "narrative", "خطبته في تجهيز جيوش الشام", "His sermon when equipping the Syrian armies",
    "لما اجتمعت عنده الجيوش قام خطيبًا فقال: «ألا إن لكل أمر جوامع، فمن بلغها فهي حسبه، ومن عمل لله كفاه الله، عليكم بالجدّ والقصد فإن القصد أبلغ، ألا إنه لا دين لأحد لا إيمان له، ولا إيمان لمن لا حسبة له، ولا عمل لمن لا نية له…».",
    "When the armies had gathered he stood to address them: 'Every matter has its essentials; whoever attains them, that suffices him. Whoever works for Allah, Allah suffices him. Hold to earnestness and moderation, for moderation reaches further. There is no religion for one who has no faith, no faith for one who does not seek Allah's reward, and no deed for one who has no intention…'",
    [ci("bidayah_v4_v4_p83", "grading_unverified", "عليكم بالجد والقصد فإن القصد أبلغ")],
    [fl("no_chain", "أورده ابن كثير دون إسناد في هذا الموضع، وبعض ألفاظه استدراك من الطبري بنص المحقق.", "Ibn Kathir gives it without a chain here, and the editor notes that some words are supplied from al-Tabari.")]),
  card("letter-sham", "narrative", "كتابه إلى أمراء الشام", "His letter to the commanders in Syria",
    "لما كتب إليه الأمراء بعظم جموع الروم كتب إليهم: «أن اجتمعوا وكونوا جندًا واحدًا والقوا جنود المشركين، فأنتم أنصار الله والله ناصر من نصره، وخاذل من كفره، ولن يؤتى مثلكم عن قلة، ولكن من تلقاء الذنوب فاحترسوا منها».",
    "When the commanders wrote about the size of the Byzantine forces, he wrote back: 'Join together as one army and meet the idolaters' forces. You are Allah's helpers, and Allah helps whoever helps Him and forsakes whoever disbelieves in Him. The likes of you will not be overcome through small numbers, but through sins — so guard against them.'",
    [ci("bidayah_v4_v4_p86", "grading_unverified", "ولن يؤتى مثلكم عن قلة، ولكن من تلقاء الذنوب فاحترسوا منها")],
    [fl("gap", "أحال المحقق على تاريخ الطبري (٣/٣٩٣) دون حكم.", "The editor refers to al-Tabari (3/393) without a grading.")]),
  card("birds", "facts", "«لأن تخطفني الطير…»", "'That the birds snatch me away…'",
    "من أقواله في إنفاذ جيش أسامة: «والله لأن تخطفني الطير أحبّ إليّ من أن أبدأ بشيء قبل أمر رسول الله ﷺ» (انظر الدرس ٩).",
    "One of his sayings on sending Usamah's army: 'By Allah, that the birds snatch me away is dearer to me than that I begin with anything before the command of the Messenger of Allah ﷺ' (see lesson 9).",
    [ci("siyar_k_p32_33", "grading_unverified", "والله لأن تخطفني الطير أحبّ إليّ من أن أبدأ بشيء قبل أمر رسول الله ﷺ")]),
  card("death-speech", "facts", "«من كان يعبد محمدًا…»", "'Whoever worshipped Muhammad…'",
    "أشهر كلماته يوم الوفاة: «أما بعد من كان منكم يعبد محمدًا فإن محمدًا قد مات، ومن كان منكم يعبد الله فإن الله حي لا يموت». وعزاه العمري إلى صحيح البخاري (انظر الدرس ٧).",
    "His best-known words on the day of the Prophet's ﷺ death: 'Whoever among you worshipped Muhammad, Muhammad has died; whoever worshipped Allah, Allah is Ever-Living and does not die.' Al-ʿUmari attributes it to Sahih al-Bukhari (see lesson 7).",
    [ci("umari_p555_556", "umari_cites_bukhari")]),
  card("farewell", "facts", "وداعه ليزيد بن أبي سفيان", "His farewell to Yazid ibn Abi Sufyan",
    "عن صالح بن كيسان: خرج أبو بكر ماشيًا ويزيد بن أبي سفيان راكبًا فجعل يوصيه، فلما فرغ قال: «أقرئك السلام وأستودعك الله».",
    "From Salih ibn Kaysan: Abu Bakr walked out on foot while Yazid ibn Abi Sufyan rode, advising him; when he finished he said: 'I give you my greetings and entrust you to Allah.'",
    [ci("bidayah_v4_v4_p84", "grading_unverified", "أقرئك السلام وأستودعك الله")]),
  card("learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
    "تأمل لا رواية: في كتابه إلى أمراء الشام جعل سبب الهزيمة «من تلقاء الذنوب» لا «عن قلة». فالنص نفسه يربط النصر بالطاعة قبل العدد.",
    "A reflection, not a report: in his letter to the Syrian commanders he located defeat in 'sins', not 'small numbers'. The text itself ties victory to obedience before numbers.",
    [ci("bidayah_v4_v4_p86", "grading_unverified")]),
], [
  q("q1", "jihad-sermon", "أكمل: «لا عمل لمن لا …»", "Complete: 'No deed for one who has no …'",
    [["نية له", "intention"], ["مال له", "wealth"], ["قوم له", "people"]], 0, "من خطبته في تجهيز الجيوش.", "From his sermon equipping the armies."),
  q("q2", "letter-sham", "بماذا قال أبو بكر إن مثل جيش الشام لا يُؤتى؟", "According to Abu Bakr, the Syrian army would not be overcome through what?",
    [["القلة", "Small numbers"], ["الذنوب", "Sins"], ["البرد", "The cold"]], 0, "«لن يؤتى مثلكم عن قلة، ولكن من تلقاء الذنوب».", "'Not through small numbers, but through sins.'"),
  q("q3", "not-coveted", "ما الذي قال علي والزبير إنه أغضبهما؟", "What did ʿAli and al-Zubayr say had upset them?",
    [["أنهما أُخّرا عن المشاورة", "Being left out of the consultation"], ["أنهما لم يُعطيا مالًا", "Not being given wealth"], ["أن أبا بكر كان صغيرًا", "Abu Bakr's age"]], 0, "رواية عبدالرحمن بن عوف عند الذهبي.", "ʿAbd al-Rahman ibn ʿAwf's report in Siyar."),
]);

export const lessonCharacter = L(15, "أخلاقه وزهده", "His Character and Asceticism", [
  card("blind-woman", "narrative", "العجوز العمياء: «أنت هو لعمري!»", "The blind old woman: 'So it is you!'",
    "يروي ابن الأثير أن عمر كان يتعاهد عجوزًا كبيرة عمياء في حواشي المدينة ليلًا فيستقي لها ويقوم بأمرها، فكان كلما جاء وجد غيره قد سبقه فأصلح ما أرادت، فرصده عمر «فإذا هو بأبي بكر الصديق الذي يأتيها، وهو يومئذ خليفة. فقال عمر: أنت هو لعمري!!».",
    "Ibn al-Athir narrates that ʿUmar used to look after an elderly blind woman on the outskirts of Madinah at night, drawing water for her and seeing to her needs. Each time he came he found someone had got there first. ʿUmar lay in wait, 'and it was Abu Bakr al-Siddiq who came to her — and he was caliph at the time. ʿUmar said: So it is you, by my life!'",
    [ci("usd_p710", "grading_unverified", "فرصده عمر فإذا هو بأبي بكر الصديق الذي يأتيها، وهو يومئذ خليفة.")],
    [fl("gap", "أسنده ابن الأثير ولم يُطبع حكم على إسناده.", "Ibn al-Athir gives a chain; no grading is printed.")]),
  card("milking", "narrative", "يحلب لجيرانه وهو خليفة", "Milking for his neighbours as caliph",
    "عن أنيسة: نزل فينا أبو بكر ثلاث سنين، سنتين قبل أن يُستخلف وسنة بعده، «فكان جواري الحي يأتينه بغنمهن، فيحلبهن لهن». وفي رواية أن جارية قالت لما بويع: «الآن لا يحلب لنا منائحنا»، فقال: «بلى، لعمري لأحلبنها لكم، وإني لأرجو أن لا يغيرني ما دخلت فيه عن خلق كنت عليه». قال ابن الأثير: «وله في تواضعه أخبار كثيرة».",
    "From Unaysah: Abu Bakr lived among us for three years — two before he became caliph and one after — 'and the girls of the quarter would bring him their sheep and he would milk them for them.' In another report, when he was given the pledge a girl said: 'Now he will not milk our goats for us.' He said: 'Indeed, by my life, I will milk them for you, and I hope that what I have taken on will not change a habit I had.' Ibn al-Athir: 'There are many reports of his humility.'",
    [ci("usd_p710", "grading_unverified", "وإني لأرجو أن لا يغيرني ما دخلت فيه عن خلق كنت عليه")],
    [fl("conflict", "تذكر رواية أنيسة أنه أقام فيهم سنة بعد الاستخلاف، وفي رواية أخرى في الصفحة نفسها أنه أقام بالسنح ستة أشهر بعد البيعة ثم تحوّل إلى المدينة.", "Unaysah's report says he stayed a year after becoming caliph; another report on the same page says he stayed at al-Sunh six months after the pledge and then moved into Madinah.")]),
  card("stipend-ref", "facts", "«من أين أُطعم عيالي؟»", "'How will I feed my family?'",
    "لما استُخلف خرج بأثواب يتّجر فيها حتى فرض له عمر وأبو عبيدة «كل يوم شطر شاة» (انظر الدرس ١٢). وقالت عائشة: لما استُخلف «ألقى كل دينار ودرهم عنده في بيت المال».",
    "When he became caliph he went out with cloth to trade until ʿUmar and Abu ʿUbaydah allotted him 'half a sheep each day' (see lesson 12). ʿAʾishah said that when he became caliph 'he put every dinar and dirham he had into the treasury'.",
    [ci("siyar_k_p14_b", "grading_unverified", "ففرضوا له كل يوم شطر شاة"), ci("siyar_p14", "grading_unverified")]),
  card("austerity-ref", "facts", "ما ترك من مال المسلمين", "What he left of the Muslims' wealth",
    "قال عند موته: «إني لا أعلم عند آل أبي بكر غير هذه اللقحة وغير هذا الغلام الصيقل… فإذا مت فادفعيه إلى عمر»، فلما دُفع إلى عمر قال: «رحم الله أبا بكر لقد أتعب من بعده».",
    "At his death he said: 'I know of nothing with the family of Abu Bakr except this milch camel and this sword-polishing servant… When I die, hand him over to ʿUmar.' When he was handed over, ʿUmar said: 'May Allah have mercy on Abu Bakr — he has made it hard for those after him.'",
    [ci("siyar_p19", "grading_unverified")]),
  card("knowledge", "facts", "عبارة الرؤيا والخطابة", "Interpreting dreams and oratory",
    "قال محمد بن سيرين: «كان أبو بكر أعبر هذه الأمة لرؤيا بعد النبي ﷺ». وقال الزبير بن بكار عن بعض أشياخه: «خطباء الصحابة: أبو بكر، وعلي».",
    "Muhammad ibn Sirin said: 'Abu Bakr was the best interpreter of dreams in this Ummah after the Prophet ﷺ.' Al-Zubayr ibn Bakkar said, from some of his elders: 'The orators among the Companions were Abu Bakr and ʿAli.'",
    [ci("siyar_k_p14_b", "grading_unverified", "كان أبو بكر أعبر هذه الأمة لرؤيا بعد النبي ﷺ.")],
    [fl("no_chain", "قول ابن سيرين (تابعي) بلا إسناد إلى أبي بكر، وقول الزبير بن بكار «عن بعض أشياخه» دون تسميتهم.", "Ibn Sirin (a Successor) gives no chain; al-Zubayr ibn Bakkar cites 'some of his elders' without naming them.")]),
  card("learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
    "تأمل لا رواية: قال لما بويع «أرجو أن لا يغيرني ما دخلت فيه عن خلق كنت عليه». فالنص نفسه يُظهر أنه خشي أن تغيّره الخلافة.",
    "A reflection, not a report: on taking the pledge he said 'I hope what I have taken on will not change a habit I had.' The text itself shows he feared the caliphate might change him.",
    [ci("usd_p710", "grading_unverified")]),
], [
  q("q1", "blind-woman", "من وجد عمر يخدم العجوز العمياء قبله؟", "Whom did ʿUmar find serving the blind woman before him?",
    [["أبا بكر وهو خليفة", "Abu Bakr, while caliph"], ["عثمان", "ʿUthman"], ["أبا عبيدة", "Abu ʿUbaydah"]], 0, "«فإذا هو بأبي بكر الصديق… وهو يومئذ خليفة».", "'It was Abu Bakr al-Siddiq… caliph at the time.'"),
  q("q2", "milking", "ماذا كان يفعل لجواري الحي؟", "What did he do for the girls of his quarter?",
    [["يحلب لهن غنمهن", "Milked their sheep"], ["يعلّمهن القرآن", "Taught them Qur'an"], ["يعطيهن المال", "Gave them money"]], 0, "رواية أنيسة.", "Unaysah's report."),
  q("q3", "knowledge", "بماذا وصفه ابن سيرين؟", "How did Ibn Sirin describe him?",
    [["أعبر الأمة للرؤيا بعد النبي ﷺ", "The best interpreter of dreams after the Prophet ﷺ"], ["أكثرهم رواية", "The greatest narrator"], ["أشجعهم", "The bravest"]], 0, "قول ابن سيرين عند الذهبي.", "Ibn Sirin's statement in Siyar."),
]);

export const lessonConquests = L(16, "فتوح العراق والشام", "The Conquests of Iraq and Syria", [
  card("iraq-orders", "narrative", "أوامره لخالد في العراق", "His orders to Khalid for Iraq",
    "لما فرغ خالد من اليمامة بعث إليه الصديق أن يسير إلى العراق ويبدأ بالأُبُلّة، «وأن يتألف الناس ويدعوهم إلى الله عز وجل، فإن أجابوا وإلا أخذ منهم الجزية فإن امتنعوا عن ذلك قاتلهم، وأمره أن لا يكره أحدًا على المسير معه، ولا يستعين بمن ارتد عن الإسلام وإن كان قد عاد إليه». وذكر المدائني أن خالدًا توجه إلى العراق في المحرم سنة اثنتي عشرة.",
    "When Khalid finished at Yamamah, al-Siddiq sent him to Iraq, starting with al-Ubullah, 'to win people over and call them to Allah; if they accepted, good; otherwise he should take jizyah from them; if they refused that, he should fight them. He ordered him not to force anyone to march with him, and not to seek help from anyone who had apostatised, even if he had returned to Islam.' Al-Madaʾini says Khalid set out for Iraq in Muharram 12 AH.",
    [ci("bidayah_v4_v4_p62", "grading_unverified", "وأمره أن لا يكره أحداً على المسير معه، ولا يستعين بمن ارتد عن الإسلام وإن كان [قد] عاد إليه.")],
    [fl("conflict", "اختلفوا: هل مضى خالد من اليمامة إلى العراق مباشرة أم رجع إلى المدينة أولًا؟ قال ابن كثير: «والمشهور الأول».", "They differed over whether Khalid went straight from Yamamah to Iraq or returned to Madinah first; Ibn Kathir: 'The well-known view is the first.'"),
     fl("no_chain", "أوامر أبي بكر هنا يسوقها ابن كثير دون إسناد.", "Ibn Kathir gives Abu Bakr's orders here without a chain.")]),
  card("chains", "narrative", "ذات السلاسل والفيل الذي ردّه", "The Battle of the Chains and the elephant he sent back",
    "سُمّيت الوقعة «ذات السلاسل لكثرة من سلسل بها من فرسان فارس». وبعث خالد بالفتح والخمس إلى الصديق «وبعث معه بفيل، فلما رآه نسوة أهل المدينة جعلن يقلن: أمن خلق الله هذا أم شيء مصنوع؟ فرده الصديق»، ونفّل خالدًا سلب هرمز، وكانت قلنسوته بمئة ألف. «ولم يكن خالد يتعرض للفلاحين ـ من لم يقاتل منهم ـ ولا لأولادهم».",
    "The battle was called 'Dhat al-Salasil (of the Chains) because of how many Persian horsemen chained themselves'. Khalid sent news of the victory and the fifth to al-Siddiq, 'and sent an elephant with it. When the women of Madinah saw it they said: Is this one of Allah's creatures or something man-made? Al-Siddiq sent it back.' He awarded Khalid Hurmuz's spoils, whose cap was worth a hundred thousand. 'Khalid did not touch the farmers who did not fight, nor their children.'",
    [ci("bidayah_v4_v4_p65", "grading_unverified", "فرده الصديق مع زر")],
    [fl("no_chain", "يسوقه ابن كثير دون إسناد في هذا الموضع (والمحقق يحيل على الطبري).", "Ibn Kathir gives it without a chain here.")]),
  card("sham-armies", "narrative", "عقد الألوية للشام", "Tying the banners for Syria",
    "في أول سنة ١٣ عقد الصديق لواء يزيد بن أبي سفيان «وخرج معه ماشيًا يوصيه… وجعل له دمشق»، وبعث أبا عبيدة «وجعل له نيابة حمص»، وعمرو بن العاص «على فلسطين»، «وأمر كل أمير أن يسلك طريقًا غير طريق الآخر». وكان أول لواء عقده ـ فيما يقال ـ لخالد بن سعيد بن العاص، فثناه عمر عنه فعزله أبو بكر عن الشام.",
    "At the start of 13 AH al-Siddiq tied Yazid ibn Abi Sufyan's banner, 'walked out with him advising him… and assigned him Damascus'; he sent Abu ʿUbaydah 'and gave him Hims', and ʿAmr ibn al-ʿAs 'over Palestine', 'and ordered each commander to take a route different from the others'. The first banner he tied — it is said — was for Khalid ibn Saʿid ibn al-ʿAs, but ʿUmar turned him against it and Abu Bakr removed him from the Syrian command.",
    [ci("bidayah_v4_v4_p83", "grading_unverified", "وأمر كل أمير أن يسلك طريقاً غير طريق الآخر، لما لحظ في ذلك من المصالح."), ci("bidayah_v4_v4_p84", "grading_unverified", "وكان أبو بكر بعث هذه الجيوش في أول سنة ثلاث عشرة.")],
    [fl("no_chain", "خبر خالد بن سعيد بصيغة «فيُقال».", "The Khalid ibn Saʿid report is introduced with 'it is said'.")]),
  card("khalid-to-sham", "facts", "«لأشغلنّ النصارى… بخالد»", "'I will occupy the Byzantines… with Khalid'",
    "قال الصديق: «والله لأشغلن النصارى عن وساوس الشيطان بخالد بن الوليد»، وبعث إليه وهو بالعراق ليقدم إلى الشام فيكون الأمير على من به، فإذا فرغ عاد إلى عمله بالعراق.",
    "Al-Siddiq said: 'By Allah, I will distract the Christians from the whisperings of Satan with Khalid ibn al-Walid,' and sent to him in Iraq to go to Syria and command those there, returning to Iraq when he was done.",
    [ci("bidayah_v4_v4_p86", "grading_unverified", "والله لأشغلن النصارى عن وساوس الشيطان بخالد بن الوليد.")]),
  card("yarmuk-news", "facts", "خبر وفاته يصل يوم اليرموك", "News of his death reaches Yarmuk",
    "قال ابن كثير: «قدم البريد بموت الصديق والمسلمون مصافو الروم يوم اليرموك، وأن خالدًا كتم ذلك عن المسلمين لئلا يقع وهن»، ثم انتقلت إمرة الشام إلى أبي عبيدة.",
    "Ibn Kathir: 'The courier arrived with news of al-Siddiq's death while the Muslims were drawn up against the Byzantines on the day of Yarmuk, and Khalid concealed it from the Muslims lest they weaken.' Command in Syria then passed to Abu ʿUbaydah.",
    [ci("bidayah_v4_v4_p99", "grading_unverified")]),
  card("hajj-12", "facts", "هل حجّ في خلافته؟", "Did he perform Hajj as caliph?",
    "قال ابن كثير في حوادث سنة ١٢: «وفيها حج بالناس أبو بكر الصديق… واستخلف على المدينة عثمان بن عفان. رواه ابن إسحاق»، ثم نقل عن ابن إسحاق: «وقال بعض الناس: لم يحج أبو بكر في خلافته، وأنه بعث على الموسم سنة ثنتي عشرة عمر بن الخطاب، أو عبد الرحمن بن عوف».",
    "Ibn Kathir, events of 12 AH: 'In it Abu Bakr al-Siddiq led the people in Hajj… and left ʿUthman ibn ʿAffan over Madinah. Ibn Ishaq narrated it.' He then quotes Ibn Ishaq: 'Some people said Abu Bakr did not perform Hajj during his caliphate, and sent ʿUmar ibn al-Khattab or ʿAbd al-Rahman ibn ʿAwf to lead the season in 12 AH.'",
    [ci("bidayah_v4_v4_p79", "grading_unverified", "قال ابن إسحاق: (وقال بعض الناس) لم يحج أبو بكر في خلافته")],
    [fl("conflict", "قولان في حجّه سنة ١٢؛ وفي الدرس ١٢ أن خليفة ذكر أنه استخلف قتادة بن النعمان على المدينة لما حجّ، وهنا عثمان.", "Two views on his Hajj in 12 AH; lesson 12 has Khalifah saying he left Qatadah ibn al-Nuʿman over Madinah when he went on Hajj, while here it is ʿUthman.")]),
  card("glossary", "glossary", "مسرد المصطلحات", "Glossary", "تعريفات مأخوذة مما تقوله المقاطع نفسها.", "Definitions taken from what the passages themselves say.", [], undefined, [
    g("ذات السلاسل", "Dhat al-Salasil", "وقعة سُمّيت بذلك «لكثرة من سلسل بها من فرسان فارس».", "A battle so named 'because of how many Persian horsemen were chained there'.", "bidayah_v4_v4_p65"),
    g("الأُبُلّة", "al-Ubullah", "«فرج الهند»، حيث أمر خالدًا أن يبدأ.", "'The frontier of India', where he told Khalid to begin.", "bidayah_v4_v4_p62"),
  ]),
  card("learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
    "تأمل لا رواية: أمر خالدًا ألا يكره أحدًا على المسير معه، وألا يستعين بمن ارتد ثم عاد. فالنص نفسه يُظهر أنه شرط في الجيش الرضا وصدق الثبات.",
    "A reflection, not a report: he told Khalid not to force anyone to march with him and not to use those who had apostatised and returned. The text itself shows he required willingness and proven steadfastness in the army.",
    [ci("bidayah_v4_v4_p62", "grading_unverified")]),
], [
  q("q1", "iraq-orders", "بأي مدينة أمر أبو بكر خالدًا أن يبدأ في العراق؟", "Where did Abu Bakr tell Khalid to begin in Iraq?",
    [["الأُبُلّة", "al-Ubullah"], ["الحيرة", "al-Hirah"], ["دمشق", "Damascus"]], 0, "«وأن يبدأ بفرج الهند، وهي الأبلة».", "'Begin at the frontier of India, which is al-Ubullah.'"),
  q("q2", "chains", "ماذا فعل أبو بكر بالفيل الذي أرسله خالد؟", "What did Abu Bakr do with the elephant Khalid sent?",
    [["ردّه", "Sent it back"], ["أبقاه في المدينة", "Kept it in Madinah"], ["باعه", "Sold it"]], 0, "«فرده الصديق مع زر».", "'Al-Siddiq sent it back with Zirr.'"),
  q("q3", "sham-armies", "أيّ أمير جُعلت له فلسطين؟", "Which commander was assigned Palestine?",
    [["عمرو بن العاص", "ʿAmr ibn al-ʿAs"], ["يزيد بن أبي سفيان", "Yazid ibn Abi Sufyan"], ["أبو عبيدة", "Abu ʿUbaydah"]], 0, "«وبعث عمرو بن العاص… وجعله على فلسطين».", "'He sent ʿAmr ibn al-ʿAs… over Palestine.'"),
  q("q4", "yarmuk-news", "لماذا كتم خالد خبر وفاة أبي بكر يوم اليرموك؟", "Why did Khalid conceal news of Abu Bakr's death at Yarmuk?",
    [["لئلا يقع وهن", "Lest the Muslims weaken"], ["لأنه لم يصدّقه", "He did not believe it"], ["بأمر عمر", "On ʿUmar's orders"]], 0, "نص ابن كثير.", "Ibn Kathir's words."),
]);
