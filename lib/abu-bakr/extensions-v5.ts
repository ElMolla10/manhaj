import type { Card, QuizQ, ScratchLesson } from "./types";
import { card, ci, fl, g, q } from "./extensions-01-06";

// Pass 5 (2026-10-16): Siyar A'lam al-Nubala, al-Khulafa' al-Rashidun volume (ed. Bashshar ʿAwwad Maʿruf),
// pp. 14, 20, 32-38, 47-49, transcribed from the page images. Same rules as before: verbatim quotes,
// gradings only as printed, author (al-Dhahabi) vs. editor judgments labelled separately, conflicts flagged.

export type V5 = { after: Record<string, Card[]>; quiz: QuizQ[] };

export const v5: Record<number, V5> = {
  9: {
    after: {
      usamah: [
        card("usamah-siyar", "narrative", "«لأن تخطفني الطير أحبّ إليّ»", "'I would rather the birds snatched me away'",
          "يروي الذهبي عن عروة أن جيش أسامة بلغ الجُرف ثم توقف لثقل مرض النبي ﷺ، فلما قُبض رجع أسامة إلى أبي بكر يتخوّف أن تكفر العرب، فخطب أبو بكر الناس وقال: «والله لأن تخطفني الطير أحبّ إليّ من أن أبدأ بشيء قبل أمر رسول الله ﷺ»، فبعثه، واستأذن أسامة في أن يُبقي عمر عنده. وفي رواية ابن لهيعة عن أبي الأسود عن عروة أن رجالًا من المهاجرين والأنصار كلّموه أن يُمسك الجيش خشية أن تميل العرب عليهم، فقال: «والذي نفسي بيده لأن تميل عليّ العرب أحبّ إليّ من أن أحبس جيشًا بعثهم رسول الله ﷺ». وعن الزهري أن مسير أسامة ذهابًا وإيابًا كان أربعين يومًا.",
          "Al-Dhahabi narrates from ʿUrwah that Usamah's army reached al-Jurf and halted because the Prophet ﷺ was gravely ill. When he passed away, Usamah returned to Abu Bakr, fearing that the Arabs would disbelieve. Abu Bakr addressed the people: 'By Allah, that the birds snatch me away is dearer to me than that I begin with anything before the command of the Messenger of Allah ﷺ.' He sent him, and asked Usamah's leave to keep ʿUmar with him. In Ibn Lahiʿah's report from Abu al-Aswad from ʿUrwah, men of the Muhajirun and Ansar urged him to hold the army back lest the Arabs turn on them, and he said: 'By Him in whose hand is my soul, that the Arabs turn on me is dearer to me than that I hold back an army the Messenger of Allah ﷺ sent.' Al-Zuhri said the expedition took forty days there and back.",
          [ci("siyar_k_p32_33", "grading_unverified", "والله لأن تخطفني الطير أحبّ إليّ من أن أبدأ بشيء قبل أمر رسول الله ﷺ"), ci("siyar_k_p32_33", "grading_unverified", "والذي نفسي بيده لأن تميل عليّ العرب أحبّ إليّ من أن أحبس جيشاً بعثهم رسول الله ﷺ")],
          [fl("gap", "رواية عروة هنا مرسلة (عروة لم يشهد الحادثة)، وفي الطريق الثاني ابن لهيعة؛ ولم يطبع المحقق حكمًا عليهما.", "ʿUrwah's report is mursal (he did not witness it) and the second route runs through Ibn Lahiʿah; the editor prints no grading for either.")]),
      ],
      "aswad-killing": [
        card("aswad-waqidi", "context", "رواية أخرى في قتل الأسود", "Another report on al-Aswad's killing",
          "ينقل الذهبي عن الواقدي عن رجاله أن أبا بكر بعث قيس بن مكشوح إلى اليمن «فقتل الأسود العنسي، هو وفيروز الديلمي»، وأن قيسًا ارتدّ بعد ذلك ثم أُسر فعفا عنه أبو بكر، وقُتل مع علي بصفين.",
          "Al-Dhahabi quotes al-Waqidi from his informants: Abu Bakr sent Qays ibn Makshuh to Yemen 'and he killed al-Aswad al-ʿAnsi, he and Fayruz al-Daylami'; Qays later apostatised, was captured, was pardoned by Abu Bakr, and was killed with ʿAli at Siffin.",
          [ci("siyar_k_p32_b", "grading_unverified")],
          [fl("conflict", "تجعل هذه الرواية بعثَ قيس من أبي بكر، بينما تذكر الروايات الأخرى في الدرس أن قتل الأسود كان قبيل وفاة النبي ﷺ وجاء خبره بعدها. لا نرجّح.", "This report has Abu Bakr sending Qays, whereas the other reports in this lesson place the killing just before the Prophet's ﷺ death, with the news arriving after it. We do not choose between them."),
           fl("weak", "الواقدي «عن رجاله» دون تسميتهم؛ ولا حكم مطبوع.", "Al-Waqidi 'from his informants', unnamed; no printed grading.")]),
      ],
      musaylimah: [
        card("yamamah-battle", "narrative", "يوم اليمامة: عقربا وحديقة الموت", "Yamamah: ʿAqraba and the Garden of Death",
          "عن عروة: سار خالد إلى مسيلمة فنزل بنو حنيفة بعقربا، فاقتتلوا قتالًا شديدًا وجال المسلمون جولة، فقال ثابت بن قيس حين رآهم مدبرين: «أفٍّ لكم ولما تعملون»، فكرّ المسلمون، وانهزم بنو حنيفة حتى اقتتلوا عند «حديقة الموت» أشدّ القتال، وقُتل مسيلمة، قتله وحشي. وقال الزهري: بنو حنيفة «يومئذ أكثر العرب عددًا وأشدّه شوكة، فاستشهد خلق كثير». ثم تحصّن الباقون، فصالح مجّاعةُ خالدًا على الذهب والفضة والسلاح والخيل ونصف الرقيق وحائط من كل قرية.",
          "From ʿUrwah: Khalid marched on Musaylimah; Banu Hanifah camped at ʿAqraba; the fighting was fierce and the Muslims fell back for a time. Seeing them retreat, Thabit ibn Qays said: 'Shame on you and on what you are doing!' The Muslims turned back, and Banu Hanifah were routed until they fought their hardest at the 'Garden of Death'. Musaylimah was killed — Wahshi killed him. Al-Zuhri said Banu Hanifah were 'that day the most numerous of the Arabs and the strongest, and a great many were martyred'. The rest took to their forts, and Mujjaʿah made terms with Khalid: the gold, silver, weapons and horses, half the captives, and one orchard from each village.",
          [ci("siyar_k_p47_48", "grading_unverified")],
          [fl("weak", "طريق الزهري هنا من رواية الموقّري، وقد قال المحقق في موضع آخر من الكتاب إنه «أحد المتروكين»؛ وطريق عروة من رواية ابن لهيعة.", "The al-Zuhri route here is via al-Muwaqqari, whom the editor elsewhere in this volume calls 'one of the abandoned narrators'; the ʿUrwah route is via Ibn Lahiʿah.")]),
        card("yamamah-date", "facts", "متى كانت اليمامة؟", "When was Yamamah?",
          "قال الذهبي: «اختلفوا في وقعة اليمامة متى كانت»: سنة إحدى عشرة (خليفة بن خياط والطبري)، أو آخر سنة إحدى عشرة (ابن قانع)، أو ربيع الأول سنة اثنتي عشرة (أبو معشر، وقال: جميع من قُتل يومئذ أربع مئة وخمسون رجلًا)، أو سنة اثنتي عشرة (الواقدي وابن سعد وغيرهما). ثم قال: «ولعل مبدأ وقعة اليمامة كان في آخر سنة إحدى عشرة… ومنتهاها في أوائل سنة اثنتي عشرة، فإنها بقيت أيامًا لمكان الحصار».",
          "Al-Dhahabi: 'They differed over when the Battle of Yamamah took place': in 11 AH (Khalifah ibn Khayyat and al-Tabari), at the end of 11 AH (Ibn Qaniʿ), in Rabiʿ al-Awwal 12 AH (Abu Maʿshar, who said 450 men in all were killed that day), or in 12 AH (al-Waqidi, Ibn Saʿd and others). He then says: 'Perhaps it began at the end of 11 AH… and ended early in 12 AH, since it lasted some days because of the siege.'",
          [ci("siyar_k_p49", "grading_unverified", "ولعل مبدأ وقعة اليمامة كان في آخر سنة إحدى عشرة كما قال ابن قانع، ومنتهاها في أوائل سنة اثنتي عشرة")],
          [fl("conflict", "الجمع بين القولين اجتهاد من الذهبي نفسه بصيغة «ولعل»، لا رواية.", "Reconciling the dates is al-Dhahabi's own tentative suggestion ('perhaps'), not a report."),
           fl("conflict", "عدد القتلى (٤٥٠) قول أبي معشر وحده في هذا الموضع.", "The figure of 450 killed is Abu Maʿshar's alone in this passage.")]),
      ],
    },
    quiz: [
      q("v5q1", "usamah-siyar", "ماذا قال أبو بكر لمن طلب منه حبس جيش أسامة؟", "What did Abu Bakr say to those who asked him to hold back Usamah's army?",
        [["لأن تميل عليّ العرب أحبّ إليّ من أن أحبس جيشًا بعثهم رسول الله ﷺ", "'That the Arabs turn on me is dearer to me than holding back an army the Messenger ﷺ sent'"], ["نؤخّره حتى تنتهي الردة", "'We will delay it until the Ridda is over'"], ["يخرج عمر أميرًا بدل أسامة", "'ʿUmar will lead it instead of Usamah'"]], 0,
        "في رواية عروة عند الذهبي.", "In ʿUrwah's report quoted by al-Dhahabi."),
      q("v5q2", "yamamah-date", "ما الذي رجّحه الذهبي في تاريخ اليمامة؟", "What did al-Dhahabi suggest about the date of Yamamah?",
        [["بدأت آخر سنة ١١ وانتهت أوائل سنة ١٢", "It began at the end of 11 AH and ended early in 12 AH"], ["كانت سنة ١٣ قطعًا", "It was definitely in 13 AH"], ["كانت في حياة النبي ﷺ", "It was in the Prophet's ﷺ lifetime"]], 0,
        "قالها بصيغة «ولعل».", "He put it tentatively ('perhaps')."),
      q("v5q3", "yamamah-battle", "من قتل مسيلمة في روايتي عروة والزهري؟", "Who killed Musaylimah according to the reports of ʿUrwah and al-Zuhri?",
        [["وحشي", "Wahshi"], ["خالد بن الوليد", "Khalid ibn al-Walid"], ["ثابت بن قيس", "Thabit ibn Qays"]], 0,
        "«وقُتل مسيلمة، قتله وحشي بحربة».", "'Musaylimah was killed; Wahshi killed him with a spear.'"),
    ],
  },
};

