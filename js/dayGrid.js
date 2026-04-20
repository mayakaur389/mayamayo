function loadDays(){
  let grid = document.getElementById('daysGrid');
  grid.innerHTML = '';
  for(let i=1; i<=30; i++){
    let status = state.done.includes(i)? 'done' : i === state.day? 'active' : i < state.day? 'practice' : 'locked';
    let wrongCount = state.wrong.filter(w => w.day === i).length;
    let badge = wrongCount > 0? `<span class="badge">${wrongCount}</span>` : '';
    grid.innerHTML += `<div class="day ${status}" onclick="openDayModal(${i})">${i}<small>Day</small> ${badge}</div>`;
  }
  updateStats();
}

function openDayModal(d){
  state.selectedDay = d;
  let day = LESSONS[d];
  document.getElementById('modalTitle').textContent = `Day ${d}`;
  document.getElementById('modalDesc').textContent = day? day.topic : 'Coming Soon';
  document.getElementById('modalPracticeBtn').style.display = state.done.includes(d)? 'block' : 'none';
  document.getElementById('dayModal').style.display = 'flex';
}

function closeModal(){
  document.getElementById('dayModal').style.display = 'none';
}

function startDayQuiz(){
  closeModal();
  let d = state.selectedDay;
  if(d > state.day &&!state.done.includes(d-1)) return;
  state.day = d;
  state.q = 0;
  state.isPractice = false;
  showScreen('quizScreen');
  loadQuestion();
}

function startDayPractice(){
  closeModal();
  let d = state.selectedDay;
  let dayWrong = state.wrong.filter(w=>w.day===d);
  if(dayWrong.length === 0){
    alert('इस Day में कोई गलत Question नहीं है! 🎉');
    return;
  }
  state.isPractice = true;
  state.wrong = dayWrong;
  state.q = 0;
  showScreen('quizScreen');
  loadQuestion();
}

function startPractice(){
  if(state.wrong.length === 0){
    alert('अभी कोई गलत Question नहीं है बेटा! पहले Quiz खेलो 💪');
    return;
  }
  state.isPractice = true;
  state.q = 0;
  showScreen('quizScreen');
  loadQuestion();
}
