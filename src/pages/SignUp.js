import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './SignUp.css';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    username: ''
  });
  
  
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { Rejester, Token } = useAuth();  
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();
  const years = [...Array(currentYear - 1950 + 1)].map((_, index) => 1950 + index);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = Array(31).fill().map((_, index) => index + 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'email') {
      setErrorMessage(''); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    const birthDate = `${formData.year}-${months.indexOf(formData.month) + 1}-${formData.day}`;
    console.log({...formData});
    try {
      const response = await axios.post("http://52.91.153.146/users/" , 
        {"userName": formData.username,
        "email": formData.email,
        "password": formData.password,
        "firstName": formData.firstName,
        "lastName" : formData.lastName}
      )
      // const data = await response.json();
      console.log(response.status );
      if (response.status === 201) {
        // console.log(data);
        Rejester(formData.firstName, formData.lastName);
        setSuccessMessage('User registered successfully');
        setTimeout(() => {
          navigate('/Login');
        }, 2000);
      } else {
        // setErrorMessage(data.error || 'An error occurred');
      }
    } catch (error) {
      setErrorMessage('Network error');
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-box" onSubmit={handleSubmit}>
        <h2 className="signup-title">Create a new account</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="signup-row">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="signup-input"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Second name"
              value={formData.lastName}
              onChange={handleChange}
              className="signup-input"
            />
          </div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="signup-input"
          />
        </div>

        <div className="signup-row">
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="signup-select"
          >
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            name="month"
            value={formData.month}
            onChange={handleChange}
            className="signup-select"
          >
            <option value="">Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            name="day"
            value={formData.day}
            onChange={handleChange}
            className="signup-select"
          >
            <option value="">Day</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="signup-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="signup-input"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="signup-input"
        />

        <button type="submit" className="signup-button">Sign Up</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default SignUp;
