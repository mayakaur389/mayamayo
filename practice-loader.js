document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);

  if(urlParams.get('practice') === '1'){
    const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));
    if(!practiceQ) return;
    localStorage.removeItem('practiceNow');

    function injectPractice(){
      // Check karo 365 ban gaye ya nahi
      if(window.lessons && window.lessons.length === 365){
        console.log("365 mil gaye, ab overwrite karte hain");

        window.lessons = [{day: "Practice Mode", questions: [practiceQ]}];
        window.currentLessonIndex = 0;
        window.currentQuestionIndex = 0;
        window.showCurrentLesson();
        window.history.replaceState({}, document.title, "index.html");
      } else {
        // Abhi tak nahi bane, 200ms baad phir check karo
        setTimeout(injectPractice, 200);
      }
    }

    injectPractice(); // shuru karo check karna
  }
});
