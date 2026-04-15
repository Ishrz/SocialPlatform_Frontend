import axios from "axios"


const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
});

export async function getfeed(){

    const response=await api.get("/v1/api/post/feed")
    return response.data

}

export async function postLike(postId){

  const response = await api.post("/v1/api/post/likes/"+ postId)
  return response.data

}

export async function postUnLike(postId){

  const response = await api.post("/v1/api/post/unLike/" + postId)
  return response.data
}

export async function createPost(imageFile,caption){

  const formData = new FormData()

  formData.append("imgUrl" , imageFile)
  formData.append("caption" , caption)

  const response = await api.post("/v1/api/post/uploadPost" , formData)
  return response.data




}