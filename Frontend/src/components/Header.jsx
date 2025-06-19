import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Cars", href: "/cars" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-red-600 text-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            My<span className="text-white/70">Logo</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-white text-sm font-medium">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-white/80 transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Login Button desktop */}
          <div className="hidden md:block">
            <a
              href="/login"
              className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Login
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-red-700 text-white shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-red-800">
          <div className="text-xl font-bold">MyLogo</div>
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
            className="focus:outline-none"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col mt-6 space-y-4 px-4 text-lg font-medium">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className="hover:bg-red-600 rounded px-3 py-2 transition"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#"
            onClick={() => setSidebarOpen(false)}
            className="mt-6 bg-white text-red-600 text-center py-2 rounded font-semibold hover:bg-gray-100 transition"
          >
            Login
          </a>
        </nav>
      </aside>

      {/* Spacer to prevent content under fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}
