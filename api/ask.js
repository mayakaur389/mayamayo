export default async function handler(req, res) {
  if (req.method!== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { question } = req.body;
  const API_KEY = process.env.GEMINI_API_KEY;

  const MAYA_PROMPT = `You are Maya Didi, an English teacher from Bihar.
  Your student asked: "${question}"
  Rules:
    1. Reply in simple Hinglish only.
    2. Use examples from daily life in Bihar.
    3. If user asks non-English stuff, politely say you only teach English.
    4. Keep answer under 100 words.
  Now answer:`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: MAYA_PROMPT }] }]
      })
    });

    const data = await response.json();
    const answer = data.candidates[0].content.parts[0].text;
    res.status(200).json({ answer });

  } catch (error) {
    res.status(500).json({ error: 'Maya Didi abhi busy hai. 1 min baad try karo.' });
  }
}
