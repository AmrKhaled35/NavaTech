import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, Token } = useAuth(); 
  const [token , setToken] = useState('');
  const navigate = useNavigate(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post("http://52.91.153.146/login/", {
        userName: email,
        password: password,
      });

      const data = response.data;  // Directly access response data
      if (response.status === 200) {
        console.log('Login successful:', data);
        setToken(data.token);  
        login(email, data.id); 
        Token(data.token);  // Use data.token directly
        navigate('/'); 
      } else {
        setError('Invalid credentials. Please register if you don\'t have an account.');
      }
    } catch (err) {
      console.error('Login failed:', err);  // Log error for debugging
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2 className="titleL">Welcome back!</h2>
        <p className="subtitle">
          Sign in to your account to continue.
          <Link to='/SignUp'>
            <span className="signup-link"> Sign up.</span>
          </Link>
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Email"
            className="input"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="input"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit" className="button">Sign in</button>
        </form>

        <p className="forgot-password">
          Forgot your password? <span className="reset-link">Reset password.</span>
        </p>
        {error && (
          <p style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
