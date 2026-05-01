const lessons = [
  {
    title: "Present Tense",
    day: 1,
    questions: [
      { q: "I ___ to school daily. (go/goes)", answer: "go" },
      { q: "She ___ a book. (read/reads)", answer: "reads" },
      { q: "They ___ football. (play/plays)", answer: "play" }
    ]
  },
  {
    title: "Past Tense",
    day: 2,
    questions: [
      { q: "I ___ to school yesterday. (go/went)", answer: "went" },
      { q: "He ___ a movie last night. (watch/watched)", answer: "watched" }
    ]
  },
  {
    title: "Future Tense",
    day: 3,
    questions: [
      { q: "I ___ go to Delhi tomorrow. (will/shall)", answer: "will" },
      { q: "She ___ come next week. (will/shall)", answer: "will" }
    ]
  },
  {
    title: "Nouns & Pronouns",
    day: 4,
    questions: [
      { q: "___ is my friend. (He/Him)", answer: "He" },
      { q: "This is ___ book. (my/me)", answer: "my" }
    ]
  },
  {
    title: "Verbs",
    day: 5,
    questions: [
      { q: "I ___ eating. (am/is)", answer: "am" },
      { q: "They ___ playing. (are/is)", answer: "are" }
    ]
  },
  {
    title: "Adjectives",
    day: 6,
    questions: [
      { q: "She is a ___ girl. (beautiful/beauty)", answer: "beautiful" },
      { q: "This is a ___ car. (fast/fastly)", answer: "fast" }
    ]
  },
  {
    title: "Prepositions",
    day: 7,
    questions: [
      { q: "She is ___ the park. (in/at)", answer: "in" },
      { q: "The book is ___ the table. (on/in)", answer: "on" }
    ]
  },
  {
    title: "Articles",
    day: 8,
    questions: [
      { q: "___ sun rises in the east. (A/The)", answer: "The" },
      { q: "I want ___ apple. (a/an)", answer: "an" }
    ]
  },
  {
    title: "Conjunctions",
    day: 9,
    questions: [
      { q: "I like tea ___ coffee. (and/or)", answer: "and" },
      { q: "He is poor ___ happy. (but/and)", answer: "but" }
    ]
  },
  {
    title: "Question Words",
    day: 10,
    questions: [
      { q: "___ is your name? (What/Where)", answer: "What" },
      { q: "___ are you going? (Where/When)", answer: "Where" }
    ]
  }
];

// ====== Niche ye code jod do, upar kuch mat hatana ======

let gameData = [];
let currentIndex = 0;
let selectedAnswer = '';
let score = 0;

function startQuizList() {
  gameData = lessons[0].questions; // Day 1 load hoga
  currentIndex = 0;
  score = 0;
  document.getElementById('question-section').style.display = 'block';
  loadQuestion();
}

function loadQuestion() {
  if (currentIndex >= gameData.length) {
    document.getElementById('result').innerText = `Quiz khatam! Score: ${score}/${gameData.length}`;
    document.getElementById('question-text').value = '';
    document.getElementById('options').innerHTML = '';
    return;
  }

  let q = gameData[currentIndex];
  document.getElementById('question-text').value = q.q;

  let correct = q.answer;
  let wrong = getWrongOption(correct);

  let optionsArray = [correct, wrong].sort(() => Math.random() - 0.5);

  let optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  selectedAnswer = '';

  optionsArray.forEach(opt => {
    let btn = document.createElement('button');
    btn.innerText = opt;
    btn.className = 'option';

    btn.onclick = function() {
      document.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedAnswer = opt;
    };

    optionsDiv.appendChild(btn);
  });

  document.getElementById('result').innerText = '';
}

function getWrongOption(correct) {
  let pairs = {
    "go": "goes", "goes": "go",
    "read": "reads", "reads": "read",
    "play": "plays", "plays": "play",
    "went": "go", "go": "went",
    "watch": "watched", "watched": "watch",
    "will": "shall", "shall": "will",
    "He": "Him", "Him": "He",
    "my": "me", "me": "my",
    "am": "is", "is": "am",
    "are": "is", "is": "are",
    "beautiful": "beauty", "beauty": "beautiful",
    "fast": "fastly", "fastly": "fast",
    "in": "at", "at": "in",
    "on": "in", "in": "on",
    "The": "A", "A": "The",
    "an": "a", "a": "an",
    "and": "or", "or": "and",
    "but": "and", "and": "but",
    "What": "Where", "Where": "What"
  };
  return pairs[correct] || "option";
}

function checkAnswer() {
  if (!selectedAnswer) {
    alert('Pehle option select karo');
    return;
  }

  let correct = gameData[currentIndex].answer;

  if (selectedAnswer === correct) {
    score++;
    document.getElementById('result').innerText = 'Sahi! ✅';
    document.getElementById('result').style.color = 'green';
  } else {
    document.getElementById('result').innerText = `Galat! Sahi answer: ${correct}`;
    document.getElementById('result').style.color = 'red';
  }

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 1500);
}
