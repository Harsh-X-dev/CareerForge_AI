import Register from "../component/Auth/Register.jsx";
import Login from "../component/Auth/Login.jsx";
import React from "react";

const Auth = () => {
  const [isSignUp, setIsSignUp] = React.useState(false);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 sm:p-8 font-['Inter',_sans-serif]">
      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[750px]">
       <div
        id="left-panel-branding"
        className="hidden md:flex md:w-[45%] bg-[linear-gradient(135deg,#050505_0%,#1a0b2e_50%,#001233_100%)] text-white p-12 flex-col justify-between relative rounded-l-3xl overflow-hidden"
      >
        <div 
            id="left-panel-fluid-blur" 
            className="absolute -top-[20%] -left-[20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_30%_30%,rgba(220,20,140,0.4),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(0,120,255,0.4),transparent_50%)] blur-[60px] z-0">
        </div>

        <div id="left-panel-top-content" className="relative z-10 mt-4">
          <span
            id="left-panel-badge"
            className="text-xs font-semibold tracking-[0.2em] uppercase border-b border-white/20 pb-2"
            >Career Intelligence</span
          >
        </div>

        <div id="left-panel-bottom-content" className="relative z-10 mb-8">
          <h1 id="left-panel-heading" className="text-5xl font-['Playfair_Display',_serif] mb-6 leading-[1.1]">
            Analyze.<br id="br-1" />Prepare.<br id="br-2" />Succeed.
          </h1>
          <p id="left-panel-description" className="text-gray-300 text-sm leading-relaxed max-w-sm">
            Upload your resume. Let our AI analyze your profile, generate
            tailored technical questions, and guide your interview preparation
            process step-by-step.
          </p>
        </div>
      </div>
        {isSignUp ? (
          <Register setIsSignUp={setIsSignUp} />
        ) : (
          <Login setIsSignUp={setIsSignUp} />
        )}
      </div>
    </div>
  );
};

export default Auth;
