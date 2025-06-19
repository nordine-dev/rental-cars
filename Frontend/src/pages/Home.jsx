import { Car, Clock, PhoneCall, ShieldCheck, DollarSign } from 'lucide-react';
import HeroImage from '../assets/hero.jpg';
import { Link } from 'react-router-dom';
import economyCars from "../assets/economy.jpg";
import four from "../assets/four.png";
import lux from "../assets/lux.jpg";
export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 leading-tight">
            Rent Your Perfect Car <br /> Anytime, Anywhere
          </h1>
          <p className="text-gray-700 mb-8 max-w-md mx-auto md:mx-0">
            Discover a wide variety of vehicles and book instantly with no hassle.
            Quality service and affordable prices, all in one place.
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-red-700 transition">
            <Link to="/cars">Explore Cars</Link>
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src={HeroImage}
            alt="Car Rental Hero"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Fast Booking',
                desc: 'Book your car in less than 2 minutes.',
                icon: <Clock className="text-red-600 w-10 h-10 mx-auto mb-4" />,
              },
              {
                title: 'Affordable Prices',
                desc: 'Competitive rates with no hidden charges.',
                icon: <DollarSign className="text-red-600 w-10 h-10 mx-auto mb-4" />,
              },
              {
                title: '24/7 Support',
                desc: 'Available anytime to help you.',
                icon: <PhoneCall className="text-red-600 w-10 h-10 mx-auto mb-4" />,
              },
              {
                title: 'Wide Car Range',
                desc: 'From economy to premium cars.',
                icon: <Car className="text-red-600 w-10 h-10 mx-auto mb-4" />,
              },
              {
                title: 'Insurance Included',
                desc: 'Drive safely, all cars are insured.',
                icon: <ShieldCheck className="text-red-600 w-10 h-10 mx-auto mb-4" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Car Categories */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Popular Car Categories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Economy Cars',
              img: economyCars,
            },
            {
              name: 'SUVs & 4x4',
              img: four,
            },
            {
              name: 'Luxury & Sports',
              img: lux,
            },
          ].map((car, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img src={car.img} alt={car.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 py-20 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to hit the road?
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Choose your ride from our premium selection and start your journey today.
        </p>
        <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
          Browse Available Cars
        </button>
      </section>
    </div>
  )
}
