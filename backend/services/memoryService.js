// const axios = require('axios');

// // Local RAM session store
// const sessions = new Map();

// const saveToBreethMemory = async (sessionId, candidate, turnData) => {
//   try {
//     const apiKey = process.env.BREETH_API_KEY;
//     const apiUrl = process.env.BREETH_API_URL;

//     if (!apiKey || !apiUrl) {
//       console.warn('[Breeth Memory] API key/URL missing. Running in local session mode.');
//       return;
//     }

//     await axios.post(
//       `${apiUrl}/memory`,
//       {
//         session_id: sessionId,
//         candidate_id: candidate?.member?.id,
//         memory_payload: {
//           userMessage: turnData.userMessage,
//           agentReply: turnData.agentReply
//         }
//       },
//       {
//         headers: {
//           'Authorization': `Bearer ${apiKey}`,
//           'Content-Type': 'application/json'
//         },
//         timeout: 3000 // Quick timeout to ensure serverless route stays fast
//       }
//     );
//     console.log(`[Breeth Memory] Successfully synced turn for Session: ${sessionId}`);
//   } catch (error) {
//     console.error('[Breeth Memory Sync Error]:', error.message);
//   }
// };

// const getSession = (sessionId) => sessions.get(sessionId);

// const createSession = (sessionId, candidate, initialPrompt) => {
//   const session = {
//     sessionId,
//     candidate,
//     history: [{ role: 'user', parts: [{ text: initialPrompt }] }],
//     questionCount: 0
//   };
//   sessions.set(sessionId, session);
//   return session;
// };

// const updateSessionHistory = (sessionId, userMessage, agentReply) => {
//   const session = sessions.get(sessionId);
//   if (session) {
//     if (userMessage) session.history.push({ role: 'user', parts: [{ text: userMessage }] });
//     session.history.push({ role: 'model', parts: [{ text: agentReply }] });
//     session.questionCount += 1;
//     sessions.set(sessionId, session);
//   }
// };

// module.exports = {
//   getSession,
//   createSession,
//   updateSessionHistory,
//   saveToBreethMemory
// };

const axios = require('axios');

const sessions = new Map();

const saveToBreethMemory = async (userMessage, agentReply) => {
  try {
    const apiKey = process.env.BREETH_API_KEY;
    // Fallback to exact /v1/episodes endpoint
    const apiUrl = process.env.BREETH_API_URL || 'https://api.thebreeth.com/v1/episodes';

    if (!apiKey) {
      console.warn('[Breeth Memory] API key missing. Skipping sync.');
      return;
    }

    await axios.post(
      apiUrl,
      {
        messages: [
          { role: "user", content: userMessage || "Start Interview" },
          { role: "assistant", content: agentReply || "" }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        timeout: 4000
      }
    );
    console.log('[Breeth Memory] Successfully synced episode to Breeth Pro!');
  } catch (error) {
    console.error('[Breeth Memory Sync Error]:', error.response?.data?.message || error.message);
  }
};

const getSession = (sessionId) => sessions.get(sessionId);

const createSession = (sessionId, candidate, initialPrompt) => {
  const session = {
    sessionId,
    candidate,
    history: [{ role: 'user', parts: [{ text: initialPrompt }] }],
    questionCount: 0
  };
  sessions.set(sessionId, session);
  return session;
};

const updateSessionHistory = (sessionId, userMessage, agentReply) => {
  const session = sessions.get(sessionId);
  if (session) {
    if (userMessage) session.history.push({ role: 'user', parts: [{ text: userMessage }] });
    if (agentReply) session.history.push({ role: 'model', parts: [{ text: agentReply }] });
    session.questionCount += 1;
    sessions.set(sessionId, session);
  }
};

module.exports = {
  getSession,
  createSession,
  updateSessionHistory,
  saveToBreethMemory
};