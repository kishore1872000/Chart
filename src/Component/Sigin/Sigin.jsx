import React, { useState } from 'react';
import './Sigin.css';
import Rectangle from '../../assets/Rectangle.png';
import m1 from '../../assets/m1.png';
import m2 from '../../assets/m2.png';
import { FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';
import {
    signInWithEmailAndPassword
} from "firebase/auth";

function Sigin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailMessage('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email && password) {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                if (userCredential) {
                    navigate('/Main');
                }
            } catch (error) {
                alert(error.message);
            }
        } else {
            if (!email) setEmailMessage('Email is required');
            if (!password) setPasswordMessage('Password is required');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <h2 className='Logo'>Your Logo</h2>
            <h1 className='text1'>Sign in to</h1>
            <p className='word18'>Lorem Ipsum is simply</p>
            <p className='Register12'>
                if you don't have an account register<br />
                You can <Link className='text-none' to="/Siginup"> <span> Register here !</span></Link>
            </p>
            <img className='img12' src={Rectangle} alt="Rectangle"></img>
            <div className='Sigin1'>
                <h2>Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <input placeholder='Enter the email or user name'
                        type="text"
                        value={email}
                        onChange={handleEmailChange} />
                    <div className='error12'>{emailMessage}</div>
                    <div className="password-container1">
                        <input
                            placeholder='Password'
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {showPassword ? (
                            <FaEye onClick={togglePasswordVisibility} className='iconpassword1' />
                        ) : (
                            <FaEyeSlash onClick={togglePasswordVisibility} className='iconpassword1' />
                        )}
                    </div>
                    <div className='error12'>{passwordMessage}</div>
                    <p className='Forgot1'>Forgot password ? </p>
                    <button type='submit'>Login</button>
                </form>
                <span>or continue with</span>
                <img src={m1} alt="m1" />
                <img src={m2} alt="m2" />
                <FaApple className='iconApple1' />
            </div>
        </div>
    );
}

export default Sigin;
