import React from 'react'
import { assets } from '../assets/assets'

function Headers() {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      {/* ---------LEFT SIDE------------*/}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>BOOK APPOINTMENT <br className='hidden sm:block'/>WITH TRUSTED DOCTORS</p>
        <div className='flex flex-row items-start gap-3 text-white text-sm font-light'>
          <img className='w-13 h-auto flex-shrink-1' src={assets.group_profiles} alt="header icon"/>
        <p>Find and book appointments with verified, experienced doctors in just a few clicks.
              Fast and reliable healthcare—right when you need it.&#129658;</p>
        </div>
        
        <a className='bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg
    active:scale-95' href='#speciality'>BOOK APPOINTMENT <img className='w-4 h-4 mr-2 inline-block' src={assets.arrow_icon} alt="arrow icon"/></a>

      </div>

      {/*-------RIGHT SIDE---------*/}
      <div className='md:w-1/2 flex items-center justify-center relative'>
        <img className='w-full max-w-md lg:max-w-lg rounded-xl shadow-2xl ' src={assets.header_img} alt="header image"/>
      </div>

    </div>
  )
}

export default Headers