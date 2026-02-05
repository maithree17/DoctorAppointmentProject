import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <div className="px-4 md:px-16 lg:px-24 pb-12">

      {/* -------- Heading -------- */}
      <div className="text-center mb-12">
        <p className="text-3xl font-semibold text-gray-700">
          CONTACT <span className="text-primary">US</span>
        </p>
        <p className="text-gray-500 mt-2">
          We'd love to hear from you
        </p>
      </div>

      {/* -------- Content Section -------- */}
      <div className="flex flex-col md:flex-row items-center gap-14">

        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={assets.contact_image}
            alt="Contact doctor"
            className="w-full max-w-sm rounded-xl"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-gray-600 space-y-6">

          <p>
            Need help booking an appointment or have questions about our services?
            Our support team is always ready to assist you.
          </p>

          {/* Contact Details */}
          <div className="space-y-4">

            <div>
              <p className="text-sm font-semibold text-gray-800 uppercase">
                Address
              </p>
              <p>Mysuru, Karnataka, India</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-800 uppercase">
                Phone
              </p>
              <p>+6567-8687-22</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-800 uppercase">
                Email
              </p>
              <p>ourssupport@gmail.com</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
