const LESSONS = {
  1: {topic:"I am / You are",questions:[
    {q:"I ___ a student",h:"मैं एक छात्र हूँ",o:["am","is","are"],a:0,g:"I के साथ 'am' लगता है"},
    {q:"You ___ my friend",h:"तुम मेरे दोस्त हो",o:["is","are","am"],a:1,g:"You के साथ 'are' लगता है"},
    {q:"I ___ happy",h:"मैं खुश हूँ",o:["is","am","are"],a:1,g:"I am = मैं हूँ"},
  ]},
  2: {topic:"He/She/It is",questions:[
    {q:"He ___ a doctor",h:"वह एक डॉक्टर है",o:["are","is","am"],a:1,g:"He/She/It के साथ 'is'"},
    {q:"She ___ beautiful",h:"वह सुंदर है",o:["is","are","am"],a:0,g:"She is = वह है"},
    {q:"It ___ a book",h:"यह एक किताब है",o:["are","is","am"],a:1,g:"It is = यह है"},
  ]},
  3: {topic:"We/They are",questions:[
    {q:"We ___ students",h:"हम छात्र हैं",o:["is","are","am"],a:1,g:"We/They के साथ 'are'"},
    {q:"They ___ playing",h:"वे खेल रहे हैं",o:["is","are","am"],a:1,g:"They are = वे हैं"},
  ]},
};

let state = {day:1,q:0,hearts:5,xp:0,streak:0,done:[],wrong:[],isPractice:false,selectedDay:1};
let chatHistory = [];

function saveState(){ localStorage.setItem('mayaState',JSON.stringify(state)); }
function loadState(){
  let s = localStorage.getItem('mayaState');
  if(s) state = JSON.parse(s);
}
