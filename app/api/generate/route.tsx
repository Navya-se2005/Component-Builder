import Groq from "groq-sdk"

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { apiUrl, description, framework, existingCode, refinement } = body

    const prompt = existingCode && refinement
      ? `You are an expert frontend developer. The user has an existing React component and wants to refine it.

EXISTING CODE:
${existingCode}

REFINEMENT REQUEST: "${refinement}"

Instructions:
- Modify the existing component based on the refinement request
- Keep everything that works, only change what was asked
- Use fetch() for any API calls, never axios
- Return ONLY the complete updated component code, no explanation, no markdown, no backticks
- The code must be a single self-contained React component`

      : `You are an expert frontend developer. Generate a single React component.
${apiUrl ? `Backend API URL: ${apiUrl}` : ""}
${description ? `Description: ${description}` : ""}
Framework: ${framework || "React"}

STRICT Rules:
- fetch() ONLY — never axios
- Use ONLY this URL in your fetch call: ${apiUrl || "none"}
- Use Tailwind CSS for all styling
- Handle loading state with a spinner or skeleton
- Handle error state with a friendly message
- Inspect the API URL to understand what it returns:
  * dog.ceo API → response has { message: [...images] } → render image grid
  * jsonplaceholder → response is array of objects → render cards
  * open-meteo → response has weather data → render weather UI
  * Any image API → render responsive image grid with rounded corners
  * Any list API → render cards for each item
- Always access the CORRECT field from the response (data.message, data.results, data.data, etc.)
- Return ONLY raw React component code
- No markdown, no backticks, no explanation, no comments about the code
- Single self-contained component with default export
- Component must actually work and render real data from the API`

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      max_tokens: 4000,
      messages: [{ role: "user", content: prompt }],
    })

    let code = completion.choices[0]?.message?.content ?? ""
    code = code
      .replace(/```(?:tsx|jsx|typescript|javascript)?\n?/g, "")
      .replace(/```/g, "")
      .trim()

    return Response.json({ code })

  } catch (err: unknown) {
    console.error("API Error:", err)
    const message = err instanceof Error ? err.message : "Generation failed"
    return Response.json({ error: message }, { status: 500 })
  }
}
