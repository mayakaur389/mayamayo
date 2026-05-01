export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    if (req.method!== 'POST') {
        return res.status(405).json({ answer: 'Method Not Allowed' });
    }

    const { prompt } = req.body;
    const API_KEY = process.env.GEMINI_API_KEY;

    if (!API_KEY) {
        return res.status(500).json({ answer: "Maya Didi: API Key nahi mila 😭" });
    }

    // 👇 Gemini API ka new format
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

    const payload = {
        contents: [
            {
                role: "user",
                parts: [{ text: `Tu Maya Didi hai. Hinglish me reply kar. User: ${prompt}` }]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.error) {
            return res.status(500).json({ answer: `Gemini Error: ${data.error.message}` });
        }

        const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Maya chup hai";
        res.status(200).json({ answer });

    } catch (error) {
        res.status(500).json({ answer: 'Server error: ' + error.message });
    }
}
