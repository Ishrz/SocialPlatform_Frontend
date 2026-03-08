import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:3000/v1/api/user",
  withCredentials: true,
});

export const registration = async (
  username,
  password,
  email,
  bio,
  profilepic
) => {
  try {
    const response = await api.post("/registration", {
      username,
      email,
      password,
      bio,
      profilepic,
    });


    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const login = async (email, password) => {
  try {
    const response = await api.post("/login", {
      email,
      password,
    });

    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const getMe = async () =>{
    try{

        const response = await api.get("/get-me")
        console.log(response)

    }catch(err){
        console.log(err.messsage)
    }
}
