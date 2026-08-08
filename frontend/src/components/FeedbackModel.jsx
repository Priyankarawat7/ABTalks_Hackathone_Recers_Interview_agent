// client/src/components/FeedbackReport.jsx
// import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, Award, RotateCcw } from 'lucide-react';

export default function FeedbackReport({ feedback, candidate, onReset }) {
  if (!feedback) return null;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-xl border border-slate-200 my-8">
      <div className="text-center pb-6 border-b border-slate-200">
        <div className="inline-flex p-3 bg-emerald-100 text-emerald-600 rounded-full mb-3">
          <Award className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900">Interview Performance Report</h2>
        <p className="text-slate-500 mt-1">Candidate: <span className="font-semibold text-slate-700">{candidate?.member?.name}</span></p>
      </div>

      {/* Summary */}
      <div className="my-6 p-4 bg-indigo-50 border border-indigo-100 rounded-lg">
        <h3 className="font-bold text-indigo-900 mb-1">Executive Summary</h3>
        <p className="text-sm text-indigo-800 leading-relaxed">{feedback.summary}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* Strengths */}
        <div className="border border-emerald-200 bg-emerald-50/50 rounded-lg p-4">
          <h4 className="font-bold text-emerald-900 flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Key Strengths
          </h4>
          <ul className="space-y-2">
            {feedback.strengths?.map((item, i) => (
              <li key={i} className="text-sm text-emerald-800 flex items-start gap-2">
                <span className="text-emerald-500 mt-1">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Gaps */}
        <div className="border border-amber-200 bg-amber-50/50 rounded-lg p-4">
          <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-3">
            <XCircle className="w-5 h-5 text-amber-600" /> Improvement Areas
          </h4>
          <ul className="space-y-2">
            {feedback.gaps?.map((item, i) => (
              <li key={i} className="text-sm text-amber-800 flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Next Steps */}
      <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 mb-6">
        <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
          <ArrowRight className="w-5 h-5 text-indigo-600" /> Recommended Action Items
        </h4>
        <ul className="space-y-2">
          {feedback.next?.map((item, i) => (
            <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onReset}
        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition cursor-pointer"
      >
        <RotateCcw className="w-4 h-4" /> Start Another Interview
      </button>
    </div>
  );
}