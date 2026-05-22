export async function POST(request) {
  try {
    const { prompt } = await request.json();
    console.log("Body aya:", { prompt });

    const GROQ_API_KEY = process.env.GROQ_API_KEY;
    console.log("Key hai?", GROQ_API_KEY? "Haan" : "Nahi");

    if (!GROQ_API_KEY) {
      throw new Error("GROQ_API_KEY missing");
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile', // <- Tera model jo available hai
        messages: [
          {
            role: 'system',
            content: 'Tera naam Maya hai. Tu ek pyari, tez, aur thodi nakhre wali AI dost hai. Hindi me baat karti hai. Short aur mast reply karti hai.'
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.8,
        max_tokens: 200
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Groq Error:", response.status, errorText);
      throw new Error(`Groq API error: ${response.status}`);
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
