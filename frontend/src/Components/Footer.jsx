import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Footer() {

  const navigate =useNavigate()
  return (
    <footer className="bg-white text-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-10">
        {/* Left Section */}
        <div className="space-y-4">
          <img className="w-32 rounded-full" src={assets.logo} alt="Logo" />
          <p className="max-w-sm text-gray-600 leading-relaxed">
            Doctor Consultation is a trusted platform to book appointments with
            verified and experienced doctors, ensuring quality healthcare at your convenience.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <p className="font-semibold text-gray-800 mb-4">COMPANY</p>
          <ul className="space-y-2 text-gray-600">
            <li onClick={()=>{navigate('/');scrollTo(0,0)}} className="hover:text-primary cursor-pointer transition-colors">Home</li>
            <li onClick={()=>{navigate('/about');scrollTo(0,0)}} className="hover:text-primary cursor-pointer transition-colors">About Us</li>
            <li onClick={()=>{navigate('/contact');scrollTo(0,0)}} className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="font-semibold text-gray-800 mb-4">GET IN TOUCH</p>
          <ul className="space-y-2 text-gray-600">
            <li>+6567-8687-22</li>
            <li>ourssupport@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-6 pt-4 text-center text-gray-500 text-sm">
        Copyright 2025 @ Suvacha - All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
