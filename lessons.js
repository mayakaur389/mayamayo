const lessons = [
{
  title: "Present Tense",
  day: 1,
  questions: [
    { 
      q: "I ___ to school daily. (go/goes)", 
      answer: "go",
      hindi: "Main roz school jata hoon"
    },
    { 
      q: "She ___ a book. (read/reads)", 
      answer: "reads",
      hindi: "Woh ek kitab padhti hai"
    },
    { 
      q: "They ___ football. (play/plays)", 
      answer: "play",
      hindi: "Woh log football khelte hain"
    },
    { 
      q: "We ___ water every morning. (drink/drinks)", 
      answer: "drink",
      hindi: "Hum roz subah paani peete hain"
    },
    { 
      q: "He ___ to music. (listen/listens)", 
      answer: "listens",
      hindi: "Woh geet sunta hai"
    },
    { 
      q: "You ___ very well. (sing/sings)", 
      answer: "sing",
      hindi: "Tum bahut accha gate ho"
    },
    { 
      q: "The sun ___ in the east. (rise/rises)", 
      answer: "rises",
      hindi: "Suraj purab me ugta hai"
    },
    { 
      q: "Cats ___ milk. (like/likes)", 
      answer: "like",
      hindi: "Billiyan doodh pasand karti hain"
    }
  ]
}

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

  if (selectedAnswer.trim().toLowerCase() === correct.trim().toLowerCase()) {
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
