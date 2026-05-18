const questions = [
    {en: "I am going to market", hi: "मैं बाजार जा रहा हूँ"},
    {en: "What is your name", hi: "तुम्हारा नाम क्या है"},
    {en: "I am fine", hi: "मैं ठीक हूँ"},
    {en: "Where are you going", hi: "तुम कहाँ जा रहे हो"},
    {en: "Good morning", hi: "सुप्रभात"}
];

let wrongQuestions = []; // NEW CODE
let currentQ = parseInt(localStorage.getItem('speakingCurrentQ')) || 0; // NEW CODE
let recognition;
let isPracticeMode = false; let wrongQuestions = []; // NEW CODE

// ======== DARK MODE TOGGLE ========
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerText = '☀️ Light';
}

themeToggle.onclick = () => {
    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')) {
        themeToggle.innerText = '☀️ Light';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerText = '🌙 Dark';
        localStorage.setItem('theme', 'light');
    }
};

if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
} else if ('SpeechRecognition' in window) {
    recognition = new SpeechRecognition();
} else {
    alert('Browser me voice support nahi hai. Chrome use karo.');
}

recognition.lang = 'en-US';
recognition.continuous = false;
recognition.interimResults = false;

document.getElementById('listenBtn').onclick = () => {
    let speech = new SpeechSynthesisUtterance(questions[currentQ].en);
    speech.lang = 'en-US';
    speech.rate = 0.9;
    speechSynthesis.speak(speech);
};

document.getElementById('recordBtn').onclick = () => {
    document.getElementById('speakResult').innerHTML = '🎤 Sun raha hun...';
    document.getElementById('speakResult').style.color = '#333';
    document.getElementById('speakHindi').style.display = 'none';
    recognition.start();
};

recognition.onresult = (event) => {
    let spoken = event.results[0][0].transcript.toLowerCase().trim();
    let correct = questions[currentQ].en.toLowerCase().trim();
    spoken = spoken.replace(/[.?!,]/g, '').replace(/\s+/g, ' ');
    correct = correct.replace(/[.?!,]/g, '').replace(/\s+/g, ' ');

    if(spoken === correct) {
        document.getElementById('speakResult').innerHTML = '✅ Sahi bola!';
        document.getElementById('speakResult').style.color = '#58cc02';

        setTimeout(() => {
            document.getElementById('speakHindi').innerHTML = questions[currentQ].hi;
            document.getElementById('speakHindi').style.display = 'block';

            setTimeout(() => {
                if(!isPracticeMode) {
                    currentQ++;
                    if(currentQ < questions.length) {
                        loadQuestion();
                    } else {
                        showFinalResult();
                    }
                } else {
                    loadQuestion();
                }
            }, 3000);
        }, 2000);
    } else {
        document.getElementById('speakResult').innerHTML = `❌ Galat bola<br><br>Sahi: "${questions[currentQ].en}"<br>Tumne bola: "${event.results[0][0].transcript}"`;
        document.getElementById('speakResult').style.color = '#ff4b4b';
        document.getElementById('speakHindi').style.display = 'none';

        if(!isPracticeMode && !wrongQuestions.includes(questions[currentQ])) {
            wrongQuestions.push(questions[currentQ]); // NEW CODE
        }
    }
};

recognition.onerror = (event) => {
    if(event.error === 'no-speech') {
        document.getElementById('speakResult').innerHTML = '❌ Kuch suna nahi. Phir se bolo';
    } else {
        document.getElementById('speakResult').innerHTML = '❌ Mic error. Permission check karo';
    }
    document.getElementById('speakResult').style.color = '#ff4b4b';
};

function goBack() {
    window.history.back();
}

function loadQuestion() {
    localStorage.setItem('speakingCurrentQ', currentQ); // NEW CODE
    document.getElementById('questionCount').innerText = `${currentQ + 1} / ${questions.length}`;
    document.getElementById('speakQuestion').innerText = questions[currentQ].en;
    document.getElementById('speakResult').innerText = '';
    document.getElementById('speakHindi').style.display = 'none';
}

function showFinalResult() {
    document.getElementById('speakQuestion').innerText = '🎉 Sab Complete!';
    document.getElementById('questionCount').innerText = 'Done';
    document.getElementById('recordBtn').disabled = true;
    document.getElementById('listenBtn').disabled = true;
    document.getElementById('speakResult').innerHTML = 'Shabash!';

    if(wrongQuestions.length > 0) { // NEW CODE
        document.getElementById('retryWrongBtn').style.display = 'block';
        document.getElementById('speakResult').innerHTML += `<br><br>${wrongQuestions.length} questions galat hui. Practice karo`;
    }

    localStorage.removeItem('speakingCurrentQ'); // NEW CODE
}

document.getElementById('retryWrongBtn').onclick = () => { // NEW CODE
    isPracticeMode = true;
    questions = [...wrongQuestions];
    wrongQuestions = [];
    currentQ = 0;
    document.getElementById('retryWrongBtn').style.display = 'none';
    document.getElementById('recordBtn').disabled = false;
    document.getElementById('listenBtn').disabled = false;
    loadQuestion();
};

// Load first question
loadQuestion(); // NEW CODE
