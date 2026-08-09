const { getSystemPrompt } = require('../prompts/systemPrompt');
const memoryService = require('../services/memoryService');
const geminiService = require('../services/geminiService');

const handleInterview = async (req, res) => {
  try {
    const { sessionId, candidate, message } = req.body;

    if (!sessionId) {
      return res.status(400).json({ error: "sessionId is required" });
    }

    let session = memoryService.getSession(sessionId);

    // 1. First Turn - Start Interview
    if (!session) {
      if (!candidate) {
        return res.status(400).json({ error: "Initial request requires candidate object" });
      }

      const initialPrompt = getSystemPrompt(candidate) + 
        "\n\nSystem Command: Start the interview now. Greet the candidate briefly and ask the first technical question.";
      
      session = memoryService.createSession(sessionId, candidate, initialPrompt);
      
      const reply = await geminiService.generateNextTurn(session.history);
      memoryService.updateSessionHistory(sessionId, null, reply);

      // Async Breeth Memory Log
      memoryService.saveToBreethMemory(sessionId, candidate, { userMessage: "START_INTERVIEW", agentReply: reply });

      return res.json({
        reply,
        done: false
      });
    }

    // 2. Ongoing Conversation Turn
    memoryService.updateSessionHistory(sessionId, message, "");
    session = memoryService.getSession(sessionId);

    const reply = await geminiService.generateNextTurn(session.history);
    
    // Update last model response in memory
    session.history[session.history.length - 1].parts[0].text = reply;

    // Async Breeth Memory Log
    memoryService.saveToBreethMemory(sessionId, session.candidate, { userMessage: message, agentReply: reply });

    // 3. Check if Interview is Completed
    if (reply.includes("INTERVIEW_COMPLETE") || session.questionCount >= 10) {
      const feedback = await geminiService.generateFeedbackReport(session.history);
      
      return res.json({
        reply: "Interview completed. Thank you for your time!",
        done: true,
        feedback
      });
    }

    return res.json({
      reply,
      done: false
    });

  } catch (error) {
    console.error("[Interview Controller Error]:", error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
};

module.exports = { handleInterview };