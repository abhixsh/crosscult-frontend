import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
                const response = await axios.get('http://localhost:3000/api/countries');
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
        const results = countries.filter(country =>
            country.country_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCountries(results);
    }, [searchTerm, countries]);

    return (
        <div className="w-full min-h-screen bg-gray-50">
            {/* Responsive Header Container */}
            <div className="relative w-full h-64 md:h-80 lg:h-96">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="public/img/cover.png"
                    alt="Main Banner"
                />
                {/* Overlay for search */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-11/12 max-w-xl px-4">
                        <input
                            type="text"
                            placeholder="Search countries..."
                            className="w-full p-3 rounded-lg shadow-lg 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 
                                transition duration-300 ease-in-out"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Countries Section */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    Explore Countries
                </h2>

                {isLoading ? (
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 text-lg">
                        {error}
                    </div>
                ) : filteredCountries.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                        {filteredCountries.map((country) => (
                            <div 
                            key={country._id} 
                            className="text-center overflow-hidden 
                                transform transition duration-300 hover:scale-105 hover: flex flex-col items-center justify-center"
                        >
                            <img
                                className="w-40 h-40 object-cover rounded-full"  // Make the image circular and adjust size
                                src={country.flag_img || 'https://via.placeholder.com/300'}
                                alt={country.country_name}
                            />
                            <div className="p-4 mt-4">  {/* Add margin-top to separate the name */}
                                <p className="text-lg font-semibold text-gray-800">
                                    {country.country_name}
                                </p>
                            </div>
                        </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 text-xl">
                        No countries found matching your search
                    </p>
                )}
            </div>
        </div>
    );
}

export default Home;