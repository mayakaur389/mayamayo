import { state, saveState } from './state.js';
import { updateStats, renderDays } from './ui.js';

export function startQuiz(day) {
  alert(`Day ${day} ka quiz khulega 🔥`);
  if(!state.done.includes(day)) {
    state.done.push(day);
    state.xp += 10;
    if(state.done.length > state.streak) state.streak = state.done.length;
    saveState();
    renderDays(startQuiz);
    updateStats();
  }
}
