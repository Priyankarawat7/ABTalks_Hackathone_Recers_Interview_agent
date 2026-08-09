import { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, ArrowLeft, Loader2, Terminal } from 'lucide-react';
import axios from 'axios';
import Footer from './Footer';

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
      setMessages((prev) => [...prev, { sender: 'agent', text: 'Network connection issue. Please retry.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl h-[92vh] flex flex-col md:flex-row bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Left Sidebar: Candidate Profile Context */}
        <div className="w-full md:w-80 bg-slate-950 p-6 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col justify-between shrink-0">
          <div>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition mb-6 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Exit Room
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-lg">
                {candidate.member.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-white text-base">{candidate.member.name}</h3>
                <p className="text-xs text-slate-400">{candidate.member.jobRole}</p>
              </div>
            </div>

            <div className="space-y-2 mt-6 text-xs font-mono bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <div className="flex justify-between text-slate-400">
                <span>Session ID:</span>
                <span className="text-indigo-400 font-bold">{sessionId.slice(-8)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Experience:</span>
                <span className="text-slate-200">{candidate.member.yearsExperience} Years</span>
              </div>
            </div>

            {/* Missions Checklist Preview */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" /> Completed Missions
              </h4>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {candidate.missions.slice(0, 5).map((m, i) => (
                  <div key={i} className="text-xs bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-300 truncate max-w-[140px]">{m.title}</span>
                    <span className="text-[10px] text-emerald-400 font-mono font-bold">Day {m.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Active Session Syncing
          </div>
        </div>

        {/* Right Section: Main Chat Area */}
        <div className="flex-1 flex flex-col bg-slate-900/50">
          
          {/* Top Status Bar */}
          <div className="px-6 py-4 bg-slate-900/80 border-b border-slate-800 flex justify-between items-center">
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <Bot className="w-4 h-4 text-indigo-400" /> Technical AI Evaluator
            </div>
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Live Interactive Assessment
            </span>
          </div>

          {/* Messages Scroll View */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'agent' && (
                  <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-600/30">
                    <Bot className="w-5 h-5" />
                  </div>
                )}
                
                <div
                  className={`max-w-[82%] rounded-2xl p-4 text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-none shadow-md shadow-indigo-600/20'
                      : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 justify-start items-center">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-slate-400 text-xs flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                  AI Agent is analyzing response...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form onSubmit={handleSend} className="p-4 bg-slate-950 border-t border-slate-800 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your technical answer clearly..."
              className="flex-1 bg-slate-900 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white px-6 py-3 rounded-xl flex items-center gap-2 text-sm font-semibold transition shadow-lg shadow-indigo-600/30 cursor-pointer"
            >
              <Send className="w-4 h-4" /> Send
            </button>
          </form>

        </div>
      </div>
      <Footer/>
    </div>
    
  );
}