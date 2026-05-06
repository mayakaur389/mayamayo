const lessons = [
  {
    title: "Present Tense",
    day: 1,
    questions: [
      {q: "I ___ to school daily.", options: ["go", "goes", "going"], answer: "go", hindi: "Main roz school jata hoon"},
      {q: "She ___ a book.", options: ["read", "reads", "reading"], answer: "reads", hindi: "Woh ek kitab padhti hai"},
      {q: "They ___ football.", options: ["play", "plays", "playing"], answer: "play", hindi: "Woh log football khelte hain"},
      {q: "We ___ water every morning.", options: ["drink", "drinks", "drinking"], answer: "drink", hindi: "Hum roz subah paani peete hain"},
      {q: "He ___ to music.", options: ["listen", "listens", "listening"], answer: "listens", hindi: "Woh geet sunta hai"},
      {q: "You ___ very well.", options: ["sing", "sings", "singing"], answer: "sing", hindi: "Tum bahut accha gate ho"},
      {q: "The sun ___ in the east.", options: ["rise", "rises", "rising"], answer: "rises", hindi: "Suraj purab me ugta hai"},
      {q: "Cats ___ milk.", options: ["like", "likes", "liking"], answer: "like", hindi: "Billiyan doodh pasand karti hain"}
    ]
  },
  {
    title: "Past Tense",
    day: 2,
    questions: [
      {q: "I ___ to school yesterday.", options: ["go", "went", "gone"], answer: "went", hindi: "Main kal school gaya tha"},
      {q: "He ___ a movie last night.", options: ["watch", "watched", "watching"], answer: "watched", hindi: "Usne kal raat film dekhi"},
      {q: "They ___ football last Sunday.", options: ["play", "played", "playing"], answer: "played", hindi: "Woh log pichle Sunday football khele"},
      {q: "She ___ her homework yesterday.", options: ["do", "did", "done"], answer: "did", hindi: "Usne kal apna homework kiya"},
      {q: "We ___ to the market last week.", options: ["go", "went", "gone"], answer: "went", hindi: "Hum pichle hafte bazaar gaye the"},
      {q: "You ___ very fast yesterday.", options: ["run", "ran", "running"], answer: "ran", hindi: "Tum kal bahut tez doude"},
      {q: "I ___ a letter last month.", options: ["write", "wrote", "written"], answer: "wrote", hindi: "Maine pichle mahine ek chitthi likhi"},
      {q: "The baby ___ loudly at night.", options: ["cry", "cried", "crying"], answer: "cried", hindi: "Baccha raat me zor se roya"}
    ]
  },
  {
    title: "Future Tense",
    day: 3,
    questions: [
      {q: "I ___ go to Delhi tomorrow.", options: ["will", "shall", "would"], answer: "will", hindi: "Main kal Delhi jaunga"},
      {q: "She ___ a song tomorrow.", options: ["sing", "sings", "will sing"], answer: "will sing", hindi: "Woh kal ek gaana gayegi"},
      {q: "They ___ home next week.", options: ["come", "comes", "will come"], answer: "will come", hindi: "Woh log agle hafte ghar aayenge"}
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

  if (!hindiEl ||!wordBank ||!answerBox ||!feedback) return;

  hindiEl.innerText = currentQ.hindi;
  wordBank.innerHTML = '';
  answerBox.innerHTML = '';
  feedback.style.display = 'none';
  selectedWords = [];

  // Shuffle and display options
  const options = [...currentQ.options].sort(() => Math.random() - 0.5);
  options.forEach(word => {
    const btn = document.createElement('button');
    btn.innerText = word;
    btn.onclick = () => addWord(word, btn);
    wordBank.appendChild(btn);
  });

  document.getElementById('check-btn').style.display = 'inline-block';
  document.getElementById('next-btn').style.display = 'none';
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

  if (userAnswer === correctAnswer) {
    feedback.innerText = "Sahi jawab! 🎉";
    feedback.className = "feedback correct";
    feedback.style.display = 'block';
    document.getElementById('check-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'inline-block';
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
    alert("Lesson complete!");
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

// Auto start jab page load ho
document.addEventListener('DOMContentLoaded', startQuizList);
