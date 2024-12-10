import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube
} from 'react-icons/fa';

const Header = () => {
    const mainMenuItems = [
        "Home", "News", "Sport", "Business", "Innovation",
        "Culture", "Arts", "Travel", "Earth", "Video", "Live",
        "Audio", "Weather"
    ];

    const mobileFooterLinks = [
        "Terms of Use",
        "About the crosscult",
        "Privacy Policy",
        "Cookies"
    ];

    const fullFooterLinks = [
        "Terms of Use", "About the crosscult", "Privacy Policy",
        "Cookies", "Accessibility Help", "Contact the crosscult",
        "Advertise with us", "Do not Share or sell my info", "Contact US"
    ];

    const socialIcons = [
        { Icon: FaFacebook, name: "Facebook" },
        { Icon: FaTwitter, name: "Twitter" },
        { Icon: FaInstagram, name: "Instagram" },
        { Icon: FaLinkedin, name: "LinkedIn" },
        { Icon: FaYoutube, name: "YouTube" }
    ];

    return (
        <header className="bg-[#343434] w-full">
            <div className="container mx-auto px-4 relative">
                {/* Logo */}
                <div className="flex justify-between items-center py-4">
                    <img
                        className="w-[123px] h-[58px] object-contain"
                        src="public/img/whiteLogo.png"
                        alt="Logo"
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:gap-6 lg:gap-9 overflow-x-auto pb-4">
                    {mainMenuItems.map((menu, index) => (
                        <div
                            key={index}
                            className="text-white text-sm font-semibold font-['Inter'] 
              hover:text-gray-300 cursor-pointer whitespace-nowrap"
                        >
                            {menu}
                        </div>
                    ))}
                </nav>

                {/* Social Media Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 py-4">
                    <div className="text-white text-sm font-semibold font-['Inter']">
                        Follow CrossCult On:
                    </div>
                    <div className="flex gap-4">
                        {socialIcons.map(({ Icon, name }, index) => (
                            <a
                                key={index}
                                href="#"
                                aria-label={`Follow us on ${name}`}
                                className="text-white hover:opacity-80 transition-opacity"
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer Links - Mobile Specific */}
                <div className="
          md:hidden flex gap-4 overflow-x-auto pb-4
        ">
                    {mobileFooterLinks.map((item, index) => (
                        <div
                            key={index}
                            className="text-white text-sm font-light font-['Inter'] 
              whitespace-nowrap hover:underline cursor-pointer"
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* Footer Links - Desktop Specific */}
                <div className="
          hidden md:flex md:flex-wrap md:justify-center 
          gap-4 lg:gap-[35px] pb-4
        ">
                    {fullFooterLinks.map((item, index) => (
                        <div
                            key={index}
                            className="text-white text-sm font-light font-['Inter'] 
              whitespace-nowrap hover:underline cursor-pointer"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;