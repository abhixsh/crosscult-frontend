import axios from 'axios';

const API_URL = 'http://localhost:3000/api/countries'; // Adjust the API URL accordingly

export const getCountries = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createCountry = async (countryData) => {
    await axios.post(API_URL, countryData);
};

export const updateCountry = async (id, countryData) => {
    await axios.put(`${API_URL}/${id}`, countryData);
};
