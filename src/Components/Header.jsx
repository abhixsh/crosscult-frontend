import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto px-4 relative">
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="w-[150px] md:w-[198px]">
          <img
            src="public/img/logo.png"
            alt="Logo"
            className="max-h-[93px] w-full object-contain"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`
          fixed inset-0 bg-white z-50 flex flex-col items-center justify-center
          md:static md:flex md:flex-row md:bg-transparent md:z-auto
          ${isMenuOpen ? 'block' : 'hidden'}
        `}>
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 md:hidden"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 items-center">
            <Link
              to="/MainTranslator"
              className="text-black/80 text-base font-medium hover:text-black transition"
              onClick={toggleMenu}
            >
              Translator
            </Link>
            <Link
              to="/cultural-events"
              className="text-black/80 text-base font-medium hover:text-black transition"
              onClick={toggleMenu}
            >
              Cultural Events
            </Link>
            <Link
              to="/mainStory"
              className="text-black/80 text-base font-medium hover:text-black transition"
              onClick={toggleMenu}
            >
              Story Telling
            </Link>
            <Link
              to="/country"
              className="text-black/80 text-base font-medium hover:text-black transition"
              onClick={toggleMenu}
            >
              Cultural Details
            </Link>
            <Link
              to="/about"
              className="text-black/80 text-base font-medium hover:text-black transition"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/login"
              className="text-black/80 text-base font-medium hover:text-black transition"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-black/80 text-base font-medium px-4 py-2 rounded-[10px] border border-black hover:bg-black hover:text-white transition"
              onClick={toggleMenu}
            >
              Signup
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;