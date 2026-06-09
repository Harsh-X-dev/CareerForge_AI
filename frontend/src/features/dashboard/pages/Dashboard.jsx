import { Header } from "../component/Header.jsx";
import { Sidebar } from "../component/Sidebar.jsx";
import { Outlet } from "react-router-dom";
import useAuth from "../../auth/hooks/useAuth.js";
export const Dashboard = () => {
  const { user, handleLogoutUser } = useAuth();
  return (
    <div
      id="dash-main-body"
      className="bg-gray-900 h-screen flex font-['Inter',_sans-serif] overflow-hidden"
    >
      <Sidebar handleLogout={handleLogoutUser} />
      <main
        id="dash-main-content"
        className="flex-1 flex flex-col h-screen overflow-hidden relative"
      >
        <Header user={user} />
        <Outlet />
      </main>
    </div>
  );
};
