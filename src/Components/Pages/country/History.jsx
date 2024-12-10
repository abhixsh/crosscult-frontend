import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const { id } = useParams(); // Get the country ID from the URL
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
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!historyData) {
        return <div>No data available.</div>;
    }

    return (
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-8">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between 
                            space-y-16 md:space-y-0 md:space-x-16 lg:space-x-24 xl:space-x-32">
                {/* Text Content */}
                <div className="w-full md:w-1/2 lg:w-2/3 space-y-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center md:text-left">
                        History of {historyData.country_name}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 text-justify leading-relaxed">
                        {historyData.history_desc}
                    </p>
                </div>

                {/* Image */}
                <div className="w-full max-w-[289px] max-h-[400px] flex justify-center">
                    <img
                        className="w-full max-w-lg rounded-3xl shadow-2xl object-cover aspect-[3/5] 
                                   transition-transform duration-300 hover:scale-105"
                        src={historyData.history_main_img || 'https://via.placeholder.com/489x807'}
                        alt={`${historyData.country_name} history`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
