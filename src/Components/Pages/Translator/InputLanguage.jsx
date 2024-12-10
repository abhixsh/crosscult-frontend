import PropTypes from 'prop-types';

function InputLanguage({ speechRecognitionLanguage, setSpeechRecognitionLanguage }) {
    const options = [
        { label: "English", value: 'en-US' },
        { label: "Sinhala", value: 'si-LK' },
        { label: "Spanish", value: 'es-ES' },
        { label: "Arabic", value: 'ar-EG' },
        { label: "German", value: 'de-DE' },
        { label: "Russian", value: 'ru-RU' },
        { label: "Chinese", value: 'zh-CN' },
        { label: "Japanese", value: 'ja-JP' },
    ];

    function handleSelect(event) {
        const selectedValue = event.target.value;
        setSpeechRecognitionLanguage(selectedValue); // Update parent with selected language
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="w-200 p-5 border rounded">
                <select
                    className="border border-gray-300 rounded-lg px-4 py-2 w-48"
                    value={speechRecognitionLanguage} // Use the current language value
                    onChange={handleSelect} // Pass event directly to handler
                >
                    {options.map(option => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

// Adding prop-types for validation
InputLanguage.propTypes = {
    speechRecognitionLanguage: PropTypes.string.isRequired, // Validate as a required string
    setSpeechRecognitionLanguage: PropTypes.func.isRequired, // Validate as a required function
};

export default InputLanguage;


