const speakingData = [
    {en: "I am going to market", hi: "मैं बाजार जा रहा हूँ"},
    {en: "What is your name", hi: "तुम्हारा नाम क्या है"},
    {en: "I am eating food", hi: "मैं खाना खा रहा हूँ"},
    {en: "Where are you going", hi: "तुम कहाँ जा रहे हो"},
    {en: "I like this book", hi: "मुझे यह किताब पसंद है"},
    {en: "She is very beautiful", hi: "वह बहुत सुंदर है"},
    {en: "We are playing cricket", hi: "हम क्रिकेट खेल रहे हैं"}
];
let currentQuestionText = ""; // ← Ye add kar
// ===== PROGRESS SAVE/LOAD =====
let currentSpeakIndex = parseInt(localStorage.getItem('speakingProgress')) || 0;
let recognition = null;

function saveProgress() {
    localStorage.setItem('speakingProgress', currentSpeakIndex);
}

function goBack() {
    saveProgress(); // Back jane se pehle save kar
    window.location.href = 'index.html';
}

function loadSpeakingQuestion() {
    // Progress bar ke liye - YEH NAYI LINE ADD KI HAI
    document.querySelector('.card').style.setProperty('--progress', (currentSpeakIndex / speakingData.length) * 100);

    // Agar sab complete ho gaya to wapas 0 se start
    if(currentSpeakIndex >= speakingData.length) {
        currentSpeakIndex = 0;
        saveProgress();
    }

    let q = speakingData[currentSpeakIndex];
    currentQuestionText = q.en;
    document.getElementById('speakEnglishText').innerText = q.en;
    document.getElementById('speakHindi').innerText = q.hi;
    document.getElementById('speakHindi').style.display = 'none';
    document.getElementById('speakResult').innerText = '';
    document.getElementById('questionCount').innerText = `${currentSpeakIndex + 1} / ${speakingData.length}`;
}
// 🔊 Suno button
document.getElementById('listenBtn').onclick = () => {
    let text = speakingData[currentSpeakIndex].en;
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.rate = 0.85;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
};

// 🎤 Bolo button
document.getElementById('recordBtn').onclick = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SpeechRecognition) {
        alert('Tera browser me mic support nahi hai. Chrome use kar');
        return;
    }

    if(recognition) recognition.stop();

    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;

    document.getElementById('speakResult').innerText = 'Sun raha hu...';
    document.getElementById('speakResult').style.color = '#1cb0f6';
    document.getElementById('recordBtn').innerText = '🔴 Recording...';
    document.getElementById('recordBtn').classList.add('recording');

    recognition.start();

   recognition.onresult = (event) => {
        let spoken = event.results[0][0].transcript.toLowerCase().trim();
       let correct = '';
if(speakingData[currentSpeakIndex] && speakingData[currentSpeakIndex].en) {
    correct = speakingData[currentSpeakIndex].en.toLowerCase().trim();
} else {
    correct = document.getElementById('speakQuestion').innerText.toLowerCase().trim();
}
        spoken = spoken.replace(/[.?!,]/g, '').replace(/\s+/g, ' ');
        correct = correct.replace(/[.?!,]/g, '').replace(/\s+/g, ' ');

        if(spoken === correct) {
            document.getElementById('speakResult').innerHTML = '✅ Sahi bola!';
            document.getElementById('speakResult').style.color = '#58cc02';
            // 2 sec baad Hindi dikhao
            setTimeout(() => {
                document.getElementById('speakHindi').style.display = 'block';
            }, 2000);

            // 4 sec baad next question + SAVE PROGRESS
            setTimeout(() => {
                currentSpeakIndex++;
                saveProgress(); // ← Yahan save ho raha hai

                if(currentSpeakIndex < speakingData.length) {
                    loadSpeakingQuestion();
                } else {
                    alert('🎉 Sab complete! Bahut badhiya');
                    localStorage.setItem('speakingProgress', 0); // Reset kar de
                    goBack();
                }
            }, 4000);

        } else {
         document.getElementById('speakResult').innerHTML = `❌ Galat<br>Tumne bola: "${event.results[0][0].transcript}"`;
            document.getElementById('speakResult').style.color = '#ff4b4b';
        let wrongQuestions = JSON.parse(localStorage.getItem('wrongQuestions')) || [];
wrongQuestions.push({
    type: 'speaking',
    title: `Speaking ${currentSpeakIndex + 1}`,
question: speakingData[currentSpeakIndex].en,
userAnswer: event.results[0][0].transcript,
    correctAnswer: speakingData[currentSpeakIndex].en
});
localStorage.setItem('wrongQuestions', JSON.stringify(wrongQuestions));
        }
            resetRecordBtn();
    };

    recognition.onerror = (e) => {
        document.getElementById('speakResult').innerText = 'Mic error. Permission check karo';
        document.getElementById('speakResult').style.color = '#ff4b4b';
        resetRecordBtn();
    };

    recognition.onend = () => {
        resetRecordBtn();
    };
};

function resetRecordBtn() {
    document.getElementById('recordBtn').innerText = '🎤 Bolo';
    document.getElementById('recordBtn').classList.remove('recording');
}

// Page load pe pehla question + progress load
loadSpeakingQuestion();

// Page close/refresh pe save kar de
window.addEventListener('beforeunload', () => {
    saveProgress();
});
