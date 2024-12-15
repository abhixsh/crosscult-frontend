import { Link } from 'react-router-dom'; // Import Link
import img1 from '../../../assets/Story/search.png';
import img2 from '../../../assets/Story/storyimg.png';

const MainStory = () => {
  const stories = [
    {
      id: 1,
      image: img1, // Use the image directly
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when...',
      link: '/stories', // Replace with an internal route
    },
    {
      id: 2,
      image: '/api/placeholder/400/400',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when...',
      link: '/story/2',
    },
    {
      id: 3,
      image: '/api/placeholder/400/400',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when...',
      link: '/story/3',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="container mx-auto px-4">
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">
            {/* Text Content */}
            <div className="lg:w-2/3 lg:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Stories</h2>
              <p className="text-gray-700 text-lg">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
            </div>
            {/* Image */}
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <img
                src={img2}
                alt="Story illustration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Large Hero Image */}
        <div className="relative w-full h-64 mb-8">
          <img
            src={img1}
            alt="Ancient architecture"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Centered Search Bar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full shadow-lg flex items-center w-96 overflow-hidden">
              <input
                type="text"
                className="w-full px-6 py-3 outline-none"
                placeholder="Search..."
              />
              <button className="px-6 py-3 text-gray-600 hover:bg-gray-100">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ml-36 mr-28">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className="flex flex-col items-center bg-gray-200 rounded-lg p-4"
            >
              <div className="w-full aspect-square mb-4">
                <Link to={story.link}>
                  <img
                    src={story.image}
                    alt={`Story ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </Link>
              </div>
              <div className="text-center">
                <h3 className="font-medium mb-2">Story {index + 1}</h3>
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
