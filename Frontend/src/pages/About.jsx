import React, { useEffect, useState } from "react";
import { 
  Car, 
  Smile, 
  Globe, 
  Users, 
  Trophy, 
  MapPin, 
  Clock,
  ArrowRight,
  ShieldCheck,
  Target
} from "lucide-react";
import heroImg from "../assets/hero.jpg"; // Reusing hero image for consistency or pick another if available

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { label: "Fleet Size", value: "500+", icon: <Car size={24} />, color: "bg-blue-50 text-blue-600" },
    { label: "Happy Clients", value: "10k+", icon: <Users size={24} />, color: "bg-green-50 text-green-600" },
    { label: "Cities covered", value: "20+", icon: <MapPin size={24} />, color: "bg-red-50 text-red-600" },
    { label: "Experience", value: "5+ Yr", icon: <Trophy size={24} />, color: "bg-yellow-50 text-yellow-600" },
  ];

  const values = [
    {
      title: 'Modern Fleet',
      desc: 'From economy to luxury cars, we provide well-maintained vehicles for every occasion.',
      icon: <Car className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Customer First',
      desc: '24/7 support and a focus on satisfaction make our clients come back again and again.',
      icon: <Smile className="w-8 h-8" />,
      color: 'bg-red-50 text-red-600'
    },
    {
      title: 'Global Standards',
      desc: 'We operate with international quality standards to ensure your safety and comfort.',
      icon: <Globe className="w-8 h-8" />,
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Mission Focused',
      desc: 'Our mission is to make travel accessible and stress-free for everyone, everywhere.',
      icon: <Target className="w-8 h-8" />,
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      
      {/* --- HERO / INTRO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-60"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Our Brand Story</p>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-8">
              Reliable Travel, <br />
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Every Mile</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Founded in 2021, we started with a simple idea: make car rental easy, 
              transparent, and premium for everyone in Morocco.
            </p>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className={`bg-white p-8 rounded-[2.5rem] border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STORY & MISSION --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className={`relative transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="absolute inset-0 bg-red-600 translate-x-4 translate-y-4 rounded-[3rem] opacity-10"></div>
            <img 
              src={heroImg} 
              alt="Our Story" 
              className="relative z-10 w-full h-[500px] object-cover rounded-[3rem] shadow-2xl" 
            />
          </div>

          <div className={`transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <h2 className="text-4xl font-black text-gray-900 mb-8">Helping You Move With Confidence Since 2021</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                What began as a small fleet of 10 cars in Casablanca has grown into a nationwide network 
                dedicated to quality and accessibility. We understood early on that 
                renting a car isn't just about the vehicle—it's about the journey.
              </p>
              <p>
                Today, we take pride in offering a seamless digital experience that connects travelers 
                with the perfect car. Whether it's a cross-country adventure or a simple 
                commute, our focus remains on providing safety and joy in every mile.
              </p>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
                <div className="bg-red-600 text-white p-2 rounded-lg">
                  <ShieldCheck size={20} />
                </div>
                <span className="font-bold text-gray-900">Certified Quality</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
                <div className="bg-red-600 text-white p-2 rounded-lg">
                  <Clock size={20} />
                </div>
                <span className="font-bold text-gray-900">Always Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Built on Strong Values</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Our culture is defined by our commitment to our users and our relentless drive for excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, i) => (
              <div key={i} className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-10 leading-tight">
            Ready to experience <br /> the <span className="text-red-600">difference?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="/cars" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-12 rounded-2xl transition-all shadow-xl shadow-red-200 active:scale-95 flex items-center justify-center space-x-2"
            >
              <span>Explore Fleet</span>
              <ArrowRight size={20} />
            </a>
            <a 
              href="/contact" 
              className="bg-white border-2 border-gray-100 hover:border-gray-200 text-gray-900 font-bold py-5 px-12 rounded-2xl transition-all hover:bg-gray-50 flex items-center justify-center space-x-2"
            >
              <span>Contact Support</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
