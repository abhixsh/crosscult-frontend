import React, { useState, useEffect } from "react";
import { Globe, BookOpen, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";

// Testimonials data
const testimonials = [
  {
    text: `"CrossCult has been an exciting project to bring to life. The website is designed to be a hub for cultural discovery and sharing stories, which I believe will create lasting connections between travelers and cultures."`,
    name: "S. M. Panditharathna",
    title: "Backend Developer",
    image: "img/Nimal.png",
  },
  {
    text: `"It’s exciting to see how CrossCult provides a personalized experience for users to explore culture and plan journeys. My aim was to make cultural exploration feel accessible and inspiring."`,
    name: "B.C. Palliyaguru",
    title: "Frontend and AI Developer",
    image: "img/Ruwan.png",
  },
  {
    text: `"I’m proud to be part of a project that connects people to the rich traditions of the world. CrossCult’s smooth functionality ensures users enjoy a reliable and engaging platform every time."`,
    name: "A.A. Haththakage",
    title: "DevOps Engineer",
    image: "img/Ishani.png",
  },
  {
    text: `"CrossCult offers a seamless way to explore cultures through an elegant, user-friendly design. It’s exciting to know this platform will inspire people to immerse themselves in unique cultural experiences."`,
    name: "J. A. I. M. Jayasinghe",
    title: "Frontend Developer",
    image: "img/Ishani.png",
  },
  {
    text: `"Designing CrossCult has been an enjoyable journey. My focus was to create an experience that not only feels welcoming but also makes exploring the world’s cultures intuitive and exciting."`,
    name: "P.G. Vimukthi",
    title: "UX/UI Designer",
    image: "img/Ishani.png",
  }
];

// Testimonials carousel component
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <motion.section
      className="bg-white py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-screen-xl px-4 mx-auto text-center">
        <figure className="max-w-screen-md mx-auto transition-all duration-500 ease-in-out">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Developers Thoughts
          </motion.h2>
          </div>
          <blockquote>
            <p className="text-2xl font-medium text-gray-900">
              {currentTestimonial.text}
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <motion.img
              className="w-12 h-12 rounded-full"
              src={currentTestimonial.image}
              alt={`${currentTestimonial.name} profile`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <div className="flex items-center divide-x-2 divide-gray-500">
              <div className="pr-3 font-medium text-gray-900">
                {currentTestimonial.name}
              </div>
              <div className="pl-3 text-sm font-light text-gray-500">
                {currentTestimonial.title}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </motion.section>
  );
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-rose-50">
      {/* Hero Section with Diagonal Design */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-100 transform -skew-y-6 origin-top-left z-0"></div>
        <motion.div
          className="relative z-10 px-4 py-12 md:py-24 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Discover Our Cultural Journey
          </h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Immerse yourself in a world where traditions meet modernity, stories transcend borders, 
            and cultures unite to create something extraordinary.
          </motion.p>
        </motion.div>
      </div>

      {/* Journey Section with Circular Design */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[
            {
              icon: <Globe className="w-8 h-8 md:w-10 md:h-10 text-rose-600 mb-4" />,
              title: "Global Perspective",
              description: "Bringing viewpoints and traditions from every corner of the world.",
              bgColor: "bg-rose-100",
            },
            {
              icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-orange-600 mb-4" />,
              title: "Cultural Education",
              description: "Sharing knowledge and insights about traditions, customs, and heritage.",
              bgColor: "bg-orange-100",
            },
            {
              icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-rose-600 mb-4" />,
              title: "Community Building",
              description: "Creating spaces for cultural exchange and meaningful connections.",
              bgColor: "bg-rose-100",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`absolute inset-0 ${item.bgColor} rounded-full transform -translate-x-4 translate-y-4`}></div>
              <div className="relative bg-white rounded-lg p-6 md:p-8 shadow-lg">
                {item.icon}
                <h3 className="text-xl md:text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Cultural Impact Section */}
      <div className="bg-white py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Cultural Impact
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-rose-500"></span>
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              hidden: { opacity: 0 },
            }}
          >
            {[
              { number: "120+", label: "Cultural Events" },
              { number: "45+", label: "Countries Represented" },
              { number: "15k+", label: "Community Members" },
              { number: "250+", label: "Stories Shared" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 10 },
                }}
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-orange-100 rounded-full transform rotate-12"></div>
                  <p className="relative text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </p>
                </div>
                <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mission Statement with Pattern */}
      <div className="relative py-8 md:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-rose-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                delay: Math.random(),
              }}
            >
              <MapPin className="w-4 h-4 md:w-6 md:h-6" />
            </motion.div>
          ))}
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We are dedicated to preserving and celebrating cultural heritage while fostering 
            understanding between communities. Through storytelling, art, and shared experiences, 
            we create bridges that connect people across cultural boundaries.
          </motion.p>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default AboutUs;
