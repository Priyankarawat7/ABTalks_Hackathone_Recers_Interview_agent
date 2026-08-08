// import React from 'react';
import { Briefcase, Play, Sparkles, Target, Zap } from 'lucide-react';
import candidatesData from '../data/candidates.json';

export default function CandidateSelector({ onSelectCandidate }) {
  const candidates = candidatesData.candidates || [];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow Overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" /> AI Cohort Candidate Assessment
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Adaptive Technical Interview Portal
        </h1>
        <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
          Select a candidate profile to initiate an LLM-driven technical interview tailored to their 31-day cohort progress and completed missions[cite: 2, 3].
        </p>
      </div>

      {/* Candidate Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {candidates.map((item) => {
          const { member, missions, signals } = item;
          const passedMissions = missions.filter((m) => m.passed).length;
          const completionPercentage = Math.round((passedMissions / missions.length) * 100);

          return (
            <div
              key={member.id}
              className="group bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Card Top Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono tracking-wide font-bold px-2.5 py-1 bg-slate-800 text-indigo-300 rounded-md border border-slate-700">
                    {member.id}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {member.status}
                  </span>
                </div>

                {/* Candidate Info */}
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-400 flex items-center gap-1.5 mt-1 font-medium">
                  <Briefcase className="w-4 h-4 text-slate-500" />
                  {member.jobRole} <span className="text-slate-600">•</span> {member.yearsExperience} yrs exp
                </p>
                <p className="text-xs text-slate-500 mt-1 font-mono">{member.education}</p>

                {/* Cohort Progress Metric */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span className="text-slate-400">Cohort Missions</span>
                    <span className="text-indigo-400 font-bold">{passedMissions}/{missions.length} ({completionPercentage}%)</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${completionPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Badges Footer */}
                <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-mono">
                  <div className="bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/60">
                    <span className="text-slate-500 text-[10px] block uppercase">Commit Days</span>
                    <span className="text-slate-200 font-semibold flex items-center gap-1">
                      <Target className="w-3.5 h-3.5 text-indigo-400" /> {signals?.commitDays || 0} Days
                    </span>
                  </div>
                  <div className="bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/60">
                    <span className="text-slate-500 text-[10px] block uppercase">First-Try Pass</span>
                    <span className="text-slate-200 font-semibold flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-400" /> {signals?.missionsFirstTry || 0}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectCandidate(item)}
                className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition duration-200 shadow-lg shadow-indigo-600/25 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                Launch Interview
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}