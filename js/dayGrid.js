function loadDays(){
  let grid = document.getElementById('daysGrid');
  if(!grid) return;
  grid.innerHTML = '';
  LESSONS.forEach(lesson => {
    let btn = document.createElement('button');
    btn.className = 'day-btn';

    if(state.done.includes(lesson.day)){
      btn.style.background = 'var(--done)';
      btn.style.color = '#fff';
    }else{
      btn.style.background = lesson.color + '20';
      btn.style.border = `2px solid ${lesson.color}`;
    }

    btn.innerHTML = `<b>${lesson.day}</b><small>${lesson.title}</small>`;
    btn.onclick = () => openDay(lesson.day);
    grid.appendChild(btn);
  });
}
