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
  alert(`🔥 Streak: ${state.streak} Days\n❤️ Hearts: ${state.hearts}\n⚡ XP: ${state.xp}\n✅ Completed: ${state.done.length}/30 Days\n❌ Wrong: ${state.wrong.length} Questions`);
}

function resetProgress(){
  if(confirm('सब Reset करना है?')){
    localStorage.clear();
    location.reload();
  }
}

function showRewardedAd(){
  document.getElementById('adPopup').style.display = 'block';
  speakText('Heart khatam. Video dekho aur do heart pao');
}

function watchAd(){
  document.getElementById('adPopup').style.display = 'none';
  alert('Ad Chal Rahi Hai... 5 second');
  setTimeout(() => {
    state.hearts = 2;
    updateStats();
    document.getElementById('feedback').textContent = '2 Heart मिल गए! 🎉';
    speakText('Dhanyawaad. Do heart mil gaye');
  }, 5000);
}

function closeAd(){
  document.getElementById('adPopup').style.display = 'none';
  document.getElementById('feedback').textContent = 'Heart khatam. App restart karo';
}

function showDoubtScreen(){
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
    return `❌ <b>"He do/She do"</b> गलत है।<br><br><b>सही:</b> "He does" / "She does"<br><br><b>Rule:</b> He, She, It के साथ 'does' लगता है, 'do' नहीं।<br><b>Example:</b><br>✅ He does his work - वह अपना काम करता है`;
  }
  if(q.includes('did not went') || q.includes('did not came')){
    return `❌ <b>"did not went"</b> गलत है।<br><br><b>सही:</b> "did not go"<br><br><b>Rule:</b> 'did' के बाद हमेशा Verb की 1st form लगती है।<br><b>Example:</b><br>✅ I did not go - मैं नहीं गया<br>✅ She did not come - वह नहीं आई`;
  }
  if(q.includes('more better') || q.includes('most best')){
    return `❌ <b>"more better"</b> गलत है।<br><br><b>सही:</b> "better" या "much better"<br><br><b>Rule:</b> 'better' खुद Comparative है, 'more' नहीं लगेगा।<br><b>Example:</b><br>✅ This is better - यह बेहतर है<br>❌ This is more better`;
  }
  if(q.includes('a') && q.includes('an')){
    return `<b>A / An / The का Use:</b><br><br><b>A</b> = Consonant sound से पहले<br>✅ a book, a car, a university<br><br><b>AN</b> = Vowel sound से पहले<br>✅ an apple, an hour, an honest man<br><br><b>THE</b> = Specific चीज़ के लिए<br>✅ the sun, the Taj Mahal`;
  }
  if(q.includes('in') && q.includes('on') && q.includes('at')){
    return `<b>In / On / At का Difference:</b><br><br><b>IN</b> = बड़े जगह, महीने, साल<br>✅ in India, in 2025, in the room<br><br><b>ON</b> = सतह पर, दिन, तारीख<br>✅ on the table, on Monday, on 5th Jan<br><br><b>AT</b> = Exact point, समय<br>✅ at home, at 5 PM, at the bus stop`;
  }
  if(q.includes('has') && q.includes('have')){
    return `<b>Has / Have का Use:</b><br><br><b>HAS</b> = He, She, It, Name के साथ<br>✅ He has a car, Ram has money<br><br><b>HAVE</b> = I, You, We, They के साथ<br>✅ I have a book, They have time`;
  }
  if(q.includes('ka english') || q.includes('का इंग्लिश') || q.includes('translate')){
    let hindiText = q.replace(/ka english kya hai|ka english|का इंग्लिश क्या है|translate|का इंग्लिश|ka matlab|का मतलब/gi,'').trim();
    if(hindiText.includes('मैं ठीक हूँ') || hindiText.includes('main thik hun')) return `<b>"मैं ठीक हूँ"</b> = "I am fine" या "I am okay" या "I'm good"<br><br><b>Conversation:</b><br>A: How are you?<br>B: I am fine, thank you. And you?`;
    if(hindiText.includes('तुम कहाँ') || hindiText.includes('tum kahan')) return `<b>"तुम कहाँ जा रहे हो?"</b> = "Where are you going?"<br><br><b>Rule:</b> Where = कहाँ, are you going = जा रहे हो`;
    if(hindiText.includes('धन्यवाद') || hindiText.includes('dhanyawad')) return `<b>"धन्यवाद"</b> = "Thank you" या "Thanks"<br><br><b>Formal:</b> Thank you very much<br><b>Casual:</b> Thanks a lot`;
    if(hindiText.includes('मुझे भूख लगी') || hindiText.includes('bhookh lagi')) return `<b>"मुझे भूख लगी है"</b> = "I am hungry"<br><br><b>Example:</b> I am hungry, let's eat something`;
    if(hindiText.includes('माफ करना') || hindiText.includes('sorry')) return `<b>"माफ करना"</b> = "Sorry" या "Excuse me" या "Pardon"<br><br><b>Example:</b> Sorry, I am late - माफ करना, मैं लेट हूँ`;
    return `बेटा, "<b>${hindiText}</b>" का English बताने के लिए पूरा वाक्य लिखो तो बेहतर समझा पाऊंगी 😊<br><b>Example पूछो:</b><br>1. "मैं ठीक हूँ का English क्या है?"<br>2. "तुम कहाँ जा रहे हो का English"`;
  }
  if(q.includes('how are you')){
    return `<b>"How are you?"</b> = "आप कैसे हो?" / "तुम कैसे हो?"<br><br><b>जवाब दो:</b><br>✅ I am fine - मैं ठीक हूँ<br>✅ I am good - मैं अच्छा हूँ<br>✅ Not bad - बुरा नहीं<br>✅ I am great - मैं बहुत अच्छा हूँ`;
  }
  if(q.includes('what is your name')){
    return `<b>"What is your name?"</b> = "तुम्हारा नाम क्या है?"<br><br><b>जवाब दो:</b><br>✅ My name is Ram - मेरा नाम राम है<br>✅ I am Ram - मैं राम हूँ`;
  }
  return `समझ गई बेटा! 😊<br><br>तुमने पूछा: "<b>${q}</b>"<br><br><b>मैं ये सब सिखा सकती हूँ:</b><br>1. Grammar Rules - is/am/are, has/have, do/does<br>2. Translation - Hindi से English<br>3. Daily Sentences - How are you, Thank you<br>4. Tenses - Present, Past, Future<br><br><b>Example पूछो:</b><br>"I am go सही है या गलत?"<br>"मैं ठीक हूँ का English क्या है?"<br>"in on at का difference"`;
}
