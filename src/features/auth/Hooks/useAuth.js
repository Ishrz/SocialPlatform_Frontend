import { useContext } from "react";
import { authContext } from "../auth.context";


export const useAuth =() =>{
    const context = useContext(authContext)

    return context
}