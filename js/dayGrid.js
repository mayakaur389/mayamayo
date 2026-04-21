function loadDays(){
  let grid = document.getElementById('daysGrid');
  if(!grid) return;
  
  grid.innerHTML = '';
  LESSONS.forEach(day => {
    let btn = document.createElement('button');
    btn.className = `day-btn ${state.done.includes(day.day) ? 'done' : ''}`;
    btn.onclick = () => openDay(day.day);
    btn.innerHTML = `
      <b>${day.day}</b>
      <small>${day.title}</small>
    `;
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
