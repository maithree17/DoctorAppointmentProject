import React, { useContext, useState,useEffect } from 'react'
import { AppContext } from '../Context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

function MyAppointment() {
  const { backendURL,token } = useContext(AppContext)

  const [appointment,setappointment] =useState([])

  const getDocAppointmentDetail=async()=>{
    try{
      const {data} =await axios.get(backendURL+'/api/user/myappointment',{headers:{token}})
      if(data.success){
        setappointment(data.userappointmentData.reverse())
        console.log(data.userappointmentData)
      }
    }catch(error){
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(token){
      getDocAppointmentDetail()
    }
  },[token])

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <p className="text-2xl font-semibold mb-6 text-gray-800">
        My Appointments
      </p>

      <div className="space-y-6">
        {appointment.map((item, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row gap-6 bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">

            {/* Doctor Image */}
            <div className="flex-shrink-0">
              <img src={item.docData.image} alt={item.docData.name} className="w-28 h-28 rounded-lg object-cover border"/>
            </div>

            {/* Doctor Info */}
            <div className="flex-1 text-gray-700">
              <p className="text-lg font-semibold text-gray-900">{item.docData.name}</p>
              <p className="text-sm text-blue-600 mb-2">{item.docData.speciality}</p>
              <p className="text-sm font-medium">Address:</p>
              <p className="text-sm text-gray-600">{item.docData.address.line1}</p>
              <p className="text-sm text-gray-600">{item.docData.address.line2}</p>
              <p className="text-sm mt-3"><span className="font-medium">Date & Time:</span>{' '}<span className="text-gray-600">{item.slotDate} | {item.slotTime}</span></p>
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
