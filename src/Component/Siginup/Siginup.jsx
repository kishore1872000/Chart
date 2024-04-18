import React, { useState } from 'react';
import './Siginup.css';
import Rectangle from '../../assets/Rectangle.png';
import m1 from '../../assets/m1.png';
import m2 from '../../assets/m2.png';
import { FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';
import {
    createUserWithEmailAndPassword,
} from "firebase/auth";

function Siginup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [nameMessage, setNameMessage] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailMessage('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMessage('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMessage('');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameMessage('');
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
    setContactMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password && confirmPassword && name && contact) {
      if (!validateEmail(email)) {
        setEmailMessage('Invalid email format.');
        return;
      }
      if (password !== confirmPassword) {
        setPasswordMessage('Passwords do not match.');
        return;
      }
      if (!validatePassword(password)) {
        setPasswordMessage('Password must contain @, $, and at least 8 characters.');
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        navigate('/');
      } catch (error) {
        console.error('Error signing up:', error.message);
      }
    } else {
      if (!email) setEmailMessage('Email is required');
      if (!password) setPasswordMessage('Password is required');
      if (!confirmPassword) setPasswordMessage('Confirm Password is required');
      if (!name) setNameMessage('Name is required');
      if (!contact) setContactMessage('Contact number is required');
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[@$])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <h2 className='Logo'>Your Logo</h2>
      <h1 className='Sigin-text'>Sign Up to</h1>
      <p className='word'>Lorem Ipsum is simply</p>
      <p className='Register'>
        if you don't have an account register<br />
        You can <Link to="/" className='text-none'> <span> Login here !</span></Link>
      </p>
      <img className='img' src={Rectangle} alt="Rectangle"></img>
      <div className='Sigin-up'>
        <h2>Sign Up</h2>
        <input placeholder='Enter the email' type="email" value={email} onChange={handleEmailChange} />
        <p className='error15'>{emailMessage}</p>
        <input placeholder='Name' type="text" value={name} onChange={handleNameChange} />
        <p className='error16'>{nameMessage}</p>
        <input placeholder='Contact Number' type="tel" value={contact} onChange={handleContactChange} />
        <p className='error17'>{contactMessage}</p>
          <input
            className='v1password'
            placeholder='Password'
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
          />
          {showPassword ? (
            <FaEye onClick={togglePasswordVisibility} className='iconpassword' />
          ) : (
            <FaEyeSlash onClick={togglePasswordVisibility} className='iconpassword' />
          )}

        <p className='error18'>{passwordMessage}</p>
        <input
        className='v2password'
          placeholder='Confirm Password'
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {showConfirmPassword ? (
          <FaEye onClick={toggleConfirmPasswordVisibility} className='iconpassword2' />
        ) : (
          <FaEyeSlash onClick={toggleConfirmPasswordVisibility} className='iconpassword2' />
        )}
        <p className='error19'>{passwordMessage}</p>
        <button onClick={handleSubmit}>Register</button>
        <span>or continue with</span>
        <img src={m1} alt="m1" />
        <img src={m2} alt="m2" />
        <FaApple className='iconApple' />
      </div>
    </div>
  );
}

export default Siginup;
