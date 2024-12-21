import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/events/${id}`);
        setEvent(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch event details. Please try again later.");
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          <motion.div 
            className="h-12 w-3/4 mx-auto bg-gray-300 animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="flex gap-8 p-6">
            <motion.div 
              className="h-64 w-full sm:w-96 bg-gray-300 animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="space-y-4 flex-1">
              <motion.div 
                className="h-4 w-full bg-gray-300 animate-pulse"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div 
                className="h-4 w-5/6 bg-gray-300 animate-pulse"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div 
                className="h-4 w-4/6 bg-gray-300 animate-pulse"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-200 text-red-700 p-4 rounded-md">
          <h3 className="font-semibold">Error</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDurationInDays = () => {
    const start = new Date(event.start_date);
    const end = new Date(event.end_date);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <motion.div 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-8 flex justify-between items-center">
        <div>
          <div className="bg-gray-300 text-gray-700 inline-block px-2 py-1 rounded-md mb-2">
            {event.event_type}
          </div>
          <motion.h1 
            className="text-4xl font-bold text-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {event.title}
          </motion.h1>
        </div>
      </div>

      <motion.div 
        className="bg-white shadow-md rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col sm:flex-row gap-8 p-6">
          <motion.div 
            className="relative sm:w-96"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={event.img_link || "/api/placeholder/400/320"}
              alt={event.title}
              className="w-full rounded-lg shadow-lg object-cover h-64"
            />
            <div className="absolute top-0 right-0 m-4">
              <div className="bg-gray-300 text-gray-700 text-sm px-2 py-1 rounded-md">
                {getDurationInDays()} day{getDurationInDays() > 1 ? 's' : ''}
              </div>
            </div>
          </motion.div>

          <div className="flex-1 space-y-6">
            <div className="prose max-w-none">
              <motion.p 
                className="text-lg text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {event.description}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div 
                className="bg-white p-4 rounded-md shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <div className="text-sm font-medium flex items-center gap-2 text-gray-700">
                  <Calendar className="h-4 w-4" />
                  Event Dates
                </div>
                <p className="text-sm">{formatDate(event.start_date)} - {formatDate(event.end_date)}</p>
              </motion.div>

              <motion.div 
                className="bg-white p-4 rounded-md shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <div className="text-sm font-medium flex items-center gap-2 text-gray-700">
                  <MapPin className="h-4 w-4" />
                  Location
                </div>
                <p className="text-sm">{event.location || "Not specified"}</p>
                <p className="text-sm text-gray-500">{event.country || "Not specified"}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventDetail;
