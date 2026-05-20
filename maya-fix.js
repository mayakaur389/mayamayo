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

  // API call - yaha prompt bhejo kyuki api/chat.js me prompt expect kar raha hai
  fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: message })
  })
  .then(res => res.json())
  .then(data => {
    const reply = data.reply || "Maya se reply nahi aaya 😅";
    chatBox.innerHTML += `<div><strong>Maya:</strong> ${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  })
  .catch(err => {
    chatBox.innerHTML += `<div><strong>Error:</strong> ${err.message}</div>`;
  });

  input.value = '';
}
