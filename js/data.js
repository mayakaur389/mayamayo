const LANG = {
  hi: { // Hindi User → English सीखेगा
    mode: "hi2en",
    askMaya: "Maya Didi से पूछो",
    practice: "Practice गलत Questions",
    streak: "Streak",
    hearts: "Hearts",
    chooseDay: "Day चुनो। Done Day पे Click = Practice",
    unit1: "UNIT 1: ENGLISH BASICS - 30 DAYS",
    doubtTitle: "Maya Didi से पूछो 💬",
    doubtPlaceholder: "यहाँ अपना Doubt लिखो...",
    askBtn: "पूछो",
    voiceBtn: "🎤 बोल के पूछो",
    backBtn: "← वापस",
    startBtn: "Start Quiz",
    modalPracticeBtn: "Practice गलत Questions",
    closeBtn: "बंद करें",
    nextBtn: "Next",
    flag: "🇮🇳"
  },
  en: { // English User → Hindi सीखेगा
    mode: "en2hi",
    askMaya: "Ask Maya Didi",
    practice: "Practice Wrong Questions",
    streak: "Streak",
    hearts: "Hearts",
    chooseDay: "Choose Day. Click Done Day = Practice",
    unit1: "UNIT 1: HINDI BASICS - 30 DAYS",
    doubtTitle: "Ask Maya Didi 💬",
    doubtPlaceholder: "Type your Hindi doubt here...",
    askBtn: "Ask",
    voiceBtn: "🎤 Ask by Voice",
    backBtn: "← Back",
    startBtn: "Start Quiz",
    modalPracticeBtn: "Practice Wrong Questions",
    closeBtn: "Close",
    nextBtn: "Next",
    flag: "🇬🇧"
  }
};

let currentLang = 'hi';

function t(key){ return LANG[currentLang][key]; }

const LESSONS = {
  // Mode 1: Hindi बोलने वाले को English सिखाओ
  hi2en: {
    1: {topic:"I am / You are",questions:[
      {q:"I ___ a student",h:"मैं एक छात्र हूँ",o:["am","is","are"],a:0,g:"I के साथ 'am' लगता है"},
      {q:"You ___ my friend",h:"तुम मेरे दोस्त हो",o:["is","are","am"],a:1,g:"You के साथ 'are' लगता है"},
      {q:"I ___ happy",h:"मैं खुश हूँ",o:["is","am","are"],a:1,g:"I am = मैं हूँ"},
    ]},
    2: {topic:"He/She/It is",questions:[
      {q:"He ___ a doctor",h:"वह एक डॉक्टर है",o:["are","is","am"],a:1,g:"He/She/It के साथ 'is'"},
      {q:"She ___ beautiful",h:"वह सुंदर है",o:["is","are","am"],a:0,g:"She is = वह है"},
    ]},
  },
  // Mode 2: English बोलने वाले को Hindi सिखाओ
  en2hi: {
    1: {topic:"Main / Tum",questions:[
      {q:"___ ek chhatra hoon",h:"I am a student",o:["Main","Tum","Vah"],a:0,g:"I = Main"},
      {q:"___ mere dost ho",h:"You are my friend",o:["Main","Tum","Vah"],a:1,g:"You = Tum"},
      {q:"___ khush hoon",h:"I am happy",o:["Vah","Main","Tum"],a:1,g:"I am = Main hoon"},
    ]},
    2: {topic:"Vah / Yah",questions:[
      {q:"___ ek doctor hai",h:"He is a doctor",o:["Yah","Vah","Main"],a:1,g:"He/She = Vah"},
      {q:"___ sundar hai",h:"She is beautiful",o:["Vah","Yah","Tum"],a:0,g:"She = Vah (female)"},
    ]},
  }
};

let state = {day:1,q:0,hearts:5,xp:0,streak:0,done:[],wrong:[],isPractice:false,selectedDay:1};
let chatHistory = [];

function saveState(){ localStorage.setItem('mayaState',JSON.stringify({...state,currentLang})); }
function loadState(){
  let s = localStorage.getItem('mayaState');
  if(s) {
    let saved = JSON.parse(s);
    state = saved;
    currentLang = saved.currentLang || 'hi';
  }
}
