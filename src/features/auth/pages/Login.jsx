import React, { useState } from "react";
import "./styles/style.scss";
import { Link } from "react-router";
import { useAuth } from "../Hooks/useAuth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const {handelLogin,loading} = useAuth()

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);

    const response =await handelLogin(email,password)
    console.log(response)

    //clear input fileds after login
    setEmail("");
    setPassword("");
  };

  if(loading) return <h1>Loading......</h1>

  return (
    <main>
      <div className="form_container">
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <input
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="text"
          />
          <input
            value={password}
            onInput={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <button>Login</button>
        </form>
        <p>
          Dont have registerd account? <Link to="/register">Register</Link>{" "}
        </p>
      </div>
    </main>
  );
};

export default Login;
