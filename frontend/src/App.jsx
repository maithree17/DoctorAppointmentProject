import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Doctor from './Pages/Doctor.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import About from './Pages/About'
import Myprofile from './Pages/Myprofile'
import MyAppointment from './Pages/MyAppointment'
import Appointment from './Pages/Appointment.jsx'
import Nav from './Components/Navbar.jsx'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctor/>} />
        <Route path='/doctors/:speciality' element={<Doctor/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Myprofile' element={<Myprofile/>} />
        <Route path='/myappointment' element={<MyAppointment/>} />
        <Route path='/appointment/:docId' element={<Appointment/>} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App