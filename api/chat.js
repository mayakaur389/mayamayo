export default async function handler(req, res) {
  // CORS headers sabse upar
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // OPTIONS request ko turant 200 de
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method!== 'POST') {
    return res.status(405).json({ reply: 'Method Not Allowed' });
  }

  const { prompt } = req.body;
  const API_KEY = process.env.GROQ_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ reply: "Maya Didi: API Key nahi mila 😭" });
  }

  const url = 'https://api.groq.com/openai/v1/chat/completions';
  const payload = {
    model: 'llama-3.3-70b-versatile',
    messages: [
      {
        role: 'user',
        content: `Tu Maya Didi hai. Hinglish me reply kar. User: ${prompt}`
      }
    ]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (data.error) {
      return res.status(500).json({ reply: `Groq Error: ${data.error.message}` });
    }

    const answer = data?.choices?.[0]?.message?.content || "Maya chup hai";
    res.status(200).json({ reply: answer });
  } catch (error) {
    res.status(500).json({ reply: 'Server error: ' + error.message });
  }
}
