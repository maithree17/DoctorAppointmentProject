import React, { useCallback, useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

function DoctorAppointment() {
  const {dtoken,appointments,getDoctorappointments,completeappointment,cancelappointment}=useContext(DoctorContext)
  const {calculateAge,currency}=useContext(AppContext)

  useEffect(()=>{
    if(dtoken){
      getDoctorappointments()
    }
  },[dtoken])

  
  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-medium'>All Appointments</p>
      <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y'>
        <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b'> 
          <p>Sl.no</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fee</p>
          <p className='text-center'>Action</p>
        </div>
        {
          appointments.map((item,idx)=>(
            <div key={idx} className='grid grid-cols-2 sm:grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-y-5 gap-x-9 sm:gap-2 py-4 px-4 sm:px-6 border-b hover:bg-gray-50 transition duration-200'>
              <p className='hidden sm:block font-medium text-gray-700'>{idx+1}</p>
              <div className='flex items-center gap-3'>
                <img className='w-10 h-10 rounded-full object-cover border' src={item.userData.image} alt="user-image" /><p className='font-medium text-gray-800'>{item.userData.name}</p>
              </div>
              <div>
                <p className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${item.payment? 'bg-green-100 text-green-600': 'bg-yellow-100 text-yellow-600'}`}>
                  {item.payment?
                  'Online':
                  'CASH'}
                </p>
              </div>
              <p className='text-gray-600 hidden sm:block'>{calculateAge(item.userData.dob)}</p>
              <p className='text-gray-600'>{item.slotDate} at {item.slotTime}</p>
              <p className='text-gray-600'>{currency}{item.amount}</p>
              <div className='col-span-2 sm:col-span-1 flex items-center justify-center gap-3 mt-2 sm:mt-0'>
                <img onClick={()=>cancelappointment(item._id)} className='w-6 h-6 cursor-pointer hover:scale-110 transition' src={assets.cancel_icon} alt="" />
                <img onClick={()=>completeappointment(item._id)} className='w-6 h-6 cursor-pointer hover:scale-110 transition' src={assets.tick_icon} alt="" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DoctorAppointment