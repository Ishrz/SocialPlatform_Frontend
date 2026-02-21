import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <main>
      <div className="form_container">
        <h1>Register</h1>
        <form>
          <input placeholder="Username" type="text" />
          <input placeholder="Email" type="text" />
          <input placeholder="Password" type="password" />
          <button>Register</button>
        </form>
        <p>Already register? <Link to="/login" >Login</Link></p>
      </div>
    </main>
  );
};

export default Register;
