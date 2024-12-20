import React from 'react';
import { motion } from 'framer-motion';

const Event = () => {
  const events = [
    {
      event_id: 1,
      title: "Thai New Year Festival",
      description: "Traditional Thai New Year celebration with cultural performances, food, and ceremonies.",
      start_date: "2024-12-20",
      end_date: "2024-12-22",
      location: "Bangkok Cultural Center",
      Country: "Thailand",
      event_type: "Festival",
      img_link: "/api/placeholder/400/300",
      short_description: "Experience the joy of Thai New Year with traditional ceremonies and performances."
    },
    {
      event_id: 2,
      title: "Indian Classical Dance",
      description: "A showcase of various Indian classical dance forms including Bharatanatyam and Kathak.",
      start_date: "2024-12-25",
      end_date: "2024-12-25",
      location: "Delhi Arts Theatre",
      Country: "India",
      event_type: "Performance",
      img_link: "/api/placeholder/400/300",
      short_description: "Immerse yourself in the beauty of Indian classical dance traditions."
    },
    {
      event_id: 3,
      title: "Chinese Lantern Festival",
      description: "Annual lantern festival featuring traditional Chinese crafts and performances.",
      start_date: "2024-12-30",
      end_date: "2025-01-02",
      location: "Shanghai Central Park",
      Country: "China",
      event_type: "Festival",
      img_link: "/api/placeholder/400/300",
      short_description: "Witness the magical glow of thousands of traditional Chinese lanterns."
    }
  ];

  const formatDate = (startDate, endDate) => {
    const start = new Date(startDate).toLocaleDateString();
    const end = new Date(endDate).toLocaleDateString();
    return start === end ? start : `${start} - ${end}`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.h1
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Cultural Events
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {events.map((event) => (
          <motion.div
            key={event.event_id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Image Section */}
            <div className="relative w-full pt-[56.25%]">
              <img
                src={event.img_link}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-2 right-2 bg-[#FF6A00] text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                {event.event_type}
              </span>
            </div>

            {/* Content Section */}
            <div className="p-3 sm:p-4 lg:p-5 flex-grow flex flex-col">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2 hover:text-[#FF6A00] transition-all duration-300">
                {event.title}
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3">
                {event.short_description}
              </p>

              {/* Event Details */}
              <div className="mt-auto space-y-1.5 sm:space-y-2">
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="truncate">{formatDate(event.start_date, event.end_date)}</span>
                </div>

                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="truncate">{event.location}</span>
                </div>

                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="truncate">{event.Country}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Event;
