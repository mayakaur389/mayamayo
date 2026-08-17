// Sabse pehle startQuizList ko hijack kar do
const oldStartQuizList = window.startQuizList;

window.startQuizList = function(){
  const urlParams = new URLSearchParams(window.location.search);
  const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));

  // Agar practice mode hai to
  if(urlParams.get('practice') === '1' && practiceQ){
    localStorage.removeItem('practiceNow');

    // lessons ko force overwrite kar do
    window.lessons = [{
      day: "Practice Mode",
      questions: [practiceQ]
    }];
    window.currentLessonIndex = 0;
    window.currentQuestionIndex = 0;

    console.log("Practice Mode ON:", practiceQ);
    window.showCurrentLesson();
    window.history.replaceState({}, document.title, "index.html");
    return; // normal startQuizList mat chalao
  }

  // Nahi to normal chalao
  oldStartQuizList();
}
