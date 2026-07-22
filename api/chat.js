export default async function handler(req, res) {
  if (req.method!== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message, languageMode } = req.body
  const apiKey = process.env.OPENROUTER_API_KEY

  if (!apiKey) {
    return res.status(500).json({ error: 'OPENROUTER_API_KEY set nahi hai bhai' })
  }

  const systemPrompt = `You are Maya Didi, a global language AI tutor.
Current mode: ${languageMode || 'hi-en'}

Rules:
1. Hindi→English mode: Reply in Hinglish + give English translation
2. English→Hindi mode: Reply in simple English + give Hindi meaning
3. Other languages: Explain in English + give Hindi meaning
4. Always end with 1 practice question in selected language
5. If grammar mistake, correct politely with example`

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://yamayo.vercel.app',
        'X-Title': 'Maya Didi'
      },
      body: JSON.stringify({
        model: 'google/gemini-1.5-flash:free',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    })

    const data = await response.json()

    if (data.error) {
      console.log('OpenRouter Error:', data.error)
      return res.status(500).json({ error: data.error.message })
    }

    const reply = data.choices[0].message.content
    res.status(200).json({ reply: reply })

  } catch (error) {
    console.log('Server Error:', error)
    res.status(500).json({ error: 'Maya Didi so rahi hai 😴. API key check karo' })
  }
}
