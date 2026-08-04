const translations = {
  hindi_en: {
    btn_login: "login karo",
    btn_language: "language chuno",
    title: "Maya Didi",
    //... baaki sab
  },
  en_hindi: {... },
  spanish_en: {... },
  french_en: {... },
  japanese_en: {... },
  german_en: {... }
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
  //... baaki sab id
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
