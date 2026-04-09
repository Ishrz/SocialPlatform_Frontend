import axios from "axios"


const api = axios.create({
  baseURL: "http://127.0.0.1:3000/v1/api/post",
  withCredentials: true,
});

export const getfeed = async ()=>{

    const response=await api.get("/feed")
    return response.data

}