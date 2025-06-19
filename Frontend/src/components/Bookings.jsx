import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookings } from "../redux/actions/adminActions"; // Adjust this path if needed

export default function Bookings() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-red-600 mb-6">Client Bookins</h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Car</th>
              <th className="px-4 py-3 text-left">Client</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Pickup</th>
              <th className="px-4 py-3 text-left">Drop-off</th>
              <th className="px-4 py-3 text-left">Days</th>
              <th className="px-4 py-3 text-left">Total (DH)</th>
            </tr>
          </thead>
          <tbody>
            {state.bookings?.length > 0 ? (
              state.bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">{booking.car_name}</td>
                  <td className="px-4 py-2">{booking.full_name}</td>
                  <td className="px-4 py-2">{booking.phone}</td>
                  <td className="px-4 py-2">{booking.email}</td>
                  <td className="px-4 py-2">{booking.pickup_date.split("T")[0]}</td>
                  <td className="px-4 py-2">{booking.dropoff_date.split("T")[0]}</td>
                  <td className="px-4 py-2">{booking.total_days}</td>
                  <td className="px-4 py-2 font-semibold text-red-600">
                    {booking.total_price} DH
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-4 py-6 text-center text-gray-400">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
