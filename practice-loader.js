function runPracticeQuestion(){
  const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));
  if(!practiceQ) return;

  localStorage.removeItem('practiceNow');

  // lessons load hone ka wait karo
  function waitAndLoad(){
    if(typeof window.lessons === 'undefined'){
      setTimeout(waitAndLoad, 100); // 0.1 sec baad fir check
      return;
    }

    // lessons mil gaya ab practice wala set karo
    window.lessons = [{
      day: "Practice",
      questions: [practiceQ]
    }];
    window.currentLessonIndex = 0;
    window.currentQuestionIndex = 0;
    window.showCurrentLesson();
    window.history.replaceState({}, document.title, "index.html");
  }
  waitAndLoad();
}

document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);

  if(urlParams.get('practice') === '1'){
    runPracticeQuestion();
  }
});
