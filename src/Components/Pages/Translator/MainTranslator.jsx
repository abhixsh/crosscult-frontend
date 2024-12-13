import { useState } from "react";

const MainTranslator = () => {
  const [sourceLanguage, setSourceLanguage] = useState("English");
  const [targetLanguage, setTargetLanguage] = useState("French");

  const languages = ["English", "French", "Spanish", "German", "Chinese", "Japanese"];
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl md:text-5xl">Translator</h1>
       </div>

      <p className="text-center mb-10 max-w-4xl mx-auto">
        Language translation plays a vital role in bridging cultural divides and fostering meaningful communication between diverse communities. It enables individuals to share ideas, beliefs, and traditions, creating a foundation for mutual understanding and respect. By translating literature, historical texts, and cultural narratives, it ensures that the richness of a culture's heritage is accessible to a global audience.

        Translation also facilitates collaboration in education, business, and diplomacy, breaking down barriers that language differences can create. It allows people to experience the beauty of different traditions, art, and lifestyles while preserving cultural identity. In an increasingly globalized world, translation promotes inclusivity, encourages dialogue, and builds bridges for a more connected and harmonious society.
      </p>

      {/* Upload Section */}
      <section className="bg-gray-200 shadow-md rounded-lg p-6 max-w-xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">Upload Your Files</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
          {/* Source Language */}
          <div className="text-center w-full md:w-auto">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-48"
              value={sourceLanguage}
              onChange={(e) => setSourceLanguage(e.target.value)}
            >
              {languages.map((language, index) => (
                <option key={index} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>

          <p className="text-2xl font-semibold hidden md:block">→</p>

          {/* Target Language */}
          <div className="text-center w-full md:w-auto">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-48"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
            >
              {languages.map((language, index) => (
                <option key={index} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          {/* File Upload */}
          <div className="text-center w-full md:w-auto">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 w-full md:w-48 h-32 flex items-center justify-center text-gray-500 mb-4">
              Drag Your Files
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto">
              Upload Files
            </button>
          </div>

          {/* Submit Button */}
          <div className="w-full md:w-auto text-center">
            <button className="bg-red-600 text-white px-12 py-3 rounded hover:bg-red-700 w-full md:w-auto">
              Submit
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 border border-black">
          <p className="text-gray-600">
            Translate between your selected languages and experience the power of AI. Choose your source and target languages and get started.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 border border-black">
          <p className="text-gray-600">
            Ensure your file format is supported before uploading. Supported formats include TXT, DOCX, and PDF for seamless translation.
          </p>
        </div>
      </section>
    </div>
  )
}

export default MainTranslator;