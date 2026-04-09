import { getfeed } from "../services/post.api";
import { useContext, useEffect } from "react";
import { PostContext } from "../Post.context";

export const usePost =async () =>{

    const {loading, setLoading,post,setPost,feed,setFeed} = useContext(PostContext)

    const handelGetFeed = async () =>{
      
        setLoading(true)
        const data = await getfeed()
        console.log(data)
        setLoading(false)


    }

    // useEffect(()=>{
    //     handelGetFeed()
    // },[])

    return {
        feed,post,loading,handelGetFeed
    }


}