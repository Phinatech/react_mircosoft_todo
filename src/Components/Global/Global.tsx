import React,{createContext, PropsWithChildren, useState} from 'react'

interface userData {
  UserData: null;
  setUserData: React.Dispatch<React.SetStateAction<null>>;
}

export const Accessing = createContext<userData | null>(null);

export const Global:React.FC<PropsWithChildren> = ({children}) => {

const [UserData, setUserData] = useState(null);

  return (
   <Accessing.Provider value={{
    UserData,
    setUserData,
   }}>
{children}
   </Accessing.Provider>
  )
}

