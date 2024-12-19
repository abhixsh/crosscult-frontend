import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate
import image_1 from '../../../../assets/Login_Page/HalfCurve.png';
import image_2 from '../../../../assets/Login_Page/HalfCurve2.png';

function UserRegister() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        country: '',
        email: '',
        password: '',
        profile_picture: '',
        bio: '',
        role: 'visitor',
        fav_Country: '',
        preferences: [],
    });
    const [message, setMessage] = useState('');

    const navigate = useNavigate(); // Initializing useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/users/register', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setMessage('Registration successful!');
            console.log('User Registered:', response.data);
            // Navigate to the login page after successful registration
            navigate('/login');
        } catch (error) {
            setMessage(`Error: ${error.response?.data?.message || 'Something went wrong.'}`);
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

                {/* Register Form */}
                <div className="relative z-10 w-full max-w-md p-10 space-y-8 bg-white shadow-2xl rounded-2xl mx-4">
                    <h2 className="text-center text-2xl font-bold text-gray-900">User Registration</h2>
                    {message && <div className="text-center text-red-500">{message}</div>}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Form Fields */}
                        <div>
                            <label htmlFor="name" className="block text-md font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:border-[#ff6a00]"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="username" className="block text-md font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Choose a username"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:border-[#ff6a00]"
                                required
                            />
                        </div>

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
                            <label htmlFor="country" className="block text-md font-medium text-gray-700">
                                Country
                            </label>
                            <input
                                id="country"
                                name="country"
                                type="text"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="Enter your country"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:border-[#ff6a00]"
                            />
                        </div>

                        <div>
                            <label htmlFor="profile_picture" className="block text-md font-medium text-gray-700">
                                Profile Picture URL
                            </label>
                            <input
                                id="profile_picture"
                                name="profile_picture"
                                type="text"
                                value={formData.profile_picture}
                                onChange={handleChange}
                                placeholder="Enter profile picture URL"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:border-[#ff6a00]"
                            />
                        </div>

                        <div>
                            <label htmlFor="bio" className="block text-md font-medium text-gray-700">
                                Short Bio
                            </label>
                            <textarea
                                id="bio"
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                placeholder="Tell us about yourself"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:border-[#ff6a00]"
                            />
                        </div>

                        <div>
                            <label htmlFor="fav_Country" className="block text-md font-medium text-gray-700">
                                Favorite Country
                            </label>
                            <input
                                id="fav_Country"
                                name="fav_Country"
                                type="text"
                                value={formData.fav_Country}
                                onChange={handleChange}
                                placeholder="Enter your favorite country"
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:border-[#ff6a00]"
                            />
                        </div>

                        <div>
                            <label htmlFor="preferences" className="block text-md font-medium text-gray-700">
                                Preferences
                            </label>
                            <select
                                id="preferences"
                                name="preferences"
                                value={formData.preferences}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        preferences: [...e.target.selectedOptions].map((o) => o.value),
                                    })
                                }
                                multiple
                                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:border-[#ff6a00]"
                            >
                                <option value="history">History</option>
                                <option value="food">Food</option>
                            </select>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-[#ff6a00] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#ff6a00]/90 focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:ring-offset-2 transition duration-300"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <div className="text-center">
                        <p className="text-md text-gray-600">
                            Already a Member?{' '}
                            <a
                                href="/login"
                                className="font-semibold text-[#ff6a00] hover:text-[#ff6a00]/80 transition duration-300"
                            >
                                Login to Your Account
                            </a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default UserRegister;
