const LANGUAGES = {
  'hi-en': { name: "🇮🇳 Hindi → English" },
  'en-hi': { name: "🇬🇧 English → Hindi" },
  'es-en': { name: "🇪🇸 Spanish → English" },
  'fr-en': { name: "🇫🇷 French → English" },
  'ja-en': { name: "🇯🇵 Japanese → English" },
  'de-en': { name: "🇩🇪 German → English" }
};

const WORDS = {
  'hi-en': {
    app_title: "Maya Didi",
    btn_chat: "💬 Maya se Gupshup Karo",
    btn_wrong: "❌ Wrong Questions Practice Karo",
    btn_game: "🎧 Sun Ke Jodo Game",
    btn_speak: "🎤 Bol ke Practice Karo",
    unit_title: "UNIT 1: BASICS - 1-30 DAYS",
    unit_sub: "Day chuno aur seekhna shuru karo",
    lang_title: "Apni Language Chuno",
    wrong_heading: "❌ Galat Sawaal Dobara Sikho",
    wrong_back: "⬅ Wapas Jao",
    wrong_total: "Total",
    game_title: "🎧 Sun Ke Jodo Game",
    game_start: "Shuru Karein",
    speak_title: "🎤 Bol Ke Practice Karo",
    speak_btn: "Record Karo"
  },
  'en-hi': {
    app_title: "Maya Sister",
    btn_chat: "💬 Chat with Maya",
    btn_wrong: "❌ Practice Wrong Questions",
    btn_game: "🎧 Listen & Match Game",
    btn_speak: "🎤 Speaking Practice",
    unit_title: "UNIT 1: BASICS - 1-30 DAYS",
    unit_sub: "Choose a day and start learning",
    lang_title: "Choose Your Language",
    wrong_heading: "❌ Practice Wrong Questions Again",
    wrong_back: "⬅ Go Back",
    wrong_total: "Total",
    game_title: "🎧 Listen & Match Game",
    game_start: "Start",
    speak_title: "🎤 Speaking Practice",
    speak_btn: "Record"
  },
  'es-en': {
    app_title: "Hermana Maya",
    btn_chat: "💬 Chatear con Maya",
    btn_wrong: "❌ Practicar Preguntas Incorrectas",
    btn_game: "🎧 Juego de Escuchar y Emparejar",
    btn_speak: "🎤 Practicar Hablando",
    unit_title: "UNIDAD 1: BÁSICO - 1-30 DÍAS",
    unit_sub: "Elige un día y comienza a aprender",
    lang_title: "Elige tu Idioma",
    wrong_heading: "❌ Practicar Preguntas Incorrectas",
    wrong_back: "⬅ Volver",
    wrong_total: "Total",
    game_title: "🎧 Juego de Escuchar y Emparejar",
    game_start: "Empezar",
    speak_title: "🎤 Practicar Hablando",
    speak_btn: "Grabar"
  },
  'fr-en': {
    app_title: "Sœur Maya",
    btn_chat: "💬 Discuter avec Maya",
    btn_wrong: "❌ Pratiquer les Mauvaises Réponses",
    btn_game: "🎧 Jeu d'Écoute et d'Association",
    btn_speak: "🎤 Pratique Orale",
    unit_title: "UNITÉ 1: BASES - 1-30 JOURS",
    unit_sub: "Choisissez un jour et commencez à apprendre",
    lang_title: "Choisissez votre Langue",
    wrong_heading: "❌ Pratiquer les Mauvaises Réponses",
    wrong_back: "⬅ Retour",
    wrong_total: "Total",
    game_title: "🎧 Jeu d'Écoute et d'Association",
    game_start: "Commencer",
    speak_title: "🎤 Pratique Orale",
    speak_btn: "Enregistrer"
  },
  'ja-en': {
    app_title: "マヤお姉さん",
    btn_chat: "💬 マヤとおしゃべり",
    btn_wrong: "❌ 間違えた問題を練習",
    btn_game: "🎧 聞いて合わせるゲーム",
    btn_speak: "🎤 声に出して練習",
    unit_title: "UNIT 1: 基本 - 1～30日目",
    unit_sub: "日を選んで学習を始めよう",
    lang_title: "言語を選択",
    wrong_heading: "❌ 間違えた問題をもう一度学ぶ",
    wrong_back: "⬅ 戻る",
    wrong_total: "合計",
    game_title: "🎧 聞いて合わせるゲーム",
    game_start: "始める",
    speak_title: "🎤 声に出して練習",
    speak_btn: "録音"
  },
  'de-en': {
    app_title: "Schwester Maya",
    btn_chat: "💬 Mit Maya chatten",
    btn_wrong: "❌ Falsche Fragen Üben",
    btn_game: "🎧 Hören & Zuordnen Spiel",
    btn_speak: "🎤 Sprechübung",
    unit_title: "EINHEIT 1: GRUNDLAGEN - 1-30 TAGE",
    unit_sub: "Wähle einen Tag und beginne zu lernen",
    lang_title: "Wähle deine Sprache",
    wrong_heading: "❌ Falsche Fragen Üben",
    wrong_back: "⬅ Zurück",
    wrong_total: "Gesamt",
    game_title: "🎧 Hören & Zuordnen Spiel",
    game_start: "Starten",
    speak_title: "🎤 Sprechübung",
    speak_btn: "Aufnehmen"
  }
};

let currentLang = localStorage.getItem('maya_lang') || 'hi-en';
function t(key) { return WORDS[currentLang][key] || key; }

function changeLanguage(lang){
  localStorage.setItem('maya_lang', lang);
  window.location.href = "index.html";
}
