const lessons = [
  { title: "Present Tense", day: 1, questions: [ { q: "I _ to school daily.", options: ["go", "goes", "going"], answer: "go", hindi: "Main roz school jata hoon" }, { q: "She _ a book.", options: ["read", "reads", "reading"], answer: "reads", hindi: "Woh ek kitab padhti hai" }, { q: "They _ football.", options: ["play", "plays", "playing"], answer: "play", hindi: "Woh log football khelte hain" }, { q: "We _ water every morning.", options: ["drink", "drinks", "drinking"], answer: "drink", hindi: "Hum roz subah paani peete hain" }, { q: "He _ to music.", options: ["listen", "listens", "listening"], answer: "listens", hindi: "Woh geet sunta hai" }, { q: "You _ very well.", options: ["sing", "sings", "singing"], answer: "sing", hindi: "Tum bahut accha gate ho" }, { q: "The sun _ in the east.", options: ["rise", "rises", "rising"], answer: "rises", hindi: "Suraj purab me ugta hai" }, { q: "Cats _ milk.", options: ["like", "likes", "liking"], answer: "like", hindi: "Billiyan doodh pasand karti hain" } ] }, 
  { title: "Past Tense", day: 2, questions: [ { q: "I _ to school yesterday.", options: ["go", "went", "gone"], answer: "went", hindi: "Main kal school gaya tha" }, { q: "He _ a movie last night.", options: ["watch", "watched", "watching"], answer: "watched", hindi: "Usne kal raat film dekhi" }, { q: "They _ football last Sunday.", options: ["play", "played", "playing"], answer: "played", hindi: "Woh log pichle Sunday football khele" }, { q: "She _ her homework yesterday.", options: ["do", "did", "done"], answer: "did", hindi: "Usne kal apna homework kiya" }, { q: "We _ to the market last week.", options: ["go", "went", "gone"], answer: "went", hindi: "Hum pichle hafte bazaar gaye the" }, { q: "You _ very fast yesterday.", options: ["run", "ran", "running"], answer: "ran", hindi: "Tum kal bahut tez doude" }, { q: "I _ a letter last month.", options: ["write", "wrote", "written"], answer: "wrote", hindi: "Maine pichle mahine ek chitthi likhi" }, { q: "The baby _ loudly at night.", options: ["cry", "cried", "crying"], answer: "cried", hindi: "Baccha raat me zor se roya" } ] }, 
  { title: "Future Tense", day: 3, questions: [ { q: "I _ go to Delhi tomorrow.", options: ["will", "shall", "would"], answer: "will", hindi: "Main kal Delhi jaunga" }, { q: "She _ come next week.", options: ["will", "shall", "would"], answer: "will", hindi: "Woh agle hafte aayegi" }, { q: "They _ play tomorrow.", options: ["will", "would", "shall"], answer: "will", hindi: "Woh log kal khelenge" }, { q: "We _ meet you soon.", options: ["will", "would", "shall"], answer: "will", hindi: "Hum jald hi tumse milenge" }, { q: "He _ call you later.", options: ["will", "shall", "would"], answer: "will", hindi: "Woh tumhe baad me call karega" }, { q: "You _ be happy.", options: ["will", "would", "shall"], answer: "will", hindi: "Tum khush rahoge" }, { q: "I _ finish this work.", options: ["will", "shall", "would"], answer: "will", hindi: "Main ye kaam khatam karunga" }, { q: "The train _ arrive on time.", options: ["will", "would", "shall"], answer: "will", hindi: "Train samay par aayegi" } ] }, 
  { title: "Nouns & Pronouns", day: 4, questions: [ { q: "_ is my friend.", options: ["He", "Him", "His"], answer: "He", hindi: "Woh mera dost hai" }, { q: "This is _ book.", options: ["my", "me", "mine"], answer: "my", hindi: "Ye meri kitab hai" }, { q: "_ are playing.", options: ["They", "Them", "Their"], answer: "They", hindi: "Woh log khel rahe hain" }, { q: "Give it to _.", options: ["I", "me", "my"], answer: "me", hindi: "Ye mujhe do" }, { q: "_ is a teacher.", options: ["She", "Her", "Hers"], answer: "She", hindi: "Woh ek teacher hai" }, { q: "I saw _ yesterday.", options: ["he", "him", "his"], answer: "him", hindi: "Maine use kal dekha" }, { q: "_ house is big.", options: ["Our", "Us", "We"], answer: "Our", hindi: "Hamara ghar bada hai" }, { q: "This pen is _.", options: ["mine", "me", "my"], answer: "mine", hindi: "Ye pen mera hai" } ] }, 
  { title: "Verbs", day: 5, questions: [ { q: "I _ eating.", options: ["am", "is", "are"], answer: "am", hindi: "Main kha raha hoon" }, { q: "They _ playing.", options: ["are", "is", "am"], answer: "are", hindi: "Woh log khel rahe hain" }, { q: "She _ singing.", options: ["is", "are", "am"], answer: "is", hindi: "Woh ga rahi hai" }, { q: "We _ going to school.", options: ["are", "is", "am"], answer: "are", hindi: "Hum school ja rahe hain" }, { q: "He _ reading a book.", options: ["is", "are", "am"], answer: "is", hindi: "Woh kitab padh raha hai" }, { q: "You _ studying now.", options: ["are", "is", "am"], answer: "are", hindi: "Tum abhi padh rahe ho" }, { q: "The dog _ barking.", options: ["is", "are", "am"], answer: "is", hindi: "Kutta bhonk raha hai" }, { q: "I _ writing a letter.", options: ["am", "is", "are"], answer: "am", hindi: "Main chitthi likh raha hoon" } ] }
];

