import React, { useState } from "react";
import { loginUser, registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const LoginSignUpPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 🔥 HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        await loginUser({
          email: form.email,
          password: form.password,
        });
      } else {
        await registerUser(form);
      }

      navigate("/"); // 🔥 redirect home

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">

        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-md text-sm"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-md text-sm"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-md text-sm"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="w-full bg-[#107CFF] text-white py-3 rounded-md font-medium hover:bg-blue-600">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* TOGGLE */}
        <p className="text-sm text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#107CFF] cursor-pointer ml-1"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default LoginSignUpPage;