import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Calendar, Tag, Share2 } from 'lucide-react';
import img1 from '../../../assets/Story/story1.jpg';
import { motion } from 'framer-motion';

const Stories = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStoryAndUser = async () => {
    try {
      const storyResponse = await fetch(`http://localhost:3003/stories/${id}`);
      if (!storyResponse.ok) throw new Error('Failed to fetch story');
      const storyData = await storyResponse.json();
      setStory(storyData);

      const userResponse = await fetch(`http://localhost:3001/users/username/${storyData.username}`);
      if (!userResponse.ok) throw new Error('Failed to fetch user');
      const userData = await userResponse.json();
      setUser(userData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchStoryAndUser();
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Story link copied to clipboard!');
  };

  const renderLocation = () => {
    const location = story.country || story.county || user?.country || 'Unknown Location';
    return location;
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <div className="animate-pulse w-16 h-16 bg-[#FF6A00] rounded-full" />
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center text-red-600 bg-orange-50">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Oops! Something went wrong</h2>
        <p>{error}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-orange-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <motion.div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Story Header */}
              <div className="relative">
                <img 
                  src={story.preview_img || img1} 
                  alt={story.title} 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h1 className="text-4xl font-bold text-white">{story.title}</h1>
                </div>
              </div>

              {/* Story Actions */}
              <div className="flex justify-between items-center p-4 bg-gray-50">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={handleShare}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                  >
                    <Share2 size={24} />
                    <span>Share</span>
                  </button>
                </div>
                <div className="text-sm text-gray-500">
                  Posted on {new Date(story.posted_date).toLocaleDateString()}
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6">
                <div className="prose max-w-none text-gray-700">
                  {story.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author Card */}
            {user && (
              <motion.div 
                className="bg-white rounded-2xl shadow-md p-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={user.profile_picture || '/default-avatar.png'} 
                    alt={user.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{user.name}</h3>
                    <p className="text-gray-500">@{user.username}</p>
                  </div>
                </div>
                {user.bio && <p className="text-gray-600 italic mb-4">"{user.bio}"</p>}
              </motion.div>
            )}

            {/* Location and Details Card */}
            <motion.div 
              className="bg-white rounded-2xl shadow-md p-6 space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Location */}
              <div className="flex items-center space-x-3 pb-4 border-b">
                <MapPin className="text-[#FF6A00]" size={24} />
                <div>
                  <span className="font-semibold text-gray-800">Location</span>
                  <p className="text-gray-600">{renderLocation()}</p>
                </div>
              </div>

              {/* Season and Month */}
              <div className="flex items-center space-x-3 pb-4 border-b">
                <Calendar className="text-[#FF6A00]" size={24} />
                <div>
                  <span className="font-semibold text-gray-800">Season</span>
                  <p className="text-gray-600">{story.season} | {story.month}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="pt-2">
                <div className="flex items-center space-x-3 mb-3">
                  <Tag className="text-[#FF6A00]" size={24} />
                  <span className="font-semibold text-gray-800">Story Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {story.tags?.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-orange-50 text-[#FF6A00] rounded-full text-sm hover:bg-[#FF6A00] hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;