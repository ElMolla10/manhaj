import type { ScratchLesson } from "./types";

// Written from scratch from the located passages only. Every card cites passage keys
// (see passages.json). Status stays internal_unapproved until Mohamed and the sheikh review.

export const lesson01: ScratchLesson = {
  number: 1, slug: "who-was-abu-bakr", status: "internal_unapproved",
  title: { ar: "من كان أبو بكر الصديق؟", en: "Who Was Abu Bakr al-Siddiq?" },
  cards: [
    { id: "name", kind: "hook",
      title: { ar: "اسمه ونسبه", en: "His name and lineage" },
      body: {
        ar: "اسمه عبد الله بن أبي قحافة، واسم أبي قحافة عثمان بن عامر بن عمرو بن كعب بن سعد بن تيم بن مرة بن كعب بن لؤي، القرشي التيمي. وكنيته أبو بكر، ويُلقّب بالصدّيق. تذكره المصادر بأنه «خليفة رسول الله ﷺ» وأول الخلفاء الراشدين.",
        en: "His name was ʿAbdullah, son of Abu Quhafah, whose own name was ʿUthman ibn ʿAmir ibn ʿAmr ibn Kaʿb ibn Saʿd ibn Taym ibn Murrah ibn Kaʿb ibn Luʾayy, of Quraysh, of the clan of Taym. His kunyah was Abu Bakr and his title al-Siddiq. The sources describe him as the 'Successor of the Messenger of Allah ﷺ' and the first of the Rightly-Guided Caliphs.",
      },
      citations: [
        { key: "siyar_p7_b", grading: "grading_unverified" },
        { key: "fadail_p65_a", excerpt: "هو عبد الله بن أبي قحافة عثمان بن عامر بن عمرو بن كعب بن سعد بن تيم بن مرة بن كعب بن لؤي القرشي التيمي، أبو بكر الصديق أول الخلفاء الراشدين", grading: "grading_unverified" },
      ],
    },
    { id: "atiq", kind: "facts",
      title: { ar: "لقب «عتيق»", en: "The name 'ʿAtiq'" },
      body: {
        ar: "عُرف أيضًا بـ«عتيق». نقل الذهبي عن عائشة أن اسمه الذي سمّاه به أهله «عبد الله» ولكن غلب عليه «عتيق»، وعن ابن معين والليث بن سعد أنه لُقّب بذلك لجمال وجهه. وقال ابن هشام: «عتيق» لقب لحسن وجهه وعنقه.",
        en: "He was also known as 'ʿAtiq'. Al-Dhahabi reports from ʿAʾishah that the name his family gave him was ʿAbdullah but 'ʿAtiq' came to prevail, and from Ibn Maʿin and al-Layth ibn Saʿd that it was a nickname for the beauty of his face. Ibn Hisham says ʿAtiq was a nickname for the beauty of his face and neck.",
      },
      citations: [
        { key: "siyar_p7_a", grading: "grading_unverified" },
        { key: "ibn_hisham_p117_c", grading: "grading_unverified" },
      ],
      flags: [
        { kind: "conflict", text: {
          ar: "قال ابن إسحاق: «واسمه عتيق»، ثم صحّح ابن هشام: «واسم أبي بكر عبد الله، وعتيق لقب». المصادر المعروضة هنا ترجّح أن «عتيق» لقب لا اسم.",
          en: "Ibn Ishaq wrote 'his name was ʿAtiq'; Ibn Hisham then noted 'Abu Bakr's name was ʿAbdullah, and ʿAtiq is a nickname'. The sources shown here favour ʿAtiq being a nickname, not his name." } },
      ],
    },
    { id: "standing", kind: "context",
      title: { ar: "مكانته في قريش", en: "His standing in Quraysh" },
      body: {
        ar: "وصفه ابن إسحاق بأنه كان مألفًا لقومه، محبّبًا سهلًا، أنسب قريش لقريش وأعلمهم بها وبما كان فيها من خير وشر، وكان تاجرًا ذا خلق ومعروف، يأتيه رجال قومه لعلمه وتجارته وحسن مجالسته. وذكر محقق «فضائل الصحابة» أنه وُلد بمكة بعد عام الفيل بسنتين وستة أشهر، وكان من سادات قريش وأغنيائهم.",
        en: "Ibn Ishaq describes him as well-liked and approachable among his people, the most knowledgeable of Quraysh in their genealogy and in their history, good and bad; a merchant of good character and generosity whom the men of his tribe sought out for his knowledge, his trade and his good company. The editor of Fada'il al-Sahabah notes he was born in Makkah two and a half years after the Year of the Elephant and was among the nobles and wealthy men of Quraysh.",
      },
      citations: [
        { key: "ibn_hisham_p117_d", grading: "grading_unverified" },
        { key: "fadail_p65_a", excerpt: "ولد بعد عام الفيل بسنتين وستة أشهر (قبل ٥١ سنة من الهجرة) بمكة، كان من سادات قريش وغنياً من موسريهم عالماً بأنساب القبائل وأخبارها وكان يلقب بعالم قريش.", grading: "grading_unverified" },
      ],
      flags: [
        { kind: "no_chain", text: { ar: "تاريخ مولده من مقدمة المحقق، لا من رواية مسندة.", en: "The birth date comes from the editor's introduction, not from a narrated report with a chain." } },
      ],
    },
    { id: "closeness", kind: "context",
      title: { ar: "صحبته للنبي ﷺ", en: "His companionship with the Prophet ﷺ" },
      body: {
        ar: "خطب النبي ﷺ فقال إن أمنّ الناس عليه في صحبته وماله أبو بكر، وإنه لو كان متخذًا خليلًا غير ربه لاتخذ أبا بكر، ولكن أخوة الإسلام ومودته، وأمر أن تُسدّ الأبواب في المسجد إلا باب أبي بكر. وفي رواية: «ولكن أخي وصاحبي». وروى الإمام أحمد أن النبي ﷺ قال: «ما نفعني مالٌ قطُّ ما نفعني مالُ أبي بكر»، فبكى أبو بكر وقال: «وهل أنا ومالي إلا لك يا رسول الله؟».",
        en: "The Prophet ﷺ said in a sermon that the person most generous to him in companionship and wealth was Abu Bakr; that if he were to take a khalil (intimate friend) other than his Lord he would take Abu Bakr, but there is the brotherhood and love of Islam; and he ordered every door into the mosque closed except Abu Bakr's. Another narration says: 'but he is my brother and my companion.' Imam Ahmad narrates that the Prophet ﷺ said: 'No wealth has ever benefited me as Abu Bakr's wealth has', and Abu Bakr wept and said: 'Are I and my wealth anything but yours, O Messenger of Allah?'",
      },
      citations: [
        { key: "bukhari_p899_a", grading: "in_sahih_bukhari" },
        { key: "bukhari_p899_c", grading: "in_sahih_bukhari" },
        { key: "fadail_p65_b", grading: "editor_sahih" },
      ],
      flags: [
        { kind: "weak", text: { ar: "رواية أخرى للحديث نفسه في «فضائل الصحابة» (ص ٧٠) إسنادها ضعيف جدًا عند المحقق لأجل محمد بن حميد الرازي؛ لم نعتمد عليها.", en: "Another chain of the same hadith in Fada'il al-Sahabah (p. 70) is graded very weak by the editor because of Muhammad ibn Humayd al-Razi; it is not relied on here." } },
      ],
    },
    { id: "rank", kind: "facts",
      title: { ar: "منزلته بين الصحابة", en: "His rank among the Companions" },
      body: {
        ar: "قال ابن عمر: «كنا نخيّر بين الناس في زمن النبي ﷺ، فنخيّر أبا بكر، ثم عمر، ثم عثمان». وروى الذهبي أن عمر صعد المنبر فقال: «ألا إن أفضل هذه الأمة بعد نبيها أبو بكر».",
        en: "Ibn ʿUmar said: 'In the time of the Prophet ﷺ we used to rank people, and we would rank Abu Bakr first, then ʿUmar, then ʿUthman.' Al-Dhahabi reports that ʿUmar stood on the minbar and said: 'The best of this Ummah after its Prophet is Abu Bakr.'",
      },
      citations: [
        { key: "bukhari_p899_b", grading: "in_sahih_bukhari" },
        { key: "siyar_p15_a", grading: "grading_unverified" },
      ],
    },
    { id: "family", kind: "map",
      title: { ar: "أسرته", en: "His family" },
      body: {
        ar: "أبوه أبو قحافة (عثمان بن عامر). ومن أولاده الذين تذكرهم المصادر: عائشة زوج النبي ﷺ، وأسماء «ذات النطاقين»، وعبد الله، وعبد الرحمن، وأم كلثوم. ومن أزواجه أسماء بنت عُميس التي أوصى أن تغسّله. ومولاه عامر بن فُهيرة.",
        en: "His father was Abu Quhafah (ʿUthman ibn ʿAmir). Among his children named in the sources: ʿAʾishah, wife of the Prophet ﷺ; Asmaʾ, 'she of the two waistbands'; ʿAbdullah; ʿAbd al-Rahman; and Umm Kulthum. Among his wives was Asmaʾ bint ʿUmays, whom he asked to wash his body. His freed slave was ʿAmir ibn Fuhayrah.",
      },
      citations: [
        { key: "siyar_p7_b", grading: "grading_unverified" },
        { key: "bukhari_p956", excerpt: "أن عائشة رضي الله عنها زوج النبي ﷺ قالت: لم أعقل أبوَيَّ قطُّ إلا وهما يدينان الدِّين", grading: "in_sahih_bukhari" },
        { key: "bukhari_p959_c", grading: "in_sahih_bukhari" },
        { key: "bukhari_p957_b", excerpt: "يبيتُ عندهما عبدُ الله بن أبي بكرٍ", grading: "in_sahih_bukhari" },
        { key: "bukhari_p1091_c", excerpt: "دخَل عبدُالرحمن بن أبي بكر ومعه سواكٌ", grading: "in_sahih_bukhari" },
        { key: "ibn_hisham_p133_b", excerpt: "وحدَّثني بعضُ آل أمّ كلثوم ابنة أبي بكر", grading: "grading_unverified" },
        { key: "siyar_p19_a", grading: "grading_unverified" },
        { key: "bukhari_p957_b", excerpt: "ويرعى عليهما عامرُ بنُ فُهيرة مولى أبي بكرٍ", grading: "in_sahih_bukhari" },
      ],
      flags: [
        { kind: "gap", text: { ar: "لم نجد في المقاطع الموثقة قائمة كاملة بأولاده وأزواجه؛ هذه أسماء وردت عرضًا فقط.", en: "No complete list of his children and wives was located in the verified passages; these names appear incidentally." } },
      ],
    },
    { id: "flagged", kind: "reflection",
      title: { ar: "روايات مشهورة لا تثبت بأسانيدها هنا", en: "Well-known reports whose chains are weak here" },
      body: {
        ar: "تنبيه للمراجعة: أورد الذهبي حديث «أما إنك أول من يدخل الجنة من أمتي» من رواية أبي داود، وضعّف المحقق إسناده لجهالة أبي خالد مولى جعدة. وأورد قول عليّ «فرضينا لدنيانا من رضيه النبي ﷺ لديننا» من طريق أبي بكر الهذلي، وقال المحقق: إسناده ضعيف جدًا. لا يُبنى عليهما شيء في هذا الدرس.",
        en: "Review note: al-Dhahabi cites, via Abu Dawud, the hadith 'You will be the first of my Ummah to enter Paradise'; the editor grades its chain weak because Abu Khalid, client of Juʿdah, is unknown. He also cites ʿAli's saying 'we accepted for our worldly affairs the one the Prophet ﷺ accepted for our religion' via Abu Bakr al-Hudhali; the editor says its chain is very weak. Nothing in this lesson rests on either.",
      },
      citations: [
        { key: "siyar_p13_a", grading: "editor_weak" },
        { key: "siyar_p11_12", excerpt: "وقال أبو بكر الهذليّ، عن الحسن، عن عليّ، قال: لقد أمرَ رسولُ الله ﷺ أبا بكر أنْ يصلّي بالناس، وإنّي لَشاهدٌ وما بي مَرَض، فرضينا لدنيانا من رضيَ به النبيُّ ﷺ لديننا.", grading: "editor_very_weak" },
      ],
      flags: [
        { kind: "weak", text: { ar: "روايتان ضعيفتان معروضتان للتنبيه فقط.", en: "Two weak reports shown only as a warning." } },
      ],
    },
    { id: "path", kind: "summary",
      title: { ar: "خريطة المسار", en: "Map of this path" },
      body: {
        ar: "يتتبع هذا المسار حياة أبي بكر بالترتيب: إسلامه في الأيام الأولى، وثباته وقت الاضطهاد، وصحبته في الهجرة، وحياته في المدينة، ثم مرض النبي ﷺ ووفاته، ثم خلافته وحروب الردة وجمع القرآن، ثم أيامه الأخيرة. كل درس يعرض مصادره، ولا يُذكر فيه إلا ما وجدناه في المصادر.",
        en: "This path follows Abu Bakr's life in order: his Islam in the first days, his steadfastness under persecution, his companionship on the Hijrah, his life in Madinah, the Prophet's ﷺ illness and death, then his caliphate, the Ridda wars and the compilation of the Qur'an, and finally his last days. Each lesson shows its sources and includes only what we located in them.",
      },
      citations: [],
    },
  ],
};

