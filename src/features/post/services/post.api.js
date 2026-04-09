import axios from "axios"


const api = axios.create({
  baseURL: "http://127.0.0.1:3000",
  withCredentials: true
});

export const getfeed = async ()=>{

    const response=await api.get("/v1/api/post/feed")
    console.log(response)
    return response.data

}