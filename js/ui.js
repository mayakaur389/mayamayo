function showScreen(id){
  document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function toggleTheme(){
  let html = document.documentElement;
  if(html.getAttribute('data-theme') === 'dark'){
    html.removeAttribute('data-theme');
    document.getElementById('themeBtn').textContent = '🌙';
  }else{
    html.setAttribute('data-theme','dark');
    document.getElementById('themeBtn').textContent = '☀️';
  }
}

function switchLang(){
  currentLang = currentLang === 'hi'? 'en' : 'hi';
  document.getElementById('langBtn').textContent = t('flag');
  updateLanguage();
  loadDays();
  saveState();
}

function updateLanguage(){
  document.getElementById('askMayaText').textContent = t('askMaya');
  document.getElementById('practiceText').textContent = t('practice');
  document.getElementById('streakLabel').textContent = t('streak');
  document.getElementById('heartsLabel').textContent = t('hearts');
  document.getElementById('unitText').textContent = t('unit1');
  document.getElementById('chooseDayText').textContent = t('chooseDay');
  document.getElementById('doubtTitle').textContent = t('doubtTitle');
  document.getElementById('doubtInput').placeholder = t('doubtPlaceholder');
  document.getElementById('askBtn').textContent = t('askBtn');
  document.getElementById('voiceBtn').textContent = t('voiceBtn');
  document.getElementById('backBtn').textContent = t('backBtn');
  document.getElementById('startBtn').textContent = t('startBtn');
  document.getElementById('modalPracticeBtn').textContent = t('modalPracticeBtn');
  document.getElementById('closeBtn').textContent = t('closeBtn');
  document.getElementById('nextBtn').textContent = t('nextBtn');
}

function updateStats(){
  document.getElementById('streak').textContent = state.streak;
  document.getElementById('hearts').textContent = state.hearts;
  document.getElementById('xp').textContent = state.xp;
  document.getElementById('streakHome').textContent = state.streak;
  document.getElementById('heartsHome').textContent = state.hearts;
  document.getElementById('xpHome').textContent = state.xp;
}

function speakText(text){
  if('speechSynthesis' in window){
    window.speechSynthesis.cancel();
    let msg = new SpeechSynthesisUtterance(text);
    msg.lang = currentLang === 'hi'? 'hi-IN' : 'en-US';
    window.speechSynthesis.speak(msg);
  }
}

function showStats(){
  alert(`🔥 ${t('streak')}: ${state.streak}\n❤️ ${t('hearts')}: ${state.hearts}\n⚡ XP: ${state.xp}\n✅ Completed: ${state.done.length}/30 Days\n❌ Wrong: ${state.wrong.length} Questions`);
}

function resetProgress(){
  if(confirm(currentLang === 'hi'? 'सब Reset करना है?' : 'Reset all progress?')){
    localStorage.clear();
    location.reload();
  }
}

function showRewardedAd(){
  document.getElementById('adPopup').style.display = 'block';
  speakText(currentLang === 'hi'? 'Hearts khatam. Video dekho' : 'No hearts. Watch video');
}

function watchAd(){
  document.getElementById('adPopup').style.display = 'none';
  setTimeout(() => {
    state.hearts = 2;
    updateStats();
    speakText(currentLang === 'hi'? 'Dhanyawaad. Do heart mil gaye' : 'Thanks. You got 2 hearts');
  }, 5000);
}

function closeAd(){
  document.getElementById('adPopup').style.display = 'none';
}

function showDoubtScreen(){
  showScreen('doubtScreen');
  if(chatHistory.length === 0){
    addAIMessage(currentLang === 'hi'?
      "नमस्ते! मैं Maya Didi हूँ 😊<br>कोई भी English का Doubt पूछो - Grammar, Translation, Meaning कुछ भी। मैं Example के साथ समझाऊंगी।" :
      "Hello! I'm Maya Didi 😊<br>Ask me any Hindi doubt - Words, Translation, Meaning anything. I'll explain with examples.");
  }
}

function addUserMessage(text){
  chatHistory.push({role:'user',text:text});
  let chatBox = document.getElementById('chatBox');
  chatBox.innerHTML += `<div class="chat-msg user-msg">${text}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addAIMessage(text){
  chatHistory.push({role:'ai',text:text});
  let chatBox = document.getElementById('chatBox');
  chatBox.innerHTML += `<div class="chat-msg ai-msg"><b>Maya Didi:</b><br>${text}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showTyping(){
  let chatBox = document.getElementById('chatBox');
  chatBox.innerHTML += `<div class="chat-msg ai-msg" id="typingMsg"><b>Maya Didi:</b><br><div class="typing"><span></span><span></span></div></div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTyping(){
  let typing = document.getElementById('typingMsg');
  if(typing) typing.remove();
}

function askDoubt(){
  let input = document.getElementById('doubtInput');
  let question = input.value.trim();
  if(!question) return;
  addUserMessage(question);
  input.value = '';
  showTyping();
  setTimeout(()=>{
    removeTyping();
    let answer = getMayaAnswer(question);
    addAIMessage(answer);
    speakText(answer.replace(/<br>/g,' ').replace(/<b>|<\/b>/g,''));
  },1500);
}

function askDoubtVoice(){
  if(!('webkitSpeechRecognition' in window)){
    alert(currentLang === 'hi'? 'Chrome में खोलो भाई' : 'Open in Chrome please');
    return;
  }
  let recognition = new webkitSpeechRecognition();
  recognition.lang = currentLang === 'hi'? 'hi-IN' : 'en-US';
  recognition.onresult = function(event){
    let spoken = event.results[0][0].transcript;
    document.getElementById('doubtInput').value = spoken;
    askDoubt();
  };
  recognition.start();
}

function getMayaAnswer(q){
  q = q.toLowerCase();
  
  // Hindi → English Mode के जवाब
  if(currentLang === 'hi'){
    if(q.includes('i am go') || q.includes('am go')){
      return `❌ <b>"I am go"</b> गलत है बेटा।<br><br><b>सही:</b> "I go" या "I am going"<br><br><b>Rule:</b> 'am' के बाद Verb की -ing form लगती है।<br><b>Example:</b><br>✅ I am going - मैं जा रहा हूँ<br>✅ I go - मैं जाता हूँ`;
    }
    if(q.includes('he do') || q.includes('she do')){
      return `❌ <b>"He do/She do"</b> गलत है।<br><br><b>सही:</b> "He does" / "She does"<br><br><b>Rule:</b> He, She, It के साथ 'does' लगता है, 'do' नहीं।`;
    }
    if(q.includes('ka english') || q.includes('का इंग्लिश') || q.includes('translate')){
      let hindiText = q.replace(/ka english kya hai|ka english|का इंग्लिश क्या है|translate|का इंग्लिश|ka matlab|का मतलब/gi,'').trim();
      if(hindiText.includes('मैं ठीक हूँ') || hindiText.includes('main thik hun')) return `<b>"मैं ठीक हूँ"</b> = "I am fine" or "I am okay"<br><b>Conversation:</b><br>A: How are you?<br>B: I am fine, thank you.`;
      return `बेटा, "<b>${hindiText}</b>" का English बताने के लिए पूरा वाक्य लिखो 😊`;
    }
    return `समझ गई बेटा! 😊<br><br>तुमने पूछा: "<b>${q}</b>"<br><br><b>मैं ये सब सिखा सकती हूँ:</b><br>1. Grammar Rules<br>2. Translation<br>3. Daily Sentences`;
  }
  
  // English → Hindi Mode के जवाब
  else {
    if(q.includes('main') && q.includes('mean')){
      return `✅ <b>"Main"</b> means <b>"I"</b> in English.<br><br><b>Example:</b><br>Main ek chhatra hoon = I am a student<br>Main khush hoon = I am happy`;
    }
    if(q.includes('tum') && q.includes('mean')){
      return `✅ <b>"Tum"</b> means <b>"You"</b> in English.<br><br><b>Example:</b><br>Tum mere dost ho = You are my friend<br>Tum kahan ho? = Where are you?`;
    }
    if(q.includes('how to say') || q.includes('translate')){
      let engText = q.replace(/how to say|translate|in hindi/gi,'').trim();
      if(engText.includes('i am fine')) return `<b>"I am fine"</b> = "Main theek hoon" या "Main badhiya hoon"<br><br><b>Conversation:</b><br>A: Tum kaise ho?<br>B: Main theek hoon, shukriya.`;
      return `Sure! For "<b>${engText}</b>" please write the full sentence 😊`;
    }
    return `Got it! 😊<br><br>You asked: "<b>${q}</b>"<br><br><b>I can teach:</b><br>1. Hindi Words Meaning<br>2. Translation<br>3. Daily Hindi Sentences`;
  }
}
