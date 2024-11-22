import React, { useState } from "react";
import UserContext from "./UserContext";


// children is just a generic name we can give any name we juts pass as it is which we get 
const UserContextProvider=({children})=>{
    const [user,setUser]=useState(null);
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider