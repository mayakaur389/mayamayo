function openDay(day){
  currentDay = day;
  currentQ = 0;

  if(day === 1){
    quizData = [
      {q: "I ___ a student", h: "मैं एक छात्र हूँ", opt: ["am", "is", "are"], ans: 0, exp: "I के साथ 'am' लगता है"},
      {q: "I ___ happy", h: "मैं खुश हूँ", opt: ["is", "am", "are"], ans: 1, exp: "I के साथ 'am' लगता है"},
      {q: "I ___ from India", h: "मैं भारत से हूँ", opt: ["are", "am", "is"], ans: 1, exp: "I के साथ 'am' लगता है"}
    ];
  }else{
    quizData = [
      {q: "Day " + day + " Quiz", h: "जल्द आ रहा है", opt: ["OK"], ans: 0, exp: "Day " + day + " का quiz bana rahe hain"}
    ];
  }

  showScreen('quizScreen');
  showQuestion();
}

function showQuestion(){
  if(currentQ >= quizData.length){
    alert('Day ' + currentDay + ' Complete! +10 XP');
    state.xp += 10;
    if(!state.done.includes(currentDay)) state.done.push(currentDay);
    updateStats();
    saveState();
    loadDays();
    showScreen('homeScreen');
    return;
  }

  let q = quizData[currentQ];
  document.getElementById('questionText').textContent = q.q;
  document.getElementById('hindiText').textContent = q.h;
  document.getElementById('progressBar').style.width = ((currentQ+1)/quizData.length*100) + '%';
  document.getElementById('progressText').textContent = `Question ${currentQ+1}/${quizData.length}`;

  let optBox = document.getElementById('optionsBox');
  optBox.innerHTML = '';
  q.opt.forEach((option, i) => {
    let btn = document.createElement('button');
    btn.className = 'btn btn-opt';
    btn.textContent = option;
    btn.onclick = () => checkAnswer(i);
    optBox.appendChild(btn);
  });

  document.getElementById('feedback').textContent = '';
  document.getElementById('grammarBox').classList.add('hidden');
  document.getElementById('nextBtn').classList.add('hidden');
}

function checkAnswer(selected){
  let q = quizData[currentQ];
  let btns = document.querySelectorAll('#optionsBox.btn-opt');

  btns.forEach((b, i) => {
    b.disabled = true;
    if(i === q.ans) b.classList.add('correct');
    else if(i === selected) b.classList.add('wrong');
  });

  if(selected === q.ans){
    document.getElementById('feedback').textContent = '✅ Sahi!';
    state.xp += 2;
  }else{
    document.getElementById('feedback').textContent = '❌ Galat!';
    state.hearts -= 1;
    state.wrong.push({q: q.q, correct: q.opt[q.ans]});
  }

  document.getElementById('grammarBox').innerHTML = `<b>Explanation:</b> ${q.exp}`;
  document.getElementById('grammarBox').classList.remove('hidden');
  document.getElementById('nextBtn').classList.remove('hidden');
  updateStats();
  saveState();
}

function nextQuestion(){
  currentQ++;
  showQuestion();
}

// App Start
window.onload = function(){
  loadState();
  loadDays();
  showScreen('homeScreen');
}
