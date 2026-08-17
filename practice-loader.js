function runPracticeQuestion(){
  const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));
  if(!practiceQ) return;

  localStorage.removeItem('practiceNow');

  // lessons ko 1 question wala bana do
  window.lessons = [{
    day: "Practice",
    questions: [practiceQ]
  }];

  window.currentLessonIndex = 0;
  window.currentQuestionIndex = 0;

  // normal wala hi function call karo
  window.showCurrentLesson();
}

document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);

  if(urlParams.get('practice') === '1'){
    // 2.5 sec wait karo taaki lessons.js load ho jaye
    setTimeout(runPracticeQuestion, 2500);
  } else {
    // Normal quiz ke liye
    if(typeof window.startQuizList === 'function'){
      window.startQuizList();
    } else {
      // agar function nahi hai to normal showCurrentLesson chala do
      window.showCurrentLesson();
    }
  }
});
