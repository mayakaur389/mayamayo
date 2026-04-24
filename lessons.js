// ===== MAYA DIDI LESSON SYSTEM =====
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
  }
};

let currentLesson = null;
let currentQuizIndex = 0;
let userScore = 0;

function startMayaLesson(lessonNum) {
  currentLesson = MAYA_LESSONS['lesson' + lessonNum];
  currentQuizIndex = 0;
  userScore = 0;
  document.getElementById('chat-messages').innerHTML = '';
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
