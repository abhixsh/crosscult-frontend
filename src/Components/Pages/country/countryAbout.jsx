import React from 'react';

const Home = () => {
    return (
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Title and Description Section */}
                <div className="space-y-6 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Sri Lanka
                    </h1>
                    <div className="space-y-4">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Sri Lanka is a mesmerizing island nation located in the Indian Ocean, known for its rich cultural heritage, stunning landscapes, and warm hospitality. From ancient ruins to pristine beaches, from vibrant traditions to incredible biodiversity, Sri Lanka offers a unique and unforgettable experience for travelers and culture enthusiasts.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            This island paradise blends centuries of history with modern dynamism, creating a destination that captivates visitors with its natural beauty, diverse cultures, and incredible stories waiting to be discovered.
                        </p>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center px-4">
                    <img
                        className="rounded-xl shadow-lg max-w-full h-auto object-cover"
                        src="/api/placeholder/489/807"
                        alt="Sri Lanka Landscape"
                    />
                </div>
            </div>

            {/* Information Cards Section */}
            <div className="mt-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Explore Sri Lanka
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* History Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                        <img
                            className="w-full h-64 object-cover"
                            src="/api/placeholder/359/359"
                            alt="Sri Lankan History"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">
                                History
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Dive into the fascinating historical journey of Sri Lanka, spanning ancient kingdoms, colonial periods, and modern independence.
                            </p>
                            <a 
                                href="#" 
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Traditions Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                        <img
                            className="w-full h-64 object-cover"
                            src="/api/placeholder/359/359"
                            alt="Sri Lankan Traditions"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">
                                Traditions
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Explore the intricate cultural tapestry of Sri Lanka, featuring vibrant festivals, traditional arts, and time-honored customs.
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
                            src="/api/placeholder/359/359"
                            alt="Sri Lankan Cuisine"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">
                                Cuisine
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Discover the mouth-watering world of Sri Lankan cuisine, a delightful blend of spices, tropical ingredients, and unique culinary techniques.
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

export default Home;