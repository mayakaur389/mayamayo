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

    const chatBox = document.getElementById('chat-messages');
    if (chatBox) {
        chatBox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
    }

    fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: message })
    })
    .then(res => res.json())
    .then(data => {
        const reply = data.reply || "Maya chup hai 😅";
        if (chatBox) {
            chatBox.innerHTML += `<div><strong>Maya:</strong> ${reply}</div>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    })
    .catch(err => {
        if (chatBox) {
            chatBox.innerHTML += `<div><strong>Error:</strong> ${err.message}</div>`;
        }
    });

    input.value = '';
}
