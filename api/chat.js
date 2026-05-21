export default async function handler(req, res) {
  if (req.method!== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { prompt } = req.body;

  if (!prompt) return res.status(400).json({ error: 'Prompt missing' });

  const GROQ_API_KEY = process.env.GROQ_API_KEY; // Vercel me key daalni padegi

  if (!GROQ_API_KEY) {
    return res.status(500).json({ error: 'API Key missing' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192', // Groq ka fast model
        messages: [
          { role: 'system', content: 'Tera naam Maya hai. Tu ek pyari dost hai. Short me Hindi me reply kar.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.8,
        max_tokens: 200
      })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;

    res.status(200).json({ reply });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Maya so gayi hai' });
  }
}
