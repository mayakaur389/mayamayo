const translations = {
  hindi_en: {
    btn_login: "login karo",
    btn_language: "language chuno",
    title: "Maya Didi",
    gupshup: "Maya se Gupshup Karo",
    wrong: "Galat Questions Practice Karo",
    game: "Sun Ke Jodo Game",
    speaking: "Bol ke Practice Karo",
    unit: "UNIT 1: BASICS - 1-30 DAYS",
    subtitle: "Day chuno aur seekhna shuru karo"
  },
  spanish_en: {
    btn_login: "Iniciar sesión",
    btn_language: "Elegir idioma",
    title: "Maya Didi",
    gupshup: "Chatear con Maya",
    wrong: "Practicar preguntas incorrectas",
    game: "Juego de escuchar y unir",
    speaking: "Practicar hablando",
    unit: "UNIDAD 1: BÁSICO - 1-30 DÍAS",
    subtitle: "Elige un día y empieza a aprender"
  },
  french_en: {
    btn_login: "Se connecter",
    btn_language: "Choisir la langue",
    title: "Maya Didi",
    gupshup: "Discuter avec Maya",
    wrong: "Pratiquer les mauvaises questions",
    game: "Jeu écouter et associer",
    speaking: "Pratiquer l'oral",
    unit: "UNITÉ 1: BASES - 1-30 JOURS",
    subtitle: "Choisissez un jour et commencez à apprendre"
  },
  japanese_en: {
    btn_login: "ログイン",
    btn_language: "言語を選択",
    title: "Maya Didi",
    gupshup: "Mayaとおしゃべり",
    wrong: "間違った問題を練習",
    game: "聞いて合わせるゲーム",
    speaking: "スピーキング練習",
    unit: "ユニット1: 基礎 - 1-30日目",
    subtitle: "日を選んで学習を始めよう"
  },
  german_en: {
    btn_login: "Anmelden",
    btn_language: "Sprache wählen",
    title: "Maya Didi",
    gupshup: "Mit Maya chatten",
    wrong: "Falsche Fragen üben",
    game: "Hör- und Zuordnungsspiel",
    speaking: "Sprechen üben",
    unit: "EINHEIT 1: GRUNDLAGEN - 1-30 TAGE",
    subtitle: "Wähle einen Tag und fang an zu lernen"
  },
  en_hindi: {
    btn_login: "Login",
    btn_language: "Choose Language",
    title: "Maya Didi",
    gupshup: "Chat with Maya",
    wrong: "Practice Wrong Questions",
    game: "Listen & Match Game",
    speaking: "Practice Speaking",
    unit: "UNIT 1: BASICS - 1-30 DAYS",
    subtitle: "Choose a day and start learning"
  }
}

// 1. HOME PAGE KE BUTTON TRANSLATE
function translatePage(t){
  const setText = (id, text) => { const el = document.getElementById(id); if(el && text) el.innerText = text; }
  setText('btn_login', t.btn_login);
  setText('btn_language', t.btn_language);
  setText('title', t.title);
  setText('unit_title', t.unit);
  setText('unit_sub', t.subtitle);

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if(t[key]) el.innerText = t[key];
  });

  const textMap = {
    "Maya se Gupshup Karo": t.gupshup,
    "Galat Questions Practice Karo": t.wrong,
    "Sun Ke Jodo Game": t.game,
    "Bol ke Practice Karo": t.speaking
  }

  document.querySelectorAll('h1,h2,h3,h4,p,button,span,label').forEach(el => {
    let txt = el.innerText.trim();
    for(let key in textMap){
      if(txt.toLowerCase().includes(key.toLowerCase())){
        el.innerText = txt.replace(new RegExp(key, 'gi'), textMap[key]);
      }
    }
  })
}

// 2. WRONG PAGE KA PURA UI LOAD KAREGA - YE NAYA HAI
function loadWrongUI(lang){
  const data = window.wordData?.[lang]?.ui?.wrong;
  if(!data) return;

  // Page ke elements ko id dena padega. Agar id nahi hai to text se pakdega
  const setByIdOrText = (selector, text) => {
    const el = document.querySelector(selector);
    if(el && text) el.innerText = text;
  }

  // Tumhare HTML me in id se match karwao ya class se
  setByIdOrText('#wrong_page_title, h1', data.page_title);
  setByIdOrText('#wrong_heading, h2', data.heading);
  setByIdOrText('#btn_start_wrong', data.btn_start);
  setByIdOrText('#btn_back_wrong', data.btn_back);
  setByIdOrText('#total_text', data.total);
  setByIdOrText('#questions_text', data.questions_text);
  setByIdOrText('#no_question_text', data.no_question);
  setByIdOrText('#lessonsBtn', data.lessonsBtn);
  setByIdOrText('#practiceBtn', data.practiceBtn);
  setByIdOrText('#listenBtn', data.listenBtn);
}

// 3. WRONG PAGE KE QUESTION LOAD
function loadWordDataQuestions(lang){
  const data = window.wordData?.[lang];
  if(!data) return;
  const container = document.getElementById('question-box');
  if(container && data.questions){
    container.innerHTML = '';
    data.questions.forEach((item, i) => {
      container.innerHTML += `
        <div class="q-card">
          <div class="q">Q${i+1}: ${item.q}</div>
          <div class="options">
            ${item.a.map(opt => `<button onclick="checkAnswer('${opt}')">${opt}</button>`).join('')}
          </div>
        </div>
      `;
    });
  }
}

// 4. MAIN FUNCTION
function changeLanguage(lang){
  localStorage.setItem('lang', lang);
  const t = translations[lang] || translations['hindi_en'];

  translatePage(t); // Home page
  loadWrongUI(lang); // Wrong page UI
  loadWordDataQuestions(lang); // Wrong page Questions

  const langSelect = document.getElementById('langSelect');
  if(langSelect) langSelect.value = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'hindi_en';
  changeLanguage(savedLang);
  const langSelect = document.getElementById('langSelect');
  if(langSelect){
    langSelect.addEventListener('change', (e) => changeLanguage(e.target.value));
  }
});
