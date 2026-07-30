// wrong-practice.js
window.onload = function(){
  let wrongQuestions = []; // YE NAYI LINE ADD KARO  
  wrongQuestions = JSON.parse(localStorage.getItem('wrongQuestions')) || []; // 2. YE NAYI LINE ADD KARO  
    const listDiv = document.getElementById('wrong-list')
    const countDiv = document.getElementById('total-count');

    if(countDiv){ // Safety check
        countDiv.innerText = `Total ${wrongQuestions.length} galat questions hain`;
    }

    if(wrongQuestions.length === 0) { // { YAHAN LAGAO
        if(listDiv){
            listDiv.innerHTML = `<div class="empty">🔇 Koi galat question nahi hai abhi</div>`;
        }
    } else {
    wrongQuestions.forEach((q, index) => {
    let cardHTML = `<div class="question-card">`; // SAHI - backtick   
        
        // Type ke hisaab se alag UI
        if(q.type === 'day_quiz') {
            cardHTML += `<span class="tag tag-day">DAY QUIZ</span>
                         <h4>${q.title}</h4>
                         <p><b>Q:</b> ${q.question}</p>
                         <p style="color:#ff4b4b">Tumhara: ${q.userAnswer}</p>
                         <p style="color:#22c55e">Sahi: ${q.correctAnswer}</p>`;
        }
        else if(q.type === 'listening') {
            cardHTML += `<span class="tag tag-listen">LISTENING</span>
                         <h4>${q.title}</h4>
                         <p>🔊 <b>Audio:</b> "${q.audioText}"</p>
                         <p style="color:#ff4b4b">Tumne Hindi chuna: ${q.userHindiChoice}</p>
                         <p style="color:#22c55e">Sahi Hindi: ${q.correctHindi}</p>
                         <p style="color:#ff4b4b">Tumne bola: ${q.userSpoken}</p>
                         <p style="color:#22c55e">Sahi bolo: ${q.correctSpoken}</p>`;
        }
        else if(q.type === 'speaking') {
            cardHTML += `<span class="tag tag-speak">SPEAKING</span>
                         <h4>${q.title}</h4>
                         <p><b>Prompt:</b> ${q.prompt}</p>
                         <p style="color:#ff4b4b">Tumne bola: ${q.userSpoken}</p>
                         <p style="color:#22c55e">Sahi bolo: ${q.correctSpoken}</p>`;
        }

        cardHTML += `<button class="practice-btn" onclick="deleteQuestion(${index})">✓ Ho Gaya - Delete Karo</button>`;
        cardHTML += '</div>';
        listDiv.innerHTML += cardHTML;
    });


function deleteQuestion(index) {
    wrongQuestions.splice(index, 1);
    localStorage.setItem('wrongQuestions', JSON.stringify(wrongQuestions));
    location.reload(); // Page refresh karke list update kar do
}
