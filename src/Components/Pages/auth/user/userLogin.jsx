import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";

function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post(
                'http://localhost:3001/users/login',
                loginData
            );

            const { token, user } = response.data;
            
            // Store token
            localStorage.setItem('userToken', JSON.stringify({
                value: token,
                timestamp: Date.now()
            }));
            
            // Store specific user details
            localStorage.setItem('userData', JSON.stringify({
                name: user.name,
                username: user.username,
                country: user.country,
                email: user.email,
                profile_picture: user.profile_picture,
                registration_date: user.registration_date,
                fav_Country: user.fav_Country,
                preferences: user.preferences
            }));

            toast.success('Login Successful', {
                duration: 2000,
                position: 'top-right'
            });

            setTimeout(() => {
                navigate('/');
            }, 2000);

        } catch (error) {
            toast.error(
                error.response?.data?.message || 'Login Failed. Please check your credentials.',
                { duration: 3000, position: 'top-right' }
            );
        } finally {
            setIsLoading(false);
        }
    };

    // Rest of the component remains the same
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-50 overflow-hidden">
            <Toaster />
            
            <motion.div
                className="w-full max-w-md p-10 bg-white rounded-xl shadow-2xl z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
                    Welcome Back
                </h2>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={loginData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 px-4 text-white rounded-lg font-semibold transition duration-300 ${
                            isLoading 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        }`}
                    >
                        {isLoading ? 'Logging In...' : 'Login'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <a 
                            href="/signup" 
                            className="font-medium text-blue-600 hover:text-blue-500 transition duration-300"
                        >
                            Sign Up
                        </a>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default Login;