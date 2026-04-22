function loadDays(){
  let grid = document.getElementById('daysGrid');
  grid.innerHTML = '';

  LESSONS.forEach((lesson) => {
    let btn = document.createElement('button');
    let dayNum = lesson.day;

    let isDone = state.done.includes(dayNum);
    let isUnlocked = dayNum === 1 || state.done.includes(dayNum - 1);

    btn.className = 'btn-day';
    btn.style.position = 'relative';
    
    btn.innerHTML = `
      <div style="font-size:18px;font-weight:700">${dayNum}</div>
      <div style="font-size:10px;opacity:.7">Day</div>
    `;

    if(isDone){
      btn.classList.add('done');
      btn.innerHTML += `<div style="position:absolute;top:2px;right:2px;font-size:12px">✅</div>`;
      btn.onclick = () => startQuiz(dayNum);
    }
    else if(isUnlocked){
      btn.classList.add('unlocked');
      btn.onclick = () => startQuiz(dayNum);
    }
    else {
      btn.classList.add('locked');
      btn.style.opacity = '0.4';
      btn.innerHTML += `<div style="position:absolute;top:2px;right:2px;font-size:12px">🔒</div>`;
      btn.onclick = () => {
        alert('Pehle Day ' + (dayNum-1) + ' complete karo 😊');
      };
    }

    grid.appendChild(btn);
  });
}
