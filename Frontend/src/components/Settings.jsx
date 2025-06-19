import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword } from "../redux/actions/adminActions";

export default function Settings() {

  const dispatch = useDispatch()
  const [form, setForm] = useState({
    oldPassword : "",
    newPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changePassword(form))
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-red-600 mb-6">Settings</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 space-y-5"
      >
        
        <h3 className="text-lg font-semibold text-gray-700">Change Password</h3>

        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Current Password
          </label>
          <input
            type="password"
            name="oldPassword"
            value={form.oldPassword}
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
            name="newPassword"
            value={form.newPassword}
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
