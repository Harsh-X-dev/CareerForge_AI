import { Header } from "../component/Dashboard/Header.jsx";
import { Sidebar } from "../component/Dashboard/Sidebar.jsx";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div
      id="dash-main-body"
      className="bg-gray-900 h-screen flex font-['Inter',_sans-serif] overflow-hidden"
    >
      <Sidebar />
      <main
        id="dash-main-content"
        className="flex-1 flex flex-col h-screen overflow-hidden relative"
      >
        <Header />
        <Outlet />
      </main>
    </div>
  );
};
