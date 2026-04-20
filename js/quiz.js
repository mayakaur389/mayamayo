function loadQuestion(){
  let questions;

  if(state.isPractice && state.wrong.length > 0){
    questions = [state.wrong[state.q]];
  }else{
    questions = LESSONS[state.day].questions;
  }

  if(state.q >= questions.length){
    finishDay();
    return;
  }

  let q = questions[state.q];
  document.getElementById('questionText').textContent = q.q;
  document.getElementById('questionHindi').textContent = q.h;

  let box = document.getElementById('optionsBox');
  box.innerHTML = '';
  q.o.forEach((opt,i)=>{
    let btn = document.createElement('button');
    btn.className = 'btn btn-opt';
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i, q.a, q.g);
    box.appendChild(btn);
  });

  document.getElementById('feedback').textContent = '';
  document.getElementById('grammarBox').classList.add('hidden');
  document.getElementById('nextBtn').disabled = true;

  let progress = ((state.q + 1) / questions.length) * 100;
  document.getElementById('progressBar').style.width = progress + '%';
}

function checkAnswer(selected, correct, grammar){
  let buttons = document.querySelectorAll('.btn-opt');
  buttons.forEach(b => b.disabled = true);

  if(selected === correct){
    buttons[selected].classList.add('correct');
    document.getElementById('feedback').textContent = '✅ सही जवाब!';
    state.xp += 10;
    speakText('Sahi jawab');

    if(state.isPractice){
      state.wrong.splice(state.q, 1);
    }
  }else{
    buttons[selected].classList.add('wrong');
    buttons[correct].classList.add('correct');
    document.getElementById('feedback').textContent = '❌ गलत जवाब!';
    state.hearts--;

    let currentQ = LESSONS[state.day].questions[state.q];
    if(!state.wrong.find(w => w.q === currentQ.q)){
      state.wrong.push(currentQ);
    }

    speakText('Galat jawab');

   if(state.hearts <= 0){ 
  setTimeout(() => {
    showRewardedAd();
    showScreen('homeScreen'); // Quiz screen se hata de
  }, 1000); 
  document.getElementById('nextBtn').disabled = true; // Next button band
} else {
  document.getElementById('nextBtn').disabled = false; // Hearts bache to Next chalu
}

document.getElementById('grammarBox').textContent = grammar;
document.getElementById('grammarBox').classList.remove('hidden');
updateStats();
saveState();

function nextQuestion(){
  state.q++;
  loadQuestion();
}

function finishDay(){
  if(!state.done.includes(state.day) &&!state.isPractice){
    state.done.push(state.day);
    state.streak++;
    state.xp += 50;
    alert(`🎉 Day ${state.day} Complete!\n+50 XP Bonus`);
  }

  saveState();
  loadDays();
  showScreen('homeScreen');
}
