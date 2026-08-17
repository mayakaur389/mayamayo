document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);
  
  if(urlParams.get('practice') === '1'){
    const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));
    
    if(practiceQ){
      localStorage.removeItem('practiceNow');
      
      setTimeout(()=>{
        // 1. Question ko set karo
        window.currentQuestion = practiceQ; 
        // ya fir
        window.q = practiceQ;

        // 2. Ab function dhoondo aur chalao
        if(typeof window.loadQuestion === 'function'){
          window.loadQuestion();
        } 
        else if(typeof window.startQuiz === 'function'){
          window.startQuiz();
        }
        else if(typeof window.renderQuestion === 'function'){
          window.renderQuestion();
        }
        else if(typeof window.showQuestion === 'function'){
          window.showQuestion();
        }
        else{
          alert("Question load karne wala function nahi mila. index.html check karo");
        }

        // 3. URL saaf karo
        window.history.replaceState({}, document.title, "index.html");
      }, 2000); // 2 sec wait
    }
  }
});
