import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Home } from "./component/Dashboard/home.jsx";
import { Reports } from "./component/Dashboard/Reports.jsx";
import { Profile } from "./component/Dashboard/Profile.jsx";
import { AuthProvider } from "./AuthContext.jsx";
import { Protected } from "./component/Auth/protected.jsx";
import ReportDetail from "./component/Dashboard/ReportDetail.jsx";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Auth />} />

      <Route
        path="/dashboard"
        element={
          <Protected>
            <Dashboard />
          </Protected>
        }
      >
        <Route path="" element={<Home />} />
        <Route path="reports" element={<Reports />} />
        <Route path="reports/:id" element={<ReportDetail />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </>,
  ),
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>,
);
