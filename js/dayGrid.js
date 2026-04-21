function loadDays(){
  let grid = document.getElementById('daysGrid');
  if(!grid) return;
  grid.innerHTML = '';
  
  for(let i = 1; i <= 30; i++){
    let btn = document.createElement('button');
    btn.className = 'day-btn';
    
    // Done days green
    if(state.done.includes(i)){
      btn.classList.add('done');
      // Red badge for wrong count - demo ke liye
      if(i === 1) btn.innerHTML = `<b>${i}</b><small>Day</small><span class="badge">4</span>`;
      else if(i === 3) btn.innerHTML = `<b>${i}</b><small>Day</small><span class="badge">1</span>`;
      else btn.innerHTML = `<b>${i}</b><small>Day</small>`;
    }else{
      btn.innerHTML = `<b>${i}</b><small>Day</small>`;
    }
    
    // Active day - demo ke liye day 4
    if(i === 4) btn.classList.add('active');
    
    btn.onclick = () => openDay(i);
    grid.appendChild(btn);
  }
}
