import axios from "axios"


export const registration = async (username, password, email,bio,profilepic) =>{

    const response = await axios.post("http://127.0.0.1:3000/v1/api/user/registration",
        {
            username,
            email,
            password,
            bio,
            profilepic
        },
        {
            withCredentials:true
        }
    )

    console.log(response)
    return response.data

}

export const login = async (email,password) =>{
    const response = await axios.post("http://127.0.0.1:3000/v1/api/user/login",
        {
            email,
            password
        },
        {
            withCredentials:true
        }
    )

    return response.data
}