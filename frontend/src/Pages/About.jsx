import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-12">

      {/* -------- HERO SECTION -------- */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">

        {/* Left Content */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-semibold text-gray-800">
            About <span className="text-primary">Us</span>
          </h1>

          <p className="text-gray-600">
            We are committed to making healthcare simple, accessible, and reliable
            for everyone. Our platform connects patients with trusted, verified
            doctors across multiple specialties.
          </p>

          <p className="text-gray-600">
            We believe finding the right doctor should be easy—not stressful.
            That’s why we focus on transparency, convenience, and quality care.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={assets.about_image}
            alt="Doctors"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

      </div>

      {/* -------- INFO CARDS -------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

        
        <div className="bg-blue-100 p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To bridge the gap between patients and healthcare professionals by
            providing a seamless appointment booking experience.
          </p>
        </div>

        
        <div className="bg-blue-100 p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Why Choose Us?
          </h3>
          <ul className="text-gray-600 space-y-2 list-disc list-inside">
            <li>Verified and experienced doctors</li>
            <li>Easy and fast appointment booking</li>
            <li>Multiple specialties in one place</li>
            <li>Secure and user-friendly platform</li>
          </ul>
        </div>

      </div>

      {/* -------- COMMITMENT SECTION -------- */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Commitment
        </h3>
        <p className="text-gray-600">
          We are dedicated to building a trusted healthcare ecosystem where
          patients feel confident, informed, and cared for. Your health and time
          matter to us.
        </p>
      </div>

    </div>
  )
}

export default About
