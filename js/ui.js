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
  if(state.wrong.length === 0){
    alert('Abhi koi galat question nahi hai 😊');
    return;
  }
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
    let reply = "Maya Didi: '" + text + "' ka matlab samjhati hun 😊 Iska simple answer hai - practice karte raho!";
    chatBox.innerHTML += `<div class="chat-msg ai-msg">${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1500);
}

function askDoubtVoice(){
  alert('Voice feature jaldi aa raha hai 🎤');
}

function watchAd(){
  state.hearts = 5;
  saveState();
  updateStats();
  closeAd();
  alert('5 Hearts mil gaye! ❤️');
}

function closeAd(){
  document.getElementById('adModal').classList.add('hidden');
}

function checkHearts(){
  if(state.hearts <= 0){
    document.getElementById('adModal').classList.remove('hidden');
    return false;
  }
  return true;
}
