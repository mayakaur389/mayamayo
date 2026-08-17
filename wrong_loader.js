document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);

  if(urlParams.get('practice') === '1'){
    const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));
    if(!practiceQ) return;
    localStorage.removeItem('practiceNow');

    let injected = false; // 1 baar hi inject ho

    function forceInject(){
      // Jab tak 365 hai tab tak maarte raho
      if(window.lessons && window.lessons.length === 365 &&!injected){
        console.log("PAKAD LIYA! Ab inject kar rahe");

        window.lessons = [{day: "Wrong Practice", questions: [practiceQ]}];
        window.currentLessonIndex = 0;
        window.currentQuestionIndex = 0;
        window.showCurrentLesson();
        window.history.replaceState({}, document.title, "index.html");
        injected = true; // ab aur mat karna
        return;
      }

      if(!injected){
        setTimeout(forceInject, 300); // 300ms baad phir try karo
      }
    }
    forceInject(); // shuru karo
  }
});
