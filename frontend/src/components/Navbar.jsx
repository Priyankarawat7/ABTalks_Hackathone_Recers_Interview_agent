import { ChevronDown, ArrowRight } from "lucide-react";
import logo from "../assets/logo-1.png";

export default function Navbar({ activeTab, setActiveTab }) {

  const goHome = () => {
    setActiveTab("home");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  const goCurriculumPreview = () => {
    // IMPORTANT:
    // Curriculum preview Home ke andar hai,
    // isliye pehle Home render karna hai.
    setActiveTab("home");

    setTimeout(() => {
      const section = document.getElementById("curriculum-preview");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const goRoster = () => {
    setActiveTab("roster");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#07090e]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto h-[82px] px-6 flex items-center justify-between">

        {/* LOGO */}
        <button
          onClick={goHome}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="ABTalks AI"
            className="h-11 w-auto object-contain"
          />
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-2">

          <button
            onClick={goHome}
            className={`px-5 py-2.5 rounded-full text-sm transition-all ${
              activeTab === "home"
                ? "bg-white/10 border border-white/15 text-white"
                : "text-purple-100/80 hover:text-white hover:bg-white/5"
            }`}
          >
            Home
          </button>

          {/* THIS GOES TO PREREQUISITES SECTION */}
          <button
            onClick={goCurriculumPreview}
            className="px-5 py-2.5 rounded-full text-sm text-purple-100/80 hover:text-white hover:bg-white/5 transition"
          >
            Curriculum
          </button>

          <button
            onClick={goRoster}
            className={`px-5 py-2.5 rounded-full text-sm transition-all ${
              activeTab === "roster"
                ? "bg-white/10 border border-white/15 text-white"
                : "text-purple-100/80 hover:text-white hover:bg-white/5"
            }`}
          >
            Interview Portal
          </button>

          <button
            className="px-5 py-2.5 rounded-full text-sm text-purple-100/80 hover:text-white hover:bg-white/5 transition flex items-center gap-1"
          >
            Pages
            <ChevronDown className="w-4 h-4" />
          </button>

          <button
            className="px-5 py-2.5 rounded-full text-sm text-purple-100/80 hover:text-white hover:bg-white/5 transition"
          >
            Support
          </button>

        </div>

        {/* RIGHT */}
        <button
          onClick={goRoster}
          className="group flex items-center gap-2 px-5 py-2.5 rounded-xl border border-purple-300/40 bg-white/5 text-white text-sm font-medium hover:bg-purple-500/20 hover:border-purple-300/70 transition cursor-pointer"
        >
          Start Assessment

          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </nav>
  );
}