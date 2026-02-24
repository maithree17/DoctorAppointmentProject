import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

export const AdminContext = createContext()

const AdminContextProvider =(props)=>{

    const [atoken,setatoken] =useState(localStorage.getItem('atoken')?localStorage.getItem('atoken'):'')
    const [doctors,setdoctors]=useState([])
    const [appointments,setappointments]=useState([])
    const [dashData,setDashdata]=useState(false)

    const backendURL=import.meta.env.VITE_BACKEND_URL

    const getAlldoctors=async()=>{
        try{
            const {data} =await axios.post(backendURL+'/api/admin/all-doctor',{},{headers:{atoken}})
            if(data.success){
                setdoctors(data.doctors)
            }else{
                toast.error(data.message)
            }

        }catch(error){
            toast.error(error.message)
        }
    }

    const changeAvailability=async(docId)=>{
        try{
            const {data}=await axios.post(backendURL+'/api/admin/change-availability',{docId},{headers:{atoken}})
            if(data.success){
                toast.success(data.message)
                getAlldoctors()
            }else{
                toast.error(data.message)
            }
        }catch(error){
            toast.error(error.message)
        }
    }

    const getAllapointments=async()=>{
        try{
            const {data}= await axios.get(backendURL+'/api/admin/Allappointments',{headers:{atoken}})
            if(data.success){
               setappointments(data.appointments) 
               console.log(data.appointments)
            }else{
                toast.error(data.message)
            }
        }catch(error){
            toast.error(error.message)
        }
    }

    const cancelAppointment=async(appointmentId)=>{
        try{
            const {data}=await axios.post(backendURL+'/api/admin/cancel-appointment',{appointmentId},{headers:{atoken}})
            if(data.success){
                toast.success(data.message)
                getAllapointments()
                getDashboardData()
            }else{
               toast.error(data.message) 
            }

        }catch(error){
            toast.error(error.message)
        }
    }

    const getDashboardData=async()=>{
        try{
            const {data}=await axios.get(backendURL+'/api/admin/admin-dashboard',{headers:{atoken}})
            if(data.success){
                setDashdata(data.dashData)
                // console.log(data.dashData)
            }else{
               toast.error(data.message) 
            }
        }catch(error){
            toast.error(error.message)
        }
    }

    const value={
        atoken,
        setatoken,
        backendURL,
        doctors,
        getAlldoctors,
        changeAvailability,
        appointments,
        setappointments,
        getAllapointments,
        cancelAppointment,
        dashData,
        getDashboardData
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
        
}

export default AdminContextProvider