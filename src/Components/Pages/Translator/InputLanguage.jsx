import { useState } from "react";

function InputLanguage() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 items-center mt-8 ml-20">
  {/* <div className="w-24 bg-gray-400 h-20"></div> */}
  <div>
      <form>
        <label htmlFor="InputLanguage"></label><br/>
        <select id="InputLanguage" value={inputValue} onChange={handleChange}>
          <option value="" disabled>Input Language</option>
          <option value="Sinhala">Sinhala</option>
          <option value="Englsih">English</option>
          <option value="French">French</option>
        </select>
      </form>
    </div>
    </div>
    </div>
  )
}

export default InputLanguage
