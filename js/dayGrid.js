function loadDays(){
  let grid = document.getElementById('daysGrid');
  grid.innerHTML = '';

  for(let i = 1; i <= 30; i++){
    let btn = document.createElement('button');
    btn.className = 'day-btn';
    btn.innerHTML = `<div>${i}</div><small>Day</small>`;

    if(state.done.includes(i)){
      btn.classList.add('done');
      let wrongCount = state.wrong.filter(w => {
        let lesson = LESSONS[i];
        return lesson && lesson.questions.some(q => q.q === w.q);
      }).length;

      if(wrongCount > 0){
        btn.innerHTML = `<div>${i}</div><small>Day</small><span class="badge">${wrongCount}</span>`;
      }
    }

    let lastDone = Math.max(...state.done, 0);
    if(i === lastDone + 1){
      btn.classList.add('current');
    }

    if(!LESSONS[i]){
      btn.classList.add('locked');
    }

    btn.onclick = () => openDay(i);
    grid.appendChild(btn);
  }
}

function openDay(day){
  state.selectedDay = day;
  let modal = document.getElementById('dayModal');
  let title = document.getElementById('modalTitle');
  let desc = document.getElementById('modalDesc');
  let startBtn = document.querySelector('#dayModal.btn-main');
  let practiceBtn = document.getElementById('modalPracticeBtn');

  title.textContent = `Day ${day}`;

  if(LESSONS[day]){
    desc.textContent = LESSONS[day].topic;
    startBtn.style.display = 'block';
    if(state.done.includes(day)){
      practiceBtn.style.display = 'block';
      startBtn.textContent = 'Start Quiz Again';
    }else{
      practiceBtn.style.display = 'none';
      startBtn.textContent = 'Start Quiz';
    }
  }else{
    desc.textContent = 'Coming Soon';
    startBtn.style.display = 'none';
    practiceBtn.style.display = 'none';
  }

  modal.style.display = 'block';
}

function closeModal(){
  document.getElementById('dayModal').style.display = 'none';
}

function startDayQuiz(){
  state.day = state.selectedDay;
  state.q = 0;
  state.isPractice = false;
  closeModal();
  loadQuestion();
  showScreen('quizScreen');
}

function startDayPractice(){
  state.day = state.selectedDay;
  state.q = 0;
  state.isPractice = true;
  closeModal();
  loadQuestion();
  showScreen('quizScreen');
}

function startPractice(){
  if(state.wrong.length === 0){
    alert('कोई गलत Question नहीं है!');
    return;
  }
  state.isPractice = true;
  state.q = 0;
  loadQuestion();
  showScreen('quizScreen');
}
