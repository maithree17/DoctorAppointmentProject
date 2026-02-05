import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'

function RelatedDoctors({speciality,docId}) {

    const navigate=useNavigate();

    const {doctors} =useContext(AppContext)

    const [relateddoc,setrelateddoc] =useState([])

    useEffect(()=>{
        if(doctors.length>0 && speciality){
            const docdata=doctors.filter((doc)=>doc.speciality===speciality && doc._id!==docId )
            setrelateddoc(docdata)
        }
    },[doctors,speciality,docId])

  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-600 md:mx-10'>
        <h1 className='text-3xl font-medium'>Related Doctors</h1>
        <p className='sm:w-1/3 text-center text-sm'>Connect with Experienced Doctors Easily</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0' >
            {
                relateddoc.slice(0,5).map((doc,idx)=>(
                    <div onClick={()=>{navigate(`/appointment/${doc._id}`);scrollTo(0,0)}} key={idx} className='flex flex-col items-center gap-2 border border-blue-200 rounded-lg p-4 hover:shadow-lg hover:scale-100 transition-all duration-500 cursor-pointer'>
                        <img className='w-24 h-24 sm:w-24 sm:h-24 rounded-full object-cover shadow-md border border-gray-200' src={doc.image} alt={doc._id}/>
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p>Available</p>
                            </div>
                            <p className='text-gray-900'>{doc.name}</p>
                            <p className='text-gray-600'>{doc.speciality}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='bg-blue-100 text-gray-600 px-12 py-3 rounded-full mt-10'>More</button>
    </div>
  )
}

export default RelatedDoctors