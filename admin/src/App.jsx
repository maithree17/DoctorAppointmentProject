import React, { useContext } from 'react'
import Login from './pages/login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import {Routes,Route,Navigate} from 'react-router-dom'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointment from './pages/Admin/AllAppointment';
import Adddoctor from './pages/Admin/Adddoctor';
import DoctorsList from './pages/Admin/DoctorsList';
import { useState } from 'react';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorAppointment from './pages/Doctor/DoctorAppointment';
import DoctorProfile from './pages/Doctor/DoctorProfile';

function App() {

  const {atoken} =useContext(AdminContext)
  const {dtoken} =useContext(DoctorContext)

  return atoken|| dtoken ?(
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <SideBar/>
        <Routes>
           <Route  path='/'  element={ atoken ? <Navigate to="/admin-dashboard" /> : <Navigate to="/doctor-dashboard" />} />
          {/* Admin Route*/}
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/Allappointments' element={<AllAppointment/>}/>
          <Route path='/add-doctor' element={<Adddoctor/>}/>
          <Route path='/doctor-list' element={<DoctorsList/>}/>

          {/*Doctor Route */}
          
          <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
          <Route path='/doctor-appointments' element={<DoctorAppointment/>}/>
          <Route path='/doctor-profile' element={<DoctorProfile/>}/>
          
        </Routes>
      </div>
      
    </div>
  ):
  (
    <div>
      <Login/>
      <ToastContainer/>
    </div>
  )
}

export default App