import React, { useState } from 'react';
import { 
  Sparkles, BookOpen, Users, Play, Award, 
  Terminal, ChevronDown, ChevronUp, Home, Star,
  CheckCircle2, Share2, Trophy,  Rocket,Lightbulb,Cpu,
 Handshake
} from 'lucide-react';
import candidatesData from '../data/candidates.json';
import curriculumData from '../data/curriculum.json';

import Navbar from './Navbar';


import company1 from "../assets/8KNYTYheOg273ilY2UKT4I0i6tw.webp";
import company2 from "../assets/Aaitwyz8Bn0iAMCL5QA3tLToEWU.webp";
import company3 from "../assets/cTFmAlgaEelNJtugChUwoMcoTyg.webp";
import company4 from "../assets/KMovuQPuiF4uT9tKe43HZgN1lms.webp";
import company5 from "../assets/pxv9LzlddUxmQlc2MokcI9Oi3lc.webp";
import company6 from "../assets/ZsrrIuPtKUuolA7ZfD4oupAz0.webp";
import company7 from "../assets/Google-Logo-PNG-Images-HD.png";
import company8 from "../assets/White-Amazon-Logo-PNG-HD-Quality.png";
import Footer from './Footer';



export default function LandingPage({ onStartInterview }) {
  const [activeTab, setActiveTab] = useState('home');
  const [openModule, setOpenModule] = useState(1);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTechTab, setActiveTechTab] = useState('Frontend');

  const candidates = candidatesData.candidates || [];
  const modules = curriculumData.modules || [];
  const days = curriculumData.days || [];

  const mentors = [
    {
      name: 'Harsh Sharma',
      role: 'Lead AI Engineer & Cohort Instructor',
      exp: 'Ex-Google / 8+ Yrs in Generative AI',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
      bio: 'Specializes in Large Language Models, Fine-Tuning (LoRA/QLoRA), RAG Architectures, and Multi-Agent Orchestration.',
    },
    {
      name: 'Sarthak Roy',
      role: 'Senior Systems & Infrastructure Specialist',
      exp: 'Ex-Meta / Kubernetes & MCP Expert',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
      bio: 'Expert in Dockerizing LLM Backends, Vector DB Optimizations (Pinecone/ChromaDB), and Agentic Memory Systems.',
    },
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Placed at Cohere AI',
      review:
        'The 31-day AI Cohort completely transformed my understanding of Vector Databases and RAG. The live evaluation helped me clear 4 technical rounds easily!',
      stars: 5,
      avatar: 'SJ',
    },
    {
      name: 'Emily Chen',
      role: 'Placed at Meta',
      review:
        'Building end-to-end Multi-Agent workflows with LangGraph and Model Context Protocol (MCP) gave me the exact hands-on edge required for Senior AI roles.',
      stars: 5,
      avatar: 'EC',
    },
    {
      name: 'Ravi Patel',
      role: 'Placed at Pinecone',
      review:
        'The hands-on projects on Day 15 (LoRA Fine-tuning) and Day 28 (K8s Deployment) were top notch. Got hired right after the Capstone Demo!',
      stars: 5,
      avatar: 'RP',
    },
  ];

  const faqs = [
    {
      q: 'ABTalks AI Cohort Assessment & Placement Portal kaise kaam karta hai?',
      a: 'Yeh platform 31-day AI Cohort ke curriculum par candidates ki mastery evaluate karta hai aur LLM-driven adaptive interviews ke through placement report generate karta hai.',
    },
    {
      q: 'Kya cohort complete hone par Official Completion Certificate milta hai?',
      a: 'Haan! Successfully 31-day missions pass karne aur interview clearing par Industry-Recognized Verified Digital Certificate milta hai jisme unique Credential ID aur QR verification hoti hai.',
    },
    {
      q: 'Placement support kaise provide kiya jata hai?',
      a: 'Graduate candidates ke interview scores humari hiring partner companies ke hiring managers ko direct refer kiye jate hain.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-indigo-600/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-[1200px] right-0 w-[600px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <main className="max-w-7xl mx-auto px-6 pb-24 relative z-10">

        {activeTab === 'home' && (
          <div>
            <section className="pt-20 pb-16 text-center relative">

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
                31 Days of hands-on engineering covering Vector Search, RAG Engines, Multi-Agent Orchestration, Model Context Protocol (MCP), and Kubernetes. Evaluated by adaptive AI interview agents!
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setActiveTab('roster')}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-xl shadow-indigo-600/30 transition flex items-center justify-center gap-2 cursor-pointer"
                >

                  <Play className="w-4 h-4 fill-current" />

                  Launch Candidate Interview Assessment

                </button>

                <button
                  onClick={() => setActiveTab('curriculum')}
                  className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 px-8 py-4 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
                >

                  <BookOpen className="w-4 h-4" />

                  Explore 31-Day Syllabus

                </button>
              </div>
            </section>
<section className="py-16 border-t border-slate-800/80 overflow-hidden">

  <div className="relative w-full overflow-hidden">

    {/* LEFT FADE */}
    <div className="
      absolute
      left-0
      top-0
      bottom-0
      w-20
      md:w-36
      bg-gradient-to-r
      from-[#07090e]
      to-transparent
      z-10
      pointer-events-none
    " />

    {/* RIGHT FADE */}
    <div className="
      absolute
      right-0
      top-0
      bottom-0
      w-20
      md:w-36
      bg-gradient-to-l
      from-[#07090e]
      to-transparent
      z-10
      pointer-events-none
    " />


    {/* MARQUEE */}
    <div className="
      flex
      w-max
      animate-company-marquee
      hover:[animation-play-state:paused]
    ">

      {/* FIRST SET */}
      <div className="flex items-center gap-12 md:gap-20 px-6">

        <img
          src={company1}
          alt="Company Logo"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />

        <img
          src={company2}
          alt="Company Logo"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />

        <img
          src={company3}
          alt="Company Logo"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />

        <img
          src={company4}
          alt="Company Logo"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />

        <img
          src={company5}
          alt="Company Logo"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />

        <img
          src={company6}
          alt="Company Logo"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />

        <img
          src={company7}
          alt="Google"
          className="h-12 sm:h-14 md:h-16 w-auto object-contain"
        />

        <img
          src={company8}
          alt="Amazon"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />

      </div>


      {/* DUPLICATE SET — INFINITE LOOP */}
      <div className="flex items-center gap-12 md:gap-20 px-6">

        <img
          src={company1}
          alt="Company Logo"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />

        <img
          src={company2}
          alt="Company Logo"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />

        <img
          src={company3}
          alt="Company Logo"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />

        <img
          src={company4}
          alt="Company Logo"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />

        <img
          src={company5}
          alt="Company Logo"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />

        <img
          src={company6}
          alt="Company Logo"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />

        <img
          src={company7}
          alt="Google"
          className="h-12 sm:h-14 md:h-16 w-auto object-contain"
        />

        <img
          src={company8}
          alt="Amazon"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />

      </div>

    </div>

  </div>


  {/* MARQUEE ANIMATION */}
  <style>{`

    @keyframes company-marquee {

      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-50%);
      }

    }

    .animate-company-marquee {

      animation:
        company-marquee
        25s
        linear
        infinite;

    }

  `}</style>

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
                  Get guidance across Generative AI, RAG,
                  Agentic Systems, MCP and production deployment.
                </p>

              </div>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                {mentors.map((m, idx) => (

                  <div
                    key={idx}
                    className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start"
                  >

                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-20 h-20 rounded-2xl object-cover border border-indigo-500/30 shrink-0"
                    />

                    <div>

                      <h3 className="font-bold text-lg text-white">
                        {m.name}
                      </h3>

                      <p className="text-xs text-indigo-400 font-mono mt-0.5">
                        {m.role}
                      </p>

                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                        {m.exp}
                      </p>

                      <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                        {m.bio}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </section>


                {/* =================================================
    TECHNOLOGIES
================================================= */}

<section className="relative py-20 border-t border-slate-800/80 overflow-hidden">

  {/* BACKGROUND GLOW - LEFT */}
  <div className="
    absolute
    -left-40
    top-20
    w-[450px]
    h-[450px]
    bg-indigo-500/10
    blur-[150px]
    rounded-full
    pointer-events-none
  " />

  {/* BACKGROUND GLOW - RIGHT */}
  <div className="
    absolute
    -right-40
    top-60
    w-[450px]
    h-[450px]
    bg-purple-500/10
    blur-[150px]
    rounded-full
    pointer-events-none
  " />

  {/* BACKGROUND GLOW - CENTER */}
  <div className="
    absolute
    left-1/2
    -translate-x-1/2
    top-40
    w-[500px]
    h-[300px]
    bg-pink-500/5
    blur-[130px]
    rounded-full
    pointer-events-none
  " />

  <div className="relative z-10">

    {/* ================= HEADER ================= */}

    <div className="text-center mb-12">

      <div className="inline-flex items-center justify-center mb-7">

        <span
          className="
            px-8
            py-2
            rounded-full
            bg-gradient-to-r
            from-indigo-500/30
            via-purple-500/20
            to-pink-500/30
            border
            border-purple-400/30
            text-white
            text-sm
            sm:text-base
            font-medium
            shadow-[0_0_30px_rgba(139,92,246,0.15)]
          "
        >
          TECHNOLOGIES
        </span>

      </div>

      <h2 className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        font-black
        text-white
        tracking-tight
      ">
        Industry Tools You'll Master
      </h2>

      <p className="
        text-slate-400
        text-sm
        sm:text-base
        mt-4
        max-w-2xl
        mx-auto
      ">
        Master the modern tools and technologies used to build
        production-ready AI applications.
      </p>

    </div>


    {/* ================= CATEGORY TABS ================= */}

    <div className="
      flex
      flex-wrap
      justify-center
      gap-3
      mb-8
    ">

      {[
        'Frontend',
        'Backend',
        'AI Engineering',
        'Infrastructure',
        'Engineering Skills',
      ].map((tab) => (

        <button
          key={tab}
          onClick={() => setActiveTechTab(tab)}
          className={`
            px-6
            py-3
            rounded-xl
            text-sm
            font-semibold
            border
            transition-all
            duration-300
            cursor-pointer

            ${
              activeTechTab === tab
                ? `
                  bg-gradient-to-r
                  from-indigo-500
                  via-purple-500
                  to-pink-500
                  text-white
                  border-purple-400/50
                  shadow-lg
                  shadow-purple-500/25
                  scale-[1.02]
                `
                : `
                  bg-slate-950/80
                  text-slate-300
                  border-slate-700
                  hover:border-purple-500/40
                  hover:bg-slate-900
                  hover:text-white
                `
            }
          `}
        >
          {tab}
        </button>

      ))}

    </div>


    {/* ================= TOOLS CONTAINER ================= */}

    <div className="
      max-w-6xl
      mx-auto
      rounded-2xl
      border
      border-indigo-500/30
      bg-black/60
      backdrop-blur-sm
      p-5
      sm:p-8
      relative
      overflow-hidden
      shadow-[0_0_60px_rgba(99,102,241,0.08)]
    ">

      {/* INNER GLOW */}

      <div className="
        absolute
        inset-0
        bg-gradient-to-br
        from-indigo-500/[0.05]
        via-purple-500/[0.03]
        to-pink-500/[0.05]
        pointer-events-none
      " />


      <h3 className="
        relative
        z-10
        text-center
        text-xl
        sm:text-2xl
        font-bold
        text-white
        mb-8
      ">
        TOOLS AND TECHNOLOGIES
      </h3>


      {/* ================= FRONTEND ================= */}

      {activeTechTab === 'Frontend' && (

        <div className="
          relative
          z-10
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
        ">

          {/* REACT */}

          <div className="
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
            hover:border-cyan-400/50
            hover:-translate-y-1
            hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]
          ">

            <div className="
              h-32
              flex
              items-center
              justify-center
            ">

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="
                  w-24
                  h-24
                  object-contain
                  drop-shadow-[0_0_25px_rgba(34,211,238,0.55)]
                  group-hover:scale-110
                  transition-transform
                  duration-300
                "
              />

            </div>

            <h4 className="
              mt-5
              text-base
              font-semibold
              text-white
            ">
              React
            </h4>

          </div>


          {/* NEXT JS */}

          <div className="
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
          ">

            <div className="
              h-32
              flex
              items-center
              justify-center
            ">

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                className="
                  w-24
                  h-24
                  object-contain
                  invert
                  drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]
                  group-hover:scale-110
                  transition-transform
                  duration-300
                "
              />

            </div>

            <h4 className="
              mt-5
              text-base
              font-semibold
              text-white
            ">
              Next.js
            </h4>

          </div>


          {/* TYPESCRIPT */}

          <div className="
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
            hover:border-indigo-400/50
            hover:-translate-y-1
            hover:shadow-[0_0_35px_rgba(99,102,241,0.15)]
          ">

            <div className="
              h-32
              flex
              items-center
              justify-center
            ">

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="
                  w-24
                  h-24
                  object-contain
                  drop-shadow-[0_0_25px_rgba(99,102,241,0.5)]
                  group-hover:scale-110
                  transition-transform
                  duration-300
                "
              />

            </div>

            <h4 className="
              mt-5
              text-base
              font-semibold
              text-white
            ">
              TypeScript
            </h4>

          </div>


          {/* TAILWIND */}

          <div className="
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
            hover:border-pink-400/50
            hover:-translate-y-1
            hover:shadow-[0_0_35px_rgba(236,72,153,0.12)]
          ">

            <div className="
              h-32
              flex
              items-center
              justify-center
            ">

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind CSS"
                className="
                  w-24
                  h-24
                  object-contain
                  drop-shadow-[0_0_25px_rgba(236,72,153,0.45)]
                  group-hover:scale-110
                  transition-transform
                  duration-300
                "
              />

            </div>

            <h4 className="
              mt-5
              text-base
              font-semibold
              text-white
            ">
              Tailwind CSS
            </h4>

          </div>

        </div>

      )}


      {/* ================= BACKEND ================= */}

      {activeTechTab === 'Backend' && (

        <div className="
          relative
          z-10
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
        ">

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
            name="Python"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />

          <TechCard
            name="FastAPI"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
          />

        </div>

      )}


      {/* ================= AI ENGINEERING ================= */}

      {activeTechTab === 'AI Engineering' && (

        <div className="
          relative
          z-10
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
        ">

          <TechCard
            name="LangChain"
            icon="https://cdn.simpleicons.org/langchain/ffffff"
          />

          <TechCard
            name="LangGraph"
            icon="https://cdn.simpleicons.org/langgraph/ffffff"
          />

          <TechCard
            name="OpenAI"
            icon="https://cdn.simpleicons.org/openai/ffffff"
          />

          <TechCard
            name="Pinecone"
            icon="https://cdn.simpleicons.org/pinecone/ffffff"
          />

        </div>

      )}


      {/* ================= INFRASTRUCTURE ================= */}

      {activeTechTab === 'Infrastructure' && (

        <div className="
          relative
          z-10
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
        ">

          <TechCard
            name="Docker"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          />

          <TechCard
            name="Kubernetes"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
          />

          <TechCard
            name="AWS"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          />

          <TechCard
            name="GitHub"
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            darkIcon
          />

        </div>

      )}


      {/* ================= ENGINEERING SKILLS ================= */}

      {activeTechTab === 'Engineering Skills' && (

        <div className="
          relative
          z-10
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
        ">

          <TechCard
            name="System Design"
            icon="https://cdn.simpleicons.org/diagramsdotnet/ffffff"
          />

          <TechCard
            name="API Design"
            icon="https://cdn.simpleicons.org/swagger/ffffff"
          />

          <TechCard
            name="Git & GitHub"
            icon="https://cdn.simpleicons.org/git/ffffff"
          />

          <TechCard
            name="Testing"
            icon="https://cdn.simpleicons.org/jest/ffffff"
          />

        </div>

      )}

    </div>


    {/* ================= BOTTOM BUTTONS ================= */}

    <div className="
      flex
      flex-wrap
      justify-center
      gap-3
      mt-6
    ">

      <button
        onClick={() => setActiveTab('curriculum')}
        className="
          px-5
          py-3
          rounded-lg
          border
          border-slate-700
          bg-slate-900
          text-white
          text-sm
          font-semibold
          hover:border-indigo-500/50
          hover:bg-slate-800
          transition
          cursor-pointer
        "
      >
        Courses
      </button>


      <button
        className="
          px-5
          py-3
          rounded-lg
          border
          border-slate-700
          bg-slate-900
          text-white
          text-sm
          font-semibold
          hover:border-purple-500/50
          hover:bg-slate-800
          transition
          cursor-pointer
        "
      >
        Request Callback
      </button>


      <button
        onClick={() => setActiveTab('roster')}
        className="
          px-6
          py-3
          rounded-lg
          bg-gradient-to-r
          from-indigo-500
          via-purple-500
          to-pink-500
          text-white
          text-sm
          font-bold
          hover:from-indigo-400
          hover:via-purple-400
          hover:to-pink-400
          transition
          shadow-lg
          shadow-purple-500/25
          cursor-pointer
        "
      >
        Buy Now →
      </button>

    </div>

  </div>

</section>


{/* =================================================
    CURRICULUM PREVIEW
================================================= */}

<section className="py-20 border-t border-slate-800/80 relative overflow-hidden">

  {/* BACKGROUND GLOWS */}
  <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

  {/* HEADER */}
  <div className="text-center mb-12 relative z-10">

    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full
      bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20
      border border-purple-400/30
      text-purple-300 text-xs font-bold uppercase tracking-[0.2em]
      shadow-[0_0_30px_rgba(139,92,246,0.12)] mb-5"
    >
      <BookOpen className="w-4 h-4" />
      Curriculum
    </div>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
      Structured Curriculum Designed For
      <br />
      <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Real Growth
      </span>
    </h2>

    <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
      A structured 31-day learning journey designed to take you
      from AI fundamentals to production-ready engineering.
    </p>

  </div>


  {/* MAIN CURRICULUM CONTAINER */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 relative z-10">


    {/* =========================================
        LEFT — PREREQUISITES
    ========================================= */}

    <div className="
      bg-gradient-to-br from-slate-950 via-slate-900 to-black
      border border-slate-800
      rounded-2xl
      p-6
      h-fit
      shadow-[0_20px_60px_rgba(0,0,0,0.25)]
    ">

      <div className="w-10 h-10 rounded-xl
        bg-indigo-500/10
        border border-indigo-500/20
        flex items-center justify-center mb-5"
      >
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


      {/* LEVEL + DURATION */}

      <div className="flex items-center gap-4 mt-6">

        <div className="flex items-center gap-2">
          <span className="text-indigo-400">↗</span>

          <span className="text-xs font-semibold text-slate-200">
            Beginner To Advance
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-purple-400">◷</span>

          <span className="text-xs font-semibold text-slate-200">
            31 Days
          </span>
        </div>

      </div>


      {/* QUICK OVERVIEW */}

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
          ].map((item, index) => (

            <div
              key={index}
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


      {/* BUTTON */}

      <button
        onClick={() => setActiveTab("curriculum")}
        className="
          w-full
          mt-7
          py-3
          px-4
          rounded-xl
          bg-gradient-to-r
          from-indigo-600
          via-purple-600
          to-pink-600
          hover:from-indigo-500
          hover:via-purple-500
          hover:to-pink-500
          text-white
          text-xs
          font-bold
          transition
          shadow-lg
          shadow-purple-500/20
          cursor-pointer
        "
      >
        View Full Syllabus →
      </button>

    </div>


    {/* =========================================
        RIGHT — MODULES
    ========================================= */}

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
              rounded-xl
              border
              overflow-hidden
              transition-all
              duration-300

              ${
                isExpanded
                  ? "border-indigo-500/40 bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-950"
                  : "border-slate-800 bg-slate-900/70 hover:border-purple-500/30"
              }
            `}
          >

            {/* MODULE HEADER */}

            <button
              onClick={() =>
                setOpenModule(isExpanded ? null : mod.n)
              }
              className="
                w-full
                px-5
                py-4
                flex
                items-center
                justify-between
                text-left
                cursor-pointer
                hover:bg-slate-800/30
                transition
              "
            >

              <div className="flex items-center gap-4 min-w-0">

                {/* MODULE NUMBER */}

                <div className="
                  w-10
                  h-10
                  shrink-0
                  rounded-lg
                  bg-indigo-500/10
                  border border-indigo-500/20
                  flex
                  items-center
                  justify-center
                  text-[10px]
                  font-mono
                  font-bold
                  text-indigo-400
                ">
                  MODULE {mod.n}
                </div>


                <div className="min-w-0">

                  <span className="
                    text-[9px]
                    font-mono
                    text-purple-400
                    uppercase
                    tracking-wider
                  ">
                    Days {mod.days[0]} - {mod.days[1]}
                  </span>

                  <h3 className="
                    text-sm
                    sm:text-base
                    font-semibold
                    text-white
                    mt-0.5
                    truncate
                  ">
                    {mod.title}
                  </h3>

                  <p className="text-[10px] text-slate-500 mt-1">
                    {moduleDays.length} lessons • Hands-on learning
                  </p>

                </div>

              </div>


              {/* ARROW */}

              <div className={`
                w-8
                h-8
                shrink-0
                rounded-full
                border
                flex
                items-center
                justify-center
                transition-all
                duration-300

                ${
                  isExpanded
                    ? "border-purple-400/40 bg-purple-500/10"
                    : "border-slate-700 bg-slate-950"
                }
              `}>

                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-purple-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                )}

              </div>

            </button>


            {/* MODULE CONTENT */}

            {isExpanded && (

              <div className="
                px-5
                pb-5
                border-t
                border-slate-800/70
                bg-black/20
              ">

                <div className="pt-4 space-y-3">

                  {moduleDays.slice(0, 2).map((day) => (

                    <div
                      key={day.day}
                      className="
                        rounded-lg
                        border
                        border-slate-800
                        bg-slate-950/60
                        p-4
                      "
                    >

                      <div className="flex items-center justify-between gap-3">

                        <div className="flex items-center gap-3">

                          <span className="
                            px-2
                            py-1
                            rounded-md
                            bg-indigo-500/10
                            border border-indigo-500/20
                            text-[10px]
                            text-indigo-400
                            font-mono
                            font-bold
                          ">
                            DAY {day.day}
                          </span>

                          <h4 className="text-xs font-semibold text-slate-200">
                            {day.title}
                          </h4>

                        </div>

                        <span className="
                          hidden sm:block
                          text-[9px]
                          text-slate-500
                          font-mono
                        ">
                          {day.type}
                        </span>

                      </div>


                      {/* TOOLS */}

                      <div className="flex flex-wrap gap-1.5 mt-3">

                        {day.tools?.slice(0, 4).map((tool, i) => (

                          <span
                            key={i}
                            className="
                              text-[9px]
                              px-2
                              py-1
                              rounded-md
                              bg-indigo-500/5
                              border border-slate-800
                              text-slate-400
                              font-mono
                            "
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


  {/* MORE MODULES BUTTON */}

  {modules.length > 5 && (

    <div className="flex justify-center mt-7 relative z-10">

      <button
        onClick={() => setActiveTab("curriculum")}
        className="
          px-6
          py-3
          rounded-xl
          bg-slate-900
          border border-slate-700
          hover:border-indigo-500/40
          hover:bg-slate-800
          text-slate-300
          hover:text-white
          text-xs
          font-semibold
          transition
          shadow-lg
          cursor-pointer
        "
      >
        {modules.length - 5} More Modules →
      </button>

    </div>

  )}

</section>



{/* =================================================
    NOT JUST JOBS — BUILDERS SECTION
================================================= */}

<section className="py-20 border-t border-slate-800/80 relative overflow-hidden">

  {/* BACKGROUND GLOWS */}

  <div className="
    absolute
    top-10
    left-1/4
    w-[350px]
    h-[250px]
    bg-indigo-600/10
    blur-[130px]
    rounded-full
    pointer-events-none
  " />

  <div className="
    absolute
    bottom-0
    right-1/4
    w-[350px]
    h-[250px]
    bg-purple-600/10
    blur-[130px]
    rounded-full
    pointer-events-none
  " />


  {/* HEADER */}

  <div className="relative z-10 text-center mb-10">

    <div className="
      inline-flex
      items-center
      justify-center
      px-8
      py-2
      rounded-full
      bg-gradient-to-r
      from-indigo-500/20
      via-purple-500/20
      to-pink-500/20
      border
      border-purple-400/30
      shadow-[0_0_30px_rgba(139,92,246,0.12)]
      mb-6
    ">

      <span className="
        text-xs
        sm:text-sm
        font-semibold
        text-purple-300
        tracking-wide
      ">
        NOT JUST JOBS
      </span>

    </div>


    <h2 className="
      text-3xl
      sm:text-4xl
      md:text-5xl
      font-black
      text-white
      tracking-tight
    ">
      We Also Support{" "}

      <span className="
        bg-gradient-to-r
        from-indigo-400
        via-purple-400
        to-pink-400
        bg-clip-text
        text-transparent
      ">
        Builders.
      </span>

    </h2>

    <p className="
      text-slate-400
      text-sm
      sm:text-base
      mt-4
      max-w-2xl
      mx-auto
    ">
      Go beyond getting hired. Learn how to turn your technical
      skills into products, startups and real-world opportunities.
    </p>

  </div>


  {/* BUILDER CARDS */}

  <div className="
    relative
    z-10
    max-w-5xl
    mx-auto
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-4
  ">


    {/* CARD 1 */}

    <div className="
      group
      relative
      h-[150px]
      rounded-xl
      border
      border-slate-700
      bg-slate-950/80
      overflow-hidden
      flex
      flex-col
      items-center
      justify-center
      text-center
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-indigo-400/50
      hover:shadow-[0_15px_40px_rgba(99,102,241,0.15)]
    ">

      {/* CARD GLOW */}

      <div className="
        absolute
        inset-0
        bg-gradient-to-br
        from-indigo-500/[0.08]
        via-transparent
        to-purple-500/[0.04]
        opacity-0
        group-hover:opacity-100
        transition
      " />


      {/* ICON */}

      <div className="
        relative
        z-10
        w-11
        h-11
        rounded-xl
        bg-indigo-500/10
        border
        border-indigo-400/20
        flex
        items-center
        justify-center
        mb-4
        group-hover:scale-110
        group-hover:bg-indigo-500/15
        transition-all
        duration-300
      ">

        <Rocket className="
          w-6
          h-6
          text-indigo-400
          group-hover:text-purple-400
          transition
        " />

      </div>


      <h3 className="
        relative
        z-10
        text-xs
        sm:text-sm
        font-semibold
        text-slate-200
        leading-tight
      ">
        How To Build
        <br />
        Startups
      </h3>

    </div>



    {/* CARD 2 */}

    <div className="
      group
      relative
      h-[150px]
      rounded-xl
      border
      border-slate-700
      bg-slate-950/80
      overflow-hidden
      flex
      flex-col
      items-center
      justify-center
      text-center
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-purple-400/50
      hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)]
    ">

      <div className="
        absolute
        inset-0
        bg-gradient-to-br
        from-purple-500/[0.08]
        via-transparent
        to-pink-500/[0.04]
        opacity-0
        group-hover:opacity-100
        transition
      " />


      <div className="
        relative
        z-10
        w-11
        h-11
        rounded-xl
        bg-purple-500/10
        border
        border-purple-400/20
        flex
        items-center
        justify-center
        mb-4
        group-hover:scale-110
        transition-all
        duration-300
      ">

        <Lightbulb className="
          w-6
          h-6
          text-purple-400
          group-hover:text-pink-400
          transition
        " />

      </div>


      <h3 className="
        relative
        z-10
        text-xs
        sm:text-sm
        font-semibold
        text-slate-200
        leading-tight
      ">
        How To
        <br />
        Validate Ideas
      </h3>

    </div>



    {/* CARD 3 */}

    <div className="
      group
      relative
      h-[150px]
      rounded-xl
      border
      border-slate-700
      bg-slate-950/80
      overflow-hidden
      flex
      flex-col
      items-center
      justify-center
      text-center
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-indigo-400/50
      hover:shadow-[0_15px_40px_rgba(99,102,241,0.15)]
    ">

      <div className="
        absolute
        inset-0
        bg-gradient-to-br
        from-indigo-500/[0.08]
        via-transparent
        to-pink-500/[0.04]
        opacity-0
        group-hover:opacity-100
        transition
      " />


      <div className="
        relative
        z-10
        w-11
        h-11
        rounded-xl
        bg-indigo-500/10
        border
        border-indigo-400/20
        flex
        items-center
        justify-center
        mb-4
        group-hover:scale-110
        transition-all
        duration-300
      ">

        <Cpu className="
          w-6
          h-6
          text-indigo-400
          group-hover:text-purple-400
          transition
        " />

      </div>


      <h3 className="
        relative
        z-10
        text-xs
        sm:text-sm
        font-semibold
        text-slate-200
        leading-tight
      ">
        How To Launch
        <br />
        Products
      </h3>

    </div>



    {/* CARD 4 */}

    <div className="
      group
      relative
      h-[150px]
      rounded-xl
      border
      border-slate-700
      bg-slate-950/80
      overflow-hidden
      flex
      flex-col
      items-center
      justify-center
      text-center
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-pink-400/50
      hover:shadow-[0_15px_40px_rgba(236,72,153,0.15)]
    ">

      <div className="
        absolute
        inset-0
        bg-gradient-to-br
        from-purple-500/[0.08]
        via-transparent
        to-pink-500/[0.06]
        opacity-0
        group-hover:opacity-100
        transition
      " />


      <div className="
        relative
        z-10
        w-11
        h-11
        rounded-xl
        bg-pink-500/10
        border
        border-pink-400/20
        flex
        items-center
        justify-center
        mb-4
        group-hover:scale-110
        transition-all
        duration-300
      ">

        <Handshake className="
          w-6
          h-6
          text-pink-400
          group-hover:text-purple-400
          transition
        " />

      </div>


      <h3 className="
        relative
        z-10
        text-xs
        sm:text-sm
        font-semibold
        text-slate-200
        leading-tight
      ">
        How To Pitch
        <br />
        To Investors
      </h3>

    </div>

  </div>

</section>




            


            {/* =================================================
                CERTIFICATION
            ================================================= */}

            <section className="py-20 border-t border-slate-800/80">

              {/* HEADING */}

              <div className="text-center mb-14 ">

                <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent  tracking-tight leading-tight">

                  Get Certified With Recognized

                  <br />

                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ">
                    Validation
                  </span>

                </h2>

              </div>


              {/* CERTIFICATE CARD */}

              <div className="max-w-6xl mx-auto border border-slate-800 rounded-2xl bg-black overflow-hidden">

                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">


                  {/* ================= LEFT ================= */}

                  <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">

                    <h3 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent  leading-tight">

                      Earn Certificate Of

                      <br />

                      <span className="text-indigo-400">
                        Completion
                      </span>

                    </h3>


                    <div className="mt-10 space-y-7">

                      <div className="flex gap-4 items-start">

                        <span className="text-indigo-400 text-xl mt-0.5">
                          •
                        </span>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">

                          Build and showcase real AI projects and
                          gain hands-on experience by completing
                          the 31-day AI engineering cohort.

                        </p>

                      </div>


                      <div className="flex gap-4 items-start">

                        <span className="text-indigo-400 text-xl mt-0.5">
                          •
                        </span>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">

                          Complete AI-powered technical assessments
                          and receive detailed feedback based on
                          your learning journey.

                        </p>

                      </div>


                      <div className="flex gap-4 items-start">

                        <span className="text-indigo-400 text-xl mt-0.5">
                          •
                        </span>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">

                          Earn a verified certificate upon successful
                          completion of the cohort and interview
                          assessment.

                        </p>

                      </div>

                    </div>

                  </div>


                  {/* ================= RIGHT ================= */}

                  <div className="relative flex items-center justify-center p-8 sm:p-12 overflow-hidden">

                    {/* GREEN GLOW */}

                    <div className="absolute w-[350px] h-[350px] bg-emerald-500/10 blur-[100px] rounded-full" />


                    {/* BACK CERTIFICATE */}

                    <div className="absolute w-[78%] max-w-[520px] aspect-[1.42/1] rounded-xl bg-slate-700/70 border border-slate-600/50 translate-x-6 -translate-y-5" />


                    {/* MAIN CERTIFICATE */}

                    <div className="relative w-full max-w-[540px] aspect-[1.42/1] bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-300">


                      {/* BRAND */}

                      <div className="absolute top-0 right-0 text-indigo-400 text-white px-5 py-3 text-[9px] font-bold tracking-wider">
                        ABTALKS®
                      </div>


                      {/* VERTICAL LABEL */}

                      <div className="absolute left-6 top-1/2 -translate-y-1/2">

                        <div className="text-indigo-800 text-white px-2.5 py-3 text-[10px] tracking-widest [writing-mode:vertical-rl] rotate-180">
                          CERTIFICATE
                        </div>

                      </div>


                      {/* CONTENT */}

                      <div className="h-full flex flex-col justify-center px-14 sm:px-20">

                        <p className="text-[7px] sm:text-[9px] tracking-[0.35em] text-slate-700 uppercase mb-2">
                          Certificate of Completion
                        </p>


                        <h4 className="text-lg sm:text-2xl font-black text-slate-800 leading-tight">

                          AI-DRIVEN{' '}

                          <span className="text-indigo-900">
                            GENERATIVE AI
                          </span>

                          <br />

                          & AGENTIC ENGINEERING

                        </h4>


                        {/* PRESENTED TO */}

                        <div className="mt-5">

                          <p className="text-[7px] text-slate-500 uppercase tracking-widest">
                            Presented To
                          </p>

                          <p className="text-base sm:text-xl font-black text-slate-900 mt-1">
                            Candidate
                          </p>

                          <div className="h-px bg-slate-400 w-full mt-2" />

                        </div>


                        {/* DESCRIPTION */}

                        <p className="text-[6px] sm:text-[8px] text-slate-500 leading-relaxed mt-4 max-w-md">

                          Awarded for the successful completion of
                          the ABTalks 31-Day AI Cohort and AI Interview
                          Assessment. This certificate validates
                          practical knowledge of modern Generative AI
                          engineering, RAG, Agentic AI, MCP and
                          production systems.

                        </p>


                        {/* BOTTOM */}

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
                {reviews.map((r, idx) => (

                  <div
                    key={idx}
                    className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between"
                  >

                    <div>
                      <div className="flex gap-1 text-amber-400 mb-4">
                        {[...Array(r.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>


                      <p className="text-xs text-slate-300 leading-relaxed italic">
                        "{r.review}"
                      </p>

                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-600/20 text-indigo-400 font-bold text-xs flex items-center justify-center border border-indigo-500/30">
                        {r.avatar}
                      </div>
                      <div>

                        <h4 className="font-bold text-xs text-white">
                          {r.name}
                        </h4>

                        <p className="text-[10px] text-indigo-400 font-mono font-semibold">
                          {r.role}
                        </p>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          {/* =====================================================
    FAQ SECTION
===================================================== */}

<section className="py-20 border-t border-slate-800/80">

  {/* HEADER */}
  <div className="text-center mb-12">

    <div className="inline-flex relative mb-5">

      <div className="
        absolute inset-0
        rounded-full
        bg-purple-500/20
        blur-xl
        animate-pulse
      " />

      <span className="
        relative
        px-6 py-2
        rounded-full
        text-xs
        font-mono
        font-bold
        uppercase
        tracking-[0.2em]
        text-purple-300
        border border-purple-500/30
        bg-gradient-to-r
        from-indigo-500/10
        via-purple-500/10
        to-pink-500/10
      ">
        FAQs
      </span>

    </div>

    <span className="
      text-xs
      font-mono
      text-indigo-400
      uppercase
      tracking-widest
      block
      mb-3
    ">
      GOT QUESTIONS?
    </span>

    <h2 className="
      text-3xl
      sm:text-4xl
      md:text-5xl
      font-black
      tracking-tight
      text-white
    ">
      Frequently Asked Questions
      <br />

      <span className="
        bg-gradient-to-r
        from-indigo-400
        via-purple-400
        to-pink-400
        bg-clip-text
        text-transparent
      ">
        From Our Students
      </span>
    </h2>

    <p className="
      text-slate-500
      text-sm
      mt-4
      max-w-xl
      mx-auto
    ">
      Everything you need to know about the ABTalks AI Cohort.
    </p>

  </div>


  {/* FAQ LIST */}

  <div className="max-w-4xl mx-auto space-y-4">

    {faqs.map((f, idx) => {

      const isOpen = openFaq === idx;

      return (

        <div
          key={idx}
          className={`
            group
            relative
            rounded-2xl
            border
            overflow-hidden
            transition-all
            duration-500
            ease-out

            ${
              isOpen
                ? `
                  border-purple-500/50
                  bg-gradient-to-br
                  from-indigo-950/70
                  via-purple-950/50
                  to-pink-950/30
                  -translate-y-1
                  shadow-[0_15px_50px_rgba(139,92,246,0.20)]
                `
                : `
                  border-slate-800
                  bg-slate-950/70
                  hover:border-purple-500/40
                  hover:-translate-y-1
                  hover:shadow-[0_10px_35px_rgba(139,92,246,0.12)]
                `
            }
          `}
        >

          {/* GLOW */}

          <div
            className={`
              absolute
              -top-20
              -right-20
              w-40
              h-40
              rounded-full
              bg-purple-500/20
              blur-3xl
              pointer-events-none
              transition-all
              duration-700

              ${
                isOpen
                  ? "opacity-100 scale-150"
                  : "opacity-0 scale-75"
              }
            `}
          />


          {/* QUESTION */}

          <button
            onClick={() =>
              setOpenFaq(isOpen ? null : idx)
            }
            className="
              relative
              z-10
              w-full
              px-5
              sm:px-6
              py-5
              sm:py-6
              flex
              items-center
              justify-between
              gap-4
              text-left
              cursor-pointer
            "
          >

            <div className="flex items-center gap-4 min-w-0">

              {/* NUMBER */}

              <span
                className={`
                  hidden
                  sm:flex
                  w-9
                  h-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  text-xs
                  font-mono
                  font-bold
                  transition-all
                  duration-500

                  ${
                    isOpen
                      ? `
                        bg-gradient-to-br
                        from-indigo-500/30
                        via-purple-500/30
                        to-pink-500/30
                        text-purple-200
                        border
                        border-purple-400/40
                        scale-110
                        shadow-[0_0_20px_rgba(139,92,246,0.30)]
                      `
                      : `
                        bg-slate-900
                        text-slate-500
                        border
                        border-slate-800
                        group-hover:text-purple-300
                        group-hover:border-purple-500/30
                      `
                  }
                `}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>


              {/* QUESTION TEXT */}

              <span
                className={`
                  text-sm
                  sm:text-base
                  font-semibold
                  transition-all
                  duration-500

                  ${
                    isOpen
                      ? `
                        translate-x-1
                        bg-gradient-to-r
                        from-indigo-300
                        via-purple-300
                        to-pink-300
                        bg-clip-text
                        text-transparent
                      `
                      : `
                        text-slate-300
                        group-hover:text-white
                        group-hover:translate-x-1
                      `
                  }
                `}
              >
                {f.q}
              </span>

            </div>


            {/* ARROW */}

            <div
              className={`
                relative
                w-9
                h-9
                shrink-0
                rounded-full
                border
                flex
                items-center
                justify-center
                transition-all
                duration-500

                ${
                  isOpen
                    ? `
                      rotate-180
                      scale-110
                      border-purple-400/50
                      bg-purple-500/15
                      shadow-[0_0_20px_rgba(139,92,246,0.25)]
                    `
                    : `
                      border-slate-700
                      bg-slate-900
                      group-hover:border-purple-500/40
                      group-hover:scale-105
                    `
                }
              `}
            >

              {isOpen ? (
                <ChevronUp className="w-4 h-4 text-purple-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-purple-300" />
              )}

            </div>

          </button>


          {/* ANSWER */}

          <div
            className={`
              grid
              transition-all
              duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]

              ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }
            `}
          >

            <div className="overflow-hidden">

              <div
                className={`
                  px-5
                  sm:px-6
                  pb-6
                  transition-all
                  duration-700

                  ${
                    isOpen
                      ? "translate-y-0 scale-100"
                      : "-translate-y-5 scale-95"
                  }
                `}
              >

                <div className="border-t border-purple-500/20 pt-5">

                  <div className="flex gap-4">

                    {/* GRADIENT LINE */}

                    <div
                      className={`
                        w-1
                        shrink-0
                        rounded-full
                        bg-gradient-to-b
                        from-indigo-400
                        via-purple-500
                        to-pink-500
                        transition-all
                        duration-700

                        ${
                          isOpen
                            ? "opacity-100 scale-y-100"
                            : "opacity-0 scale-y-0"
                        }
                      `}
                    />

                    {/* ANSWER TEXT */}

                    <p
                      className={`
                        text-sm
                        text-slate-400
                        leading-7
                        transition-all
                        duration-700
                        delay-100

                        ${
                          isOpen
                            ? "translate-x-0 opacity-100"
                            : "translate-x-5 opacity-0"
                        }
                      `}
                    >
                      {f.a}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      );

    })}

  </div>

</section>
          </div>
        )}

        {activeTab === 'roster' && (

          <div className="mt-12">
            <div className="flex justify-between items-center mb-8 border-b border-slate-800/80 pb-4">
              <div>
                <h2 className="text-2xl font-black text-white flex items-center gap-2">

                  <Users className="w-6 h-6 text-indigo-400" />

                  ABTalks Technical Interview Portal

                </h2>
                <p className="text-xs text-slate-400 mt-1">Select a candidate to start the adaptive LLM technical assessment.</p>
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

                const passedMissions = missions.filter(
                  (m) => m.passed
                ).length;

                const completionPercentage = Math.round(
                  (passedMissions / missions.length) * 100
                );

                return (
                  <div key={member.id} className="group bg-slate-900/70 backdrop-blur-md border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-mono font-bold px-2.5 py-1 bg-slate-800 text-indigo-300 rounded-md border border-slate-700">
                          {member.id}
                        </span>

                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-indigo-400 border border-emerald-500/20 flex items-center gap-1">
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
                            {passedMissions}/{missions.length} (
                            {completionPercentage}%)
                          </span>

                        </div>

                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-500" style={{ width: `${completionPercentage}%` }} />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] font-mono text-slate-400">
                        <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800">

                          <span>
                            Commit Days:{' '}
                          </span>

                          <span className="text-white font-bold">
                            {signals?.commitDays || 0}
                          </span>

                        </div>

                        <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800">

                          <span>
                            First Try:{' '}
                          </span>

                          <span className="text-indigo-400 font-bold">
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

        {activeTab === 'curriculum' && (

          <div className="mt-12 max-w-5xl mx-auto">
            <div className="text-center mb-10">

              <h2 className="text-3xl font-black text-white">
                31-Day AI Cohort Syllabus
              </h2>

              <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
                Step-by-step breakdown of tools, RAG architectures, and agentic workflows trained during the 31-day cohort.
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
                  <div key={mod.n} className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200">
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


                          <h3 className="text-lg font-bold text-white">
                            {mod.title}
                          </h3>

                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">
                          {moduleDays.length} Lessons
                        </span>
                        {isExpanded ? <ChevronUp className="w-5 h-5 text-indigo-400" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 bg-slate-950/40 space-y-4">
                        {moduleDays.map((d) => (

                          <div
                            key={d.day}
                            className="bg-slate-900/90 border border-slate-800 rounded-xl p-4"
                          >

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                              <div className="flex items-center gap-3">
                                <span className="px-2.5 py-0.5 bg-indigo-600/20 text-indigo-400 font-mono text-xs font-bold rounded-md border border-indigo-500/30">
                                  Day {d.day}
                                </span>


                                <h4 className="font-bold text-sm text-slate-100">
                                  {d.title}
                                </h4>

                              </div>

                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 self-start sm:self-auto">
                                {d.type}
                              </span>
                            </div>

                            <div className="flex flex-wrap gap-1.5 my-3">
                              {d.tools?.map((tool, idx) => (

                                <span
                                  key={idx}
                                  className="text-[10px] font-mono bg-slate-950 text-indigo-300 border border-slate-800/80 px-2.5 py-1 rounded-md"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>

                            <ul className="space-y-1 mt-2">
                              {d.objectives?.map((obj, i) => (

                                <li
                                  key={i}
                                  className="text-xs text-slate-400 flex items-start gap-2"
                                >

                                  <span className="text-indigo-400 font-bold">
                                    •
                                  </span>

                                  {obj}

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

    <Footer/>

    </div>
  );
}