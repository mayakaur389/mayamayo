const lessons = [
  { title: "Present Tense", day: 1, questions: [
    { q: "I _ to school daily.", options: ["go", "goes", "going"], answer: "go", hindi: "मैं रोज स्कूल जाता हूँ", english: "I _ to school daily." },
    { q: "She _ a book.", options: ["read", "reads", "reading"], answer: "reads", hindi: "वह एक किताब पढ़ती है", english: "She _ a book." },
    { q: "They _ football.", options: ["play", "plays", "playing"], answer: "play", hindi: "वे फुटबॉल खेलते हैं", english: "They _ football." },
    { q: "We _ water every morning.", options: ["drink", "drinks", "drinking"], answer: "drink", hindi: "हम हर सुबह पानी पीते हैं", english: "We _ water every morning." },
    { q: "He _ to the store.", options: ["go", "goes", "going"], answer: "goes", hindi: "वह दुकान पर जाता है", english: "He _ to the store." },
    { q: "The cat _ milk.", options: ["drink", "drinks", "drinking"], answer: "drinks", hindi: "बिल्ली दूध पीती है", english: "The cat _ milk." },
    { q: "I _ my homework.", options: ["do", "does", "doing"], answer: "do", hindi: "मैं अपना होमवर्क करता हूँ", english: "I _ my homework." },
    { q: "You _ very fast.", options: ["run", "runs", "running"], answer: "run", hindi: "तुम बहुत तेज दौड़ते हो", english: "You _ very fast." }
  ]},
  { title: "Past Tense", day: 2, questions: [
    { q: "I _ to school yesterday.", options: ["go", "went", "gone"], answer: "went", hindi: "मैं कल स्कूल गया था", english: "I _ to school yesterday." },
    { q: "He _ a movie last night.", options: ["watch", "watched", "watching"], answer: "watched", hindi: "उसने कल रात फिल्म देखी", english: "He _ a movie last night." },
    { q: "She _ her homework.", options: ["did", "do", "done"], answer: "did", hindi: "वहने अपना होमवर्क किया", english: "She _ her homework." },
    { q: "They _ to the park.", options: ["go", "went", "going"], answer: "went", hindi: "वे पार्क गए थे", english: "They _ to the park." },
    { q: "We _ dinner at 8 PM.", options: ["eat", "ate", "eating"], answer: "ate", hindi: "हमने रात 8 बजे खाना खाया", english: "We _ dinner at 8 PM." },
    { q: "He _ his keys.", options: ["lose", "lost", "losing"], answer: "lost", hindi: "उसने अपनी चाबियाँ खो दीं", english: "He _ his keys." },
    { q: "I _ a book yesterday.", options: ["read", "reads", "reading"], answer: "read", hindi: "मैंने कल एक किताब पढ़ी", english: "I _ a book yesterday." },
    { q: "They _ to music.", options: ["listen", "listened", "listening"], answer: "listened", hindi: "वे संगीत सुन रहे थे", english: "They _ to music." }
  ]},
  { title: "Future Tense", day: 3, questions: [
    { q: "I _ go to Delhi tomorrow.", options: ["will", "shall", "would"], answer: "will", hindi: "मैं कल दिल्ली जाऊँगा", english: "I _ go to Delhi tomorrow." },
    { q: "She _ a doctor.", options: ["is", "will be", "was"], answer: "will be", hindi: "वह एक डॉक्टर बनेगी", english: "She _ a doctor." },
    { q: "They _ to the party.", options: ["come", "will come", "came"], answer: "will come", hindi: "वे पार्टी आएंगे", english: "They _ to the party." },
    { q: "He _ his exam.", options: ["pass", "will pass", "passed"], answer: "will pass", hindi: "वह अपनी परीक्षा पास करेगा", english: "He _ his exam." },
    { q: "We _ to the beach.", options: ["go", "will go", "went"], answer: "will go", hindi: "हम समुद्र तट जाएंगे", english: "We _ to the beach." },
    { q: "I _ my homework tomorrow.", options: ["do", "will do", "did"], answer: "will do", hindi: "मैं कल अपना होमवर्क करूँगा", english: "I _ my homework tomorrow." },
    { q: "She _ a song.", options: ["sing", "will sing", "sang"], answer: "will sing", hindi: "वह एक गाना गाएगी", english: "She _ a song." },
    { q: "They _ the project.", options: ["complete", "will complete", "completed"], answer: "will complete", hindi: "वे प्रोजेक्ट पूरा करेंगे", english: "They _ the project." }
  ]},
  { title: "Nouns & Pronouns", day: 4, questions: [
    { q: "_ is my friend.", options: ["He", "Him", "His"], answer: "He", hindi: "वह मेरा मित्र है", english: "_ is my friend." },
    { q: "This is _ book.", options: ["my", "mine", "me"], answer: "my", hindi: "यह मेरी किताब है", english: "This is _ book." },
    { q: "She gave _ a gift.", options: ["I", "me", "my"], answer: "me", hindi: "उसने मुझे एक उपहार दिया", english: "She gave _ a gift." },
    { q: "_ are going to the store.", options: ["They", "Them", "Their"], answer: "They", hindi: "वे दुकान जा रहे हैं", english: "_ are going to the store." },
    { q: "The dog is _.", options: ["my", "mine", "me"], answer: "mine", hindi: "यह कुत्ता मेरा है", english: "The dog is _." },
    { q: "_ is a good teacher.", options: ["She", "Her", "Hers"], answer: "She", hindi: "वह एक अच्छी शिक्षक है", english: "_ is a good teacher." },
    { q: "I like _ shirt.", options: ["your", "you", "yours"], answer: "your", hindi: "मुझे तुम्हारी शर्ट पसंद है", english: "I like _ shirt." },
    { q: "_ are my friends.", options: ["They", "Them", "Their"], answer: "They", hindi: "वे मेरे दोस्त हैं", english: "_ are my friends." }
  ]},
  { title: "Verbs", day: 5, questions: [
    { q: "I _ eating.", options: ["am", "is", "are"], answer: "am", hindi: "मैं खा रहा हूँ", english: "I _ eating." },
    { q: "She _ a doctor.", options: ["is", "am", "are"], answer: "is", hindi: "वह एक डॉक्टर है", english: "She _ a doctor." },
    { q: "They _ playing.", options: ["is", "am", "are"], answer: "are", hindi: "वे खेल रहे हैं", english: "They _ playing." },
    { q: "He _ running.", options: ["is", "am", "are"], answer: "is", hindi: "वह दौड़ रहा है", english: "He _ running." },
    { q: "We _ going.", options: ["is", "am", "are"], answer: "are", hindi: "हम जा रहे हैं", english: "We _ going." },
    { q: "I _ happy.", options: ["is", "am", "are"], answer: "am", hindi: "मैं खुश हूँ", english: "I _ happy." },
    { q: "You _ my friend.", options: ["is", "am", "are"], answer: "are", hindi: "तुम मेरे दोस्त हो", english: "You _ my friend." },
    { q: "She _ singing.", options: ["is", "am", "are"], answer: "is", hindi: "वह गा रही है", english: "She _ singing." }
  ]}
]

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
