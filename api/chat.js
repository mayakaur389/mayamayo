export async function POST(request) {
  try {
    const { messages } = await request.json();
    const GROQ_API_KEY = process.env.GROQ_API_KEY;

    if (!GROQ_API_KEY) {
      return new Response(JSON.stringify({ reply: "Maya so rahi hai bhai 😅. `GROQ_API_KEY` Vercel me set nahi hai." }), {status: 500});
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {'Authorization': `Bearer ${GROQ_API_KEY}`,'Content-Type': 'application/json'},
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'system', content: 'Tera naam Maya Didi hai. Hindi me baat karti hai.' },...messages],
        temperature: 0.8, max_tokens: 200
      })
    });

    const data = await response.json();
    return new Response(JSON.stringify({ reply: data.choices[0].message.content }), {status: 200});
  } catch (error) {
    return new Response(JSON.stringify({ reply: "Maya so rahi hai bhai 😅. Server Error hai." }), {status: 500});
  }
}
