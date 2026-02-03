import React from "react";
import { 
  Car, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Cars", href: "/cars" },
      { name: "Services", href: "/services" },
      { name: "Careers", href: "/careers" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Contact Us", href: "/contact" },
    ],
  };

  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Upper Footer: Newsletter Branding */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 border-b border-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Join our newsletter for <span className="text-red-600">exclusive</span> offers
            </h2>
            <p className="text-gray-400">
              Stay updated with the latest car additions and special rental discounts.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-900 border border-gray-800 text-white px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/50 w-full transition-all"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-red-900/20 active:scale-95 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-br from-red-600 to-red-800 p-1.5 rounded-lg shadow-lg group-hover:scale-105 transition-transform">
                <Car className="text-white" size={20} />
              </div>
              <div className="text-xl font-black tracking-tighter">
                <span className="text-white">RENT</span>
                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">CARS</span>
              </div>
            </a>
            <p className="text-gray-400 leading-relaxed text-sm">
              Premium car rental services in Morocco. We provide a wide range of vehicles to suit your needs, from luxury sedans to rugged SUVs. Experience the road like never before.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon: SocialIcon, href }, index) => (
                <a 
                  key={index} 
                  href={href} 
                  className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center border border-gray-800 hover:border-red-600 hover:text-red-600 transition-all group"
                >
                  <SocialIcon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="flex items-center group text-sm hover:text-red-500 transition-colors">
                    <ChevronRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-red-600" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="flex items-center group text-sm hover:text-red-500 transition-colors">
                    <ChevronRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-red-600" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-red-600 shrink-0 mt-0.5" />
                <span>Casablanca Finance City, <br />Casablanca, Morocco</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={18} className="text-red-600 shrink-0" />
                <span>+212 6 00 00 00 00</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={18} className="text-red-600 shrink-0" />
                <span>contact@rentcars.ma</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black py-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} <span className="text-gray-300 font-semibold">RentCars</span>. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
