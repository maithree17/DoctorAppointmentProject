import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

function AllAppointment() {

  const {atoken,appointments,getAllapointments} = useContext(AdminContext)

  useEffect(()=>{
    if(atoken){
      getAllapointments()
    }
  },[atoken])

  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-medium'>All Appointments</p>
      <div className='bg-white bg-rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
        <div className='hidden sm:grid grid-cols-[1fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
          <p>sno</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>dname</p>
          <p>fee</p>
          <p>action</p>
        </div>

        {appointments.map((item,idx)=>(
          <div className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[1fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 px-3 py-6 border-b hover:bg-gray-50' key={idx}>
            <p className='max-sm:hidden'>{idx+1}</p>
            <div className='flex items-center gap-2'>
              <img className='w-9 rounded-full' src={item.userData.image} alt="userimg" /><p>{item.userData.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllAppointment