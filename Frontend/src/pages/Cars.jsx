import React, { useEffect, useState } from "react";
import { CarFront, CalendarCheck2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../redux/actions/publicActions";
import BookingModal from "../components/BookingModal";

export default function Cars() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.admin);
  const url = import.meta.env.VITE_API_URL;

  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {state.cars.map((car) => (
          <div
            key={car.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col transition hover:shadow-xl"
          >
            <img
              src={`${url}/${car.image_file}`}
              alt={car.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3">{car.name}</h3>
              <div className="flex items-center text-gray-600 mb-4 flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CarFront size={18} className="text-red-600" />
                  <span>{car.type}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-medium">Brand:</span>
                  <span>{car.brand}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-medium">Model:</span>
                  <span>{car.model}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedCar(car)}
                className="mt-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2"
              >
                <CalendarCheck2 size={18} />
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCar && (
        <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </section>
  );
}
