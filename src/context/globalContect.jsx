import { createContext, useState } from "react";

export const GlobalContect = createContext();

export const GlobalProvider = ({ children }) => {
  const [editFlag,setEditFlag] = useState('')
  const [addNewAddressFlag,setAddNewAddressFlag] = useState(false)
  return (
    <GlobalContect.Provider
      value={{editFlag,setEditFlag,addNewAddressFlag,setAddNewAddressFlag}}
    >
      {children}
    </GlobalContect.Provider>
  );
};
