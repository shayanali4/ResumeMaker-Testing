import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


function SigninScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className="login">
            <div className="image-background">
                <div className="content">
                    <form className="form">
                        <div>
                            <h1>Sign In</h1>
                        </div>
                        <div className="username">
                            <label htmlFor="username">Username</label>
                            <input type="username" id="username" placeholder="Your Name" required
                            onChange={e=>setUsername(e.target.value)} />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter password" required
                            onChange={e=>setPassword(e.target.value)} />
                        </div>
                        <div className="forgot-pass">
                            <Link>Forgot Password ?</Link>
                        </div>
                        <div className="form-button">
                            <button className="primary" type="submit">LOGIN</button>
                        </div>
                        <div className="confirm">
                            <p>DON'T Have An Account ? {' '}
                                <Link to='/register'>Sign Up</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>  
    )
}

export default SigninScreen
