import React, { useState } from 'react';
import axios from 'axios';

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/admins/login', { email, password, otp });
            if (otp) {
                alert('Login successful');
                console.log('Admin:', response.data.admin);
            } else {
                alert('OTP sent. Check your email and input it here.');
            }
        } catch (err) {
            console.error(err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h1>Admin Login</h1>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            {otp && <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />}
            <button type="submit">Login</button>
        </form>
    );
}

export default AdminLogin;
