import React from 'react';

const Home = () => {
    return (
        <div className="w-[1440px] h-[2090px] relative bg-white">
            {/* Image */}
            <img 
                className="w-[489px] h-[807px] absolute left-[857px] top-[269px] rounded-[26px]" 
                src="https://via.placeholder.com/489x807" 
                alt="Placeholder" 
            />
            
            {/* Title */}
            <div 
                className="w-[401px] absolute left-[-42px] top-[269px] text-center text-black text-5xl font-extrabold leading-[72px] font-['Inter']"
            >
                History
            </div>

            {/* Content */}
            <div 
                className="w-[743px] h-[1287px] absolute left-[72px] top-[391px] text-justify text-black text-xl leading-[30px] font-normal font-['Inter']"
            >
                It is a long established fact that a reader will be distracted by the readable content of a page when 
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
                of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                and a search for 'lorem ipsum' will uncover many websites still in their infancy. Various versions 
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
        </div>
    );
};

export default Home;
