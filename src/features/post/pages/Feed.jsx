import React from "react";
import "../pages/styles/feed.scss"
import Post from "../components/post";
const Feed = () => {
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
