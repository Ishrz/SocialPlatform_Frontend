import React from 'react'
import "./style.scss"
import { Link } from 'react-router'
const Login = () => {
  return (
    <main>
        <div className='form_container'>
            <h1>Login</h1>
            <form>
                <input  placeholder='Email' type='text' / >
                <input placeholder='Password' type='password' />
                <button>Login</button>
            </form>
            <p>Dont have registerd account? <Link to="/register">Register</Link> </p>

        </div>
    </main>
  )
}

export default Login
