import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function MyAppointment() {
  const { doctors } = useContext(AppContext)

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <p className="text-2xl font-semibold mb-6 text-gray-800">
        My Appointments
      </p>

      <div className="space-y-6">
        {doctors.slice(0, 2).map((item, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row gap-6 bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">

            {/* Doctor Image */}
            <div className="flex-shrink-0">
              <img src={item.image} alt={item.name} className="w-28 h-28 rounded-lg object-cover border"/>
            </div>

            {/* Doctor Info */}
            <div className="flex-1 text-gray-700">
              <p className="text-lg font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-blue-600 mb-2">{item.speciality}</p>
              <p className="text-sm font-medium">Address:</p>
              <p className="text-sm text-gray-600">{item.address.line1}</p>
              <p className="text-sm text-gray-600">{item.address.line2}</p>
              <p className="text-sm mt-3"><span className="font-medium">Date & Time:</span>{' '}<span className="text-gray-600">25 Jul, 2025 | 8:30 AM</span></p>
            </div>

            <div></div>

            {/* Action Buttons */}
            <div className="flex sm:flex-col gap-3 justify-end">
              <button className="px-4 py-2 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 transition">Pay Online</button>
              <button className="px-4 py-2 text-sm rounded-md border border-red-400 text-red-500 hover:bg-red-50 transition">Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointment
