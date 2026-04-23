// User ka data
let userData = {
    hearts: 1,
    streak: 11,
    xp: 260,
    unlockedDay: 2
}

// UI Update
function updateStats() {
    document.getElementById('hearts').textContent = userData.hearts;
    document.getElementById('streak').textContent = userData.streak;
    document.getElementById('xp').textContent = userData.xp;
}

// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.getElementById('theme-toggle').textContent =
        document.body.classList.contains('light-mode')? '☀️' : '🌙';
});

// Heart Check - Ye sabse important hai
function checkHearts() {
    if (userData.hearts <= 0) {
        showHeartModal();
        return false; // Practice band
    }
    return true; // Practice chalu
}

// Main Practice Button
document.getElementById('main-practice-btn').addEventListener('click', () => {
    if (checkHearts()) {
        alert('Practice Mode: Lessons add hone ke baad kaam karega');
    }
});

// Generate Days
function renderDays() {
    const daysGrid = document.getElementById('daysGrid');
    daysGrid.innerHTML = '';

    for (let i = 1; i <= 30; i++) {
        const dayBtn = document.createElement('button');
        dayBtn.className = `day ${i < userData.unlockedDay? 'done' : i === userData.unlockedDay? 'active' : ''}`;
        dayBtn.innerHTML = i < userData.unlockedDay? `${i}<br>✓` : i === userData.unlockedDay? `${i}<br>Start` : `${i}<br>🔒`;
        if (i > userData.unlockedDay) dayBtn.disabled = true;
        
        // Day pe click
        dayBtn.addEventListener('click', () => {
            if (dayBtn.disabled) return;
            startLesson(i); // Heart check yahi hoga
        });
        
        daysGrid.appendChild(dayBtn);
    }
}

// Lesson/Practice Start Karo
function startLesson(day) {
    if (checkHearts()) {
        showModal(`Day ${day}`, `Day ${day} ke lessons yaha aayenge. Lessons add karne ke baad chalu hoga.`);
    }
}

// Heart Khatam Wala Modal
function showHeartModal() {
    document.getElementById('modal-title').textContent = 'Oh no! Hearts khatam 😢';
    document.getElementById('modal-body').textContent = 'Practice karne ke liye heart chahiye. Ad dekho aur 1 heart pao.';
    document.querySelector('.modal-practice').style.display = 'none';
    document.querySelector('.modal-ads').textContent = '📺 Ad Dekho +1 Heart';
    document.getElementById('modal').classList.remove('hidden');
}

// Normal Modal
function showModal(title, body) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').textContent = body;
    document.querySelector('.modal-practice').style.display = 'block';
    document.querySelector('.modal-practice').textContent = '📝 Lesson Shuru Karo';
    document.querySelector('.modal-ads').textContent = '📺 Ad Dekho +10 XP';
    document.getElementById('modal').classList.remove('hidden');
}

// Modal Close
document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('modal').classList.add('hidden');
});

// Modal ke Practice Button
document.querySelector('.modal-practice').addEventListener('click', () => {
    if (checkHearts()) {
        alert('Lesson shuru! Galat answer pe heart katega');
        // userData.hearts--; // Baad me quiz me jod denge
        updateStats();
        document.getElementById('modal').classList.add('hidden');
    }
});

// Modal ke Ads Button
document.querySelector('.modal-ads').addEventListener('click', () => {
    if (userData.hearts <= 0) {
        userData.hearts = 1;
        alert('❤️ +1 Heart mil gaya! Ab practice karo');
    } else {
        userData.xp += 10;
        alert('+10 XP mil gaye!');
    }
    updateStats();
    document.getElementById('modal').classList.add('hidden');
});

// Start
updateStats();
renderDays();
