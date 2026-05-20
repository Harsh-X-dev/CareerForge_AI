import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext";
import { Navigate } from "react-router-dom";
import axios from "axios";
export const Protected = ({ children }) => {
  const context = useContext(AuthContext);
  const { user, setUser, loading,setLoading } = context;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth/get-me", {
          withCredentials: true,
        });
        // console.log(res.data.user)
        setUser(res.data.user);
      } catch (e) {
        console.log(e);
      }finally{
        setLoading(false);
      }
    };
    // console.log("chal rha hu");
    checkAuth()
  }, []);

  if (loading) {
    return <h1>loading......</h1>;
  }
  if (!user) {
    return <Navigate to={"/"} />;
    // return <h1>User not authenticated</h1>;
}
  return children;
};
