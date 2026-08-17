document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);
  
  if(urlParams.get('practice') === '1'){
    const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));
    
    if(practiceQ){
      localStorage.removeItem('practiceNow');
      
      setTimeout(()=>{
        // 1. lessons array me naya practice wala lesson bana do
        window.lessons = [{
          day: "Practice",
          questions: [practiceQ]
        }];

        // 2. Index reset karo
        window.currentLessonIndex = 0;
        window.currentQuestionIndex = 0;
        window.practiceMode = true;

        // 3. Seedha showCurrentLesson() call karo
        if(typeof window.showCurrentLesson === 'function'){
          window.showCurrentLesson();
        }

        // 4. URL saaf karo
        window.history.replaceState({}, document.title, "index.html");
      }, 1000);
    }
  }
});
