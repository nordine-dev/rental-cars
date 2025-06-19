import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCar } from "../redux/actions/adminActions";

const AddCar = () => {

  const dispatch = useDispatch();

  const [car, setCar] = useState({
    name: "",
    type: "",
    brand: "",
    model: "",
    year: "",
    transmission: "",
    fuel_type: "",
    seats: "",
    price_per_day: "",
    image_file: null,
    available: true,
  });

  const [imagePreview, setImagePreview] = useState(null);

  // Options for selects
  const typeOptions = ["Sedan", "SUV", "Luxury", "Convertible", "Truck"];
  const brandOptions = ["Toyota", "BMW", "Mercedes", "Audi", "Ford"];
  const transmissionOptions = ["Automatic", "Manual"];
  const fuelOptions = ["Petrol", "Diesel", "Electric", "Hybrid"];
  const yearOptions = Array.from(
    { length: 30 },
    (_, i) => new Date().getFullYear() - i
  ); // Last 30 years
  const seatsOptions = [2, 4, 5, 7, 8];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      const file = files[0];
      setCar({ ...car, image_file: file });
      setImagePreview(URL.createObjectURL(file));
    } else if (type === "checkbox") {
      setCar({ ...car, [name]: checked });
    } else {
      setCar({ ...car, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Car data:", car);

    const form = new FormData();
    form.append("name", car.name);
    form.append("type", car.type);
    form.append("brand", car.brand);
    form.append("model", car.model);
    form.append("year", car.year);
    form.append("transmission", car.transmission);
    form.append("fuel_type", car.fuel_type);
    form.append("seats", car.seats);
    form.append("price_per_day", car.price_per_day);
    form.append("image_file", car.image_file);
    form.append("available", car.available);

    dispatch(addCar(form));

    setCar({
      name: "",
      type: "",
      brand: "",
      model: "",
      year: "",
      transmission: "",
      fuel_type: "",
      seats: "",
      price_per_day: "",
      image_file: null,
      available: true,
    });
    setImagePreview(null);

  };

  return (
    <div className="p-4 md:p-6 bg-white shadow-lg rounded-2xl max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Car</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Input */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Car Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={car.name}
            onChange={handleChange}
            required
            placeholder="Car name"
            className="w-full p-2 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Type Select */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Type <span className="text-red-500">*</span>
          </label>
          <select
            name="type"
            value={car.type}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="" disabled>
              Select type
            </option>
            {typeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Brand Select */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Brand <span className="text-red-500">*</span>
          </label>
          <select
            name="brand"
            value={car.brand}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="" disabled>
              Select brand
            </option>
            {brandOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Model Text Input */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Model <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="model"
            value={car.model}
            onChange={handleChange}
            required
            placeholder="Model"
            className="w-full p-2 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Year Select */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Year <span className="text-red-500">*</span>
          </label>
          <select
            name="year"
            value={car.year}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="" disabled>
              Select year
            </option>
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Transmission Select */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Transmission <span className="text-red-500">*</span>
          </label>
          <select
            name="transmission"
            value={car.transmission}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="" disabled>
              Select transmission
            </option>
            {transmissionOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Fuel Type Select */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Fuel Type <span className="text-red-500">*</span>
          </label>
          <select
            name="fuel_type"
            value={car.fuel_type}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="" disabled>
              Select fuel type
            </option>
            {fuelOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Seats Select */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Seats <span className="text-red-500">*</span>
          </label>
          <select
            name="seats"
            value={car.seats}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="" disabled>
              Select seats
            </option>
            {seatsOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Price per day with DH suffix */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Price per Day (DH) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              step="0.01"
              name="price_per_day"
              value={car.price_per_day}
              onChange={handleChange}
              required
              placeholder="Price per day"
              className="w-full p-2 pr-12 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <span className="absolute top-0 right-3 h-full flex items-center text-gray-500 font-semibold">
              DH
            </span>
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Upload Image <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="image_file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setCar((prev) => ({ ...prev, image_file: file }));
              if (file) setImagePreview(URL.createObjectURL(file));
              else setImagePreview(null);
            }}
            required
            className="w-full p-2 border border-gray-200 bg-white rounded-md"
          />
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">Image Preview</label>
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full max-h-60 object-cover rounded-lg shadow"
            />
          </div>
        )}

        {/* Available Checkbox */}
        <div className="md:col-span-2 flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            name="available"
            checked={car.available}
            onChange={handleChange}
            className="w-4 h-4 text-red-600"
            id="available"
          />
          <label htmlFor="available" className="text-sm text-gray-700">
            Available
          </label>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-xl hover:bg-red-700 transition"
          >
            Add Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
