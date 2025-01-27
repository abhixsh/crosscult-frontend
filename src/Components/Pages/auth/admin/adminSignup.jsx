import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminRegister() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [isOTPVisible, setIsOTPVisible] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            console.log('Sending registration data:', formData);
            const response = await axios.post('http://localhost:3001/admins/register', formData);
            console.log('Register Response:', response.data);
            setMessage(response.data.message);
            setIsOTPVisible(true);
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage(`Error: ${error.response?.data?.message || 'Something went wrong.'}`);
        }
    };

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        try {
            console.log('Verifying OTP with data:', { email: formData.email, otp });
            const response = await axios.post('https://crosscultauthnew.azurewebsites.net/admins/verify-otp', { email: formData.email, otp });
            console.log('Response from verify OTP:', response.data);
            setMessage(response.data.message);
            navigate('/admin/login');
        } catch (error) {
            console.error('Error during OTP verification:', error);
            setMessage(`Error: ${error.response?.data?.message || 'OTP verification failed.'}`);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow relative flex items-center justify-center w-screen py-12 px-4">
                <div className="relative z-10 w-full max-w-md p-10 space-y-8 bg-white shadow-2xl rounded-2xl mx-4">
                    <h2 className="text-center text-2xl font-bold text-gray-900">Admin Register</h2>
                    {message && (
                        <div className="text-center text-red-500 mt-4 p-4 border border-red-500 rounded-lg">
                            {message}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={isOTPVisible ? handleVerifyOTP : handleRegister}>
                        {!isOTPVisible ? (
                            <>
                                <div>
                                    <label htmlFor="name" className="block text-md font-medium text-gray-700">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-md font-medium text-gray-700">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-md font-medium text-gray-700">Password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
                                        required
                                    />
                                </div>
                            </>
                        ) : (
                            <div>
                                <label htmlFor="otp" className="block text-md font-medium text-gray-700">OTP</label>
                                <input
                                    id="otp"
                                    name="otp"
                                    type="text"
                                    value={otp}
                                    onChange={handleOtpChange}
                                    placeholder="Enter OTP"
                                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
                                    required
                                />
                            </div>
                        )}
                        
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-[#ff6a00] text-white rounded-xl text-xl font-semibold transition-all hover:shadow-md"
                        >
                            {isOTPVisible ? 'Verify OTP' : 'Register'}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default AdminRegister;
