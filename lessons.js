const lessons = [
  {
    title: "Present Tense",
    day: 1,
    questions: [
      { q: "I ___ to school daily.", options: ["go", "goes", "going"], answer: "go", hindi: "Main roz school jata hoon" },
      { q: "She ___ a book.", options: ["read", "reads", "reading"], answer: "reads", hindi: "Woh ek kitab padhti hai" },
      { q: "They ___ football.", options: ["play", "plays", "playing"], answer: "play", hindi: "Woh log football khelte hain" },
      { q: "We ___ water every morning.", options: ["drink", "drinks", "drinking"], answer: "drink", hindi: "Hum roz subah paani peete hain" },
      { q: "He ___ to music.", options: ["listen", "listens", "listening"], answer: "listens", hindi: "Woh geet sunta hai" },
      { q: "You ___ very well.", options: ["sing", "sings", "singing"], answer: "sing", hindi: "Tum bahut accha gate ho" },
      { q: "The sun ___ in the east.", options: ["rise", "rises", "rising"], answer: "rises", hindi: "Suraj purab me ugta hai" },
      { q: "Cats ___ milk.", options: ["like", "likes", "liking"], answer: "like", hindi: "Billiyan doodh pasand karti hain" }
    ]
  },
  {
    title: "Past Tense",
    day: 2,
    questions: [
      { q: "I ___ to school yesterday.", options: ["go", "went", "gone"], answer: "went", hindi: "Main kal school gaya tha" },
      { q: "He ___ a movie last night.", options: ["watch", "watched", "watching"], answer: "watched", hindi: "Usne kal raat film dekhi" },
      { q: "They ___ football last Sunday.", options: ["play", "played", "playing"], answer: "played", hindi: "Woh log pichle Sunday football khele" },
      { q: "She ___ her homework yesterday.", options: ["do", "did", "done"], answer: "did", hindi: "Usne kal apna homework kiya" },
      { q: "We ___ to the market last week.", options: ["go", "went", "gone"], answer: "went", hindi: "Hum pichle hafte bazaar gaye the" },
      { q: "You ___ very fast yesterday.", options: ["run", "ran", "running"], answer: "ran", hindi: "Tum kal bahut tez doude" },
      { q: "I ___ a letter last month.", options: ["write", "wrote", "written"], answer: "wrote", hindi: "Maine pichle mahine ek chitthi likhi" },
      { q: "The baby ___ loudly at night.", options: ["cry", "cried", "crying"], answer: "cried", hindi: "Baccha raat me zor se roya" }
    ]
  },
  {
    title: "Future Tense",
    day: 3,
    questions: [
      { q: "I ___ go to Delhi tomorrow.", options: ["will", "shall", "would"], answer: "will", hindi: "Main kal Delhi jaunga" },
      { q: "She ___ come next week.", options: ["will", "shall", "would"], answer: "will", hindi: "Woh agle hafte aayegi" },
      { q: "They ___ play tomorrow.", options: ["will", "would", "shall"], answer: "will", hindi: "Woh log kal khelenge" },
      { q: "We ___ meet you soon.", options: ["will", "would", "shall"], answer: "will", hindi: "Hum jald hi tumse milenge" },
      { q: "He ___ call you later.", options: ["will", "shall", "would"], answer: "will", hindi: "Woh tumhe baad me call karega" },
      { q: "You ___ be happy.", options: ["will", "would", "shall"], answer: "will", hindi: "Tum khush rahoge" },
      { q: "I ___ finish this work.", options: ["will", "shall", "would"], answer: "will", hindi: "Main ye kaam khatam karunga" },
      { q: "The train ___ arrive on time.", options: ["will", "would", "shall"], answer: "will", hindi: "Train samay par aayegi" }
    ]
  },
  {
    title: "Nouns & Pronouns",
    day: 4,
    questions: [
      { q: "___ is my friend.", options: ["He", "Him", "His"], answer: "He", hindi: "Woh mera dost hai" },
      { q: "This is ___ book.", options: ["my", "me", "mine"], answer: "my", hindi: "Ye meri kitab hai" },
      { q: "___ are playing.", options: ["They", "Them", "Their"], answer: "They", hindi: "Woh log khel rahe hain" },
      { q: "Give it to ___.", options: ["I", "me", "my"], answer: "me", hindi: "Ye mujhe do" },
      { q: "___ is a teacher.", options: ["She", "Her", "Hers"], answer: "She", hindi: "Woh ek teacher hai" },
      { q: "I saw ___ yesterday.", options: ["he", "him", "his"], answer: "him", hindi: "Maine use kal dekha" },
      { q: "___ house is big.", options: ["Our", "Us", "We"], answer: "Our", hindi: "Hamara ghar bada hai" },
      { q: "This pen is ___.", options: ["mine", "me", "my"], answer: "mine", hindi: "Ye pen mera hai" }
    ]
  },
  {
    title: "Verbs",
    day: 5,
    questions: [
      { q: "I ___ eating.", options: ["am", "is", "are"], answer: "am", hindi: "Main kha raha hoon" },
      { q: "They ___ playing.", options: ["are", "is", "am"], answer: "are", hindi: "Woh log khel rahe hain" },
      { q: "She ___ singing.", options: ["is", "are", "am"], answer: "is", hindi: "Woh ga rahi hai" },
      { q: "We ___ going to school.", options: ["are", "is", "am"], answer: "are", hindi: "Hum school ja rahe hain" },
      { q: "He ___ reading a book.", options: ["is", "are", "am"], answer: "is", hindi: "Woh kitab padh raha hai" },
      { q: "You ___ studying now.", options: ["are", "is", "am"], answer: "are", hindi: "Tum abhi padh rahe ho" },
      { q: "The dog ___ barking.", options: ["is", "are", "am"], answer: "is", hindi: "Kutta bhonk raha hai" },
      { q: "I ___ writing a letter.", options: ["am", "is", "are"], answer: "am", hindi: "Main chitthi likh raha hoon" }
    ]
  }
];

