import { createContext } from "react";
import { registration, login, getMe } from "./services/auth.api";
import { useState } from "react";

export const authContext = createContext(null);

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handelLogin (email, password){
    setLoading(true)
    try {
      const response = await login(email, password);
      setUser(response);
      return response
      
    } catch (err) {
      console.log(err.message);
    } finally {
        setLoading(false)
    }
  };

  const handleRegister = async (username,password,email,bio,profilepic) =>{

    setLoading(true)
    try{
      const response = await registration(username,password,email,bio,profilepic)
      setUser(response)
      return response
    }catch(err){
      console.log(err.message)
    }finally{
      setLoading(false)
    }
  }

  return(
    <authContext.Provider value={{user,loading,handelLogin,handleRegister}} >
      {children}
    </authContext.Provider>
  )
}
