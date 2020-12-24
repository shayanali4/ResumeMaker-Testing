import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="register">
            <div className="image-background">
                <div className="content">
                    <form className="form">
                        <div>
                            <h1>Sign Up</h1>
                        </div>
                        <div className="username">
                            <label htmlFor="username">Full Name</label>
                            <input type="username" id="username" placeholder="Your Name" required
                            onChange={e=>setUsername(e.target.value)} />
                        </div>
                        <div className="gender">
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" id="gender">
                                <option default>Iam a</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="dob">
                            <label htmlFor="dob">Date of Birth</label>
                            <div className="dob-inputs">
                                <input type="number" id="dob" placeholder="Day"/>
                                <input type="number" placeholder="Month"/>
                                <input type="number" placeholder="Year"/>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="username">Your Interest Field ?</label>
                            <input type="username" id="username" placeholder="Designer, Banking, Business " required
                            onChange={e=>setUsername(e.target.value)} />
                        </div>
                        <div className="form-button">
                            <button className="primary" type="submit">Continue</button>
                        </div>
                        <div className="confirm">
                            <p>Already Have An Account ? {' '}
                                <Link to='/'>Sign In</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen
