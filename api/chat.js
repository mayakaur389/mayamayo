export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ reply: 'Method Not Allowed' });
  }

  try {
    const { messages } = req.body;
    const GEMINI_KEY = process.env.GEMINI_KEY;

    if (!GEMINI_KEY) {
      return res.status(500).json({ reply: "Maya so rahi hai bhai 😅. GEMINI_KEY set nahi hai." });
    }

    const lastMsg = messages[messages.length - 1].content;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Tera naam Maya Didi hai. Tu AI teacher hai. Hindi me baat karti hai.
            Baccho ko English sikhane me help karti hai.
            Context: ${messages.map(m => m.content).join('\n')}
            User: ${lastMsg}`
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error('Gemini API failed');
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Phir try karo beta 💪";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ reply: "Maya so rahi hai bhai 😅. Gemini API check kar ya net slow hai." });
  }
}