export const lesson02: ScratchLesson = {
  number: 2, slug: "lesson-2", status: "internal_unapproved",
  title: { ar: "الأيام الأولى للإسلام", en: "The First Days of Islam" },
  cards: [
    { id: "islam", kind: "hook",
      title: { ar: "إسلامه", en: "His acceptance of Islam" },
      body: {
        ar: "ذكر ابن إسحاق أنه بعد إسلام عليّ ثم زيد بن حارثة «أسلم أبو بكر بن أبي قحافة». وفي «سير أعلام النبلاء» وفي مقدمة محقق «فضائل الصحابة»: كان أول من آمن من الرجال.",
        en: "Ibn Ishaq places Abu Bakr's Islam after that of ʿAli and then Zayd ibn Harithah: 'then Abu Bakr ibn Abi Quhafah accepted Islam.' Siyar A'lam al-Nubala and the editor's introduction to Fada'il al-Sahabah say he was the first man to believe.",
      },
      citations: [
        { key: "ibn_hisham_p116", grading: "grading_unverified" },
        { key: "ibn_hisham_p117_c", excerpt: "قال ابن إسحاق: ثمّ أسلمَ أبو بكرِ بن أبي قحافة", grading: "grading_unverified" },
        { key: "siyar_p7_d", grading: "grading_unverified" },
        { key: "fadail_p65_e", grading: "grading_unverified" },
      ],
      flags: [
        { kind: "conflict", text: {
          ar: "اختلاف في الترتيب: عند ابن إسحاق زيد بن حارثة «أول ذكر أسلم وصلى بعد علي» ثم أبو بكر، وعند الذهبي ومحقق الفضائل أبو بكر «أول من آمن من الرجال». لم نجد في المقاطع الموثقة نصًا يجمع بين القولين؛ يُترك للمراجعة العلمية.",
          en: "The order differs: Ibn Ishaq has Zayd ibn Harithah as 'the first male to accept Islam and pray after ʿAli', then Abu Bakr; al-Dhahabi and the Fada'il editor call Abu Bakr 'the first man to believe'. No passage reconciling the two was located; left for scholarly review." } },
      ],
    },
    { id: "no-hesitation", kind: "facts",
      title: { ar: "بلا تردد", en: "Without hesitation" },
      body: {
        ar: "نقل ابن إسحاق أن النبي ﷺ كان يقول: «ما دعوت أحدًا إلى الإسلام إلا كانت فيه عنده كبوة ونظر وتردد، إلا ما كان من أبي بكر بن أبي قحافة، ما عكم عنه حين ذكرته له، وما تردد فيه».",
        en: "Ibn Ishaq reports that the Prophet ﷺ used to say: 'I never invited anyone to Islam without some reluctance, deliberation and hesitation on his part, except Abu Bakr ibn Abi Quhafah: he did not hold back when I mentioned it to him, and he did not hesitate.'",
      },
      citations: [ { key: "ibn_hisham_p117_e", grading: "no_chain_stated" } ],
      flags: [
        { kind: "no_chain", text: { ar: "قال ابن إسحاق «فيما بلغني» ولم يذكر إسنادًا؛ تحتاج إلى تخريج.", en: "Ibn Ishaq introduces it with 'as it reached me' and gives no chain; needs takhrij." } },
      ],
    },
    { id: "dawah", kind: "context",
      title: { ar: "يدعو إلى الله", en: "Calling others to Allah" },
      body: {
        ar: "لما أسلم أبو بكر أظهر إسلامه، ودعا إلى الله ورسوله، فجعل يدعو من وثق به من قومه ممن يغشاه ويجلس إليه. وذكر ابن إسحاق أنه أسلم بدعائه عثمان بن عفان، والزبير بن العوام، وعبد الرحمن بن عوف، وسعد بن أبي وقاص، وطلحة بن عبيد الله، فجاء بهم إلى النبي ﷺ فأسلموا وصلّوا.",
        en: "When Abu Bakr accepted Islam he made it known and called people to Allah and His Messenger, inviting those of his people he trusted who visited and sat with him. Ibn Ishaq reports that through his invitation ʿUthman ibn ʿAffan, al-Zubayr ibn al-ʿAwwam, ʿAbd al-Rahman ibn ʿAwf, Saʿd ibn Abi Waqqas and Talhah ibn ʿUbaydillah accepted Islam; he brought them to the Prophet ﷺ and they accepted Islam and prayed.",
      },
      citations: [
        { key: "ibn_hisham_p117_b", grading: "grading_unverified" },
        { key: "ibn_hisham_p117_a", grading: "no_chain_stated" },
      ],
      flags: [
        { kind: "no_chain", text: { ar: "قائمة من أسلم بدعائه وردت عند ابن إسحاق بعبارة «فيما بلغني».", en: "The list of those who accepted Islam through him is introduced by Ibn Ishaq with 'as it reached me'." } },
      ],
    },
    { id: "eight", kind: "facts",
      title: { ar: "الثمانية السابقون", en: "The eight forerunners" },
      body: {
        ar: "قال ابن إسحاق: فكان هؤلاء النفر الثمانية الذين سبقوا الناس بالإسلام، فصلّوا وصدّقوا رسول الله ﷺ بما جاءه من الله.",
        en: "Ibn Ishaq says: these eight were the ones who preceded people in Islam; they prayed and believed the Messenger of Allah ﷺ in what came to him from Allah.",
      },
      citations: [ { key: "ibn_hisham_p117_f", grading: "grading_unverified" } ],
    },
    { id: "defence", kind: "context",
      title: { ar: "«أتقتلون رجلًا أن يقول ربي الله؟»", en: "'Would you kill a man for saying: My Lord is Allah?'" },
      body: {
        ar: "في خبر عند ابن إسحاق أحاط المشركون بالنبي ﷺ لعيبه آلهتهم، وأخذ رجل منهم بمجمع ردائه، فقام أبو بكر دونه وهو يبكي ويقول: «أتقتلون رجلًا أن يقول ربي الله؟». وعن بعض آل أم كلثوم بنت أبي بكر أنه رجع يومئذ وقد أصابوا رأسه مما جذبوه بلحيته.",
        en: "In a report in Ibn Ishaq, the idolaters surrounded the Prophet ﷺ for criticising their gods and one of them seized him by his garment; Abu Bakr stood between them, weeping and saying: 'Would you kill a man for saying: My Lord is Allah?' Some of the family of Umm Kulthum bint Abi Bakr reported that he came home that day with his scalp hurt from being dragged by his beard.",
      },
      citations: [
        { key: "ibn_hisham_p133_a", grading: "grading_unverified" },
        { key: "ibn_hisham_p133_b", grading: "grading_unverified" },
      ],
      flags: [
        { kind: "gap", text: { ar: "المقطع الموثق يبدأ في وسط الخبر ولا يذكر راويه ولا إسناده؛ يحتاج إلى استكمال من الصفحة السابقة.", en: "The verified extract starts mid-report and does not show its narrator or chain; needs completing from the preceding page." } },
        { kind: "no_chain", text: { ar: "خبر أم كلثوم عن «بعض آل أم كلثوم» دون تسمية.", en: "The Umm Kulthum report is from unnamed 'members of her family'." } },
      ],
    },
    { id: "summary", kind: "summary",
      title: { ar: "خلاصة", en: "Summary" },
      body: {
        ar: "أسلم أبو بكر مبكرًا، وأظهر إسلامه، ودعا إليه من يثق بهم، فأسلم بدعائه عدد من كبار السابقين، ووقف دون النبي ﷺ حين اعتُدي عليه. يبقى ترتيبه بين أوائل من أسلموا موضع اختلاف في المصادر المعروضة.",
        en: "Abu Bakr accepted Islam early, made it public and invited those he trusted, through whom several of the earliest Muslims accepted Islam, and he stood in front of the Prophet ﷺ when he was attacked. His exact place in the order of the first Muslims differs between the sources shown.",
      },
      citations: [],
    },
  ],
};

