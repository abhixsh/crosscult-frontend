import { Globe, Book, Heart, Palette, Music, Theater, Coffee } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-amber-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Celebrating Global Cultures & Heritage
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are passionate about bringing diverse cultures together, fostering understanding, 
          and celebrating the rich tapestry of global traditions, arts, and stories.
        </p>
      </div>

      {/* Cultural Impact Stats */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <p className="text-4xl font-bold text-red-600">100+</p>
          <p className="mt-2 text-gray-600">Cultural Events Hosted</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <p className="text-4xl font-bold text-red-600">50+</p>
          <p className="mt-2 text-gray-600">Countries Represented</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <p className="text-4xl font-bold text-red-600">10k+</p>
          <p className="mt-2 text-gray-600">Community Members</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <p className="text-4xl font-bold text-red-600">200+</p>
          <p className="mt-2 text-gray-600">Cultural Articles</p>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Exploring Culture Together
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
              <Palette className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Visual Arts</h3>
            <p className="mt-2 text-gray-600">Traditional and contemporary artistic expressions</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
              <Music className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Music & Dance</h3>
            <p className="mt-2 text-gray-600">Rhythms and movements across cultures</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
              <Coffee className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Culinary Arts</h3>
            <p className="mt-2 text-gray-600">Traditional recipes and food culture</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
              <Theater className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Festivals</h3>
            <p className="mt-2 text-gray-600">Celebrations and cultural events</p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
            <Globe className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Cultural Understanding</h3>
          <p className="text-gray-600">
            We promote cross-cultural dialogue and understanding through educational content,
            cultural exchange programs, and community events.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
            <Book className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Heritage Preservation</h3>
          <p className="text-gray-600">
            We work to document and preserve cultural heritage, traditions, and stories
            for future generations to learn from and appreciate.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
            <Heart className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Building</h3>
          <p className="text-gray-600">
            We create spaces for people to connect, share their cultural experiences,
            and build lasting relationships across cultural boundaries.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            To create a vibrant platform where cultures converge, stories are shared, and 
            traditions are celebrated. We're dedicated to fostering cultural awareness, 
            appreciation, and understanding in our increasingly connected world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;