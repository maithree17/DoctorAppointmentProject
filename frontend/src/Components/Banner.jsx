import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Banner() {

    const navigate=useNavigate();
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-15 lg:px-13 my-20 md:mx-12'>
        {/*------LEFT SIDE-------*/}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-1xl md:text-2xl lg:text-4xl font-semibold text-white'>
                <p>BOOK YOUR SLOT</p>
                <p>IN MINUTES WITH VERIFIED DOCTORS</p>
            </div>
            <button onClick={()=>{navigate('/login');screenTop(0,0)}} className='bg-white text-sm sm:text-gray-600 px-8 py-3 rounded-full mt-6 hover:bg-gray-200 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg
    active:scale-95'>Create Account</button>
        </div>

        {/*------RIGHT SIDE-------*/}
        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
            <img className='absolute bottom-0 right-0 h-[115%] lg:h-[135%] max-w-none'src={assets.welcome_appointment} alt="Welcome Appointment" />
        </div>
    </div>
  )
}

export default Banner