export const lesson03: ScratchLesson = {
  number: 3, slug: "lesson-3", status: "internal_unapproved",
  title: { ar: "الثبات وقت الابتلاء", en: "Faith Under Persecution" },
  cards: [
    { id: "abyssinia", kind: "hook",
      title: { ar: "الخروج نحو الحبشة", en: "Setting out toward Abyssinia" },
      body: {
        ar: "قالت عائشة: لما ابتُلي المسلمون خرج أبو بكر مهاجرًا نحو أرض الحبشة، حتى إذا بلغ بَرك الغِماد لقيه ابن الدَّغِنة سيد القارة، فقال: أين تريد؟ قال: أخرجني قومي فأريد أن أسيح في الأرض وأعبد ربي.",
        en: "ʿAʾishah said: when the Muslims were put to trial, Abu Bakr set out as an emigrant toward Abyssinia. When he reached Bark al-Ghimad, Ibn al-Dughunnah, chief of the Qarah, met him and asked where he was going. He said: 'My people have driven me out, so I want to travel the land and worship my Lord.'",
      },
      citations: [ { key: "bukhari_p956", excerpt: "فلما ابتُلي المسلمون، خرج أبو بكر مهاجراً نحو أرض الحبشة، حتى بلغ بَرْكَ الغِماد لقيَه ابنُ الدَّغِنَة -وهو سيّد القارة- فقال: أين تريد يا أبا بكر؟ فقال أبو بكر: أخرجني قومي، فأريد أن أسيح في الأرض وأعبد ربي.", grading: "in_sahih_bukhari" } ],
    },
    { id: "protection", kind: "context",
      title: { ar: "جوار ابن الدَّغِنة", en: "Ibn al-Dughunnah's protection" },
      body: {
        ar: "قال ابن الدغنة: إن مثلك لا يَخرج ولا يُخرج؛ إنك تكسب المعدوم، وتصل الرحم، وتحمل الكَلّ، وتقري الضيف، وتعين على نوائب الحق، فأنا لك جار. فرجع معه، وقبلت قريش جواره على أن يعبد أبو بكر ربه في داره ولا يستعلن بصلاته وقراءته.",
        en: "Ibn al-Dughunnah said: 'A man like you neither leaves nor is driven out: you earn for the destitute, keep ties of kinship, carry others' burdens, honour guests and help in genuine calamities. I am your protector.' Abu Bakr returned with him, and Quraysh accepted the protection on condition that he worship his Lord inside his house and not pray or recite openly.",
      },
      citations: [ { key: "bukhari_p956", excerpt: "فقال ابن الدَّغِنة: فإنّ مثلك يا أبا بكر لا يخرُج ولا يُخرَج، إنك تكسب المعدوم، وتصل الرحم، وتحمل الكَلَّ، وتقري الضيف، وتعين على نوائب الحق. فأنا لك جار، ارجع واعبد ربك ببلدك.", grading: "in_sahih_bukhari" } ],
    },
    { id: "mosque", kind: "context",
      title: { ar: "مسجد بفناء داره", en: "A prayer place in his courtyard" },
      body: {
        ar: "ثم ابتنى أبو بكر مسجدًا بفناء داره يصلي فيه ويقرأ القرآن، فكان نساء المشركين وأبناؤهم يجتمعون عليه يعجبون منه. وكان رجلًا بكّاءً لا يملك عينيه إذا قرأ القرآن، فأفزع ذلك أشراف قريش، فطلبوا من ابن الدغنة أن يمنعه من الإعلان أو يردّ عليه جواره.",
        en: "Later Abu Bakr built a prayer place in the courtyard of his house where he prayed and recited the Qur'an, and the idolaters' women and children would crowd round him, amazed. He was a man who wept much and could not control his tears when he recited. This alarmed the nobles of Quraysh, who asked Ibn al-Dughunnah to stop him praying openly or withdraw his protection.",
      },
      citations: [ { key: "bukhari_p956_957", grading: "in_sahih_bukhari" } ],
      flags: [
        { kind: "gap", text: { ar: "المقطع الموثق ينقطع قبل جواب أبي بكر لابن الدغنة؛ لم نذكر جوابه حتى يُستخرج النص.", en: "The verified extract breaks off before Abu Bakr's reply to Ibn al-Dughunnah; his reply is omitted until the text is extracted." } },
      ],
    },
    { id: "freeing", kind: "facts",
      title: { ar: "تحرير المستضعفين", en: "Freeing the oppressed" },
      body: {
        ar: "ذكر ابن إسحاق أن أبا بكر أعتق على الإسلام قبل الهجرة ست رقاب، وبلال سابعهم: عامر بن فهيرة، وأم عُبيس، وزِنّيرة — وقد ذهب بصرها فقالت قريش: ما أذهبه إلا اللات والعزى، فقالت: كذبوا وبيت الله، فردّ الله بصرها — والنهدية وابنتها، وجارية بني مؤمّل التي كان عمر بن الخطاب يعذّبها وهو يومئذ مشرك. ومرّ بالنهدية وابنتها وسيدتهما تحلف ألا تعتقهما، فاشتراهما وأعتقهما.",
        en: "Ibn Ishaq reports that before the Hijrah Abu Bakr freed six slaves for their Islam, with Bilal as the seventh: ʿAmir ibn Fuhayrah; Umm ʿUbays; Zinnirah — who lost her sight, and Quraysh said only al-Lat and al-ʿUzza had taken it, to which she replied 'By the House of Allah, they lie', and Allah restored her sight; al-Nahdiyyah and her daughter; and the slave girl of Banu Muʾammal whom ʿUmar ibn al-Khattab, then still an idolater, used to beat. He came upon al-Nahdiyyah and her daughter as their mistress swore never to free them, bought them and freed them.",
      },
      citations: [
        { key: "ibn_hisham_p147_b", grading: "grading_unverified" },
        { key: "ibn_hisham_p147_c", grading: "grading_unverified" },
        { key: "ibn_hisham_p147_d", grading: "grading_unverified" },
      ],
      flags: [
        { kind: "gap", text: { ar: "قصة شراء بلال وتعذيبه لم تُستخرج بعد من المصادر؛ ذُكر اسمه فقط.", en: "The account of Bilal's torture and purchase has not yet been extracted; only his name is mentioned." } },
      ],
    },
    { id: "intention", kind: "reflection",
      title: { ar: "«إنما أريد ما أريد»", en: "'I only seek what I seek'" },
      body: {
        ar: "قال له أبوه أبو قحافة: أراك تعتق رقابًا ضعافًا، فلو أعتقت رجالًا جُلدًا يمنعونك! فقال أبو بكر: يا أبتِ، إني إنما أريد ما أريد لله عز وجل. ويُتحدّث أن آيات من سورة الليل نزلت فيه: ﴿فَأَمَّا مَنْ أَعْطَىٰ وَاتَّقَىٰ﴾ إلى ﴿وَلَسَوْفَ يَرْضَىٰ﴾.",
        en: "His father Abu Quhafah told him: 'I see you freeing weak slaves; if only you freed strong men who could defend you!' Abu Bakr replied: 'Father, I only seek what I seek for the sake of Allah.' It is related that verses of Surat al-Layl were revealed about him: 'As for him who gives and is mindful of Allah…' to '…and he will surely be pleased' (92:5–21).",
      },
      citations: [ { key: "ibn_hisham_p147_a", grading: "no_chain_stated" } ],
      flags: [
        { kind: "no_chain", text: { ar: "الخبر عن «بعض أهله» دون تسمية، ونزول الآيات فيه بصيغة «فيُتحدّث» — أي بلا جزم ولا إسناد.", en: "The report is from unnamed 'members of his family', and the revelation of the verses about him is given only as 'it is related' — without certainty or a chain." } },
      ],
    },
    { id: "summary", kind: "summary",
      title: { ar: "خلاصة", en: "Summary" },
      body: {
        ar: "حين اشتد الأذى خرج أبو بكر يريد الحبشة ليعبد ربه، فردّه جوار ابن الدغنة، ثم لم يكتم صلاته وقراءته وبكاءه بالقرآن. وأنفق ماله في عتق المستضعفين ممن عُذّبوا على إسلامهم.",
        en: "When persecution intensified Abu Bakr set out for Abyssinia to worship his Lord, was brought back under Ibn al-Dughunnah's protection, and still would not hide his prayer, recitation and weeping over the Qur'an. He spent his wealth freeing the weak who were tortured for their Islam.",
      },
      citations: [],
    },
  ],
};
