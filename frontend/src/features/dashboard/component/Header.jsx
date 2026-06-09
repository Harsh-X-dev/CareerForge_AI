import { useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

export const Header = ({ user, toggleMobileMenu }) => {
  const pathname = useLocation().pathname;
  const tabName = {
    "/home": "Home",
    "/reports": "All Reports",
    "/profile": "Profile",
  };

  return (
    <>
      <header
        id="dash-header"
        className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-8 z-10 sticky top-0 w-full"
      >
        <div className="flex items-center gap-4">
          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 -ml-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <h1 id="dash-greeting" className="text-xl sm:text-2xl font-bold text-gray-900 truncate">
            {tabName[pathname] || "Dashboard"}
          </h1>
        </div>

        <div id="dash-user-badge" className="flex items-center gap-4 sm:gap-6">
          

          <div className="flex items-center gap-3 border-l border-gray-200 pl-4 sm:pl-6">
            <div
              id="dash-avatar-outline"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-indigo-100 shrink-0"
            >
              <h4 className="text-sm font-bold text-indigo-600">
                {user?.username?.charAt(0).toUpperCase() || "U"}
              </h4>
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-sm font-semibold text-gray-700 truncate max-w-[120px]">
                {user?.username || "testuser"}
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};