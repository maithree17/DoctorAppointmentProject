import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import {AppContext} from '../Context/AppContext';

function Doctor() {

  const {speciality} =useParams();  /*speciality is undefined when all doctors is pressed and get value when speciality is pressed*/
  // console.log(speciality);

  const {doctors} =useContext(AppContext)
  const [filterDocBySpeciality,setfilterDocBySpeciality] =useState([])


  function applyFilter(){
    if(speciality){
      setfilterDocBySpeciality(doctors.filter(doc=>doc.speciality.toLowerCase()===speciality.toLowerCase()))
    }else{
      setfilterDocBySpeciality(doctors)
    }
  }

  useEffect(()=>{
    applyFilter();
  },[doctors,speciality])
  return (
    <div>
      <p>Browse the doctors through speciality</p>
      <div>
        <div>
          <p>General Physician</p>
          <p>Gynaecologyst</p>
          <p>Dermatologist</p>
          <p>Pediatrician</p>
          <p>Gastroenterologist</p>
          <p>Neurologist</p>
        </div>

        <div>
          {
            filterDocBySpeciality.map((doc,idx)=>(
                    <div onClick={()=>navigate(`./appointment/${doc._id}`)} key={idx} className='flex flex-col items-center gap-2 border border-blue-200 rounded-lg p-4 hover:shadow-lg hover:scale-100 transition-all duration-500 cursor-pointer'>
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