function updateStats(){
  document.getElementById('streak').textContent = state.streak;
  document.getElementById('hearts').textContent = state.hearts;
  document.getElementById('xp').textContent = state.xp;
  document.getElementById('streakHome').textContent = state.streak;
  document.getElementById('heartsHome').textContent = state.hearts;
  document.getElementById('xpHome').textContent = state.xp;
}

function loadDays(){
  let grid = document.getElementById('daysGrid');
  grid.innerHTML = '';

  LESSONS.forEach((lesson, index) => {
    let btn = document.createElement('button');
    let dayNum = lesson.day;

    let isDone = state.done.includes(dayNum);
    let isUnlocked = dayNum === 1 || state.done.includes(dayNum - 1);

    btn.className = 'btn-day';
    btn.innerHTML = `
      <div style="font-size:20px;font-weight:700">${dayNum}</div>
      <div style="font-size:11px;opacity:.7">${lesson.title}</div>
    `;

    if(isDone){
      btn.classList.add('done');
      btn.innerHTML += `<div style="position:absolute;top:4px;right:4px">✅</div>`;
      btn.onclick = () => startQuiz(dayNum);
    }
    else if(isUnlocked){
      btn.onclick = () => startQuiz(dayNum);
    }
    else {
      btn.classList.add('locked');
      btn.innerHTML += `<div style="position:absolute;top:4px;right:4px">🔒</div>`;
      btn.onclick = () => alert('Pehle Day ' + (dayNum-1) + ' complete karo 😊');
    }

    grid.appendChild(btn);
  });
}

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// YE WALA FUNCTION MISSING THA - AB ADD KAR
function startQuiz(day){
  if(!checkHearts()) return;
  currentDay = day;
  currentQ = 0;
  quizData = getQuizForDay(day);
  showScreen('quizScreen');
  loadQuestion();
}

function showDoubtScreen(){
  showScreen('doubtScreen');
}

function startPractice(){
  if(state.wrong.length === 0){
    alert('Abhi koi galat question nahi hai 😊 Pehle quiz karo!');
    return;
  }
  if(!checkHearts()) return;
  currentDay = 0; // 0 = practice mode
  currentQ = 0;
  quizData = state.wrong.slice(0, 5); // 5 galat question max
  showScreen('quizScreen');
  loadQuestion();
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
    let reply = getAIReply(text);
    chatBox.innerHTML += `<div class="chat-msg ai-msg">Maya Didi: ${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    speak(reply);
  }, 1500);
}

function getAIReply(doubt){
  doubt = doubt.toLowerCase();
  if(doubt.includes('am') || doubt.includes('is') || doubt.includes('are')){
    return "am = I ke saath, is = He/She/It ke saath, are = You/We/They ke saath use hota hai 😊";
  } else if(doubt.includes('he') || doubt.includes('she')){
    return "He/She ke saath hamesha 'is' lagta hai. Jaise: He is happy, She is smart";
  } else if(doubt.includes('you')){
    return "You ke saath hamesha 'are' lagta hai. Jaise: You are my friend";
  } else {
    return "Ye English ka basic rule hai. Aap Day 1 se start karo, sab samajh aa jayega. Koi specific word batao to aur achhe se samjhaungi 😊";
  }
}

function askDoubtVoice(){
  if(!('webkitSpeechRecognition' in window)){
    alert('Tere browser me voice support nahi hai 😅 Type karke pucho');
    return;
  }
  let rec = new webkitSpeechRecognition();
  rec.lang = 'hi-IN';
  rec.start();
  rec.onresult = (e) => {
    document.getElementById('doubtInput').value = e.results[0][0].transcript;
    askDoubt();
  }
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
