export default async function handler(req, res) {
  if (req.method!== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log("Body aya:", req.body); // 👈 YE LINE ADD KAR

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt missing: ' + JSON.stringify(req.body) }); // 👈 Kya aya wo bata dega
  }

  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  console.log("Key hai?", GROQ_API_KEY? "Haan" : "Nahi"); // 👈 YE LINE ADD KAR

  if (!GROQ_API_KEY) {
    return res.status(500).json({ error: 'Groq API Key Vercel me set nahi hai' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          { role: 'system', content: 'Tera naam Maya hai. Tu ek pyari dost hai. Short me Hindi me reply kar.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.8,
        max_tokens: 200
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Groq Error:", errorText); // 👈 YE LINE ADD KAR
      throw new Error('Groq API failed: ' + errorText);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    res.status(200).json({ reply });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Maya so gayi hai, baad me try kar: ' + error.message });
  }
}
