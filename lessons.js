// ===== MAYA DIDI LESSON SYSTEM =====
(function(){  // ← IIFE wrap add kiya

const MAYA_LESSONS = {
  lesson1: {
    id: 1,
    title: "Present Tense - Roz ke Kaam",
    intro: "Namaste beta 🙏 Aaj hum sikhenge Present Tense. Ye tab use hota hai jab koi kaam roz hota hai.",
    examples: [
      { en: "I go to school", hi: "Main school jaata hun", explain: "I ke saath 'go' aata hai" },
      { en: "She eats food", hi: "Woh khana khati hai", explain: "She/He ke saath 'eats' - s lagta hai" },
      { en: "They play cricket", hi: "Ve cricket khelte hain", explain: "They/We ke saath 'play' - s nahi lagta" },
      { en: "The sun rises in east", hi: "Suraj purv me nikalta hai", explain: "Sach baat ke liye bhi Present Tense" }
    ],
    quiz: [
      { q: "I ___ to market daily", options: ["go", "goes", "went"], ans: "go", hint: "I ke saath s nahi lagta" },
      { q: "She ___ tea every morning", options: ["drink", "drinks", "drank"], ans: "drinks", hint: "She ke saath s lagao" },
      { q: "They ___ football", options: ["play", "plays", "played"], ans: "play", hint: "They ke saath s nahi lagta" }
    ],
    outro: "Shabaash beta! Present Tense samajh aa gaya. Kal Lesson 2 karenge - Past Tense ⭐"
  },
lesson2: {
    id: 2,
    title: "Past Tense - Kal Ki Baat",
    intro: "Namaste beta 🙏 Aaj hum sikhenge Past Tense. Ye tab use hota hai jab kaam pehle ho chuka hai.",
    examples: [
      { 
        en: "I went to school yesterday", 
        hi: "Main kal school gaya tha", 
        explain: "Yesterday = past, 'go' ka past 'went' hota hai" 
      },
      { 
        en: "She ate an apple", 
        hi: "Usne ek seb khaya", 
        explain: "Eat ka past 'ate' hota hai" 
      },
      { 
        en: "They played cricket", 
        hi: "Unhone cricket khela", 
        explain: "Regular verb me 'ed' lagta hai: play → played" 
      },
      { 
        en: "We watched a movie last night", 
        hi: "Humne kal raat movie dekhi", 
        explain: "Last night = past, watch → watched" 
      }
    ],
    quiz: [
      { 
        q: "I ___ to market yesterday", 
        options: ["go", "goes", "went"], 
        ans: "went", 
        hint: "Yesterday matlab past tense" 
      },
      { 
        q: "She ___ a song last night", 
        options: ["sing", "sang", "sings"], 
        ans: "sang", 
        hint: "Sing ka past 'sang' hota hai" 
      },
      { 
        q: "They ___ football in the evening", 
        options: ["play", "played", "plays"], 
        ans: "played", 
        hint: "Regular verb + ed" 
      },
      { 
        q: "He ___ his homework", 
        options: ["do", "did", "does"], 
        ans: "did", 
        hint: "Do ka past 'did' hota hai" 
      }
    ],
    outro: "Shabaash beta! Past Tense samajh aa gaya ⭐ Kal Lesson 3 me Future Tense seekhenge."
  }
};
let currentLesson = null;
let currentQuizIndex = 0;
let userScore = 0;

function startMayaLesson(lessonNum) {
  // Double message fix
  const chatBox = document.getElementById('chat-messages');
  if(chatBox) {
    chatBox.innerHTML = ''; // Purana clear kar de
  }

  currentLesson = MAYA_LESSONS['lesson' + lessonNum];
  currentQuizIndex = 0;
  userScore = 0;
  mayaSpeak(currentLesson.intro);
  setTimeout(() => { teachExamples(0); }, 2000);
}

function teachExamples(index) {
  if(index >= currentLesson.examples.length) {
    setTimeout(() => {
      mayaSpeak("Ab chhota sa test lete hai beta. Ready?");
      setTimeout(() => askQuizQuestion(), 2000);
    }, 1500);
    return;
  }
  let ex = currentLesson.examples[index];
  mayaSpeak(`${ex.en} = ${ex.hi}. ${ex.explain}`);
  setTimeout(() => teachExamples(index + 1), 3500);
}

function askQuizQuestion() {
  if(currentQuizIndex >= currentLesson.quiz.length) {
    endLesson();
    return;
  }
  let q = currentLesson.quiz[currentQuizIndex];
  let optionsText = q.options.map((opt, i) => `${i+1}. ${opt}`).join(" | ");
  mayaSpeak(`Sawaal ${currentQuizIndex + 1}: ${q.q}. Options: ${optionsText}`);
}

function checkMayaAnswer(userAnswer) {
  let q = currentLesson.quiz[currentQuizIndex];
  let correctAns = q.ans.toLowerCase();
  if(userAnswer.toLowerCase().includes(correctAns)) {
    userScore++;
    mayaSpeak(`Shabaash! Bilkul sahi ✅ ${q.hint}`);
  } else {
    mayaSpeak(`Arre galat ho gaya beta 😅 Sahi answer: ${q.ans}. ${q.hint}`);
  }
  currentQuizIndex++;
  setTimeout(() => askQuizQuestion(), 2500);
}

function endLesson() {
  let total = currentLesson.quiz.length;
  mayaSpeak(`${currentLesson.outro} Tumhara score: ${userScore}/${total} ⭐`);
  localStorage.setItem('maya_lesson1_done', userScore);
}

function mayaSpeak(text) {
  console.log("Maya Didi:", text);
  displayMayaMessage(text);
}

function displayMayaMessage(text) {
  let chatBox = document.getElementById('chat-messages');
  if(chatBox) {
    chatBox.innerHTML += `<div class="maya-msg"><b>Maya Didi:</b> ${text}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

function submitAnswer() {
  let input = document.getElementById('userInput');
  if(input.value.trim()!== '') {
    checkMayaAnswer(input.value);
    input.value = '';
  }
}

// Global assignments
window.startMayaLesson = startMayaLesson;
window.submitAnswer = submitAnswer;
window.checkMayaAnswer = checkMayaAnswer;
 // ===== 30 DAY PRACTICE SYSTEM =====
const DAILY_QUIZ = {
  day1: [
    {q: "I ___ a student", options: ["am", "is", "are"], ans: "am"},
    {q: "She ___ my sister", options: ["am", "is", "are"], ans: "is"},
    {q: "They ___ happy", options: ["am", "is", "are"], ans: "are"},
    //...10 questions
  ],
  day2: [
    {q: "He ___ to school", options: ["go", "goes", "going"], ans: "goes"},
    {q: "We ___ football", options: ["play", "plays", "playing"], ans: "play"},
    //...10 questions
  ]
  // day3 se day30 tak...
};

let currentDayQuiz = null;
let currentDayIndex = 0;
let dayScore = 0;

function startDayQuiz(dayNum) {
  currentDayQuiz = DAILY_QUIZ['day' + dayNum];
  currentDayIndex = 0;
  dayScore = 0;
  document.getElementById('practice-questions').innerHTML = `<h4 style="color:#fff;">Day ${dayNum} Practice</h4>`;
  showDayQuestion();
}

function showDayQuestion() {
  if(currentDayIndex >= currentDayQuiz.length) {
    let box = document.getElementById('practice-questions');
    box.innerHTML += `<div style="color:#4CAF50;margin-top:15px;">Complete! Score: ${dayScore}/${currentDayQuiz.length} ⭐</div>`;
    localStorage.setItem('day' + currentDayIndex + '_score', dayScore);
    return;
  }

  let q = currentDayQuiz[currentDayIndex];
  let optionsHTML = q.options.map(opt =>
    `<button onclick="checkDayAnswer('${opt}')" style="background:#2196F3;color:white;padding:8px 12px;margin:5px;border:none;border-radius:5px;">${opt}</button>`
  ).join('');

  let box = document.getElementById('practice-questions');
  box.innerHTML = `
    <div style="color:#fff;margin:10px 0;">Q${currentDayIndex + 1}: ${q.q}</div>
    <div>${optionsHTML}</div>
    <div style="color:#ccc;margin-top:10px;">Score: ${dayScore}/${currentDayQuiz.length}</div>
  `;
}

function checkDayAnswer(selected) {
  let q = currentDayQuiz[currentDayIndex];
  if(selected === q.ans) {
    dayScore++;
    alert("Sahi! ✅");
  } else {
    alert(`Galat 😅 Sahi answer: ${q.ans}`);
  }
  currentDayIndex++;
  showDayQuestion();
}

// Global banane ke liye
window.startDayQuiz = startDayQuiz;
window.checkDayAnswer = checkDayAnswer; 
  // ===== 30 DAY PRACTICE + HEART + LOCK + ADS =====
const DAILY_QUIZ = {
  day1: [
    {q: "He ___ to school", options: ["go", "goes", "going"], ans: "goes"},
    {q: "I ___ a student", options: ["am", "is", "are"], ans: "am"},
    {q: "She ___ happy", options: ["is", "am", "are"], ans: "is"}
  ],
  day2: [
    {q: "They ___ football", options: ["play", "plays", "playing"], ans: "play"},
    {q: "We ___ tea", options: ["drink", "drinks", "drinking"], ans: "drink"}
  ],
  day3: [
    {q: "I ___ yesterday", options: ["go", "went", "goes"], ans: "went"},
    {q: "She ___ a movie", options: ["watch", "watched", "watches"], ans: "watched"}
  ]
};

let userHearts = 3;
let unlockedDay = parseInt(localStorage.getItem('maya_unlocked_day') || 1);

function createDayButtons() {
  let container = document.getElementById('day-buttons');
  let heartsSpan = document.getElementById('user-hearts');
  if(!container) return;
  container.innerHTML = '';
  if(heartsSpan) heartsSpan.innerText = userHearts;

  for(let i = 1; i <= 30; i++) {
    let btn = document.createElement('button');
    let isLocked = i > unlockedDay;
    let isCompleted = localStorage.getItem('day' + i + '_done');

    btn.innerHTML = isLocked? `🔐<br>${i}` : `${i}`;
    btn.style.cssText = `
      width:45px; height:45px; border-radius:50%; border:none;
      background:${isCompleted? '#4CAF50' : isLocked? '#555' : '#FF9800'};
      color:white; font-weight:bold; cursor:${isLocked? 'not-allowed' : 'pointer'};
      font-size:${isLocked? '10px' : '14px'}; line-height:${isLocked? '1.2' : '45px'};
      box-shadow:0 2px 5px rgba(0,0,0,0.3);
    `;

    if(!isLocked) btn.onclick = () => startDayQuiz(i);
    else btn.onclick = () => alert(`Day ${i} lock hai 🔐 Pehle Day ${unlockedDay} complete karo`);
    container.appendChild(btn);
  }
}

let currentDayQuiz = null, currentDayIndex = 0, dayScore = 0, currentPlayingDay = 0;

function startDayQuiz(dayNum) {
  if(userHearts <= 0) {
    alert("❤️ Hearts khatam! Ads dekho ya kal try karo");
    return;
  }
  currentDayQuiz = DAILY_QUIZ['day' + dayNum];
  if(!currentDayQuiz) return alert("Day " + dayNum + " abhi bana nahi hai");

  currentPlayingDay = dayNum;
  currentDayIndex = 0;
  dayScore = 0;
  showDayQuestion();
}

function showDayQuestion() {
  if(currentDayIndex >= currentDayQuiz.length) {
    localStorage.setItem('day' + currentPlayingDay + '_done', 'true');
    if(currentPlayingDay === unlockedDay) {
      unlockedDay++;
      localStorage.setItem('maya_unlocked_day', unlockedDay);
    }
    document.getElementById('practice-questions').innerHTML = `
      <div style="color:#4CAF50;text-align:center;padding:20px;">
        <h4>🎉 Day ${currentPlayingDay} Complete!</h4>
        <p>Score: ${dayScore}/${currentDayQuiz.length} ⭐</p>
        <p>Agla Day Unlock ho gaya 🔓</p>
      </div>`;
    createDayButtons();
    return;
  }

  let q = currentDayQuiz[currentDayIndex];
  let optionsHTML = q.options.map(opt =>
    `<button onclick="checkDayAnswer('${opt}')" style="background:#2196F3;color:white;padding:10px 15px;margin:5px;border:none;border-radius:8px;font-size:14px;cursor:pointer;">${opt}</button>`
  ).join('');

  document.getElementById('practice-questions').innerHTML = `
    <div style="background:#2d2d2d;padding:15px;border-radius:10px;margin:10px 0;">
      <div style="color:#FFD700;margin-bottom:10px;font-weight:bold;">Day ${currentPlayingDay} - Q${currentDayIndex + 1}/${currentDayQuiz.length}</div>
      <div style="color:#fff;margin:15px 0;font-size:16px;">${q.q}</div>
      <div>${optionsHTML}</div>
      <div style="color:#ccc;margin-top:15px;font-size:12px;">❤️ ${userHearts} | Score: ${dayScore}/${currentDayQuiz.length}</div>
    </div>`;
}

function checkDayAnswer(selected) {
  let q = currentDayQuiz[currentDayIndex];
  if(selected === q.ans) {
    dayScore++;
  } else {
    userHearts--;
    document.getElementById('user-hearts').innerText = userHearts;
  }

  if(userHearts <= 0) {
    document.getElementById('practice-questions').innerHTML = `
      <div style="color:#f44336;text-align:center;padding:20px;">
        <h4>Hearts Khatam! 😢</h4>
        <p>Ads dekho ya kal wapas aao</p>
        <button onclick="userHearts=3;document.getElementById('user-hearts').innerText=3;createDayButtons();document.getElementById('practice-questions').innerHTML=''" style="background:#4CAF50;color:white;padding:10px 20px;border:none;border-radius:8px;margin-top:10px;">Ads Dekh Ke Hearts Lo</button>
      </div>`;
    return;
  }
  currentDayIndex++;
  showDayQuestion();
}

document.addEventListener('DOMContentLoaded', createDayButtons);
window.startDayQuiz = startDayQuiz;
window.checkDayAnswer = checkDayAnswer;
})(); // ← IIFE end
