let CURRENT_FILTER = 'speaking';

function speak(text){
  if(!text) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang='en-US';
  u.rate=0.9;
  speechSynthesis.speak(u);
}

function setTab(id){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Language lene ke liye
function getCurrentLang(){
  return window.currentLang || localStorage.getItem('lang') || 'hindi_en';
}

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('btn_lessons').onclick=()=>{CURRENT_FILTER='day_quiz';setTab('btn_lessons');loadWrongQuestions();}
  document.getElementById('btn_speaking').onclick=()=>{CURRENT_FILTER='speaking';setTab('btn_speaking');loadWrongQuestions();}
  document.getElementById('btn_listening').onclick=()=>{CURRENT_FILTER='listening';setTab('btn_listening');loadWrongQuestions();}

  // NAYA BUTTON ADD KARO - "Pura Set Practice Karo"
  document.getElementById('btn_lessons_practice').onclick = () => practiceWrongSet('day_quiz');
  document.getElementById('btn_speaking_practice').onclick = () => practiceWrongSet('speaking');
  document.getElementById('btn_listening_practice').onclick = () => practiceWrongSet('listening');

  setTimeout(() => {
    loadWrongQuestions();
    setTab('btn_speaking');
  }, 150);
});

function getTranslation(lang, englishQ, englishA){
  const baseLang = 'en_hindi';
  const baseQ = window.wordData?.[baseLang]?.questions?.find(x => x.ans === englishA);
  const targetQ = window.wordData?.[lang]?.questions?.find(x => x.ans === baseQ?.ans);

  return {
    q: targetQ? targetQ.q : englishQ,
    a: targetQ? targetQ.a : englishA
  }
}

function loadWrongQuestions(){
  const lang = getCurrentLang();
  const all = JSON.parse(localStorage.getItem('wrongQuestions'))||[];
  const list = all.filter(q=> (q.type||'day_quiz') === CURRENT_FILTER );
  const d = window.wordData?.[lang]?.ui?.wrong || window.wordData?.['hindi_en']?.ui?.wrong;

  if(!d) return;

  document.getElementById('total_text').innerText = `${d.total}: ${list.length} ${d.questions_text}`;
  document.getElementById('btn_clear_all').style.display = list.length > 0? 'block' : 'none';

  // NAYA: Count bhi update karo
  document.getElementById('lesson-count').innerText = all.filter(q=>(q.type||'day_quiz')==='day_quiz').length;
  document.getElementById('speak-count').innerText = all.filter(q=>(q.type||'day_quiz')==='speaking').length;
  document.getElementById('game-count').innerText = all.filter(q=>(q.type||'day_quiz')==='listening').length;

  const div = document.getElementById('wrong-list');
  if(list.length===0){
    div.innerHTML=`<div class="empty">${d.no_question}</div>`;
    return;
  }
  div.innerHTML='';

  list.forEach((q,i)=>{
    const tr = getTranslation(lang, q.question, q.correctAnswer);

    let html=`<div class="question-card">`;
    if(q.type==='day_quiz') html+=`<span class="tag tag-day">DAY QUIZ</span><h4>${q.title||'Lesson'}</h4><p><b>Q:</b> ${tr.q}</p><p style="color:#ff4b4b">Tumhara: ${q.userAnswer}</p><p style="color:#22c55e">Sahi: ${tr.a}</p>`;

    if(q.type==='listening') html+=`<span class="tag tag-listen">👂 LISTENING</span><h4>${q.title||'Listening'}</h4><p>🔊 <b>Audio:</b> "${q.audioText}"</p><p style="color:#ff4b4b">Tumne chuna: ${q.userHindiChoice}</p><p style="color:#22c55e">Sahi: ${tr.a}</p>`;

    if(q.type==='speaking' ||!q.type) html+=`<span class="tag tag-speak">SPEAKING</span><h4>🗣️ ${q.title||'Practice'}</h4><p><b>Bolo:</b> ${tr.q}</p><p style="color:#ff4b4b">Tumne bola: ${q.userAnswer}</p><p style="color:#22c55e">Sahi: ${tr.a}</p>`;

    html+=`<button class="practice-btn practice-again-btn" data-text='${JSON.stringify(q.audioText||q.question).replace(/'/g,"&#39;")}'>🔁 Ek Baar Suno</button>`;
    html+=`<button class="practice-btn delete-btn" data-i="${i}" style="background:#475569;margin-top:8px;">🗑️ Delete Karo</button></div>`;
    div.innerHTML+=html;
  });
}

// NAYA FUNCTION: PURA SET PRACTICE KARNE KE LIYE
function practiceWrongSet(type){
  const all = JSON.parse(localStorage.getItem('wrongQuestions'))||[];
  const filtered = all.filter(q=> (q.type||'day_quiz') === type);

  if(filtered.length === 0){
    alert("Isme koi galat question nahi hai");
    return;
  }

  // Pura set bhej do
  localStorage.setItem('practiceNowSet', JSON.stringify(filtered));
  localStorage.setItem('practiceMode', type);

  window.location.href = 'practice-only.html';
}

document.addEventListener('click',e=>{
  if(e.target.classList.contains('practice-again-btn')) speak(JSON.parse(e.target.dataset.text));
  if(e.target.classList.contains('delete-btn')){
    let all=JSON.parse(localStorage.getItem('wrongQuestions'))||[];
    let list=all.filter(q=>(q.type||'day_quiz')===CURRENT_FILTER);
    let idx=all.indexOf(list[e.target.dataset.i]);
    all.splice(idx,1);
    localStorage.setItem('wrongQuestions',JSON.stringify(all));
    loadWrongQuestions();
  }
});

function clearAllWrong(){
  if(confirm("Pakka saare galat questions delete karne hain?")){
    localStorage.removeItem('wrongQuestions');
    loadWrongQuestions();
  }
}
