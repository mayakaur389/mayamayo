document.addEventListener('DOMContentLoaded', function(){
  const urlParams = new URLSearchParams(window.location.search);
  if(urlParams.get('practice') === '1'){
    const practiceQ = JSON.parse(localStorage.getItem('practiceNow'));
    if(practiceQ){
      localStorage.removeItem('practiceNow');
      setTimeout(()=>{
        currentQuestion = practiceQ;
        loadQuestion(); // index.html me ye function already hoga
      }, 1000);
    }
  }
});
