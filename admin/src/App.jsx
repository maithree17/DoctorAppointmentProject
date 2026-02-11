import React, { useContext } from 'react'
import Login from './pages/login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/adminContext';
import Navbar from './components/Navbar';

function App() {

  const {atoken} =useContext(AdminContext)
  return atoken? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
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