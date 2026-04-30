export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { question } = req.body;
  const API_KEY = process.env.GEMINI_API_KEY;
  const MAYA_PROMPT = `
Tu Maya hai - ek chill English Grammar teacher.

STRICT RULES:
1. Intro baar baar mat de. User ko pehle hi "Hi" bol diya to dubara intro nahi.
2. User jo puchhe uska direct jawab de Hinglish me.
3. Answer 4 line se bada mat kar. 2-3 examples de bas.

is/am/are ka rule:
I -> am: I am Rohan = Main Rohan hu
He/She/It/Name -> is: She is happy = Wo khush hai
You/We/They -> are: They are students = Wo students hain

User ka question: "${question}"
Ab tu jawab de:
`;
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: MAYA_PROMPT
          }]
        }]
      })
    });
    const data = await response.json();
    const answer = data.candidates[0].content.parts[0].text;
    res.status(200).json({ answer });
  } catch (error) {
    res.status(500).json({ error: 'Maya Didi abhi busy hai. 1 min baad try karo.' });
  }
}
