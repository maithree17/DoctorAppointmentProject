import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'

function Dashboard() {
  const {atoken,getDashboardData,dashData,cancelAppointment}=useContext(AdminContext)

  useEffect(()=>{
    if(atoken){
      getDashboardData()
    }
  },[atoken])
  
  return (
    <div>

    </div>
  )
}

export default Dashboard