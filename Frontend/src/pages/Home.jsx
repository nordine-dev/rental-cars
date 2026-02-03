import React, { useEffect, useState } from 'react';
import { 
  Car, 
  Clock, 
  ShieldCheck, 
  DollarSign, 
  MapPin, 
  Calendar, 
  Search,
  Star,
  ArrowRight,
  User,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/hero.jpg';
import economyCars from "../assets/economy.jpg";
import four from "../assets/four.png";
import lux from "../assets/lux.jpg";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      title: 'Fast Booking',
      desc: 'Book your car in less than 2 minutes with our streamlined process.',
      icon: <Clock className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Best Prices',
      desc: 'Competitive rates with a 100% price match guarantee.',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Full Insurance',
      desc: 'Drive with peace of mind. All our rentals include premium insurance.',
      icon: <ShieldCheck className="w-8 h-8" />,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: '24/7 Support',
      desc: 'Our dedicated team is always here to assist you anytime, anywhere.',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-yellow-50 text-yellow-600'
    }
  ];

  const categories = [
    { name: 'Economy', img: economyCars, price: 'From $25/day', count: '12 Cars' },
    { name: 'Premium SUV', img: four, price: 'From $45/day', count: '8 Cars' },
    { name: 'Luxury Sports', img: lux, price: 'From $80/day', count: '5 Cars' },
  ];

  return (
    <div className="bg-white overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span>Available in 20+ Cities Morocco</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
              Drive Your <br />
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Dream Journey</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Experience the ultimate freedom with our premium fleet. 
              Transparent pricing, easy booking, and 24/7 support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                to="/cars" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-2xl shadow-xl shadow-red-200 transition-all hover:-translate-y-1 active:scale-95 text-center flex items-center justify-center space-x-2"
              >
                <span>Browse Fleet</span>
                <ArrowRight size={20} />
              </Link>
              <button className="bg-white border-2 border-gray-100 hover:border-gray-200 text-gray-900 font-bold py-4 px-10 rounded-2xl transition-all hover:bg-gray-50 text-center">
                How it Works
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 text-sm text-gray-500 border-t border-gray-100 pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                      <User size={16} />
                    </div>
                  ))}
                </div>
                <span className="font-medium text-gray-900">2,500+ Happy Clients</span>
              </div>
              <div className="h-4 w-px bg-gray-200"></div>
              <div className="flex items-center space-x-1">
                <Star className="text-yellow-400 fill-current" size={16} />
                <span className="font-bold text-gray-900">4.9/5</span>
                <span>Rating</span>
              </div>
            </div>
          </div>

          {/* Right Image/Graphic */}
          <div className={`relative transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100 shadow-2xl skew-y-0' : 'translate-y-20 opacity-0 -skew-y-3'}`}>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-red-600/10 to-transparent rounded-[3rem] -rotate-3 border border-red-100"></div>
            <img 
              src={HeroImage} 
              alt="Premium Rental Car" 
              className="relative z-10 w-full h-auto rounded-[2.5rem] shadow-2xl object-cover transform transition-transform hover:scale-[1.02] duration-500"
            />
            {/* Overlay Info Card */}
            <div className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 hidden sm:block animate-bounce-slow">
              <div className="flex items-center space-x-4">
                <div className="bg-red-50 p-3 rounded-2xl text-red-600">
                  <DollarSign size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Daily starting from</p>
                  <p className="text-2xl font-black text-gray-900">$25.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK SEARCH BAR --- */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white p-4 sm:p-8 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-50 grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Location</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600" size={18} />
              <select className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-semibold focus:ring-2 focus:ring-red-600/20 appearance-none">
                <option>Casablanca Airport</option>
                <option>Marrakech City</option>
                <option>Rabat Center</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Pickup Date</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600" size={18} />
              <input type="date" className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-semibold focus:ring-2 focus:ring-red-600/20" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Car Type</label>
            <div className="relative">
              <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600" size={18} />
              <select className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-semibold focus:ring-2 focus:ring-red-600/20 appearance-none">
                <option>All Types</option>
                <option>Economy</option>
                <option>SUV</option>
                <option>Luxury</option>
              </select>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-200 transition-all flex items-center justify-center space-x-2 h-[56px]">
            <Search size={20} />
            <span>Search Now</span>
          </button>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Our Excellence</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Why Rent With Us?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We've redefined car rental to ensure you have the best experience 
            from the moment you book until you return the keys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <div key={i} className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-red-100 hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-300">
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- POPULAR CATEGORIES --- */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Categories</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">Explore Our Fleet</h2>
            </div>
            <Link to="/cars" className="text-red-600 font-bold flex items-center space-x-2 hover:translate-x-1 transition-transform mt-4 md:mt-0">
              <span>View all categories</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {categories.map((car, idx) => (
              <div key={idx} className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={car.img} 
                    alt={car.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black text-gray-900 leading-none">{car.name}</h3>
                    <span className="text-xs bg-red-50 text-red-600 px-3 py-1 rounded-full font-bold">{car.count}</span>
                  </div>
                  <p className="text-gray-500 font-medium mb-6">{car.price}</p>
                  <button className="w-full py-4 border-2 border-gray-100 rounded-2xl font-bold text-gray-900 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300">
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-gray-900 py-24 px-12 text-center">
          {/* Abstract dots */}
          <div className="absolute top-0 right-0 p-12 opacity-20">
            <div className="grid grid-cols-4 gap-4">
              {[...Array(16)].map((_, i) => <div key={i} className="w-2 h-2 bg-white rounded-full"></div>)}
            </div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              Start Your Journey <br /> <span className="text-red-600">Securely</span> Today
            </h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who trust us for their 
              on-road adventures. Your perfect car is just a few clicks away.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/register" className="bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-12 rounded-2xl transition-all shadow-xl shadow-red-900/40 active:scale-95">
                Create Account
              </Link>
              <Link to="/cars" className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-5 px-12 rounded-2xl transition-all">
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
