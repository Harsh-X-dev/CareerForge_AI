import { NavLink } from "react-router-dom";
import { FlaskConical, LayoutDashboard, Files, User, LogOut, X } from "lucide-react";

export const Sidebar = ({ handleLogout, isMobileMenuOpen, closeMobileMenu }) => {
  return (
    <>
      {/* Dark Overlay Backdrop for Mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform md:relative md:translate-x-0 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#f8fafc] h-screen flex font-['Inter',_sans-serif] overflow-hidden`}
      >
        <aside
          id="dash-sidebar"
          className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between h-full"
        >
          <div id="dash-sidebar-top">
            <div
              id="dash-logo-container"
              className="h-20 flex items-center justify-between px-6 sm:px-8"
            >
              <div className="flex items-center">
                <FlaskConical className="w-6 h-6 text-indigo-600 mr-2" />
                <span
                  id="dash-logo-text"
                  className="font-bold text-xl tracking-tight text-gray-900"
                >
                  PrepAI
                </span>
              </div>
              
              {/* Close Button (Mobile Only) */}
              <button
                onClick={closeMobileMenu}
                className="md:hidden p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav id="dash-nav-menu" className="p-4 space-y-2 mt-2">
              <NavLink
                id="nav-item-dashboard"
                end
                to="/home"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </NavLink>
              <NavLink
                id="nav-item-reports"
                to="reports"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                <Files className="w-5 h-5" />
                All Reports
              </NavLink>
              <NavLink
                id="nav-item-profile"
                to="profile"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                <User className="w-5 h-5" />
                Profile
              </NavLink>
            </nav>
          </div>

          <div id="dash-sidebar-bottom" className="p-4">
            <button
              id="logout-btn"
              className="flex items-center gap-3 px-4 py-3 w-full text-red-500 hover:bg-red-50 rounded-xl font-medium transition-colors"
              onClick={() => {
                closeMobileMenu();
                handleLogout();
              }}
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </aside>
      </div>
    </>
  );
};