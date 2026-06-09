import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./features/auth/AuthContext.jsx";
import { Router } from "./router/router.jsx";
import { Toaster } from "sonner";
import { DashboardProvider } from "./features/dashboard/dashboard.context.jsx";
function App() {
  return (
    <AuthProvider>
      <DashboardProvider>
        <Toaster richColors position="top-right" />
        <RouterProvider router={Router} />
      </DashboardProvider>
    </AuthProvider>
  );
}

export default App;
