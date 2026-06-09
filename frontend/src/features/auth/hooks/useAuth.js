import { login, logout, register, get_me } from "../api/authApi";
import { useContext} from "react";
import { AuthContext } from "../AuthContext";
import { toast } from "sonner";
export default function useAuth() {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);

  const handleLoginUser = async (email, password) => {
    try {
      setLoading(true);
      const res = await login(email, password);
      setUser(res.user);
    } catch (error) {
      toast.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  const handleRegisterUser = async (data) => {
    try {
      setLoading(true);
      const res = await register(data);
      setUser(res.user);
    } catch (error) {
      toast.error(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogoutUser = async () => {
    try {
      setLoading(true);
      await logout();
      setUser(null);
    } catch (error) {
      toast.error(error.message || "Logout failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGetUser = async () => {
    try {
      setLoading(true);
      const res = await get_me();
      setUser(res.user);
    } catch (error) {
      toast.error(error.message || "Failed to fetch user");
    } finally {
      setLoading(false);
    }
  };


  return {
    handleLoginUser,
    handleRegisterUser,
    handleLogoutUser,
    handleGetUser,
    user,
    loading,
  };
}
