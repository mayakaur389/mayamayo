document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);

  if(urlParams.get('practice') === '1'){
    const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));
    if(!practiceQ) return;
    localStorage.removeItem('practiceNow');

    // 365 load hone ka wait karo
    setTimeout(()=>{
      if(window.lessons && window.lessons[0]){
        window.lessons[0].questions.unshift(practiceQ); // Day 1 me sabse upar jod do

        window.currentLessonIndex = 0;
        window.currentQuestionIndex = 0;
        window.showCurrentLesson();
        window.history.replaceState({}, document.title, "index.html");
        console.log("Wrong question Day 1 me inject ho gaya");
      }
    }, 1500);
  }
});
