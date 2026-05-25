export async function POST(request) {
  try {
    const { messages } = await request.json(); // ✅ messages array bhej raha hai UI se
    console.log("Body aya:", { messages });

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Messages array missing hai" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const GROQ_API_KEY = process.env.GROQ_API_KEY;
    console.log("Key hai?", GROQ_API_KEY ? "Haan" : "Nahi");

    if (!GROQ_API_KEY) {
      return new Response(JSON.stringify({ error: "GROQ_API_KEY Vercel me set nahi hai" }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: 'Tera naam Maya Didi hai. Tu English teacher hai. Hindi me baat karti hai.' },
          ...messages // ✅ UI se aaye messages
        ],
        temperature: 0.8,
        max_tokens: 200
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Groq Error:", response.status, errorText);
      return new Response(JSON.stringify({ error: `Groq API error: ${response.status}` }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;
    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.log("Server Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