export const lesson13: ScratchLesson = {
  number: 12, slug: "lesson-12", status: "internal_unapproved",
  title: { ar: "كيف حكم: العطاء والعمّال وتركة النبي ﷺ", en: "How He Governed: Stipend, Officials and the Prophet's ﷺ Estate" },
  cards: [
    card("stipend", "facts", "من أين يُطعم عياله؟", "'How will I feed my family?'",
      "قال عطاء بن السائب: لما استُخلف أبو بكر أصبح وعلى رقبته أثواب يتّجر فيها، فلقيه عمر وأبو عبيدة فقال: «فمن أين أُطعم عيالي؟» فقالا: انطلق حتى نفرض لك، «ففرضوا له كل يوم شطر شاة». وقال عمر: إليّ القضاء، وقال أبو عبيدة: إليّ الفيء، فقال عمر: «لقد كان يأتي عليّ الشهر ما يختصم إليّ فيه اثنان». وعن ميمون بن مهران: جعلوا له ألفين وخمس مئة.",
      "ʿAtaʾ ibn al-Saʾib said: when Abu Bakr was made caliph he set out in the morning with cloth on his shoulders to trade. ʿUmar and Abu ʿUbaydah met him and he said: 'Then how will I feed my family?' They said: 'Come, we will allot you something,' 'and they allotted him half a sheep every day.' ʿUmar said: 'Judging is mine,' and Abu ʿUbaydah said: 'The fay' is mine.' ʿUmar said: 'A month would pass without two people bringing a dispute to me.' From Maymun ibn Mihran: they set it at two thousand five hundred.",
      [ci("siyar_k_p14_b", "grading_unverified", "ففرضوا له كل يوم شطر شاة"), ci("siyar_p14", "grading_unverified")],
      [fl("conflict", "مقدار العطاء يختلف بين الروايتين: «شطر شاة» كل يوم، و«ألفين وخمس مئة» (دون بيان المدة في النص).", "The reports give different amounts: 'half a sheep' a day, and 'two thousand five hundred' (the period is not stated in the text)."),
       fl("gap", "أحال المحقق على طبقات ابن سعد ٣/١٨٤-١٨٥ دون حكم على الأسانيد.", "The editor refers to Ibn Saʿd's Tabaqat 3/184-185 without grading the chains.")]),
    card("officials", "map", "عمّاله وأعوانه", "His officials and aides",
      "تحت عنوان «ذكر عمّال أبي بكر» ينقل الذهبي: استعمل أنس بن مالك على البحرين (عن موسى بن أنس). وعن خليفة بن خياط: وجّه زياد بن لبيد أو المهاجر بن أبي أمية على اليمن واستعمل الآخر على كدام، وأقرّ عثمان بن أبي العاص على الطائف، واستخلف قتادة بن النعمان على المدينة لما حجّ. وكان كاتبه عثمان بن عفان، «ويقال: كتب له زيد بن ثابت»، وحاجبه سُديد مولاه، ووزيره عمر بن الخطاب وكان على قضائه، ومؤذّنه سعد القرظ.",
      "Under the heading 'His governors', al-Dhahabi records: he appointed Anas ibn Malik over al-Bahrayn (from Musa ibn Anas). From Khalifah ibn Khayyat: he sent Ziyad ibn Labid or al-Muhajir ibn Abi Umayyah over Yemen and appointed the other over Kidam; he kept ʿUthman ibn Abi al-ʿAs over al-Taʾif; and he left Qatadah ibn al-Nuʿman in charge of Madinah when he went on Hajj. His scribe was ʿUthman ibn ʿAffan — 'it is also said Zayd ibn Thabit wrote for him' — his chamberlain was his freedman Sudayd, his minister was ʿUmar ibn al-Khattab, who also handled judging, and his muezzin was Saʿd al-Qaraz.",
      [ci("siyar_k_p20_b", "grading_unverified")],
      [fl("conflict", "خليفة نفسه يتردد بين زياد بن لبيد والمهاجر في اليمن، والكاتب بين عثمان وزيد بن ثابت («ويقال»).", "Khalifah himself is unsure whether Ziyad ibn Labid or al-Muhajir held Yemen, and the scribe is given as ʿUthman or ('it is said') Zayd ibn Thabit.")]),
    card("estate-request", "narrative", "«لا نورث، ما تركنا صدقة»", "'We are not inherited from; what we leave is charity'",
      "عن عائشة أن فاطمة سألت أبا بكر بعد وفاة النبي ﷺ أن يقسم لها ميراثها مما أفاء الله عليه، فقال: إن رسول الله ﷺ قال: «لا نورث، ما تركنا صدقة»، «فغضبت وهجرت أبا بكر حتى توفيت». وأرسل أزواج النبي ﷺ عثمانَ يسألن ميراثهن، فردّتهن عائشة: «ألم تسمعن من رسول الله ﷺ يقول: لا نورث، ما تركنا صدقة، إنما يأكل آل محمد في هذا المال». وعن أبي هريرة مرفوعًا: «لا يقتسم ورثتي دينارًا، ما تركت بعد نفقة نسائي ومؤونة عاملي فهو صدقة».",
      "From ʿAʾishah: after the Prophet's ﷺ death Fatimah asked Abu Bakr to give her her inheritance from what Allah had granted him as fay'. He said: the Messenger of Allah ﷺ said, 'We are not inherited from; what we leave is charity.' 'She became angry and kept away from Abu Bakr until she died.' The Prophet's ﷺ wives sent ʿUthman to ask for their inheritance, and ʿAʾishah turned them back: 'Did you not hear the Messenger of Allah ﷺ say: We are not inherited from; what we leave is charity — the family of Muhammad eat from this wealth?' From Abu Hurayrah, from the Prophet ﷺ: 'My heirs shall not divide a dinar; whatever I leave after the maintenance of my wives and the provision of my agent is charity.'",
      [ci("siyar_k_p34", "editor_cites_sahihayn", "فقال لها: إن رسول الله ﷺ قال: «لا نورث، ما تركنا صدقة» فغضبت وهجرت أبا بكر حتى توفيت.")],
      [fl("gap", "نقل الدرس هنا لفظ هذا الموضع فقط؛ لم نقابل ألفاظ البخاري ومسلم التي عزا إليها المحقق.", "This card quotes this page only; we have not compared the wording in al-Bukhari and Muslim to which the editor refers.")]),
    card("estate-other", "context", "روايات أخرى في المسألة وأحكامها", "Other reports on the question, and their gradings",
      "يورد الذهبي روايات أخرى، ويحكم هو والمحقق على بعضها: (١) خبر محمد بن السائب أن فاطمة قالت: «عمدت إلى فدك… فأخذتها»، فقال أبو بكر: حدثني رسول الله ﷺ «أن الله يطعم النبي الطعمة ما كان حيًا فإذا قبضه رفعها»؛ وقال الذهبي في المتن إن ابن السائب «متروك». (٢) خبر أبي الطفيل فيه: «أنت ورثت رسول الله ﷺ أم أهله؟ فقال: لا بل أهله» — قال الذهبي: «رواه أحمد في مسنده، وهو منكر، وأنكر ما فيه قوله: لا، بل أهله». (٣) خبر أنس في سهم ذوي القربى من الخمس، وفيه أن عمر ردّها بمثل جواب أبي بكر — قال المحقق: «هذا حديث ضعيف، لضعف يزيد الرقاشي».",
      "Al-Dhahabi brings further reports, and he or the editor grades some of them: (1) Muhammad ibn al-Saʾib's report that Fatimah said, 'You took Fadak…', and Abu Bakr replied that the Prophet ﷺ told him 'Allah grants the Prophet a provision while he lives, and when He takes him He lifts it' — al-Dhahabi says in the text that Ibn al-Saʾib is 'abandoned' (matruk). (2) Abu al-Tufayl's report, containing 'Did you inherit the Messenger of Allah ﷺ or his family?' — 'No, his family' — al-Dhahabi: 'Ahmad narrated it in his Musnad, and it is munkar; the most objectionable part is his saying: No, his family.' (3) Anas's report about the kinsfolk's share of the khumus, in which ʿUmar answered her as Abu Bakr had — the editor: 'This hadith is weak, because Yazid al-Raqashi is weak.'",
      [ci("siyar_k_p35", "author_matruk", "وقال محمد بن السائب ـ وهو متروك ـ"), ci("siyar_k_p35", "author_munkar", "رواه أحمد في «مسنده»، وهو منكر، وأنكر ما فيه قوله: «لا، بل أهله»."), ci("siyar_k_p35_36", "editor_weak", "هذا حديث ضعيف، لضعف يزيد الرقاشي.")],
      [fl("weak", "الحكمان الأولان للذهبي نفسه (المصنف) في المتن، والثالث لمحقق الطبعة في الحاشية.", "The first two judgments are al-Dhahabi's own (the author), in the text; the third is the edition's editor's, in a footnote."),
       fl("weak", "هذه الروايات الثلاث ضعيفة أو منكرة بنص الكتاب؛ لا يُبنى عليها.", "By the book's own words these three reports are weak or munkar; nothing should be built on them.")]),
    card("umar-testimony", "narrative", "شهادة عمر: «صادق بارّ راشد»", "ʿUmar's testimony: 'truthful, righteous, rightly guided'",
      "عن مالك بن أوس بن الحدثان: اختصم العباس وعلي عند عمر، فناشدهما عمر وعثمان ومن حضر: «هل تعلمان أن رسول الله ﷺ قال: لا نورث، ما تركنا صدقة؟» قالا: قد قال ذلك. ثم ذكر أن النبي ﷺ كان ينفق على أهله نفقة سنتهم من هذا المال ويجعل ما بقي مجعل مال الله، «ثم توفى الله نبيه، فقال أبو بكر: أنا ولي رسول الله ﷺ، فقبضها وعمل فيها بما عمل به رسول الله ﷺ فيها… والله يعلم أنه فيها لصادق بارّ راشد».",
      "From Malik ibn Aws ibn al-Hadathan: al-ʿAbbas and ʿAli brought a dispute to ʿUmar, and ʿUmar adjured them, with ʿUthman and others present: 'Do you know that the Messenger of Allah ﷺ said: We are not inherited from; what we leave is charity?' They said: 'He did say that.' He then explained that the Prophet ﷺ spent from this wealth on his family's yearly needs and put the rest where Allah's wealth goes, 'then Allah took His Prophet, and Abu Bakr said: I am the guardian of the Messenger of Allah ﷺ, and he took charge of it and dealt with it as the Messenger of Allah ﷺ had… and Allah knows that in it he was truthful, righteous, rightly guided, following the truth.'",
      [ci("siyar_k_p37_38", "editor_cites_bukhari", "فقال أبو بكر: أنا ولي رسول الله ﷺ، فقبضها وعمل فيها بما عمل به رسول الله ﷺ فيها")]),
    card("glossary", "glossary", "مسرد المصطلحات", "Glossary", "تعريفات مأخوذة مما تقوله المقاطع نفسها.", "Definitions taken from what the passages themselves say.", [], undefined, [
      g("فدك", "Fadak", "قرية على مسافة يومين من المدينة المنورة (حاشية المحقق).", "A village two days' journey from Madinah (editor's footnote).", "siyar_k_p35"),
      g("المماكسة", "Mumakasah", "انتقاص الثمن في البيع واستحطاطه (حاشية المحقق).", "Beating down the price in a sale (editor's footnote).", "siyar_k_p14_b"),
      g("الفيء", "Fay'", "ما خصّ الله به رسوله ﷺ «مما أفاء الله عليه»، وكان ينفق منه على أهله نفقة سنتهم.", "What Allah granted His Messenger ﷺ specially; he spent from it on his family's yearly needs.", "siyar_k_p37_38"),
    ]),
    card("learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
      "تأمل لا رواية: في رواية مالك بن أوس قال أبو بكر «أنا ولي رسول الله ﷺ» ثم «عمل فيها بما عمل به رسول الله ﷺ فيها». فالنص نفسه يجعل اتباع عمل النبي ﷺ هو حجته في هذا المال.",
      "A reflection, not a report: in Malik ibn Aws's account, Abu Bakr said 'I am the guardian of the Messenger of Allah ﷺ' and then 'dealt with it as the Messenger of Allah ﷺ had'. The text itself makes following the Prophet's ﷺ practice his argument over this wealth.",
      [ci("siyar_k_p37_38", "editor_cites_bukhari")]),
  ],
  quiz: [
    q("q1", "stipend", "ماذا قال أبو بكر لعمر وأبي عبيدة حين لقياه يتّجر بعد استخلافه؟", "What did Abu Bakr say when ʿUmar and Abu ʿUbaydah found him going to trade after becoming caliph?",
      [["فمن أين أُطعم عيالي؟", "'Then how will I feed my family?'"], ["لا حاجة لي في الخلافة", "'I have no need of the caliphate'"], ["اجعلوا لي بيت المال", "'Give me the treasury'"]], 0, "رواية عطاء بن السائب.", "ʿAtaʾ ibn al-Saʾib's report."),
    q("q2", "estate-request", "بماذا أجاب أبو بكر فاطمة حين سألته ميراثها؟", "How did Abu Bakr answer Fatimah when she asked for her inheritance?",
      [["«لا نورث، ما تركنا صدقة»", "'We are not inherited from; what we leave is charity'"], ["أعطاها فدك", "He gave her Fadak"], ["أحالها على عمر", "He referred her to ʿUmar"]], 0, "حديث عائشة، وعزاه المحقق إلى البخاري ومسلم.", "ʿAʾishah's hadith; the editor attributes it to al-Bukhari and Muslim."),
    q("q3", "estate-other", "ما حكم الذهبي على خبر أبي الطفيل «لا بل أهله»؟", "How did al-Dhahabi judge Abu al-Tufayl's report ('No, his family')?",
      [["منكر", "Munkar"], ["صحيح", "Sahih"], ["لم يحكم عليه", "He gave no judgment"]], 0, "«وهو منكر، وأنكر ما فيه قوله: لا، بل أهله».", "'It is munkar; the most objectionable part is: No, his family.'"),
    q("q4", "umar-testimony", "بماذا وصف عمر أبا بكر في تولّيه هذا المال؟", "How did ʿUmar describe Abu Bakr's handling of this wealth?",
      [["صادق بارّ راشد تابع للحق", "Truthful, righteous, rightly guided, following the truth"], ["مجتهد أخطأ", "A scholar who erred"], ["لم يصفه بشيء", "He did not describe him"]], 0, "رواية مالك بن أوس.", "Malik ibn Aws's report."),
    q("q5", "officials", "من استخلف أبو بكر على المدينة لما حجّ، في نقل خليفة؟", "Whom did Abu Bakr leave in charge of Madinah when he went on Hajj, per Khalifah?",
      [["قتادة بن النعمان", "Qatadah ibn al-Nuʿman"], ["عمر بن الخطاب", "ʿUmar ibn al-Khattab"], ["أنس بن مالك", "Anas ibn Malik"]], 0, "«ولما حجّ استخلف على المدينة قتادة بن النعمان».", "'When he went on Hajj he left Qatadah ibn al-Nuʿman over Madinah.'"),
  ],
};
