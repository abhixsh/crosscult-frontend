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
            'http://localhost:3000/api/translate',
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
            <button className="bg-red-600 text-white px-12 py-3 rounded hover:bg-red-700 h-12">
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

// import PropTypes from "prop-types";
// import { useState, useRef } from "react";

// function FileUpload({ speechRecognitionLanguage, language, setRecognizedText, setTranslation }) {
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState(""); // State to store file name
//   const fileInputRef = useRef(null);

//   function handleFile(event) {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setFileName(selectedFile.name); // Set the file name
//     }
//   }

//   function handleUpload(event) {
//     event.preventDefault();

//     if (!file) {
//       alert("Please select a file first!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("audioFile", file);
//     formData.append("speechRecognitionLanguage", speechRecognitionLanguage);
//     formData.append("language", language);

//     fetch("http://localhost:3000/api/translate", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         setRecognizedText(result.recognizedText); // Update recognized text
//         setTranslation(result.translation); // Update translation
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }

//   function handleButtonClick() {
//     fileInputRef.current.click(); // Trigger the file input dialog
//   }

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
//         <div className="mt-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 ml-28">
//           {/* File Upload */}
//           <div className="text-center">
//             <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 w-48 h-32 flex items-center justify-center text-gray-500">
//               <form>
//                 <input
//                   type="file"
//                   name="file"
//                   onChange={handleFile}
//                   ref={fileInputRef}
//                   style={{ display: "none" }} // Hide the input
//                 />
//                 Drag Your Files
//               </form>
//             </div>
//             <button
//               type="button"
//               className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//               onClick={handleButtonClick}
//             >
//               Upload Files
//             </button>
//             {fileName && (
//               <p className="mt-2 text-gray-700 text-sm">Selected File: {fileName}</p>
//             )}
//           </div>
//         </div>
//         <div className="mt-20">
//           {/* Submit Button */}
//           <button
//             className="bg-red-600 text-white px-12 py-3 rounded hover:bg-red-700 h-12"
//             onClick={handleUpload}
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Adding prop-types for props validation
// FileUpload.propTypes = {
//   speechRecognitionLanguage: PropTypes.string.isRequired, // Validate as a required string
//   language: PropTypes.string.isRequired, // Validate as a required string
//   setRecognizedText: PropTypes.func.isRequired, // Validate as a required function
//   setTranslation: PropTypes.func.isRequired, // Validate as a required function
// };

// export default FileUpload;
