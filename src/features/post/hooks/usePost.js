import { getfeed, postLike ,postUnLike } from "../services/post.api";
import { useContext, useEffect } from "react";
import { PostContext } from "../Post.context";

export const usePost = () => {
  const { loading, setLoading, post, setPost, feed, setFeed } =
    useContext(PostContext);

  const handleGetFeed = async () => {
    setLoading(true);
    const data = await getfeed();
    setFeed(data.posts.reverse());
    setLoading(false);
  };

  const handleLike = async (postId) => {
    const data = await postLike(postId);
    handleGetFeed();
    // setFeed([data.post ,...feed])
    // setFeed(data.posts.reverse)
  };


  const handleUnLike = async (postId) =>{
    const data = await postUnLike(postId)
    handleGetFeed()
  }

  useEffect(() => {
    handleGetFeed;
  }, []);

  return {
    feed,
    post,
    loading,
    handleGetFeed,
    handleLike,
    handleUnLike
  };
};
