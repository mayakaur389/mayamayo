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

// YE NAYA FUNCTION - word.js se question load karega
function loadQuestions(lang){
  // word.js me wordData naam ka object hona chahiye
  const questions = window.wordData?.[lang] || window.wordData?.['hindi_en'] || [];
  const container = document.getElementById('question-box'); // tumhare question wale div ka id

  if(!container) return; // agar question page nahi hai to skip
  container.innerHTML = ''; // purana saaf

  questions.forEach((item, i) => {
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

  // data-key wale sabko bhi badal do - ye naya add kiya
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if(t[key]) el.innerText = t[key];
  });

  const langSelect = document.getElementById('langSelect');
  if(langSelect) langSelect.value = lang;

  // YE NAYI LINE - Question bhi load karo
  loadQuestions(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'hindi_en';
  changeLanguage(savedLang);
});
