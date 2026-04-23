import { updateStats, renderDays } from './ui.js';
import { startQuiz } from './quiz.js';

document.addEventListener('DOMContentLoaded', () => {
  updateStats();
  renderDays(startQuiz);
});
