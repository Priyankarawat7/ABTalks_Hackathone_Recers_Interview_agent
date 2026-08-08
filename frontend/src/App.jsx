import { useState } from 'react';
import LandingPage from './components/LandingPage';
import InterviewRoom from './components/InterviewRoom';
// import LandingPage from './components/LandingPage';
// import InterviewRoom from './components/InterviewRoom';
// import FeedbackReport from './components/FeedbackReport';

export default function App() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const handleStartInterview = (candidate) => {
    const newSessionId = `session-${Date.now()}`;
    setSelectedCandidate(candidate);
    setSessionId(newSessionId);
    setFeedback(null);
  };

  const handleReset = () => {
    setSelectedCandidate(null);
    setSessionId(null);
    setFeedback(null);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {!selectedCandidate && (
        <LandingPage onStartInterview={handleStartInterview} />
      )}

      {selectedCandidate && !feedback && (
        <InterviewRoom
          candidate={selectedCandidate}
          sessionId={sessionId}
          onEndInterview={(report) => setFeedback(report)}
          onBack={handleReset}
        />
      )}

      {feedback && (
        <FeedbackReport
          feedback={feedback}
          candidate={selectedCandidate}
          onReset={handleReset}
        />
      )}
    </div>
  );
}