
import React,{createContext, PropsWithChildren, SetStateAction, useState} from 'react'

interface User{
  name:"",
  email:""
  _id:""
}

interface ContextData{
  showDetails:boolean,
  toggleShow:()=>void,
  currentUser:User,
  setcurrentUser:React.Dispatch<React.SetStateAction<User>>
}

export const GlobalContext = createContext<ContextData>({
  showDetails: false,
  toggleShow: () => {},
  currentUser: {
    name: "",
    email: "",
    _id:""
  },
  setcurrentUser: (currentUser:{})=>{}
});

export const MainContext:React.FC<PropsWithChildren> = ({children}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [currentUser, setcurrentUser] = useState<User>({}as User);
  const toggleShow = ()=>{
    setShowDetails(!showDetails)
  };

  React.useEffect(()=>{
    if(window.localStorage.getItem("userData")){
      const myData = JSON.parse(window.localStorage.getItem("userData") || "");
      setcurrentUser(myData);
    }
    return;
    
  },[]);

  return (
    <GlobalContext.Provider
      value={{
        showDetails,
        setcurrentUser,
        currentUser,
        toggleShow,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}






