import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Clock, Tag } from 'lucide-react';
import img1 from '../../../assets/Story/story1.jpg';
import { motion } from 'framer-motion';

const Stories = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Scroll to top when page is loaded
    window.scrollTo(0, 0);

    const fetchStory = async () => {
      try {
        const response = await fetch(`http://localhost:5001/stories/${id}`);
        if (!response.ok) throw new Error('Failed to fetch story');
        const data = await response.json();
        setStory(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#FF6A00] border-t-transparent" />
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Error: {error}
      </div>
    );

  return (
    <motion.div
      className="bg-orange-50/30 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <motion.div
        className="relative bg-white py-16 px-4"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 25 }}
      >
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative mb-6">
                <motion.h1
                  className="text-4xl lg:text-5xl font-bold text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  {story.title}
                </motion.h1>
                <div className="absolute -bottom-2 left-0 h-1 w-24 bg-[#FF6A00] rounded-full" />
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{story.short_content}</p>
            </div>
            <div className="lg:w-1/2">
              <motion.img
                src={story.preview_img || img1}
                alt={story.title}
                className="w-full rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="max-w-6xl mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-md"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 25 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Experience Details</h2>
              <div className="prose max-w-none text-gray-600">
                {story.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 sticky top-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#FF6A00]" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">{story.county}</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Tag className="text-[#FF6A00]" size={20} />
                  <h3 className="text-lg font-semibold text-gray-900">Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {story.tags &&
                    story.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-sm px-3 py-1 bg-orange-50 text-[#FF6A00] rounded-full hover:bg-[#FF6A00] hover:text-white transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="text-[#FF6A00]" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Season</h3>
                  <p className="text-gray-600">
                    {story.season} | {story.month}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-[#FF6A00]" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Posted</h3>
                  <p className="text-gray-600">
                    {new Date(story.posted_date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Stories;
