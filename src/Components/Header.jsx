import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, LogOut  } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Effect to check for user token and fetch user info
  useEffect(() => {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      // Decode token or fetch user details from backend
      try {
        // Example of decoding JWT (you'd typically use a library like jwt-decode)
        const userInfo = decodeUserToken(token);
        setUser(userInfo);
      } catch (error) {
        console.error('Error decoding token', error);
      }
    }
  }, []);

  // Placeholder function to decode token
  const decodeUserToken = (token) => {
    // This is a simplified example - replace with actual token decoding
    const payload = JSON.parse(atob(token.split('.')[1]));
    return {
      name: payload.name || 'User',
      image: payload.profileImage || null,
      id: payload.userId
    };
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper to get initials or first letter
  const getUserInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'U';
  };

  const renderUserSection = () => {
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      const user = JSON.parse(storedUserData);
      return (
        <div className="relative group">
          <Link to="/user/profile">
            {user.profile_picture ? (
              <img
                src={user.profile_picture}
                alt="User profile"
                className="w-10 h-10 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-medium cursor-pointer hover:ring-2 hover:ring-blue-500 transition">
                {getUserInitials(user.name)}
              </div>
            )}
          </Link>

          <div className="absolute top-full right-0 z-50 hidden group-hover:block">
            <div className="w-48 bg-white shadow-lg rounded-xl border mt-2 overflow-hidden">
              <Link
                to="/user/profile"
                className="flex items-center px-4 py-3 hover:bg-gray-100 transition"
              >
                <User className="mr-3 text-gray-600" size={20} />
                <span>My Profile</span>
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem('userData');
                  localStorage.removeItem('userToken');
                  window.location.href = '/';
                }}
                className="flex items-center w-full px-4 py-3 text-left hover:bg-red-50 text-red-600 hover:text-red-700 transition"
              >
                <LogOut className="mr-3" size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        <Link
          to="/user/login"
          className="text-black/80 text-base font-medium hover:text-black transition"
          onClick={toggleMenu}
        >
          Login
        </Link>
        <Link
          to="/user/signup"
          className="text-black/80 text-base font-medium px-4 py-2 rounded-[10px] border border-black hover:bg-black hover:text-white transition"
          onClick={toggleMenu}
        >
          Signup
        </Link>
      </>
    );
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
            >
              Translator
            </Link>
            <Link
              to="/event"
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

            {/* Conditionally render user profile or login/signup */}
            {renderUserSection()}
          </motion.div>
        </motion.nav>
      </div>
    </div>
  );
};

export default Header;