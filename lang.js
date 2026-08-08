const translations = {
  hindi_en: {
    btn_login: "login karo",
    btn_language: "language chuno",
    title: "Maya Didi",
    gupshup: "💬 Maya se Gupshup Karo",
    wrong: "❌ Galat Questions Practice Karo",
    game: "🎧🎤 Sun Ke Jodo Game",
    speaking: "🎤 Bol ke Practice Karo",
    unit: "UNIT 1: BASICS - 1-30 DAYS",
    subtitle: "Day chuno aur seekhna shuru karo"
  },
  spanish_en: {
    btn_login: "Iniciar sesión",
    btn_language: "Elegir idioma",
    title: "Maya Didi",
    gupshup: "💬 Chatear con Maya",
    wrong: "❌ Practicar preguntas incorrectas",
    game: "🎧🎤 Juego de escuchar y unir",
    speaking: "🎤 Practicar hablando",
    unit: "UNIDAD 1: BÁSICO - 1-30 DÍAS",
    subtitle: "Elige un día y empieza a aprender"
  },
  french_en: {
    btn_login: "Se connecter",
    btn_language: "Choisir la langue",
    title: "Maya Didi",
    gupshup: "💬 Discuter avec Maya",
    wrong: "❌ Pratiquer les mauvaises questions",
    game: "🎧🎤 Jeu écouter et associer",
    speaking: "🎤 Pratiquer l'oral",
    unit: "UNITÉ 1: BASES - 1-30 JOURS",
    subtitle: "Choisissez un jour et commencez à apprendre"
  },
  japanese_en: {
    btn_login: "ログイン",
    btn_language: "言語を選択",
    title: "Maya Didi",
    gupshup: "💬 Mayaとおしゃべり",
    wrong: "❌ 間違った問題を練習",
    game: "🎧🎤 聞いて合わせるゲーム",
    speaking: "🎤 スピーキング練習",
    unit: "ユニット1: 基礎 - 1-30日目",
    subtitle: "日を選んで学習を始めよう"
  },
  german_en: {
    btn_login: "Anmelden",
    btn_language: "Sprache wählen",
    title: "Maya Didi",
    gupshup: "💬 Mit Maya chatten",
    wrong: "❌ Falsche Fragen üben",
    game: "🎧🎤 Hör- und Zuordnungsspiel",
    speaking: "🎤 Sprechen üben",
    unit: "EINHEIT 1: GRUNDLAGEN - 1-30 TAGE",
    subtitle: "Wähle einen Tag und fang an zu lernen"
  },
  portuguese_en: {
    btn_login: "Entrar",
    btn_language: "Escolher idioma",
    title: "Maya Didi",
    gupshup: "💬 Bate-papo com Maya",
    wrong: "❌ Praticar perguntas erradas",
    game: "🎧🎤 Jogo de ouvir e combinar",
    speaking: "🎤 Praticar fala",
    unit: "UNIDADE 1: BÁSICO - 1-30 DIAS",
    subtitle: "Escolha um dia e comece a aprender"
  },
  en_hindi: {
    btn_login: "Login",
    btn_language: "Choose Language",
    title: "Maya Didi",
    gupshup: "💬 Chat with Maya",
    wrong: "❌ Practice Wrong Questions",
    game: "🎧🎤 Listen & Match Game",
    speaking: "🎤 Practice Speaking",
    unit: "UNIT 1: BASICS - 1-30 DAYS",
    subtitle: "Choose a day and start learning"
  }
}

// KEY MAPPING: lang.js ke key -> words.js ke key
const keyMap = {
  'hindi_en': 'hindi-english',
  'spanish_en': 'spanish-english',
  'french_en': 'french-english',
  'japanese_en': 'ja',
  'german_en': 'de',
  'portuguese_en': 'portuguese-english',
  'en_hindi': 'english-hindi'
}

function loadWrongUI(lang){
  const mappedKey = keyMap[lang] || 'hindi-english';
  const data = window.langData?.[mappedKey]?.wrong;
  if(!data) return;

  document.getElementById("heading").innerText = "❌ " + data.heading;
  document.getElementById("btn_back").innerText = "⬅ " + data.btn_back;
  document.getElementById("total_text").innerText = data.total + " " + data.questions_text;
  document.getElementById("no_question_text").innerText = data.no_question;
  document.getElementById("btn_lessons").innerText = data.lessonsBtn;
  document.getElementById("btn_speaking").innerText = data.practiceBtn;
  document.getElementById("btn_listening").innerText = data.listenBtn;
}

function changeLanguage(lang){
  localStorage.setItem('lang', lang);
  const t = translations[lang] || translations['hindi_en'];
  if(!t) return;

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if(el && text) el.innerText = text;
  }

  setText('btn_login', t.btn_login);
  setText('btn_language', t.btn_language);
  setText('title', t.title);
  setText('btn_gupshup', t.gupshup);
  setText('btn_wrong', t.wrong);
  setText('btn_game', t.game);
  setText('btn_speaking', t.speaking);
  setText('unit_title', t.unit);
  setText('unit_sub', t.subtitle);

  loadWrongUI(lang); // Wrong page ka UI bhi yahi se change hoga

  if(typeof loadWrongQuestions === "function"){
    loadWrongQuestions('speaking', lang);
  }

  const langSelect = document.getElementById('langSelect');
  if(langSelect) langSelect.value = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'hindi_en';
  changeLanguage(savedLang);
  const langSelect = document.getElementById('langSelect');
  if(langSelect) langSelect.addEventListener('change', (e) => changeLanguage(e.target.value));
});
