import React from "react";
import { Car, Smile, Globe } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-600 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            We’re a passionate car rental service committed to helping people travel safely,
            comfortably, and affordably.
          </p>
        </div>

        {/* Company Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <Car className="text-red-600 mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-2">Modern Fleet</h3>
            <p>
              From economy to luxury cars, we provide well-maintained vehicles for every occasion.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <Smile className="text-red-600 mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
            <p>
              24/7 support and a focus on satisfaction make our clients come back again and again.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <Globe className="text-red-600 mb-4" size={36} />
            <h3 className="text-xl font-semibold mb-2">Expanding Reach</h3>
            <p>
              We operate across multiple cities and continue to grow to serve you wherever you are.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4 text-center text-red-600">Our Story</h3>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Founded in 2021, we started with a simple idea: make car rental easy and reliable.
            Whether you're on a business trip or a weekend getaway, we help you move with ease.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
