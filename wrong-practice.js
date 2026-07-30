window.onload = function(){
    let wrongQuestions = [];
    wrongQuestions = JSON.parse(localStorage.getItem('wrongQuestions')) || [];
    
    const listDiv = document.getElementById('wrong-list')
    const countDiv = document.getElementById('total-count');
    
    if(countDiv){
        countDiv.innerText = `Total ${wrongQuestions.length} galat questions hain`;
    }
    
    if(wrongQuestions.length === 0) {
        if(listDiv){
            listDiv.innerHTML = `<div class="empty">🔇 Koi galat question nahi hai abhi</div>`;
        }
    } else {
        wrongQuestions.forEach((q, index) => {
            // Purane data ko support karne ke liye
            if(!q.type) {
                q.type = 'day_quiz';
                q.title = 'LESSON';
            }

            let cardHTML = `<div class="question-card">`;
            
            // Type ke hisaab se alag UI
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
                cardHTML += `<p style="color:#ff4b4b">Tumne bola: ${q.userSpoken}</p>`;
                cardHTML += `<p style="color:#22c55e">Sahi bolo: ${q.correctSpoken}</p>`;
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
}; // window.onload band

function deleteQuestion(index) {
    let wrongQuestions = JSON.parse(localStorage.getItem('wrongQuestions')) || [];
    wrongQuestions.splice(index, 1);
    localStorage.setItem('wrongQuestions', JSON.stringify(wrongQuestions));
    location.reload(); // Page refresh karke list update kar do
}
