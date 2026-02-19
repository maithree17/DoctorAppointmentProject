import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'

export const AppContext=createContext();

const AppContextProvider =(props)=>{
    const dollor='$'
    const backendURL=import.meta.env.VITE_BACKEND_URL
    const [doctors,setdoctors]=useState([])
    const [token,settoken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
    const [userdata,setuserdata]=useState(false)

    const getDoctorsData=async()=>{
        try{
            const {data} =await axios.get(backendURL+'/api/doctor/list')
            if(data.success){
                setdoctors(data.doctors)
            }else{
                toast.error(error.message)
            }
        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
    }

    

    const LoadUserProfileData=async()=>{
        try{
            const {data}=await axios.get(backendURL+'/api/user/getprofile',{headers:{token}})
            if(data.success){
                setuserdata(data.userData)
            }else{
                toast.error(data.message)
            }
        }catch(error){
             console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        getDoctorsData()
    },[])

    useEffect(()=>{
        if(token){
            LoadUserProfileData()
        }else{
            setuserdata(false)
        }
    },[token])

    const value={
        doctors,
        dollor,
        token,
        settoken,
        backendURL,
        userdata,
        setuserdata,
        LoadUserProfileData,
        getDoctorsData
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
