document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);

  if(urlParams.get('practice') === '1'){
    const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));
    if(!practiceQ) return;
    localStorage.removeItem('practiceNow');

    // 1.5 sec wait karo jab tak 365 load na ho jaye
    setTimeout(()=>{
      // Day 1 ke questions ke sabse pehle apna question jod do
      if(window.lessons && window.lessons[0]){
        window.lessons[0].questions.unshift(practiceQ); // unshift = sabse aage jodna

        window.currentLessonIndex = 0;
        window.currentQuestionIndex = 0; // 0 pe wahi question hoga

        window.showCurrentLesson();
        window.history.replaceState({}, document.title, "index.html");
        console.log("Practice question Day 1 me inject ho gaya");
      }
    }, 1500); // 1.5 second
  }
});
