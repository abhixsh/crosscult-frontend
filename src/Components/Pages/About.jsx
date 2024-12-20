import { Globe, BookOpen, Users, MapPin } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-rose-50">
      {/* Hero Section with Diagonal Design */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-100 transform -skew-y-6 origin-top-left z-0"></div>
        <div className="relative z-10 px-4 py-24 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Discover Our Cultural Journey
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in a world where traditions meet modernity, stories transcend borders, 
            and cultures unite to create something extraordinary.
          </p>
        </div>
      </div>

      {/* Journey Section with Circular Design */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="relative">
            <div className="absolute inset-0 bg-rose-100 rounded-full transform -translate-x-4 translate-y-4"></div>
            <div className="relative bg-white rounded-lg p-8 shadow-lg">
              <Globe className="w-10 h-10 text-rose-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Global Perspective</h3>
              <p className="text-gray-600">
                Bringing viewpoints and traditions from every corner of the world.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-orange-100 rounded-full transform -translate-x-4 translate-y-4"></div>
            <div className="relative bg-white rounded-lg p-8 shadow-lg">
              <BookOpen className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Cultural Education</h3>
              <p className="text-gray-600">
                Sharing knowledge and insights about traditions, customs, and heritage.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-rose-100 rounded-full transform -translate-x-4 translate-y-4"></div>
            <div className="relative bg-white rounded-lg p-8 shadow-lg">
              <Users className="w-10 h-10 text-rose-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Community Building</h3>
              <p className="text-gray-600">
                Creating spaces for cultural exchange and meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Impact Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            Our Cultural Impact
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-rose-500"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '120+', label: 'Cultural Events' },
              { number: '45+', label: 'Countries Represented' },
              { number: '15k+', label: 'Community Members' },
              { number: '250+', label: 'Stories Shared' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-orange-100 rounded-full transform rotate-12"></div>
                  <p className="relative text-4xl font-bold text-gray-900 mb-2">{stat.number}</p>
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Statement with Pattern */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <MapPin 
              key={i}
              className="absolute text-rose-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            We are dedicated to preserving and celebrating cultural heritage while fostering 
            understanding between communities. Through storytelling, art, and shared experiences, 
            we create bridges that connect people across cultural boundaries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
