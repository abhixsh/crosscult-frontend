import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // for navigation

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // To navigate after successful login

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/admins/login', {
        email,
        password,
      });

      // Store the token in localStorage
      localStorage.setItem('adminToken', response.data.token);

      alert('Admin Login Successful');
      console.log(response.data);

      // Redirect to Admin Panel
      navigate('/admin');  // You can customize the route for your admin panel

    } catch (error) {
      alert('Login Failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="relative flex items-center justify-center w-screen h-screen">
      <div className="relative w-full max-w-md p-10 space-y-8 bg-white shadow-2xl rounded-2xl">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Admin Login
        </h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-md font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter admin email"
              className="mt-2 w-full px-4 py-3 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="mt-2 w-full px-4 py-3 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-orange-500 text-white rounded-lg shadow-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
