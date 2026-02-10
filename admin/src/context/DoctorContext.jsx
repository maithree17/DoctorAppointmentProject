import { createContext } from "react";

const DoctorContext = createContext()

const DoctorContextProvider =()=>{
    const value={

    }

    return (
        <DoctorContext.Provider>
            {props.children}
        </DoctorContext.Provider>
    )
        
}

export default DoctorContextProvider