import React, { use } from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

function SpecialityMenu() {
    
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-600'>
        <h1 className='text-3xl font-medium'>Find the speciality</h1>
        <p>Helping you connect with trusted medical specialists for better healthcare.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {specialityData.map((item,idx)=>(
                <Link onClick={()=>scrollTo(0,0)}className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-5px] transition-all duration-300'key={idx} to={`/doctors/${item.speciality}`}>
                    <img className='w-16 sm:w-24 mb-2'src={item.image} alt={item.speciality} />
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu