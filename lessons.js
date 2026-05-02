const lessons = [
  {
    title: "Present Tense",
    day: 1,
    questions: [
      { q: "I ___ to school daily. (go/goes)", answer: "go", hindi: "Main roz school jata hoon" },
      { q: "She ___ a book. (read/reads)", answer: "reads", hindi: "Woh ek kitab padhti hai" },
      { q: "They ___ football. (play/plays)", answer: "play", hindi: "Woh log football khelte hain" },
      { q: "We ___ water every morning. (drink/drinks)", answer: "drink", hindi: "Hum roz subah paani peete hain" },
      { q: "He ___ to music. (listen/listens)", answer: "listens", hindi: "Woh geet sunta hai" },
      { q: "You ___ very well. (sing/sings)", answer: "sing", hindi: "Tum bahut accha gate ho" },
      { q: "The sun ___ in the east. (rise/rises)", answer: "rises", hindi: "Suraj purab me ugta hai" },
      { q: "Cats ___ milk. (like/likes)", answer: "like", hindi: "Billiyan doodh pasand karti hain" }
    ]
  },
  {
    title: "Past Tense",
    day: 2,
    questions: [
      { q: "I ___ to school yesterday. (go/went)", answer: "went", hindi: "Main kal school gaya tha" },
      { q: "He ___ a movie last night. (watch/watched)", answer: "watched", hindi: "Usne kal raat film dekhi" },
      { q: "They ___ football last Sunday. (play/played)", answer: "played", hindi: "Woh log pichle Sunday football khele" },
      { q: "She ___ her homework yesterday. (do/did)", answer: "did", hindi: "Usne kal apna homework kiya" },
      { q: "We ___ to the market last week. (go/went)", answer: "went", hindi: "Hum pichle hafte bazaar gaye the" },
      { q: "You ___ very fast yesterday. (run/ran)", answer: "ran", hindi: "Tum kal bahut tez doude" },
      { q: "I ___ a letter last month. (write/wrote)", answer: "wrote", hindi: "Maine pichle mahine ek chitthi likhi" },
      { q: "The baby ___ loudly at night. (cry/cried)", answer: "cried", hindi: "Baccha raat me zor se roya" }
    ]
  },
  {
    title: "Future Tense",
    day: 3,
    questions: [
      { q: "I ___ go to Delhi tomorrow. (will/shall)", answer: "will", hindi: "Main kal Delhi jaunga" },
      { q: "She ___ come next week. (will/shall)", answer: "will", hindi: "Woh agle hafte aayegi" },
      { q: "They ___ play tomorrow. (will/would)", answer: "will", hindi: "Woh log kal khelenge" },
      { q: "We ___ meet you soon. (will/would)", answer: "will", hindi: "Hum jald hi tumse milenge" },
      { q: "He ___ call you later. (will/shall)", answer: "will", hindi: "Woh tumhe baad me call karega" },
      { q: "You ___ be happy. (will/would)", answer: "will", hindi: "Tum khush rahoge" },
      { q: "I ___ finish this work. (will/shall)", answer: "will", hindi: "Main ye kaam khatam karunga" },
      { q: "The train ___ arrive on time. (will/would)", answer: "will", hindi: "Train samay par aayegi" }
    ]
  },
  {
    title: "Nouns & Pronouns",
    day: 4,
    questions: [
      { q: "___ is my friend. (He/Him)", answer: "He", hindi: "Woh mera dost hai" },
      { q: "This is ___ book. (my/me)", answer: "my", hindi: "Ye meri kitab hai" },
      { q: "___ are playing. (They/Them)", answer: "They", hindi: "Woh log khel rahe hain" },
      { q: "Give it to ___. (I/me)", answer: "me", hindi: "Ye mujhe do" },
      { q: "___ is a teacher. (She/Her)", answer: "She", hindi: "Woh ek teacher hai" },
      { q: "I saw ___ yesterday. (he/him)", answer: "him", hindi: "Maine use kal dekha" },
      { q: "___ house is big. (Our/Us)", answer: "Our", hindi: "Hamara ghar bada hai" },
      { q: "This pen is ___. (mine/me)", answer: "mine", hindi: "Ye pen mera hai" }
    ]
  },
  {
    title: "Verbs",
    day: 5,
    questions: [
      { q: "I ___ eating. (am/is)", answer: "am", hindi: "Main kha raha hoon" },
      { q: "They ___ playing. (are/is)", answer: "are", hindi: "Woh log khel rahe hain" },
      { q: "She ___ singing. (is/are)", answer: "is", hindi: "Woh ga rahi hai" },
      { q: "We ___ going to school. (are/is)", answer: "are", hindi: "Hum school ja rahe hain" },
      { q: "He ___ reading a book. (is/are)", answer: "is", hindi: "Woh kitab padh raha hai" },
      { q: "You ___ studying now. (are/is)", answer: "are", hindi: "Tum abhi padh rahe ho" },
      { q: "The dog ___ barking. (is/are)", answer: "is", hindi: "Kutta bhonk raha hai" },
      { q: "I ___ writing a letter. (am/is)", answer: "am", hindi: "Main chitthi likh raha hoon" }
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
