function loadDays(){
  let grid = document.getElementById('daysGrid');
  grid.innerHTML = '';
  
  LESSONS.forEach(lesson => {
    let btn = document.createElement('button');
    btn.className = 'day-btn';
    
    if(state.done.includes(lesson.day)){
      btn.classList.add('done');
    }
    
    btn.innerHTML = `${lesson.day}<small>${lesson.title}</small>`;
    btn.onclick = () => openDay(lesson.day);
    grid.appendChild(btn);
  });
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
  let startBtn = document.getElementById('startQuizBtn');
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

  modal.style.display = 'flex';
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
