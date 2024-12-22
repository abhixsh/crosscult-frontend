import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Globe2 } from "lucide-react";
import axios from "axios";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/events/");
        const data = Array.isArray(response.data) ? response.data : [];
        setEvents(data);
        setFilteredEvents(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch events. Please try again later.");
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const filtered = events.filter((event) => {
      const query = searchQuery.toLowerCase();
      return (
        event.title.toLowerCase().includes(query) ||
        event.location?.toLowerCase().includes(query) ||
        event.country?.toLowerCase().includes(query)
      );
    });
    setFilteredEvents(filtered);
  }, [searchQuery, events]);

  const formatDate = (startDate, endDate) => {
    const start = new Date(startDate).toLocaleDateString();
    const end = new Date(endDate).toLocaleDateString();
    return start === end ? start : `${start} - ${end}`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Globe2 className="w-8 h-8 md:w-10 md:h-10 text-[#FF6A00]" />
        <h1 className="text-4xl md:text-5xl font-bold">Cultural Events</h1>
      </div>

      {/* Main Section with Image and Description */}
      <div className="mb-8">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/api/placeholder/1200/400"
            alt="Cultural Events Showcase"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
            <div className="absolute bottom-0 left-0 p-6 max-w-xl">
              <h2 className="text-white text-2xl font-bold mb-2">
                Experience World Cultures
              </h2>
              <p className="text-gray-200 text-sm">
                Immerse yourself in a diverse array of cultural events from across the globe. 
                Discover traditional festivals, art exhibitions, musical performances, and 
                cultural workshops that bring communities together and celebrate our rich 
                global heritage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-8 relative">
        <div className="relative max-w-2xl mx-auto">
          <Search 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            size={20} 
          />
          <input
            type="text"
            placeholder="Search events by title, location, or country..."
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FF6A00] focus:ring focus:ring-[#FF6A00] focus:ring-opacity-50 transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center text-gray-500">Loading events...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : filteredEvents.length === 0 ? (
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
          {filteredEvents.map((event) => (
            <Link
              key={event._id}
              to={`/event/${event._id}`}
            >
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
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

                <div className="p-3 sm:p-4 lg:p-5 flex-grow flex flex-col">
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2 hover:text-[#FF6A00] transition-all duration-300">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3">
                    {event.short_description}
                  </p>
                  <div className="mt-auto space-y-1.5 sm:space-y-2">
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <span className="truncate">{formatDate(event.start_date, event.end_date)}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <strong>Location:</strong> {event.location || "Not specified"}
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <strong>Country:</strong> {event.country || "Not specified"}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Event;