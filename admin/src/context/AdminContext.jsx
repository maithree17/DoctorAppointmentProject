import { useState } from "react";
import { createContext } from "react";

export const AdminContext = createContext()

const AdminContextProvider =(props)=>{

    const [atoken,setatoken] =useState(localStorage.getItem('atoken')?localStorage.getItem('atoken'):'')

    const backendURL=import.meta.env.VITE_BACKEND_URL

    const value={
        atoken,
        setatoken,
        backendURL
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
        
}

export default AdminContextProvider