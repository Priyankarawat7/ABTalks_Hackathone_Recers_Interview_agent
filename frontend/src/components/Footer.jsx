import logo from "../assets/logo-1.png"

function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-6 relative z-10 font-sans">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

        {/* BRAND */}
        <div className="md:col-span-2">

          <div className="flex items-center gap-3 mb-4">
            <img className="h-10" src={logo} alt="" srcset="" />
            {/* <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-sm">
              AB
            </div>

            <span className="font-extrabold text-white text-lg">
              ABTalks AI Cohort
            </span> */}

          </div>

          <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-4">
            Empowering engineers to build production-grade Generative AI,
            Multi-Agent Systems, and Vector RAG pipelines evaluated by
            intelligent assessment agents.
          </p>

          <div className="text-[11px] font-mono text-slate-500">
            © 2026 ABTalks AI Engine. All rights reserved.
          </div>

        </div>


        {/* QUICK LINKS */}
        <div>

          <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-xs text-slate-400">

            <li>
              <button
                className="hover:text-indigo-400 cursor-pointer transition"
              >
                Cohort Overview
              </button>
            </li>

            <li>
              <button
                className="hover:text-indigo-400 cursor-pointer transition"
              >
                31-Day Syllabus
              </button>
            </li>

            <li>
              <button
                className="hover:text-indigo-400 cursor-pointer transition"
              >
                Candidate Roster
              </button>
            </li>

          </ul>

        </div>


        {/* TECH STACK */}
        <div>

          <h4 className="font-bold text-xs text-white uppercase tracking-wider mb-4">
            Core Tech Stack
          </h4>

          <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-indigo-300">

            <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">
              Groq LLM
            </span>

            <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">
              Breeth Memory
            </span>

            <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">
              FastAPI
            </span>

            <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">
              React + Vite
            </span>

            <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded">
              Tailwind CSS
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;