import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Login.scss"
import { useAuth0 } from "@auth0/auth0-react";
function Login() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="loginContainer">
            <div className='loginContent'>
                <i className='icon fa  fa-connectdevelop'></i>
                <span className='title'>Connect</span>
                <button className='loginButton' onClick={() => { loginWithRedirect() }}>Login</button>
            </div>
        </div>
    )
}

export default Login