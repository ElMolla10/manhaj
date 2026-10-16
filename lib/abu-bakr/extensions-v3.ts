import type { Card } from "./types";
import { card, ci, fl, q } from "./extensions-01-06";
import type { QuizQ } from "./types";

// Gap-fill pass (2026-10-16): passages transcribed from the page images of the books Mohamed sent
// (Ibn Hisham, al-Raheeq al-Makhtum, Ibn Kathir's al-Fusul, Usd al-Ghabah, Zad al-Ma'ad v3, al-Bidayah mujallad 4).
// Same rules: every claim is quoted; gradings only where the book prints them; conflicts flagged.

export type V3 = { after: Record<string, Card[]>; quiz: QuizQ[] };

export const v3: Record<number, V3> = {
  1: {
    after: {
      atiq: [
        card("siddiq-name", "narrative", "لماذا سُمّي «عتيقًا» و«الصدّيق»؟", "Why 'ʿAtiq' and 'al-Siddiq'?",
          "يذكر ابن الأثير في أسد الغابة ثلاثة أقوال في سبب تسميته «عتيقًا»: لحسن وجهه وجماله (قاله الليث بن سعد)، أو لأنه لم يكن في نسبه شيء يُعاب به (قاله الزبير بن بكار)، أو لأن النبي ﷺ قال له: «أنت عتيق الله من النار»، وأسند هذا الأخير من طريق الترمذي عن عائشة. ثم أسند عن عائشة أنه لما أُسري بالنبي ﷺ إلى المسجد الأقصى وأصبح يحدّث الناس، ارتدّ ناس ممن كان آمن، فقال أبو بكر: «إني لأصدّقه فيما هو أبعد من ذلك، أصدّقه بخبر السماء غدوة أو روحة»، «فلذلك سُمّي أبو بكر الصدّيق».",
          "In Usd al-Ghabah, Ibn al-Athir gives three explanations of the name ʿAtiq: the beauty of his face (al-Layth ibn Saʿd), that there was nothing blameworthy in his lineage (al-Zubayr ibn Bakkar), or that the Prophet ﷺ told him 'You are Allah's freed one (ʿatiq) from the Fire' — the last with a chain through al-Tirmidhi from ʿAʾishah. He then narrates from ʿAʾishah that when the Prophet ﷺ was taken by night to al-Masjid al-Aqsa and told people the next morning, some who had believed turned back, and Abu Bakr said: 'I believe him in what is further than that — I believe him about news from heaven, morning and evening.' 'That is why Abu Bakr was named al-Siddiq.'",
          [ci("usd_p701", "grading_unverified")],
          [fl("conflict", "ابن الأثير نفسه يذكر أقوالًا مختلفة في سبب لقب «عتيق» ولا يرجّح بينها.", "Ibn al-Athir lists differing explanations for 'ʿAtiq' and does not choose between them."),
           fl("gap", "لم يطبع المحقق حكمًا على إسناد خبر الإسراء ولا على حديث الترمذي في هذا الموضع.", "No grading is printed here for the chain of the Isra report or the Tirmidhi hadith.")]),
        card("lineage", "facts", "نسبه وأمه", "His lineage and mother",
          "نسبه في أسد الغابة: عبد الله بن عثمان بن عامر بن عمرو بن كعب بن سعد بن تيم بن مرة بن كعب بن لؤي القرشي التيمي، واسم أبيه أبي قحافة عثمان. وأمه أم الخير سلمى بنت صخر بن عامر بن كعب بن سعد بن تيم بن مرة، ابنة عم أبي قحافة، وقيل اسمها ليلى؛ ورجّح ابن الأثير الأول.",
          "His lineage in Usd al-Ghabah: ʿAbdullah ibn ʿUthman ibn ʿAmir ibn ʿAmr ibn Kaʿb ibn Saʿd ibn Taym ibn Murrah ibn Kaʿb ibn Luʾayy, of Quraysh and Taym; his father Abu Quhafah's name was ʿUthman. His mother was Umm al-Khayr Salma bint Sakhr ibn ʿAmir ibn Kaʿb ibn Saʿd ibn Taym ibn Murrah, his father's cousin; some said her name was Layla. Ibn al-Athir prefers the first.",
          [ci("usd_p700", "grading_unverified")],
          [fl("gap", "لم نجد بعد نصًّا يصرّح بموضع التقاء نسبه بنسب النبي ﷺ؛ النص يسوق نسبه إلى مرة بن كعب فقط، ولا نستنتج الالتقاء من عندنا.", "No passage yet states explicitly where his lineage meets the Prophet's ﷺ; the text gives his line up to Murrah ibn Kaʿb, and we do not infer the meeting point ourselves.")]),
      ],
    },
    quiz: [
      q("v3q1", "siddiq-name", "بحسب خبر عائشة في أسد الغابة، متى سُمّي أبو بكر «الصدّيق»؟", "According to ʿAʾishah's report in Usd al-Ghabah, when was Abu Bakr named al-Siddiq?", [["بعد خبر الإسراء", "After the news of the Night Journey"], ["يوم بدر", "On the day of Badr"], ["يوم السقيفة", "On the day of al-Saqifah"]], 0, "قال: إني لأصدّقه فيما هو أبعد من ذلك… فلذلك سُمّي الصدّيق.", "He said he believed him in what was further than that — hence the name al-Siddiq."),
      q("v3q2", "lineage", "ما اسم أم أبي بكر في أسد الغابة؟", "What is Abu Bakr's mother's name in Usd al-Ghabah?", [["أم الخير سلمى بنت صخر", "Umm al-Khayr Salma bint Sakhr"], ["أسماء بنت عميس", "Asmaʾ bint ʿUmays"], ["أم رومان", "Umm Ruman"]], 0, "وأمه أم الخير سلمى بنت صخر.", "His mother was Umm al-Khayr Salma bint Sakhr."),
    ],
  },
  2: {
    after: {
      "no-hesitation": [
        card("isra-belief", "narrative", "تصديقه بخبر الإسراء", "Believing the Night Journey",
          "تروي عائشة — كما أسنده ابن الأثير — أن النبي ﷺ لما أُسري به إلى المسجد الأقصى أصبح يحدّث الناس بذلك، فارتدّ ناس ممن كان آمن به وصدّقه وفُتنوا. فأما أبو بكر فقال: «إني لأصدّقه فيما هو أبعد من ذلك، أصدّقه بخبر السماء غدوة أو روحة».",
          "ʿAʾishah relates — in a chain given by Ibn al-Athir — that when the Prophet ﷺ was taken by night to al-Masjid al-Aqsa and told people of it the next morning, some who had believed in him turned back and were tested. Abu Bakr said: 'I believe him in what is further than that: I believe him about news from heaven, morning and evening.'",
          [ci("usd_p701", "grading_unverified", "لما أسري بالنبي ﷺ إلى المسجد الأقصى، أصبح يحدث بذلك الناس، فارتد ناس ممن كان آمن وصدق به وفتنوا، فقال أبو بكر: إني لأصدقه فيما هو أبعد من ذلك، أصدقه بخبر السماء غدوة أو روحة")],
          [fl("gap", "لا حكم مطبوع على إسناد هذا الخبر في أسد الغابة.", "No grading of this report's chain is printed in Usd al-Ghabah.")]),
        card("isra-learn", "lesson", "ماذا نتعلّم؟ (تأمل)", "What we learn (reflection)",
          "تأمل لا رواية: النص نفسه يقابل بين من ارتدّ لما سمع الخبر وبين أبي بكر الذي جعل تصديقه بالوحي أساسًا لتصديقه بما هو أقرب، ويربط ابن الأثير لقبه «الصدّيق» بهذا الموقف.",
          "A reflection, not a report: the text itself contrasts those who turned back on hearing the news with Abu Bakr, who made his belief in revelation the ground for believing the nearer matter — and Ibn al-Athir ties his title al-Siddiq to this very stance.",
          [ci("usd_p701", "grading_unverified", "فلذلك سمي أبو بكر الصديق")]),
      ],
    },
    quiz: [
      q("v3q1", "isra-belief", "ماذا قال أبو بكر لما سمع أن ناسًا ارتدّوا بعد خبر الإسراء؟", "What did Abu Bakr say when people turned back after the news of the Night Journey?", [["إني لأصدّقه فيما هو أبعد من ذلك", "I believe him in what is further than that"], ["دعوني أسأله أولًا", "Let me ask him first"], ["لم يقل شيئًا", "He said nothing"]], 0, "«أصدّقه بخبر السماء غدوة أو روحة».", "'I believe him about news from heaven, morning and evening.'"),
    ],
  },
  3: {
    after: {
      mosque: [
        card("dughunna-reply", "narrative", "«أرضى بجوار الله»", "'I am content with Allah's protection'",
          "يروي ابن إسحاق عن عائشة: لما ضاقت مكة على أبي بكر استأذن النبي ﷺ في الهجرة فأذن له، فلقيه ابن الدغنة سيد الأحابيش بعد يوم أو يومين، فسأله فقال: أخرجني قومي وآذوني. فقال ابن الدغنة: «إنك لتزين العشيرة، وتعين على النوائب، وتفعل المعروف، وتكسب المعدوم»، وردّه في جواره. فلما شكت قريش أن صلاته وبكاءه بالقرآن يفتن صبيانهم ونساءهم، جاءه ابن الدغنة فطلب منه أن يدخل بيته، فقال أبو بكر: «أوَ أردّ عليك جوارك وأرضى بجوار الله؟» قال: فاردد عليّ جواري. قال: قد رددته عليك. فقام ابن الدغنة فأعلن ذلك لقريش.",
          "Ibn Ishaq relates from ʿAʾishah: when Makkah became too hard for Abu Bakr he asked the Prophet's ﷺ permission to emigrate and was given it. After a day or two Ibn al-Dughunnah, chief of the Ahabish, met him; Abu Bakr said his people had driven him out and harmed him. Ibn al-Dughunnah said: 'You adorn your clan, help in calamities, do good, and give to those who have nothing', and brought him back under his protection. When Quraysh complained that his prayer and weeping over the Qur'an would tempt their children and women, Ibn al-Dughunnah asked him to stay indoors. Abu Bakr said: 'Shall I rather return your protection to you and be content with Allah's protection?' He said: then return it. Abu Bakr said: I have returned it — and Ibn al-Dughunnah announced this to Quraysh.",
          [ci("ibn_hisham_p172", "grading_unverified")],
          [fl("gap", "لا حكم مطبوع على الإسناد في هذا الموضع من سيرة ابن هشام.", "No grading of the chain is printed at this point in Ibn Hisham.")]),
      ],
      freeing: [
        card("bilal", "narrative", "شراء بلال وعتقه", "Buying and freeing Bilal",
          "ذكر ابن إسحاق أن بلال بن رباح — وأمه حمامة — كان لبعض بني جمح، وكان أمية بن خلف يخرجه إذا حميت الظهيرة فيطرحه على ظهره في بطحاء مكة ويضع الصخرة العظيمة على صدره، ويقول: لا تزال هكذا حتى تموت أو تكفر بمحمد، فيقول بلال: «أحدٌ أحدٌ». ومرّ به أبو بكر يومًا — وكانت داره في بني جمح — فقال لأمية: «ألا تتقي الله في هذا المسكين؟ حتى متى؟» قال: أنت الذي أفسدته فأنقذه. فقال أبو بكر: عندي غلام أسود أجلد منه وأقوى على دينك أعطيكه به. فقبل، فأعطاه أبو بكر غلامه وأخذ بلالًا فأعتقه.",
          "Ibn Ishaq reports that Bilal ibn Rabah — his mother was Hamamah — belonged to some of Banu Jumah. Umayyah ibn Khalaf would take him out at the noon heat, throw him on his back in the valley of Makkah and have a huge rock put on his chest, saying: you will stay like this until you die or disbelieve in Muhammad; Bilal would say: 'One, One.' One day Abu Bakr, whose house was among Banu Jumah, passed by and said to Umayyah: 'Do you not fear Allah regarding this poor man? Until when?' Umayyah said: you corrupted him, so rescue him. Abu Bakr said: I have a black slave, sturdier than him and firmer in your religion — I will give him to you in exchange. Umayyah accepted; Abu Bakr gave his slave, took Bilal and freed him.",
          [ci("ibn_hisham_p146", "grading_unverified"), ci("raheeq_p82", "grading_unverified", "ومر به أبو بكر يوما وهم يصنعون ذلك به فاشتراه بغلام أسود، وقيل: بسبع أواق أو بخمس من الفضة، وأعتقه."), ci("fusul_p22_23", "grading_unverified")],
          [fl("conflict", "في ثمن بلال روايتان: عند ابن إسحاق مبادلة بغلام أسود، ونقل المباركفوري معه قولًا آخر: «بسبع أواق أو بخمس من الفضة».", "Two reports on Bilal's price: Ibn Ishaq has an exchange for a black slave; al-Mubarakpuri also cites 'seven or five uqiyahs of silver'.")]),
        card("freed-list", "facts", "من أعتقهم أيضًا", "Others he freed",
          "يلخّص ابن كثير في الفصول: كان الصدّيق إذا مرّ بأحد من الموالي يُعذَّب يشتريه من مواليه ويعتقه، منهم بلال وأمه حمامة، وعامر بن فهيرة، وأم عبس، وزنيرة، والنهدية وابنتها، وجارية لبني عدي كان عمر يعذّبها قبل أن يسلم. ويذكر المباركفوري أيضًا أبا فكيهة، وأن أبا بكر اشتراه وأعتقه بعد أن ظنّ معذّبوه أنه مات.",
          "Ibn Kathir summarises in al-Fusul: whenever al-Siddiq passed a client being tortured he bought him from his masters and freed him — among them Bilal and his mother Hamamah, ʿAmir ibn Fuhayrah, Umm ʿAbs, Zinnirah, al-Nahdiyyah and her daughter, and a slave girl of Banu ʿAdi whom ʿUmar used to beat before he became Muslim. Al-Mubarakpuri adds Abu Fukayhah, whom Abu Bakr bought and freed after his torturers thought he had died.",
          [ci("fusul_p22_23", "grading_unverified"), ci("raheeq_p82", "grading_unverified", "فمر به أبو بكر فاشتراه وأعتقه الله.")],
          [fl("no_chain", "قول ابن كثير «فيقال إنه نزلت فيه…» بصيغة التمريض.", "Ibn Kathir introduces the verses' revelation about him with 'it is said'.")]),
      ],
    },
    quiz: [
      q("v3q1", "bilal", "بماذا اشترى أبو بكر بلالًا في رواية ابن إسحاق؟", "In Ibn Ishaq's report, what did Abu Bakr give for Bilal?", [["غلام أسود أجلد منه", "A sturdier black slave"], ["مئة دينار", "A hundred dinars"], ["لا شيء", "Nothing"]], 0, "«عندي غلام أسود أجلد منه… أعطيكه به».", "'I have a black slave, sturdier than him… I will give him to you for him.'"),
      q("v3q2", "dughunna-reply", "بماذا أجاب أبو بكر حين طلب منه ابن الدغنة أن يدخل بيته؟", "How did Abu Bakr answer when Ibn al-Dughunnah asked him to stay indoors?", [["أردّ عليك جوارك وأرضى بجوار الله", "I return your protection and am content with Allah's"], ["سأترك الصلاة", "I will stop praying"], ["سأهاجر غدًا", "I will emigrate tomorrow"]], 0, "سيرة ابن هشام ص١٧٢.", "Ibn Hisham, p. 172."),
    ],
  },
  5: {
    after: {
      hajj: [
        card("hajj-year", "facts", "سنة الحجة: التاسعة", "The year of the Hajj: 9 AH",
          "عنوان الفصل عند ابن هشام: «حجّ أبي بكر بالناس، سنة تسع»، وفيه: أقام رسول الله ﷺ بقية رمضان وشوالًا وذا القعدة، ثم بعث أبا بكر أميرًا على الحج من سنة تسع ليقيم للمسلمين حجهم. ويذكر ابن كثير في الفصول أن رجوعه ﷺ من تبوك كان في رمضان سنة تسع، ثم بعث أبا بكر أميرًا على الحج «هذه السنة» وأردفه عليًّا بسورة براءة. ويقول ابن الأثير: هو أول من حج أميرًا في الإسلام.",
          "Ibn Hisham's section heading reads 'Abu Bakr leading the people in Hajj, year nine'; it says the Messenger ﷺ stayed the rest of Ramadan, Shawwal and Dhu al-Qaʿdah, then sent Abu Bakr as leader of the Hajj of year nine to lead the Muslims' pilgrimage. Ibn Kathir in al-Fusul says the return from Tabuk was in Ramadan of year nine, then he sent Abu Bakr as leader of the Hajj 'that year' and sent ʿAli after him with Surat Baraʾah. Ibn al-Athir: he was the first to lead the Hajj as amir in Islam.",
          [ci("ibn_hisham_p611_b", "grading_unverified"), ci("fusul_p124", "grading_unverified"), ci("fusul_p126", "grading_unverified"), ci("usd_p713", "grading_unverified", "وأول من حج أميراً في الإسلام، فإن رسول الله ﷺ فتح مكة سنة ثمان، وسير أبا بكر يحج بالناس أميراً سنة تسع")]),
        card("hajj-narrative", "narrative", "«أمير أو مأمور؟»", "'Commander or commanded?'",
          "يروي المباركفوري أن عليًّا لحق بأبي بكر بالعَرْج أو بضَجْنان، فقال أبو بكر: «أمير أو مأمور؟» قال علي: بل مأمور. ثم مضيا، وأقام أبو بكر للناس حجهم، حتى إذا كان يوم النحر قام علي عند الجمرة فأذّن بما أمره به رسول الله ﷺ. وبعث أبو بكر رجالًا ينادون: ألا لا يحج بعد هذا العام مشرك ولا يطوف بالبيت عريان. وفي الصحيحين — كما ينقل ابن القيم — عن أبي هريرة: بعثني أبو بكر في تلك الحجة في مؤذّنين يوم النحر يؤذّنون بمنى بذلك.",
          "Al-Mubarakpuri relates that ʿAli caught up with Abu Bakr at al-ʿArj or Dajnan; Abu Bakr asked: 'Commander or commanded?' ʿAli said: commanded. They went on; Abu Bakr led the people's Hajj, and on the Day of Sacrifice ʿAli stood at the Jamrah and proclaimed what the Messenger ﷺ had ordered. Abu Bakr sent men to call out: no idolater shall make Hajj after this year, and no one shall circle the House naked. In the two Sahihs — as Ibn al-Qayyim cites — Abu Hurayrah says: Abu Bakr sent me in that Hajj among callers on the Day of Sacrifice to proclaim this at Mina.",
          [ci("raheeq_p417", "grading_unverified"), ci("zad_v3_p747_748", "source_cites_sahihayn", "وفي «الصحيحين» عن أبي هريرة قال: بعثني أبو بكر في تلك الحجة في مؤذنين بعثهم يوم النحر يؤذنون بمنى أن «لا يحج بعد هذا العام مشرك ولا يطوف بالبيت عريان»")],
          [fl("conflict", "اختُلف في شهر هذه الحجة: يقول المباركفوري «في ذي القعدة أو ذي الحجة»، وذكر ابن القيم قولين: في ذي الحجة، أو في ذي القعدة بسبب النسيء (قول مجاهد وغيره).", "The month is disputed: al-Mubarakpuri says 'in Dhu al-Qaʿdah or Dhu al-Hijjah'; Ibn al-Qayyim records two views — Dhu al-Hijjah, or Dhu al-Qaʿdah because of the intercalation (al-nasiʾ), the view of Mujahid and others.")]),
        card("hudaybiyyah", "narrative", "الحديبية: «الزم غرزه»", "Hudaybiyyah: 'Hold fast to his stirrup'",
          "يروي ابن إسحاق عن الزهري: لما التأم أمر الصلح ولم يبق إلا الكتاب، وثب عمر فأتى أبا بكر فقال: أليس برسول الله؟ أولسنا بالمسلمين؟ أوليسوا بالمشركين؟ فعلام نعطي الدنية في ديننا؟ فقال أبو بكر: «يا عمر، الزم غرزه، فإني أشهد أنه رسول الله». ثم أتى عمر النبي ﷺ فسأله مثل ذلك فقال: «أنا عبد الله ورسوله، لن أخالف أمره ولن يضيّعني». وقال ابن كثير في الفصول: فكان جوابه ﷺ كما أجابه الصدّيق، وقد استقصى البخاري الحديث في صحيحه.",
          "Ibn Ishaq relates from al-Zuhri: when the truce was settled and only the writing remained, ʿUmar went to Abu Bakr: Is he not the Messenger of Allah? Are we not Muslims? Are they not idolaters? Then why accept humiliation in our religion? Abu Bakr said: 'ʿUmar, hold fast to his stirrup, for I bear witness that he is the Messenger of Allah.' ʿUmar then asked the Prophet ﷺ the same, who said: 'I am Allah's servant and messenger; I will not go against His command and He will not abandon me.' Ibn Kathir notes in al-Fusul that the Prophet's ﷺ answer matched al-Siddiq's, and that al-Bukhari gives the hadith in full in his Sahih.",
          [ci("ibn_hisham_p503_b", "grading_unverified"), ci("fusul_p96", "grading_unverified"), ci("raheeq_p333", "grading_unverified")],
          [fl("gap", "يذكر ابن كثير أن البخاري استقصى الحديث في صحيحه، لكن نص البخاري نفسه لم يُستخرج هنا بعد.", "Ibn Kathir says al-Bukhari gives the hadith in full, but al-Bukhari's own text has not been extracted here yet."), fl("conflict", "في لفظ المباركفوري زيادة: «فاستمسك بغرزه حتى تموت، فوالله إنه لعلى الحق».", "Al-Mubarakpuri's wording adds: 'Hold fast to his stirrup until you die, for by Allah he is upon the truth.'")]),
        card("tabuk", "facts", "تبوك: ماله كله", "Tabuk: all his wealth",
          "يذكر المباركفوري في تجهيز جيش تبوك أن أبا بكر جاء بماله كله ولم يترك لأهله إلا الله ورسوله، وكانت أربعة آلاف درهم، وهو أول من جاء بصدقته، وجاء عمر بنصف ماله. ويروي ابن إسحاق عن ابن مسعود أنه رأى في غزوة تبوك عبد الله ذا البجادين قد مات، والنبي ﷺ في حفرته، وأبو بكر وعمر يُدلّيانه إليه، والنبي ﷺ يقول: «أدنيا إليّ أخاكما».",
          "Al-Mubarakpuri, on equipping the Tabuk army: Abu Bakr brought all his wealth, leaving his family only Allah and His Messenger — four thousand dirhams — and was the first to bring his charity; ʿUmar brought half his wealth. Ibn Ishaq relates from Ibn Masʿud that during the Tabuk expedition he saw that ʿAbdullah Dhu al-Bijadayn had died, the Prophet ﷺ was in his grave, and Abu Bakr and ʿUmar were lowering him to him while he said: 'Bring your brother closer to me.'",
          [ci("raheeq_p410", "grading_unverified"), ci("ibn_hisham_p603", "grading_unverified")],
          [fl("gap", "خبر الإنفاق في تبوك منقول عند المباركفوري دون إسناد في الصفحة.", "The Tabuk spending report is given by al-Mubarakpuri without a chain on the page.")]),
        card("conquest", "narrative", "فتح مكة: إسلام أبي قحافة", "Conquest of Makkah: Abu Quhafah's Islam",
          "تروي أسماء بنت أبي بكر — عند ابن إسحاق — أن أبا قحافة وقد كُفّ بصره صعد بابنة له على أبي قبيس فرأت جيش الفتح. فلما دخل رسول الله ﷺ مكة والمسجد، أتى أبو بكر بأبيه يقوده، فقال ﷺ: «هلّا تركت الشيخ في بيته حتى أكون أنا آتيه فيه». فقال أبو بكر: يا رسول الله، هو أحق أن يمشي إليك من أن تمشي إليه أنت. فأجلسه بين يديه ومسح صدره ثم قال: «أسلم» فأسلم. ثم قام أبو بكر يسأل عن طوق أخته الذي أُخذ فلم يجبه أحد، فقال: «أي أُخيّة، احتسبي طوقك».",
          "Asmaʾ bint Abi Bakr relates — in Ibn Ishaq — that Abu Quhafah, by then blind, had a young daughter take him up Abu Qubays, from where she saw the conquering army. When the Messenger ﷺ entered Makkah and the Mosque, Abu Bakr brought his father, leading him. The Prophet ﷺ said: 'Why did you not leave the old man at home so I could come to him?' Abu Bakr said: 'Messenger of Allah, it is more fitting that he walk to you than that you walk to him.' He sat him before him, wiped his chest and said: 'Accept Islam', and he did. Then Abu Bakr asked publicly for his sister's necklace that had been taken; no one answered, and he said: 'My little sister, count your necklace with Allah.'",
          [ci("ibn_hisham_p546", "grading_unverified")],
          [fl("gap", "طبع المحقق تخريجًا فقط (مجمع الزوائد ٦/١٧٣–١٧٤؛ مسند أحمد ٣/٣٣٨) دون حكم.", "The editor prints only references (Majmaʿ al-Zawaʾid 6/173–174; Musnad Ahmad 3/338), no grading.")]),
      ],
    },
    quiz: [
      q("v3q1", "hajj-year", "في أي سنة بعث النبي ﷺ أبا بكر أميرًا على الحج؟", "In which year did the Prophet ﷺ send Abu Bakr to lead the Hajj?", [["سنة تسع", "Year 9"], ["سنة ست", "Year 6"], ["سنة عشر", "Year 10"]], 0, "ابن هشام ص٦١١: «أميرًا على الحج من سنة تسع».", "Ibn Hisham p. 611: 'leader of the Hajj of year nine'."),
      q("v3q2", "hudaybiyyah", "ماذا قال أبو بكر لعمر في الحديبية؟", "What did Abu Bakr tell ʿUmar at Hudaybiyyah?", [["الزم غرزه فإني أشهد أنه رسول الله", "Hold fast to his stirrup; I bear witness he is the Messenger of Allah"], ["ارجع إلى المدينة", "Go back to Madinah"], ["قاتلهم", "Fight them"]], 0, "ابن هشام ص٥٠٣.", "Ibn Hisham p. 503."),
      q("v3q3", "conquest", "من أسلم يوم فتح مكة بعد أن جاء به أبو بكر يقوده؟", "Who accepted Islam at the Conquest after Abu Bakr led him in?", [["أبوه أبو قحافة", "His father Abu Quhafah"], ["أبو سفيان", "Abu Sufyan"], ["سهيل بن عمرو", "Suhayl ibn ʿAmr"]], 0, "ابن هشام ص٥٤٦.", "Ibn Hisham p. 546."),
    ],
  },
  9: {
    after: {
      usamah: [
        card("aswad", "facts", "مقتل الأسود العنسي", "The killing of al-Aswad al-ʿAnsi",
          "يقول ابن كثير: أمضى أبو بكر جيش أسامة بن زيد في آخر ربيع الأول، وأتى مقتل الأسود في آخر ربيع الأول بعد مخرج أسامة، فكان ذلك أول فتح فتح أبو بكر وهو بالمدينة.",
          "Ibn Kathir: Abu Bakr dispatched Usamah ibn Zayd's army at the end of Rabiʿ al-Awwal, and news of al-Aswad's killing came at the end of Rabiʿ al-Awwal after Usamah had left — the first victory of Abu Bakr while he was in Madinah.",
          [ci("bidayah_v4_v4_p12", "grading_unverified")],
          [fl("gap", "تفاصيل مقتل الأسود (من قتله وكيف) لم تُستخرج بعد بنص موثق.", "The details of how and by whom al-Aswad was killed have not yet been extracted.")]),
      ],
      zakah: [
        card("zakah-debate", "narrative", "«والله لأقاتلنّ من فرّق بين الصلاة والزكاة»", "'By Allah, I will fight whoever separates prayer and zakah'",
          "يذكر ابن كثير أن الصحابة كلّموا الصدّيق أن يترك مانعي الزكاة ويتألّفهم فأبى. وروى الجماعة إلا ابن ماجه عن أبي هريرة أن عمر قال لأبي بكر: علامَ تقاتل الناس وقد قال رسول الله ﷺ: «أمرت أن أقاتل الناس حتى يشهدوا أن لا إله إلا الله…»؟ فقال أبو بكر: «والله لو منعوني عناقًا — وفي رواية: عقالًا — كانوا يؤدّونه إلى رسول الله ﷺ لأقاتلنّهم على منعها، إن الزكاة حق المال، والله لأقاتلنّ من فرّق بين الصلاة والزكاة». قال عمر: فما هو إلا أن رأيت الله قد شرح صدر أبي بكر للقتال فعرفت أنه الحق. ويقول ابن كثير في الفصول إن الصدّيق قاتلهم «إلى أن دانوا بالحق وأدّوا الزكاة».",
          "Ibn Kathir notes that the Companions urged al-Siddiq to leave those refusing zakah alone and win them over, and he refused. The six collections except Ibn Majah report from Abu Hurayrah that ʿUmar asked Abu Bakr how he could fight people when the Messenger ﷺ said 'I have been commanded to fight people until they testify there is no god but Allah…'. Abu Bakr said: 'By Allah, if they withheld from me a young goat — in another wording, a hobbling cord — that they used to give the Messenger ﷺ, I would fight them over it. Zakah is the right due on wealth. By Allah, I will fight whoever separates prayer and zakah.' ʿUmar said: then I saw that Allah had opened Abu Bakr's chest to fighting, and I knew it was the truth. In al-Fusul Ibn Kathir says al-Siddiq fought them 'until they submitted to the truth and paid the zakah'.",
          [ci("bidayah_v4_v4_p18_b", "source_cites_sahihayn"), ci("fusul_p216", "grading_unverified")]),
      ],
      "dhu-qassah": [
        card("eleven-banners", "facts", "الألوية الأحد عشر", "The eleven banners",
          "يروي سيف بن عمر — كما ينقله ابن كثير — أن أبا بكر عقد بعد عودة جيش أسامة أحد عشر لواء: لخالد بن الوليد إلى طليحة بن خويلد ثم إلى مالك بن نويرة بالبطاح، ولعكرمة بن أبي جهل إلى مسيلمة وبعث شرحبيل بن حسنة في أثره، وللمهاجر بن أبي أمية إلى جنود العنسي، ولخالد بن سعيد إلى مشارف الشام، ولعمرو بن العاص إلى قضاعة، ولحذيفة بن محصن «وأمره بأهل دبا وبعرفجة وهرثمة»، ولطرفة بن حاجب إلى بني سليم، ولسويد بن مقرن إلى تهامة اليمن، وللعلاء بن الحضرمي إلى البحرين، وكتب لكل أمير عهده.",
          "Sayf ibn ʿUmar relates — as Ibn Kathir cites — that after Usamah's army returned Abu Bakr tied eleven banners: Khalid ibn al-Walid against Tulayhah ibn Khuwaylid and then Malik ibn Nuwayrah at al-Butah; ʿIkrimah ibn Abi Jahl against Musaylimah, with Shurahbil ibn Hasanah sent after him; al-Muhajir ibn Abi Umayyah against al-ʿAnsi's forces; Khalid ibn Saʿid to the borders of Syria; ʿAmr ibn al-ʿAs to Qudaʿah; Hudhayfah ibn Mihsan, ‘ordered against the people of Daba and ʿArfajah and Harthamah’ (as the text reads); Tarafah ibn Hajib to Banu Sulaym; Suwayd ibn Muqarrin to Tihamat al-Yaman; and al-ʿAlaʾ ibn al-Hadrami to al-Bahrayn. He wrote each commander his charge.",
          [ci("bidayah_v4_v4_p22_23", "grading_unverified")],
          [fl("no_chain", "الخبر من رواية سيف بن عمر عن شيوخه، ولم يطبع المحقق حكمًا عليه.", "The report comes through Sayf ibn ʿUmar from his teachers; the edition prints no grading.")]),
        card("tulayhah", "narrative", "بُزاخة: هزيمة طليحة", "Buzakhah: Tulayhah's defeat",
          "يروي ابن كثير أن خالدًا سار حتى التقى طليحة الأسدي بمكان يقال له بُزاخة، ومع طليحة عيينة بن حصن في سبعمئة من بني فزارة. وجلس طليحة ملتفًّا في كساء «يتنبأ لهم» فيما يزعم، وكلما ضجر عيينة من القتال جاءه يسأله: أجاءك جبريل؟ حتى قال في الثالثة: «يا بني فزارة انصرفوا»، فانهزم الناس عن طليحة، فركب فرسًا أعدّها وأركب امرأته النوار، وانهزم بها إلى الشام. فقالت بنو عامر وسليم وهوازن: ندخل فيما خرجنا منه، ونؤمن بالله ورسوله.",
          "Ibn Kathir relates that Khalid marched until he met Tulayhah al-Asadi at a place called Buzakhah; with Tulayhah was ʿUyaynah ibn Hisn with seven hundred of Banu Fazarah. Tulayhah sat wrapped in a cloak 'prophesying' for them, as he claimed; each time ʿUyaynah tired of fighting he came to ask: has Jibril come to you? The third time ʿUyaynah said: 'Banu Fazarah, withdraw', and the people broke away from Tulayhah. He mounted a horse he had readied, put his wife al-Nawar on a camel, and fled with her to Syria. Banu ʿAmir, Sulaym and Hawazin said: we will re-enter what we left, and believe in Allah and His Messenger.",
          [ci("bidayah_v4_v4_p25", "grading_unverified"), ci("bidayah_v4_v4_p26", "grading_unverified")],
          [fl("no_chain", "يبدأ ابن كثير الخبر بـ«قالوا» دون إسناد في الصفحة.", "Ibn Kathir opens with 'they said', with no chain on the page.")]),
        card("sajah", "facts", "سجاح وبنو تميم", "Sajah and Banu Tamim",
          "يذكر ابن كثير أن بني تميم اختلفت آراؤهم أيام الردة: منهم من ارتدّ ومنع الزكاة، ومنهم من بعث بالصدقات إلى الصدّيق، ومنهم من توقّف. فأقبلت سجاح بنت الحارث التغلبية من الجزيرة — وهي من نصارى العرب وقد ادّعت النبوة — ومعها جنود، وقد عزموا على غزو أبي بكر الصدّيق.",
          "Ibn Kathir says Banu Tamim were divided during the Riddah: some apostatised and withheld zakah, some sent their alms to al-Siddiq, some waited. Then Sajah bint al-Harith of Taghlib came from al-Jazirah — a Christian Arab who had claimed prophethood — with troops, intending to attack Abu Bakr al-Siddiq.",
          [ci("bidayah_v4_v4_p28", "grading_unverified")],
          [fl("gap", "بقية قصة سجاح ومآلها لم تُستخرج بعد.", "The rest of Sajah's story and its outcome has not yet been extracted.")]),
      ],
    },
    quiz: [
      q("v3q1", "aswad", "بحسب ابن كثير، ما أول فتح فتحه أبو بكر وهو بالمدينة؟", "According to Ibn Kathir, what was Abu Bakr's first victory while in Madinah?", [["مقتل الأسود العنسي", "The killing of al-Aswad al-ʿAnsi"], ["فتح دمشق", "The conquest of Damascus"], ["اليمامة", "al-Yamamah"]], 0, "البداية ج٤ ص١٢.", "al-Bidayah vol. 4 p. 12."),
      q("v3q2", "tulayhah", "أين التقى خالد بطليحة؟", "Where did Khalid meet Tulayhah?", [["بُزاخة", "Buzakhah"], ["ذو القصة", "Dhu al-Qassah"], ["البطاح", "al-Butah"]], 0, "البداية ج٤ ص٢٥.", "al-Bidayah vol. 4 p. 25."),
      q("v3q3", "zakah-debate", "ما الذي قال أبو بكر إنه سيقاتل من فرّق بينهما؟", "What did Abu Bakr say he would fight anyone who separated?", [["الصلاة والزكاة", "Prayer and zakah"], ["الصوم والحج", "Fasting and Hajj"], ["الشهادتين", "The two testimonies"]], 0, "«والله لأقاتلنّ من فرّق بين الصلاة والزكاة».", "'By Allah, I will fight whoever separates prayer and zakah.'"),
    ],
  },
  11: {
    after: {
      death: [
        card("death-year", "facts", "سنة الوفاة: ١٣ هـ", "Year of death: 13 AH",
          "قال ابن إسحاق — كما في أسد الغابة —: توفي أبو بكر يوم الجمعة لسبع ليال بقين من جمادى الآخرة سنة ثلاث عشرة، وصلى عليه عمر. وأسند ابن الأثير عن عائشة أن مرضه بدأ باغتساله في يوم بارد، فحُمّ خمسة عشر يومًا لا يخرج إلى الصلاة، وأمر عمر أن يصلي بالناس، وتوفي مساء ليلة الثلاثاء لثمان ليال بقين من جمادى الآخرة سنة ثلاث عشرة، وكانت خلافته سنتين وثلاثة أشهر وعشر ليال، وتوفي ابن ثلاث وستين سنة. وقال ابن كثير: كانت وفاته يوم الإثنين عشية لثمان بقين من جمادى الآخرة سنة ثلاث عشرة بعد مرض خمسة عشر يومًا، وفي أثناء مرضه عهد بالأمر إلى عمر، وكتب العهد عثمان.",
          "Ibn Ishaq — as in Usd al-Ghabah — said Abu Bakr died on Friday with seven nights left of Jumada al-Akhirah, year thirteen, and ʿUmar led his funeral prayer. Ibn al-Athir narrates from ʿAʾishah that his illness began after he bathed on a cold day; he had fever for fifteen days, did not go out to pray, had ʿUmar lead the people, and died on the evening before Tuesday with eight nights left of Jumada al-Akhirah, year thirteen. His caliphate lasted two years, three months and ten nights, and he died aged sixty-three. Ibn Kathir: he died on Monday evening with eight left of Jumada al-Akhirah, year thirteen, after fifteen days' illness; during it he appointed ʿUmar, and ʿUthman wrote the document.",
          [ci("usd_p713", "grading_unverified"), ci("bidayah_v4_v4_p102", "grading_unverified")],
          [fl("conflict", "السنة (١٣ هـ) متفق عليها في النصين، واختُلف في اليوم: الجمعة لسبع بقين (ابن إسحاق)، أو عشي الإثنين/ليلة الثلاثاء لثمان بقين. وفي مدة خلافته قول آخر لأبي معشر: سنتان وأربعة أشهر إلا أربع ليال.", "The year (13 AH) agrees across both texts; the day differs: Friday with seven left (Ibn Ishaq) or Monday evening/eve of Tuesday with eight left. Abu Maʿshar gives a different length for the caliphate: two years and four months less four nights.")]),
      ],
    },
    quiz: [
      q("v3q1", "death-year", "في أي سنة هجرية توفي أبو بكر؟", "In which Hijri year did Abu Bakr die?", [["١٣ هـ", "13 AH"], ["١١ هـ", "11 AH"], ["١٥ هـ", "15 AH"]], 0, "أسد الغابة ص٧١٣؛ البداية ج٤ ص١٠٢.", "Usd al-Ghabah p. 713; al-Bidayah vol. 4 p. 102."),
    ],
  },
};
