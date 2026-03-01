import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

function DoctorDashboard() {
  const {dtoken,dashData,setdashData,getDashData,completeappointment,cancelappointment}=useContext(DoctorContext)
  const {currency} =useContext(AppContext)

  useEffect(()=>{
    if(dtoken){
      getDashData()
    }
  },[dtoken])

  return dashData && (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-8">
        <div className="flex items-center gap-14 bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          <img className="w-12 h-12" src={assets.earning_icon} alt="doc_icon"/>
          <div>
            <p className="text-3xl font-bold text-gray-800">{currency} {dashData.earning}</p>
            <p className="text-gray-500 text-sm">Earning</p>
          </div>
        </div>
      
        <div className="flex items-center gap-14 bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          <img className="w-12 h-12" src={assets.appointments_icon} alt="doc_icon"/>
          <div>
            <p className="text-3xl font-bold text-gray-800"> {dashData.appointments}</p>
            <p className="text-gray-500 text-sm">Appointments</p>
          </div>
        </div>
      
        <div className="flex items-center gap-14 bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          <img className="w-12 h-12" src={assets.patients_icon} alt="doc_icon"/>
          <div>
            <p className="text-3xl font-bold text-gray-800"> {dashData.patients}</p>
            <p className="text-gray-500 text-sm">Patients</p>
          </div>
        </div>
      </div>

    <div className="bg-white mt-12 rounded-2xl shadow-md border border-gray-100">
      <div className="flex items-center gap-3 px-6 py-4 border-b bg-gray-50 rounded-t-2xl">
        <img src={assets.list_icon} alt="list_icon" />
        <p>Latest Bookings</p>
      </div>
    
      <div className="p-6 space-y-4">
        {dashData.latestAppointment.map((appointment, idx) => (
        <div key={idx} className="flex items-center gap-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
          <img className="w-12 h-12 rounded-full object-cover border"  src={appointment.userData.image}  alt="doc_image"/>
          <div className="flex items-center gap-5 flex-1">
            <div>
              <p className="font-semibold text-gray-800"> {appointment.userData.name}</p>
              <p className="text-sm text-gray-500">{appointment.slotDate}</p>
            </div>
          </div>
          {
            appointment.cancelled?
            <p className='text-red-400 text-sm font-medium'>Cancelled</p>
            :appointment.isCompleted
            ?
            <p className='text-green-400 text-sm font-medium'>Completed</p>
            :<div className='col-span-2 sm:col-span-1 flex items-center justify-center gap-3 mt-2 sm:mt-0'>
            <img onClick={()=>cancelappointment(appointment._id)} className='w-6 h-6 cursor-pointer hover:scale-110 transition' src={assets.cancel_icon} alt="" />
            <img onClick={()=>completeappointment(appointment._id)} className='w-6 h-6 cursor-pointer hover:scale-110 transition' src={assets.tick_icon} alt="" />
            </div>
          }
        </div>
        ))}
       </div>
      </div>
    </div>
  )
}

export default DoctorDashboard