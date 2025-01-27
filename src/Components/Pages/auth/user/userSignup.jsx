import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import image_1 from "/assets/HalfCurve-CyV8KPdo.png";
import image_2 from "/assets/HalfCurve2-CiEiBTnL.png";

function UserRegister() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        country: "",
        email: "",
        password: "",
        profile_picture: "",
        bio: "",
        fav_Country: "",
        preferences: [],
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                preferences: checked
                    ? [...prev.preferences, value]
                    : prev.preferences.filter((pref) => pref !== value),
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://crosscultauthnew.azurewebsites.net/register",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            toast.success("Registration Successful", {
                duration: 2000,
                position: "top-right",
            });
            setTimeout(() => {
                navigate("/user/login");
            }, 2000);
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "Registration Failed";
            toast.error(errorMessage, {
                duration: 2000,
                position: "top-right",
            });
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

            {/* Registration Form - Responsive Container */}
            <motion.div
                className="relative z-10 w-full max-w-lg p-6 md:p-10 space-y-6 bg-white shadow-2xl rounded-2xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h2
                    className="text-center text-xl md:text-2xl font-bold text-gray-900"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    User Registration
                </motion.h2>

                <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                    {[
                        { label: "Full Name", name: "name", type: "text" },
                        { label: "Username", name: "username", type: "text" },
                        { label: "Country", name: "country", type: "text" },
                        { label: "Email Address", name: "email", type: "email" },
                        { label: "Password", name: "password", type: "password" },
                        { label: "Profile Picture (URL)", name: "profile_picture", type: "url" },
                        { label: "Biography", name: "bio", type: "text" },
                        { label: "Favorite Country", name: "fav_Country", type: "text" },
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
                                value={formData[field.name]}
                                onChange={handleChange}
                                placeholder={`Enter your ${field.label.toLowerCase()}`}
                                className="mt-1 md:mt-2 w-full px-3 py-2 md:px-4 md:py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm md:text-base"
                                required={field.name !== "profile_picture" && field.name !== "bio"}
                            />
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                    >
                        <label className="block text-sm md:text-md font-medium text-gray-700">Preferences</label>
                        <div className="flex flex-wrap items-center space-x-2 md:space-x-4 mt-1 md:mt-2">
                            {["history", "food"].map((preference) => (
                                <label key={preference} className="flex items-center space-x-1 md:space-x-2 mb-1">
                                    <input
                                        type="checkbox"
                                        name="preferences"
                                        value={preference}
                                        checked={formData.preferences.includes(preference)}
                                        onChange={handleChange}
                                        className="h-3 w-3 md:h-4 md:w-4 text-orange-500 border-gray-300 focus:ring-orange-400"
                                    />
                                    <span className="text-xs md:text-sm text-gray-700 capitalize">{preference}</span>
                                </label>
                            ))}
                        </div>
                    </motion.div>

                    <motion.button
                        type="submit"
                        className="w-full py-2 md:py-3 px-3 md:px-4 bg-orange-500 text-white text-base md:text-lg font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        Register
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}

export default UserRegister;