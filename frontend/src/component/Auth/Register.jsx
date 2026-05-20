import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";

const Register = ({ setIsSignUp }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  // async function handelSubmit(e) {
  //   e.preventDefault();
  //   // const data = { email: name, password: password, username: " };
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:3000/api/auth/register",
  //       data,{
  //         withCredentials: true,
  //       }
  //     );
  //     console.log(res);
  //     navigate("/dashboard");
  //   } catch (error) {
  //     console.log(error.message);
  //   }

  //   console.log(data.username, data.email, data.password);
  // }
  const [formLoading, setFormLoading] = useState(false);
  const context = useContext(AuthContext);
  const { setUser } = context;
  async function handelSubmit(e) {
    e.preventDefault();
    setFormLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/register",
        data,
        {
          withCredentials: true,
        },
      );
      console.log(res);
      setUser(res.data.user);
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setFormLoading(false);
    }

    navigate("/dashboard");
  }

  if (formLoading) {
    return <h1>Loading......</h1>;
  }

  return (
    <div
      id="right-panel-forms"
      className="w-full md:w-[55%] md:m-0 p-8 sm:p-14 lg:p-20 flex flex-col justify-center bg-white relative overflow-y-auto"
    >
      <div
        id="logo-container"
        className="flex items-center gap-2 font-bold text-xl mb-12 text-black absolute top-10 right-10 md:right-auto md:top-12 md:relative md:mb-8"
      >
        <svg
          id="logo-svg"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            id="logo-path"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          ></path>
        </svg>
        <span id="logo-text">PrepAI</span>
      </div>

      <div id="register-view" className="transition-all duration-300">
        <h2
          id="register-heading"
          className="text-4xl font-['Playfair_Display',_serif] my-4 mb-2 text-gray-900"
        >
          Create Account
        </h2>
        <p id="register-subheading" className="text-gray-500 text-sm mb-10">
          Start your AI-powered interview preparation today.
        </p>

        <form id="register-form" onSubmit={handelSubmit} className="space-y-5">
          <div id="register-name-group">
            <label
              id="register-firstname-label"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              User Name
            </label>
            <input
              id="register-firstname-input"
              type="text"
              value={data.username}
              onChange={(e) => {
                setData((prev) => ({ ...prev, username: e.target.value }));
              }}
              placeholder="User Name"
              className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              required
            />
          </div>

          <div id="register-email-group">
            <label
              id="register-email-label"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="register-email-input"
              type="email"
              value={data.email}
              onChange={(e) => {
                setData((prev) => ({ ...prev, email: e.target.value }));
              }}
              placeholder="Enter your email"
              className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              required
            />
          </div>

          <div id="register-password-group">
            <label
              id="register-password-label"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div id="register-password-wrapper" className="relative">
              <input
                id="register-password-input"
                type="password"
                value={data.password}
                onChange={(e) => {
                  setData((prev) => ({ ...prev, password: e.target.value }));
                }}
                placeholder="Create a password"
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <button
            id="register-submit-button"
            type="submit"
            className="w-full bg-black text-white py-3.5 rounded-xl font-medium hover:bg-gray-800 transition-colors mt-8 shadow-lg shadow-black/10"
          >
            Create Account
          </button>
        </form>

        <p
          id="register-toggle-text"
          className="mt-8 text-center text-sm text-gray-500"
        >
          <span id="register-has-account-span">Already have an account?</span>
          <button
            id="register-to-login-btn"
            onClick={() => {
              setIsSignUp(false);
            }}
            className="text-black font-semibold hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
