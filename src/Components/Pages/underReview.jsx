import { motion } from 'framer-motion';

const UnderConstruction = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="text-center">
                {/* Heading with animation */}
                <motion.h1
                    className="text-4xl font-bold text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    This Page is Under Construction
                </motion.h1>

                {/* Message with animation */}
                <motion.p
                    className="mt-4 text-lg text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                >
                    We're working hard to get this page ready. Stay tuned for updates!
                </motion.p>

                {/* Animated Construction Graphic */}
                <motion.div
                    className="mt-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="public/img/under-construction.png"
                        alt="Under Construction"
                        className="max-w-[200px] mx-auto"
                    />
                </motion.div>

                {/* Progress Bar (Optional) */}
                <motion.div
                    className="mt-8 w-full max-w-[300px] mx-auto"
                    initial={{ width: '0%' }}
                    animate={{ width: '50%' }}
                    transition={{ duration: 2 }}
                >
                    <div className="h-2 bg-[#ff6a00] rounded-full"></div>
                </motion.div>

                {/* Return to Home Button with animation */}
                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                >
                    <a
                        href="/"
                        className="inline-block px-6 py-3 bg-black text-white font-medium text-lg rounded-lg hover:bg-[#ff6a00] transition"
                    >
                        Back to Home
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default UnderConstruction;
