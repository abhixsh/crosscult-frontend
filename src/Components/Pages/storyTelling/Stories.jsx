import img1  from '../../../assets/Story/story1.jpg'

function Stories() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-[#636060] text-white py-12 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Whitsundays Ocean Rafting Adventure</h1>
            <p className="text-lg">
              Explore the crystal-clear waters, snorkel the reefs, and relax at Whitehaven Beach!
            </p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <img
              src={img1}
              alt="Ocean Rafting"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <h2 className="text-2xl font-semibold mb-4">Experience Details</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Discover the beauty of Whitsundays with this all-day adventure. Enjoy snorkeling
              among vibrant marine life and take in the pristine views of Whitehaven Beach. 
              Whether you're looking for relaxation or thrill, this trip is perfect for everyone.DiDiscover the beauty of Whitsundays with this all-day adventure. Enjoy snorkeling
              among vibrant marine life and take in the pristine views of Whitehaven Beach. 
              Whether you're looking for relaxation or thrill, this trip is perfect for everyone.scover the beauty of Whitsundays with this all-day adventure. Enjoy snorkeling
              among vibrant marine life and take in the pristine views of Whitehaven Beach. 
              Whether you're looking for relaxation or thrill, this trip is perfect for everyone.Discover the beauty of Whitsundays with this all-day adventure. Enjoy snorkeling
              among vibrant marine life and take in the pristine views of Whitehaven Beach. 
              Whether you're looking for relaxation or thrill, this trip is perfect for everyone.Discover the beauty of Whitsundays with this all-day adventure. Enjoy snorkeling
              among vibrant marine life and take in the pristine views of Whitehaven Beach. 
              Whether you're looking for relaxation or thrill, this trip is perfect for everyone.
            </p>

            {/* Gallery */}
            
          </div>

          {/* Sidebar */}
          <div>
            <div className="p-6 bg-white rounded-lg shadow-lg mb-6">
              {/* Location */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-500">Whitsundays, Australia</p>
              </div>
              {/* Budget */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Budget</h3>
                <p className="text-gray-500">$200 - $300</p>
              </div>
              {/* Ratings */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Rating</h3>
                <p className="text-yellow-400 text-xl font-bold">4.7 ★</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stories;
