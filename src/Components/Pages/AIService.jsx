import { useState } from "react";

function AIService() {

  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setOutputValue(event.target.value);
  }

  // const handleChange1(event) => {
  //   setOutputValue(event.target.value);
  // }

  return (
    <div>
      <div className="font-bold text-5xl mt-14 ml-16">
      <h1>Translator</h1>
      </div>
      <p className="ml-16 mt-4 mr-14">Language translation plays a vital role in bridging cultural divides and fostering meaningful communication between diverse communities. It enables individuals to share ideas, beliefs, and traditions, creating a foundation for mutual understanding and respect. By translating literature, historical texts, and cultural narratives, it ensures that the richness of a culture’s heritage is accessible to a global audience.

Translation also facilitates collaboration in education, business, and diplomacy, breaking down barriers that language differences can create. It allows people to experience the beauty of different traditions, art, and lifestyles while preserving cultural identity. In an increasingly globalized world, translation promotes inclusivity, encourages dialogue, and builds bridges for a more connected and harmonious society.</p>
    
<div className="mt-8 ml-20 mr-28 w-200 h-100 bg-gray-200 rounded-md">
  <h1 className="text-2xl font-semibold text-center">Upload Your File</h1>
  
  {/* Grid container for the file drag area and upload button */}
  <div className="grid grid-cols-2 gap-4 items-center mt-8 ml-20">
    {/* Drag your file section */}
    <div className="w-96 h-64 bg-white rounded-lg">
      <p className="text-center pt-28 font-mono text-gray-400 text-2xl">Drag your file</p>
    </div>

    {/* Upload File Button */}
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-6 mr-64 rounded text-xl">
      Submit
    </button>

  {/* Submit Button */}
  <div className="mt-2">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-36 rounded">
      Upload File
    </button>
  </div>
  </div>
  </div>



  <div className="grid grid-cols-2 gap-4 items-center mt-8 ml-20">
  {/* <div className="w-24 bg-gray-400 h-20"></div> */}
  <div>
      <form>
        <label htmlFor="InputLanguage">Input Language</label><br/>
        <select id="InputLanguage" value={inputValue} onChange={handleChange}>
          <option value="" disabled>Input Language</option>
          <option value="Sinhala">Sinhala</option>
          <option value="Englsih">English</option>
          <option value="French">French</option>
        </select>
      </form>
    </div>
   


{/* <br/><br/><br/> */}
    <div>
      <form>
        <label htmlFor="OutputLanguage">Output Language</label><br/>
        <select id="OutputLanguage" value={outputValue} onChange={handleChange}>
          <option value="" disabled>Output Language</option>
          <option value="Sinhala">Sinhala</option>
          <option value="English">English</option>
          <option value="Teamil">Tamil</option>
        </select>
      </form>
    </div>

    </div>

    
    </div>
  )
}

export default AIService
