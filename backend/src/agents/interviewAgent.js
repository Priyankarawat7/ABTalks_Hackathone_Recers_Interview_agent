const { GoogleGenAI, Type } = require('@google/genai');
const { SYSTEM_INTERVIEWER_PROMPT } = require('../prompts/interviewPrompts');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const MODEL_NAME = 'gemini-2.5-flash';

async function generateFirstQuestion(candidateName, availableDays, curriculumContext, firstDay) {
  const systemInstruction = `${SYSTEM_INTERVIEWER_PROMPT}\nCandidate: ${candidateName}\nCompleted Days: ${availableDays.join(', ')}\n\nCurriculum:\n${curriculumContext}`;
  const prompt = `Start the interview. Welcome ${candidateName} briefly, then ask a technical scenario question based on Day ${firstDay}.`;

  const response = await ai.models.generateContent({
    model: MODEL_NAME,
    contents: prompt,
    config: { systemInstruction },
  });

  return { text: response.text || '', systemInstruction };
}

async function generateNextTurn(history, systemInstruction, nextDay, questionCount, coveredDays) {
  const contents = history
    .filter((m) => m.role !== 'system')
    .map((m) => ({
      role: m.role,
      parts: [{ text: m.content }],
    }));

  contents.push({
    role: 'user',
    parts: [
      {
        text: `[SYSTEM DIRECTIVE]: Candidate responded. Evaluate response. Questions asked: ${questionCount}. Days covered: ${Array.from(coveredDays).join(', ')}. Ask the next technical question focused on Day ${nextDay}.`,
      },
    ],
  });

  const response = await ai.models.generateContent({
    model: MODEL_NAME,
    contents,
    config: { systemInstruction },
  });

  return response.text || '';
}

async function generateFinalFeedback(candidateName, coveredDays, history) {
  const transcript = history
    .filter((m) => m.role !== 'system')
    .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
    .join('\n\n');

  const feedbackPrompt = `Analyze this technical interview transcript for ${candidateName}.\nDays Evaluated: ${Array.from(coveredDays).join(', ')}\n\nTRANSCRIPT:\n${transcript}`;

  const feedbackSchema = {
    type: Type.OBJECT,
    properties: {
      overall_score: { type: Type.INTEGER },
      summary: { type: Type.STRING },
      technical_evaluations: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            category: { type: Type.STRING },
            score: { type: Type.INTEGER },
            strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
            areas_for_improvement: { type: Type.ARRAY, items: { type: Type.STRING } },
          },
        },
      },
      recommended_next_steps: { type: Type.ARRAY, items: { type: Type.STRING } },
    },
  };

  const response = await ai.models.generateContent({
    model: MODEL_NAME,
    contents: feedbackPrompt,
    config: {
      responseMimeType: 'application/json',
      responseSchema: feedbackSchema,
    },
  });

  return JSON.parse(response.text || '{}');
}

module.exports = {
  generateFirstQuestion,
  generateNextTurn,
  generateFinalFeedback,
};