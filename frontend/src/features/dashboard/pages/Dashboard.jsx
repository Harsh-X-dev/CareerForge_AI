import { useState } from "react";
import { Header } from "../component/Header.jsx";
import { Sidebar } from "../component/Sidebar.jsx";
import { Outlet } from "react-router-dom";
import useAuth from "../../auth/hooks/useAuth.js";

export const Dashboard = () => {
  const { user, handleLogoutUser } = useAuth();
  
  // 1. Initialize state for the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      id="dash-main-body"
      // 2. Updated to the light theme background color
      className="bg-[#f8fafc] h-screen flex font-['Inter',_sans-serif] overflow-hidden"
    >
      <Sidebar 
        handleLogout={handleLogoutUser} 
        // 3. Pass mobile menu state and close function to the Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        closeMobileMenu={() => setIsMobileMenuOpen(false)}
      />
      
      <main
        id="dash-main-content"
        className="flex-1 flex flex-col h-screen overflow-hidden relative"
      >
        <Header 
          user={user} 
          // 4. Pass the toggle function to the Header
          toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        
        {/* 5. The container for your nested routes (Home, Reports, etc.) */}
        <div className="flex-1 overflow-y-auto">
           <Outlet />
        </div>
      </main>
    </div>
  );
};