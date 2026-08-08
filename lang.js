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
    subtitle: "Day chuno aur seekhna shuru karo",
    quiz_title: "Maya ke Saath Grammar + Quiz",
    q_instruction: "सही अनुवाद करिए",
    q_sample: "मैं रोज स्कूल जाता हूँ"
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
    subtitle: "Elige un día y empieza a aprender",
    quiz_title: "Gramática + Quiz con Maya",
    q_instruction: "Traduce correctamente",
    q_sample: "Yo voy a la escuela todos los días"
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
    subtitle: "Choisissez un jour et commencez à apprendre",
    quiz_title: "Grammaire + Quiz avec Maya",
    q_instruction: "Traduisez correctement",
    q_sample: "Je vais à l'école tous les jours"
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
    subtitle: "日を選んで学習を始めよう",
    quiz_title: "Mayaと一緒に文法＋クイズ",
    q_instruction: "正しく翻訳してください",
    q_sample: "私は毎日学校に行きます"
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
    subtitle: "Wähle einen Tag und fang an zu lernen",
    quiz_title: "Grammatik + Quiz mit Maya",
    q_instruction: "Richtig übersetzen",
    q_sample: "Ich gehe jeden Tag zur Schule"
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
    subtitle: "Escolha um dia e comece a aprender",
    quiz_title: "Gramática + Quiz com Maya",
    q_instruction: "Traduza corretamente",
    q_sample: "Eu vou para a escola todos os dias"
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
    subtitle: "Choose a day and start learning",
    quiz_title: "Grammar + Quiz with Maya",
    q_instruction: "Translate Correctly",
    q_sample: "I go to school daily"
  }
}

// 1. PURA PAGE TRANSLATE KAREGA
function translatePage(t){
  // Method 1: id se
  const setText = (id, text) => { const el = document.getElementById(id); if(el && text) el.innerText = text; }
  setText('btn_login', t.btn_login);
  setText('btn_language', t.btn_language);
  setText('title', t.title);
  setText('unit_title', t.unit);
  setText('unit_sub', t.subtitle);

  // Method 2: data-key se
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if(t[key]) el.innerText = t[key];
  });

  // Method 3: Text dhoond kar badlega - yehi screenshot wala fix karega
  const textMap = {
    "Maya ke Saath Grammar + Quiz": t.quiz_title,
    "Maya se Gupshup Karo": t.gupshup,
    "Galat Questions Practice Karo": t.wrong,
    "Sun Ke Jodo Game": t.game,
    "Bol ke Practice Karo": t.speaking,
    "login karo": t.btn_login,
    "language chuno": t.btn_language,
    "sahi anuvad kariye": t.q_instruction,
    "main roj school jata hun": t.q_sample
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

// 2. WORDDATA SE QUESTION LOAD KAREGA
function loadWordDataQuestions(lang){
  const data = window.wordData?.[lang] || window.wordData?.['hindi_en'];
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

// 3. MAIN FUNCTION
function changeLanguage(lang){
  localStorage.setItem('lang', lang);
  const t = translations[lang] || translations['hindi_en'];

  translatePage(t);
  loadWordDataQuestions(lang);

  // Dropdown ki value set
  const langSelect = document.getElementById('langSelect');
  if(langSelect) langSelect.value = lang;
}

// 4. PAGE LOAD HOTE HI CHALEGA
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'hindi_en';
  changeLanguage(savedLang);

  // Dropdown change listener
  const langSelect = document.getElementById('langSelect');
  if(langSelect){
    langSelect.addEventListener('change', (e) => changeLanguage(e.target.value));
  }
});
