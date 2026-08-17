document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);

  // Sirf tab kaam karo jab practice=1 ho
  if(urlParams.get('practice') === '1'){
    const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));
    if(!practiceQ) return;

    localStorage.removeItem('practiceNow');

    // 500ms wait karo taaki startQuizList pehle khatam ho jaye
    setTimeout(()=>{

      // lessons ko force replace kar do
      window.lessons = [{
        day: "Practice Mode",
        questions: [practiceQ]
      }];
      window.currentLessonIndex = 0;
      window.currentQuestionIndex = 0;

      // ab zabardasti showCurrentLesson chalao
      window.showCurrentLesson();
      window.history.replaceState({}, document.title, "index.html");

    }, 500); // 0.5 sec ka delay
  }
});
