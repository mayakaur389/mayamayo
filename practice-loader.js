document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);

  if(urlParams.get('practice') === '1'){
    const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));
    if(!practiceQ) return;
    localStorage.removeItem('practiceNow');

    // lessons.js ko block kar do
    Object.defineProperty(window, 'lessons', {
      get: function(){
        return [{day: "Practice Mode", questions: [practiceQ]}];
      },
      set: function(){
        console.log("lessons.js ko block kar diya");
      }
    });

    // 3 second baad zabardasti chalao
    setTimeout(()=>{
      window.currentLessonIndex = 0;
      window.currentQuestionIndex = 0;
      window.showCurrentLesson();
      window.history.replaceState({}, document.title, "index.html");
    }, 3000);
  }
});
