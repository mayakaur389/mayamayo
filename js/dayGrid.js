function loadDays(){
  let grid = document.getElementById('daysGrid');
  grid.innerHTML = '';
  let mode = LANG[currentLang].mode;
  
  for(let i = 1; i <= 30; i++){
    let btn = document.createElement('button');
    btn.className = 'day-btn';
    btn.innerHTML = `<div>${i}</div><small>Day</small>`;
    
    if(state.done.includes(i)){
      btn.classList.add('done');
      btn.innerHTML = `<div>${i}</div><small>✓ Done</small>`;
    }
    
    // Check if lesson exists for current mode
    if(!LESSONS[mode][i]){
      btn.classList.add('locked');
    }
    
    btn.onclick = () => openDay(i);
    grid.appendChild(btn);
  }
}

function openDay(day){
  state.selectedDay = day;
  let mode = LANG[currentLang].mode;
  let modal = document.getElementById('dayModal');
  let title = document.getElementById('modalTitle');
  let desc = document.getElementById('modalDesc');
  let startBtn = document.getElementById('startBtn');
  let practiceBtn = document.getElementById('modalPracticeBtn');
  
  title.textContent = `Day ${day}`;
  
  if(LESSONS[mode][day]){
    desc.textContent = LESSONS[mode][day].topic;
    startBtn.style.display = 'block';
    if(state.done.includes(day)){
      practiceBtn.style.display = 'block';
      startBtn.textContent = t('startBtn') + ' Again';
    }else{
      practiceBtn.style.display = 'none';
      startBtn.textContent = t('startBtn');
    }
  }else{
    desc.textContent = currentLang === 'hi'? 'Coming Soon' : 'Coming Soon';
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
    alert(currentLang === 'hi'? 'कोई गलत Question नहीं है!' : 'No wrong questions!');
    return;
  }
  state.isPractice = true;
  state.q = 0;
  loadQuestion();
  showScreen('quizScreen');
}
