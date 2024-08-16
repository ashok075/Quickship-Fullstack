import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    email: '',
    password: '',
    rePassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleFocus = (e) => {
    document.querySelectorAll("input").forEach((ele) => {
      ele.style.border = "1px solid rgb(218, 218, 218)";
    });
    e.target.style.borderLeft = "2px solid blue";
  };

  const handleBlur = (e) => {
    e.target.style.border = "1px solid rgb(218, 218, 218)";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name || formData.name.length < 3 || formData.name.length > 10) tempErrors.name = "Please Enter Your Name.";
    if (!formData.mobileNo || !/^\d{10}$/.test(formData.mobileNo)) tempErrors.mobileNo = "Please Enter a valid 10-digit Mobile No.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid.";
    if (!formData.password || formData.password.length < 3) tempErrors.password = "Enter Your Password.";
    if (formData.rePassword !== formData.password) tempErrors.rePassword = "Password Mismatch.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios.post('http://localhost:8080/api/signup', {
          name: formData.name,
          mobileNo: formData.mobileNo,
          email: formData.email,
          password: formData.password
        });
        alert('User Created');
        navigate('/signin');
      } catch (error) {
        alert('Error creating user');
      }
    }
  };

  const handleLoginRedirect = () => {
    navigate("/signin");
  };

  return (
    <div className="form-container">
      <video
        className="background-video"
        src="https://videos.pexels.com/video-files/6994799/6994799-sd_640_360_30fps.mp4" // Sample video URL
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="form-container-content">
        <h1 style={{ textAlign: 'center', color: 'black', fontSize: '36px', marginTop: '20px' }}>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="mobileNo">Mobile No:</label>
            <input
              type="text"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.mobileNo && <p className="error">{errors.mobileNo}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="rePassword">Re-Enter Password:</label>
            <input
              type="password"
              id="rePassword"
              name="rePassword"
              value={formData.rePassword}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {errors.rePassword && <p className="error">{errors.rePassword}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Already have an account? 
          <button onClick={handleLoginRedirect} className="link-button">Sign In</button>
        </p>
      </div>
    </div>
  );
}

export default Signup;