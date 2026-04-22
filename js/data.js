let currentDay = 1;
let currentQ = 0;
let quizData = [];

let state = { 
  streak: 0, 
  hearts: 5, 
  xp: 0, 
  done: [], 
  wrong: [], 
  theme: 'dark'
};

const LESSONS = [
  { day: 1, title: "I am" }, { day: 2, title: "You are" }, { day: 3, title: "He/She/It" },
  { day: 4, title: "We are" }, { day: 5, title: "They are" }, { day: 6, title: "Present" },
  { day: 7, title: "Questions" }, { day: 8, title: "Negative" }, { day: 9, title: "Have/Has" },
  { day: 10, title: "This/That" }, { day: 11, title: "Articles" }, { day: 12, title: "Plural" },
  { day: 13, title: "My/Your" }, { day: 14, title: "His/Her" }, { day: 15, title: "Preposition" },
  { day: 16, title: "Past Simple" }, { day: 17, title: "Was/Were" }, { day: 18, title: "Past Quest" },
  { day: 19, title: "Past Neg" }, { day: 20, title: "Irregular" }, { day: 21, title: "Future" },
  { day: 22, title: "Will Quest" }, { day: 23, title: "Will Neg" }, { day: 24, title: "Going to" },
  { day: 25, title: "Can/Could" }, { day: 26, title: "Must/Should" }, { day: 27, title: "May/Might" },
  { day: 28, title: "Comparative" }, { day: 29, title: "Superlative" }, { day: 30, title: "Final Test" }
];

function saveState(){
  localStorage.setItem('mayaDidiState', JSON.stringify(state));
}

function loadState(){
  let saved = localStorage.getItem('mayaDidiState');
  if(saved) state = JSON.parse(saved);
  updateStats();
}



function getQuizForDay(day){
  const QUIZZES = {
    1: [ // I am
      {q: "I ___ a student", hindi: "मैं एक छात्र हूँ", opt: ["am", "is", "are"], ans: 0, grammar: "<b>am</b> = I के साथ use hota hai"},
      {q: "I ___ happy", hindi: "मैं खुश हूँ", opt: ["am", "is", "are"], ans: 0, grammar: "<b>am</b> = I के साथ"},
      {q: "I ___ from India", hindi: "मैं भारत से हूँ", opt: ["am", "is", "are"], ans: 0, grammar: "<b>am</b> = I के साथ"},
      {q: "I ___ 18 years old", hindi: "मैं 18 साल का हूँ", opt: ["am", "is", "are"], ans: 0, grammar: "<b>am</b> = I के साथ"},
      {q: "I ___ ready", hindi: "मैं तैयार हूँ", opt: ["am", "is", "are"], ans: 0, grammar: "<b>am</b> = I के साथ"}
    ],
    2: [ // You are
      {q: "You ___ smart", hindi: "तुम स्मार्ट हो", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = You के साथ"},
      {q: "You ___ my friend", hindi: "तुम मेरे दोस्त हो", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = You के साथ"},
      {q: "You ___ late", hindi: "तुम लेट हो", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = You के साथ"},
      {q: "You ___ very kind", hindi: "तुम बहुत दयालु हो", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = You के साथ"},
      {q: "You ___ in my class", hindi: "तुम मेरी क्लास में हो", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = You के साथ"}
    ],
    3: [ // He/She/It is
      {q: "He ___ tall", hindi: "वह लंबा है", opt: ["am", "is", "are"], ans: 1, grammar: "<b>is</b> = He/She/It के साथ"},
      {q: "She ___ beautiful", hindi: "वह सुंदर है", opt: ["am", "is", "are"], ans: 1, grammar: "<b>is</b> = He/She/It के साथ"},
      {q: "It ___ a book", hindi: "यह एक किताब है", opt: ["am", "is", "are"], ans: 1, grammar: "<b>is</b> = He/She/It के साथ"},
      {q: "He ___ my brother", hindi: "वह मेरा भाई है", opt: ["am", "is", "are"], ans: 1, grammar: "<b>is</b> = He/She/It के साथ"},
      {q: "She ___ a doctor", hindi: "वह एक डॉक्टर है", opt: ["am", "is", "are"], ans: 1, grammar: "<b>is</b> = He/She/It के साथ"}
    ],
    4: [ // We are
      {q: "We ___ students", hindi: "हम छात्र हैं", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = We के साथ"},
      {q: "We ___ happy", hindi: "हम खुश हैं", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = We के साथ"},
      {q: "We ___ Indian", hindi: "हम भारतीय हैं", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = We के साथ"},
      {q: "We ___ best friends", hindi: "हम अच्छे दोस्त हैं", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = We के साथ"},
      {q: "We ___ in school", hindi: "हम स्कूल में हैं", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = We के साथ"}
    ],
    5: [ // They are
      {q: "They ___ boys", hindi: "वे लड़के हैं", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = They के साथ"},
      {q: "They ___ playing", hindi: "वे खेल रहे हैं", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = They के साथ"},
      {q: "They ___ my friends", hindi: "वे मेरे दोस्त हैं", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = They के साथ"},
      {q: "They ___ very good", hindi: "वे बहुत अच्छे हैं", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = They के साथ"},
      {q: "They ___ from Delhi", hindi: "वे दिल्ली से हैं", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = They के साथ"}
    ],
    6: [ // Present Simple - s/es
      {q: "He ___ cricket", hindi: "वह क्रिकेट खेलता है", opt: ["play", "plays", "playing"], ans: 1, grammar: "He/She/It + verb + s/es"},
      {q: "She ___ to school", hindi: "वह स्कूल जाती है", opt: ["go", "goes", "going"], ans: 1, grammar: "He/She/It + goes"},
      {q: "Ram ___ mango", hindi: "राम आम खाता है", opt: ["eat", "eats", "eating"], ans: 1, grammar: "He/She/It + eats"},
      {q: "My mom ___ food", hindi: "मेरी माँ खाना बनाती है", opt: ["cook", "cooks", "cooking"], ans: 1, grammar: "He/She/It + cooks"},
      {q: "The sun ___ in east", hindi: "सूरज पूरब में उगता है", opt: ["rise", "rises", "rising"], ans: 1, grammar: "He/She/It + rises"}
    ],
    7: [ // Questions Do/Does
      {q: "___ you like tea?", hindi: "क्या तुम्हें चाय पसंद है?", opt: ["Do", "Does", "Is"], ans: 0, grammar: "Do + You/We/They + verb"},
      {q: "___ he play football?", hindi: "क्या वह फुटबॉल खेलता है?", opt: ["Do", "Does", "Is"], ans: 1, grammar: "Does + He/She/It + verb"},
      {q: "___ she know me?", hindi: "क्या वह मुझे जानती है?", opt: ["Do", "Does", "Is"], ans: 1, grammar: "Does + He/She/It + verb"},
      {q: "___ they come here?", hindi: "क्या वे यहाँ आते हैं?", opt: ["Do", "Does", "Is"], ans: 0, grammar: "Do + You/We/They + verb"},
      {q: "___ we have class?", hindi: "क्या हमारी क्लास है?", opt: ["Do", "Does", "Is"], ans: 0, grammar: "Do + You/We/They + verb"}
    ],
    8: [ // Negative don't/doesn't
      {q: "I ___ like coffee", hindi: "मुझे कॉफ़ी पसंद नहीं", opt: ["don't", "doesn't", "isn't"], ans: 0, grammar: "I/You/We/They + don't"},
      {q: "He ___ eat meat", hindi: "वह मांस नहीं खाता", opt: ["don't", "doesn't", "isn't"], ans: 1, grammar: "He/She/It + doesn't"},
      {q: "She ___ know him", hindi: "वह उसे नहीं जानती", opt: ["don't", "doesn't", "isn't"], ans: 1, grammar: "He/She/It + doesn't"},
      {q: "We ___ have time", hindi: "हमारे पास समय नहीं है", opt: ["don't", "doesn't", "isn't"], ans: 0, grammar: "I/You/We/They + don't"},
      {q: "They ___ live here", hindi: "वे यहाँ नहीं रहते", opt: ["don't", "doesn't", "isn't"], ans: 0, grammar: "I/You/We/They + don't"}
    ],
    9: [ // Have/Has
      {q: "I ___ a pen", hindi: "मेरे पास एक पेन है", opt: ["have", "has", "am"], ans: 0, grammar: "I/You/We/They + have"},
      {q: "She ___ a car", hindi: "उसके पास एक कार है", opt: ["have", "has", "is"], ans: 1, grammar: "He/She/It + has"},
      {q: "We ___ two books", hindi: "हमारे पास दो किताबें हैं", opt: ["have", "has", "are"], ans: 0, grammar: "I/You/We/They + have"},
      {q: "He ___ a brother", hindi: "उसका एक भाई है", opt: ["have", "has", "is"], ans: 1, grammar: "He/She/It + has"},
      {q: "They ___ money", hindi: "उनके पास पैसे हैं", opt: ["have", "has", "are"], ans: 0, grammar: "I/You/We/They + have"}
    ],
    10: [ // This/That/These/Those
      {q: "___ is my book", hindi: "यह मेरी किताब है", opt: ["This", "These", "Those"], ans: 0, grammar: "This = paas ki 1 cheez"},
      {q: "___ are my shoes", hindi: "ये मेरे जूते हैं", opt: ["This", "These", "That"], ans: 1, grammar: "These = paas ki kai cheeze"},
      {q: "___ is a car", hindi: "वह एक कार है", opt: ["This", "That", "These"], ans: 1, grammar: "That = door ki 1 cheez"},
      {q: "___ are birds", hindi: "वे पक्षी हैं", opt: ["This", "These", "Those"], ans: 2, grammar: "Those = door ki kai cheeze"},
      {q: "___ boy is tall", hindi: "यह लड़का लंबा है", opt: ["This", "That", "Those"], ans: 0, grammar: "This = paas ka 1"}
    ],
    11: [ // A/An/The
      {q: "I saw ___ elephant", hindi: "मैंने एक हाथी देखा", opt: ["a", "an", "the"], ans: 1, grammar: "an = vowel sound se pehle"},
      {q: "She is ___ doctor", hindi: "वह एक डॉक्टर है", opt: ["a", "an", "the"], ans: 0, grammar: "a = consonant sound se pehle"},
      {q: "___ sun is hot", hindi: "सूरज गर्म है", opt: ["A", "An", "The"], ans: 2, grammar: "The = unique cheez ke liye"},
      {q: "He ate ___ apple", hindi: "उसने एक सेब खाया", opt: ["a", "an", "the"], ans: 1, grammar: "an = vowel sound se pehle"},
      {q: "I live in ___ India", hindi: "मैं भारत में रहता हूँ", opt: ["a", "an", "no article"], ans: 2, grammar: "Country ke naam se pehle article nahi"}
    ],
    12: [ // Singular/Plural
      {q: "One boy, two ___", hindi: "एक लड़का, दो ___", opt: ["boy", "boys", "boyes"], ans: 1, grammar: "Plural me s lagta hai"},
      {q: "One box, many ___", hindi: "एक डिब्बा, कई ___", opt: ["box", "boxs", "boxes"], ans: 2, grammar: "x,sh,ch,s ke baad es"},
      {q: "One city, two ___", hindi: "एक शहर, दो ___", opt: ["citys", "cities", "cityes"], ans: 1, grammar: "y ke pehle consonant ho to ies"},
      {q: "One man, three ___", hindi: "एक आदमी, तीन ___", opt: ["mans", "men", "mens"], ans: 1, grammar: "man ka plural men hota hai"},
      {q: "One child, many ___", hindi: "एक बच्चा, कई ___", opt: ["childs", "children", "childes"], ans: 1, grammar: "child ka plural children"}
    ],
    13: [ // My/Your
      {q: "___ name is Ram", hindi: "मेरा नाम राम है", opt: ["My", "Your", "His"], ans: 0, grammar: "My = mera/meri"},
      {q: "What is ___ name?", hindi: "तुम्हारा नाम क्या है?", opt: ["my", "your", "her"], ans: 1, grammar: "Your = tumhara/tumhari"},
      {q: "This is ___ book", hindi: "यह मेरी किताब है", opt: ["my", "your", "his"], ans: 0, grammar: "My = mera/meri"},
      {q: "Is this ___ pen?", hindi: "क्या यह तुम्हारा पेन है?", opt: ["my", "your", "her"], ans: 1, grammar: "Your = tumhara/tumhari"},
      {q: "___ father is teacher", hindi: "मेरे पापा शिक्षक हैं", opt: ["My", "Your", "His"], ans: 0, grammar: "My = mera/meri"}
    ],
    14: [ // His/Her/Its
      {q: "___ name is Sita", hindi: "उसका नाम सीता है", opt: ["His", "Her", "Its"], ans: 1, grammar: "Her = ladki ka"},
      {q: "___ car is red", hindi: "उसकी कार लाल है", opt: ["His", "Her", "Its"], ans: 0, grammar: "His = ladke ka"},
      {q: "The dog wags ___ tail", hindi: "कुत्ता अपनी पूंछ हिलाता है", opt: ["his", "her", "its"], ans: 2, grammar: "Its = janwar/cheez ka"},
      {q: "Ravi loves ___ mother", hindi: "रवि अपनी माँ से प्यार करता है", opt: ["his", "her", "its"], ans: 0, grammar: "His = ladke ka"},
      {q: "She lost ___ book", hindi: "उसने अपनी किताब खो दी", opt: ["his", "her", "its"], ans: 1, grammar: "Her = ladki ka"}
    ],
    15: [ // Preposition in/on/at
      {q: "I live ___ Patna", hindi: "मैं पटना में रहता हूँ", opt: ["in", "on", "at"], ans: 0, grammar: "in = bade city/country"},
      {q: "Book is ___ table", hindi: "किताब मेज पर है", opt: ["in", "on", "at"], ans: 1, grammar: "on = kisi cheez ke upar"},
      {q: "Meet me ___ 5 pm", hindi: "मुझसे 5 बजे मिलो", opt: ["in", "on", "at"], ans: 2, grammar: "at = exact time ke liye"},
      {q: "Birthday is ___ Monday", hindi: "जन्मदिन सोमवार को है", opt: ["in", "on", "at"], ans: 1, grammar: "on = din ke liye"},
      {q: "He was born ___ 2005", hindi: "वह 2005 में पैदा हुआ", opt: ["in", "on", "at"], ans: 0, grammar: "in = saal/mahina ke liye"}
    ],
    16: [ // Past Simple was/were
      {q: "I ___ happy yesterday", hindi: "मैं कल खुश था", opt: ["was", "were", "am"], ans: 0, grammar: "I/He/She/It + was"},
      {q: "They ___ at school", hindi: "वे स्कूल में थे", opt: ["was", "were", "are"], ans: 1, grammar: "You/We/They + were"},
      {q: "She ___ absent", hindi: "वह अनुपस्थित थी", opt: ["was", "were", "is"], ans: 0, grammar: "I/He/She/It + was"},
      {q: "We ___ friends", hindi: "हम दोस्त थे", opt: ["was", "were", "are"], ans: 1, grammar: "You/We/They + were"},
      {q: "He ___ a good boy", hindi: "वह एक अच्छा लड़का था", opt: ["was", "were", "is"], ans: 0, grammar: "I/He/She/It + was"}
    ],
    17: [ // Past verb + ed
      {q: "I ___ football", hindi: "मैंने फुटबॉल खेला", opt: ["play", "played", "playing"], ans: 1, grammar: "Past me verb + ed"},
      {q: "She ___ to market", hindi: "वह बाजार गई", opt: ["go", "went", "gone"], ans: 1, grammar: "go ka past went"},
      {q: "They ___ movie", hindi: "उन्होंने फिल्म देखी", opt: ["watch", "watched", "watching"], ans: 1, grammar: "Past me verb + ed"},
      {q: "He ___ a letter", hindi: "उसने एक पत्र लिखा", opt: ["write", "wrote", "written"], ans: 1, grammar: "write ka past wrote"},
      {q: "We ___ pizza", hindi: "हमने पिज्जा खाया", opt: ["eat", "ate", "eaten"], ans: 1, grammar: "eat ka past ate"}
    ],
    18: [ // Past Question Did
      {q: "___ you go school?", hindi: "क्या तुम स्कूल गए?", opt: ["Did", "Do", "Does"], ans: 0, grammar: "Did + subject + verb1"},
      {q: "___ she call you?", hindi: "क्या उसने तुम्हें फोन किया?", opt: ["Did", "Do", "Does"], ans: 0, grammar: "Did + subject + verb1"},
      {q: "___ they win match?", hindi: "क्या वे मैच जीते?", opt: ["Did", "Do", "Does"], ans: 0, grammar: "Did + subject + verb1"},
      {q: "___ he come late?", hindi: "क्या वह देर से आया?", opt: ["Did", "Do", "Does"], ans: 0, grammar: "Did + subject + verb1"},
      {q: "___ we meet him?", hindi: "क्या हम उससे मिले?", opt: ["Did", "Do", "Does"], ans: 0, grammar: "Did + subject + verb1"}
    ],
    19: [ // Past Negative didn't
      {q: "I ___ go there", hindi: "मैं वहाँ नहीं गया", opt: ["didn't", "don't", "doesn't"], ans: 0, grammar: "didn't + verb1"},
      {q: "She ___ like it", hindi: "उसे यह पसंद नहीं आया", opt: ["didn't", "don't", "doesn't"], ans: 0, grammar: "didn't + verb1"},
      {q: "They ___ come", hindi: "वे नहीं आए", opt: ["didn't", "don't", "doesn't"], ans: 0, grammar: "didn't + verb1"},
      {q: "He ___ call me", hindi: "उसने मुझे फोन नहीं किया", opt: ["didn't", "don't", "doesn't"], ans: 0, grammar: "didn't + verb1"},
      {q: "We ___ see him", hindi: "हमने उसे नहीं देखा", opt: ["didn't", "don't", "doesn't"], ans: 0, grammar: "didn't + verb1"}
    ],
    20: [ // Irregular verbs
      {q: "go - went - ___", hindi: "जाना - गया - ___", opt: ["go", "gone", "goes"], ans: 1, grammar: "go-went-gone"},
      {q: "eat - ate - ___", hindi: "खाना - खाया - ___", opt: ["eat", "eaten", "eats"], ans: 1, grammar: "eat-ate-eaten"},
      {q: "see - saw - ___", hindi: "देखना - देखा - ___", opt: ["see", "seen", "sees"], ans: 1, grammar: "see-saw-seen"},
      {q: "write - wrote - ___", hindi: "लिखना - लिखा - ___", opt: ["write", "written", "writes"], ans: 1, grammar: "write-wrote-written"},
      {q: "take - took - ___", hindi: "लेना - लिया - ___", opt: ["take", "taken", "takes"], ans: 1, grammar: "take-took-taken"}
    ],
    21: [ // Future will
      {q: "I ___ go tomorrow", hindi: "मैं कल जाऊँगा", opt: ["will", "would", "shall"], ans: 0, grammar: "will + verb1 = future"},
      {q: "She ___ come", hindi: "वह आएगी", opt: ["will", "would", "shall"], ans: 0, grammar: "will + verb1 = future"},
      {q: "They ___ play", hindi: "वे खेलेंगे", opt: ["will", "would", "shall"], ans: 0, grammar: "will + verb1 = future"},
      {q: "We ___ win", hindi: "हम जीतेंगे", opt: ["will", "would", "shall"], ans: 0, grammar: "will + verb1 = future"},
      {q: "He ___ call you", hindi: "वह तुम्हें फोन करेगा", opt: ["will", "would", "shall"], ans: 0, grammar: "will + verb1 = future"}
    ],
    22: [ // Future Question will
      {q: "___ you help me?", hindi: "क्या तुम मेरी मदद करोगे?", opt: ["Will", "Would", "Shall"], ans: 0, grammar: "Will + subject + verb1?"},
      {q: "___ she come?", hindi: "क्या वह आएगी?", opt: ["Will", "Would", "Shall"], ans: 0, grammar: "Will + subject + verb1?"},
      {q: "___ they agree?", hindi: "क्या वे मानेंगे?", opt: ["Will", "Would", "Shall"], ans: 0, grammar: "Will + subject + verb1?"},
      {q: "___ he call back?", hindi: "क्या वह वापस फोन करेगा?", opt: ["Will", "Would", "Shall"], ans: 0, grammar: "Will + subject + verb1?"},
      {q: "___ we meet?", hindi: "क्या हम मिलेंगे?", opt: ["Will", "Would", "Shall"], ans: 0, grammar: "Will + subject + verb1?"}
    ],
    23: [ // Future Negative won't
      {q: "I ___ go there", hindi: "मैं वहाँ नहीं जाऊँगा", opt: ["won't", "don't", "didn't"], ans: 0, grammar: "will not = won't"},
      {q: "She ___ come", hindi: "वह नहीं आएगी", opt: ["won't", "don't", "didn't"], ans: 0, grammar: "will not = won't"},
      {q: "They ___ agree", hindi: "वे नहीं मानेंगे", opt: ["won't", "don't", "didn't"], ans: 0, grammar: "will not = won't"},
      {q: "He ___ call", hindi: "वह फोन नहीं करेगा", opt: ["won't", "don't", "didn't"], ans: 0, grammar: "will not = won't"},
      {q: "We ___ lose", hindi: "हम नहीं हारेंगे", opt: ["won't", "don't", "didn't"], ans: 0, grammar: "will not = won't"}
    ],
    24: [ // Going to
      {q: "I ___ play cricket", hindi: "मैं क्रिकेट खेलने वाला हूँ", opt: ["am going to", "is going to", "are going to"], ans: 0, grammar: "I + am going to"},
      {q: "She ___ sleep", hindi: "वह सोने वाली है", opt: ["am going to", "is going to", "are going to"], ans: 1, grammar: "He/She/It + is going to"},
      {q: "They ___ come", hindi: "वे आने वाले हैं", opt: ["am going to", "is going to", "are going to"], ans: 2, grammar: "You/We/They + are going to"},
      {q: "We ___ watch movie", hindi: "हम फिल्म देखने वाले हैं", opt: ["am going to", "is going to", "are going to"], ans: 2, grammar: "You/We/They + are going to"},
      {q: "He ___ study", hindi: "वह पढ़ने वाला है", opt: ["am going to", "is going to", "are going to"], ans: 1, grammar: "He/She/It + is going to"}
    ],
    25: [ // Can/Could
      {q: "I ___ swim", hindi: "मैं तैर सकता हूँ", opt: ["can", "could", "will"], ans: 0, grammar: "can = ability in present"},
      {q: "She ___ sing well", hindi: "वह अच्छा गा सकती है", opt: ["can", "could", "will"], ans: 0, grammar: "can = ability in present"},
      {q: "___ you help me?", hindi: "क्या तुम मेरी मदद कर सकते हो?", opt: ["Can", "Could", "Will"], ans: 0, grammar: "Can = request"},
      {q: "When I was kid, I ___ run fast", hindi: "जब मैं बच्चा था, तेज दौड़ सकता था", opt: ["can", "could", "will"], ans: 1, grammar: "could = past ability"},
      {q: "___ you speak English?", hindi: "क्या तुम अंग्रेजी बोल सकते हो?", opt: ["Can", "Could", "Will"], ans: 0, grammar: "Can = ability"}
    ],
    26: [ // Must/Should
      {q: "You ___ study hard", hindi: "तुम्हें मेहनत से पढ़ना चाहिए", opt: ["must", "should", "can"], ans: 1, grammar: "should = advice"},
      {q: "You ___ wear helmet", hindi: "तुम्हें हेलमेट पहनना चाहिए", opt: ["must", "should", "can"], ans: 0, grammar: "must = strong rule"},
      {q: "We ___ obey rules", hindi: "हमें नियम मानने चाहिए", opt: ["must", "should", "can"], ans: 0, grammar: "must = compulsion"},
      {q: "You ___ drink water", hindi: "तुम्हें पानी पीना चाहिए", opt: ["must", "should", "can"], ans: 1, grammar: "should = advice"},
      {q: "Students ___ be on time", hindi: "छात्रों को समय पर होना चाहिए", opt: ["must", "should", "can"], ans: 0, grammar: "must = strong rule"}
    ],
    27: [ // May/Might
      {q: "___ I come in?", hindi: "क्या मैं अंदर आ सकता हूँ?", opt: ["May", "Might", "Must"], ans: 0, grammar: "May = permission"},
      {q: "It ___ rain today", hindi: "आज बारिश हो सकती है", opt: ["may", "might", "must"], ans: 1, grammar: "might = less sure"},
      {q: "___ I use your pen?", hindi: "क्या मैं आपका पेन इस्तेमाल कर सकता हूँ?", opt: ["May", "Might", "Must"], ans: 0, grammar: "May = permission"},
      {q: "She ___ be late", hindi: "वह देर से आ सकती है", opt: ["may", "might", "must"], ans: 1, grammar: "might = possibility"},
      {q: "___ I go now?", hindi: "क्या मैं अब जा सकता हूँ?", opt: ["May", "Might", "Must"], ans: 0, grammar: "May = permission"}
    ],
    28: [ // Comparative -er/more
      {q: "Ram is ___ than Shyam", hindi: "राम श्याम से लंबा है", opt: ["tall", "taller", "tallest"], ans: 1, grammar: "Comparative = er/more"},
      {q: "This book is ___ than that", hindi: "यह किताब उससे अच्छी है", opt: ["good", "better", "best"], ans: 1, grammar: "good-better-best"},
      {q: "My car is ___ than yours", hindi: "मेरी कार तुम्हारी से तेज है", opt: ["fast", "faster", "fastest"], ans: 1, grammar: "Comparative = er"},
      {q: "She is ___ beautiful than her", hindi: "वह उससे ज्यादा सुंदर है", opt: ["more", "most", "much"], ans: 0, grammar: "long word = more"},
      {q: "He runs ___ than me", hindi: "वह मुझसे तेज दौड़ता है", opt: ["fast", "faster", "fastest"], ans: 1, grammar: "Comparative = er"}
    ],
    29: [ // Superlative -est/most
      {q: "He is ___ boy in class", hindi: "वह कक्षा का सबसे लंबा लड़का है", opt: ["tall", "taller", "tallest"], ans: 2, grammar: "Superlative = est/most"},
      {q: "This is ___ book", hindi: "यह सबसे अच्छी किताब है", opt: ["good", "better", "best"], ans: 2, grammar: "good-better-best"},
      {q: "Mount Everest is ___", hindi: "माउंट एवरेस्ट सबसे ऊँचा है", opt: ["high", "higher", "highest"], ans: 2, grammar: "Superlative = est"},
      {q: "She is ___ girl here", hindi: "वह यहाँ की सबसे सुंदर लड़की है", opt: ["more beautiful", "most beautiful", "beautiful"], ans: 1, grammar: "long word = most"},
      {q: "He is ___ student", hindi: "वह सबसे तेज छात्र है", opt: ["fast", "faster", "fastest"], ans: 2, grammar: "Superlative = est"}
    ],
    30: [ // Final Mixed Test
      {q: "I ___ a boy", hindi: "मैं एक लड़का हूँ", opt: ["am", "is", "are"], ans: 0, grammar: "I + am"},
      {q: "She ___ to school", hindi: "वह स्कूल जाती है", opt: ["go", "goes", "going"], ans: 1, grammar: "She + goes"},
      {q: "They ___ playing", hindi: "वे खेल रहे थे", opt: ["was", "were", "are"], ans: 1, grammar: "They + were"},
      {q: "___ you come tomorrow?", hindi: "क्या तुम कल आओगे?", opt: ["Will", "Do", "Did"], ans: 0, grammar: "Will + subject + verb1"},
      {q: "He ___ a car", hindi: "उसके पास एक कार है", opt: ["have", "has", "had"], ans: 1, grammar: "He/She/It + has"}
    ]
  };

  return QUIZZES[day] || QUIZZES[1];
}
window.onload = function(){
  loadState();
  applyTheme();
  loadDays();
  showScreen('homeScreen');
}
