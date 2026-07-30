function loadWrongQuestions() {
    let wrongQuestions = JSON.parse(localStorage.getItem('wrongQuestions')) || [];
    
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
            cardHTML += `<span class="tag tag-listen">LISTENING</span>`;
            cardHTML += `<h4>${q.title}</h4>`;
            cardHTML += `<p>🔊 <b>Audio:</b> "${q.audioText}"</p>`;
            cardHTML += `<p style="color:#ff4b4b">Tumne Hindi chuna: ${q.userHindiChoice}</p>`;
            cardHTML += `<p style="color:#22c55e">Sahi Hindi: ${q.correctHindi}</p>`;
        } 
        else if(q.type === 'speaking') {
            cardHTML += `<span class="tag tag-speak">SPEAKING</span>`;
            cardHTML += `<h4>${q.title}</h4>`;
            cardHTML += `<p><b>Prompt:</b> ${q.prompt}</p>`;
            cardHTML += `<p style="color:#ff4b4b">Tumne bola: ${q.userSpoken}</p>`;
            cardHTML += `<p style="color:#22c55e">Sahi bolo: ${q.correctSpoken}</p>`;
        }
        
        cardHTML += `<button class="practice-btn" onclick="deleteQuestion(${index})">✓ Ho Gaya - Delete Karo</button>`;
        cardHTML += `</div>`;
        listDiv.innerHTML += cardHTML;
    });
}

function deleteQuestion(index) {
    let wrongQuestions = JSON.parse(localStorage.getItem('wrongQuestions')) || [];
    wrongQuestions.splice(index, 1);
    localStorage.setItem('wrongQuestions', JSON.stringify(wrongQuestions));
    loadWrongQuestions(); // page reload nahi, direct refresh
}

// Page load hote hi chalao
window.addEventListener('load', loadWrongQuestions);
