import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContextAdmin = createContext();
export default function AuthProviderAdmin({children}){
  const [authadmin, setAuthAdmin] = useState({
    user: null,
    token: "",
    id:"",
   
  });



  useEffect(() => {
    const data = localStorage.getItem("authadmin");
    if (data) {
      const parseData = JSON.parse(data);
      setAuthAdmin({
        ...authadmin,
        user: parseData.user.name,
        token: parseData.token,
        id:parseData.id,
    
      

      });
    }
   
  }, []);
  return (
    <AuthContextAdmin.Provider value={[authadmin, setAuthAdmin]}>
      {children}
    </AuthContextAdmin.Provider>
  );
};

// custom hook
const useAuthAdmin = () => useContext(AuthContextAdmin);

export { useAuthAdmin };