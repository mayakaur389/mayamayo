const lessons = [
  { title: "Present Tense", day: 1, questions: [
    { q: "I _ to school daily.", options: ["go", "goes", "going"], answer: "go", hindi: "मैं रोज स्कूल जाता हूँ", english: "I _ to school daily." },
    { q: "She _ a book.", options: ["read", "reads", "reading"], answer: "reads", hindi: "वह एक किताब पढ़ती है", english: "She _ a book." },
    { q: "They _ football.", options: ["play", "plays", "playing"], answer: "play", hindi: "वे फुटबॉल खेलते हैं", english: "They _ football." },
    { q: "We _ water every morning.", options: ["drink", "drinks", "drinking"], answer: "drink", hindi: "हम हर सुबह पानी पीते हैं", english: "We _ water every morning." }
  ]},
  { title: "Past Tense", day: 2, questions: [
    { q: "I _ to school yesterday.", options: ["go", "went", "gone"], answer: "went", hindi: "मैं कल स्कूल गया था", english: "I _ to school yesterday." },
    { q: "He _ a movie last night.", options: ["watch", "watched", "watching"], answer: "watched", hindi: "उसने कल रात फिल्म देखी", english: "He _ a movie last night." }
  ]},
  { title: "Future Tense", day: 3, questions: [
    { q: "I _ go to Delhi tomorrow.", options: ["will", "shall", "would"], answer: "will", hindi: "मैं कल दिल्ली जाऊँगा", english: "I _ go to Delhi tomorrow." }
  ]},
  { title: "Nouns & Pronouns", day: 4, questions: [
    { q: "_ is my friend.", options: ["He", "Him", "His"], answer: "He", hindi: "वह मेरा मित्र है", english: "_ is my friend." }
  ]},
  { title: "Verbs", day: 5, questions: [
    { q: "I _ eating.", options: ["am", "is", "are"], answer: "am", hindi: "मैं खा रहा हूँ", english: "I _ eating." }
  ]}
];

// ===== Quiz Logic =====
let currentDay = 0;
let currentQuestion = 0;
let selectedWords = [];
let currentQ = null;
let gameData = lessons;

// ===== DAY SYSTEM: 30 KA BATCH - FINAL FIX =====
let daysPerUnit = 30;

// localStorage se data nikalo + purana data fix karo
let savedCompleted = localStorage.getItem('completedDays');
let completedDaysArray = [];

// Agar purana number hai to array bana do
if(savedCompleted) {
  try {
    let parsed = JSON.parse(savedCompleted);
    // Agar array hai to use karo, warna number se array banao
    if(Array.isArray(parsed)) {
      completedDaysArray = parsed;
    } else {
      // Purana: 5 tha → Naya: [1,2,3,4,5]
      for(let i = 1; i <= parsed; i++) {
        completedDaysArray.push(i);
      }
    }
  } catch(e) {
    completedDaysArray = [];
  }
}

let userProgress = {
  completedDays: completedDaysArray,
  currentDay: parseInt(localStorage.getItem('currentDay')) || 1
};

function getCurrentUnit() {
  return Math.ceil(userProgress.currentDay / daysPerUnit);
}

function getDayRange(unit) {
  const start = (unit - 1) * daysPerUnit + 1;
  const end = unit * daysPerUnit;
  return { start, end };
}

function renderDayBatch() {
  const dayGrid = document.querySelector('.day-grid');
  const unitTitle = document.querySelector('.day-section h3');

  if(!dayGrid) {
    console.log('Guru, day-grid div nahi mila HTML me');
    return;
  }

  const unit = getCurrentUnit();
  const { start, end } = getDayRange(unit);

  if(unitTitle) {
    unitTitle.textContent = `UNIT ${unit}: BASICS - ${start}-${end} DAYS`;
  }

  dayGrid.innerHTML = '';

  for(let day = start; day <= end; day++) {
    const circle = document.createElement('div');
    circle.className = 'day-circle';
    circle.dataset.day = day;

    if(userProgress.completedDays.includes(day)) {
      circle.classList.add('completed');
      circle.innerHTML = `${day}<span class="tick-icon">✓</span>`;
    }
    else if(day === userProgress.currentDay) {
      circle.classList.add('current');
      circle.innerHTML = `${day}<span class="start-text">Start</span>`;
    }
    else if(day > userProgress.currentDay) {
      circle.classList.add('locked');
      circle.innerHTML = `${day}<span class="lock-icon">🔒</span>`;
    }
    else {
      circle.innerHTML = `${day}`;
    }

    circle.onclick = () => selectDay(day - 1);
    dayGrid.appendChild(circle);
  }

  // Current day load karo
  let actualDayIndex = userProgress.currentDay - 1;
  if(actualDayIndex >= gameData.length) actualDayIndex = gameData.length - 1;
  currentDay = actualDayIndex;
  currentQuestion = 0;
  if(gameData[currentDay] && gameData[currentDay].questions) {
    loadQuestion(gameData[currentDay].questions[0]);
  }
}

// DOM ready hone ke baad chalao
document.addEventListener('DOMContentLoaded', renderDayBatch);

// startQuizList ko hata de - ab renderDayBatch use hoga
window.startQuizList = renderDayBatch; // Backup: agar kahin call ho raha ho
function selectDay(dayIndex) {
  // === Ye 3 line add kar - Maya section kholega ===
  const mayaSection = document.getElementById('maya-section');
  if (mayaSection) {
    mayaSection.style.cssText = 'display:block!important';
    mayaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  // === Yaha tak add kar ===
  
  let completedDays = parseInt(localStorage.getItem('completedDays')) || 0;
  if(dayIndex + 1 > completedDays + 1) return;
  if(dayIndex >= gameData.length) {
    alert('Ye day abhi available nahi hai!');
    return;
  }
  currentDay = dayIndex;
  currentQuestion = 0;
  loadQuestion(gameData[currentDay].questions[currentQuestion]);
}

function loadQuestion(qData) {
  if (!qData) return;
  currentQ = qData;

  // Progress line update - current day ke questions ka %
  const totalQ = gameData[currentDay].questions.length;
  const progress = ((currentQuestion) / totalQ) * 100;
  document.getElementById('progressFillMain').style.width = progress + '%';

  document.getElementById('progress-text').innerText = `Q ${currentQuestion + 1}/${totalQ}`;
  document.getElementById('hindi-text').innerText = qData.hindi || "";
  document.getElementById('english-ref').innerText = qData.english || qData.q || "";

  let words = qData.options || [];
  words = [...new Set(words)].sort(() => Math.random() - 0.5);

  document.getElementById('word-bank').innerHTML = words.map(w =>
    `<button class="word-btn" onclick="addWord('${w}', this)">${w}</button>`
  ).join('');

  document.getElementById('answer-box').innerHTML = '';
  selectedWords = [];
  document.getElementById('feedback').style.display = 'none';
  document.getElementById('check-btn').style.display = 'block';
  document.getElementById('next-btn').style.display = 'none';
}

function addWord(word, btn) {
  selectedWords = [word]; // Sirf 1 word select hoga
  updateAnswerBox();
  // Sab button hide karke sirf selected dikhana
  document.querySelectorAll('.word-btn').forEach(b => {
    if(b.innerText === word) b.style.display = 'none';
    else b.style.display = 'inline-block';
  });
}

function removeWord(word, index) {
  selectedWords = [];
  updateAnswerBox();
  document.querySelectorAll('.word-btn').forEach(b => {
    b.style.display = 'inline-block';
  });
}

function updateAnswerBox() {
  const answerBox = document.getElementById('answer-box');
  answerBox.innerHTML = selectedWords.map((w, i) =>
    `<span class="selected-word" onclick="removeWord('${w}', ${i})">${w}</span>`
  ).join(' ');
}

function checkAnswer() {
  if (!currentQ) return;
  const correctAnswer = currentQ.answer.trim().toLowerCase();
  const userAnswer = selectedWords.join(' ').trim().toLowerCase();
  const feedback = document.getElementById('feedback');

  if (userAnswer === correctAnswer) {
    feedback.innerText = "Sahi jawab! 🎉";
    feedback.className = "feedback";
    feedback.style.display = 'block';
    document.getElementById('check-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';

    // XP badhao
    let xp = document.getElementById('xp');
    xp.innerText = parseInt(xp.innerText) + 10;
    localStorage.setItem('xp', xp.innerText);
  } else {
    feedback.innerText = "Galat hai, dobara try karo";
    feedback.className = "feedback wrong";
    feedback.style.display = 'block';
  }
}

function nextQuestion() {
  currentQuestion++;

  // Progress line update
  const totalQ = gameData[currentDay].questions.length;
  const progress = ((currentQuestion) / totalQ) * 100;
  document.getElementById('progressFillMain').style.width = progress + '%';

  if (currentQuestion >= gameData[currentDay].questions.length) {
    // Day complete
    let completedDays = parseInt(localStorage.getItem('completedDays')) || 0;
    completedDays = Math.max(completedDays, currentDay + 1);
    localStorage.setItem('completedDays', completedDays);

    // Next day pe jao ya grid refresh karo
    startQuizList();
    return;
  }

  loadQuestion(gameData[currentDay].questions[currentQuestion]);
}

function playAudio() {
  const text = document.getElementById('hindi-text').innerText;
  if (!text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'hi-IN';
  speechSynthesis.speak(utterance);
}

function toggleTheme() {
  document.body.classList.toggle('light-mode');
}
function addHeart() {
  let hearts = document.getElementById('hearts');
  hearts.innerText = parseInt(hearts.innerText) + 1;
}
function openChat() { alert('Chat feature coming soon'); }
function startPracticeMode() { alert('Practice mode coming soon'); }

// Start karo
window.onload = function() {
  document.getElementById('xp').innerText = localStorage.getItem('xp') || '260';
  document.getElementById('streak').innerText = localStorage.getItem('streak') || '11';
  document.getElementById('hearts').innerText = localStorage.getItem('hearts') || '1';
  startQuizList();
}
// Day button click - Sirf Maya Quiz kholega, checkAnswer ko haath nahi lagayega
document.addEventListener('DOMContentLoaded', function() {
  const dayButtons = document.querySelectorAll('.day-grid button');
  
  dayButtons.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      const dayNumber = index + 1;
      
      // Maya Quiz section dhundho
      const mayaSection = document.querySelector('.quiz-card');
      
      if (mayaSection) {
        // Sirf show karo, content mat badlo
        mayaSection.style.display = 'block';
        mayaSection.scrollIntoView({ behavior: 'smooth' });
        
        // Agar tera function hai to Day load kar
        if (typeof loadLesson === 'function') {
          loadLesson(dayNumber);
        }
        if (typeof startDay === 'function') {
          startDay(dayNumber);
        }
        
        console.log('Day', dayNumber, 'khul gaya');
      } else {
        alert('Maya Quiz section nahi mila! class="quiz-card" check karo');
      }
    });
  });
});
