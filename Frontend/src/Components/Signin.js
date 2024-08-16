// Signin.js
import React, { useState } from 'react';
import './Signin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        mobileNo: '',
        password: ''
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { mobileNo, password } = formData;
        if (mobileNo && password) {
            try {
                const response = await axios.post('http://localhost:8080/api/signup/signin', {
                    mobileNo: mobileNo,
                    password: password
                });
                if (response.status === 200) {
                    alert('Login successful');
                    navigate("/");
                }
            } catch (error) {
                console.error('Error logging in', error);
                alert('Invalid credentials');
            }
        } else {
            alert('Please fill all the fields');
        }
    };

    const handleCreateAccount = (e) => {
        e.preventDefault();
        navigate("/signup");
    };

    return (
        <div className="signin-container">
            <video className="background-video" autoPlay muted loop>
                <source src="https://videos.pexels.com/video-files/4605191/4605191-sd_960_506_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="form-containerr">
                <h1 style={{ textAlign: 'center', color: 'black', fontSize: '36px', marginTop: '20px' }}>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="mobileNo">Mobile No.:</label>
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
                    <button type="submit">Submit</button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '20px' }}>
                    Don't have an account? <a href="/signup" onClick={handleCreateAccount}>Sign Up</a>
                </p>
            </div>
        </div>
    );
}

export default Signin;
