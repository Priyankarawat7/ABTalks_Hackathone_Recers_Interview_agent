import { useState } from "react";

import {
  Sparkles,
  BookOpen,
  Users,
  Play,
  Star,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Rocket,
  Lightbulb,
  Cpu,
  Handshake,
  Terminal,
} from "lucide-react";

import candidatesData from "../data/candidates.json";
import curriculumData from "../data/curriculum.json";

import Navbar from "./Navbar";
import Footer from "./Footer";

import logo from "../assets/logo-1.png";

import company1 from "../assets/8KNYTYheOg273ilY2UKT4I0i6tw.webp";
import company2 from "../assets/Aaitwyz8Bn0iAMCL5QA3tLToEWU.webp";
import company3 from "../assets/cTFmAlgaEelNJtugChUwoMcoTyg.webp";
import company4 from "../assets/KMovuQPuiF4uT9tKe43HZgN1lms.webp";
import company5 from "../assets/pxv9LzlddUxmQlc2MokcI9Oi3lc.webp";
import company6 from "../assets/ZsrrIuPtKUuolA7ZfD4oupAz0.webp";
import company7 from "../assets/Google-Logo-PNG-Images-HD.png";
import company8 from "../assets/White-Amazon-Logo-PNG-HD-Quality.png";


/* =====================================================
   TECH CARD
===================================================== */

function TechCard({ name, icon, darkIcon = false }) {
  return (
    <div
      className="
        group
        h-[265px]
        rounded-xl
        border
        border-slate-700
        bg-black/70
        flex
        flex-col
        items-center
        justify-center
        transition-all
        duration-300
        hover:border-purple-400/50
        hover:-translate-y-1
        hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]
      "
    >
      <div className="h-32 flex items-center justify-center">

        <img
          src={icon}
          alt={name}
          className={`
            w-24
            h-24
            object-contain
            ${darkIcon ? "invert" : ""}
            group-hover:scale-110
            transition-transform
            duration-300
          `}
        />

      </div>

      <h4 className="mt-5 text-base font-semibold text-white">
        {name}
      </h4>
    </div>
  );
}


/* =====================================================
   LANDING PAGE
===================================================== */

