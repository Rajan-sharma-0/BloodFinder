import { createContext, useState } from "react";

export const DonorContext = createContext();
export const DonorProvider = ({children})=>{
    const [donors, setDonors] = useState([]);
    return(
        <DonorContext.Provider value={{donors, setDonors}}>
            {children}
        </DonorContext.Provider>
    )
}