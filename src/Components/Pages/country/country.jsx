import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [countries, setCountries] = useState([]); // Ensure countries is an array
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]); // Ensure filteredCountries is an array

    // Fetch country data from the backend
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/countries'); // Adjust URL if needed
                if (Array.isArray(response.data)) {
                    setCountries(response.data);
                    setFilteredCountries(response.data);
                } else {
                    console.error('Response data is not an array:', response.data);
                }
            } catch (error) {
                console.error('Error fetching countries:', error.message);
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
        <div className="w-full h-auto bg-white">
            {/* Add padding for the header */}
            <div className="pt-20">
                {/* Main Image Container */}
                <div className="relative w-full">
                    <img
                        className="w-full h-auto object-cover rounded-2xl"
                        src="https://via.placeholder.com/1920x600"
                        alt="Main Banner"
                    />
                    {/* Search Bar Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-11/12 max-w-lg bg-white/75 rounded-lg p-4 shadow-md">
                            <input
                                type="text"
                                placeholder="Search country..."
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Countries Section */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-2xl font-semibold text-center mb-8">Countries</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                            <div key={country._id} className="text-center">
                                <img
                                    className="w-32 h-32 mx-auto rounded-full border border-gray-300 object-cover"
                                    src={country.flag_img || 'https://via.placeholder.com/128'}
                                    alt={country.country_name}
                                />
                                <p className="mt-4 text-lg font-medium">{country.country_name}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-4 text-gray-500">No countries found</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
