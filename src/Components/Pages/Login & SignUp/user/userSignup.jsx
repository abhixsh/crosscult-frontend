import React, { useState } from 'react';
import axios from 'axios';

function UserSignup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        username: '',
        country: '',
        profile_picture: '',
        bio: '',
        fav_Country: '',
        preferences: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/register', formData);
            alert('User registration successful');
            console.log('User created:', response.data);
        } catch (err) {
            console.error(err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>User Signup</h1>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
            <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default UserSignup;
