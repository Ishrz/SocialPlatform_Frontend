import React, { useEffect } from "react";
import "../pages/styles/feed.scss"
import Post from "../components/post";
import {usePost} from "../hooks/usePost.js"
const Feed = () => {

  const {handelGetFeed} = usePost()

  useEffect(()=>{
    const fetchData = async ()=>{

      await handelGetFeed()
    }
    fetchData()
  },[])


  return (
    <main className="feedPage">
      <div className="feed">
        <div className="posts">
          <Post/>
        </div>
      </div>
    </main>
  );
};

export default Feed;
