import React, { useContext ,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { assets } from '../assets/assets'

function Appointment() {

  const {docId} =useParams()
  const {doctors,dollor} =useContext(AppContext)

  const [Doctorinformation,setDoctorinformation]=useState(null)
  const [docSlot,setdocSlot] =useState([])
  const [slotidx,setslotidx] =useState(0)
  const [slotTime,setslotTime] =useState('')

  const Fetchdocinfo = () =>{
    const docinfo=doctors.find((doc)=>doc._id===docId)
    setDoctorinformation(docinfo)
    console.log(docinfo)
  }

   const AvailableSlote =()=>{
    setdocSlot([])

    //Todays date
    let today=new Date()
    for(let i=0;i<7;i++){
      let currentdate=new Date(today)
      currentdate.setDate(today.getDate()+i)

      let endtime=new Date()
      endtime.setDate(today.getDate()+1)
      endtime.setHours(21,0,0,0)

      if(currentdate.getDate()===today.getDate()){
        currentdate.setHours(today.getHours()>10?today.getHours()+1:10)
        currentdate.setMinutes(today.getMinutes()>30?30:0)
      }else{
        currentdate.setHours(10)
        currentdate.setMinutes(0)
      }
      while(currentdate<endtime){
        
      }
    }
   }

  useEffect(()=>{
    Fetchdocinfo()
  },[doctors,docId])

  useEffect(()=>{
    AvailableSlote()
  },[docinfo])


  return Doctorinformation && (
    <div >
      {/*-----Doctor Details-----*/}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-blue-500 w-full sm:max-w-64 rounded-lg' src={Doctorinformation.image} alt="doc image" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-7 py-7 bg-white mx-2sm:mx-0 mt-[-80px] sm:mt-0'>
          {/*----Doc info----*/}
          <p className='flex items-center gap-2 text-2xl font-medium'>{Doctorinformation.name}
            <img className='w-5' src={assets.verified_icon} alt="verified" />
          </p>
          <div className='flex items-center gap-2 text-ms mt-1 text-gray-600'>
            <p>{Doctorinformation.degree}-{Doctorinformation.speciality}</p>
            <button className='px-3 py-0.5 text-xs font-medium bg-blue-50 border border-blue-200 rounded-full my-3'>{Doctorinformation.experience}</button>
          </div>

          {/*----About doc----*/}
          <div >
            <p className='flex items-center gap-2 text-medium my-2'>About
              <img src={assets.info_icon} alt="info" />
            </p>
            <p className='text-sm text-gray-600'>{Doctorinformation.about}</p>
          </div>

          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee :<span className='text-gray-600'>{dollor}{Doctorinformation.fees}</span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Appointment