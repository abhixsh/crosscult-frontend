import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link
import axios from 'axios';

const CountryAbout = () => {
    const { id } = useParams(); // Get the country ID from the URL
    const [countryData, setCountryData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/country/${id}`);
                setCountryData(response.data);
            } catch (error) {
                console.error("Error fetching country data:", error.message);
                setError("Failed to load country details. Please try again later.");
            }
        };

        fetchCountryData();
    }, [id]);

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    if (!countryData) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-8">
            {/* Main Information */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        {countryData.country_name}
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {countryData.country_desc}
                    </p>
                </div>
                <div className="flex justify-center px-4">
                    <img
                        className="rounded-xl shadow-lg max-w-full h-auto object-cover"
                        src={countryData.country_img || 'https://via.placeholder.com/600'}
                        alt={`${countryData.country_name} Landscape`}
                    />
                </div>
            </div>

            {/* Explore Sections */}
            <div className="mt-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Explore {countryData.country_name}
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* History Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                        <img
                            className="w-full h-64 object-cover"
                            src={countryData.history_small_img || 'https://via.placeholder.com/300'}
                            alt="History"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">
                                History
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Dive into the fascinating historical journey of {countryData.country_name}.
                            </p>
                            <Link
                                to={`/country/${id}/history`}
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Traditions Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                        <img
                            className="w-full h-64 object-cover"
                            src={countryData.traditions_small_img || 'https://via.placeholder.com/300'}
                            alt="Traditions"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">
                                Traditions
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Explore the intricate cultural traditions of {countryData.country_name}.
                            </p>
                            <a
                                href="#"
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Food Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                        <img
                            className="w-full h-64 object-cover"
                            src={countryData.food_small_img || 'https://via.placeholder.com/300'}
                            alt="Cuisine"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">
                                Cuisine
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Discover the culinary delights of {countryData.country_name}.
                            </p>
                            <a
                                href="#"
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryAbout;
