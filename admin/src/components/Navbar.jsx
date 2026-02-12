import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/adminContext'
import {useNavigate} from 'react-router-dom'

function Navbar() {

  const { atoken, setatoken } = useContext(AdminContext)
  const navigate=useNavigate()

  const logout =()=>{
    navigate('/')
    atoken && setatoken('')
    atoken && localStorage.removeItem('atoken')
  }

  return (
    <div className="w-full bg-white border-b shadow-sm">
  <div className="w-full px-8 py-1 flex items-center justify-between">

    <div className="flex items-center gap-4">
      <img src={assets.admin_logo} alt="Logo" className="h-20 w-auto object-contain"/>
      <h1 className="text-2xl font-semibold text-gray-800">Admin Panel</h1>
    </div>

    <button onClick={logout} className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-1.5 rounded-full font-medium transition">Logout</button>

  </div>
</div>

  )
}

export default Navbar
