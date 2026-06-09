import useAuth from "../../auth/hooks/useAuth.js";
import { LogOut } from "lucide-react";

export const Profile = () => {
  const { user, handleLogoutUser } = useAuth();
  return (
    <div
      id="profile-widget-wrapper"
      className="w-full h-full flex flex-col p-8 bg-[#f8fafc] items-center"
    >
      <div
        id="profile-card-component"
        className="w-full max-w-md bg-white border border-gray-100 rounded-[2rem] p-8 sm:p-10 flex flex-col items-center shadow-sm relative mt-10"
      >
        <div id="avatar-container" className="flex justify-center -mt-20 mb-6">
          <div
            id="user-avatar-circle"
            className="w-28 h-28 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg border-4 border-white"
          >
            <span
              id="user-initials"
              className="text-4xl font-bold text-white tracking-wider"
            >
              {user?.username?.charAt(0).toUpperCase() || "T"}
            </span>
          </div>
        </div>

        <div className="text-center mb-8">
           <h2 className="text-2xl font-bold text-gray-900 mb-1">{user?.username || "testuser"}</h2>
           <p className="text-sm text-gray-500">{user?.email || "test@example.com"}</p>
        </div>


        <div className="w-full border-t border-gray-100 pt-6 mt-auto">
          
          <button
            id="card-logout-btn"
            type="button"
            onClick={handleLogoutUser}
            className="w-full py-3 bg-white border border-red-200 text-red-500 font-semibold rounded-xl hover:bg-red-50 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};