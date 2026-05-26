export default async function handler(req, res) {
  if (req.method!== 'POST') {
    return res.status(405).json({ reply: 'Method Not Allowed' });
  }

  try {
    const { messages } = req.body;
    const GROQ_API_KEY = process.env.GROQ_API_KEY;

    if (!GROQ_API_KEY) {
      return res.status(500).json({ reply: "Maya so rahi hai bhai 😅. GROQ_API_KEY set nahi hai." });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: 'Tera naam Maya Didi hai. Tu ek AI teacher hai. Hindi me baat karti hai. Baccho ko English sikhane me help karti hai.' },
         ...messages
        ],
        temperature: 0.8,
        max_tokens: 300
      })
    });

    if (!response.ok) {
      throw new Error('Groq API failed');
    }

    const data = await response.json();
    return res.status(200).json({ reply: data.choices[0].message.content });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ reply: "Maya so rahi hai bhai 😅. GROQ_API_KEY check kar ya API down hai." });
  }
}
