import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Mail, Lock, LogIn, AtSign, ArrowRight, Car } from "lucide-react";
import { useDispatch } from 'react-redux';
import { login } from "../redux/actions/userActions";
import { useNavigate, Link } from "react-router-dom";

export default function AuthPage() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handelLogin = (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    // Preserving existing logic
    dispatch(login(form.email, form.password, navigator));
    
    // Resetting loading state after a delay if redirect doesn't happen immediately
    setTimeout(() => setIsLoggingIn(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 py-20 relative overflow-hidden font-sans">
      {/* Subtle Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-50 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-50/50 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className={`max-w-md w-full transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Premium White Card */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 p-10 md:p-12 relative z-10 overflow-hidden">
          
          {/* Logo / Branding */}
          <div className="flex flex-col items-center mb-10 text-center">
            <Link to="/" className="flex items-center space-x-2 group mb-6">
              <div className="bg-red-600 p-2.5 rounded-2xl shadow-[0_8px_16px_rgba(220,38,38,0.25)] group-hover:scale-105 transition-transform">
                <Car className="text-white" size={24} />
              </div>
              <div className="text-2xl font-black tracking-tight">
                <span className="text-slate-900">RENT</span>
                <span className="text-red-600">CARS</span>
              </div>
            </Link>
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">
              Welcome Back
            </h2>
            <p className="text-slate-500 font-medium mt-2 text-sm">
              Enter your details to access your account.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handelLogin}>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                Email Address
              </label>
              <div className="relative group">
                <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors" size={18} />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border border-gray-100 focus:border-red-500/30 py-4 pl-12 pr-4 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-red-500/5 transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Password
                </label>
                <Link to="/forgot-password" intrinsic="false" className="text-xs font-bold text-red-600 hover:text-red-700 transition-colors">
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-gray-100 focus:border-red-500/30 py-4 pl-12 pr-12 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-red-500/5 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoggingIn}
                className={`w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-[0_10px_20px_-5px_rgba(220,38,38,0.3)] transition-all flex items-center justify-center space-x-3 active:scale-[0.98] ${
                  isLoggingIn ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoggingIn ? (
                  <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Footer Links */}
          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500 font-medium">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-red-600 font-bold hover:text-red-700 underline underline-offset-4 decoration-red-600/20 hover:decoration-red-600 transition-all"
              >
                Sign up free
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Trust Badge */}
        <p className="mt-8 text-center text-slate-400 text-[10px] font-bold tracking-[0.2em] flex items-center justify-center uppercase">
          <Lock size={12} className="mr-2 text-red-600/30" />
          Secured by RentCars Standard
        </p>
      </div>
    </div>
  );
}
