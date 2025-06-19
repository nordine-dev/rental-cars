import React from "react";

const CarList = ({ cars }) => {
    const url = import.meta.env.VITE_API_URL 
  return (
    <div className="overflow-x-auto p-4 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Cars List</h2>
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-red-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Image</th> 
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Type</th>
            <th className="py-3 px-6 text-left">Brand</th>
            <th className="py-3 px-6 text-left">Model</th>
            <th className="py-3 px-6 text-left">Year</th>
            <th className="py-3 px-6 text-left">Transmission</th>
            <th className="py-3 px-6 text-left">Fuel</th>
            <th className="py-3 px-6 text-left">Seats</th>
            <th className="py-3 px-6 text-left">Price/Day</th>
            <th className="py-3 px-6 text-left">Available</th>
          </tr>
        </thead>
        <tbody>
          {cars.length === 0 ? (
            <tr>
              <td colSpan="11" className="text-center py-6 text-gray-500">
                No cars available.
              </td>
            </tr>
          ) : (
            cars.map((car) => (
              <tr
                key={car.id}
                className="border-b border-gray-200 hover:bg-red-50 transition-colors"
              >
                <td className="py-3 px-4">
                  <img
                    src={`${url}/${car.image_file}`}
                    alt={car.name}
                    className="w-16 h-10 object-cover rounded"
                  />
                </td>
                <td className="py-4 px-6">{car.name}</td>
                <td className="py-4 px-6">{car.type}</td>
                <td className="py-4 px-6">{car.brand}</td>
                <td className="py-4 px-6">{car.model}</td>
                <td className="py-4 px-6">{car.year}</td>
                <td className="py-4 px-6">{car.transmission}</td>
                <td className="py-4 px-6">{car.fuel_type}</td>
                <td className="py-4 px-6">{car.seats}</td>
                <td className="py-4 px-6">
                  {car.price_per_day.toLocaleString("en-US", {
                    style: "currency",
                    currency: "MAD",
                    minimumFractionDigits: 2,
                  })}
                </td>
                <td className="py-4 px-6">
                  {car.available ? (
                    <span className="text-green-600 font-semibold">Yes</span>
                  ) : (
                    <span className="text-red-600 font-semibold">No</span>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;
