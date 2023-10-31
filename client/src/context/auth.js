import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();
export default function AuthProvider({children}){
  const [auth, setAuth] = useState({
    user: null,
    token: "",
    id:"",
    cartItem:0
  });

  //default axios
//   axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user.name,
        token: parseData.token,
        id:parseData.id,
        cartItem:parseData.cartItem
      

      });
    }
   
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth };