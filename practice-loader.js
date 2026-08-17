document.addEventListener('DOMContentLoaded', function(){
  console.log("1. practice-loader loaded");
  
  const urlParams = new URLSearchParams(window.location.search);

  if(urlParams.get('practice') === '1'){
    console.log("2. Practice mode ON");
    
    const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));
    console.log("3. practiceQ:", practiceQ);
    if(!practiceQ) return;

    localStorage.removeItem('practiceNow');

    setTimeout(()=>{
      console.log("4. 500ms baad chal raha hun");
      console.log("5. showCurrentLesson type:", typeof window.showCurrentLesson);

      window.lessons = [{
        day: "Practice Mode",
        questions: [practiceQ]
      }];
      window.currentLessonIndex = 0;
      window.currentQuestionIndex = 0;

      // Agar showCurrentLesson nahi mila to dusra naam try karo
      if(typeof window.showCurrentLesson === 'function'){
        window.showCurrentLesson();
      } else if(typeof window.showQuestion === 'function'){
        window.showQuestion();
      } else if(typeof window.renderQuestion === 'function'){
        window.renderQuestion();
      } else {
        console.error("ERROR: koi bhi show function nahi mila");
      }
      
      window.history.replaceState({}, document.title, "index.html");

    }, 1000); // 500 se badha ke 1000 kiya
  }
});
