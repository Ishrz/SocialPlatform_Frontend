import { RiBookmarkLine, RiChat4Line, RiHeartLine, RiShareForwardLine } from "@remixicon/react";
import { usePost } from "../hooks/usePost";
import { useEffect } from "react";

const Post =({user,post}) => {



  return (
    <main>
        <div className="post">
            <div className="top">
              <div className="user_profile">
               <div className="imageWarapper">
                 <img src="https://images.pexels.com/photos/36414427/pexels-photo-36414427.jpeg " alt="userProfile" />
               </div>
              </div>
              <p className="username">userName</p>
            </div>

            <div className="post-img">
              <img className="img" src="https://images.pexels.com/photos/36300699/pexels-photo-36300699.jpeg" />
            </div>
            <div className="icons">
              <div className="left">
                <button>
                   <RiHeartLine className="like"/>
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
              <p className="caption">Caption</p>
            </div>
          </div>
    </main>
  )
}

export default Post