// Global variables
let selectedWords = [];
let currentQ = null;
let currentLessonIndex = 0;
let currentQuestionIndex = 0;

// Start quiz list
function startQuizList() {
  const container = document.getElementById('quiz-list');
  if (!container) return;
  container.innerHTML = '';
  lessons.forEach((lesson, index) => {
    const btn = document.createElement('button');
    btn.innerText = lesson.title;
    btn.className = 'day-btn';
    btn.onclick = () => {
      currentLessonIndex = index;
      currentQuestionIndex = 0;
      loadQuestion(lesson.questions[0]);
     document.getElementById('check-btn').onclick = () => {
  if (selectedWords.length === 0) {
    alert("Pehle option select karo!");
    return;
  }
  checkAnswer(selectedWords.join(' '), currentQ.answer);
};

document.getElementById('next-btn').onclick = () => {
  nextQuestion();
};
function addWord(word, btn) {
  selectedWords.push(word);
  btn.style.display = 'none';
  updateAnswerBox();
}

// Remove word
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

function loadQuestion(qData) {
  currentQ = qData;
  if (!qData) return;

  document.getElementById('question').innerText = qData.q;
  document.getElementById('hindi-text').innerText = qData.hindi;

  const wordBank = document.getElementById('word-bank');
  const answerBox = document.getElementById('answer-box');
  document.getElementById('feedback').style.display = 'none';
  wordBank.innerHTML = '';
  answerBox.innerHTML = '';
  selectedWords = [];

  const options = [...qData.options].sort(() => Math.random() - 0.5);
  options.forEach(word => {
    const btn = document.createElement('button');
    btn.innerText = word;
    btn.onclick = () => addWord(word, btn);
    wordBank.appendChild(btn);
  });

  document.getElementById('check-btn').style.display = 'inline-block';
  document.getElementById('next-btn').style.display = 'none';

  // Check button ka onclick
  document.getElementById('check-btn').onclick = () => {
    if (selectedWords.length === 0) {
      alert("Pehle option select karo guru!");
      return;
    }
    checkAnswer(selectedWords.join(' '), currentQ.answer);
  };
}

function checkAnswer() {
  if (selectedWords.length === 0) {
    alert("Pehle option select karo!");
    return;
  }

  const userAnswer = selectedWords.join(' ');
  const feedback = document.getElementById('feedback');

  if (userAnswer.trim().toLowerCase() === currentQ.answer.trim().toLowerCase()) {
    feedback.innerText = "Sahi jawab! 🎉";
    feedback.className = "feedback correct";
  } else {
    feedback.innerText = "Galat hai! Sahi: " + currentQ.answer;
    feedback.className = "feedback wrong";
  }

  feedback.style.display = 'block';
  document.getElementById('check-btn').style.display = 'none';
  document.getElementById('next-btn').style.display = 'inline-block';

  // Word bank ke buttons disable karo
  document.querySelectorAll('#word-bank button').forEach(btn => {
    btn.disabled = true;
    if (btn.innerText.toLowerCase() === currentQ.answer.toLowerCase()) {
      btn.style.background = '#4caf50';
      btn.style.color = 'white';
    } else if (selectedWords.includes(btn.innerText) && btn.innerText !== currentQ.answer) {
      btn.style.background = '#f44336';
      btn.style.color = 'white';
    }
  });
}
function nextQuestion() {
  if (currentQuestionIndex < lessons[currentLessonIndex].questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion(lessons[currentLessonIndex].questions[currentQuestionIndex]);
  } else {
    alert("Lesson khatam!");
  }
}

// Play audio
function playAudio() {
  const text = document.getElementById('hindi-text').innerText;
  if (!text) return;
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

// Page load hote hi quiz list show karo
startQuizList();
