import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import image_1 from "/assets/HalfCurve-CyV8KPdo.png";
import image_2 from "/assets/HalfCurve2-CiEiBTnL.png";

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

    return (
        <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden bg-gray-100">
            {/* Decorative Half Moons - Responsive Adjustments */}
            <motion.img
                src={image_1}
                alt="Top Right Half Moon"
                initial={{ opacity: 0, x: 50, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 right-0 w-1/2 md:w-1/3 max-w-[500px] min-w-[200px] transform -translate-y-1/4 z-0"
            />
            <motion.img
                src={image_2}
                alt="Bottom Left Half Moon"
                initial={{ opacity: 0, x: -50, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-0 left-0 w-1/2 md:w-1/3 max-w-[500px] min-w-[200px] transform translate-y-1/4 z-0"
            />

            {/* Login Form - Responsive Container */}
            <motion.div
                className="relative z-10 w-full max-w-lg p-6 md:p-10 space-y-6 bg-white shadow-2xl rounded-2xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <Toaster />

                <motion.h2
                    className="text-center text-xl md:text-2xl font-bold text-gray-900"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome Back
                </motion.h2>

                <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                    {[
                        { label: "Email Address", name: "email", type: "email" },
                        { label: "Password", name: "password", type: "password" }
                    ].map((field, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <label className="block text-sm md:text-md font-medium text-gray-700">
                                {field.label}
                            </label>
                            <input
                                type={field.type}
                                name={field.name}
                                value={loginData[field.name]}
                                onChange={handleChange}
                                placeholder={`Enter your ${field.label.toLowerCase()}`}
                                className="mt-1 md:mt-2 w-full px-3 py-2 md:px-4 md:py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm md:text-base"
                                required
                            />
                        </motion.div>
                    ))}

                    <motion.button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-2 md:py-3 px-3 md:px-4 text-white text-base md:text-lg font-semibold rounded-lg shadow-md transition duration-300 ${
                            isLoading 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isLoading ? 'Logging In...' : 'Login'}
                    </motion.button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <a 
                            href="/user/signup" 
                            className="font-medium text-orange-500 hover:text-orange-600 transition duration-300"
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