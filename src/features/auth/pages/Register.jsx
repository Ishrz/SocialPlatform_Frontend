import React, { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../Hooks/useAuth";

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState("");
  const [bio, setbio] = useState("");
  const [profilepic, setprofilepic] = useState("");

  const {handleRegister,loading} = useAuth()
  

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await handleRegister(username, password, email,bio,profilepic);
    console.log(response);

    //clearing input fields
    // setEmail("")
    // setUsername("")
    // setPassword("")
    // setbio("")
    // setprofilepic("")
  };

  if(loading) return <h1>Loading.....</h1>
  return (
    <main>
      <div className="form_container">
        <h1>Register</h1>
        <form onSubmit={submitHandler}>
          <input
            value={username}
            onInput={(e) => setUsername(e.target.value)}
            placeholder="Username"
            type="text"
          />
          <input
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <input
            value={password}
            onInput={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />

          <input
            value={bio}
            onInput={(e) => setbio(e.target.value)}
            placeholder="bio"
            type="text"
          />

          <input
            value={profilepic}
            onInput={(e) => setprofilepic(e.target.value)}
            placeholder="ProfilePic"
            type="text"
          />
          <button>Register</button>
        </form>
        <p>
          Already register? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
