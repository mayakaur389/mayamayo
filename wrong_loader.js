document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);

  if(urlParams.get('practice') === '1'){
    const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));
    if(!practiceQ) return;
    localStorage.removeItem('practiceNow');

    // 1. lessons.js ke showCurrentLesson ko pakad lo
    const oldShow = window.showCurrentLesson;

    window.showCurrentLesson = function(){
      // 2. Jab bhi lessons.js bulaye, hum pehle Day 366 thop denge
      if(window.lessons &&!window.lessons.find(d => d.day === "Wrong Practice")){
        window.lessons.push({
          day: "Wrong Practice",
          questions: [practiceQ]
        });
        window.currentLessonIndex = window.lessons.length - 1;
        window.currentQuestionIndex = 0;
        window.history.replaceState({}, document.title, "index.html");
      }
      // 3. Phir normal wala function chala do
      oldShow();
    };

    // 4. Pehli baar khud chala do
    setTimeout(()=> window.showCurrentLesson(), 1000);
  }
});
