function updateStats(){
  document.getElementById('streak').textContent = state.streak;
  document.getElementById('hearts').textContent = state.hearts;
  document.getElementById('xp').textContent = state.xp;
  document.getElementById('streakHome').textContent = state.streak;
  document.getElementById('heartsHome').textContent = state.hearts;
  document.getElementById('xpHome').textContent = state.xp;
}

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function showDoubtScreen(){
  showScreen('doubtScreen');
}

function startPractice(){
  alert('Practice feature jaldi aa raha hai 😊');
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

function askDoubt(){
  let input = document.getElementById('doubtInput');
  let text = input.value.trim();
  if(!text) return;
  
  let chatBox = document.getElementById('chatBox');
  chatBox.innerHTML += `<div class="chat-msg user-msg">${text}</div>`;
  input.value = '';
  
  chatBox.innerHTML += `<div class="typing"><span></span><span></span></div>`;
  
  setTimeout(() => {
    document.querySelector('.typing').remove();
    let reply = "Maya Didi: Bhai ye wala doubt abhi Maya Didi seekh rahi hai 😊 Jaldi answer dena start kar degi!";
    chatBox.innerHTML += `<div class="chat-msg ai-msg">${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1500);
}

function askDoubtVoice(){
  alert('Voice feature jaldi aa raha hai 🎤');
}
