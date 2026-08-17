document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);

  if(urlParams.get('practice') === '1'){
    const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));
    if(!practiceQ) return;
    localStorage.removeItem('practiceNow');

    setTimeout(()=>{
      if(window.lessons){
        // Day 366 bana do sabse aakhir me
        window.lessons.push({
          day: "Wrong Practice",
          questions: [practiceQ]
        });

        // Sidha usi Day 366 pe le jao
        window.currentLessonIndex = window.lessons.length - 1;
        window.currentQuestionIndex = 0;
        window.showCurrentLesson();
        window.history.replaceState({}, document.title, "index.html");
      }
    }, 2000); // 2 sec wait
  }
});
