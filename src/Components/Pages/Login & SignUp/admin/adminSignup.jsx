import React, { useState } from 'react';
import axios from 'axios';

function AdminSignup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        notification_email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/admins/register', formData);
            alert('Registration successful');
            console.log('Admin created:', response.data);
        } catch (err) {
            console.error(err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Admin Signup</h1>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input name="notification_email" value={formData.notification_email} onChange={handleChange} placeholder="Notification Email" required />
            <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default AdminSignup;
