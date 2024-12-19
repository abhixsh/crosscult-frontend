import React, { useState } from 'react';
import axios from 'axios';
import image_1 from '../../../../assets/Login_Page/HalfCurve.png';
import image_2 from '../../../../assets/Login_Page/HalfCurve2.png';
import { useNavigate } from 'react-router-dom';

function UserLogin() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();  // Hook to handle redirection

    // Handle form data input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission to trigger login request
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send POST request to backend API (localhost for dev)
            const response = await axios.post('http://localhost:5000/users/login', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Successful login: Store token in localStorage
            localStorage.setItem('token', response.data.token);
            setMessage('Login successful!');
            console.log('User Logged In:', response.data);

            // Redirect the user to the home page or another protected route
            navigate('/home');  // You can change '/home' to wherever you want the user to be redirected

        } catch (error) {
            if (error.response) {
                // If response exists (400, 500 status errors)
                setMessage(error.response.data.message || 'Something went wrong during login.');
            } else {
                // Network error or server not reachable
                setMessage('Network error. Please try again later.');
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Main Form Container */}
            <main className="flex-grow relative flex items-center justify-center w-screen py-12 px-4">
                {/* Decorative Half Moons */}
                <img
                    src={image_1}
                    alt="Top Right Half Moon"
                    className="absolute top-0 right-0 w-1/3 max-w-[500px] min-w-[300px] transform -translate-y-1/4"
                />
                <img
                    src={image_2}
                    alt="Bottom Left Half Moon"
                    className="absolute bottom-0 left-0 w-1/3 max-w-[500px] min-w-[300px] transform translate-y-1/4"
                />

                {/* Login Form */}
                <div className="relative z-10 w-full max-w-md p-10 space-y-8 bg-white shadow-2xl rounded-2xl mx-4">
                    <h2 className="text-center text-2xl font-bold text-gray-900">User Login</h2>
                    {message && <div className="text-center text-red-500">{message}</div>}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-md font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:border-[#ff6a00]"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-md font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:border-[#ff6a00]"
                                required
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-[#ff6a00] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#ff6a00]/90 focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:ring-offset-2 transition duration-300"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="text-center">
                        <p className="text-md text-gray-600">
                            Don't have an account?{' '}
                            <a
                                href="/register"
                                className="font-semibold text-[#ff6a00] hover:text-[#ff6a00]/80 transition duration-300"
                            >
                                Register Now
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default UserLogin;
