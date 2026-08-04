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
  },
  spanish_en: {
    btn_login: "Iniciar sesión",
    btn_language: "Idioma",
    title: "Maya Didi",
    gupshup: "💬 Chatea con Maya",
    wrong: "❌ Practicar Preguntas Incorrectas",
    game: "🎧🎤 Juego de Escuchar y Unir",
    speaking: "🎤 Practicar Hablar",
    unit: "UNIDAD 1: BÁSICO - 1-30 DÍAS",
    subtitle: "Elige un día y comienza a aprender"
  },
  french_en: {
    btn_login: "Se connecter",
    btn_language: "Langue",
    title: "Maya Didi",
    gupshup: "💬 Discuter avec Maya",
    wrong: "❌ Pratiquer les Mauvaises Questions",
    game: "🎧🎤 Jeu Écouter et Associer",
    speaking: "🎤 Pratiquer l'Oral",
    unit: "UNITÉ 1: BASES - 1-30 JOURS",
    subtitle: "Choisissez un jour et commencez à apprendre"
  },
  japanese_en: {
    btn_login: "ログイン",
    btn_language: "言語",
    title: "Maya Didi",
    gupshup: "💬 Mayaとチャット",
    wrong: "❌ 間違った問題を練習",
    game: "🎧🎤 聞いてマッチゲーム",
    speaking: "🎤 スピーキング練習",
    unit: "ユニット1: 基礎 - 1-30日目",
    subtitle: "日を選んで学習を始めよう"
  },
  german_en: {
    btn_login: "Anmelden",
    btn_language: "Sprache",
    title: "Maya Didi",
    gupshup: "💬 Chatte mit Maya",
    wrong: "❌ Falsche Fragen Üben",
    game: "🎧🎤 Hören & Zuordnen Spiel",
    speaking: "🎤 Sprechen Üben",
    unit: "EINHEIT 1: GRUNDLAGEN - 1-30 TAGE",
    subtitle: "Wähle einen Tag und fang an zu lernen"
  }
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
}

// page load pe language set
window.onload = () => {
  const savedLang = localStorage.getItem('lang') || 'hindi_en';
  const langSelect = document.getElementById('langSelect');
  if(langSelect){
    langSelect.value = savedLang;
  }
  changeLanguage(savedLang);
}
