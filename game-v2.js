// ===== SABHI LANGUAGE KA DATA =====
const allGameData = {
    "en-hi": [
        {
            speak: "Hello", answer: "Namaste",
            options: [{text: "नमस्ते", value: "Namaste"}, {text: "अलविदा", value: "Goodbye"}, {text: "धन्यवाद", value: "Thank you"}, {text: "कृपया", value: "Please"}],
            speakLang: "en-US", micLang: "en-US"
        },
        {
            speak: "Thank You", answer: "Dhanyawad",
            options: [{text: "धन्यवाद", value: "Dhanyawad"}, {text: "नमस्ते", value: "Namaste"}, {text: "अलविदा", value: "Goodbye"}, {text: "कृपया", value: "Please"}],
            speakLang: "en-US", micLang: "en-US"
        },
        {
            speak: "Goodbye", answer: "Alvida",
            options: [{text: "अलविदा", value: "Alvida"}, {text: "नमस्ते", value: "Namaste"}, {text: "धन्यवाद", value: "Dhanyawad"}, {text: "कृपया", value: "Please"}],
            speakLang: "en-US", micLang: "en-US"
        },
        {
            speak: "Please", answer: "Kripya",
            options: [{text: "कृपया", value: "Kripya"}, {text: "नमस्ते", value: "Namaste"}, {text: "धन्यवाद", value: "Dhanyawad"}, {text: "अलविदा", value: "Alvida"}],
            speakLang: "en-US", micLang: "en-US"
        }
    ],
    "hi-en": [
        {
            speak: "नमस्ते", answer: "Hello",
            options: [{text: "Hello", value: "Hello"}, {text: "Goodbye", value: "Goodbye"}, {text: "Thank You", value: "Thank You"}, {text: "Please", value: "Please"}],
            speakLang: "hi-IN", micLang: "hi-IN"
        },
        {
            speak: "धन्यवाद", answer: "Thank You",
            options: [{text: "Thank You", value: "Thank You"}, {text: "Hello", value: "Hello"}, {text: "Goodbye", value: "Goodbye"}, {text: "Please", value: "Please"}],
            speakLang: "hi-IN", micLang: "hi-IN"
        },
        {
            speak: "अलविदा", answer: "Goodbye",
            options: [{text: "Goodbye", value: "Goodbye"}, {text: "Hello", value: "Hello"}, {text: "Thank You", value: "Thank You"}, {text: "Please", value: "Please"}],
            speakLang: "hi-IN", micLang: "hi-IN"
        },
        {
            speak: "कृपया", answer: "Please",
            options: [{text: "Please", value: "Please"}, {text: "Hello", value: "Hello"}, {text: "Thank You", value: "Thank You"}, {text: "Goodbye", value: "Goodbye"}],
            speakLang: "hi-IN", micLang: "hi-IN"
        }
    ],
    "en-jp": [
        {
            speak: "Hello", answer: "Konnichiwa",
            options: [{text: "こんにちは", value: "Konnichiwa"}, {text: "さようなら", value: "Sayonara"}, {text: "ありがとう", value: "Arigatou"}, {text: "お願いします", value: "Onegaishimasu"}],
            speakLang: "en-US", micLang: "en-US"
        },
        {
            speak: "Thank You", answer: "Arigatou",
            options: [{text: "ありがとう", value: "Arigatou"}, {text: "こんにちは", value: "Konnichiwa"}, {text: "さようなら", value: "Sayonara"}, {text: "お願いします", value: "Onegaishimasu"}],
            speakLang: "en-US", micLang: "en-US"
        },
        {
            speak: "Goodbye", answer: "Sayonara",
            options: [{text: "さようなら", value: "Sayonara"}, {text: "こんにちは", value: "Konnichiwa"}, {text: "ありがとう", value: "Arigatou"}, {text: "お願いします", value: "Onegaishimasu"}],
            speakLang: "en-US", micLang: "en-US"
        }
    ],
    "en-cn": [
        {
            speak: "Hello", answer: "Ni Hao",
            options: [{text: "你好", value: "Ni Hao"}, {text: "再见", value: "Zaijian"}, {text: "谢谢", value: "Xiexie"}, {text: "请", value: "Qing"}],
            speakLang: "en-US", micLang: "en-US"
        },
        {
            speak: "Thank You", answer: "Xiexie",
            options: [{text: "谢谢", value: "Xiexie"}, {text: "你好", value: "Ni Hao"}, {text: "再见", value: "Zaijian"}, {text: "请", value: "Qing"}],
            speakLang: "en-US", micLang: "en-US"
        },
        {
            speak: "Goodbye", answer: "Zaijian",
            options: [{text: "再见", value: "Zaijian"}, {text: "你好", value: "Ni Hao"}, {text: "谢谢", value: "Xiexie"}, {text: "请", value: "Qing"}],
            speakLang: "en-US", micLang: "en-US"
        }
    ]
};

