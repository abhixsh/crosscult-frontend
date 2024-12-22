import React from "react";
import { motion } from "framer-motion";
import image_1 from "../../../assets/Login_Page/HalfCurve.png";
import image_2 from "../../../assets/Login_Page/HalfCurve2.png";

function Login() {
  return (
    <div className="relative flex items-center justify-center  h-screen overflow-hidden">
      {/* Decorative Half Moons */}
      <motion.img
        src={image_1}
        alt="Top Right Half Moon"
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 right-0 w-1/3 max-w-[500px] min-w-[300px] transform -translate-y-1/4"
      />
      <motion.img
        src={image_2}
        alt="Bottom Left Half Moon"
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-1/3 max-w-[500px] min-w-[300px] transform translate-y-1/4"
      />

      {/* Login Form */}
      <motion.div
        className="relative z-10 w-full max-w-md p-10 space-y-8 bg-white shadow-2xl rounded-2xl mx-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-center text-2xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Login To Your Account
        </motion.h2>
        <form className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label
              htmlFor="email"
              className="block text-md font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:border-[#ff6a00]"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label
              htmlFor="password"
              className="block text-md font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:border-[#ff6a00]"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 px-4 bg-[#ff6a00] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#ff6a00]/90 focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:ring-offset-2 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Login
          </motion.button>
        </form>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-md text-gray-600">
            Not a Member?{" "}
            <a
              href="/signup"
              className="font-semibold text-[#ff6a00] hover:text-[#ff6a00]/80 transition duration-300"
            >
              Create an Account
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;
