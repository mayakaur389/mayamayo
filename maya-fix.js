function openChat() {
    const container = document.getElementById('chat-container');
    if (container) container.style.display = 'flex';
    const input = document.getElementById('chat-input');
    if (input) input.focus();
}

document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    // Tu wala box update kar
    const userBox = document.querySelector('.Tu');
    if (userBox) userBox.innerText = `Tu: ${message}`;

    // Maya wala box
    const mayaBox = document.querySelector('.Maya');

    fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: message })
    })
  fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: message })
})
.then(res => {
    if (!res.ok) {
        return res.json().then(err => { throw new Error(err.error || 'API Error: ' + res.status) });
    }
    return res.json();
})
.then(data => {
    const reply = data.reply || data.error || "Maya chup hai 😅";
    if (mayaBox) {
        mayaBox.innerText = `Maya: ${reply}`;
    }
})
.catch(err => {
    console.error(err);
    if (mayaBox) {
        mayaBox.innerText = `Maya Error: ${err.message}`;
    }
});
   
    input.value = '';
}
