import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'

function SideBar() {
    const { atoken } = useContext(AdminContext)
    const {dtoken} =useContext(DoctorContext)

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200">

    {atoken && (
        <ul className="mt-6 space-y-2">
            <NavLink to="/admin-dashboard" className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 mx-3 rounded-lg text-gray-600 font-medium transition-all duration-200
                    ${isActive 
                        ? "bg-blue-100 text-blue-700" 
                        : "hover:bg-gray-100 hover:text-gray-800"}`
                }>
                <img src={assets.home_icon} alt="" className="w-5 h-5" />
                <p>DashBoard</p>
            </NavLink>

            <NavLink to="/Allappointments" className={({ isActive }) =>
                    `flex items-center gap-3 px-6 py-3 mx-3 rounded-lg text-gray-600 font-medium transition-all duration-200
                    ${isActive 
                        ? "bg-blue-100 text-blue-700" 
                        : "hover:bg-gray-100 hover:text-gray-800"}`
                }>
                <img src={assets.appointment_icon} alt="" className="w-5 h-5" />
                <p>Appointment</p>
            </NavLink>

            <NavLink to="/add-doctor" className={({ isActive }) =>
                    `flex items-center gap-3 px-6 py-3 mx-3 rounded-lg text-gray-600 font-medium transition-all duration-200
                    ${isActive 
                        ? "bg-blue-100 text-blue-700" 
                        : "hover:bg-gray-100 hover:text-gray-800"}`
                }
            >
                <img src={assets.add_icon} alt="" className="w-5 h-5" />
                <p>Add Doctor</p>
            </NavLink>

            <NavLink to="/doctor-list" className={({ isActive }) =>
                    `flex items-center gap-3 px-6 py-3 mx-3 rounded-lg text-gray-600 font-medium transition-all duration-200
                    ${isActive 
                        ? "bg-blue-100 text-blue-700" 
                        : "hover:bg-gray-100 hover:text-gray-800"}`
                }
            >
                <img src={assets.people_icon} alt="" className="w-5 h-5" />
                <p>Doctors List</p>
            </NavLink>

        </ul>
    )}


    {dtoken && (
        <ul className="mt-6 space-y-2">
            <NavLink to="/doctor-dashboard" className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 mx-3 rounded-lg text-gray-600 font-medium transition-all duration-200
                    ${isActive 
                        ? "bg-blue-100 text-blue-700" 
                        : "hover:bg-gray-100 hover:text-gray-800"}`
                }>
                <img src={assets.home_icon} alt="" className="w-5 h-5" />
                <p>DashBoard</p>
            </NavLink>

            <NavLink to="/doctor-appointments" className={({ isActive }) =>
                    `flex items-center gap-3 px-6 py-3 mx-3 rounded-lg text-gray-600 font-medium transition-all duration-200
                    ${isActive 
                        ? "bg-blue-100 text-blue-700" 
                        : "hover:bg-gray-100 hover:text-gray-800"}`
                }>
                <img src={assets.appointment_icon} alt="" className="w-5 h-5" />
                <p>Appointment</p>
            </NavLink>

            <NavLink to="/doctor-profile" className={({ isActive }) =>
                    `flex items-center gap-3 px-6 py-3 mx-3 rounded-lg text-gray-600 font-medium transition-all duration-200
                    ${isActive 
                        ? "bg-blue-100 text-blue-700" 
                        : "hover:bg-gray-100 hover:text-gray-800"}`
                }
            >
                <img src={assets.people_icon} alt="" className="w-5 h-5" />
                <p>Profile</p>
            </NavLink>

        </ul>
    )}

</div>

  )
}

export default SideBar
