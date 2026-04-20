function loadQuestion(){
  let questions;
  if(state.isPractice){
    questions = state.wrong;
  }else{
    let day = LESSONS[state.day];
    if(!day){showScreen('homeScreen');return;}
    questions = day.questions;
  }
  if(state.q >= questions.length){
    if(state.isPractice){
      state.wrong = state.wrong.filter(w=>!questions.includes(w));
      alert('Practice Complete! Shabash 💪');
      showScreen('homeScreen');
      loadDays();
      return;
    }
    if(!state.done.includes(state.day)){
      state.done.push(state.day);
      state.xp += 50;
      state.streak++;
    }
    if(state.day < 30) state.day++;
    saveState();
    showScreen('homeScreen');
    loadDays();
    return;
  }
  let q = questions[state.q];
  document.getElementById('questionText').textContent = q.q;
  document.getElementById('questionHindi').textContent = q.h;
  document.getElementById('feedback').textContent = '';
  document.getElementById('grammarBox').classList.add('hidden');
  document.getElementById('nextBtn').disabled = true;
  let opts = document.getElementById('optionsBox');
  opts.innerHTML = '';
  q.o.forEach((opt,i)=>{
    opts.innerHTML += `<button class="btn btn-opt" onclick="checkAnswer(${i})">${opt}</button>`;
  });
  let progress = (state.q / questions.length) * 100;
  document.getElementById('progressBar').style.width = progress + '%';
  speakText(q.h);
}

function checkAnswer(i){
  let questions = state.isPractice? state.wrong : LESSONS[state.day].questions;
  let q = questions[state.q];
  let btns = document.querySelectorAll('#optionsBox .btn-opt');
  btns.forEach(b=>b.disabled=true);
  if(i === q.a){
    btns[i].classList.add('btn-correct');
    document.getElementById('feedback').textContent = '✅ Correct! Shabash!';
    speakText('Correct! Shabash');
    state.xp += 10;
    if(state.isPractice){
      state.wrong.splice(state.q,1);
      state.q--;
    }
  }else{
    btns[i].classList.add('btn-wrong');
    btns[q.a].classList.add('btn-correct');
    document.getElementById('feedback').textContent = '❌ गलत! सही Answer: ' + q.o[q.a];
    speakText('Galat! Sahi answer hai ' + q.o[q.a]);
    if(state.hearts > 0){
      state.hearts--;
    }
    if(state.hearts <= 0){
      state.hearts = 0;
      showRewardedAd();
    }
    if(!state.isPractice){
      state.wrong.push({...q,day:state.day});
    }
    document.getElementById('grammarBox').textContent = q.g;
  }
  document.getElementById('grammarBox').classList.remove('hidden');
  document.getElementById('nextBtn').disabled = false;
  updateStats();
  saveState();
}

function nextQuestion(){
  state.q++;
  loadQuestion();
}
