import { getfeed, postLike ,postUnLike , createPost } from "../services/post.api";
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
  };


  const handleUnLike = async (postId) =>{
    const data = await postUnLike(postId)
    handleGetFeed()
  }

  const handleCreatePost = async (imageFile, caption) =>{
    setLoading(true)
    const data = await createPost(imageFile, caption)
    // setFeed([data.post , ...feed])
    setLoading(false)

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
    handleUnLike,
    handleCreatePost
  };
};
