import React from "react";

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold">MyLogo</h2>
          <p className="text-sm text-white/80 mt-2">
            We provide the best articles and tech services. Follow us for updates.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Important Links</h3>
          <ul className="space-y-1 text-sm text-white/80">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Login</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="text-sm text-white/80 space-y-1">
            <li>📍 Casablanca, Morocco</li>
            <li>📞 +212 6 00 00 00 00</li>
            <li>✉️ email@example.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} MyLogo. All rights reserved.
      </div>
    </footer>
  );
}
