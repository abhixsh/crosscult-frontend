import React from 'react';

function Home() {
    return (
        <div className="w-full h-auto bg-white">
            {/* Add padding for the header */}
            <div className="pt-20"> {/* Adjust padding as needed */}
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
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Countries Section */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-2xl font-semibold text-center mb-8">Countries</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[
                        { name: "Sri Lanka", img: "https://via.placeholder.com/218x218" },
                        { name: "Japan", img: "https://via.placeholder.com/218x218" },
                        { name: "Italy", img: "https://via.placeholder.com/218x218" },
                        { name: "China", img: "https://via.placeholder.com/218x218" },
                        { name: "India", img: "https://via.placeholder.com/218x218" },
                        { name: "South Africa", img: "https://via.placeholder.com/218x218" },
                        { name: "United Kingdom", img: "https://via.placeholder.com/218x218" },
                        { name: "South Korea", img: "https://via.placeholder.com/218x218" },
                        { name: "Saudi Arabia", img: "https://via.placeholder.com/218x218" },
                    ].map((country, index) => (
                        <div key={index} className="text-center">
                            <img
                                className="w-32 h-32 mx-auto rounded-full border border-gray-300 object-cover"
                                src={country.img}
                                alt={country.name}
                            />
                            <p className="mt-4 text-lg font-medium">{country.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
