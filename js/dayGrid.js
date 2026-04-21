function loadDays(){
  let grid = document.getElementById('daysGrid');
  if(!grid) return;

  grid.innerHTML = '';
  LESSONS.forEach(day => {
    let btn = document.createElement('button');
    btn.className = `day-btn ${state.done.includes(day.day) ? 'done' : ''}`;
    btn.onclick = () => openDay(day.day);
    btn.innerHTML = `
      <b>${day.day}</b>
      <small>${day.title}</small>
    `;
    grid.appendChild(btn);
  });
}
  
  for(let i = 1; i <= 30; i++){
    let btn = document.createElement('button');
    btn.className = 'day-btn';
    
    // Done days green
    if(state.done.includes(i)){
      btn.classList.add('done');
    }
    
    // Active day - jo abhi karna hai
    if(i === state.done.length + 1){
      btn.classList.add('active');
    }
    
    btn.innerHTML = `<b>${i}</b><small>Day</small>`;
    btn.onclick = () => openDay(i);
    grid.appendChild(btn);
  }
}
