import { createContext } from "react";

const AppContext = createContext()

const AppContextProvider =(props)=>{
    const value={

    }

    return (
        <AppContext.Provider>
            {props.children}
        </AppContext.Provider>
    )
        
}

export default AppContextProvider