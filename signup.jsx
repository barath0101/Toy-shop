import React from 'react'
import './signup.css'

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Sign Up</h1>
                <h2>________________</h2>
                <div className="input-box">
                    <input type="text" placeholder='IRCTC id' required/>
                    
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Mail' required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Confirm Password' required/>
                </div>

                <button type="submit">Create Account</button>
                <div className="register-link">
                    <p>Already an user? <a href=".">Log in</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;