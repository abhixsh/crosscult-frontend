import React, { useState } from 'react';
import axios from 'axios';

function AdminLogin() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        otp: '',
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [otpSent, setOtpSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002';
            const response = await axios.post(`${API_URL}/api/admins/login`, formData);
            setLoading(false);
            setOtpSent(true);  // OTP has been sent successfully
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Admin Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {otpSent ? (
                <>
                    <input
                        name="otp"
                        value={formData.otp}
                        onChange={handleChange}
                        placeholder="Enter OTP"
                        required
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Verifying OTP...' : 'Verify OTP'}
                    </button>
                </>
            ) : (
                <>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
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
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </>
            )}
        </form>
    );
}

export default AdminLogin;
