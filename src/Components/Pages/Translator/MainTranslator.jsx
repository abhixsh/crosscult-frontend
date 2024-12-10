import { useState } from "react";
import InputLanguage from "./InputLanguage";
import OutputLanguage from "./OutputLanguage";
import FileUpload from "./FileUpload";

const MainTranslator = () => {
  const [speechRecognitionLanguage, setSpeechRecognitionLanguage] =
    useState("en-US");
  const [language, setLanguage] = useState("en");
  const [recognizedText, setRecognizedText] = useState("");
  const [translation, setTranslation] = useState("");

 

  return (
    <div>
      <div className="font-bold text-5xl ml-16">
        <h1>Translator</h1>
      </div>
      <p className="ml-16 mt-4 mr-14">
        Language translation plays a vital role in bridging cultural divides and
        fostering meaningful communication between diverse communities. It
        enables individuals to share ideas, beliefs, and traditions, creating a
        foundation for mutual understanding and respect. By translating
        literature, historical texts, and cultural narratives, it ensures that
        the richness of a culture’s heritage is accessible to a global audience.
        Translation also facilitates collaboration in education, business, and
        diplomacy, breaking down barriers that language differences can create.
        It allows people to experience the beauty of different traditions, art,
        and lifestyles while preserving cultural identity. In an increasingly
        globalized world, translation promotes inclusivity, encourages dialogue,
        and builds bridges for a more connected and harmonious society.
      </p>

      {/* Upload Section */}
      <section className="bg-gray-200 shadow-md rounded-lg p-6 mt-10 max-w-screen-md ml-80">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Upload Your Files
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Source Language */}
          <div className="text-center">
            <label className="block text-lg font-semibold mb-2"></label>
           
            <InputLanguage
              setSpeechRecognitionLanguage={setSpeechRecognitionLanguage}
            />
          </div>

          <p className="text-2xl font-semibold">→</p>

          {/* Target Language */}
          <div className="text-center">
            <label className="block text-lg font-semibold mb-2"></label>
            {/* <select
                className="border border-gray-300 rounded-lg px-4 py-2 w-48"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
              >
                {languages.map((language, index) => (
                  <option key={index} value={language}>
                    {language}
                  </option>
                ))}
              </select> */}
            <OutputLanguage setLanguage={setLanguage} />
          </div>
        </div>

        <FileUpload
          speechRecognitionLanguage={speechRecognitionLanguage}
          language={language}
          setRecognizedText={setRecognizedText}
          setTranslation={setTranslation}
        />

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-20 ">
          <div className="mt-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 ml-28">
          
            <div className="text-center">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 w-48 h-32 flex items-center justify-center text-gray-500 ">
                Drag Your Files
              </div>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Upload Files
              </button>
            </div>
          </div>
          <div className="mt-20">
          
            <button className="bg-red-600 text-white px-12 py-3 rounded hover:bg-red-700 h-12">
              Submit
            </button>
          </div>
        </div> */}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-20 ml-80 mr-40">
        <div className="bg-white shadow-md rounded-lg p-6 w-2/4 border border-black">
          <p className="text-gray-600">
            {recognizedText}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-2/4 border border-black">
          <p className="text-gray-600">
            {translation}
          </p>
        </div>
      </section>
    </div>
  );
};

export default MainTranslator;
