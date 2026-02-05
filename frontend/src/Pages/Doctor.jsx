import React, { useContext, useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom';
import {AppContext} from '../Context/AppContext';

function Doctor() {

  const {speciality} =useParams();  /*speciality is undefined when all doctors is pressed and get value when speciality is pressed*/
  // console.log(speciality);

  const {doctors} =useContext(AppContext)
  const [filterDocBySpeciality,setfilterDocBySpeciality] =useState([])

  const navigate =useNavigate();


  function applyFilter(){
    if(speciality){
      setfilterDocBySpeciality(doctors.filter(doc=>doc.speciality.toLowerCase()===speciality.toLowerCase()))
    }else{
      setfilterDocBySpeciality(doctors)
    }
  }

  const handleSpecialityClick = (spec) => {
    navigate(speciality === spec ? '/doctors' : `/doctors/${spec}`);
  };


  useEffect(()=>{
    applyFilter();
  },[doctors,speciality])
  return (
    <div className='gap-4'>
      <p className='text-gray-700'>Browse the doctors through speciality</p>
      <div className='flex flex-col sm:flex-row items-start gap-4 mt-5'>
        <div className='text-gray-600 flex-col gap-5 text-sm'>
          <p onClick={()=>handleSpecialityClick('General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1 pr-16 border border-gray-300 rounded transition-all cursor-pointer my-2 ${speciality === 'General Physician' ? 'bg-indigo-100 text-black border-indigo-300' : 'text-gray-600 border-gray-300'}`}>General Physician</p>
          <p onClick={()=>handleSpecialityClick('Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1 pr-16 border border-gray-300 rounded transition-all cursor-pointer my-2 ${speciality === 'Gynecologist' ? 'bg-indigo-100 text-black border-indigo-300' : 'text-gray-600 border-gray-300'}` }>Gynecologist</p>
          <p onClick={()=>handleSpecialityClick('Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1 pr-16 border border-gray-300 rounded transition-all cursor-pointer my-2 ${speciality === 'Dermatologist' ? 'bg-indigo-100 text-black border-indigo-300' : 'text-gray-600 border-gray-300'}`}>Dermatologist</p>
          <p onClick={()=>handleSpecialityClick('Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1 pr-16 border border-gray-300 rounded transition-all cursor-pointer my-2 ${speciality === 'Pediatricians' ? 'bg-indigo-100 text-black border-indigo-300' : 'text-gray-600 border-gray-300'}`}>Pediatrician</p>
          <p onClick={()=>handleSpecialityClick('Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1 pr-16 border border-gray-300 rounded transition-all cursor-pointer my-2 ${speciality === 'Gastroenterologist' ? 'bg-indigo-100 text-black border-indigo-300' : 'text-gray-600 border-gray-300'}`}>Gastroenterologist</p>
          <p onClick={()=>handleSpecialityClick('Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1 pr-16 border border-gray-300 rounded transition-all cursor-pointer my-2 ${speciality === 'Neurologist' ? 'bg-indigo-100 text-black border-indigo-300' : 'text-gray-600 border-gray-300'}`}>Neurologist</p>
        </div>

        <div className='w-full grid grid-cols-auto gap-5 gap-y-6'>
          {
            filterDocBySpeciality.map((doc,idx)=>(
                    <div onClick={()=>navigate(`/appointment/${doc._id}`)} key={idx} className='flex flex-col items-center gap-2 border border-blue-200 rounded-lg p-4 hover:shadow-lg hover:scale-100 transition-all duration-500 cursor-pointer'>
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
      </div>
    </div>
  )
}

export default Doctor