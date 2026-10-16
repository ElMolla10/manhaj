import type { V6 } from "./extensions-v6";
import { card, ci, fl, q } from "./extensions-01-06";

// Pass 8 (2026-10-16): al-Raheeq pp. 83, 119, 262, 322; Fada'il p. 72; Zad vol. 3 pp. 66, 625; Ibn Hisham p. 263.

export const v8: Record<number, V6> = {
  3: {
    after: {
      protection: [
        card("beaten", "narrative", "ضُرب حتى ظنّوا موته", "Beaten until they thought him dead",
          "ذكر المباركفوري في «الرحيق المختوم» أن أبا بكر «وطيء ... يوماً بمكة، وضرب ضرباً شديداً، دنا منه عتبة بن ربيعة فجعل يضربه بنعلين مخصوفين»، «وحملت بنو تيم أبا بكر في ثوب حتى أدخلوه منزله، ولا يشكون في موته. فتكلم آخر النهار فقال: ما فعل رسول الله صلى الله عليه وسلم؟»، وأقسم ألا يذوق طعامًا ولا شرابًا حتى يأتيه.",
          "Al-Mubarakfuri relates in al-Raheeq that Abu Bakr 'was trampled one day in Makkah and severely beaten; ʿUtbah ibn Rabiʿah came close and began striking him with stitched sandals'; 'Banu Taym carried Abu Bakr in a cloth to his house, not doubting that he would die. At the end of the day he spoke and said: What has become of the Messenger of Allah ﷺ?' — and he vowed to taste neither food nor drink until he came to him.",
          [ci("raheeq_p119", "grading_unverified", "فتكلم آخر النهار فقال: ما فعل رسول الله صلى الله عليه وسلم؟")],
          [fl("no_chain", "أورده المؤلف دون إسناد ولا عزو في هذه الصفحة.", "The author gives it without a chain or reference on this page.")]),
      ],
      "freed-list": [
        card("qarinayn", "context", "«القرينان»", "'The two bound together'",
          "قال المباركفوري: «وأوذي أبو بكر الصديق رضي الله عنه أيضاً. فقد أخذه نوفل بن خويلد العدوي، وأخذ معه طلحة بن عبيد الله فشدهما في حبل واحد، ليمنعهما عن الصلاة وعن الدين فلم يجيباه»، «ولذلك سميا بالقرينين، وقيل: إنما فعل ذلك عثمان بن عبيد الله أخو طلحة».",
          "Al-Mubarakfuri: 'Abu Bakr al-Siddiq was also persecuted. Nawfal ibn Khuwaylid al-ʿAdawi seized him, and Talhah ibn ʿUbaydullah with him, and tied them in one rope to stop them praying and practising the religion, but they did not give in'; 'for that they were called the two bound together. It is also said that the one who did it was ʿUthman ibn ʿUbaydullah, Talhah's brother.'",
          [ci("raheeq_p83", "grading_unverified", "ولذلك سميا بالقرينين")],
          [fl("conflict", "اختُلف فيمن فعل ذلك: نوفل بن خويلد أو عثمان بن عبيد الله؛ لا نرجّح.", "Reports differ on who did this: Nawfal ibn Khuwaylid or ʿUthman ibn ʿUbaydullah; we do not choose.")]),
      ],
      spending: [
        card("spending-mursal", "context", "«يقضي في مال أبي بكر كما يقضي في مال نفسه»", "'He disposed of Abu Bakr's wealth as of his own'",
          "روى أحمد في «فضائل الصحابة» عن سعيد بن المسيب مرسلًا: «ما مال رجل من المسلمين أنفع لي من مال أبي بكر ومنه أعتق بلالاً وكان يقضي في مال أبي بكر كما يقضي الرجل في مال نفسه». قال المحقق: «رجال الاسناد رجال الحسن ولكنه مرسل الا ان مرسلات سعيد جعلوه من اصح المراسيل».",
          "Ahmad narrates in Fada'il al-Sahabah from Saʿid ibn al-Musayyab, without naming a Companion: 'No Muslim's wealth has benefited me more than Abu Bakr's; from it he freed Bilal,' and the Prophet ﷺ 'disposed of Abu Bakr's wealth as a man disposes of his own.' The editor: 'Its narrators are those of a hasan chain, but it is mursal — though Saʿid's mursal reports are counted among the soundest.'",
          [ci("fadail_p72", "grading_unverified", "وكان يقضي في مال أبي بكر كما يقضي الرجل في مال نفسه")],
          [fl("weak", "مرسل بنص المحقق.", "Mursal, as the editor states.")]),
      ],
    },
    quiz: [
      q("v8q1", "qarinayn", "لماذا سُمّي أبو بكر وطلحة «القرينين»؟", "Why were Abu Bakr and Talhah called 'the two bound together'?",
        [["لأنهما شُدّا في حبل واحد", "They were tied in one rope"], ["لأنهما أخوان", "They were brothers"], ["لأنهما هاجرا معًا", "They emigrated together"]], 0, "ليُمنعا عن الصلاة والدين.", "To stop them praying and practising the religion."),
    ],
  },
  4: {
    after: {
      thawr: [
        card("walk-cave", "narrative", "يمشي أمامه مرة وخلفه مرة", "Walking now ahead of him, now behind",
          "قال ابن القيم: جعل أبو بكر «يمشي ساعة بين يديه وساعة خلفه»، فسأله النبي ﷺ فقال: «أذكر الطلب فأمشي خلفك، ثم أذكر الرصد فأمشي بين يديك»، فلما انتهيا إلى الغار قال: «مكانك يا رسول الله حتى أستبرئ لك الغار».",
          "Ibn al-Qayyim: Abu Bakr 'walked for a while ahead of him and for a while behind him'; the Prophet ﷺ asked him why, and he said: 'I remember the pursuers, so I walk behind you; then I remember those lying in wait, so I walk ahead of you.' When they reached the cave he said: 'Stay where you are, O Messenger of Allah, until I check the cave for you.'",
          [ci("zad_v3_p66", "grading_unverified", "أذكر الطلب فأمشي خلفك، ثم أذكر الرصد فأمشي بين يديك")],
          [fl("no_chain", "ساقه ابن القيم دون إسناد، ولا حكم مطبوع في الصفحة.", "Ibn al-Qayyim gives it without a chain; no grading is printed on the page.")]),
      ],
    },
    quiz: [],
  },
  5: {
    after: {
      uhud: [
        card("uhud-first", "context", "أول من فاء إليه يوم أحد", "The first to return to him at Uhud",
          "قال المباركفوري: «وكان أول من رجع إليه هو ثانيه في الغار أبو بكر الصديق»، وعزا إلى ابن حبان في صحيحه عن عائشة عن أبي بكر: «لما كان يوم أحد انصرف الناس كلهم عن النبي صلى الله عليه وسلم، فكنت أول من فاء إلى النبي صلى الله عليه وسلم».",
          "Al-Mubarakfuri: 'The first to return to him was his second in the cave, Abu Bakr al-Siddiq,' citing Ibn Hibban's Sahih from ʿAʾishah, from Abu Bakr: 'On the day of Uhud all the people turned away from the Prophet ﷺ, and I was the first to come back to the Prophet ﷺ.'",
          [ci("raheeq_p262", "grading_unverified", "فكنت أول من فاء إلى النبي صلى الله عليه وسلم")]),
      ],
      water: [
        card("finhas", "narrative", "غضبه لله في بيت المدراس", "His anger for Allah in the Bayt al-Midras",
          "روى ابن إسحاق أن أبا بكر دخل بيت المدراس على يهود فدعا فنحاص إلى الإسلام، فقال فنحاص: «والله يا أبا بكر، ما بنا إلى الله من فقر، وإنه إلينا لفقير»، «فغضب أبو بكر، فضرب وجه فنحاص ضرباً شديداً». فلما شكاه فنحاص قال أبو بكر للنبي ﷺ: «إن عدو الله قال قولاً عظيماً؛ إنه زعم أن الله فقير إليهم وأنهم أغنياء، فلما قال ذلك غضبت لله مما قال»، فجحد فنحاص، فنزل: ﴿لقد سمع الله قول الذين قالوا إن الله فقير ونحن أغنياء﴾.",
          "Ibn Ishaq relates that Abu Bakr entered the Bayt al-Midras of the Jews and called Finhas to Islam. Finhas said: 'By Allah, O Abu Bakr, we have no need of Allah; it is He who needs us.' 'Abu Bakr became angry and struck Finhas hard in the face.' When Finhas complained, Abu Bakr told the Prophet ﷺ: 'The enemy of Allah said something grave: he claimed that Allah is poor and they are rich. When he said that I became angry for Allah.' Finhas denied it, and the verse came down: 'Allah has heard the words of those who said: Allah is poor and we are rich.'",
          [ci("ibn_hisham_p263", "grading_unverified", "غضبت لله مما قال")],
          [fl("no_chain", "لا إسناد مذكور في الصفحة.", "No chain is stated on the page.")]),
      ],
      hudaybiyyah: [
        card("fazarah", "narrative", "سرية أبي بكر إلى فزارة", "Abu Bakr's expedition against Fazarah",
          "ذكر المباركفوري «سرية أبي بكر الصديق أو زيد بن حارثة إلى وادي القرى، في رمضان سنة 6هـ»، وفيها قول سلمة بن الأكوع: «وخرجت معه حتى إذا صلينا الصبح أمرنا فشننا الغارة»، و«فنفلني أبو بكر ابنتها»، ثم طلبها النبي ﷺ «فبعث بها إلى مكة، وفدي بها أسرى من المسلمين هناك».",
          "Al-Mubarakfuri lists 'the expedition of Abu Bakr al-Siddiq — or Zayd ibn Harithah — to Wadi al-Qura in Ramadan 6 AH', with Salamah ibn al-Akwaʿ's words: 'I went out with him; when we had prayed the dawn prayer he ordered us and we launched the raid,' and 'Abu Bakr gave me her daughter as a share'; the Prophet ﷺ then asked for her 'and sent her to Makkah, and Muslim captives there were ransomed with her.'",
          [ci("raheeq_p322", "grading_unverified", "فنفلني أبو بكر ابنتها")],
          [fl("conflict", "يذكر المؤلف أن الأمير أبو بكر أو زيد بن حارثة؛ لا نرجّح.", "The author says the commander was Abu Bakr or Zayd ibn Harithah; we do not choose.")]),
      ],
      tabuk: [
        card("thaqif", "context", "«لا تسبقني إلى رسول الله ﷺ»", "'Do not get to the Messenger ﷺ before me'",
          "في قدوم وفد ثقيف قال ابن القيم: اشتد المغيرة بن شعبة ليبشّر النبي ﷺ، «فلقيه أبو بكر فقال له: أقسمت عليك لا تسبقني إلى رسول الله ﷺ حتى أكون أنا أحدثه. ففعل فدخل أبو بكر على رسول الله ﷺ فأخبره بقدومهم عليه».",
          "On the arrival of the Thaqif delegation, Ibn al-Qayyim says al-Mughirah ibn Shuʿbah hurried to give the Prophet ﷺ the good news; 'Abu Bakr met him and said: I adjure you, do not get to the Messenger of Allah ﷺ before me, so that I may be the one to tell him. He agreed, and Abu Bakr went in to the Messenger of Allah ﷺ and told him of their arrival.'",
          [ci("zad_v3_p625", "grading_unverified", "أقسمت عليك لا تسبقني إلى رسول الله ﷺ حتى أكون أنا أحدثه")]),
      ],
    },
    quiz: [
      q("v8q2", "finhas", "لماذا ضرب أبو بكر فنحاص؟", "Why did Abu Bakr strike Finhas?",
        [["لأنه زعم أن الله فقير", "He claimed Allah is poor"], ["لأنه سرق ماله", "He stole his money"], ["لأنه سبّه", "He insulted him personally"]], 0, "«غضبت لله مما قال».", "'I became angry for Allah.'"),
      q("v8q3", "uhud-first", "من أول من فاء إلى النبي ﷺ يوم أحد في رواية ابن حبان التي ذكرها المباركفوري؟", "In the Ibn Hibban report cited by al-Mubarakfuri, who first returned to the Prophet ﷺ at Uhud?",
        [["أبو بكر", "Abu Bakr"], ["عمر", "ʿUmar"], ["خالد بن الوليد", "Khalid ibn al-Walid"]], 0, "«فكنت أول من فاء».", "'I was the first to come back.'"),
    ],
  },
};
