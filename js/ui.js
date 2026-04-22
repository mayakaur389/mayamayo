function loadDays(){
  let grid = document.getElementById('daysGrid');
  if(!grid) return;
  grid.innerHTML = '';

  for(let i = 1; i <= 30; i++){
    let btn = document.createElement('button');
    btn.className = 'btn-day';
    
    let isDone = state.done.includes(i);
    let isUnlocked = i === 1 || state.done.includes(i - 1);
    
    btn.innerHTML = i;
    
    if(isDone){
      btn.classList.add('done');
      btn.onclick = () => startQuiz(i);
    }
    else if(isUnlocked){
      btn.classList.add('unlocked');
      btn.onclick = () => startQuiz(i);
    }
    else {
      btn.classList.add('locked');
      btn.innerHTML = i + ' 🔒';
      btn.onclick = () => alert('Pehle Day ' + (i-1) + ' complete karo 😊');
    }
    
    grid.appendChild(btn);
  }
}

function updateStats(){
  let xp = document.getElementById('xp');
  let hearts = document.getElementById('hearts');
  let streak = document.getElementById('streak');
  
  if(xp) xp.innerText = state.xp;
  if(hearts) hearts.innerText = state.hearts;
  if(streak) streak.innerText = state.streak;
}

function applyTheme(){
  if(state.theme === 'dark'){
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  let screen = document.getElementById(id);
  if(screen) screen.classList.add('active');
}

function startQuiz(day){
  console.log('Starting Day', day);
  showScreen('quizScreen');
  // Quiz ka logic baad me add karenge
}
