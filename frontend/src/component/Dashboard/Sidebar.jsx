// import React from 'react'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import axios from "axios";
export const Sidebar = () => {
  const context = useContext(AuthContext);
  const { setUser } = context;

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/auth/logout",
        {},
        {
          withCredentials: true,
        },
      );
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-900 h-screen flex font-['Inter',_sans-serif] overflow-hidden">
      <aside
        id="dash-sidebar"
        className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col justify-between hidden md:flex z-20"
      >
        <div id="dash-sidebar-top">
          <div
            id="dash-logo-container"
            className="h-20 flex items-center px-8 border-b border-gray-700"
          >
            <svg
              id="dash-logo-svg"
              className="w-6 h-6 text-white mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              ></path>
            </svg>
            <span
              id="dash-logo-text"
              className="font-bold text-xl tracking-tight text-white"
            >
              PrepAI
            </span>
          </div>

          <nav id="dash-nav-menu" className="p-4 space-y-2 mt-4">
            <NavLink
              id="nav-item-dashboard"
              end
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 ${isActive ? "bg-gray-700 text-White" : ""} text-white rounded-xl font-medium transition-colors`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              id="nav-item-reports"
              to="reports"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 ${isActive ? " bg-gray-700" : ""} text-white rounded-xl font-medium transition-colors`
              }
            >
              All reports
            </NavLink>
            <NavLink
              id="nav-item-profile"
              to="profile"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 ${isActive ? " bg-gray-700" : ""} text-white rounded-xl font-medium transition-colors`
              }
            >
              Profile
            </NavLink>
          </nav>
        </div>

        <div id="dash-sidebar-bottom" className="p-4 border-t border-gray-700">
          <button
            id="logout-btn"
            className="flex items-center gap-3 px-4 py-3 w-full text-red-500 hover:bg-red-100 hover:text-red-700 rounded-xl font-medium transition-colors"
            onClick={handleLogout}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              ></path>
            </svg>
            logout
          </button>
        </div>
      </aside>
    </div>
  );
};
