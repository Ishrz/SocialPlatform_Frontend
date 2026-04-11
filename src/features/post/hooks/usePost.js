import { getfeed } from "../services/post.api";
import { useContext, useEffect } from "react";
import { PostContext } from "../Post.context";

export const usePost = () =>{

    const {loading, setLoading,post,setPost,feed,setFeed} = useContext(PostContext)

        const handleGetFeed = async () => {
        setLoading(true)
        const data = await getfeed()
        setFeed(data.posts.reverse())
        setLoading(false)
       
    }

    useEffect(()=>{
        handleGetFeed
    },[])

    return {
        feed,post,loading,handleGetFeed
    }


}