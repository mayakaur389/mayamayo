export const state = JSON.parse(localStorage.getItem('mayaDidi')) || {
  xp: 260,
  hearts: 1, 
  streak: 11,
  done: [1,2,3,4,5,6,7,8,9,10]
};

export function saveState() {
  localStorage.setItem('mayaDidi', JSON.stringify(state));
}
