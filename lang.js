const translations = {
  hindi_en: {
    btn_login: "login karo", btn_language: "language chuno", title: "Maya Didi",
    gupshup: "💬 Maya se Gupshup Karo", wrong: "❌ Galat Questions Practice Karo",
    game: "🎧🎤 Sun Ke Jodo Game", speaking: "🎤 Bol ke Practice Karo",
    unit: "UNIT 1: BASICS - 1-30 DAYS", subtitle: "Day chuno aur seekhna shuru karo"
  },
  spanish_en: {
    btn_login: "Iniciar sesión", btn_language: "Elegir idioma", title: "Maya Didi",
    gupshup: "💬 Chatear con Maya", wrong: "❌ Practicar preguntas incorrectas",
    game: "🎧🎤 Juego de escuchar y unir", speaking: "🎤 Practicar hablando",
    unit: "UNIDAD 1: BÁSICO - 1-30 DÍAS", subtitle: "Elige un día y empieza a aprender"
  },
  french_en: {
    btn_login: "Se connecter", btn_language: "Choisir la langue", title: "Maya Didi",
    gupshup: "💬 Discuter avec Maya", wrong: "❌ Pratiquer les mauvaises questions",
    game: "🎧🎤 Jeu écouter et associer", speaking: "🎤 Pratiquer l'oral",
    unit: "UNITÉ 1: BASES - 1-30 JOURS", subtitle: "Choisissez un jour et commencez à apprendre"
  },
  japanese_en: {
    btn_login: "ログイン", btn_language: "言語を選択", title: "Maya Didi",
    gupshup: "💬 Mayaとおしゃべり", wrong: "❌ 間違った問題を練習",
    game: "🎧🎤 聞いて合わせるゲーム", speaking: "🎤 スピーキング練習",
    unit: "ユニット1: 基礎 - 1-30日目", subtitle: "日を選んで学習を始めよう"
  },
  german_en: {
    btn_login: "Anmelden", btn_language: "Sprache wählen", title: "Maya Didi",
    gupshup: "💬 Mit Maya chatten", wrong: "❌ Falsche Fragen üben",
    game: "🎧🎤 Hör- und Zuordnungsspiel", speaking: "🎤 Sprechen üben",
    unit: "EINHEIT 1: GRUNDLAGEN - 1-30 TAGE", subtitle: "Wähle einen Tag und fang an zu lernen"
  },
  portuguese_en: {
    btn_login: "Entrar", btn_language: "Escolher idioma", title: "Maya Didi",
    gupshup: "💬 Bate-papo com Maya", wrong: "❌ Praticar perguntas erradas",
    game: "🎧🎤 Jogo de ouvir e combinar", speaking: "🎤 Praticar fala",
    unit: "UNIDADE 1: BÁSICO - 1-30 DIAS", subtitle: "Escolha um dia e comece a aprender"
  },
  en_hindi: {
    btn_login: "Login", btn_language: "Choose Language", title: "Maya Didi",
    gupshup: "💬 Chat with Maya", wrong: "❌ Practice Wrong Questions",
    game: "🎧🎤 Listen & Match Game", speaking: "🎤 Practice Speaking",
    unit: "UNIT 1: BASICS - 1-30 DAYS", subtitle: "Choose a day and start learning"
  }
}

// GLOBAL LANG - SAB FILE ISKO USE KARENGE
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
  document.getElementById("heading") && (document.getElementById("heading").innerText = "❌ " + data.heading);
  document.getElementById("btn_back") && (document.getElementById("btn_back").innerText = "⬅ " + data.btn_back);
  document.getElementById("total_text") && (document.getElementById("total_text").innerText = data.total + ": 0 " + data.questions_text);
  document.getElementById("no_question_text") && (document.getElementById("no_question_text").innerText = data.no_question);
  document.getElementById("btn_lessons") && (document.getElementById("btn_lessons").innerText = data.lessonsBtn);
  document.getElementById("btn_speaking") && (document.getElementById("btn_speaking").innerText = data.practiceBtn);
  document.getElementById("btn_listening") && (document.getElementById("btn_listening").innerText = data.listenBtn);
}

function changeLanguage(lang){
  window.currentLang = lang; // GLOBAL ME SAVE
  localStorage.setItem('lang', lang); // BROWSER ME SAVE

  const t = translations[lang] || translations['hindi_en'];
  translateHomePage(t);
  loadWrongUI(lang);

  // DROPDOWN SYNC
  const langSelect = document.getElementById('langSelect');
  if(langSelect) langSelect.value = lang;

  // SAB PAGE KE FUNCTION CALL KAR DO
  if(typeof loadWrongQuestions === "function"){ loadWrongQuestions(); }
  if(typeof loadQuiz === "function"){ loadQuiz(); }
  if(typeof loadGame === "function"){ loadGame(); }
  if(typeof loadSpeaking === "function"){ loadSpeaking(); }
}

// PAGE LOAD HOTE HI LAST WALI LANGUAGE LAGA DO
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    changeLanguage(window.currentLang);
  }, 200); // words.js ka wait
});
