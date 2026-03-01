import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const DoctorContext = createContext()

const DoctorContextProvider =(props)=>{
    const backendURL=import.meta.env.VITE_BACKEND_URL
    const [dtoken,setdtoken] =useState(localStorage.getItem('dtoken')?localStorage.getItem('dtoken'):'')
    const [appointments,setappointments]=useState([])
    const [dashData,setdashData]=useState(false)
    const [profileData,setprofileData]=useState(false)

    const getDoctorappointments=async()=>{
        try{
            const {data}=await axios.get(backendURL+'/api/doctor/appointments',{headers:{dtoken}})
            if(data.success){
                setappointments(data.appointments)
                console.log(data.appointments)
            }else{
                toast.error(data.message)
            }
        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }

    const completeappointment=async(appointmentId)=>{
        try{
            const {data}=await axios.post(backendURL+'/api/doctor/complete-appointment',{appointmentId},{headers:{dtoken}})
            if(data.success){
                toast.success(data.message)
                getDoctorappointments()
            }else{
                toast.error(data.message)
            }

        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }

    const cancelappointment=async(appointmentId)=>{
        try{
            const {data}=await axios.post(backendURL+'/api/doctor/cancel-appointment',{appointmentId},{headers:{dtoken}})
            if(data.success){
                toast.success(data.message)
                getDoctorappointments()
            }else{
                toast.error(data.message)
            }

        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }

const getDashData=async()=>{
    try{
        const {data}=await axios.get(backendURL+'/api/doctor/dashboard',{headers:{dtoken}})
        if(data.success){
            setdashData(data.dashData)
            console.log(data.dashData)
        }else{
            toast.error(data.message)
        }
    }catch(error){
       console.log(error)
        toast.error(error.message) 
    }
}


    const value={
        dtoken,
        setdtoken,
        backendURL,
        getDoctorappointments,
        appointments,
        setappointments,
        completeappointment,
        cancelappointment,
        dashData,
        setdashData,
        getDashData
    }

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
        
}

export default DoctorContextProvider