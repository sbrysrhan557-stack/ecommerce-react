import React, { useState } from "react";
import { useNavigate, Link } from "react-router";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMessage(""); // مسح أي خطأ قديم قبل البدء بالتحقق

    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // 1. التحقق من طول كلمة المرور 
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    // 2. التحقق من تطابق كلمه المرور
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    // حفظ بيانات المستخدم customer
    localStorage.setItem("userRole", "customer");
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    // Home page after registration
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl max-w-md w-full">
        
        <div className="text-center mb-8">
          <span className="bg-rose-50 text-(--main-color) text-xs font-bold px-3 py-1 rounded-full border border-rose-100">
            Create Account
          </span>
          <h2 className="text-2xl font-black text-gray-900 mt-2">Join Our Store</h2>
          <p className="text-xs text-gray-400 mt-1">Enter your details to create a new shopping account.</p>
        </div>
        
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-700" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Sabry Saleh"
              required
              className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-(--main-color)"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-700" htmlFor="email">
              Email Address
            </label>
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
            <label className="text-xs font-bold text-gray-700" htmlFor="password">
              Password
            </label>
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

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-700" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-(--main-color)"
            />
          </div>

          {/* رسالة الخطأ */}
          {errorMessage && (
            <div className="bg-red-50 border border-red-200 text-red-500 text-xs font-semibold p-3 rounded-xl text-center">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="mt-2 bg-(--main-color) text-white font-bold py-3.5 rounded-xl shadow-md hover:opacity-90 transition-all cursor-pointer text-sm"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-500">
          Already have an account?
          <Link to="/login" className="font-bold text-(--main-color) hover:underline">
            Login here
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Register;