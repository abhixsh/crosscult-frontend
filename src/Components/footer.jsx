import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 mt-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 */}
                <div>
                    <h2 className="text-xl font-bold mb-4">CrossCult</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Translator</a></li>
                        <li><a href="#" className="hover:underline">Events</a></li>
                        <li><a href="#" className="hover:underline">Details</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Consumer Care</a></li>
                        <li><a href="#" className="hover:underline">Alumni</a></li>
                        <li><a href="#" className="hover:underline">CrossCult Canada</a></li>
                        <li><a href="#" className="hover:underline">CrossCult Mexico</a></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Get the freshest CrossCult news</h3>
                    <form className="flex flex-col space-y-4">
                        <input
                            type="email"
                            placeholder="Your email here"
                            className="px-4 py-2 rounded-md text-gray-900"
                        />
                        <div className="flex items-start space-x-2">
                            <input
                                type="checkbox"
                                id="agree"
                                className="mt-1"
                            />
                            <label htmlFor="agree" className="text-sm">
                                By checking the box, you agree that you are at least 16 years of age.
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="bg-white text-green-900 font-bold px-6 py-2 rounded-md hover:bg-gray-100"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <hr className="border-gray-700 my-6" />

            {/* Social Media Links */}
            <div className="container mx-auto px-4 flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
                <div className="flex flex-wrap justify-center md:justify-start space-x-4">
                    <a href="#" className="text-white hover:text-gray-400 text-xl"><FaFacebookF /></a>
                    <a href="#" className="text-white hover:text-gray-400 text-xl"><FaInstagram /></a>
                    <a href="#" className="text-white hover:text-gray-400 text-xl"><FaTwitter /></a>
                    <a href="#" className="text-white hover:text-gray-400 text-xl"><FaPinterest /></a>
                    <a href="#" className="text-white hover:text-gray-400 text-xl"><FaYoutube /></a>
                </div>
                <div className="text-sm text-gray-400 text-center md:text-left">
                    <a href="#" className="hover:underline">Website Terms</a> |
                    <a href="#" className="hover:underline"> Privacy Policy</a> |
                    <a href="#" className="hover:underline"> Accessibility Statement</a> |
                    <a href="#" className="hover:underline"> CA Transparency</a>
                </div>
                <p className="text-sm text-gray-400 text-center md:text-left">
                    ©2024 CrossCult. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;