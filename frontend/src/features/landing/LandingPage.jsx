import footer from "../../../assets/footer.png";
import hero from "../../../assets/hero.png";
import { useNavigate } from "react-router-dom";
import React from "react";
import {
  FlaskConical,
  Wand2,
  Play,
  FileText,
  ShieldCheck,
  Zap,
  TrendingUp,
  Briefcase,
  AlertTriangle,
  ListChecks,
  UploadCloud,
  Target,
  ClipboardList,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* --- FULL SCREEN HERO AREA (NAV + HERO) --- */}
      <div className="min-h-screen flex flex-col relative">
        {/* Navigation */}
        <nav className="w-full">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-indigo-700 font-bold text-2xl">
              <FlaskConical size={28} />
              <span>PrepAI</span>
            </div>
            <div className="hidden lg:flex space-x-8 text-sm font-semibold text-slate-600">
              <a href="#features" className="hover:text-indigo-600">
                Features
              </a>
              <a href="#how-it-works" className="hover:text-indigo-600">
                How It Works
              </a>
            </div>
            <button
              className="flex items-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-500/30"
              onClick={() => navigate("/login")}
            >
              <Wand2 size={18} />
              <span className="hidden sm:inline">Login</span>
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <main className="flex-1 flex items-center justify-center w-full">
          <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
                <Sparkles size={14} />
                <span>AI-Powered Interview Preparation</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
                Prepare Smarter. <br />
                Interview <span className="text-indigo-600">Better.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                PrepAI analyzes your resume and the job description to generate
                personalized interview questions, highlight skill gaps, and
                create a step-by-step preparation plan to help you succeed.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors shadow-lg shadow-indigo-500/30"
                  onClick={() => navigate("/login")}
                >
                  <span>Login</span>
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-3.5 rounded-lg font-semibold transition-colors shadow-sm">
                  <Play size={20} fill="currentColor" />
                  <span>Demo</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6 text-sm font-medium text-slate-600 pt-4">
                <div className="flex items-center space-x-2">
                  <ShieldCheck size={18} className="text-indigo-500" />{" "}
                  <span>AI-Powered Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap size={18} className="text-indigo-500" />{" "}
                  <span>Personalized for You</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp size={18} className="text-indigo-500" />{" "}
                  <span>Higher Success Rate</span>
                </div>
              </div>
            </div>

            {/* Right Content / Dashboard Image Placeholder */}
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none mt-8 lg:mt-0">
              {/* BACKGROUND IMAGE INSTRUCTION: Replace this div with your <img src="..." className="w-full h-auto object-cover rounded-2xl shadow-2xl ..." /> */}
              <img
                src={hero}
                alt="Dashboard Preview"
                className="w-full h-auto object-cover rounded-2xl "
              />
            </div>
          </section>
        </main>
      </div>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="w-full bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-indigo-600 font-bold tracking-widest text-xs sm:text-sm uppercase mb-4">
            Powerful Features
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16">
            Everything You Need to Ace Your Interview
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            {[
              {
                icon: <FileText size={24} />,
                title: "AI Resume Analysis",
                desc: "Our AI deeply analyzes your resume to understand your skills, experience, and achievements.",
                color: "bg-indigo-50 text-indigo-600",
              },
              {
                icon: <Briefcase size={24} />,
                title: "Personalized Questions",
                desc: "Get role-specific technical, behavioral, and situational questions tailored just for you.",
                color: "bg-emerald-50 text-emerald-500",
              },
              {
                icon: <AlertTriangle size={24} />,
                title: "Skill Gap Identification",
                desc: "Identify missing skills and get recommendations to make your profile job-ready.",
                color: "bg-amber-50 text-amber-500",
              },
              {
                icon: <ListChecks size={24} />,
                title: "Smart Preparation Plan",
                desc: "Follow a day-by-day plan to build confidence and improve step by step.",
                color: "bg-blue-50 text-blue-500",
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Performance Insights",
                desc: "Get match scores and actionable insights to track your progress and improve.",
                color: "bg-purple-50 text-purple-500",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${feature.color}`}
                >
                  {feature.icon}
                </div>
                <h4 className="font-bold text-slate-800 mb-3">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section id="how-it-works" className="w-full bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 text-center">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
              <Zap size={14} />
              <span>How It Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple Steps, Powerful Results
            </h2>
            <p className="text-slate-500 mb-12 sm:mb-16 max-w-xl mx-auto">
              PrepAI makes interview preparation easy, structured, and
              effective. Just follow these simple steps.
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-2">
              {[
                {
                  step: "01",
                  title: "Upload Your Resume",
                  desc: "Upload your resume in PDF format; our AI will analyze your skills.",
                  icon: <UploadCloud size={32} />,
                  color: "text-indigo-600",
                },
                {
                  step: "02",
                  title: "Add Job Description",
                  desc: "Paste the job description you're applying for. This helps our AI.",
                  icon: <FileText size={32} />,
                  color: "text-emerald-500",
                },
                {
                  step: "03",
                  title: "AI Analyzes & Matches",
                  desc: "Our AI analyzes your profile against the job requirements.",
                  icon: <Target size={32} />,
                  color: "text-amber-500",
                },
                {
                  step: "04",
                  title: "Get Personalized Report",
                  desc: "Receive a detailed report with tailored interview questions.",
                  icon: <ClipboardList size={32} />,
                  color: "text-blue-500",
                },
                {
                  step: "05",
                  title: "Prepare & Succeed",
                  desc: "Follow the smart preparation plan, practice, and ace it!",
                  icon: <TrendingUp size={32} />,
                  color: "text-purple-600",
                },
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl w-full lg:flex-1 flex flex-col items-center text-center shadow-sm border border-slate-100 relative">
                    <div className="absolute top-4 left-4 bg-white text-indigo-500 font-bold text-xs px-2 py-1 rounded shadow-sm">
                      {item.step}
                    </div>
                    <div className={`mt-6 mb-4 ${item.color}`}>{item.icon}</div>
                    <h4 className="font-bold text-slate-800 text-sm mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {index < 4 && (
                    <div className="hidden lg:block text-slate-300 flex-shrink-0">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section>
        <div>
          {/* Replaced the gradient classes with bg-indigo-900 (as a fallback), bg-cover, and bg-center, then added the inline style */}
          <div
            className="bg-indigo-900 bg-cover bg-center bg-no-repeat p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden"
            style={{ backgroundImage: `url(${footer})` }}
          >
            {/* Optional: A subtle dark overlay to make sure text remains readable over the image */}
            <div className="absolute inset-0 bg-indigo-900/40 pointer-events-none z-0"></div>

            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 relative z-10">
              Analyze. Prepare.{" "}
              <span className="text-indigo-300">Succeed.</span>
            </h2>
            <p className="text-indigo-100 text-sm sm:text-base max-w-2xl mx-auto mb-2 relative z-10">
              PrepAI is your AI-powered partner in cracking interviews and
              building your dream career.
            </p>
            <p className="text-indigo-100 text-sm sm:text-base max-w-2xl mx-auto relative z-10">
              Start preparing today and unlock your true potential.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// export default LandingPage;
