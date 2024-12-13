// import { Globe, Book, Heart, Palette, Music, Theater, Coffee } from 'lucide-react';

// const AboutUs = () => {
//   return (
//     <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
//       {/* Hero Section */}
//       <div className="max-w-7xl mx-auto text-center">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">
//           Celebrating Global Cultures & Heritage
//         </h1>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           We are passionate about bringing diverse cultures together, fostering understanding, 
//           and celebrating the rich tapestry of global traditions, arts, and stories.
//         </p>
//       </div>

//       {/* Cultural Impact Stats */}
//       <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//         <div className="bg-[#d9d9d9]  p-6 rounded-lg shadow-sm text-center">
//           <p className="text-4xl font-bold text-red-600">100+</p>
//           <p className="mt-2 text-gray-600">Cultural Events Hosted</p>
//         </div>
//         <div className="bg-[#d9d9d9]  p-6 rounded-lg shadow-sm text-center">
//           <p className="text-4xl font-bold text-red-600">50+</p>
//           <p className="mt-2 text-gray-600">Countries Represented</p>
//         </div>
//         <div className="bg-[#d9d9d9]  p-6 rounded-lg shadow-sm text-center">
//           <p className="text-4xl font-bold text-red-600">10k+</p>
//           <p className="mt-2 text-gray-600">Community Members</p>
//         </div>
//         <div className="bg-[#d9d9d9]  p-6 rounded-lg shadow-sm text-center">
//           <p className="text-4xl font-bold text-red-600">200+</p>
//           <p className="mt-2 text-gray-600">Cultural Articles</p>
//         </div>
//       </div>

//       {/* What We Offer Section */}
//       <div className="max-w-7xl mx-auto mt-16">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
//           Exploring Culture Together
//         </h2>
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 bg-[#d9d9d9] rounded-md">
//           <div className="text-center">
//             <div className="mx-auto w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
//               <Palette className="w-6 h-6 text-red-600" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Visual Arts</h3>
//             <p className="mt-2 text-gray-600">Traditional and contemporary artistic expressions</p>
//           </div>
//           <div className="text-center">
//             <div className="mx-auto w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
//               <Music className="w-6 h-6 text-red-600" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Music & Dance</h3>
//             <p className="mt-2 text-gray-600">Rhythms and movements across cultures</p>
//           </div>
//           <div className="text-center">
//             <div className="mx-auto w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
//               <Coffee className="w-6 h-6 text-red-600" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Culinary Arts</h3>
//             <p className="mt-2 text-gray-600">Traditional recipes and food culture</p>
//           </div>
//           <div className="text-center">
//             <div className="mx-auto w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
//               <Theater className="w-6 h-6 text-red-600" />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Festivals</h3>
//             <p className="mt-2 text-gray-600">Celebrations and cultural events</p>
//           </div>
//         </div>
//       </div>

//       {/* Our Values Section */}
//       <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="bg-white p-8 rounded-lg shadow-md">
//           <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
//             <Globe className="w-6 h-6 text-red-600" />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-4">Cultural Understanding</h3>
//           <p className="text-gray-600">
//             We promote cross-cultural dialogue and understanding through educational content,
//             cultural exchange programs, and community events.
//           </p>
//         </div>
//         <div className="bg-white p-8 rounded-lg shadow-md">
//           <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
//             <Book className="w-6 h-6 text-red-600" />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-4">Heritage Preservation</h3>
//           <p className="text-gray-600">
//             We work to document and preserve cultural heritage, traditions, and stories
//             for future generations to learn from and appreciate.
//           </p>
//         </div>
//         <div className="bg-white p-8 rounded-lg shadow-md">
//           <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-4">
//             <Heart className="w-6 h-6 text-red-600"/>
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Building</h3>
//           <p className="text-gray-600">
//             We create spaces for people to connect, share their cultural experiences,
//             and build lasting relationships across cultural boundaries.
//           </p>
//         </div>
//       </div>

//       {/* Mission Statement */}
//       <div className="max-w-7xl mx-auto mt-16 bg-[#ff6a00]">
//         <div className="bg- rounded-lg shadow-sm p-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">
//             Our Mission
//           </h2>
//           <p className="text-gray-600 max-w-3xl mx-auto">
//             To create a vibrant platform where cultures converge, stories are shared, and 
//             traditions are celebrated. We are dedicated to fostering cultural awareness, 
//             appreciation, and understanding in our increasingly connected world.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;



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

      {/* Featured Content Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
  <h2 className="text-4xl font-bold text-center mb-16 relative">
    Cultural Voices
    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-rose-500"></span>
  </h2>

  {/* Story Cards */}
  <div className="relative">
    {/* Decorative Background */}
    <div className="absolute inset-0 -skew-y-3 bg-orange-100/50 -z-10"></div>

    <div className="grid md:grid-cols-2 gap-8 py-12 items-start">
      {/* Left Column */}
      <div className="space-y-8">
        <div className="bg-white rounded-lg p-8 shadow-lg transform hover:-translate-y-1 transition-transform">
          <div className="w-16 h-1 bg-rose-600 mb-6"></div>
          <h3 className="text-2xl font-semibold mb-4">Heritage Preservation</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our dedicated team works with community elders and cultural experts to document
            and preserve traditional practices, ensuring they are passed down to future generations.
          </p>
        </div>

        <div className="bg-orange-600 text-white rounded-lg p-8 shadow-lg transform hover:-translate-y-1 transition-transform">
          <div className="w-16 h-1 bg-white mb-6"></div>
          <h3 className="text-2xl font-semibold mb-4">Cultural Exchange Programs</h3>
          <p className="text-white/90 leading-relaxed mb-4">
            Creating opportunities for meaningful cultural exchanges through workshops, events,
            and collaborative projects that bring communities together.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-8">
        <div className="bg-orange-600 text-white rounded-lg p-8 shadow-lg transform hover:-translate-y-1 transition-transform">
          <div className="w-16 h-1 bg-white mb-6"></div>
          <h3 className="text-2xl font-semibold mb-4">Community Narratives</h3>
          <p className="text-white/90 leading-relaxed mb-4">
            We provide a platform for community members to share their personal stories,
            experiences, and perspectives, enriching our understanding of diverse cultural backgrounds.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg transform hover:-translate-y-1 transition-transform">
          <div className="w-16 h-1 bg-orange-500 mb-6"></div>
          <h3 className="text-2xl font-semibold mb-4">Research & Documentation</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our ongoing research initiatives focus on documenting cultural practices, traditions,
            and historical narratives to ensure their preservation for future study and appreciation.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


      </div>
    // </div>
  );
};

export default AboutUs;