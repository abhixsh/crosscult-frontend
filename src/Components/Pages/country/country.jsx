import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Search, X, Globe2 } from 'lucide-react';

function Home() {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch country data from the backend
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get('https://crosscultcountynew.azurewebsites.net/api/countries');
                if (Array.isArray(response.data)) {
                    setCountries(response.data);
                    setFilteredCountries(response.data);
                } else {
                    throw new Error('Response data is not an array');
                }
            } catch (error) {
                console.error('Error fetching countries:', error.message);
                setError('Failed to load countries. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchCountries();
    }, []);

    // Handle search functionality
    useEffect(() => {
        const results = countries.filter((country) =>
            country.country_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCountries(results);
    }, [searchTerm, countries]);

    return (
        <motion.div
            className="w-full min-h-screen bg-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Responsive Header Container */}
            <motion.div
                className="relative w-full h-64 md:h-80 lg:h-96"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="public/img/cover.png"
                    alt="Main Banner"
                />
                {/* Overlay for search */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <motion.div
                        className="w-11/12 max-w-xl px-4"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <input
                            type="text"
                            placeholder="Search countries..."
                            className="w-full p-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ff6a00] transition duration-300 ease-in-out"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </motion.div>
                </div>
            </motion.div>

            {/* Countries Section */}
            <motion.div
                className="container mx-auto px-4 py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >

                <div className="flex items-center justify-center gap-3 mb-8">
                    <Globe2 className="w-8 h-8 md:w-10 md:h-10 text-[#FF6A00]" />
                    <h1 className="text-4xl md:text-5xl font-bold">Explore Countries</h1>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#ff6a00]"></div>
                    </div>
                ) : error ? (
                    <motion.div
                        className="text-center text-red-500 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {error}
                    </motion.div>
                ) : filteredCountries.length > 0 ? (
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-center"
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
                        {filteredCountries.map((country) => (
                            <motion.div
                                key={country._id}
                                className="text-center overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link to={`/country/${country._id}`} className="block">
                                    <img
                                        className="w-40 h-40 object-cover rounded-full"
                                        src={country.flag_img || 'https://via.placeholder.com/300'}
                                        alt={country.country_name}
                                    />
                                    <div className="p-4 mt-4">
                                        <p className="text-lg font-semibold text-gray-800">
                                            {country.country_name}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.p
                        className="text-center text-gray-500 text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        No countries found matching your search
                    </motion.p>
                )}
            </motion.div>
        </motion.div>
    );
}

export default Home;
