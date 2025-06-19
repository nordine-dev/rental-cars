import React, { useState, useEffect } from "react";
import { CalendarCheck2, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { bookCar } from "../redux/actions/publicActions";

export default function BookingModal({ car, onClose }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    pickupDate: "",
    dropoffDate: "",
  });

  const [totalDays, setTotalDays] = useState(0);
  const dailyPrice = car.price_per_day || 300;
  const totalPrice = totalDays * dailyPrice;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  useEffect(() => {
    if (form.pickupDate && form.dropoffDate) {
      const start = new Date(form.pickupDate);
      const end = new Date(form.dropoffDate);
      const diff = end - start;
      const days = Math.max(Math.ceil(diff / (1000 * 60 * 60 * 24)), 0);
      setTotalDays(days);
    } else {
      setTotalDays(0);
    }
  }, [form.pickupDate, form.dropoffDate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      car_id: car.id,
      car_name: car.name,
      full_name: form.full_name,
      email: form.email,
      phone: form.phone,
      pickup_date: form.pickupDate,
      dropoff_date: form.dropoffDate,
      total_days: totalDays,
      total_price: totalPrice,
    };

    console.log("Submitted Booking:", bookingData);

    // TODO: Send `bookingData` to backend via fetch or axios
    dispatch(bookCar(bookingData));

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
        >
          <X />
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-red-600 mb-4">Book {car.name}</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="full_name"
              required
              value={form.full_name}
              onChange={handleChange}
              className="w-full bg-white/50 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white/50 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="+212 6 12 34 56 78"
              className="w-full bg-white/50 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>

          {/* Dates */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Pickup</label>
              <input
                type="date"
                name="pickupDate"
                required
                value={form.pickupDate}
                onChange={handleChange}
                className="w-full bg-white/50 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-300"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Drop-off</label>
              <input
                type="date"
                name="dropoffDate"
                required
                value={form.dropoffDate}
                onChange={handleChange}
                className="w-full bg-white/50 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-red-300"
              />
            </div>
          </div>

          {/* Total Price Info */}
          <div className="text-sm text-gray-700">
            {totalDays > 0 ? (
              <p>
                <strong>{totalDays}</strong> day(s) ×{" "}
                <strong>{dailyPrice} DH</strong> ={" "}
                <span className="text-red-600 font-bold">{totalPrice} DH</span>
              </p>
            ) : (
              <p className="text-gray-400">
                Select pickup and drop-off dates to see total price
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={totalDays <= 0}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <CalendarCheck2 size={18} />
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
