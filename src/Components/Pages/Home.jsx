function Home() {
  return (
    <div className="relative w-full bg-white overflow-x-hidden pt-15 pb-20">

      {/* Main Content with Top Margin */}
      <div className="relative w-full max-w-full mt-2">
        <div className="relative w-full max-w-[90%] mx-auto rounded-[20px] overflow-hidden">
          {/* Backdrop Image */}
          <img
            className="w-full h-auto object-cover"
            src="public/img/landingImg.png"
            alt="Backdrop"
          />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-start justify-center pl-4 sm:pl-10">
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight">
              Traditional Concepts
            </h1>
            <h2 className="text-[#ff6a00] text-xl md:text-3xl lg:text-4xl font-bold font-['Inter'] mt-2">
              Beyond Limits
            </h2>
            <p className="text-white text-sm md:text-base lg:text-lg font-normal font-['Inter'] mt-4 max-w-[80%] md:max-w-[60%] text-left">
              Release of Letraset sheets containing Lorem Ipsum passages
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full px-4 sm:px-10 mt-8">
        <div className="w-full text-center mb-4">
          <h3 className="text-black/80 text-xl md:text-2xl font-bold font-['Inter']">
            Description
          </h3>
        </div>
        <div className="max-w-4xl mx-auto text-center text-black text-base md:text-lg font-normal font-['Inter'] leading-relaxed px-4">
        Culture encompasses the beliefs, values, norms, customs, arts, and practices that define a group or society. It shapes how people view the world, interact with each other, and express themselves, giving each community a distinct identity. Culture includes language, religion, cuisine, social habits, music, and arts, which are passed down through generations, fostering a sense of belonging and continuity.
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative w-full px-4 sm:px-10 mt-16">
        {/* Traditional Concepts Title */}
        <div className="text-center mb-6">
          <span className="text-black/80 text-xl md:text-2xl font-bold font-['Inter']">Traditional</span>
          <span className="text-black/30 text-xl md:text-2xl font-bold font-['Inter'] ml-2">Concepts</span>
        </div>

        {/* Main Layout Container */}
        <div className="relative w-full max-w-[1324px] mx-auto flex flex-col md:flex-row items-center gap-6">
          {/* Main Image - Reduced Height */}
          <div className="w-full md:w-[40%] flex justify-center">
            <img
              className="w-full max-w-[362px] h-auto aspect-[362/524] object-cover rounded-3xl"
              src="public/img/girl.png"
              alt="Home Image 1"
            />
          </div>

          {/* Icons Grid */}
          <div className="w-full md:w-[60%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center">
            {[
              { icon: "public/img/001.png", text: "Festivals", subtext: "Experience the vibrant celebrations and cultural traditions." },
              { icon: "public/img/002.png", text: "Mussic", subtext: "Dive into the rhythms and melodies of diverse cultures." },
              { icon: "public/img/003.png", text: "Cuisine", subtext: "Savor the unique flavors and dishes from around the world." },
              { icon: "public/img/004.png", text: "Clothing", subtext: "Discover traditional attire and modern fashion trends." }
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center space-y-2"
              >
                <div className="w-[125px] h-[125px] bg-[#d9d9d9] rounded-lg flex items-center justify-center">
                  <img
                    className="w-2/3 h-2/3 object-contain"
                    src={item.icon}
                    alt={`Icon ${index + 1}`}
                  />
                </div>
                <div className="text-black text-sm font-medium font-['Inter']">
                  {item.text}
                </div>
                <div className="text-black/50 text-xs font-['Inter'] px-2">
                  {item.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div >
  );
}

export default Home;