const uiText = {
    "en-hi": { title: "🎧🎙️ Sun Ke Jodo", desc: "Maya bolegi, tum pehchano + bolo", suno: "🔊 Suno", result: "Pehle suno, phir option chuno, phir bolo" },
    "hi-en": { title: "🎧🎙️ Listen and Match", desc: "Maya will speak, you identify + speak", suno: "🔊 Listen", result: "First listen, then choose option, then speak" },
    "en-jp": { title: "🎧🎙️ 聞いて合わせる", desc: "マヤが話します、あなたは識別+話します", suno: "🔊 聞く", result: "まず聞いて、次に選択して、次に話して" },
    "en-cn": { title: "🎧🎙️ 听力匹配", desc: "Maya会说话，你识别+说话", suno: "🔊 听", result: "先听，然后选择，然后说" }
};

let currentLang = "en-hi";
let gameData = allGameData[currentLang];
let currentIndex = 0;
let score = 0;
let hearts = 3;
let selectedAnswer = null;
let recognition;

function changeLanguage() {
    currentLang = document.getElementById('langSelect').value;
    gameData = allGameData[currentLang];
    let t = uiText[currentLang];
    document.getElementById('gameTitle').innerText = t.title;
    document.getElementById('gameDesc').innerText = t.desc;
    document.getElementById('speak-btn').innerText = t.suno;
    document.getElementById('result').innerText = t.result;
    currentIndex = 0;
    score = 0;
    hearts = 3;
    loadQuestion();
    updateScore();
}

function loadQuestion() {
    let q = gameData[currentIndex];
    let optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    selectedAnswer = null;
    q.options.forEach(opt => {
        let btn = document.createElement('div');
        btn.className = 'option';
        btn.innerText = opt.text;
        btn.onclick = function() {
            document.querySelectorAll('.option').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedAnswer = opt.value;
            document.getElementById('result').innerText = "🎤 Mic daba ke bolo";
        };
        optionsDiv.appendChild(btn);
    });
    document.getElementById('result').innerText = uiText[currentLang].result;
}

function speakWord() {
    let q = gameData[currentIndex];
    speechSynthesis.cancel();
    let utterance = new SpeechSynthesisUtterance(q.speak);
    utterance.lang = q.speakLang;
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
}

function startListening() {
    if (!selectedAnswer) {
        alert('Pehle option chuno!');
        return;
    }
    if (!('webkitSpeechRecognition' in window)) {
        alert('Chrome browser use karo');
        return;
    }
    let q = gameData[currentIndex];
    recognition = new webkitSpeechRecognition();
    recognition.lang = q.micLang;
    recognition.interimResults = false;
    const micBtn = document.getElementById('mic-btn');
    micBtn.classList.add('listening');
    document.getElementById('result').innerText = "Sun rahi hu...";
    recognition.onresult = function(event) {
        let spoken = event.results[0][0].transcript.toLowerCase().trim();
        let target = q.answer.toLowerCase();
        micBtn.classList.remove('listening');
        if (spoken.includes(target) || target.includes(spoken)) {
            playCorrectSound();
            document.getElementById('result').innerText = '✅ Perfect! Sahi bola';
            document.querySelector('.option.selected').classList.add('correct');
            score++;
            setTimeout(nextQuestion, 1500);
        } else {
            playWrongSound();
            hearts--;
            document.getElementById('result').innerText = `❌ Galat. Sahi: ${q.answer}`;
            document.querySelector('.option.selected').classList.add('wrong');
            if (hearts <= 0) {
                setTimeout(() => {
                    alert('Hearts khatam! 💀 Game Over\nScore: ' + score);
                    location.reload();
                }, 1000);
            } else {
                setTimeout(nextQuestion, 2000);
            }
        }
        updateScore();
    };
    recognition.onerror = function() {
        micBtn.classList.remove('listening');
        document.getElementById('result').innerText = "Mic error. Phir se try karo";
    };
    recognition.start();
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex >= gameData.length) {
        alert('🎉 Level Complete!\nFinal Score: ' + score + '/' + gameData.length);
        currentIndex = 0;
        score = 0;
        hearts = 3;
    }
    loadQuestion();
    updateScore();
}

function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}/${gameData.length} | Hearts: ${hearts} ❤️`;
}

function playCorrectSound() {
    speechSynthesis.cancel();
    let utterance = new SpeechSynthesisUtterance("Correct");
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
}

function playWrongSound() {
    speechSynthesis.cancel();
    let utterance = new SpeechSynthesisUtterance("Wrong answer");
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('speak-btn').onclick = speakWord;
    loadQuestion();
    updateScore();
});
