import PropTypes from 'prop-types';

function OutputLanguage({ language, setLanguage }) {
    const options = [
        { label: "English", value: 'en' },
        { label: "Spanish", value: 'es' },
        { label: "Arabic", value: 'ar' },
        { label: "German", value: 'de' },
        { label: "Russian", value: 'ru' },
        { label: "Chinese", value: 'zh-Hans' },
        { label: "Japanese", value: 'ja' },
        { label: "Tamil", value: 'ta' },
    ];

    function handleSelect(event) {
        const selectedValue = event.target.value;
        setLanguage(selectedValue); // Update parent with the selected language
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="w-50 p-3 border rounded">
                <select
                    className="border border-gray-300 rounded-lg px-4 py-2 w-48"
                    value={language} // Use the current language value
                    onChange={handleSelect} // Handle the change
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
OutputLanguage.propTypes = {
    language: PropTypes.string.isRequired, // Validate as a required string
    setLanguage: PropTypes.func.isRequired, // Validate as a required function
};

export default OutputLanguage;
