// client/src/components/InterviewRoom.jsx
import { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, ArrowLeft, Loader2 } from 'lucide-react';
import axios from 'axios';

export default function InterviewRoom({ candidate, sessionId, onEndInterview, onBack }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // Initial Turn (Start Interview)
  useEffect(() => {
    const startInterview = async () => {
      setLoading(true);
      try {
        const res = await axios.post('http://localhost:5000/api/interview', {
          sessionId,
          candidate,
        });

        if (res.data?.reply) {
          setMessages([{ sender: 'agent', text: res.data.reply }]);
        }
      } catch (err) {
        console.error('Failed to start interview:', err);
        setMessages([{ sender: 'agent', text: 'Error initializing session. Please try again.' }]);
      } finally {
        setLoading(false);
      }
    };

    startInterview();
  }, [candidate, sessionId]);

  // Conversation Turn (Send Answer)
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/interview', {
        sessionId,
        message: userText,
      });

      if (res.data?.done) {
        onEndInterview(res.data.feedback);
      } else if (res.data?.reply) {
        setMessages((prev) => [...prev, { sender: 'agent', text: res.data.reply }]);
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setMessages((prev) => [...prev, { sender: 'agent', text: 'Network error. Please retry.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto h-[90vh] flex flex-col bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden my-4">
      {/* Header */}
      <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-300">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="font-bold text-lg">{candidate.member.name}</h2>
            <p className="text-xs text-slate-400">{candidate.member.jobRole} • Session: {sessionId}</p>
          </div>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'agent' && (
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0">
                <Bot className="w-5 h-5" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-indigo-600 text-white rounded-br-none'
                  : 'bg-white text-slate-800 border border-slate-200 shadow-sm rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
            {msg.sender === 'user' && (
              <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white shrink-0">
                <User className="w-5 h-5" />
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex gap-3 justify-start items-center">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
              <Bot className="w-5 h-5" />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 text-slate-500 text-sm flex items-center gap-2 shadow-sm">
              <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
              Agent is evaluating...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-200 flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your technical response..."
          className="flex-1 bg-slate-100 border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium transition cursor-pointer"
        >
          <Send className="w-4 h-4" />
          Send
        </button>
      </form>
    </div>
  );
}