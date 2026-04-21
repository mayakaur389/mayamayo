let state = {
  streak: 0,
  hearts: 5,  // default 5
  xp: 0,
  done: [],
  wrong: [],
  theme: 'dark'  // add this line
};
const LESSONS = [
  { day: 1, title: "I am", color: "#3b82f6" },
  { day: 2, title: "You are", color: "#3b82f6" },
  { day: 3, title: "He/She/It", color: "#3b82f6" },
  { day: 4, title: "We are", color: "#3b82f6" },
  { day: 5, title: "They are", color: "#3b82f6" },
  { day: 6, title: "Present", color: "#8b5cf6" },
  { day: 7, title: "Questions", color: "#8b5cf6" },
  { day: 8, title: "Negative", color: "#8b5cf6" },
  { day: 9, title: "Have/Has", color: "#8b5cf6" },
  { day: 10, title: "This/That", color: "#8b5cf6" },
  { day: 11, title: "Articles", color: "#ec4899" },
  { day: 12, title: "Plural", color: "#ec4899" },
  { day: 13, title: "My/Your", color: "#ec4899" },
  { day: 14, title: "His/Her", color: "#ec4899" },
  { day: 15, title: "Preposition", color: "#ec4899" },
  { day: 16, title: "Past Simple", color: "#f59e0b" },
  { day: 17, title: "Was/Were", color: "#f59e0b" },
  { day: 18, title: "Past Quest", color: "#f59e0b" },
  { day: 19, title: "Past Neg", color: "#f59e0b" },
  { day: 20, title: "Irregular", color: "#f59e0b" },
  { day: 21, title: "Future", color: "#10b981" },
  { day: 22, title: "Will Quest", color: "#10b981" },
  { day: 23, title: "Will Neg", color: "#10b981" },
  { day: 24, title: "Going to", color: "#10b981" },
  { day: 25, title: "Can/Could", color: "#10b981" },
  { day: 26, title: "Must/Should", color: "#06b6d4" },
  { day: 27, title: "May/Might", color: "#06b6d4" },
  { day: 28, title: "Comparative", color: "#06b6d4" },
  { day: 29, title: "Superlative", color: "#06b6d4" },
  { day: 30, title: "Final Test", color: "#ef4444" }
];

function loadState(){
  let saved = localStorage.getItem('mayaDidiState');
  if(saved){
    state = JSON.parse(saved);
  }
  updateStats();
}

function saveState(){
  localStorage.setItem('mayaDidiState', JSON.stringify(state));
}

window.onload = function(){
  loadState();
  loadDays();
  showScreen('homeScreen');
}
