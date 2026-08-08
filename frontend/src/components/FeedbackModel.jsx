import { CheckCircle2, XCircle, ArrowRight, Award, RotateCcw, Sparkles } from 'lucide-react';

export default function FeedbackReport({ feedback, candidate, onReset }) {
  if (!feedback) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

        {/* Header */}
        <div className="text-center pb-8 border-b border-slate-800">
          <div className="inline-flex p-3 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-2xl mb-4">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-extrabold text-white">Assessment Report Card</h2>
          <p className="text-slate-400 text-sm mt-1">
            Candidate: <span className="font-semibold text-indigo-300">{candidate?.member?.name}</span> ({candidate?.member?.jobRole})
          </p>
        </div>

        {/* Executive Summary Box */}
        <div className="my-6 p-5 bg-indigo-950/40 border border-indigo-500/30 rounded-2xl">
          <h3 className="font-bold text-indigo-300 text-sm flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-indigo-400" /> Executive Evaluation Summary
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">{feedback.summary}</p>
        </div>

        {/* Strengths and Gaps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-slate-950/80 border border-emerald-500/20 rounded-2xl p-5">
            <h4 className="font-bold text-emerald-400 text-sm flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-4 h-4" /> Key Strengths
            </h4>
            <ul className="space-y-2.5">
              {feedback.strengths?.map((item, i) => (
                <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-950/80 border border-amber-500/20 rounded-2xl p-5">
            <h4 className="font-bold text-amber-400 text-sm flex items-center gap-2 mb-4">
              <XCircle className="w-4 h-4" /> Identified Gaps
            </h4>
            <ul className="space-y-2.5">
              {feedback.gaps?.map((item, i) => (
                <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next Action Items */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 mb-8">
          <h4 className="font-bold text-indigo-300 text-sm flex items-center gap-2 mb-3">
            <ArrowRight className="w-4 h-4 text-indigo-400" /> Recommended Roadmaps
          </h4>
          <ul className="space-y-2">
            {feedback.next?.map((item, i) => (
              <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                <span className="text-indigo-400 font-bold">→</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onReset}
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer shadow-lg shadow-indigo-600/30"
        >
          <RotateCcw className="w-4 h-4" /> Start New Assessment
        </button>

      </div>
    </div>
  );
}