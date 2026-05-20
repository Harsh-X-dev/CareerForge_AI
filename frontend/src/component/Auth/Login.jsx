import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";

const Login = ({ setIsSignUp }) => {
  const [formLoading, setFormLoading] =
  React.useState(false);
  const context = useContext(AuthContext);
  const { setUser } = context;
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handelSubmit(e) {
    e.preventDefault();
    setFormLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
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

      <div id="login-view" className="block transition-all duration-300">
        <h2
          id="login-heading"
          className="text-4xl font-['Playfair_Display',_serif] my-4 mb-2 text-gray-900"
        >
          Welcome Back
        </h2>
        <p id="login-subheading" className="text-gray-500 text-sm mb-10">
          Enter your email and password to access your dashboard.
        </p>

        <form id="login-form" onSubmit={handelSubmit} className="space-y-5">
          <div id="login-email-group">
            <label
              id="login-email-label"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="login-email-input"
              type="email"
              value={data.email}
              onChange={(e) =>
                setData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter your email"
              className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              required
            />
          </div>

          <div id="login-password-group">
            <label
              id="login-password-label"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div id="login-password-wrapper" className="relative">
              <input
                id="login-password-input"
                type={showPassword ? "text" : "password"}
                value={data.password}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, password: e.target.value }))
                }
                placeholder="Enter your password"
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                required
              />
              <button
                id="login-password-toggle"
                type="button"
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
              >
                <svg
                  id="login-password-svg"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="login-password-path-1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    id="login-password-path-2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <button
            id="login-submit-button"
            type="submit"
            className="w-full bg-black text-white py-3.5 rounded-xl font-medium hover:bg-gray-800 transition-colors mt-6 shadow-lg shadow-black/10"
          >
            Sign In
          </button>
        </form>

        <p
          id="login-toggle-text"
          className="mt-10 text-center text-sm text-gray-500"
        >
          <span id="login-no-account-span">Don't have an account?</span>
          <button
            id="login-to-register-btn"
            onClick={() => {
              setIsSignUp(true);
            }}
            className="text-black font-semibold hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
