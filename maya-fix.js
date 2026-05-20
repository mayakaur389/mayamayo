function openChat() {
  document.getElementById('chat-container').style.display = 'flex';
  document.getElementById('chat-input').focus();
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
  chatBox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

  // api/chat.js ko 'prompt' chahiye, aur wo 'reply' dega
  fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: message })  // 👈 messages ki jagah prompt
  })
  .then(res => res.json())
  .then(data => {
    const reply = data.reply || "Maya chup hai 😅";  // 👈 data.reply use karo
    chatBox.innerHTML += `<div><strong>Maya:</strong> ${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  })
  .catch(err => {
    chatBox.innerHTML += `<div><strong>Error:</strong> ${err.message}</div>`;
  });

  input.value = '';
}
