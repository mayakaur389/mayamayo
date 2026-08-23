const translations = {
  hindi_en: {
    btn_login: "लॉगिन करो", btn_language: "भाषा चुनो", title: "Maya Didi",
    gupshup: "💬 Maya से गपशप करो", wrong: "❌ गलत Questions दोबारा करो",
    game: "🎧🎤 सुन के जोड़ो Game", speaking: "🎤 बोल के Practice करो",
    unit: "UNIT 1: BASICS - 1-30 दिन", subtitle: "दिन चुनो और सीखना शुरू करो"
  },
  //... baki spanish, french, japanese, german, portuguese waise hi rehne do...

  // YE LINE FIX KIYA - en_hindi -> english_hindi
  english_hindi: {
    btn_login: "Login", btn_language: "Choose Language", title: "Maya Didi",
    gupshup: "💬 Chat with Maya", wrong: "❌ Practice Wrong Questions",
    game: "🎧🎤 Listen & Match Game", speaking: "🎤 Practice Speaking",
    unit: "UNIT 1: BASICS - 1-30 DAYS", subtitle: "Choose a day and start learning"
  }
}

// Baki ka code same
window.currentLang = localStorage.getItem('lang') || 'hindi_en';

function getCurrentLang(){
  return window.currentLang;
}

function translateHomePage(t){
  const setText = (id, text) => { const el = document.getElementById(id); if(el && text) el.innerText = text; }
  setText('btn_login', t.btn_login); setText('btn_language', t.btn_language); setText('title', t.title);
  setText('btn_gupshup', t.gupshup); setText('btn_wrong', t.wrong); setText('btn_game', t.game); setText('btn_speaking', t.speaking);
  setText('unit_title', t.unit); setText('unit_sub', t.subtitle);
}

function loadWrongUI(lang){
  const data = window.wordData?.[lang]?.ui?.wrong;
  if(!data) return;
  const set = (id, txt) => { let e=document.getElementById(id); if(e) e.innerText = txt; }
  set("heading", "❌ " + data.heading);
  set("btn_back", "⬅ " + data.btn_back);
  set("total_text", data.total + ": 0 " + data.questions_text);
  set("no_question_text", data.no_question);
  set("btn_lessons", data.lessonsBtn);
  set("btn_speaking", data.practiceBtn);
  set("btn_listening", data.listenBtn);
}

function changeLanguage(lang){
  window.currentLang = lang;
  localStorage.setItem('lang', lang);

  const t = translations[lang] || translations['hindi_en'];
  translateHomePage(t);
  loadWrongUI(lang);

  const langSelect = document.getElementById('langSelect');
  if(langSelect) langSelect.value = lang;

  if(typeof loadWrongQuestions === "function") loadWrongQuestions();
  if(typeof loadQuiz === "function") loadQuiz();
  if(typeof loadGame === "function") loadGame();
  if(typeof loadSpeaking === "function") loadSpeaking();
}

// FIX: Timeout ki jagah proper wait
function initLang(){
  if(window.wordData){
    changeLanguage(window.currentLang);
  } else {
    setTimeout(initLang, 100); // wordData aane tak wait karega
  }
}
document.addEventListener('DOMContentLoaded', initLang);
