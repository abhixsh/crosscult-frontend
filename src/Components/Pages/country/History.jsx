import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const Home = () => {
    const { id } = useParams(); 
    const [historyData, setHistoryData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://localhost:3000/api/country/${id}`);
                setHistoryData(response.data);
            } catch (err) {
                console.error('Error fetching history:', err.message);
                setError('Failed to load history data. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchHistory();
    }, [id]);

    if (isLoading) {
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

    if (error) {
        return (
            <motion.div
                className="text-center text-red-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {error}
            </motion.div>
        );
    }

    if (!historyData) {
        return (
            <motion.div
                className="text-center text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                No data available.
            </motion.div>
        );
    }

    return (
        <motion.div
            className="container mx-auto px-6 md:px-12 lg:px-16 py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="flex flex-col-reverse md:flex-row items-center justify-between space-y-16 md:space-y-0 md:space-x-16 lg:space-x-24 xl:space-x-32"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, scale: 0.95 },
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
                {/* Text Content */}
                <motion.div
                    className="w-full md:w-1/2 lg:w-2/3 space-y-10"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center md:text-left">
                        History of {historyData.country_name}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 text-justify leading-relaxed">
                        {historyData.history_desc}
                    </p>
                </motion.div>

                {/* Image */}
                <motion.div
                    className="w-full max-w-[289px] max-h-[400px] flex justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.img
                        className="w-full max-w-lg rounded-3xl shadow-2xl object-cover aspect-[3/5] transition-transform duration-300 hover:scale-105"
                        src={historyData.history_main_img || 'https://via.placeholder.com/489x807'}
                        alt={`${historyData.country_name} history`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Home;
