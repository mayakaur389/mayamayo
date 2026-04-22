// quiz.js - Sirf quiz ka logic
import { state, saveState } from './state.js';
import { updateStats, renderDays } from './ui.js';

export function startQuiz(day) {
  // Abhi ke liye simple alert
  alert(`Day ${day} ka quiz start hua 🔥`);
  
  // Test ke liye Day complete mark kar dete hain
  if(!state.done.includes(day)) {
    state.done.push(day);
    state.xp += 10;
    
    // Streak update
    if(state.done.length > state.streak) {
      state.streak = state.done.length;
    }
    
    saveState(); // state.js me save
    renderDays(startQuiz); // ui.js se screen refresh
    updateStats(); // ui.js se XP update
  }
  
  // Yaha baad me asli quiz ka code aayega
  // Abhi ke liye itna hi kaafi hai testing ke liye
}
