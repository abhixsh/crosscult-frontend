import { useState } from "react";
import InputLanguage from "./InputLanguage";
import OutputLanguage from "./OutputLanguage";
import FileUpload from "./FileUpload";

const MainTranslator = () => {
  const [speechRecognitionLanguage, setSpeechRecognitionLanguage] = useState("en-US");
  const [language, setLanguage] = useState("en");
  const [recognizedText, setRecognizedText] = useState("");
  const [translation, setTranslation] = useState("");

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Translator</h1>
        <p className="text-gray-700 text-sm md:text-base">
          Language translation plays a vital role in bridging cultural divides and
          fostering meaningful communication between diverse communities. It
          enables individuals to share ideas, beliefs, and traditions, creating a
          foundation for mutual understanding and respect. By translating
          literature, historical texts, and cultural narratives, it ensures that
          the richness of a culture's heritage is accessible to a global audience.
          Translation also facilitates collaboration in education, business, and
          diplomacy, breaking down barriers that language differences can create.
          It allows people to experience the beauty of different traditions, art,
          and lifestyles while preserving cultural identity. In an increasingly
          globalized world, translation promotes inclusivity, encourages dialogue,
          and builds bridges for a more connected and harmonious society.
        </p>
      </div>

      {/* Upload Section */}
      <section className="bg-gray-200 shadow-md rounded-lg p-4 md:p-6 mb-8 mx-auto max-w-3xl">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
          Upload Your Files
        </h3>
        
        {/* Language Selection */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 mb-6">
          <div className="w-full sm:w-auto">
            <InputLanguage
              setSpeechRecognitionLanguage={setSpeechRecognitionLanguage}
            />
          </div>

          <p className="text-xl md:text-2xl font-semibold">→</p>

          <div className="w-full sm:w-auto">
            <OutputLanguage setLanguage={setLanguage} />
          </div>
        </div>

        {/* File Upload Component */}
        <FileUpload
          speechRecognitionLanguage={speechRecognitionLanguage}
          language={language}
          setRecognizedText={setRecognizedText}
          setTranslation={setTranslation}
        />
      </section>

      {/* Translation Display */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto max-w-6xl">
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6 border border-black min-h-[200px]">
          <p className="text-gray-600 break-words">
            {recognizedText}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6 border border-black min-h-[200px]">
          <p className="text-gray-600 break-words">
            {translation}
          </p>
        </div>
      </section>
    </div>
  );
};

export default MainTranslator;