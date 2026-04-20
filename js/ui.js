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
    msg.lang = 'hi-IN';
    window.speechSynthesis.speak(msg);
  }
}

function showStats(){
  alert(`🔥 Streak: ${state.streak}\n❤️ Hearts: ${state.hearts}\n⚡ XP: ${state.xp}\n✅ Completed: ${state.done.length}/30 Days\n❌ Wrong: ${state.wrong.length} Questions`);
}

function resetProgress(){
  if(confirm('सब Reset करना है?')){
    localStorage.clear();
    location.reload();
  }
}

function showRewardedAd(){
  document.getElementById('adPopup').style.display = 'block';
  speakText('Hearts khatam. Video dekho');
}

function watchAd(){
  document.getElementById('adPopup').style.display = 'none';
  setTimeout(() => {
    state.hearts = 2;
    updateStats();
    speakText('Dhanyawaad. Do heart mil gaye');
  }, 5000);
}

function closeAd(){
  document.getElementById('adPopup').style.display = 'none';
  showScreen('homeScreen'); // Ye line add kar di
}

nction showDoubtScreen(){
  showScreen('doubtScreen');
  if(chatHistory.length === 0){
    addAIMessage("नमस्ते! मैं Maya Didi हूँ 😊<br>कोई भी English का Doubt पूछो - Grammar, Translation, Meaning कुछ भी। मैं Example के साथ समझाऊंगी।");
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
    alert('Chrome में खोलो भाई');
    return;
  }
  let recognition = new webkitSpeechRecognition();
  recognition.lang = 'hi-IN';
  recognition.onresult = function(event){
    let spoken = event.results[0][0].transcript;
    document.getElementById('doubtInput').value = spoken;
    askDoubt();
  };
  recognition.start();
}

function getMayaAnswer(q){
  q = q.toLowerCase();
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