// Global variables
let selectedWords = [];
let currentQ = null;
let currentIndex = 0;
let currentLessonIndex = 0;

// Load lesson
function loadLesson(index) {
  currentLessonIndex = index;
  currentIndex = 0;
  currentQ = lessons[index].questions[0];
  loadQuestion();
}

// Load question
function loadQuestion() {
  if (!currentQ) return;

  const hindiEl = document.getElementById('hindi-text');
  const wordBank = document.getElementById('word-bank');
  const answerBox = document.getElementById('answer-box');
  const feedback = document.getElementById('feedback');
  const checkBtn = document.getElementById('check-btn');
  const nextBtn = document.getElementById('next-btn');

  if (!hindiEl ||!wordBank ||!answerBox ||!feedback) return;

  hindiEl.innerText = currentQ.hindi;
  wordBank.innerHTML = '';
  answerBox.innerHTML = '';
  feedback.style.display = 'none';
  selectedWords = [];

  const options = [...currentQ.options].sort(() => Math.random() - 0.5);
  options.forEach(word => {
    const btn = document.createElement('button');
    btn.innerText = word;
    btn.onclick = () => addWord(word, btn);
    wordBank.appendChild(btn);
  });

  if (checkBtn) checkBtn.style.display = 'inline-block';
  if (nextBtn) nextBtn.style.display = 'none';
}

// Add word to answer
function addWord(word, btn) {
  selectedWords.push(word);
  btn.style.display = 'none';
  updateAnswerBox();
}

// Remove word from answer
function removeWord(word, index) {
  selectedWords.splice(index, 1);
  updateAnswerBox();
  document.querySelectorAll('#word-bank button').forEach(b => {
    if (b.innerText === word && b.style.display === 'none') {
      b.style.display = 'inline-block';
    }
  });
}

// Update answer box
function updateAnswerBox() {
  const box = document.getElementById('answer-box');
  if (!box) return;
  box.innerHTML = '';
  selectedWords.forEach((word, i) => {
    const span = document.createElement('span');
    span.innerText = word;
    span.onclick = () => removeWord(word, i);
    box.appendChild(span);
  });
}

// Check answer
function checkAnswer() {
  if (!currentQ) return;
  const correctAnswer = (currentQ.answer || '').trim().toLowerCase();
  const userAnswer = selectedWords.join(' ').trim().toLowerCase();
  const feedback = document.getElementById('feedback');
  const checkBtn = document.getElementById('check-btn');
  const nextBtn = document.getElementById('next-btn');

  if (!feedback) return;

  if (userAnswer === correctAnswer) {
    feedback.innerText = "Sahi jawab! 🎉";
    feedback.className = "feedback correct";
    feedback.style.display = 'block';
    if (checkBtn) checkBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'inline-block';
  } else {
    feedback.innerText = "Galat hai, dobara try karo";
    feedback.className = "feedback wrong";
    feedback.style.display = 'block';
  }
}

// Next question
function nextQuestion() {
  currentIndex++;
  const questions = lessons[currentLessonIndex].questions;
  if (currentIndex < questions.length) {
    currentQ = questions[currentIndex];
    loadQuestion();
  } else {
    alert("Lesson complete! 🎉");
  }
}

// Play audio
function playAudio() {
  const text = document.getElementById('hindi-text').innerText;
  if (!text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'hi-IN';
  speechSynthesis.speak(utterance);
}

// Start quiz list
function startQuizList() {
  const container = document.getElementById('quiz-list');
  if (!container) return;

  container.innerHTML = '';
  lessons.forEach((lesson, index) => {
    const btn = document.createElement('button');
    btn.innerText = lesson.title;
    btn.onclick = () => loadLesson(index);
    container.appendChild(btn);
  });
}

// Auto start when page loads
document.addEventListener('DOMContentLoaded', startQuizList);
