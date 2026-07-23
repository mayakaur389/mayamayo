export default async function handler(req, res) {
  const { message } = req.body

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://mayamayo-9ongeyddp-mayakaur389s-projects.vercel.app', // ✅ Tera domain
        'X-Title': 'Maya Didi'
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.1-8b-instruct:free',
        messages: [{ role: 'user', content: message }]
      })
    })

    const data = await response.json()

    if (data.error) {
      console.log('OpenRouter Error:', data.error)
      return res.status(500).json({ error: data.error.message })
    }

    res.status(200).json({ reply: data.choices[0].message.content })
  } catch (error) {
    console.log('Catch Error:', error)
    res.status(500).json({ error: error.message })
  }
}
