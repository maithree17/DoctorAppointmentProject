import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const DoctorContext = createContext()

const DoctorContextProvider =(props)=>{
    const backendURL=import.meta.env.VITE_BACKEND_URL
    const [dtoken,setdtoken] =useState(localStorage.getItem('dtoken')?localStorage.getItem('dtoken'):'')
    const [appointments,setappointments]=useState([])

    const getDoctorappointments=async()=>{
        try{
            const {data}=await axios.get(backendURL+'/api/doctor/appointments',{headers:{dtoken}})
            if(data.success){
                setappointments(data.appointments.reverse())
                console.log(data.appointments.reverse())
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
        setappointments
    }

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
        
}

export default DoctorContextProvider