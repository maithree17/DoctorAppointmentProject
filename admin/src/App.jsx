import React, { useContext } from 'react'
import Login from './pages/login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/adminContext';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import {Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointment from './pages/Admin/AllAppointment';
import Adddoctor from './pages/Admin/Adddoctor';
import DoctorsList from './pages/Admin/DoctorsList';

function App() {

  const {atoken} =useContext(AdminContext)
  return atoken? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <SideBar/>
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/all-appointment' element={<AllAppointment/>}/>
          <Route path='/add-doctor' element={<Adddoctor/>}/>
          <Route path='/doctor-list' element={<DoctorsList/>}/>
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