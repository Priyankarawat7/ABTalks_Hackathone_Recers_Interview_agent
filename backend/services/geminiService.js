// const { GoogleGenerativeAI } = require('@google/generative-ai');

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // Feedback JSON Schema according to Technical Spec
// const feedbackSchema = {
//   type: "OBJECT",
//   properties: {
//     summary: { type: "STRING" },
//     strengths: { type: "ARRAY", items: { type: "STRING" } },
//     gaps: { type: "ARRAY", items: { type: "STRING" } },
//     next: { type: "ARRAY", items: { type: "STRING" } }
//   },
//   required: ["summary", "strengths", "gaps", "next"]
// };

// const generateNextTurn = async (history) => {
//   // ✅ Model name updated to gemini-2.0-flash
//   const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
//   const chat = model.startChat({ history: history.slice(0, -1) });
  
//   const lastMsg = history[history.length - 1].parts[0].text;
//   const result = await chat.sendMessage(lastMsg);
//   return result.response.text();
// };

// const generateFeedbackReport = async (history) => {
//   // ✅ Model name updated to gemini-2.0-flash
//   const model = genAI.getGenerativeModel({
//     model: "gemini-2.0-flash",
//     generationConfig: {
//       responseMimeType: "application/json",
//       responseSchema: feedbackSchema,
//     },
//   });

//   const prompt = `
// Analyze this full technical interview transcript and generate candidate feedback.
// Format output strictly adhering to the JSON schema. Ensure summary, strengths, gaps, and next action items are clear, concise, and actionable.
// Transcript:
// ${JSON.stringify(history)}
// `;

//   const result = await model.generateContent(prompt);
//   return JSON.parse(result.response.text());
// };

// module.exports = {
//   generateNextTurn,
//   generateFeedbackReport
// };

const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Multi-turn chat processing using Groq (Llama 3.3 70B)
const generateNextTurn = async (history) => {
  // Convert Gemini history format to OpenAI/Groq messages format
  const messages = history.map((item) => ({
    role: item.role === 'model' ? 'assistant' : item.role,
    content: item.parts[0].text,
  }));

  const completion = await groq.chat.completions.create({
    messages: messages,
    model: 'llama-3.3-70b-versatile',
    temperature: 0.6,
  });

  return completion.choices[0]?.message?.content || '';
};

// Generate Structured JSON Feedback Report
const generateFeedbackReport = async (history) => {
  const prompt = `
Analyze this full technical interview transcript and generate candidate feedback.
Return ONLY a valid JSON object matching this schema EXACTLY:
{
  "summary": "Overall candidate performance summary",
  "strengths": ["strength 1", "strength 2"],
  "gaps": ["gap 1", "gap 2"],
  "next": ["actionable next step 1", "actionable next step 2"]
}

Transcript:
${JSON.stringify(history)}
`;

  const completion = await groq.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'llama-3.3-70b-versatile',
    response_format: { type: 'json_object' },
  });

  return JSON.parse(completion.choices[0]?.message?.content);
};

module.exports = {
  generateNextTurn,
  generateFeedbackReport,
};