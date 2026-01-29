import React from 'react'
import {assets} from '../assets/assets';
import {NavLink,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import '../index.css';

function Navbar() {
  const navigate = useNavigate();

  const [showmenu,setShowmenu] = useState(false);
  const [token,settoken] = useState(true);  //when token is there logged in when not logged out

  return (
<div className="flex items-center justify-between text-sm py-1 mb-5 border-b border-gray-300">

  <img src={assets.logo} alt="Logo" className="w-32 cursor-pointer" />

  <ul className="hidden md:flex items-center gap-5 font-medium">

    <NavLink to='/' >
      <li className="cursor-pointer" >HOME</li>
      <hr className="h-0.5 w-3/5 bg-primary border-none mx-auto hidden " />
    </NavLink>

    <NavLink to='/doctors' >
      <li className="cursor-pointer">ALL DOCTORS</li>
      <hr className="h-0.5 w-3/5 bg-primary border-none mx-auto hidden" />
    </NavLink>

    <NavLink to='/about' >
      <li className="cursor-pointer">ABOUT</li>
      <hr className="h-0.5 w-3/5 bg-primary border-none mx-auto hidden " />
    </NavLink>

    <NavLink to='/contact' >
      <li className="cursor-pointer">CONTACT</li>
      <hr className="h-0.5 w-3/5 bg-primary border-none mx-auto hidden " />
    </NavLink>

  </ul>


  <div className='flex items-center gap-4'>
    {
      token ?


      <div className='flex items-center gap-2 cursor-pointer group relative'>
        <img src={assets.profile_pic}  className='w-12 rounded-full'/>
        <img src={assets.dropdown_icon} className='w-2'/>
        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
          <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
            <p onClick={()=>navigate('./Myprofile')}className='hover:text-black cursor-pointer'>MyProfile</p>
            <p onClick={()=>navigate('./myappointment')}className='hover:text-black cursor-pointer'>MyAppointment</p>
            <p onClick={()=>{settoken(false), navigate('/')}} className='hover:text-black cursor-pointer'>Logout</p>
          </div>
        </div>
      </div>

      :
      <button onClick={()=>navigate('./login')}className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-primary/90'>Create Account</button>
    }
    
  </div>
  

</div>

  )
}

export default Navbar