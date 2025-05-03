import { Children, createContext, useState } from "react";

export const DashBoardContext = createContext()

export const DashBoardProvider = ({children})=>{
    const [toggleSideBar,setToggleSideBar] = useState(false)
    const [theam,setTheam] = useState(false)
    return <DashBoardContext.Provider value={{toggleSideBar,setToggleSideBar,theam,setTheam}}>
        {children}
    </DashBoardContext.Provider>
}