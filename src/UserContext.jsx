import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [isVerified, setIsVerified] = useState(false);
    return( 
        <UserContext.Provider value={{user, setUser, isVerified, setIsVerified}}>
        {children}
        </UserContext.Provider>
    )
}