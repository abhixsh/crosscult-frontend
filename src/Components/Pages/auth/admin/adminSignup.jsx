import React, { useState } from 'react';
import axios from 'axios';

function AdminSignup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        notification_email: '',
        password: '',
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002';
            const response = await axios.post(`${API_URL}/api/admins/register`, formData);
            setLoading(false);
            console.log('Admin registered:', response.data);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Admin Signup</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                required
            />
            <input
                name="notification_email"
                value={formData.notification_email}
                onChange={handleChange}
                placeholder="Notification Email"
                type="email"
                required
            />
            <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="Password"
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
        </form>
    );
}

export default AdminSignup;
