import { createContext, useState } from "react";


const postContext = createContext(null)

export const postContextProvider = ({children}) =>{
    const [loading, setLoading]=useState(false)

    const [post , setPost] = useState(null)

    const [feed , setFeed] = useState(null)

    return(
        <postContextProvider value={{loading,setLoading,post,setPost,feed,setFeed}}>
            {children}
        </postContextProvider>
    )
} 