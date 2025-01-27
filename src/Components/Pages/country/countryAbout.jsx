import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const CountryAbout = () => {
    const { id } = useParams();
    const [countryData, setCountryData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                const response = await axios.get(`https://crosscultcountynew.azurewebsites.net/api/country/${id}`);
                setCountryData(response.data);
            } catch (error) {
                console.error('Error fetching country data:', error.message);
                setError('Failed to load country details. Please try again later.');
            }
        };

        fetchCountryData();
    }, [id]);

    if (error) {
        return <motion.div className="text-center text-red-500">{error}</motion.div>;
    }

    if (!countryData) {
        return (
            <motion.div
                className="text-center text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Loading...
            </motion.div>
        );
    }

    return (
        <motion.div
            className="container mx-auto px-6 md:px-12 lg:px-16 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            {/* Main Information */}
            <motion.div
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="space-y-6 px-4">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-gray-800"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {countryData.country_name}
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-600 leading-relaxed"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {countryData.country_desc}
                    </motion.p>
                </div>
                <motion.div
                    className="flex justify-center px-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <img
                        className="rounded-xl shadow-lg max-w-full h-auto object-cover"
                        src={countryData.country_img || 'https://via.placeholder.com/600'}
                        alt={`${countryData.country_name} Landscape`}
                    />
                </motion.div>
            </motion.div>

            {/* Explore Sections */}
            <motion.div
                className="mt-16 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Explore {countryData.country_name}
                </h2>
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                delayChildren: 0.3,
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {/* History Card */}
                    <motion.div
                        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            className="w-full h-64 object-cover"
                            src={countryData.history_small_img || 'https://via.placeholder.com/300'}
                            alt="History"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">History</h3>
                            <p className="text-gray-600 mb-4">
                                Dive into the fascinating historical journey of {countryData.country_name}.
                            </p>
                            <Link
                                to={`/country/${id}/history`}
                                className="inline-block bg-[#ff6a00db] text-white px-4 py-2 rounded-md hover:bg-[#ff6a00] transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                    </motion.div>

                    {/* Traditions Card */}
                    <motion.div
                        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            className="w-full h-64 object-cover"
                            src={countryData.traditions_small_img || 'https://via.placeholder.com/300'}
                            alt="Traditions"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">Traditions</h3>
                            <p className="text-gray-600 mb-4">
                                Explore the intricate cultural traditions of {countryData.country_name}.
                            </p>
                            <Link
                                to={`/country/${id}/traditions`}
                                className="inline-block bg-[#ff6a00db] text-white px-4 py-2 rounded-md hover:bg-[#ff6a00] transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                    </motion.div>

                    {/* Food Card */}
                    <motion.div
                        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            className="w-full h-64 object-cover"
                            src={countryData.food_small_img || 'https://via.placeholder.com/300'}
                            alt="Cuisine"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">Cuisine</h3>
                            <p className="text-gray-600 mb-4">
                                Discover the culinary delights of {countryData.country_name}.
                            </p>
                            <Link
                                to={`/country/${id}/food`}
                                className="inline-block bg-[#ff6a00db] text-white px-4 py-2 rounded-md hover:bg-[#ff6a00] transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default CountryAbout;
