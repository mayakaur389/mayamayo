// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.getElementById('theme-toggle').textContent =
        document.body.classList.contains('light-mode')? '☀️' : '🌙';
});

// Main Practice Button
document.getElementById('main-practice-btn').addEventListener('click', () => {
    alert('Practice Mode: Lessons add hone ke baad kaam karega');
});

// Generate Days
function renderDays() {
    const daysGrid = document.getElementById('daysGrid');
    daysGrid.innerHTML = '';

    for (let i = 1; i <= 30; i++) {
        const dayBtn = document.createElement('button');
        dayBtn.className = `day ${i === 1? 'done' : i === 2? 'active' : ''}`;
        dayBtn.innerHTML = i === 1? '1<br>✓' : i === 2? '2<br>Start' : `${i}<br>🔒`;
        if (i > 2) dayBtn.disabled = true;
        daysGrid.appendChild(dayBtn);
    }

    // Day Click Modal
    document.querySelectorAll('.day').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.disabled) return;
            const day = btn.textContent.split('\n')[0];
            showModal(`Day ${day}`, `Day ${day} ke lessons yaha aayenge`);
        });
    });
}

// Modal Functions
function showModal(title, body) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').textContent = body;
    document.getElementById('modal').classList.remove('hidden');
}

document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('modal').classList.add('hidden');
});

document.querySelector('.modal-practice').addEventListener('click', () => {
    alert('Practice shuru! Lessons baad me jodenge');
    document.getElementById('modal').classList.add('hidden');
});

document.querySelector('.modal-ads').addEventListener('click', () => {
    alert('+10 Coins mil gaye! Ad system baad me jodege');
    document.getElementById('modal').classList.add('hidden');
});

// Start
renderDays();
