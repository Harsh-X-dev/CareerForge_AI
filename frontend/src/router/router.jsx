import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../features/auth/pages/Login.jsx";
import Register from "../features/auth/pages/Register.jsx";
import { Protected } from "../features/auth/component/Protected.jsx";
import { Dashboard } from "../features/dashboard/pages/Dashboard.jsx";
import { Home } from "../features/dashboard/component/Home.jsx";
import { Reports } from "../features/dashboard/component/Reports.jsx";
import { Profile } from "../features/dashboard/component/Profile.jsx";
import { ReportDetail } from "../features/dashboard/component/ReportDetail.jsx";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        element={
          <Protected>
            <Dashboard />
          </Protected> 
        }
      >
        <Route path="home"  element={<Home />} />
        <Route path="reports" element={<Reports />} />
        <Route path="reports/:id" element={<ReportDetail />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </>,
  ),
);
