import { RiBookmarkLine, RiChat4Line, RiHeartLine, RiShareForwardLine } from "@remixicon/react";
import { usePost } from "../hooks/usePost";
import { useEffect } from "react";

const Post =({user,post,handleLike ,handleUnLike}) => {

  

  // const likeHandler = async (postId)=>{
  //   const data =await  handleLike(postId)
  //   console.log(data)
  // }

  return (
    <main>
        <div className="post">
            <div className="top">
              <div className="user_profile">
               <div className="imageWarapper">
                 <img src={user.profilepic ? user.profilepic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVvDx9Kezwg0D77WzdAUzjOEHf1WEqQ3-fA&s "} />
               </div>
              </div>
              <p className="username">{user.username}</p>
            </div>

            <div className="post-img">
              <img className="img" src={post.imgUrl} />
            </div>
            <div className="icons">
              <div className="left">
                <button onClick={()=> {post.isLiked ? handleUnLike(post._id):handleLike(post._id)} } className="">
                   <RiHeartLine className={`like ${post.isLiked ? `isLiked` : ``} `} />
                   </button>
              <button>
               <RiChat4Line className="comment"/>
              </button>
              <button>
                <RiShareForwardLine className="share"/>
              </button>
              </div>
              <div className="right">
                <button>
                  <RiBookmarkLine className="bookmark"/>
                </button>
              </div>
            </div>
            <div className="captionDiv">
              <p className="caption">{post.caption}</p>
            </div>
          </div>
    </main>
  )
}

export default Post
