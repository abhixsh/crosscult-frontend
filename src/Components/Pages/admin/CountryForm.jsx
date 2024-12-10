import React, { useState, useEffect } from 'react';
import { createCountry, updateCountry } from './countryService';

const CountryForm = ({ isEditing, currentCountry, fetchCountries }) => {
    const [countryData, setCountryData] = useState({
        country_name: '',
        country_desc: '',
        country_img: ''
    });

    useEffect(() => {
        if (isEditing && currentCountry) {
            setCountryData(currentCountry);
        }
    }, [isEditing, currentCountry]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCountryData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            await updateCountry(currentCountry._id, countryData);
        } else {
            await createCountry(countryData);
        }
        fetchCountries();
        setCountryData({
            country_name: '',
            country_desc: '',
            country_img: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg shadow-md mb-5">
            <h2 className="text-2xl font-semibold mb-4">{isEditing ? 'Edit Country' : 'Add New Country'}</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Country Name</label>
                <input
                    type="text"
                    name="country_name"
                    value={countryData.country_name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                    name="country_desc"
                    value={countryData.country_desc}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Image URL</label>
                <input
                    type="text"
                    name="country_img"
                    value={countryData.country_img}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                {isEditing ? 'Update Country' : 'Add Country'}
            </button>
        </form>
    );
};

export default CountryForm;
