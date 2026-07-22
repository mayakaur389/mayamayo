export default async function handler(req, res) {
  if (req.method!== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message, languageMode } = req.body
  const apiKey = process.env.OPENROUTER_API_KEY

  if (!apiKey) {
    return res.status(500).json({ error: 'OPENROUTER_API_KEY set nahi hai bhai' })
  }

  const systemPrompt = `You are Maya Didi, a friendly Hinglish AI tutor. 
Reply in Hindi-English mix. Be encouraging. 
If user asks in Hindi, explain in Hinglish + give English translation.
If grammar mistake, correct politely with example.
Always end with 1 practice question.`

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
