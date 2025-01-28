import PropTypes from 'prop-types';
import { useState } from 'react';

function FileUpload({ speechRecognitionLanguage, language, setRecognizedText, setTranslation }) {
  const [file, setFile] = useState(null);

  function handleFile(event) {
    setFile(event.target.files[0]);
  }

  function handleUpload(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('audioFile', file);
    formData.append('speechRecognitionLanguage', speechRecognitionLanguage);
    formData.append('language', language);

    fetch(
      'https://crosscultainew.azurewebsites.net/api/translate',
      {
        method: "POST",
        body: formData
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setRecognizedText(result.recognizedText);  // Update recognized text
        setTranslation(result.translation);        // Update translation
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 ">
        <div className="mt-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 ml-28">
          {/* File Upload */}
          <div className="text-center">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 w-48 h-32 flex items-center justify-center text-gray-500 ">
              {/* <form onSubmit={handleUpload}>
              <input type="file" name="file" onChange={handleFile} /> */}
              Drag Your Files
              {/* </form> */}
            </div>
            <form onSubmit={handleUpload}>
              <input type="file" name="file" onChange={handleFile} />
              {/* <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ">
                Upload Files
              </button> */}
            </form>
          </div>
        </div>

        <div className="mt-20">
          {/* Submit Button */}
          <form onSubmit={handleUpload}>
            <button className="bg-[#FF6A00]  text-white px-12 py-3 rounded hover:bg-[#FF6A00] h-12">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Adding prop-types for props validation
FileUpload.propTypes = {
  speechRecognitionLanguage: PropTypes.string.isRequired,  // Validate as a required string
  language: PropTypes.string.isRequired,                  // Validate as a required string
  setRecognizedText: PropTypes.func.isRequired,           // Validate as a required function
  setTranslation: PropTypes.func.isRequired,              // Validate as a required function
};

export default FileUpload;

