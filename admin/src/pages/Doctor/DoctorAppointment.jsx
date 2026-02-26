import React, { useCallback, useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

function DoctorAppointment() {
  const {dtoken,appointments,getDoctorappointments}=useContext(DoctorContext)

  useEffect(()=>{
    if(dtoken){
      getDoctorappointments()
    }
  },[dtoken])

  
  return (
    <div>
      <p>All Appointments</p>
      <div>
        <div>
          <p>Sl.no</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fee</p>
          <p>Action</p>
        </div>
      </div>
    </div>
  )
}

export default DoctorAppointment