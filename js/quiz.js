function loadQuestion(){
  let q = quizData[currentQ];
  document.getElementById('questionText').textContent = q.q;
  document.getElementById('hindiText').textContent = q.hindi;
  let optBox = document.getElementById('optionsBox');
  optBox.innerHTML = '';
  q.opt.forEach((op, i) => {
    let btn = document.createElement('button');
    btn.className = 'btn btn-opt';
    btn.textContent = op;
    btn.onclick = () => checkAnswer(i);
    optBox.appendChild(btn);
  });
  document.getElementById('progressBar').style.width = `${(currentQ+1)/quizData.length*100}%`;
  document.getElementById('progressText').textContent = `Question ${currentQ+1}/${quizData.length}`;
  document.getElementById('feedback').textContent = '';
  document.getElementById('nextBtn').classList.add('hidden');
  document.getElementById('grammarBox').classList.add('hidden');
}

function speak(text){
  if('speechSynthesis' in window){
    let msg = new SpeechSynthesisUtterance(text);
    msg.lang = 'en-US';
    msg.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
  }
}

function checkAnswer(i){
  let q = quizData[currentQ];
  let correct = i === q.ans;
  document.querySelectorAll('.btn-opt').forEach((btn, idx) => {
    btn.disabled = true;
    if(idx === q.ans) btn.classList.add('correct');
    else if(idx === i) btn.classList.add('wrong');
  });

  if(correct){
    document.getElementById('feedback').textContent = 'Sahi! 🎉';
    document.getElementById('feedback').style.color = 'var(--green)';
    state.xp += 10;
    speak('Correct!');
  } else {
    document.getElementById('feedback').textContent = 'Galat 😅';
    document.getElementById('feedback').style.color = 'var(--red)';
    state.hearts = Math.max(0, state.hearts - 1);
    // Galat question ko wrong array me daal do
    let wrongQ = {day: currentDay,...q};
    if(!state.wrong.find(w => w.q === q.q)) state.wrong.push(wrongQ);
    speak('Wrong!');
    if(state.hearts <= 0){
      setTimeout(() => checkHearts(), 1000);
    }
  }

  document.getElementById('grammarBox').innerHTML = q.grammar;
  document.getElementById('grammarBox').classList.remove('hidden');
  document.getElementById('nextBtn').classList.remove('hidden');
  saveState();
  updateStats();
}

function nextQuestion(){
  currentQ++;
  if(currentQ >= quizData.length){
    if(currentDay === 0){ // Practice mode
      alert('Practice Complete! 🎉');
    } else {
      if(!state.done.includes(currentDay)) state.done.push(currentDay);
      state.streak++;
    }
    saveState();
    loadDays();
    showScreen('homeScreen');
  } else {
    loadQuestion();
  }
}
