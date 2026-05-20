import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import axios from "axios";

export const Profile = () => {
  const context = useContext(AuthContext);
  const { user,setUser } = context;

  const handleLogout =async () => {
    try {
    await axios.post("http://localhost:3000/api/auth/logout",{},{
      withCredentials:true
    })
    setUser(null)
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div
      id="profile-widget-wrapper"
      className="w-full h-full flex items-center justify-center p-4"
    >
      <div
        id="profile-card-component"
        className="w-full max-w-sm bg-[#1e2330] border-2 border-slate-600 rounded-[2.5rem] p-8 sm:p-10 flex flex-col shadow-2xl min-h-[480px]"
      >
        <div id="avatar-container" className="flex justify-center mb-10 mt-4">
          <div
            id="user-avatar-circle"
            className="w-32 h-32 rounded-full border-2 border-slate-500 bg-[#131722] flex items-center justify-center shadow-inner relative group cursor-pointer transition-all hover:border-blue-500"
          >
            <span
              id="user-initials"
              className="text-4xl font-bold text-slate-300 tracking-wider"
            >
              {user?.username?.charAt(0).toUpperCase() || "U"}
            </span>

            <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div id="user-info-fields" className="flex flex-col gap-5 w-full mb-12">
          <div id="username-display-group" className="relative">
            <div
              id="username-box"
              className="w-full bg-[#131722] border border-slate-700 rounded-2xl px-6 py-4 flex items-center shadow-sm hover:border-slate-500 transition-colors"
            >
              <span
                id="username-value"
                className="text-slate-300 font-medium tracking-wide"
              >
                {user?.username}
              </span>
            </div>
          </div>

          <div id="email-display-group" className="relative">
            <div
              id="email-box"
              className="w-full bg-[#131722] border border-slate-700 rounded-2xl px-6 py-4 flex items-center shadow-sm hover:border-slate-500 transition-colors"
            >
              <span
                id="email-value"
                className="text-slate-300 font-medium tracking-wide"
              >
                {user?.email}
              </span>
            </div>
          </div>
        </div>

        <div id="profile-actions" className="mt-auto flex justify-end w-full">
          <button
            id="card-logout-btn"
            type="button"
            onClick={handleLogout}
            className="px-8 py-3 bg-transparent border-2 border-slate-600 text-slate-400 font-semibold rounded-2xl hover:bg-red-500/10 hover:border-red-500 hover:text-red-500 transition-all flex items-center gap-2 shadow-sm"
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
};
