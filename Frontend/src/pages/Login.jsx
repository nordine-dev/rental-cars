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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-red-100 rounded-full blur-[100px] opacity-40"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-red-50 rounded-full blur-[100px] opacity-40"></div>

      <div className={`max-w-md w-full transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100 shadow-2xl' : 'translate-y-10 opacity-0'}`}>
        <div className="bg-white rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-10 md:p-12 relative z-10">
          
          {/* Logo / Branding */}
          <div className="flex flex-col items-center mb-10 text-center">
            <Link to="/" className="flex items-center space-x-2 group mb-6">
              <div className="bg-gradient-to-br from-red-600 to-red-800 p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                <Car className="text-white" size={24} />
              </div>
              <div className="text-2xl font-black tracking-tighter">
                <span className="text-gray-900">RENT</span>
                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">CARS</span>
              </div>
            </Link>
            <h2 className="text-3xl font-black text-gray-900 leading-tight">
              Welcome Back
            </h2>
            <p className="text-gray-500 font-medium mt-2">
              Log in to manage your bookings and fleet.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handelLogin}>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                Email Address
              </label>
              <div className="relative group">
                <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={20} />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-red-600/20 py-4 pl-12 pr-4 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-600/5 transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">
                  Password
                </label>
                <Link to="/forgot-password" size="sm" className="text-xs font-black text-red-600 uppercase tracking-widest hover:text-red-700 transition-colors">
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-600 transition-colors" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-red-600/20 py-4 pl-12 pr-12 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-red-600/5 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoggingIn}
                className={`w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-red-200 transition-all flex items-center justify-center space-x-3 active:scale-[0.98] ${
                  isLoggingIn ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoggingIn ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Login now</span>
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Footer Links */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 font-medium">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-red-600 font-bold hover:text-red-700 underline underline-offset-4 transition-colors"
              >
                Sign up free
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Trust Badge */}
        <p className="mt-8 text-center text-gray-400 text-xs font-medium flex items-center justify-center">
          <Lock size={12} className="mr-1.5" />
          Secured by RentCars Encryption Standard
        </p>
      </div>
    </div>
  );
}
