function openChat() {
  // Chat window open kar
  document.getElementById('chat-container').style.display = 'flex';
  document.getElementById('chat-input').focus();
}

// Chat functionality
document.getElementById('chat-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (!message) return;

  // User message show kar
  const chatBox = document.getElementById('chat-messages');
  chatBox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

  // API call
  fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: [
        { role: 'user', content: message }
      ]
    })
  })
  .then(res => res.json())
  .then(data => {
    const reply = data.choices[0].message.content;
    chatBox.innerHTML += `<div><strong>Maya:</strong> ${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  })
  .catch(err => {
    chatBox.innerHTML += `<div><strong>Error:</strong> Something went wrong</div>`;
  });

  input.value = '';
}
