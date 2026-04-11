import React, { useEffect } from "react";
import "../pages/styles/feed.scss"
import Post from "../components/post";
import {usePost} from "../hooks/usePost.js"


const Feed = () => {

  const { handleGetFeed,feed,loading } = usePost()

  useEffect(()=>{
   
      handleGetFeed()
      console.log(feed)
   
  },[])

  if(loading || !feed) return <main><h1>Feed is loading</h1></main>

  console.log(feed)

  return (
    <main className="feedPage">
      <div className="feed">
        <div className="posts">
          {/* <Post/> */}
          {feed.map(post =>{
            return(
              <Post user={post.userId} post={post} />
            )
          })}
        </div>
      </div>
    </main>
  );
};

export default Feed;
