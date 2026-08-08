import React from "react";
import { Bot, ChevronDown, ArrowRight } from "lucide-react";

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#100625]/80 backdrop-blur-xl">
      
      <div className="max-w-7xl mx-auto h-[82px] px-6 flex items-center justify-between">

        {/* LEFT - LOGO */}
        <button
          onClick={() => setActiveTab("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full border-2 border-purple-400 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.35)]">
            <Bot className="w-7 h-7 text-purple-300" />
          </div>

          <span className="text-2xl font-semibold tracking-tight text-white">
            ABTalks AI
          </span>
        </button>


        {/* CENTER NAVIGATION */}
        <div className="hidden md:flex items-center gap-2">

          {/* HOME */}
          <button
            onClick={() => setActiveTab("home")}
            className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
              activeTab === "home"
                ? "bg-white/10 border border-white/15 text-white shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                : "text-purple-100/80 hover:text-white hover:bg-white/5"
            }`}
          >
            Home
          </button>


          {/* CURRICULUM */}
          <button
            onClick={() => setActiveTab("curriculum")}
            className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
              activeTab === "curriculum"
                ? "bg-white/10 border border-white/15 text-white"
                : "text-purple-100/80 hover:text-white hover:bg-white/5"
            }`}
          >
            Curriculum
          </button>


          {/* INTERVIEW PORTAL */}
          <button
            onClick={() => setActiveTab("roster")}
            className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
              activeTab === "roster"
                ? "bg-white/10 border border-white/15 text-white"
                : "text-purple-100/80 hover:text-white hover:bg-white/5"
            }`}
          >
            Interview Portal
          </button>


          {/* PAGES */}
          <button
            className="px-5 py-2.5 rounded-full text-sm text-purple-100/80 hover:text-white hover:bg-white/5 transition flex items-center gap-1"
          >
            Pages
            <ChevronDown className="w-4 h-4" />
          </button>


          {/* SUPPORT */}
          <button
            className="px-5 py-2.5 rounded-full text-sm text-purple-100/80 hover:text-white hover:bg-white/5 transition"
          >
            Support
          </button>

        </div>


        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">

          {/* <button
            className="hidden sm:block text-sm text-purple-100 hover:text-white transition"
          >
            Sign in
          </button> */}

          <button
            onClick={() => setActiveTab("roster")}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl border border-purple-300/40 bg-white/5 text-white text-sm font-medium hover:bg-purple-500/20 hover:border-purple-300/70 transition-all duration-300"
          >
            Start Assessment

            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

      </div>
    </nav>
  );
}