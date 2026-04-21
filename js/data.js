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

function playSound(id){
  let audio = document.getElementById(id);
  if(audio) {
    audio.currentTime = 0;
    audio.play().catch(e=>{});
  }
}

function getQuizForDay(day){
  const QUIZZES = {
    1: [
      {q: "I ___ a student", hindi: "मैं एक छात्र हूँ", opt: ["am", "is", "are"], ans: 0, grammar: "<b>am</b> = I के साथ"},
      {q: "I ___ happy", hindi: "मैं खुश हूँ", opt: ["am", "is", "are"], ans: 0, grammar: "<b>am</b> = I के साथ"},
      {q: "I ___ Indian", hindi: "मैं भारतीय हूँ", opt: ["am", "is", "are"], ans: 0, grammar: "<b>am</b> = I के साथ"}
    ],
    2: [
      {q: "You ___ smart", hindi: "तुम स्मार्ट हो", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = You के साथ"},
      {q: "You ___ my friend", hindi: "तुम मेरे दोस्त हो", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = You के साथ"},
      {q: "You ___ late", hindi: "तुम लेट हो", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = You के साथ"}
    ],
    3: [
      {q: "He ___ tall", hindi: "वह लंबा है", opt: ["am", "is", "are"], ans: 1, grammar: "<b>is</b> = He/She/It के साथ"},
      {q: "She ___ beautiful", hindi: "वह सुंदर है", opt: ["am", "is", "are"], ans: 1, grammar: "<b>is</b> = He/She/It के साथ"},
      {q: "It ___ a book", hindi: "यह एक किताब है", opt: ["am", "is", "are"], ans: 1, grammar: "<b>is</b> = He/She/It के साथ"}
    ],
    4: [
      {q: "We ___ students", hindi: "हम छात्र हैं", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = We के साथ"},
      {q: "We ___ happy", hindi: "हम खुश हैं", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = We के साथ"},
      {q: "We ___ Indian", hindi: "हम भारतीय हैं", opt: ["am", "is", "are"], ans: 2, grammar: "<b>are</b> = We के साथ"}
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
