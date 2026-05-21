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

async function sendMessage() { 
  const input = document.getElementById('chat-input'); 
  const message = input.value.trim(); 
  if (!message) return; 

  // Tu wala box update kar
  const userBox = document.querySelector('.Tu'); 
  if (userBox) userBox.innerText = `Tu: ${message}`; 

  // Maya wala box
  const mayaBox = document.querySelector('.Maya'); 
  if (mayaBox) mayaBox.innerText = `Maya: Soch rahi hu...`;

  input.value = ''; // Input khali kar de

  try {
    // ✅ 1 hi fetch hai ab. Vercel wala
    const response = await fetch('https://mayamayo.vercel.app/api/chat', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ prompt: message }) // ✅ `prompt` key sahi hai
    }); 

    const data = await response.json(); // ✅ Yaha reply aayega

    if (data.error) { 
      if (mayaBox) mayaBox.innerText = `Maya: ${data.error}`; 
      return; 
    } 

    // ✅ `data.reply` se undefined khatam
    if (mayaBox) { 
      mayaBox.innerText = `Maya: ${data.reply}`; 
    } 

  } catch (err) { 
    console.error(err); 
    if (mayaBox) { 
      mayaBox.innerText = `Maya Error: ${err.message}`; 
    } 
  } 
}
