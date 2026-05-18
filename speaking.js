const questions = [
    {en: "I am going to market", hi: "मैं बाजार जा रहा हूँ"},
    {en: "What is your name", hi: "तुम्हारा नाम क्या है"},
    {en: "I am fine", hi: "मैं ठीक हूँ"},
    {en: "Where are you going", hi: "तुम कहाँ जा रहे हो"},
    {en: "Good morning", hi: "सुप्रभात"}
];

let wrongQuestions = []; // NEW CODE
let currentQuestions = [...questions]; // NEW CODE - Isse khelenge
let currentQ = parseInt(localStorage.getItem('speakingCurrentQ')) || 0; // NEW CODE
let recognition;
let isPracticeMode = false; // NEW CODE

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
    let speech = new SpeechSynthesisUtterance(currentQuestions[currentQ].en); // FIXED
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
    let correct = currentQuestions[currentQ].en.toLowerCase().trim(); // FIXED
    spoken = spoken.replace(/[.?!,]/g, '').replace(/\s+/g, ' ');
    correct = correct.replace(/[.?!,]/g, '').replace(/\s+/g, ' ');

    if(spoken === correct) {
        document.getElementById('speakResult').innerHTML = '✅ Sahi bola!';
        document.getElementById('speakResult').style.color = '#58cc02';

        setTimeout(() => {
            document.getElementById('speakHindi').innerHTML = currentQuestions[currentQ].hi; // FIXED
            document.getElementById('speakHindi').style.display = 'block';

            setTimeout(() => {
                nextQuestion(); // NEW CODE
            }, 3000);
        }, 2000);
    } else {
        document.getElementById('speakResult').innerHTML = `❌ Galat bola<br><br>Sahi: "${currentQuestions[currentQ].en}"<br>Tumne bola: "${event.results[0][0].transcript}"`; // FIXED
        document.getElementById('speakResult').style.color = '#ff4b4b';
        document.getElementById('speakHindi').style.display = 'none';

        // NEW CODE - Galat wale save karo
        if(!isPracticeMode &&!wrongQuestions.includes(currentQuestions[currentQ])) {
            wrongQuestions.push(currentQuestions[currentQ]);
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
    if(!isPracticeMode) {
        localStorage.setItem('speakingCurrentQ', currentQ); // NEW CODE
    }
    document.getElementById('questionCount').innerText = `${currentQ + 1} / ${currentQuestions.length}`;
    document.getElementById('speakQuestion').innerText = currentQuestions[currentQ].en;
    document.getElementById('speakResult').innerText = '';
    document.getElementById('speakHindi').style.display = 'none';
}

function nextQuestion() { // NEW CODE
    currentQ++;
    if(currentQ < currentQuestions.length) {
        loadQuestion();
    } else {
        if(!isPracticeMode) {
            showFinalResult();
        } else {
            showPracticeComplete(); // NEW CODE
        }
    }
}

function showFinalResult() { // NEW CODE
    document.getElementById('speakQuestion').innerText = '🎉 Sab Complete!';
    document.getElementById('questionCount').innerText = 'Done';
    document.getElementById('recordBtn').disabled = true;
    document.getElementById('listenBtn').disabled = true;

    if(wrongQuestions.length > 0) {
        document.getElementById('retryWrongBtn').style.display = 'block';
        document.getElementById('speakResult').innerHTML = `Shabash! <br><br>${wrongQuestions.length} questions galat hui. Practice karo`;
    } else {
        document.getElementById('speakResult').innerHTML = 'Shabash! Sab sahi kiye 👏';
    }

    localStorage.removeItem('speakingCurrentQ');
}

function showPracticeComplete() { // NEW CODE
    document.getElementById('speakQuestion').innerText = '🎉 Practice Complete!';
    document.getElementById('recordBtn').disabled = true;
    document.getElementById('listenBtn').disabled = true;
    document.getElementById('speakResult').innerHTML = 'Ab sab yaad ho gaya hoga 💪';
}

document.getElementById('retryWrongBtn').onclick = () => { // NEW CODE
    isPracticeMode = true;
    currentQuestions = [...wrongQuestions];
    wrongQuestions = [];
    currentQ = 0;
    document.getElementById('retryWrongBtn').style.display = 'none';
    document.getElementById('recordBtn').disabled = false;
    document.getElementById('listenBtn').disabled = false;
    loadQuestion();
};

// Page load pe question dikhao
loadQuestion();
