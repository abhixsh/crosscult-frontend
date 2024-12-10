import React from 'react';

const Home = () => {
    return (
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-8">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between 
                            space-y-16 md:space-y-0 md:space-x-16 lg:space-x-24 xl:space-x-32">
                {/* Text Content */}
                <div className="w-full md:w-1/2 lg:w-2/3 space-y-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center md:text-left">
                        History
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 text-justify leading-relaxed">
                        It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                        of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many websites still in their infancy. Various versions
                        have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
                    <img
                        className="w-full max-w-lg rounded-3xl shadow-2xl object-cover aspect-[3/5] 
                                   transition-transform duration-300 hover:scale-105"
                        src="https://via.placeholder.com/489x807"
                        alt="Placeholder"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;