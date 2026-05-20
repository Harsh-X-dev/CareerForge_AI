// import React from 'react'

import { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const pathname = useLocation().pathname;
  // console.log(pathname);
  const tabName = {
    "/dashboard": "Dashboard",
    "/dashboard/reports": "All Reports",
    "/dashboard/profile": "Profile",
  };
  const context = useContext(AuthContext);
  const { user } = context;
  // console.log(user);


  return (
    <>
      <header
        id="dash-header"
        className="h-20 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-8 z-10 sticky top-0"
      >
        <h1 id="dash-greeting" className="text-2xl font-bold text-white">
          {tabName[pathname] || "Dashboard"}
        </h1>
        <div id="dash-user-badge" className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-white">{user?.username || "User"} </p>
          </div>
          <div
            id="dash-avatar-outline"
            className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shadow-md"
          
          >
            <h4 className="text-lg font-bold text-white bg-gray-500 rounded-full w-full h-full flex items-center justify-center">
              {user?.username?.charAt(0).toUpperCase() || "U"}
            </h4>
          </div>
        </div>
      </header>
    </>
  );
};
