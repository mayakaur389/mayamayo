function runPracticeQuestion(){
  const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));
  if(!practiceQ) return;

  localStorage.removeItem('practiceNow');

  // Wait karo jab tak lessons load na ho jaye
  const waitForLessons = setInterval(()=>{
    if(typeof window.lessons!== 'undefined'){
      clearInterval(waitForLessons);

      window.lessons = [{
        day: "Practice",
        questions: [practiceQ]
      }];
      window.currentLessonIndex = 0;
      window.currentQuestionIndex = 0;
      window.showCurrentLesson();
      window.history.replaceState({}, document.title, "index.html");
    }
  }, 100);
}

document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);

  if(urlParams.get('practice') === '1'){
    runPracticeQuestion();
  }
});
