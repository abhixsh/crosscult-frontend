import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';

const MainStory = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStories, setFilteredStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('http://localhost:3003/stories');
        if (!response.ok) {
          throw new Error('Failed to fetch stories');
        }
        const data = await response.json();
        setStories(data);
        setFilteredStories(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();

    const filtered = stories.filter(story => {
      const titleMatch = story.title.toLowerCase().includes(lowercasedSearchTerm);
      const seasonMatch = story.season?.toLowerCase().includes(lowercasedSearchTerm);
      const countyMatch = story.county?.toLowerCase().includes(lowercasedSearchTerm);
      const tagsMatch = story.tags.some(tag => tag.toLowerCase().includes(lowercasedSearchTerm));

      return titleMatch || seasonMatch || countyMatch || tagsMatch;
    });

    setFilteredStories(filtered);
  }, [searchTerm, stories]);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section - Always Visible */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-8 sm:py-12 rounded-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-2/3">
                <div className="flex items-center gap-3 mb-8">
                  <Globe2 className="w-8 h-8 md:w-10 md:h-10 text-[#FF6A00]" />
                  <h1 className="text-4xl md:text-5xl font-bold">Cultural Stories</h1>
                </div>
                <p className="text-base sm:text-lg text-gray-700">
                  Discover the exciting stories that celebrate various cultures.
                </p>
              </div>
              <div className="w-full lg:w-1/3">
                <img
                  src="/img/story/MainStory.png"
                  alt="Story illustration"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Search Section - Always Visible */}
        <motion.div
          className="relative w-full h-48 sm:h-64 my-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/img/story/StoryCover.png"
            alt="Story Hero"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="w-full max-w-2xl">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-[#FF6A00]" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-white/95 backdrop-blur-sm text-base rounded-xl border-2 border-transparent focus:border-[#FF6A00] focus:bg-white transition-all outline-none placeholder:text-gray-500"
                  placeholder="Search stories by title, content, or tags..."
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    <X className="h-5 w-5 text-gray-400 hover:text-[#FF6A00] transition-colors" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-12 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {loading ? (
            <div className="col-span-full text-center">Loading stories...</div>
          ) : error ? (
            <div className="col-span-full text-center text-red-500">Error: {error}</div>
          ) : filteredStories.length === 0 ? (
            <div className="col-span-full text-center">No stories found for the given search term.</div>
          ) : (
            filteredStories.map((story) => (
              <motion.div
                key={story._id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <Link to={`/stories/${story._id}`} className="block">
                    <div className="aspect-square overflow-hidden">
                      <motion.img
                        src={story.preview_img || '/api/placeholder/400/400'}
                        alt={`Story: ${story.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        whileHover={{ scale: 1.1 }}
                      />
                    </div>
                  </Link>
                  {story.badge && (
                    <span className="absolute top-3 right-3 text-sm font-medium text-white bg-[#FF6A00] px-3 py-1 rounded-full">
                      {story.badge}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <Link to={`/stories/${story._id}`}>
                    <motion.h3
                      className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#FF6A00] transition-colors"
                      whileHover={{ color: '#FF6A00' }}
                    >
                      {story.title}
                    </motion.h3>
                  </Link>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {story.short_content}
                  </p>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {story.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-[#FF6A00] hover:text-white transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <span className="text-xs text-gray-500">{story.season}</span>
                      <Link
                        to={`/stories/${story._id}`}
                        className="text-sm font-medium text-[#FF6A00] hover:text-orange-700 transition-colors"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MainStory;