import React, { useState } from 'react';
import axios from 'axios';

function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/login', { email, password });
            alert('Login successful');
            console.log('User:', response.data.user);
        } catch (err) {
            console.error(err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h1>User Login</h1>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
}

export default UserLogin;
