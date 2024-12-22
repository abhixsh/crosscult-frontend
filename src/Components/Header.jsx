import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to ensure menu starts as closed on page load in mobile view
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto px-4 relative">
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="w-[150px] md:w-[198px]">
          <motion.img
            src="public/img/logo.png"
            alt="Logo"
            className="max-h-[93px] w-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Navigation Links */}
        <motion.nav
          className={`
            fixed inset-0 bg-white z-50 flex flex-col items-center justify-center
            md:static md:flex md:flex-row md:bg-transparent md:z-auto
            ${isMenuOpen ? 'block' : 'hidden'}
          `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 md:hidden"
          >
            <X size={24} />
          </button>

          <motion.div
            className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              to="/MainTranslator"
              className="text-black/80 text-base font-medium hover:text-black transition"
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Translator
            </Link>
            <Link
              to="/event"
              className="text-black/80 text-base font-medium hover:text-black transition"
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cultural Events
            </Link>
            <Link
              to="/mainStory"
              className="text-black/80 text-base font-medium hover:text-black transition"
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Story Telling
            </Link>
            <Link
              to="/country"
              className="text-black/80 text-base font-medium hover:text-black transition"
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cultural Details
            </Link>
            <Link
              to="/about"
              className="text-black/80 text-base font-medium hover:text-black transition"
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Us
            </Link>
            <Link
              to="/login"
              className="text-black/80 text-base font-medium hover:text-black transition"
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-black/80 text-base font-medium px-4 py-2 rounded-[10px] border border-black hover:bg-black hover:text-white transition"
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Signup
            </Link>
          </motion.div>
        </motion.nav>
      </div>
    </div>
  );
};

export default Header;
