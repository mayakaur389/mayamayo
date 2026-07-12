// sounds.js - Saare sounds ka boss yahi hai

// 1. Dono awaaz load kar lo
const correctSound = new Audio('/mayamayo/sounds/correct.mp3');
const wrongSound = new Audio('/mayamayo/sounds/wrong.mp3');

// 2. Volume set kar de - 0.0 se 1.0 tak
correctSound.volume = 0.7; // 70% volume
wrongSound.volume = 0.7;   // 70% volume

// 3. Sahi jawab wala function
function playCorrectSound() {
    // Agar pehle se baj rahi ho to reset kar de
    correctSound.currentTime = 0; 
    // Play kar de - .catch() error rokne ke liye
    correctSound.play().catch(function(error) {
        console.log('Correct sound blocked:', error);
    });
}

// 4. Galat jawab wala function
function playWrongSound() {
    wrongSound.currentTime = 0;
    wrongSound.play().catch(function(error) {
        console.log('Wrong sound blocked:', error);
    });
}

console.log('Sounds.js loaded: Ting-Beep ready hai Guru 💯');
