// GLOBAL VARIABLE
let CURRENT_FILTER = 'speaking';

// GALAT SAWAAL LOAD KARO
let allWrongQuestions = JSON.parse(localStorage.getItem('wrongQuestions')) || [];

// KEY MAPPING: lang.js ke key -> words.js ke key
const keyMap = {
  'hindi_en': 'hindi-english',
  'spanish_en': 'spanish-english',
  'french_en': 'french-english',
  'japanese_en': 'ja',
  'german_en': 'de',
  'portuguese_en': 'portuguese-english',
  'en_hindi': 'english-hindi'
}

// SPEECH FUNCTION - EK HI BAAR
function practiceAgain(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
}

// TAB BUTTON ACTIVE CLASS SET KARO
function setActiveTab(id){
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

 // TAB BUTTON CLICK - SIRF YAHI SE CONTROL HOGA
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn_lessons').onclick = () => {
      CURRENT_FILTER = 'day_quiz';
      setActiveTab('btn_lessons');
      loadWrongQuestions(CURRENT_FILTER);
  };

  document.getElementById('btn_speaking').onclick = () => {
      CURRENT_FILTER = 'speaking';
      setActiveTab('btn_speaking');
      loadWrongQuestions(CURRENT_FILTER);
  };

  document.getElementById('btn_listening').onclick = () => {
      CURRENT_FILTER = 'listening';
      setActiveTab('btn_listening');
      loadWrongQuestions(CURRENT_FILTER);
  };
});

// NAYA BUTTON - LANGUAGE PARAMETER ADD KIYA
function loadWrongQuestions(filter = 'speaking', lang = localStorage.getItem('lang') || 'hindi_en') {
    CURRENT_FILTER = filter;
    const mappedKey = keyMap[lang] || 'hindi-english';

    let all = JSON.parse(localStorage.getItem('wrongQuestions')) || [];
    let wrongQuestions = all.filter(q => q.type === filter); // FILTER ADD KIYA

    const listDiv = document.getElementById('wrong-list');
    const countDiv = document.getElementById('total_text');

    const data = window.langData[mappedKey] && window.langData[mappedKey].wrong? window.langData[mappedKey].wrong : window.langData["hindi-english"].wrong;

    // Count update karo
    if(countDiv){
        countDiv.innerText = `${data.total}: ${wrongQuestions.length} ${data.questions_text}`;
    }

    // List khali hai?
    if(wrongQuestions.length === 0) {
        listDiv.innerHTML = `<div class="empty">${data.no_question}</div>`;
        return;
    }

    // List banao
    listDiv.innerHTML = '';
    wrongQuestions.forEach((q, index) => {
        // Purane data ko support
        if(!q.type) {
            q.type = 'day_quiz';
            q.title = 'LESSON';
        }

        let cardHTML = `<div class="question-card">`;

        if(q.type === 'day_quiz') {
            cardHTML += `<span class="tag tag-day">DAY QUIZ</span>`;
            cardHTML += `<h4>${q.title}</h4>`;
            cardHTML += `<p><b>Q:</b> ${q.question}</p>`;
            cardHTML += `<p style="color:#ff4b4b">Tumhara: ${q.userAnswer}</p>`;
            cardHTML += `<p style="color:#22c55e">Sahi: ${q.correctAnswer}</p>`;
        }
        else if(q.type === 'listening') {
            cardHTML += `<span class="tag tag-listen">👂 LISTENING</span>`;
            cardHTML += `<h4>${q.title}</h4>`;
            cardHTML += `<p>🔊 <b>Audio:</b> "${q.audioText}"</p>`;
            cardHTML += `<p style="color:#ff4b4b">Tumne Hindi chuna: ${q.userHindiChoice}</p>`;
            cardHTML += `<p style="color:#22c55e">Sahi Hindi: ${q.correctHindi}</p>`;
        }
        else if(q.type === 'speaking') {
            cardHTML += `<span class="tag tag-speak">SPEAKING</span>`;
            cardHTML += `<h4>🗣️ ${q.title}</h4>`;
            cardHTML += `<p><b>Bolo:</b> ${q.question}</p>`;
            cardHTML += `<p style="color:#ff4b4b">Tumne bola: ${q.userAnswer}</p>`;
            cardHTML += `<p style="color:#22c55e">Sahi: ${q.correctAnswer}</p>`;
        }

        cardHTML += `<button class="practice-btn practice-again-btn" data-text='${JSON.stringify(q.audioText || q.question).replace(/'/g, "&#39;")}'>🔁 Phir Se Practice</button>`;
        cardHTML += `<button class="practice-btn delete-btn" data-index="${index}" style="background:#475569; margin-top:8px;">🗑️ Delete Karo</button>`;
        cardHTML += `</div>`;
        listDiv.innerHTML += cardHTML;
    });
}

function deleteQuestion(index) {
    let all = JSON.parse(localStorage.getItem('wrongQuestions')) || [];
    let wrongQuestions = all.filter(q => q.type === CURRENT_FILTER); // sirf current filter wale
    let originalIndex = all.indexOf(wrongQuestions[index]);
    all.splice(originalIndex, 1);
    localStorage.setItem('wrongQuestions', JSON.stringify(all));
    loadWrongQuestions(CURRENT_FILTER); // FILTER KE SATH REFRESH
}

// Page load hote hi chalao
window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('lang') || 'hindi_en';
    loadWrongQuestions('speaking', savedLang);
    setActiveTab('btn_speaking');
});

// Event listeners for buttons
document.addEventListener('click', function(e) {
    if(e.target.classList.contains('practice-again-btn')) {
        let text = e.target.getAttribute('data-text');
        practiceAgain(JSON.parse(text));
    }
    if(e.target.classList.contains('delete-btn')) {
        let index = e.target.getAttribute('data-index');
        deleteQuestion(index);
    }
});
