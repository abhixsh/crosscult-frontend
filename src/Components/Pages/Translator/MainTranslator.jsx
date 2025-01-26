import { useState } from "react";
import { motion } from "framer-motion";
import InputLanguage from "./InputLanguage";
import OutputLanguage from "./OutputLanguage";
import FileUpload from "./FileUpload";
import { 
  Languages, 
  ArrowRight, 
  Globe2, 
  Upload, 
  FileText 
} from "lucide-react";

const MainTranslator = () => {
  const [speechRecognitionLanguage, setSpeechRecognitionLanguage] = useState("en-US");
  const [language, setLanguage] = useState("en");
  const [recognizedText, setRecognizedText] = useState("");
  const [translation, setTranslation] = useState("");

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Languages className="w-8 h-8 md:w-10 md:h-10 text-[#FF6A00]" />
          <h1 className="text-4xl md:text-5xl font-bold">Translator</h1>
        </div>
        <motion.p
          className="text-gray-700 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Language translation plays a vital role in bridging cultural divides and
          fostering meaningful communication between diverse communities...
        </motion.p>
      </motion.div>

      {/* Upload Section */}
      <motion.section
        className="bg-gray-200 shadow-md rounded-lg p-4 md:p-6 mb-8 mx-auto max-w-3xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center justify-center gap-2 mb-4 md:mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-center">
            Upload Your Files
          </h3>
        </motion.div>
        
        {/* Language Selection */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div variants={{ hidden: { x: -30 }, visible: { x: 0 } }}>
            <InputLanguage
              setSpeechRecognitionLanguage={setSpeechRecognitionLanguage}
            />
          </motion.div>

          <motion.div
            className="hidden sm:block"
            variants={{ hidden: { scale: 0.8 }, visible: { scale: 1 } }}
          >
            <ArrowRight className="w-6 h-6 text-gray-600" />
          </motion.div>

          <motion.div variants={{ hidden: { x: 30 }, visible: { x: 0 } }}>
            <OutputLanguage setLanguage={setLanguage} />
          </motion.div>
        </motion.div>

        {/* File Upload Component */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FileUpload
            speechRecognitionLanguage={speechRecognitionLanguage}
            language={language}
            setRecognizedText={setRecognizedText}
            setTranslation={setTranslation}
          />
        </motion.div>
      </motion.section>

      {/* Conditional Translation Display */}
      {(recognizedText || translation) && (
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto max-w-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.3 }}
        >
          <motion.div
            className="bg-white shadow-md rounded-lg p-4 md:p-6 border border-black min-h-[200px]"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 break-words">{recognizedText}</p>
          </motion.div>
          <motion.div
            className="bg-white shadow-md rounded-lg p-4 md:p-6 border border-black min-h-[200px]"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 break-words">{translation}</p>
          </motion.div>
        </motion.section>
      )}
    </div>
  );
};

export default MainTranslator;