import React, { useState } from "react";

export default function Settings() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    current_password: "",
    new_password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings submitted:", form);
    // TODO: Send updated data to backend (via fetch/axios)
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-red-600 mb-6">Settings</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 space-y-5"
      >
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-white/50 focus:outline-none focus:ring focus:ring-red-300"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-white/50 focus:outline-none focus:ring focus:ring-red-300"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-white/50 focus:outline-none focus:ring focus:ring-red-300"
            placeholder="+212 6 12 34 56 78"
          />
        </div>

        <hr className="my-4" />

        <h3 className="text-lg font-semibold text-gray-700">Change Password</h3>

        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Current Password
          </label>
          <input
            type="password"
            name="current_password"
            value={form.current_password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-white/50 focus:outline-none focus:ring focus:ring-red-300"
            placeholder="••••••••"
          />
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm font-medium mb-1">New Password</label>
          <input
            type="password"
            name="new_password"
            value={form.new_password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-white/50 focus:outline-none focus:ring focus:ring-red-300"
            placeholder="••••••••"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
        >
          Save Changes
        </button>
      </form>
    </section>
  );
}
