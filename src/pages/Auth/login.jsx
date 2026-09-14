import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      // Admin
      localStorage.setItem("userRole", "admin");
      navigate("/admin");
    } else {
      // Customer
      localStorage.setItem("userRole", "customer");
      navigate("/"); 
    }

    console.log("Login with email:", email, "and password:", password);
  };

  // دالة تسجيل الدخول بـ جوجل
  const handleGoogleLogin = () => {
    localStorage.setItem("userRole", "customer");
    localStorage.setItem("userName", "Google User");
    localStorage.setItem("userEmail", "google.user@gmail.com");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 animate-fade-in-up">
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-black text-(--main-color) mb-6 text-center">Login to Your Account</h2>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-700" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@gmail.com"
              required
              className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-(--main-color)"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-700" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-(--main-color)"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-(--main-color) text-white font-bold py-3.5 rounded-xl shadow-md hover:opacity-90 transition-all cursor-pointer text-sm"
          >
            Login
          </button>
          </form>

          {/* فاصل (OR) */}
        <div className="my-3 flex items-center">
          <div className="grow border-t border-gray-100"></div>
          <span className="px-3 text-xs text-gray-400 font-medium">Or continue with</span>
          <div className="grow border-t border-gray-100"></div>
        </div>

          {/* Login with Google */}
          <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-3.5 rounded-xl shadow-sm transition-all cursor-pointer text-sm"
        >
          <FaGoogle className="text-red-500" />
          <span>Sign in with Google</span>
        </button>

        <div className="mt-6 text-center text-xs text-gray-500">
          Don't have an account?
          <Link to="/register" className="font-bold text-(--main-color) hover:underline">
            Register here
          </Link>
        </div>

        <div className="mt-4 text-center text-xs text-gray-400">
          <p>Login with <span className="font-bold text-gray-600">admin@gmail.com</span> for Admin Page.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;