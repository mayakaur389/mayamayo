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
  arabic_en: {
    btn_login: "تسجيل الدخول",
    btn_language: "اختر اللغة",
    title: "Maya Didi",
    gupshup: "💬 دردش مع مايا",
    wrong: "❌ تدرب على الأسئلة الخاطئة",
    game: "🎧🎤 لعبة الاستماع والمطابقة",
    speaking: "🎤 تدرب على التحدث",
    unit: "الوحدة 1: الأساسيات - 1-30 يوم",
    subtitle: "اختر يومًا وابدأ التعلم"
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

window.onload = () => {
  const savedLang = localStorage.getItem('lang') || 'hindi_en';
  const langSelect = document.getElementById('langSelect');
  if(langSelect){
    langSelect.value = savedLang;
  }
  changeLanguage(savedLang);
}
