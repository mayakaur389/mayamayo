const lessons = [
  { 
    title: "Present Tense", 
    day: 1, 
    questions: [
      { q: "I _ to school daily.", options: ["go", "goes", "going"], answer: "go", hindi: "मैं रोज स्कूल जाता हूँ" },
      { q: "She _ a book.", options: ["read", "reads", "reading"], answer: "reads", hindi: "वह एक किताब पढ़ती है" },
      { q: "They _ football.", options: ["play", "plays", "playing"], answer: "play", hindi: "वे फुटबॉल खेलते हैं" },
      { q: "We _ water every morning.", options: ["drink", "drinks", "drinking"], answer: "drink", hindi: "हम हर सुबह पानी पीते हैं" },
      { q: "He _ to music.", options: ["listen", "listens", "listening"], answer: "listens", hindi: "वह संगीत सुनता है" },
      { q: "You _ very well.", options: ["sing", "sings", "singing"], answer: "sing", hindi: "तुम बहुत अच्छा गाते हो" },
      { q: "The sun _ in the east.", options: ["rise", "rises", "rising"], answer: "rises", hindi: "सूरज पूर्व में उगता है" },
      { q: "Cats _ milk.", options: ["like", "likes", "liking"], answer: "like", hindi: "बिल्लियाँ दूध पसंद करती हैं" }
    ] 
  },
  { 
    title: "Past Tense", 
    day: 2, 
    questions: [
      { q: "I _ to school yesterday.", options: ["go", "went", "gone"], answer: "went", hindi: "मैं कल स्कूल गया था" },
      { q: "He _ a movie last night.", options: ["watch", "watched", "watching"], answer: "watched", hindi: "उसने कल रात फिल्म देखी" },
      { q: "They _ football last Sunday.", options: ["play", "played", "playing"], answer: "played", hindi: "वे पिछले रविवार फुटबॉल खेले" },
      { q: "She _ her homework yesterday.", options: ["do", "did", "done"], answer: "did", hindi: "उसने कल अपना गृहकार्य किया" },
      { q: "We _ to the market last week.", options: ["go", "went", "gone"], answer: "went", hindi: "हम पिछले हफ्ते बाजार गए थे" },
      { q: "You _ very fast yesterday.", options: ["run", "ran", "running"], answer: "ran", hindi: "तुम कल बहुत तेज दौड़े" },
      { q: "I _ a letter last month.", options: ["write", "wrote", "written"], answer: "wrote", hindi: "मैंने पिछले महीने एक पत्र लिखा" },
      { q: "The baby _ loudly at night.", options: ["cry", "cried", "crying"], answer: "cried", hindi: "बच्चा रात में जोर से रोया" }
    ] 
  },
  { 
    title: "Future Tense", 
    day: 3, 
    questions: [
      { q: "I _ go to Delhi tomorrow.", options: ["will", "shall", "would"], answer: "will", hindi: "मैं कल दिल्ली जाऊँगा" },
      { q: "She _ come next week.", options: ["will", "shall", "would"], answer: "will", hindi: "वह अगले हफ्ते आएगी" },
      { q: "They _ play tomorrow.", options: ["will", "would", "shall"], answer: "will", hindi: "वे कल खेलेंगे" },
      { q: "We _ meet you soon.", options: ["will", "would", "shall"], answer: "will", hindi: "हम जल्द ही तुमसे मिलेंगे" },
      { q: "He _ call you later.", options: ["will", "shall", "would"], answer: "will", hindi: "वह तुम्हें बाद में फोन करेगा" },
      { q: "You _ be happy.", options: ["will", "would", "shall"], answer: "will", hindi: "तुम खुश रहोगे" },
      { q: "I _ finish this work.", options: ["will", "shall", "would"], answer: "will", hindi: "मैं यह काम समाप्त करूँगा" },
      { q: "The train _ arrive on time.", options: ["will", "would", "shall"], answer: "will", hindi: "ट्रेन समय पर आएगी" }
    ] 
  },
  { 
    title: "Nouns & Pronouns", 
    day: 4, 
    questions: [
      { q: "_ is my friend.", options: ["He", "Him", "His"], answer: "He", hindi: "वह मेरा मित्र है" },
      { q: "This is _ book.", options: ["my", "me", "mine"], answer: "my", hindi: "यह मेरी पुस्तक है" },
      { q: "_ are playing.", options: ["They", "Them", "Their"], answer: "They", hindi: "वे खेल रहे हैं" },
      { q: "Give it to _.", options: ["I", "me", "my"], answer: "me", hindi: "यह मुझे दो" },
      { q: "_ is a teacher.", options: ["She", "Her", "Hers"], answer: "She", hindi: "वह एक शिक्षिका है" },
      { q: "I saw _ yesterday.", options: ["he", "him", "his"], answer: "him", hindi: "मैंने उसे कल देखा" },
      { q: "_ house is big.", options: ["Our", "Us", "We"], answer: "Our", hindi: "हमारा घर बड़ा है" },
      { q: "This pen is _.", options: ["mine", "me", "my"], answer: "mine", hindi: "यह कलम मेरी है" }
    ] 
  },
  { 
    title: "Verbs", 
    day: 5, 
    questions: [
      { q: "I _ eating.", options: ["am", "is", "are"], answer: "am", hindi: "मैं खा रहा हूँ" },
      { q: "They _ playing.", options: ["are", "is", "am"], answer: "are", hindi: "वे खेल रहे हैं" },
      { q: "She _ singing.", options: ["is", "are", "am"], answer: "is", hindi: "वह गा रही है" },
      { q: "We _ going to school.", options: ["are", "is", "am"], answer: "are", hindi: "हम विद्यालय जा रहे हैं" },
      { q: "He _ reading a book.", options: ["is", "are", "am"], answer: "is", hindi: "वह पुस्तक पढ़ रहा है" },
      { q: "You _ studying now.", options: ["are", "is", "am"], answer: "are", hindi: "तुम अभी पढ़ रहे हो" },
      { q: "The dog _ barking.", options: ["is", "are", "am"], answer: "is", hindi: "कुत्ता भौंक रहा है" },
      { q: "I _ writing a letter.", options: ["am", "is", "are"], answer: "am", hindi: "मैं पत्र लिख रहा हूँ" }
    ] 
  }
];

