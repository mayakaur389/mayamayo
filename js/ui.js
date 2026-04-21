function updateStats(){
  document.getElementById('streak').textContent = state.streak;
  document.getElementById('hearts').textContent = state.hearts;
  document.getElementById('xp').textContent = state.xp;
  document.getElementById('streakHome').textContent = state.streak;
  document.getElementById('heartsHome').textContent = state.hearts;
  document.getElementById('xpHome').textContent = state.xp;
}

function toggleTheme(){
  if(state.theme === 'dark'){
    state.theme = 'light';
    document.body.classList.add('light');
    document.getElementById('themeBtn').textContent = '☀️';
  } else {
    state.theme = 'dark';
    document.body.classList.remove('light');
    document.getElementById('themeBtn').textContent = '🌙';
  }
  saveState();
}

function applyTheme(){
  if(state.theme === 'light'){
    document.body.classList.add('light');
    document.getElementById('themeBtn').textContent = '☀️';
  } else {
    document.getElementById('themeBtn').textContent = '🌙';
  }
}
