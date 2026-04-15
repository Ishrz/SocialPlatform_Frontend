import React, { useEffect } from "react";
import "../pages/styles/feed.scss"
import Post from "../components/post";
import {usePost} from "../hooks/usePost.js"
import Nav from "../../shared/component/Nav.jsx";


const Feed = () => {

  const { handleGetFeed,feed,loading ,handleLike, handleUnLike } = usePost()

  useEffect(()=>{
   
      handleGetFeed()
     
   
  },[])

  if(loading || !feed) return <main><h1>Feed is loading</h1></main>



  return (
    <main className="feedPage">
        <Nav/>
      <div className="feed">
        <div className="posts">
          {/* <Post/> */}
          {feed.map(post =>{
            return(
              <Post id={post.userId} user={post.userId} post={post} handleLike={handleLike} handleUnLike={handleUnLike} />
            )
          })}
        </div>
      </div>
    </main>
  );
};

export default Feed;