// ===== Quiz Logic =====
let gameData = [];
let currentIndex = 0;
let selectedAnswer = '';
let score = 0;

function startQuizList() {
  gameData = lessons[0].questions;
  currentIndex = 0;
  score = 0;
  document.getElementById('question-section').style.display = 'block';
  loadQuestion();
}
function displayQuestion() {
const qData = gameData[currentIndex];
loadQuestion(qData);
}
let selectedWords = [];

function loadQuestion(qData) {
  if (!qData) return;
currentQ = qData;
// Progress bar update - yahan daal de
 const progress = ((currentIndex + 1) / gameData.length) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
   document.getElementById('progress-text').innerText = `Q ${currentIndex + 1}/${gameData.length}`;
  // Hindi text
  document.getElementById('hindi-text').innerText = qData.hindi || qData.hind || "";
  
  // English question
  document.getElementById('english-ref').innerText = qData.english || qData.q || "";
  
  // Words lo, duplicate hatao, shuffle karo
  let words = qData.words || qData.options || [];
  words = [...new Set(words)]; // duplicate hatao
  words = words.sort(() => Math.random() - 0.5);
  
  // OPTIONS div ko empty kar do - isiliye duplicate aa raha tha
  document.getElementById('options').innerHTML = '';
  
  // Sirf WORD BANK banao
  const wordBank = document.getElementById('word-bank');
  wordBank.innerHTML = words.map(w => 
    `<button class="word-btn" onclick="addWord('${w}', this)">${w}</button>`
  ).join('');
  
  // Answer box empty
  document.getElementById('answer-box').innerHTML = '';
  selectedWords = [];
  
  // Reset UI
  document.getElementById('feedback').style.display = 'none';
  document.getElementById('check-btn').style.display = 'inline-block';
  document.getElementById('next-btn').style.display = 'none';
}
function addWord(word, btn) {
  selectedWords.push(word);
  updateAnswerBox();
  
  // Button ko hide karo word-bank se
  btn.style.display = 'none';
}

function removeWord(word, index, btn) {
  selectedWords.splice(index, 1);
  updateAnswerBox();
  
  // Wapas word-bank me show karo
  const wordBankBtns = document.querySelectorAll('#word-bank button');
  wordBankBtns.forEach(b => {
    if (b.innerText === word && b.style.display === 'none') {
      b.style.display = 'inline-block';
    }
  });
}

function updateAnswerBox() {
  const answerBox = document.getElementById('answer-box');
  answerBox.innerHTML = selectedWords.map((w, index) => 
    `<span class="selected-word" onclick="removeWord('${w}', ${index})">${w}</span>`
  ).join(' ');
}
function renderOptions(question) {
  const optionsDiv = document.getElementById('options');
  const answerInput = document.getElementById('answer-input');
  optionsDiv.innerHTML = '';
  selectedAnswer = '';
  if (question.options && question.options.length > 0) {
    if(answerInput) answerInput.style.display = 'none';
    question.options.forEach(opt => {
      let btn = document.createElement('button');
      btn.innerText = opt;
      btn.className = 'option';
      btn.style.cssText = 'width:100%;padding:12px;margin:6px 0;border:2px solid #4CAF50;border-radius:8px;background:#fff;font-size:16px;cursor:pointer';
      btn.onclick = function() {
        document.querySelectorAll('.option').forEach(b => {
          b.style.background = '#fff';
          b.style.color = '#000';
        });
        btn.style.background = '#4CAF50';
        btn.style.color = '#fff';
        selectedAnswer = opt;
      };
      optionsDiv.appendChild(btn);
    });
  } else {
    if(answerInput) answerInput.style.display = 'block';
  }
}

function checkAnswer() {
  if (!currentQ) return;
  const correctAnswer = (currentQ.answer || currentQ.english || '').trim().toLowerCase();
  const userAnswer = selectedWords.join(' ').trim().toLowerCase();
  const feedback = document.getElementById('feedback');
  if (!feedback) return;

  if (userAnswer === correctAnswer) {
    feedback.innerText = "Sahi jawab! 🎉";
    feedback.className = "feedback"; // className change kiya
    feedback.style.display = 'block';
    document.getElementById('check-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block'; // block kar do
  } else {
    feedback.innerText = "Galat hai, dobara try karo";
    feedback.className = "feedback wrong";
    feedback.style.display = 'block';
  }
}

function playAudio() {
  const text = document.getElementById('hindi-text').innerText;
  if (!text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'hi-IN';
  speechSynthesis.speak(utterance);
}
function selectOption(word) {
  const answerBox = document.getElementById('answer-box');
  selectedWords.push(word);
  answerBox.innerHTML = selectedWords.join(' ');
  window.event.target.style.display = 'none';
}
function nextQuestion() {
  currentIndex++;

  if (currentIndex >= gameData.length) {
    alert("Quiz khatam!");
    currentIndex = 0;
  }

  loadQuestion(gameData[currentIndex]);
}
