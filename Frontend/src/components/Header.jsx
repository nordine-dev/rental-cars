import React, { useState, useEffect } from "react";
import { Menu, X, Car } from "lucide-react";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Cars", href: "/cars" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-md shadow-lg py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-red-600 to-red-800 p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
              <Car className="text-white" size={24} />
            </div>
            <div className="text-2xl font-black tracking-tighter">
              <span className="text-gray-900">RENT</span>
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">CARS</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  scrolled 
                    ? "text-gray-700 hover:bg-red-50 hover:text-red-600" 
                    : "text-gray-900 hover:bg-white/20 hover:text-red-600"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Login Button desktop */}
          <div className="hidden md:block">
            <a
              href="/login"
              className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-red-600 rounded-full group hover:bg-red-700 shadow-md hover:shadow-xl active:scale-95"
            >
              <span className="relative">Login</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              scrolled ? "text-gray-900 hover:bg-gray-100" : "text-gray-900 hover:bg-white/20"
            } focus:outline-none`}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[70] transform transition-transform duration-500 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="text-xl font-black tracking-tighter">
            <span className="text-gray-900">RENT</span>
            <span className="text-red-600">CARS</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center px-4 py-3 rounded-xl text-gray-700 font-semibold hover:bg-red-50 hover:text-red-600 transition-all active:scale-95"
            >
              {item.name}
            </a>
          ))}

          <div className="pt-6 mt-4 border-t border-gray-100">
            <a
              href="/login"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center justify-center w-full px-4 py-4 rounded-xl bg-red-600 text-white font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition-all active:scale-95 text-lg"
            >
              Login
            </a>
          </div>
        </nav>
      </aside>

      {/* Spacer - removed or adjusted since we want a floating effect */}
      <div className="h-0"></div>
    </>
  );
}
