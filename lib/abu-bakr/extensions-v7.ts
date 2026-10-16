import type { V6 } from "./extensions-v6";
import { card, ci, fl, g, q } from "./extensions-01-06";

// Pass 7 (2026-10-16): Siyar (al-Khulafa' vol.) pp. 40-42; al-Isabah pp. 913-914; Zad al-Ma'ad vol. 3 pp. 65, 131;
// Fada'il al-Sahabah pp. 66-67. Page images checked; gradings only as printed.

export const v7: Record<number, V6> = {
  1: {
    after: {
      atiq: [
        card("atiq-isabah", "context", "لماذا سُمّي «عتيقًا»؟ أقوال جمعها ابن حجر", "Why was he called 'ʿAtiq'? Views collected by Ibn Hajar",
          "جمع ابن حجر في «الإصابة» أقوالًا في الاسم واللقب: عن ابن أبي مليكة: «كان اسم أبي بكر عبد الله، وإنما كان عتيق لقباً». وعن الليث: «سمي أبو بكر عتيقاً لجماله». وفي تاريخ الفضل بن دكين: «سمي عتيقاً؛ لأنه قديم في الخير». وقال الفلاس: «سمي عتيقاً لعتاقة وجهه». وقال مصعب الزبيري: «سمي عتيقاً؛ لأنه لم يكن في نسبه شيء يعاب به». وروى ابن منده عن عائشة أن أبا قحافة سمّى ثلاثة أولاد عتيقًا ومعتقًا وعُتيقًا، وعقّب ابن حجر: «وفي السند ابن لهيعة».",
          "In al-Isabah, Ibn Hajar collects views on the name and the title. From Ibn Abi Mulaykah: 'Abu Bakr's name was ʿAbdullah; ʿAtiq was only a title.' From al-Layth: 'he was called ʿAtiq for his handsomeness.' The history of al-Fadl ibn Dukayn: 'because he was early in goodness.' Al-Fallas: 'for the fineness of his face.' Musʿab al-Zubayri: 'because there was nothing blameworthy in his lineage.' Ibn Mandah reports from ʿAʾishah that Abu Quhafah named three sons ʿAtiq, Muʿtiq and ʿUtayq; Ibn Hajar adds: 'and Ibn Lahiʿah is in the chain.'",
          [ci("isaba_p913_c", "grading_unverified", "وإنما كان عتيق لقباً"), ci("isaba_p913_c", "grading_unverified", "وفي السند ابن لهيعة")],
          [fl("weak", "نبّه ابن حجر على أن في سند رواية ابن منده ابن لهيعة، ولم يذكر حكمًا صريحًا؛ ولا نحكم من عندنا.", "Ibn Hajar notes that Ibn Lahiʿah is in the chain of Ibn Mandah's report, without an explicit grading; we add none of our own.")]),
        card("description", "facts", "صفته الخَلْقية", "His physical description",
          "نقل ابن حجر عن «المعرفة» لابن منده: «كان أبيض نحيفاً خفيف العارضين معروق الوجه ناتىء الجبهة يخضب بالحناء والكتم»، وعن الزهري عند ابن أبي الدنيا: «كان أبيض لطيفاً جعداً مشرف الوركين».",
          "Ibn Hajar quotes Ibn Mandah's al-Maʿrifah: 'He was fair-skinned and slender, with light hair on the sides of his face, a lean face and a prominent forehead, and he dyed his hair with henna and katam.' And from al-Zuhri, via Ibn Abi al-Dunya: 'He was fair, slight, curly-haired, with prominent hips.'",
          [ci("isaba_p913_b", "grading_unverified", "كان أبيض نحيفاً خفيف العارضين معروق الوجه ناتىء الجبهة يخضب بالحناء والكتم"), ci("isaba_p913_b", "grading_unverified", "كان أبيض لطيفاً جعداً مشرف الوركين")],
          undefined,
          [g("العارضان", "al-ʿaridan", "جانبا الوجه حيث ينبت الشعر", "the two sides of the face where the beard grows", "isaba_p913_b"), g("الكَتَم", "katam", "نبات يُخضب به الشعر", "a plant used to dye hair", "isaba_p913_b")]),
      ],
      "siddiq-name": [
        card("siddiq-ali", "context", "عليّ على المنبر: سمّاه الله صدّيقًا", "ʿAli on the pulpit: Allah named him al-Siddiq",
          "أخرج الدارقطني في «الأفراد» عن أبي يحيى قال: «لا أحصي كم سمعت علياً يقول على المنبر: إن الله عز وجل سمى أبا بكر على لسان نبيه ﷺ صديقاً». نقله ابن حجر في «الإصابة» دون حكم على إسناده.",
          "Al-Daraqutni narrated in al-Afrad from Abu Yahya: 'I cannot count how often I heard ʿAli say on the pulpit: Allah, Mighty and Majestic, named Abu Bakr al-Siddiq on the tongue of His Prophet ﷺ.' Ibn Hajar quotes it in al-Isabah without grading its chain.",
          [ci("isaba_p914", "grading_unverified", "إن الله عز وجل سمى أبا بكر على لسان نبيه ﷺ صديقاً")]),
      ],
    },
    quiz: [
      q("v7q1", "atiq-isabah", "ما الذي قاله ابن أبي مليكة عن اسم أبي بكر؟", "What did Ibn Abi Mulaykah say about Abu Bakr's name?",
        [["اسمه عبد الله، وعتيق لقب", "His name was ʿAbdullah; ʿAtiq was a title"], ["اسمه عتيق لا غير", "His name was only ʿAtiq"], ["اسمه عثمان", "His name was ʿUthman"]], 0, "«وإنما كان عتيق لقباً».", "'ʿAtiq was only a title.'"),
    ],
  },
  3: {
    after: {
      "forty-thousand": [
        card("spending", "narrative", "«ما نفعني مال ما نفعني مال أبي بكر»", "'No wealth has benefited me as Abu Bakr's wealth has'",
          "في «فضائل الصحابة» من حديث عائشة عن النبي ﷺ: «ما نفعني مال ما نفعني مال أبي بكر»، وقال محقق الطبعة: «اسناده صحيح». وفي رواية عن أبي صالح رفعها: لما ذكر النبي ﷺ من يُدعى من أبواب الجنة، قال: «والله اني لأطمع أن تكون منهم والله ما نفعني مال ما نفعني مال أبي بكر» قال: «فبكى أبو بكر ثم قال: وهل هداني الله ورفعني الا بك»؛ وقال المحقق في هذه: «رجال اسناده ثقات غير ان ابا صالح لم يذكر الصحابي»، وأحال إلى طريق موصول.",
          "In Fada'il al-Sahabah, from ʿAʾishah, the Prophet ﷺ said: 'No wealth has benefited me as the wealth of Abu Bakr has.' The editor: 'Its chain is sahih.' In a report from Abu Salih attributed to the Prophet ﷺ, after mentioning those called from the gates of Paradise, he said: 'By Allah, I hope you will be among them; by Allah, no wealth has benefited me as Abu Bakr's wealth has.' 'Abu Bakr wept, then said: Did Allah guide me and raise me except through you?' Of this one the editor says: 'Its narrators are trustworthy, except that Abu Salih did not name the Companion,' and refers to a connected route.",
          [ci("fadail_p67", "editor_sahih", "ما نفعني مال ما نفعني مال أبي بكر"), ci("fadail_p66_67", "grading_unverified", "فبكى أبو بكر ثم قال: وهل هداني الله ورفعني الا بك")],
          [fl("weak", "الرواية الثانية فيها سقط الصحابي بحسب حاشية المحقق، ولم يُطلق عليها حكمًا صريحًا هنا.", "Per the editor's note, the second report omits the Companion; he gives no explicit grade for it here.")]),
      ],
    },
    quiz: [
      q("v7q2", "spending", "ماذا قال أبو بكر حين قال النبي ﷺ: «ما نفعني مال ما نفعني مال أبي بكر» في رواية أبي صالح؟", "In Abu Salih's report, what did Abu Bakr say when the Prophet ﷺ praised his wealth?",
        [["وهل هداني الله ورفعني إلا بك", "'Did Allah guide me and raise me except through you?'"], ["مالي لله ولرسوله", "'My wealth belongs to Allah and His Messenger'"], ["لا شيء", "Nothing"]], 0, "وبكى أبو بكر.", "Abu Bakr wept."),
    ],
  },
  4: {
    after: {
      arrival: [
        card("grey-hair", "facts", "الوحيد الأشمط بين أصحابه", "The only one with greying hair among his companions",
          "عن أنس بن مالك «أن النبي ﷺ قدم، يعني المدينة، وليس في أصحابه أشمط غير أبي بكر، فغلفها بالحناء والكتم». قال الذهبي: «أخرجه البخاري».",
          "From Anas ibn Malik: 'The Prophet ﷺ arrived — meaning in Madinah — and there was no one among his companions with greying hair except Abu Bakr, and he dyed it with henna and katam.' Al-Dhahabi: 'Al-Bukhari narrated it.'",
          [ci("siyar_s_p276", "source_cites_bukhari", "غير أبي بكر، فغلفها بالحناء والكتم")],
          undefined,
          [g("أشمط", "ashmat", "من خالط شعره البياض", "one whose hair is mixed with white", "siyar_s_p276")]),
        card("buraydah", "context", "قصة بريدة والتفاؤل — إسناد متروك", "Buraydah and the good omen — an abandoned narrator",
          "أورد الذهبي من طريق أوس بن عبدالله بن بريدة أن بريدة لقي النبي ﷺ في الهجرة، فلما سأله عن اسمه وقبيلته «التفت إلى أبي بكر فقال: برد أمرنا وصلح»، ثم «قال لأبي بكر: سلمنا». ثم قال الذهبي: «قلت: أوس متروك».",
          "Al-Dhahabi cites, via Aws ibn ʿAbdullah ibn Buraydah, that Buraydah met the Prophet ﷺ during the Hijrah; on hearing his name and tribe 'he turned to Abu Bakr and said: Our affair has cooled and come right,' then 'said to Abu Bakr: We are safe.' Al-Dhahabi then says: 'I say: Aws is abandoned (matruk).'",
          [ci("siyar_s_p275", "author_matruk", "قلت: أوس متروك")],
          [fl("weak", "حكم الذهبي على راويه أوس بأنه متروك؛ لا يُحتج به.", "Al-Dhahabi judges its narrator Aws abandoned; it is not used as evidence.")]),
      ],
      two: [
        card("two-isabah", "context", "منقبة لم يشركه فيها غيره", "A virtue no one else shared",
          "قال ابن حجر في «الإصابة» عن آية الغار: «فإن المراد بصاحبه أبو بكر بلا نزاع»، وذكر أن حديث أنس «ما ظنك باثنين الله ثالثهما؟» «ثبت في الصحيحين»، ثم قال: «والأحاديث في كونه كان معه في الغار كثيرة شهيرة، ولم يشركه في هذه المنقبة غيره».",
          "On the verse of the cave Ibn Hajar says in al-Isabah: 'His companion here means Abu Bakr, without dispute.' He states that Anas's hadith 'What do you think of two whose third is Allah?' 'is established in the two Sahihs,' and adds: 'The reports that he was with him in the cave are many and well known, and no one else shared this virtue with him.'",
          [ci("isaba_p914", "grading_unverified", "فإن المراد بصاحبه أبو بكر بلا نزاع"), ci("isaba_p914", "source_cites_sahihayn", "وثبت في الصحيحين من حديث أنس"), ci("isaba_p914", "grading_unverified", "ولم يشركه في هذه المنقبة غيره")]),
        card("news-carrier", "context", "من كان يأتيهما بالأخبار؟", "Who brought them the news?",
          "قال ابن القيم في «زاد المعاد»: «وكان عامر بن فهيرة يرعى عليهما غنماً لأبي بكر، ويتسمع ما يقال بمكة ثم يأتيهما بالخبر». وعلّق محقق الطبعة: «الذي في حديث عائشة عند البخاري (٣٩٠٥) أن عبد الله بن أبي بكر هو الذي كان يتسمع الأخبار ويأتيهما بها، وأما عامر بن فهيرة فيريح الغنم عليهما ليشربا من لبنها».",
          "Ibn al-Qayyim says in Zad al-Maʿad: 'ʿAmir ibn Fuhayrah grazed Abu Bakr's sheep near them, listened to what was said in Makkah and brought them the news.' The edition's editor notes: 'What is in ʿAʾishah's hadith in al-Bukhari (3905) is that ʿAbdullah ibn Abi Bakr was the one who listened for the news and brought it, while ʿAmir ibn Fuhayrah brought the sheep to them so they could drink their milk.'",
          [ci("zad_v3_p65", "grading_unverified", "وكان عامر بن فهيرة يرعى عليهما غنماً لأبي بكر، ويتسمع ما يقال بمكة ثم يأتيهما بالخبر"), ci("zad_v3_p65", "editor_cites_bukhari", "أن عبد الله بن أبي بكر هو الذي كان يتسمع الأخبار ويأتيهما بها")],
          [fl("conflict", "نصّ ابن القيم يخالف ما نبّه عليه المحقق من رواية البخاري؛ نعرض القولين كما طُبعا.", "Ibn al-Qayyim's wording differs from the Bukhari report the editor points to; both are shown as printed.")]),
      ],
    },
    quiz: [
      q("v7q3", "news-carrier", "بحسب حاشية محقق «زاد المعاد» عن رواية البخاري، من كان يتسمّع الأخبار ويأتي بها؟", "Per the Zad editor's note on al-Bukhari's report, who listened for the news and brought it?",
        [["عبد الله بن أبي بكر", "ʿAbdullah ibn Abi Bakr"], ["عامر بن فهيرة", "ʿAmir ibn Fuhayrah"], ["عبد الله بن أريقط", "ʿAbdullah ibn Urayqit"]], 0, "وكان عامر يريح عليهما الغنم.", "ʿAmir brought them the sheep."),
    ],
  },
  5: {
    after: {
      badr: [
        card("badr-captives", "narrative", "رأيه في أسرى بدر", "His view on the captives of Badr",
          "قال ابن القيم: «واستشار الصحابة في أسارى بدر، فأشار عليه الصديق أن يأخذ منهم فدية تكون لهم قوة على عدوهم ويطلقهم، لعل الله أن يهديهم للإسلام»، وأشار عمر بقتلهم، «فهوي رسول الله ﷺ ما قال أبو بكر ولم يهو ما قال عمر»، ثم نزل: ﴿ما كان لنبي أن تكون له أسرى حتى يثخن في الأرض﴾. وعزاه المحقق إلى مسلم (١٧٦٣) من حديث ابن عباس عن عمر.",
          "Ibn al-Qayyim: 'He consulted the Companions about the captives of Badr; al-Siddiq advised him to take a ransom from them, which would strengthen them against their enemy, and to free them, that Allah might guide them to Islam.' ʿUmar advised killing them. 'The Messenger of Allah ﷺ inclined to what Abu Bakr said and not to what ʿUmar said'; then the verse came down: 'It is not for a prophet to have captives until he has thoroughly subdued the land.' The editor attributes it to Muslim (1763), from Ibn ʿAbbas from ʿUmar.",
          [ci("zad_v3_p131", "editor_cites_muslim", "فأشار عليه الصديق أن يأخذ منهم فدية تكون لهم قوة على عدوهم ويطلقهم")]),
      ],
    },
    quiz: [
      q("v7q4", "badr-captives", "بماذا أشار أبو بكر في أسرى بدر؟", "What did Abu Bakr advise about the captives of Badr?",
        [["أخذ الفدية وإطلاقهم", "Take a ransom and free them"], ["قتلهم", "Kill them"], ["حبسهم في المدينة", "Imprison them in Madinah"]], 0, "وأشار عمر بقتلهم.", "ʿUmar advised killing them."),
    ],
  },
  7: {
    after: {
      "day-narrative": [
        card("burial-place", "context", "«حيث قُبض»: موضع دفنه ﷺ", "'Where he was taken': the place of his burial",
          "قال ابن كثير في «الفصول»: دُفن ﷺ «في الموضع الذي توفي فيه من حجرة عائشة، لحديث رواه الترمذي عن أبي بكر». وقال محقق الطبعة: «حسن بطرقه»، وذكر أن طريق الترمذي «سنده ضعيف لضعف عبد الرحمن بن أبي بكر»، «وروي موقوفاً بسند صحيح إلى أبي بكر»، وفيه: «فقالوا لأبي بكر: أين يدفن فقال: حيث قبض فإن الله لم يقبضه إلا في أرض طيبة».",
          "Ibn Kathir says in al-Fusul that he ﷺ was buried 'in the place where he died, in ʿAʾishah's room, because of a hadith al-Tirmidhi narrated from Abu Bakr.' The editor: 'hasan through its routes'; he notes that al-Tirmidhi's route 'has a weak chain because of ʿAbd al-Rahman ibn Abi Bakr,' and that 'it is reported as Abu Bakr's own words with a sahih chain,' in which: 'They said to Abu Bakr: Where is he to be buried? He said: Where he was taken, for Allah took him only in a good land.'",
          [ci("fusul_p133_134", "editor_hasan", "حيث قبض فإن الله لم يقبضه إلا في أرض طيبة")],
          [fl("weak", "طريق الترمذي ضعيف عند المحقق، وحسّن الحديث بمجموع طرقه.", "The editor calls al-Tirmidhi's route weak and grades the hadith hasan only through its combined routes.")]),
      ],
    },
    quiz: [
      q("v7q7", "burial-place", "بماذا أجاب أبو بكر حين سُئل: أين يُدفن النبي ﷺ؟", "What did Abu Bakr answer when asked where the Prophet ﷺ should be buried?",
        [["حيث قُبض", "Where he was taken (died)"], ["في البقيع", "In al-Baqiʿ"], ["في مكة", "In Makkah"]], 0, "«فإن الله لم يقبضه إلا في أرض طيبة».", "'Allah took him only in a good land.'"),
    ],
  },
  8: {
    after: {
      speech: [
        card("rafi", "narrative", "«لا تأمّر على رجلين»… ثم وليَ الأمر", "'Never take command over two men'… then he took office",
          "روى ابن إسحاق - «فيما بلغني» - عن رافع بن أبي رافع الطائي أنه صحب أبا بكر في غزوة ذات السلاسل، «وكانت عليه عباءة له فدكية، فكان إذا نزلنا بسطها، وإذا ركبنا لبسها»، فطلب منه النصيحة فأوصاه بالتوحيد وأركان الإسلام وقال: «ولا تأمر على رجلين من المسلمين أبداً». فلما وليَ أبو بكر الخلافة قدم عليه رافع فذكّره، فقال: «بلى، وأنا الآن أنهاك عن ذلك»، فسأله: فما حملك على أن تلي أمر الناس؟ قال: «لا أجد من ذلك بداً، خشيت على أمة محمد ﷺ الفرقة».",
          "Ibn Ishaq relates — 'as reached me' — from Rafiʿ ibn Abi Rafiʿ al-Taʾi that he accompanied Abu Bakr on the expedition of Dhat al-Salasil: 'He had a cloak from Fadak; when we halted he spread it out, and when we rode he wore it.' Rafiʿ asked his counsel; Abu Bakr advised him on tawhid and the pillars and said: 'Never take command over two Muslims.' When Abu Bakr became caliph, Rafiʿ came and reminded him. He said: 'Yes, and I forbid you that now.' Rafiʿ asked: 'Then what made you take charge of the people?' He said: 'I found no way out of it; I feared division for the community of Muhammad ﷺ.'",
          [ci("ibn_hisham_p651_652", "no_chain_stated", "ولا تأمر على رجلين من المسلمين أبداً"), ci("ibn_hisham_p651_652", "no_chain_stated", "لا أجد من ذلك بداً، خشيت على أمة محمد ﷺ الفرقة")],
          [fl("no_chain", "يقول ابن إسحاق: «فيما بلغني»، فلا إسناد مذكور.", "Ibn Ishaq says 'as reached me', so no chain is given.")]),
      ],
    },
    quiz: [
      q("v7q8", "rafi", "لماذا قبل أبو بكر الخلافة مع أنه نهى رافعًا عن الإمارة؟", "Why did Abu Bakr accept the caliphate though he had told Rafiʿ to avoid command?",
        [["خشي على الأمة الفرقة", "He feared division for the community"], ["رغب في المال", "He wanted wealth"], ["أوصى بها النبي ﷺ صراحة", "The Prophet ﷺ explicitly appointed him"]], 0, "«لا أجد من ذلك بداً».", "'I found no way out of it.'"),
    ],
  },
  9: {
    after: {
      "aswad-waqidi": [
        card("qays", "narrative", "قيس بن مكشوح: ارتدّ ثم عُفي عنه", "Qays ibn Makshuh: apostasy, then pardon",
          "ذكر الذهبي «أن قيس بن مكشوح أحد من قتل الأسود العنسي ارتد»، فقتل ذادويه غيلة وملك صنعاء، فاستمدّ فيروزُ أبا بكر، «فأمده فلقوا قيساً فهزموه ثم أسروه وحملوه إلى أبي بكر رضي الله عنه فوبخه، فأنكر الردة، فعفا عنه أبو بكر».",
          "Al-Dhahabi mentions 'that Qays ibn Makshuh, one of those who killed al-Aswad al-ʿAnsi, apostatised'; he killed Dhadhawayh by treachery and took Sanʿaʾ. Fayruz asked Abu Bakr for help: 'He sent him reinforcements; they met Qays, defeated him, captured him and carried him to Abu Bakr, who rebuked him; he denied having apostatised, and Abu Bakr pardoned him.'",
          [ci("siyar_k_p42", "grading_unverified", "فأنكر الردة، فعفا عنه أبو بكر")],
          [fl("no_chain", "أورده الذهبي بصيغة «وذُكر» دون إسناد.", "Al-Dhahabi gives it as 'it was mentioned', without a chain.")]),
      ],
      "dhu-qassah": [
        card("five", "context", "«يقاتل الناس على خمس»", "'Fight people over five'",
          "روى ابن لهيعة بإسناده إلى حنظلة بن علي الليثي «أن أبا بكر بعث خالداً، وأمره أن يقاتل الناس على خمس، من ترك واحدة منهن قاتله كما يقاتل من ترك الخمس جميعاً: على شهادة أن لا إله إلا الله وأن محمداً عبده ورسوله، وإقام الصلاة، وإيتاء الزكاة، وصوم رمضان». ونبّه المحقق إلى أن بعضهم زاد «وحج البيت»، «ولا أصل لها بخط المصنف».",
          "Ibn Lahiʿah narrates by his chain to Hanzalah ibn ʿAli al-Laythi 'that Abu Bakr sent Khalid and ordered him to fight people over five: whoever abandoned one of them, he would fight as he fights one who abandons all five — the testimony that there is no god but Allah and that Muhammad is His servant and Messenger, establishing prayer, giving zakah, and fasting Ramadan.' The editor notes that someone added 'and pilgrimage to the House', 'which has no basis in the author's handwriting.'",
          [ci("siyar_k_p40_b", "grading_unverified", "أن أبا بكر بعث خالداً، وأمره أن يقاتل الناس على خمس")],
          [fl("weak", "لم يُطبع حكم على هذا الإسناد في الصفحة؛ نذكره دون ترجيح.", "No grading of this chain is printed on the page; it is shown without judgement.")]),
      ],
      tulayhah: [
        card("uyaynah", "narrative", "عيينة وقرّة: أسيران حُقنت دماؤهما", "ʿUyaynah and Qurrah: captives whose blood was spared",
          "قال الذهبي: «وفي غير هذه الرواية أن خالداً لقي طليحة ببزاخة، ومع طليحة عيينة بن حصن، وقرة بن هبيرة القشيري، فاقتتلوا قتالاً شديداً، ثم هرب طليحة وأسر عيينة وقرة، وبعث بهما إلى أبي بكر فحقن دماءهما».",
          "Al-Dhahabi: 'In another report, Khalid met Tulayhah at Buzakhah; with Tulayhah were ʿUyaynah ibn Hisn and Qurrah ibn Hubayrah al-Qushayri. They fought fiercely; then Tulayhah fled, ʿUyaynah and Qurrah were captured and sent to Abu Bakr, and he spared their blood.'",
          [ci("siyar_k_p41", "grading_unverified", "وبعث بهما إلى أبي بكر فحقن دماءهما")]),
      ],
    },
    quiz: [
      q("v7q5", "qays", "ماذا فعل أبو بكر بقيس بن مكشوح حين أنكر الردة؟", "What did Abu Bakr do with Qays ibn Makshuh when he denied apostasy?",
        [["وبّخه ثم عفا عنه", "Rebuked him, then pardoned him"], ["قتله", "Executed him"], ["نفاه إلى الشام", "Exiled him to Sham"]], 0, "«فعفا عنه أبو بكر».", "'And Abu Bakr pardoned him.'"),
      q("v7q6", "uyaynah", "ما مصير عيينة بن حصن وقرة بن هبيرة بعد بزاخة في رواية الذهبي؟", "In al-Dhahabi's report, what happened to ʿUyaynah and Qurrah after Buzakhah?",
        [["أُسرا فحقن أبو بكر دماءهما", "Captured; Abu Bakr spared them"], ["قُتلا في المعركة", "Killed in battle"], ["هربا مع طليحة", "Fled with Tulayhah"]], 0, "«وبعث بهما إلى أبي بكر فحقن دماءهما».", "'He sent them to Abu Bakr, who spared their blood.'"),
    ],
  },
};
