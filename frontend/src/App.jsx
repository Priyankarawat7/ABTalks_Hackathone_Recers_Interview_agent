// client/src/App.jsx
import { useState } from 'react';
import CandidateSelector from './components/CandidateSelector';
import InterviewRoom from './components/InterviewRoom';
import FeedbackReport from './components/FeedbackModel';

export default function App() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const handleSelectCandidate = (candidate) => {
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
    <div className="min-h-screen">
      {!selectedCandidate && <CandidateSelector onSelectCandidate={handleSelectCandidate} />}

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