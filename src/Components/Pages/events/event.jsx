import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/events/");
        setEvents(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch events. Please try again later.");
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

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

      {loading ? (
        <div className="text-center text-gray-500">Loading events...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : events.length === 0 ? (
        <div className="text-center text-gray-500">No events found.</div>
      ) : (
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
              key={event._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full pt-[56.25%]">
                <img
                  src={event.img_link || "/placeholder.png"}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-[#FF6A00] text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                  {event.event_type}
                </span>
              </div>

              <div className="p-4 flex-grow flex flex-col">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2 hover:text-[#FF6A00] transition-all duration-300">
                  {event.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {event.short_description}
                </p>

                <div className="mt-auto space-y-2">
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaCalendarAlt className="mr-2 text-[#FF6A00]" />
                    <span>{formatDate(event.start_date, event.end_date)}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaMapMarkerAlt className="mr-2 text-[#FF6A00]" />
                    <span>{event.location || "Not specified"}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaGlobe className="mr-2 text-[#FF6A00]" />
                    <span>{event.country || "Not specified"}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Event;
