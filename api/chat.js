export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message, languageMode } = req.body
  const apiKey = process.env.OPENROUTER_API_KEY

  if (!apiKey) {
    return res.status(500).json({ error: 'OPENROUTER_API_KEY set nahi hai' })
  }

  const systemPrompt = `You are Maya Didi, a global language AI tutor. Current mode: ${languageMode || 'hi-en'}. Reply in Hinglish. Be encouraging. Always end with 1 practice question.`

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://mayamayo.vercel.app', // ✅ Tera main domain
        'X-Title': 'Maya Didi'
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.1-8b-instruct:free', // ✅ Ye model jyada stable hai
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ]
      })
    })

    const data = await response.json()
    console.log('OpenRouter Response:', data)

    if (data.error) {
      return res.status(500).json({ error: `API Error: ${data.error.message}` })
    }

    const reply = data.choices[0].message.content
    res.status(200).json({ reply: reply })
  } catch (error) {
    console.log('Catch Error:', error)
    res.status(500).json({ error: `Server Crash: ${error.message}` })
  }
}
