import {createContext,useState} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const DashContext = createContext()


export const DashboardProvider = ({children})=>{
const [loading,setLoading] = useState(false);


    return(
        <DashContext.Provider value={{loading, setLoading}}>
            {children}
        </DashContext.Provider>
    )
}