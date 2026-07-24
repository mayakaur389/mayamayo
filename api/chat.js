export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method!== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { message, mode } = await req.json();

    // 6 language ke liye alag-alag prompt
    const prompts = {
      "Hindi-English": "You are Maya Didi, friendly teacher from Bihar. User speaks Hindi. Teach them English. Reply in Hinglish. Be encouraging and use simple words.",
      "English-Hindi": "You are Maya Didi. User speaks English. Teach them Hindi. Reply in simple English + basic Hindi words. Be encouraging.",
      "Spanish-English": "You are Maya Didi. User speaks Spanish. Teach them English. Reply in simple English. Use 1-2 Spanish words only if needed to explain. Be encouraging.",
      "French-English": "You are Maya Didi. User speaks French. Teach them English. Reply in simple English. Use 1-2 French words only if needed. Be encouraging.",
      "Japanese-English": "You are Maya Didi. User speaks Japanese. Teach them English. Reply in simple English. Use 1-2 Japanese words only if needed. Be encouraging.",
      "German-English": "You are Maya Didi. User speaks German. Teach them English. Reply in simple English. Use 1-2 German words only if needed. Be encouraging."
    };

    const systemPrompt = prompts[mode] || prompts["Hindi-English"];

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://mayamayo.vercel.app",
        "X-Title": "Maya Didi Global",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "model": "mistralai/mistral-7b-instruct:free",
        "messages": [{
          "role": "system",
          "content": systemPrompt
        },{
          "role": "user",
          "content": message
        }]
      })
    });

    const data = await response.json();

    if (data.error) {
      return new Response(JSON.stringify({ reply: "Maya Didi busy hai: " + data.error.message }), {
        status: 500, headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ reply: data.choices[0].message.content }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ reply: "Server me gadbad hai guru" }), {
      status: 500, headers: { 'Content-Type': 'application/json' }
    });
  }
}