export default function LandingPage({ onStartInterview }) {

  const [activeTab, setActiveTab] = useState("home");
  const [openModule, setOpenModule] = useState(1);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTechTab, setActiveTechTab] = useState("Frontend");

  const candidates = candidatesData.candidates || [];
  const modules = curriculumData.modules || [];
  const days = curriculumData.days || [];


  /* =====================================================
     MENTORS
  ===================================================== */

  const mentors = [
    {
      name: "Harsh Sharma",
      role: "Lead AI Engineer & Cohort Instructor",
      exp: "Ex-Google / 8+ Yrs in Generative AI",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      bio:
        "Specializes in Large Language Models, Fine-Tuning, RAG Architectures, and Multi-Agent Orchestration.",
    },

    {
      name: "Sarthak Roy",
      role: "Senior Systems & Infrastructure Specialist",
      exp: "Ex-Meta / Kubernetes & MCP Expert",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio:
        "Expert in Dockerizing LLM Backends, Vector DB Optimizations, and Agentic Memory Systems.",
    },
  ];


  /* =====================================================
     REVIEWS
  ===================================================== */

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Placed at Cohere AI",
      review:
        "The 31-day AI Cohort completely transformed my understanding of Vector Databases and RAG. The live evaluation helped me clear 4 technical rounds easily!",
      stars: 5,
      avatar: "SJ",
    },

    {
      name: "Emily Chen",
      role: "Placed at Meta",
      review:
        "Building end-to-end Multi-Agent workflows with LangGraph and Model Context Protocol gave me the exact hands-on edge required for Senior AI roles.",
      stars: 5,
      avatar: "EC",
    },

    {
      name: "Ravi Patel",
      role: "Placed at Pinecone",
      review:
        "The hands-on projects on LoRA Fine-tuning and K8s Deployment were top notch. Got hired right after the Capstone Demo!",
      stars: 5,
      avatar: "RP",
    },
  ];


  /* =====================================================
     FAQ
  ===================================================== */

  const faqs = [
    {
      q: "ABTalks AI Cohort Assessment & Placement Portal kaise kaam karta hai?",
      a:
        "Yeh platform 31-day AI Cohort ke curriculum par candidates ki mastery evaluate karta hai aur LLM-driven adaptive interviews ke through placement report generate karta hai.",
    },

    {
      q: "Kya cohort complete hone par Official Completion Certificate milta hai?",
      a:
        "Haan! Successfully 31-day missions pass karne aur interview clearing par Verified Digital Certificate milta hai jisme unique Credential ID aur QR verification hoti hai.",
    },

    {
      q: "Placement support kaise provide kiya jata hai?",
      a:
        "Graduate candidates ke interview scores hiring partner companies ke hiring managers ko direct refer kiye ja sakte hain.",
    },
  ];


  return (
    <div className="min-h-screen bg-[#07090e] text-white relative overflow-hidden">

      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-indigo-600/15 blur-[160px] rounded-full" />

        <div className="absolute top-[1200px] right-0 w-[600px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full" />

      </div>


      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />


      {/* =================================================
          MAIN
      ================================================= */}

      <main className="max-w-7xl mx-auto px-6 pb-24 relative z-10">


        {/* =================================================
            HOME
        ================================================= */}

        {activeTab === "home" && (
          <div>


            {/* =================================================
                HERO
            ================================================= */}

            <section className="pt-12 pb-16 text-center relative">

              <div className="flex justify-center pb-4 pt-4">

                <img
                  className="h-20 w-auto"
                  src={logo}
                  alt="ABTalks AI"
                />

              </div>


              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">

                <Sparkles className="w-3.5 h-3.5 animate-pulse" />

                ABTalks AI Cohort 2026

              </div>


              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight max-w-5xl mx-auto">

                Become a Production-Ready

                <br />

                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">

                  Generative AI & Agentic Architect

                </span>

              </h1>


              <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">

                31 Days of hands-on engineering covering Vector Search,
                RAG Engines, Multi-Agent Orchestration, Model Context
                Protocol and Kubernetes.

              </p>


              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

                <button
                  onClick={() => setActiveTab("roster")}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-xl shadow-indigo-600/30 transition flex items-center justify-center gap-2 cursor-pointer"
                >

                  <Play className="w-4 h-4 fill-current" />

                  Launch Candidate Interview Assessment

                </button>


                <button
                  onClick={() => setActiveTab("curriculum")}
                  className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 px-8 py-4 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
                >

                  <BookOpen className="w-4 h-4" />

                  Explore 31-Day Syllabus

                </button>

              </div>

            </section>


            {/* =================================================
                COMPANY MARQUEE
            ================================================= */}

            <section className="py-16 border-t border-slate-800/80 overflow-hidden">

              <div className="relative w-full overflow-hidden">

                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-r from-[#07090e] to-transparent z-10 pointer-events-none" />

                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-l from-[#07090e] to-transparent z-10 pointer-events-none" />


                <div className="flex w-max animate-company-marquee hover:[animation-play-state:paused]">

                  {[1, 2].map((set) => (
                    <div
                      key={set}
                      className="flex items-center gap-12 md:gap-20 px-6"
                    >

                      <img src={company1} alt="Company" className="h-10 sm:h-12 md:h-14 w-auto object-contain" />

                      <img src={company2} alt="Company" className="h-10 sm:h-12 md:h-14 w-auto object-contain" />

                      <img src={company3} alt="Company" className="h-10 sm:h-12 md:h-14 w-auto object-contain" />

                      <img src={company4} alt="Company" className="h-10 sm:h-12 md:h-14 w-auto object-contain" />

                      <img src={company5} alt="Company" className="h-10 sm:h-12 md:h-14 w-auto object-contain" />

                      <img src={company6} alt="Company" className="h-10 sm:h-12 md:h-14 w-auto object-contain" />

                      <img src={company7} alt="Google" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />

                      <img src={company8} alt="Amazon" className="h-10 sm:h-12 md:h-14 w-auto object-contain" />

                    </div>
                  ))}

                </div>

              </div>


              <style>
                {`
                  @keyframes company-marquee {
                    from {
                      transform: translateX(0);
                    }

                    to {
                      transform: translateX(-50%);
                    }
                  }

                  .animate-company-marquee {
                    animation: company-marquee 25s linear infinite;
                  }
                `}
              </style>

            </section>


            {/* =================================================
                MENTORS
            ================================================= */}

            <section className="py-16 border-t border-slate-800/80">

              <div className="text-center mb-12">

                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">
                  EXPERT GUIDANCE
                </span>

                <h2 className="text-3xl font-black text-white">
                  Learn From Industry Experts
                </h2>

                <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto">
                  Get guidance across Generative AI, RAG, Agentic Systems,
                  MCP and production deployment.
                </p>

              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                {mentors.map((mentor) => (

                  <div
                    key={mentor.name}
                    className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start"
                  >

                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-20 h-20 rounded-2xl object-cover border border-indigo-500/30 shrink-0"
                    />

                    <div>

                      <h3 className="font-bold text-lg text-white">
                        {mentor.name}
                      </h3>

                      <p className="text-xs text-indigo-400 font-mono mt-0.5">
                        {mentor.role}
                      </p>

                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                        {mentor.exp}
                      </p>

                      <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                        {mentor.bio}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </section>


         {/* ================= TECHNOLOGIES ================= */}

<section className="py-20 px-4 sm:px-6">

  {/* HEADING */}
  <div className="text-center mb-12">

    <div className="inline-flex items-center justify-center mb-7">
      <span className="px-8 py-2 rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-pink-500/30 border border-purple-400/30 text-white text-sm font-medium shadow-[0_0_30px_rgba(139,92,246,0.15)]">
        TECHNOLOGIES
      </span>
    </div>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
      Technologies You'll Master
    </h2>

    <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
      Learn the technologies, frameworks and tools required to build
      modern full-stack and AI-powered applications.
    </p>

  </div>


  {/* TABS */}

  <div className="flex flex-wrap justify-center gap-3 mb-8">

    {[
      "Frontend",
      "Backend",
      "Database",
      "AI Engineering",
      "Engineering Skills",
    ].map((tab) => (

      <button
        key={tab}
        onClick={() => setActiveTechTab(tab)}
        className={`
          px-5 sm:px-6 py-3 rounded-xl text-sm font-semibold
          border transition-all duration-300 cursor-pointer

          ${
            activeTechTab === tab
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-purple-400/50 shadow-lg shadow-purple-500/25"
              : "bg-slate-950/80 text-slate-300 border-slate-700 hover:border-purple-500/40 hover:bg-slate-900 hover:text-white"
          }
        `}
      >
        {tab}
      </button>

    ))}

  </div>


  {/* TECHNOLOGY CARD */}

  <div className="max-w-6xl mx-auto rounded-2xl border border-indigo-500/30 bg-black/60 backdrop-blur-sm p-5 sm:p-8 relative overflow-hidden shadow-[0_0_60px_rgba(99,102,241,0.08)]">

    {/* Background Glow */}

    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-purple-500/[0.03] to-pink-500/[0.05] pointer-events-none" />


    <h3 className="relative z-10 text-center text-xl sm:text-2xl font-bold text-white mb-8">
      {activeTechTab === "Frontend" && "FRONTEND TECHNOLOGIES"}

      {activeTechTab === "Backend" && "BACKEND TECHNOLOGIES"}

      {activeTechTab === "Database" && "DATABASE TECHNOLOGIES"}

      {activeTechTab === "AI Engineering" && "AI ENGINEERING TECHNOLOGIES"}

      {activeTechTab === "Engineering Skills" && "ENGINEERING TOOLS & SKILLS"}
    </h3>


    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


      {/* ================= FRONTEND ================= */}

      {activeTechTab === "Frontend" && (
        <>

          <TechCard
            name="HTML5"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />

          <TechCard
            name="CSS3"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />

          <TechCard
            name="JavaScript"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />

          <TechCard
            name="React.js"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />

          <TechCard
            name="Tailwind CSS"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
          />

        </>
      )}


      {/* ================= BACKEND ================= */}

      {activeTechTab === "Backend" && (
        <>

          <TechCard
            name="Node.js"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />

          <TechCard
            name="Express.js"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            darkIcon
          />

          <TechCard
            name="REST API"
            icon="https://cdn.simpleicons.org/postman/ffffff"
          />

          <TechCard
            name="EJS"
            icon="https://cdn.simpleicons.org/ejs/ffffff"
          />

        </>
      )}


      {/* ================= DATABASE ================= */}

      {activeTechTab === "Database" && (
        <>

          <TechCard
            name="MongoDB"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          />

          <TechCard
            name="MySQL"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          />

          <TechCard
            name="Database Design"
            icon="https://cdn.simpleicons.org/mysql/ffffff"
          />

          <TechCard
            name="CRUD Operations"
            icon="https://cdn.simpleicons.org/databricks/ffffff"
          />

        </>
      )}


      {/* ================= AI ENGINEERING ================= */}

      {activeTechTab === "AI Engineering" && (
        <>

          <TechCard
            name="Google Gemini"
            icon="https://cdn.simpleicons.org/googlegemini/ffffff"
          />

          <TechCard
            name="OpenAI"
            icon="https://cdn.simpleicons.org/openai/ffffff"
          />

          <TechCard
            name="LangChain"
            icon="https://cdn.simpleicons.org/langchain/ffffff"
          />

          <TechCard
            name="RAG"
            icon="https://cdn.simpleicons.org/chainlink/ffffff"
          />

        </>
      )}


      {/* ================= ENGINEERING ================= */}

      {activeTechTab === "Engineering Skills" && (
        <>

          <TechCard
            name="Git"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />

          <TechCard
            name="GitHub"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            darkIcon
          />

          <TechCard
            name="Postman"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
          />

          <TechCard
            name="System Design"
            icon="https://cdn.simpleicons.org/diagramsdotnet/ffffff"
          />

        </>
      )}

    </div>

  </div>


  {/* ================= CTA BUTTONS ================= */}

  <div className="flex flex-wrap justify-center gap-3 mt-8">

    <button
      onClick={() => setActiveTab("curriculum")}
      className="px-5 py-3 rounded-lg border border-slate-700 bg-slate-900 text-white text-sm font-semibold hover:border-indigo-500/50 hover:bg-slate-800 transition cursor-pointer"
    >
      View Curriculum
    </button>


    <button
      className="px-5 py-3 rounded-lg border border-slate-700 bg-slate-900 text-white text-sm font-semibold hover:border-purple-500/50 hover:bg-slate-800 transition cursor-pointer"
    >
      Request Callback
    </button>


    <button
      onClick={() => setActiveTab("roster")}
      className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm font-bold hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 transition shadow-lg shadow-purple-500/25 cursor-pointer"
    >
      Start Learning →
    </button>

  </div>

</section>

            {/* =================================================
                CURRICULUM PREVIEW
                THIS IS WHAT NAVBAR CURRICULUM CONNECTS TO
            ================================================= */}

            <section
              id="curriculum-preview"
              className="py-20 border-t border-slate-800/80 scroll-mt-24"
            >

              {/* HEADER */}

              <div className="text-center mb-12">

                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-[0.2em] mb-5">

                  <BookOpen className="w-4 h-4" />

                  Curriculum

                </div>


                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">

                  Structured Curriculum Designed For

                  <br />

                  <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Real Growth
                  </span>

                </h2>


                <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">

                  A structured 31-day learning journey designed to take you
                  from AI fundamentals to production-ready engineering.

                </p>

              </div>


              {/* MAIN */}

              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6">


                {/* PREREQUISITES */}

                <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-black border border-slate-800 rounded-2xl p-6 h-fit">

                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">

                    <Terminal className="w-5 h-5 text-indigo-400" />

                  </div>


                  <h3 className="text-xl font-bold text-white">
                    Course Prerequisites
                  </h3>


                  <p className="text-xs text-slate-500 mt-3 leading-relaxed">

                    Basic programming understanding is recommended.
                    Beginners are welcome and ready to learn fast,
                    stay consistent, and take responsibility for their progress.

                  </p>


                  <div className="flex flex-wrap items-center gap-5 mt-6">

                    <div className="flex items-center gap-2">

                      <span className="text-indigo-400 text-lg">
                        ↗
                      </span>

                      <span className="text-xs font-semibold text-slate-200">
                        Beginner To Advance
                      </span>

                    </div>


                    <div className="flex items-center gap-1.5">

                      <span className="text-purple-400 text-lg">
                        ◷
                      </span>

                      <span className="text-xs font-semibold text-slate-200">
                        31 Days
                      </span>

                    </div>

                  </div>


                  <div className="mt-8">

                    <p className="text-[10px] text-slate-500 uppercase tracking-[0.15em] mb-4">
                      A Quick Overview Of The Course
                    </p>


                    <div className="space-y-3">

                      {[
                        "Industry Ready Curriculum",
                        "Hands-on AI Engineering Training",
                        "Access to AI Interview Assessment",
                        "Real-World Projects",
                      ].map((item) => (

                        <div
                          key={item}
                          className="flex items-center gap-2.5"
                        >

                          <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />

                          <span className="text-xs text-slate-300">
                            {item}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>


                  <button
                    onClick={() => {
                      setActiveTab("curriculum");

                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="w-full mt-7 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white text-xs font-bold transition cursor-pointer"
                  >
                    View Full Syllabus →
                  </button>

                </div>


                {/* MODULES */}

                <div className="space-y-3">

                  {modules.slice(0, 5).map((mod) => {

                    const isExpanded = openModule === mod.n;

                    const moduleDays = days.filter(
                      (d) =>
                        d.day >= mod.days[0] &&
                        d.day <= mod.days[1]
                    );


                    return (
                      <div
                        key={mod.n}
                        className={`
                          rounded-xl border overflow-hidden transition-all

                          ${
                            isExpanded
                              ? "border-indigo-500/40 bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-950"
                              : "border-slate-800 bg-slate-900/70 hover:border-purple-500/30"
                          }
                        `}
                      >

                        <button
                          onClick={() =>
                            setOpenModule(isExpanded ? null : mod.n)
                          }
                          className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer hover:bg-slate-800/30 transition"
                        >

                          <div className="flex items-center gap-4 min-w-0">

                            <div className="w-10 h-10 shrink-0 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-[10px] font-mono font-bold text-indigo-400">
                              MODULE {mod.n}
                            </div>


                            <div className="min-w-0">

                              <span className="text-[9px] font-mono text-purple-400 uppercase tracking-wider">
                                Days {mod.days[0]} - {mod.days[1]}
                              </span>

                              <h3 className="text-sm sm:text-base font-semibold text-white mt-0.5 truncate">
                                {mod.title}
                              </h3>

                              <p className="text-[10px] text-slate-500 mt-1">
                                {moduleDays.length} lessons • Hands-on learning
                              </p>

                            </div>

                          </div>


                          <div className="w-8 h-8 shrink-0 rounded-full border border-slate-700 bg-slate-950 flex items-center justify-center">

                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-purple-400" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-slate-400" />
                            )}

                          </div>

                        </button>


                        {isExpanded && (

                          <div className="px-5 pb-5 border-t border-slate-800/70 bg-black/20">

                            <div className="pt-4 space-y-3">

                              {moduleDays.slice(0, 2).map((day) => (

                                <div
                                  key={day.day}
                                  className="rounded-lg border border-slate-800 bg-slate-950/60 p-4"
                                >

                                  <div className="flex items-center justify-between gap-3">

                                    <div className="flex items-center gap-3 min-w-0">

                                      <span className="px-2 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-400 font-mono font-bold">
                                        DAY {day.day}
                                      </span>

                                      <h4 className="text-xs font-semibold text-slate-200 truncate">
                                        {day.title}
                                      </h4>

                                    </div>

                                    <span className="hidden sm:block text-[9px] text-slate-500 font-mono">
                                      {day.type}
                                    </span>

                                  </div>


                                  <div className="flex flex-wrap gap-1.5 mt-3">

                                    {day.tools?.slice(0, 4).map((tool) => (

                                      <span
                                        key={tool}
                                        className="text-[9px] px-2 py-1 rounded-md bg-indigo-500/5 border border-slate-800 text-slate-400 font-mono"
                                      >
                                        {tool}
                                      </span>

                                    ))}

                                  </div>

                                </div>

                              ))}

                            </div>

                          </div>

                        )}

                      </div>
                    );
                  })}

                </div>

              </div>


              {modules.length > 5 && (

                <div className="flex justify-center mt-7">

                  <button
                    onClick={() => {
                      setActiveTab("curriculum");

                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-indigo-500/40 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition cursor-pointer"
                  >
                    {modules.length - 5} More Modules →
                  </button>

                </div>

              )}

            </section>


            {/* =================================================
                BUILDERS
            ================================================= */}

            <section className="py-20 border-t border-slate-800/80">

              <div className="text-center mb-12">

                <div className="inline-flex items-center justify-center px-8 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-purple-400/30 mb-6">

                  <span className="text-xs sm:text-sm font-semibold text-purple-300 tracking-wide">
                    NOT JUST JOBS
                  </span>

                </div>


                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">

                  We Also Support{" "}

                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Builders.
                  </span>

                </h2>


                <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">

                  Go beyond getting hired. Learn how to turn your technical
                  skills into products, startups and real-world opportunities.

                </p>

              </div>


              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                {[
                  {
                    title: (
                      <>
                        How To Build
                        <br />
                        Startups
                      </>
                    ),
                    icon: Rocket,
                  },

                  {
                    title: (
                      <>
                        How To
                        <br />
                        Validate Ideas
                      </>
                    ),
                    icon: Lightbulb,
                  },

                  {
                    title: (
                      <>
                        How To Launch
                        <br />
                        Products
                      </>
                    ),
                    icon: Cpu,
                  },

                  {
                    title: (
                      <>
                        How To Pitch
                        <br />
                        To Investors
                      </>
                    ),
                    icon: Handshake,
                  },
                ].map((item) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title?.toString()}
                      className="group relative h-[150px] rounded-xl border border-slate-700 bg-slate-950/80 overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)]"
                    >

                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-transparent to-pink-500/[0.04] opacity-0 group-hover:opacity-100 transition" />

                      <div className="relative z-10 w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">

                        <Icon className="w-6 h-6 text-indigo-400" />

                      </div>


                      <h3 className="relative z-10 text-xs sm:text-sm font-semibold text-slate-200 leading-tight">
                        {item.title}
                      </h3>

                    </div>
                  );
                })}

              </div>

            </section>


            {/* =================================================
                CERTIFICATION
            ================================================= */}

            <section className="py-20 border-t border-slate-800/80">

              <div className="text-center mb-14">

                <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">

                  Get Certified With Recognized

                  <br />

                  Validation

                </h2>

              </div>


              <div className="max-w-6xl mx-auto border border-slate-800 rounded-2xl bg-black overflow-hidden">

                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">


                  {/* LEFT */}

                  <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">

                    <h3 className="text-4xl sm:text-5xl font-black text-white leading-tight">

                      Earn Certificate Of

                      <br />

                      <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Completion
                      </span>

                    </h3>


                    <div className="mt-10 space-y-7">

                      {[
                        "Build and showcase real AI projects and gain hands-on experience by completing the 31-day AI engineering cohort.",

                        "Complete AI-powered technical assessments and receive detailed feedback based on your learning journey.",

                        "Earn a verified certificate upon successful completion of the cohort and interview assessment.",
                      ].map((text) => (

                        <div
                          key={text}
                          className="flex gap-4 items-start"
                        >

                          <span className="text-indigo-400 text-xl">
                            •
                          </span>

                          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            {text}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>


                  {/* CERTIFICATE */}

                  <div className="relative flex items-center justify-center p-8 sm:p-12 overflow-hidden">

                    <div className="absolute w-[350px] h-[350px] bg-emerald-500/10 blur-[100px] rounded-full" />


                    <div className="absolute w-[78%] max-w-[520px] aspect-[1.42/1] rounded-xl bg-slate-700/70 border border-slate-600/50 translate-x-6 -translate-y-5" />


                    <div className="relative w-full max-w-[540px] aspect-[1.42/1] bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-300 text-slate-900">

                      <div className="absolute top-0 right-0 text-indigo-800 px-5 py-3 text-[9px] font-bold tracking-wider">
                        ABTALKS®
                      </div>


                      <div className="absolute left-6 top-1/2 -translate-y-1/2">

                        <div className="text-indigo-800 px-2.5 py-3 text-[10px] tracking-widest [writing-mode:vertical-rl] rotate-180">
                          CERTIFICATE
                        </div>

                      </div>


                      <div className="h-full flex flex-col justify-center px-14 sm:px-20">

                        <p className="text-[7px] sm:text-[9px] tracking-[0.35em] text-slate-700 uppercase mb-2">
                          Certificate of Completion
                        </p>


                        <h4 className="text-lg sm:text-2xl font-black text-slate-800 leading-tight">

                          AI-DRIVEN{" "}

                          <span className="text-indigo-900">
                            GENERATIVE AI
                          </span>

                          <br />

                          & AGENTIC ENGINEERING

                        </h4>


                        <div className="mt-5">

                          <p className="text-[7px] text-slate-500 uppercase tracking-widest">
                            Presented To
                          </p>

                          <p className="text-base sm:text-xl font-black text-slate-900 mt-1">
                            Candidate
                          </p>

                          <div className="h-px bg-slate-400 w-full mt-2" />

                        </div>


                        <p className="text-[6px] sm:text-[8px] text-slate-500 leading-relaxed mt-4 max-w-md">

                          Awarded for successful completion of the ABTalks
                          31-Day AI Cohort and AI Interview Assessment.

                        </p>


                        <div className="flex justify-between items-end mt-5">

                          <div>

                            <div className="w-20 border-b border-slate-500 mb-1" />

                            <p className="text-[6px] text-slate-500">
                              AI Cohort Instructor
                            </p>

                          </div>


                          <div className="text-right">

                            <p className="text-[7px] text-slate-500">
                              Credential ID
                            </p>

                            <p className="text-[7px] font-bold text-slate-800">
                              ABT-2026-AI-001
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </section>


            {/* =================================================
                REVIEWS
            ================================================= */}

            <section className="py-16 border-t border-slate-800/80">

              <div className="text-center mb-12">

                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">
                  PLACEMENT STORIES
                </span>

                <h2 className="text-3xl font-black text-white">
                  What Our Cohort Graduates Say
                </h2>

              </div>


              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {reviews.map((review) => (

                  <div
                    key={review.name}
                    className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between"
                  >

                    <div>

                      <div className="flex gap-1 text-amber-400 mb-4">

                        {[...Array(review.stars)].map((_, index) => (
                          <Star
                            key={index}
                            className="w-4 h-4 fill-current"
                          />
                        ))}

                      </div>


                      <p className="text-xs text-slate-300 leading-relaxed italic">
                        "{review.review}"
                      </p>

                    </div>


                    <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-3">

                      <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 font-bold text-xs flex items-center justify-center border border-indigo-500/30">
                        {review.avatar}
                      </div>

                      <div>

                        <h4 className="font-bold text-xs text-white">
                          {review.name}
                        </h4>

                        <p className="text-[10px] text-indigo-400 font-mono font-semibold">
                          {review.role}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </section>


            {/* =================================================
                FAQ
            ================================================= */}

            <section className="py-20 border-t border-slate-800/80">

              <div className="text-center mb-12">

                <div className="inline-flex mb-5">

                  <span className="px-6 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-[0.2em] text-purple-300 border border-purple-500/30 bg-purple-500/10">
                    FAQs
                  </span>

                </div>


                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-3">
                  GOT QUESTIONS?
                </span>


                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">

                  Frequently Asked Questions

                  <br />

                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    From Our Students
                  </span>

                </h2>


                <p className="text-slate-500 text-sm mt-4 max-w-xl mx-auto">
                  Everything you need to know about the ABTalks AI Cohort.
                </p>

              </div>


              <div className="max-w-4xl mx-auto space-y-4">

                {faqs.map((faq, index) => {

                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={faq.q}
                      className={`
                        rounded-2xl border overflow-hidden transition-all duration-300

                        ${
                          isOpen
                            ? "border-purple-500/50 bg-gradient-to-br from-indigo-950/70 via-purple-950/50 to-pink-950/30 shadow-[0_15px_50px_rgba(139,92,246,0.20)]"
                            : "border-slate-800 bg-slate-950/70 hover:border-purple-500/40"
                        }
                      `}
                    >

                      <button
                        onClick={() =>
                          setOpenFaq(isOpen ? null : index)
                        }
                        className="w-full px-5 sm:px-6 py-5 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer"
                      >

                        <div className="flex items-center gap-4 min-w-0">

                          <span className="hidden sm:flex w-9 h-9 shrink-0 items-center justify-center rounded-lg text-xs font-mono font-bold bg-slate-900 text-slate-500 border border-slate-800">
                            {String(index + 1).padStart(2, "0")}
                          </span>


                          <span
                            className={`text-sm sm:text-base font-semibold ${
                              isOpen
                                ? "text-purple-300"
                                : "text-slate-300"
                            }`}
                          >
                            {faq.q}
                          </span>

                        </div>


                        <div className="w-9 h-9 shrink-0 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center">

                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-purple-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                          )}

                        </div>

                      </button>


                      {isOpen && (

                        <div className="px-5 sm:px-6 pb-6">

                          <div className="border-t border-purple-500/20 pt-5">

                            <div className="flex gap-4">

                              <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-indigo-400 via-purple-500 to-pink-500" />

                              <p className="text-sm text-slate-400 leading-7">
                                {faq.a}
                              </p>

                            </div>

                          </div>

                        </div>

                      )}

                    </div>
                  );
                })}

              </div>

            </section>

          </div>
        )}


        {/* =====================================================
            FULL CURRICULUM
        ===================================================== */}

        {activeTab === "curriculum" && (

          <div className="mt-12 max-w-5xl mx-auto">

            <div className="text-center mb-10">

              <h2 className="text-3xl font-black text-white">
                31-Day AI Cohort Syllabus
              </h2>

              <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
                Step-by-step breakdown of tools, RAG architectures,
                and agentic workflows trained during the cohort.
              </p>

            </div>


            <div className="space-y-4">

              {modules.map((mod) => {

                const isExpanded = openModule === mod.n;

                const moduleDays = days.filter(
                  (d) =>
                    d.day >= mod.days[0] &&
                    d.day <= mod.days[1]
                );


                return (
                  <div
                    key={mod.n}
                    className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden"
                  >

                    <button
                      onClick={() =>
                        setOpenModule(isExpanded ? null : mod.n)
                      }
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

                          <h3 className="text-lg font-bold text-white">
                            {mod.title}
                          </h3>

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

                        {moduleDays.map((day) => (

                          <div
                            key={day.day}
                            className="bg-slate-900/90 border border-slate-800 rounded-xl p-4"
                          >

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">

                              <div className="flex items-center gap-3">

                                <span className="px-2.5 py-0.5 bg-indigo-600/20 text-indigo-400 font-mono text-xs font-bold rounded-md border border-indigo-500/30">
                                  Day {day.day}
                                </span>

                                <h4 className="font-bold text-sm text-slate-100">
                                  {day.title}
                                </h4>

                              </div>


                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                                {day.type}
                              </span>

                            </div>


                            <div className="flex flex-wrap gap-1.5 my-3">

                              {day.tools?.map((tool) => (

                                <span
                                  key={tool}
                                  className="text-[10px] font-mono bg-slate-950 text-indigo-300 border border-slate-800 px-2.5 py-1 rounded-md"
                                >
                                  {tool}
                                </span>

                              ))}

                            </div>


                            <ul className="space-y-1 mt-2">

                              {day.objectives?.map((objective) => (

                                <li
                                  key={objective}
                                  className="text-xs text-slate-400 flex items-start gap-2"
                                >

                                  <span className="text-indigo-400 font-bold">
                                    •
                                  </span>

                                  {objective}

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


        {/* =====================================================
            INTERVIEW PORTAL
        ===================================================== */}

        {activeTab === "roster" && (

          <div className="mt-12">

            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 border-b border-slate-800/80 pb-4">

              <div>

                <h2 className="text-2xl font-black text-white flex items-center gap-2">

                  <Users className="w-6 h-6 text-indigo-400" />

                  ABTalks Technical Interview Portal

                </h2>

                <p className="text-xs text-slate-400 mt-1">
                  Select a candidate to start the adaptive LLM technical assessment.
                </p>

              </div>


              <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full">
                {candidates.length} Profiles Loaded
              </span>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {candidates.map((item) => {

                const {
                  member,
                  missions,
                  signals,
                } = item;


                const passedMissions =
                  missions?.filter((mission) => mission.passed).length || 0;


                const totalMissions =
                  missions?.length || 0;


                const completionPercentage =
                  totalMissions > 0
                    ? Math.round(
                        (passedMissions / totalMissions) * 100
                      )
                    : 0;


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


                      <p className="text-xs text-slate-400 mt-1 font-medium">
                        {member.jobRole} • {member.yearsExperience} Yrs Exp
                      </p>


                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                        {member.education}
                      </p>


                      {/* PROGRESS */}

                      <div className="mt-5 pt-4 border-t border-slate-800/80">

                        <div className="flex justify-between text-xs mb-1.5 font-mono">

                          <span className="text-slate-400">
                            Missions Completed
                          </span>

                          <span className="text-indigo-400 font-bold">
                            {passedMissions}/{totalMissions} ({completionPercentage}%)
                          </span>

                        </div>


                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">

                          <div
                            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all"
                            style={{
                              width: `${completionPercentage}%`,
                            }}
                          />

                        </div>

                      </div>


                      <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] font-mono text-slate-400">

                        <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800">

                          Commit Days:

                          <span className="text-white font-bold ml-1">
                            {signals?.commitDays || 0}
                          </span>

                        </div>


                        <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800">

                          First Try:

                          <span className="text-indigo-400 font-bold ml-1">
                            {signals?.missionsFirstTry || 0}
                          </span>

                        </div>

                      </div>

                    </div>


                    <button
                      onClick={() => onStartInterview(item)}
                      className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-indigo-600/25 cursor-pointer text-xs"
                    >

                      <Play className="w-4 h-4 fill-current" />

                      Start Interview Assessment

                    </button>

                  </div>
                );
              })}

            </div>

          </div>

        )}

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </div>
  );
}