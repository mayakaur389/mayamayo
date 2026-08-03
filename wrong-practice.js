// GALAT SAWAAL LOAD KARO
let allWrongQuestions = JSON.parse(localStorage.getItem('wrongQuestions')) || [];
//let wrongQuestions = [];

// filter ke liye
function practiceAgain(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN';
    speechSynthesis.speak(utterance);
}

 // TAB BUTTON CLICK + ACTIVE CLASS
  document.getElementById('btn_lessons').onclick = () => {
      loadWrongQuestions('day_quiz');
      document.getElementById('btn_lessons').classList.add('active');
      document.getElementById('btn_speaking').classList.remove('active');
      document.getElementById('btn_listening').classList.remove('active');
  };

 document.getElementById('btn_speaking').onclick = () => {
     loadWrongQuestions('speaking');
     document.getElementById('btn_speaking').classList.add('active');
     document.getElementById('btn_lessons').classList.remove('active');
     document.getElementById('btn_listening').classList.remove('active');
 };

 document.getElementById('btn_listening').onclick = () => {
     loadWrongQuestions('listening');
     document.getElementById('btn_listening').classList.add('active');
     document.getElementById('btn_lessons').classList.remove('active');
     document.getElementById('btn_speaking').classList.remove('active');
 };

// NAYA BUTTON
function loadWrongQuestions(filter = 'speaking') {
    let all = JSON.parse(localStorage.getItem('wrongQuestions')) || [];
    let wrongQuestions = all.filter(q => q.type === filter); // FILTER ADD KIYA

    const listDiv = document.getElementById('wrong-list');
    const countDiv = document.getElementById('total_text');

    const lang = localStorage.getItem("language") || localStorage.getItem("lang") || "hindi-english";
    const data = langData[lang] && langData[lang].wrong? langData[lang].wrong : langData["hindi-english"].wrong;

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
            cardHTML += `<span class="tag tag-listen">👂 LISTENING</span>`; // 👂 add kiya
            cardHTML += `<h4>${q.title}</h4>`;
            cardHTML += `<p>🔊 <b>Audio:</b> "${q.audioText}"</p>`;
            cardHTML += `<p style="color:#ff4b4b">Tumne Hindi chuna: ${q.userHindiChoice}</p>`;
            cardHTML += `<p style="color:#22c55e">Sahi Hindi: ${q.correctHindi}</p>`;
        } 
        else if(q.type === 'speaking') {
            cardHTML += `<span class="tag tag-speak">SPEAKING</span>`;
            cardHTML += `<h4>🗣️ ${q.title}</h4>`;
            cardHTML += `<p><b>Bolo:</b> ${q.question}</p>`; // SPEAKING KE LIYE NAYA
            cardHTML += `<p style="color:#ff4b4b">Tumne bola: ${q.userAnswer}</p>`;
            cardHTML += `<p style="color:#22c55e">Sahi: ${q.correctAnswer}</p>`;
        }

        cardHTML += `<button class="practice-btn practice-again-btn" data-text='${JSON.stringify(q.audioText || q.question).replace(/'/g, "&#39;")}'>🔁 Phir Se Practice</button>`;
        cardHTML += `<button class="practice-btn delete-btn" data-index="${index}" style="background:#475569; margin-top:8px;">🗑️ Delete Karo</button>`;
        // speaking khatam
        cardHTML += `</div>`;
        listDiv.innerHTML += cardHTML;
    });
}

function deleteQuestion(index) {
    let wrongQuestions = JSON.parse(localStorage.getItem('wrongQuestions')) || [];
    wrongQuestions.splice(index, 1);
    localStorage.setItem('wrongQuestions', JSON.stringify(wrongQuestions));
    loadWrongQuestions('speaking'); // FILTER KE SATH REFRESH
}

// Page load hote hi chalao
window.addEventListener('load', () => {
    loadWrongQuestions('speaking');
    document.getElementById('btn_speaking').classList.add('active');
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

// Galat question ko practice karne ka function
function practiceAgain(text) {
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US'; // <-- yahi
  utterance.rate = 0.9;
  speechSynthesis.speak(utterance);
}
//document.addEventListener('DOMContentLoaded', () => {
 // updateButtonText(); 
//});
