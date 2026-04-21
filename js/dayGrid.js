function loadDays(){
  let grid = document.getElementById('daysGrid');
  if(!grid) return;
  
  grid.innerHTML = '';
  LESSONS.forEach(day => {
    let btn = document.createElement('button');
    let isDone = state.done.includes(day.day);
    let isActive = day.day === 4; // Day 4 active dikhane ke liye
    btn.className = `day-btn ${isDone? 'done' : ''} ${isActive? 'active' : ''}`;
    btn.onclick = () => openDay(day.day);
    
    let badge = '';
    if(day.day === 1) badge = '<span class="badge">4</span>';
    if(day.day === 3) badge = '<span class="badge">1</span>';
    
    btn.innerHTML = `${badge}<b>${day.day}</b><small>Day</small>`;
    grid.appendChild(btn);
  });
}

function openDay(day){
  currentDay = day;
  currentQ = 0;
  quizData = getQuizForDay(day);
  showScreen('quizScreen');
  loadQuestion();
}
