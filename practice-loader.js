// Ye function normal quiz start karega
function startQuizList(){
  window.showCurrentLesson();
}

// Ye function practice wala question load karega
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

  // normal wala function call
  window.showCurrentLesson();
}

document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);

  if(urlParams.get('practice') === '1'){
    // practice mode hai to 2 sec baad chalao
    setTimeout(runPracticeQuestion, 2000);
  } else {
    // normal mode hai to seedha quiz start
    setTimeout(startQuizList, 1000);
  }
});
