let state = {
  streak: 0,
  hearts: 5,
  xp: 0,
  done: [],
  wrong: []
};

const LESSONS = [
  { day: 1, title: "I am", desc: "Basic intro" },
  { day: 2, title: "You are", desc: "Second person" },
  { day: 3, title: "He/She is", desc: "Third person" },
  { day: 4, title: "We are", desc: "Plural" },
  { day: 5, title: "They are", desc: "Plural 3rd" }
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

// Dummy functions - baad me bana lenge
function startPractice(){
  alert('Practice feature abhi ban raha hai bhai');
}

function startDayQuiz(){
  alert('Quiz abhi ban raha hai');
}

function startDayPractice(){
  alert('Practice abhi ban raha hai');
}

function openDay(){
  alert('Day click hua - quiz.js banega to chalega');
}

function closeModal(){
  document.getElementById('dayModal').style.display = 'none';
}
