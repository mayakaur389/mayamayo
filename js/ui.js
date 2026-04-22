function loadDays(){
  let grid = document.getElementById('daysGrid');
  if(!grid) return;
  grid.innerHTML = '';

  for(let i=1; i<=30; i++){
    let btn = document.createElement('button');
    btn.className = 'btn-day';
    
    let isDone = state.done.includes(i);
    let isUnlocked = i === 1 || state.done.includes(i-1);
    
    btn.innerHTML = i;
    
    if(isDone){
      btn.style.background = '#059669';
      btn.onclick = () => startQuiz(i);
    }
    else if(isUnlocked){
      btn.style.background = '#1e40af';
      btn.onclick = () => startQuiz(i);
    }
    else {
      btn.style.background = '#374151';
      btn.style.opacity = '0.4';
      btn.innerHTML = i + ' 🔒';
      btn.onclick = () => alert('Pehle Day ' + (i-1) + ' karo');
    }
    
    grid.appendChild(btn);
  }
}
