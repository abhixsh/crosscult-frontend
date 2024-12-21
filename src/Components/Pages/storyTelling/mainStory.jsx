import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MainStory = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all stories from the backend
    const fetchStories = async () => {
      try {
        const response = await fetch('http://localhost:5001/stories'); // Your backend URL for stories
        if (!response.ok) {
          throw new Error('Failed to fetch stories');
        }
        const data = await response.json();
        setStories(data); // Set the stories data
      } catch (err) {
        setError(err.message); // Catch any errors
      } finally {
        setLoading(false);
      }
    };

    fetchStories(); // Call the function to fetch the data
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <section className="bg-gray-100 py-8 sm:py-12 rounded-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-2/3">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Stories
                </h2>
                <p className="text-base sm:text-lg text-gray-700">
                  Discover the exciting stories that celebrate various cultures.
                </p>
              </div>
              <div className="w-full lg:w-1/3">
                <img
                  src="/api/placeholder/400/400"
                  alt="Story illustration"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section with Search */}
        <div className="relative w-full h-48 sm:h-64 my-8">
          <img
            src="/api/placeholder/1200/400"
            alt="Story Hero"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="bg-white rounded-full shadow-lg flex items-center w-full max-w-md overflow-hidden">
              <input
                type="text"
                className="w-full px-4 sm:px-6 py-2 sm:py-3 outline-none text-sm sm:text-base"
                placeholder="Search stories..."
              />
              <button className="px-4 sm:px-6 py-2 sm:py-3 text-gray-600 hover:bg-gray-100 text-sm sm:text-base whitespace-nowrap">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8 lg:px-12 mb-12">
          {stories.map((story) => (
            <div
              key={story._id} // Assuming MongoDB's `_id` for each story
              className="flex flex-col items-center bg-gray-200 rounded-lg p-4 transition-transform hover:scale-105"
            >
              <div className="w-full aspect-square mb-4">
                <Link to={`/story/${story._id}`} className="block w-full h-full">
                  <img
                    src={story.image || '/api/placeholder/400/400'} // Fallback image if no image exists
                    alt={`Story: ${story.title}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </Link>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">{story.title}</h3>
                <p className="text-sm text-gray-600">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainStory;
