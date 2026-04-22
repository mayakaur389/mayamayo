import { state } from './state.js';

export function updateStats() {
  document.getElementById('streak').textContent = state.streak;
  document.getElementById('hearts').textContent = state.hearts;
  document.getElementById('xp').textContent = state.xp;
}

export function renderDays(startQuizFn) {
  const grid = document.getElementById('daysGrid');
  if(!grid) return;
  grid.innerHTML = '';
  
  for(let i = 1; i <= 30; i++) {
    const btn = document.createElement('button');
    btn.className = 'day';
    const unlocked = i === 1 || state.done.includes(i-1);
    const done = state.done.includes(i);
    
    if(done) {
      btn.classList.add('done');
      btn.innerHTML = `${i}<br>✓`;
      btn.onclick = () => startQuizFn(i);
    } else if(unlocked) {
      btn.classList.add('active');
      btn.innerHTML = `${i}<br>Start`;
      btn.onclick = () => startQuizFn(i);
    } else {
      btn.innerHTML = `${i}<br>🔒`;
      btn.disabled = true;
      btn.onclick = () => alert(`Pehle Day ${i-1} complete karo 😊`);
    }
    grid.appendChild(btn);
  }
}
