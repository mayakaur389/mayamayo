export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method!== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { message } = await req.json();

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://mayamayo.vercel.app", 
        "X-Title": "Maya Didi", 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "model": "mistralai/mistral-7b-instruct:free", // <-- Ye model abhi chalu hai
        "messages": [{ "role": "user", "content": message }]
      })
    });

    const data = await response.json();
    
    if (data.error) {
      console.log("OpenRouter Error:", data.error);
      return new Response(JSON.stringify({ reply: "Maya Didi busy hai: " + data.error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ reply: data.choices[0].message.content }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.log("Server Error:", error);
    return new Response(JSON.stringify({ reply: "Server me gadbad hai guru" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
