import React, { useState } from "react";
import "./styles/style.scss";
import { Link } from "react-router";
import axios from "axios";

import {login} from "../services/auth.api.js"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);

   

    
    const response = await login(email,password)

    console.log(response);

    //clear input fileds after login
    setEmail("");
    setPassword("");
  };

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
