import { useState } from 'react'

function OutputLanguage() {
    const [outputValue, setOutputValue] = useState("");

    const handleChange = (event) => {
        setOutputValue(event.target.value);
    }

  return (
    <div>
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
  )
}

export default OutputLanguage

