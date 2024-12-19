import React, { useState } from 'react';
import axios from 'axios';

function UserRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/register', {
        email,
        password,
        name,
      });
      alert('User Registration Successful');
      console.log(response.data);
    } catch (error) {
      alert(
        'Registration Failed: ' + (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="relative flex items-center justify-center w-screen h-screen">
      <div className="relative w-full max-w-md p-10 space-y-8 bg-white shadow-2xl rounded-2xl">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          User Registration
        </h2>
        <form className="space-y-6" onSubmit={handleRegister}>
          <div>
            <label className="block text-md font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="mt-2 w-full px-4 py-3 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              className="mt-2 w-full px-4 py-3 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-orange-500 text-white rounded-lg shadow-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
