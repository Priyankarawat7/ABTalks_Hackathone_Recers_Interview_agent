import React, { useState } from 'react';
import { 
  Sparkles, BookOpen, Users, Play, Award, 
  Terminal, ChevronDown, ChevronUp, Home, Star,
  CheckCircle2, Share2, Trophy
} from 'lucide-react';
import candidatesData from '../data/candidates.json';
import curriculumData from '../data/curriculum.json';
import Navbar from './Navbar';

export default function LandingPage({ onStartInterview }) {
  const [activeTab, setActiveTab] = useState('home');
  const [openModule, setOpenModule] = useState(1);
  const [openFaq, setOpenFaq] = useState(0);

  const candidates = candidatesData.candidates || [];
  const modules = curriculumData.modules || [];
  const days = curriculumData.days || [];

  // Authentic Company SVG Logos
  const companyLogos = [
  {
    name: "Google",
    logo: "https://cdn.simpleicons.org/google"
  },
  {
    name: "Microsoft",
    logo: "https://cdn.simpleicons.org/microsoft"
  },
  {
    name: "Amazon",
    logo: "https://cdn.simpleicons.org/amazon"
  },
  {
    name: "Meta",
    logo: "https://cdn.simpleicons.org/meta"
  },
  {
    name: "GitHub",
    logo: "https://cdn.simpleicons.org/github"
  },
  {
    name: "OpenAI",
    logo: "https://cdn.simpleicons.org/openai"
  },
  {
    name: "NVIDIA",
    logo: "https://cdn.simpleicons.org/nvidia"
  },
  {
    name: "Netflix",
    logo: "https://cdn.simpleicons.org/netflix"
  }
];

  const mentors = [
    {
      name: "Harsh Sharma",
      role: "Lead AI Engineer & Cohort Instructor",
      exp: "Ex-Google / 8+ Yrs in Generative AI",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      bio: "Specializes in Large Language Models, Fine-Tuning (LoRA/QLoRA), RAG Architectures, and Multi-Agent Orchestration."
    },
    {
      name: "Sarthak Roy",
      role: "Senior Systems & Infrastructure Specialist",
      exp: "Ex-Meta / Kubernetes & MCP Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: "Expert in Dockerizing LLM Backends, Vector DB Optimizations (Pinecone/ChromaDB), and Agentic Memory Systems."
    }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Placed at Cohere AI",
      review: "The 31-day AI Cohort completely transformed my understanding of Vector Databases and RAG. The live evaluation helped me clear 4 technical rounds easily!",
      stars: 5,
      avatar: "SJ"
    },
    {
      name: "Emily Chen",
      role: "Placed at Meta",
      review: "Building end-to-end Multi-Agent workflows with LangGraph and Model Context Protocol (MCP) gave me the exact hands-on edge required for Senior AI roles.",
      stars: 5,
      avatar: "EC"
    },
    {
      name: "Ravi Patel",
      role: "Placed at Pinecone",
      review: "The hands-on projects on Day 15 (LoRA Fine-tuning) and Day 28 (K8s Deployment) were top notch. Got hired right after the Capstone Demo!",
      stars: 5,
      avatar: "RP"
    }
  ];

  const faqs = [
    {
      q: "ABTalks AI Cohort Assessment & Placement Portal kaise kaam karta hai?",
      a: "Yeh platform 31-day AI Cohort ke curriculum par candidates ki mastery evaluate karta hai aur LLM-driven adaptive interviews ke through placement report generate karta hai."
    },
    {
      q: "Kya cohort complete hone par Official Completion Certificate milta hai?",
      a: "Haan! Successfully 31-day missions pass karne aur interview clearing par Industry-Recognized Verified Digital Certificate milta hai jisme unique Credential ID aur QR verification hoti hai."
    },
    {
      q: "Placement support kaise provide kiya jata hai?",
      a: "Graduate candidates ke interview scores humari hiring partner companies ke hiring managers ko direct refer kiye jate hain."
    }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      
       <Navbar
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
      {/* Background Lighting Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-indigo-600/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-[1200px] right-0 w-[600px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* NAVBAR REMOVED */}

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 pb-24 relative z-10">

        {/* TAB 1: HOME PAGE HERO & SECTIONS */}
        {activeTab === 'home' && (
          <div>
            {/* HERO SECTION (Cleaned - No Cards Below) */}
            <section className="pt-20 pb-16 text-center relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-indigo-400" /> ABTalks AI Cohort 2026
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight max-w-5xl mx-auto">
                Become a Production-Ready <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Generative AI & Agentic Architect
                </span>
              </h1>

              <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                31 Days of hands-on engineering covering Vector Search, RAG Engines, Multi-Agent Orchestration, Model Context Protocol (MCP), and Kubernetes[cite: 4]. Evaluated by adaptive AI interview agents[cite: 2]!
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setActiveTab('roster')}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-xl shadow-indigo-600/30 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" /> Launch Candidate Interview Assessment
                </button>
                <button
                  onClick={() => setActiveTab('curriculum')}
                  className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 px-8 py-4 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" /> Explore 31-Day Syllabus
                </button>
              </div>
            </section>

            {/* WHERE OUR GRADUATES WORK (Only Authentic Logos) */}
        {/* WHERE OUR GRADUATES WORK */}
<section className="py-16 border-t border-slate-800/80 overflow-hidden">

  <div className="text-center mb-12">
    <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">
      PROVEN CAREER TRANSITIONS
    </span>

    <h2 className="text-2xl md:text-3xl font-black text-white">
      Where Our Graduates Work
    </h2>
  </div>


  {/* MARQUEE */}
  <div className="relative w-full overflow-hidden">

    {/* Left Fade */}
    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#07090e] to-transparent z-10 pointer-events-none" />

    {/* Right Fade */}
    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#07090e] to-transparent z-10 pointer-events-none" />


    {/* Moving Track */}
    <div className="flex w-max animate-logo-marquee hover:[animation-play-state:paused]">

      {/* FIRST SET */}
      <div className="flex items-center gap-20 md:gap-28 px-10">

        {companyLogos.map((company, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center justify-center min-w-[130px] opacity-60 hover:opacity-100 transition duration-300"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
            />
          </div>
        ))}

      </div>


      {/* DUPLICATE SET - FOR CONTINUOUS LOOP */}
      <div className="flex items-center gap-20 md:gap-28 px-10">

        {companyLogos.map((company, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center justify-center min-w-[130px] opacity-60 hover:opacity-100 transition duration-300"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
            />
          </div>
        ))}

      </div>

    </div>

  </div>


  {/* Marquee Animation */}
  <style>{`
    @keyframes logo-marquee {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-50%);
      }
    }

    .animate-logo-marquee {
      animation: logo-marquee 25s linear infinite;
    }
  `}</style>

</section>

            {/* EARN COMPLETION CERTIFICATE SECTION */}
            <section className="py-16 border-t border-slate-800/80">
              <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
                
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                    <Trophy className="w-3.5 h-3.5" /> Industry Verified Milestone
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    Earn an Industry Recognized AI Architect Certificate
                  </h2>
                  <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                    Upon completing all 31-day cohort missions and passing the live AI technical interview assessment, receive a shareable digital credential backed by ABTalks.
                  </p>

                  <ul className="space-y-3 mt-6 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Verified Credential ID & Authenticity QR Code
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Direct One-Click Share to LinkedIn & GitHub Profiles
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Includes Detailed Performance Assessment Scorecard
                    </li>
                  </ul>
                </div>

                <div className="w-full max-w-md bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-2xl rounded-full pointer-events-none" />
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg">
                      AB
                    </div>
                    <span className="text-[10px] font-mono px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                      VERIFIED CREDENTIAL
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">CERTIFICATE OF COMPLETION</span>
                  <h3 className="text-lg font-extrabold text-white mt-1">Generative AI & Agentic Architect</h3>
                  
                  <p className="text-xs text-slate-400 mt-4">This certifies that <span className="text-indigo-300 font-bold">Graduate Candidate</span> has successfully mastered 31 Days of RAG, Fine-Tuning, MCP & Agents.</p>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex justify-between items-center text-[10px] font-mono text-slate-500">
                    <span>Credential ID: <span className="text-slate-300">AB-2026-AI99</span></span>
                    <span className="text-indigo-400 font-bold flex items-center gap-1 cursor-pointer">
                      <Share2 className="w-3 h-3" /> Shareable
                    </span>
                  </div>
                </div>

              </div>
            </section>

            {/* MENTORS SECTION */}
            <section className="py-16 border-t border-slate-800/80">
              <div className="text-center mb-12">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">INSTRUCTORS & INDUSTRY EXPERTS</span>
                <h2 className="text-3xl font-black text-white">Learn From Industry Leaders</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {mentors.map((m, idx) => (
                  <div key={idx} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                    <img src={m.image} alt={m.name} className="w-20 h-20 rounded-2xl object-cover border border-indigo-500/30 shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-white">{m.name}</h3>
                      <p className="text-xs text-indigo-400 font-mono mt-0.5">{m.role}</p>
                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">{m.exp}</p>
                      <p className="text-xs text-slate-400 mt-3 leading-relaxed">{m.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* REVIEWS SECTION */}
            <section className="py-16 border-t border-slate-800/80">
              <div className="text-center mb-12">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">PLACEMENT STORIES</span>
                <h2 className="text-3xl font-black text-white">What Our Cohort Graduates Say</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviews.map((r, idx) => (
                  <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-1 text-amber-400 mb-4">
                        {[...Array(r.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed italic">"{r.review}"</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 font-bold text-xs flex items-center justify-center border border-indigo-500/30">
                        {r.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-white">{r.name}</h4>
                        <p className="text-[10px] text-emerald-400 font-mono font-semibold">{r.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-16 border-t border-slate-800/80 max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">GOT QUESTIONS?</span>
                <h2 className="text-3xl font-black text-white">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-4">
                {faqs.map((f, idx) => (
                  <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-5 text-left flex justify-between items-center text-sm font-bold text-white hover:bg-slate-800/30 cursor-pointer"
                    >
                      <span>{f.q}</span>
                      {openFaq === idx ? <ChevronUp className="w-4 h-4 text-indigo-400" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-400 border-t border-slate-800/60 leading-relaxed">
                        {f.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: INTERVIEW CANDIDATE ROSTER GRID */}
        {activeTab === 'roster' && (
          <div className="mt-12">
            <div className="flex justify-between items-center mb-8 border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-2xl font-black text-white flex items-center gap-2">
                  <Users className="w-6 h-6 text-indigo-400" /> ABTalks Technical Interview Portal
                </h2>
                <p className="text-xs text-slate-400 mt-1">Select a candidate to start the adaptive LLM technical assessment[cite: 2].</p>
              </div>
              <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full">
                {candidates.length} Profiles Loaded
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {candidates.map((item) => {
                const { member, missions, signals } = item;
                const passedMissions = missions.filter((m) => m.passed).length;
                const completionPercentage = Math.round((passedMissions / missions.length) * 100);

                return (
                  <div
                    key={member.id}
                    className="group bg-slate-900/70 backdrop-blur-md border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-mono font-bold px-2.5 py-1 bg-slate-800 text-indigo-300 rounded-md border border-slate-700">
                          {member.id}
                        </span>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          {member.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition">
                        {member.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 font-medium">{member.jobRole} • {member.yearsExperience} Yrs Exp</p>
                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">{member.education}</p>

                      <div className="mt-5 pt-4 border-t border-slate-800/80">
                        <div className="flex justify-between text-xs mb-1.5 font-mono">
                          <span className="text-slate-400">Missions Completed</span>
                          <span className="text-indigo-400 font-bold">{passedMissions}/{missions.length} ({completionPercentage}%)</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-500"
                            style={{ width: `${completionPercentage}%` }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] font-mono text-slate-400">
                        <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                          <span>Commit Days: </span>
                          <span className="text-white font-bold">{signals?.commitDays || 0}</span>
                        </div>
                        <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                          <span>First Try: </span>
                          <span className="text-emerald-400 font-bold">{signals?.missionsFirstTry || 0}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onStartInterview(item)}
                      className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-indigo-600/25 cursor-pointer text-xs"
                    >
                      <Play className="w-4 h-4 fill-current" /> Start Interview Assessment
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: CURRICULUM ACCORDION */}
        {activeTab === 'curriculum' && (
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-white">31-Day AI Cohort Syllabus</h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
                Step-by-step breakdown of tools, RAG architectures, and agentic workflows trained during the 31-day cohort[cite: 4].
              </p>
            </div>

            <div className="space-y-4">
              {modules.map((mod) => {
                const isExpanded = openModule === mod.n;
                const moduleDays = days.filter(d => d.day >= mod.days[0] && d.day <= mod.days[1]);

                return (
                  <div
                    key={mod.n}
                    className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenModule(isExpanded ? null : mod.n)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-800/40 transition cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono font-black text-sm flex items-center justify-center shrink-0">
                          M{mod.n}
                        </div>
                        <div>
                          <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider block">
                            Days {mod.days[0]} - {mod.days[1]}
                          </span>
                          <h3 className="text-lg font-bold text-white">{mod.title}</h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">
                          {moduleDays.length} Lessons
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-indigo-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-500" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 bg-slate-950/40 space-y-4">
                        {moduleDays.map((d) => (
                          <div key={d.day} className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                              <div className="flex items-center gap-3">
                                <span className="px-2.5 py-0.5 bg-indigo-600/20 text-indigo-400 font-mono text-xs font-bold rounded-md border border-indigo-500/30">
                                  Day {d.day}
                                </span>
                                <h4 className="font-bold text-sm text-slate-100">{d.title}</h4>
                              </div>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 self-start sm:self-auto">
                                {d.type}
                              </span>
                            </div>

                            <div className="flex flex-wrap gap-1.5 my-3">
                              {d.tools?.map((tool, idx) => (
                                <span key={idx} className="text-[10px] font-mono bg-slate-950 text-indigo-300 border border-slate-800/80 px-2.5 py-1 rounded-md">
                                  {tool}
                                </span>
                              ))}
                            </div>

                            <ul className="space-y-1 mt-2">
                              {d.objectives?.map((obj, i) => (
                                <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                                  <span className="text-indigo-400 font-bold">•</span> {obj}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-6 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-sm">
                AB
              </div>
              <span className="font-extrabold text-white text-lg">ABTalks AI Cohort</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-4">
              Empowering engineers to build production-grade Generative AI, Multi-Agent Systems, and Vector RAG pipelines evaluated by intelligent assessment agents[cite: 2, 4].
            </p>
            <div className="text-[11px] font-mono text-slate-500">
              © 2026 ABTalks AI Engine. All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => setActiveTab('home')} 
                  className="hover:text-indigo-400 cursor-pointer"
                >
                  Cohort Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('curriculum')} 
                  className="hover:text-indigo-400 cursor-pointer"
                >
                  31-Day Syllabus
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('roster')} 
                  className="hover:text-indigo-400 cursor-pointer"
                >
                  Candidate Roster
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-4">Core Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-indigo-300">
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Groq LLM</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Breeth Memory</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">FastAPI</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">React + Vite</span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">Tailwind CSS</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}