const { v4: uuidv4 } = require('uuid');
const SessionService = require('../services/sessionService');
const { generateFirstQuestion, generateNextTurn, generateFinalFeedback } = require('../agents/interviewAgent');

function getCurriculumContext(curriculum, days) {
  const daysData = curriculum.days || {};
  return days
    .map((day) => {
      const data = daysData[day] || daysData[String(day)];
      if (!data) return '';
      return `Day ${day}: ${data.title || ''}\nTopics: ${(data.topics || []).join(', ')}`;
    })
    .filter(Boolean)
    .join('\n\n');
}

exports.startInterview = async (req, res) => {
  try {
    const { candidate_profile, curriculum } = req.body;
    if (!candidate_profile || !curriculum) {
      return res.status(400).json({ error: 'Missing candidate_profile or curriculum' });
    }

    const availableDays = (candidate_profile.completed_missions || []).filter(
      (day) => curriculum.days && (curriculum.days[day] || curriculum.days[String(day)])
    );

    if (availableDays.length < 4) {
      return res.status(400).json({ error: 'Candidate must have completed at least 4 valid days.' });
    }

    const sessionId = uuidv4();
    const firstDay = availableDays[0];
    const curriculumContext = getCurriculumContext(curriculum, availableDays);

    const { text, systemInstruction } = await generateFirstQuestion(
      candidate_profile.name,
      availableDays,
      curriculumContext,
      firstDay
    );

    const parts = text.split('\n\n');
    const greeting = parts.length > 1 ? parts[0] : `Welcome ${candidate_profile.name}!`;
    const initialQuestion = parts.length > 1 ? parts.slice(1).join('\n\n') : text;

    const session = {
      sessionId,
      candidate: candidate_profile,
      curriculum,
      history: [
        { role: 'system', content: systemInstruction },
        { role: 'model', content: text, topicDay: firstDay },
      ],
      coveredDays: new Set([firstDay]),
      availableDays,
      currentDay: firstDay,
      questionCount: 1,
      status: 'in_progress',
    };

    SessionService.set(sessionId, session);

    return res.status(201).json({
      session_id: sessionId,
      greeting: greeting.trim(),
      initial_question: initialQuestion.trim(),
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.chatTurn = async (req, res) => {
  try {
    const { session_id, user_message } = req.body;
    const session = SessionService.get(session_id);

    if (!session) return res.status(404).json({ error: 'Session not found' });

    if (session.status === 'completed') {
      return res.json({ message: 'Interview already completed.', status: 'completed' });
    }

    session.history.push({ role: 'user', content: user_message });

    // Stop criteria check: >=8 questions AND >=4 days
    if (session.questionCount >= 8 && session.coveredDays.size >= 4) {
      session.status = 'completed';
      const closingMsg = 'Thank you! That completes our interview session today.';
      session.history.push({ role: 'model', content: closingMsg });
      return res.json({ session_id, reply: closingMsg, status: 'completed' });
    }

    const uncovered = session.availableDays.filter((d) => !session.coveredDays.has(d));
    let nextDay = session.currentDay;
    if (session.coveredDays.size < 4 && uncovered.length > 0) {
      nextDay = uncovered[0];
    }

    session.currentDay = nextDay;
    const systemInstruction = session.history.find((m) => m.role === 'system')?.content;

    const reply = await generateNextTurn(
      session.history,
      systemInstruction,
      nextDay,
      session.questionCount,
      session.coveredDays
    );

    session.history.push({ role: 'model', content: reply, topicDay: nextDay });
    session.coveredDays.add(nextDay);
    session.questionCount += 1;

    return res.json({
      session_id,
      reply,
      status: session.status,
      questions_asked: session.questionCount,
      days_covered: Array.from(session.coveredDays),
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getFeedback = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = SessionService.get(sessionId);

    if (!session) return res.status(404).json({ error: 'Session not found' });

    const feedback = await generateFinalFeedback(
      session.candidate.name,
      session.coveredDays,
      session.history
    );

    return res.json({
      session_id: sessionId,
      candidate_id: session.candidate.candidate_id,
      ...feedback,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};