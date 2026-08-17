document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);

  if(urlParams.get('practice') === '1'){
    const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));
    if(!practiceQ) return;
    localStorage.removeItem('practiceNow');

    function forcePractice(){
      window.lessons = [{
        day: "Practice Mode",
        questions: [practiceQ]
      }];
      window.currentLessonIndex = 0;
      window.currentQuestionIndex = 0;
      window.showCurrentLesson();
      window.history.replaceState({}, document.title, "index.html");
      console.log("Practice Force Kiya");
    }

    // 2 second baad 2 baar thop do
    setTimeout(forcePractice, 1500);
    setTimeout(forcePractice, 2000);
  }
});
