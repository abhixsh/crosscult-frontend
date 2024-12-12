import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Edit, Trash2 } from 'lucide-react'; // Import icons for Edit and Delete

const CountryAdmin = () => {
    const [countries, setCountries] = useState([]);
    const [form, setForm] = useState({
        country_name: '',
        country_img: '',
        country_desc: '',
        history_main_img: '',
        history_small_img: '',
        history_desc: '',
        traditions_main_img: '',
        traditions_small_img: '',
        traditions_desc: '',
        food_main_img: '',
        food_small_img: '',
        food_desc: '',
        flag_img: '',
    });
    const [editingId, setEditingId] = useState(null);
    const [updateMessage, setUpdateMessage] = useState('');
    const [showForm, setShowForm] = useState(false); // To toggle the form visibility

    const API_BASE_URL = 'http://localhost:3000/api';

    const fetchCountries = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/countries`);
            setCountries(response.data);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                const response = await axios.put(`${API_BASE_URL}/country/${editingId}`, form);
                if (response.status === 200) {
                    setUpdateMessage('Country updated successfully!');
                }
                setEditingId(null);
            } else {
                await axios.post(`${API_BASE_URL}/countries`, form);
                setUpdateMessage('Country added successfully!');
            }
            setForm({
                country_name: '',
                country_img: '',
                country_desc: '',
                history_main_img: '',
                history_small_img: '',
                history_desc: '',
                traditions_main_img: '',
                traditions_small_img: '',
                traditions_desc: '',
                food_main_img: '',
                food_small_img: '',
                food_desc: '',
                flag_img: '',
            });
            setShowForm(false); // Hide the form after submission
            fetchCountries();
        } catch (error) {
            setUpdateMessage('Error updating country: ' + error.message);
            console.error('Error saving country:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/country/${id}`);
            fetchCountries();
        } catch (error) {
            console.error('Error deleting country:', error);
        }
    };

    const handleEdit = (country) => {
        setForm(country);
        setEditingId(country._id);
        setShowForm(true); // Show the form for editing
    };

    const handleAddCountry = () => {
        setShowForm(true); // Show the form for adding a new country
        setEditingId(null); // Clear editing ID
        setForm({
            country_name: '',
            country_img: '',
            country_desc: '',
            history_main_img: '',
            history_small_img: '',
            history_desc: '',
            traditions_main_img: '',
            traditions_small_img: '',
            traditions_desc: '',
            food_main_img: '',
            food_small_img: '',
            food_desc: '',
            flag_img: '',
        });
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard - Countries</h1>

            {updateMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    {updateMessage}
                </div>
            )}

            {/* Add/Edit Country Form */}
            {showForm && (
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 grid md:grid-cols-2 gap-6">
                    {/* Country Basic Info */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country_name">
                            Country Name
                        </label>
                        <input
                            type="text"
                            name="country_name"
                            value={form.country_name}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country_img">
                            Country Image URL
                        </label>
                        <input
                            type="text"
                            name="country_img"
                            value={form.country_img}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4 md:col-span-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country_desc">
                            Description
                        </label>
                        <textarea
                            name="country_desc"
                            value={form.country_desc}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                        ></textarea>
                    </div>

                    {/* Image sections */}
                    {[
                        { prefix: 'history', label: 'History' },
                        { prefix: 'traditions', label: 'Traditions' },
                        { prefix: 'food', label: 'Food' }
                    ].map(({ prefix, label }) => (
                        <React.Fragment key={prefix}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    {label} Main Image URL
                                </label>
                                <input
                                    type="text"
                                    name={`${prefix}_main_img`}
                                    value={form[`${prefix}_main_img`]}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    {label} Small Image URL
                                </label>
                                <input
                                    type="text"
                                    name={`${prefix}_small_img`}
                                    value={form[`${prefix}_small_img`]}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4 md:col-span-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    {label} Description
                                </label>
                                <textarea
                                    name={`${prefix}_desc`}
                                    value={form[`${prefix}_desc`]}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                                ></textarea>
                            </div>
                        </React.Fragment>
                    ))}

                    {/* Flag Image */}
                    <div className="mb-4 md:col-span-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="flag_img">
                            Flag Image URL
                        </label>
                        <input
                            type="text"
                            name="flag_img"
                            value={form.flag_img}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="border border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00]/10 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            {editingId ? 'Update Country' : 'Add Country'}
                        </button>

                    </div>
                </form>
            )}

            {/* Country List Table */}
            <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-md rounded">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Image</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((country) => (
                            <tr key={country._id} className="border-b hover:bg-gray-100">
                                <td className="px-4 py-2">{country.country_name}</td>
                                <td className="px-4 py-2">
                                    <img
                                        src={country.country_img}
                                        alt={country.country_name}
                                        className="w-12 h-12 object-cover rounded"
                                    />
                                </td>
                                <td className="px-4 py-2 space-x-2">
                                    <button
                                        onClick={() => handleEdit(country)}
                                        className="mr-2 text-[#FF6A00] w-5 h-5 sm:w-6 sm:h-6 text-2xl sm:text-3xl font-bold"
                                    >
                                        <Edit className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(country._id)}
                                        className="mr-2 text-[#FF6A00] w-5 h-5 sm:w-6 sm:h-6 text-2xl sm:text-3xl font-bold"
                                    >
                                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {!showForm && (
                <div className="mt-6 text-center">
                    <button
                        onClick={handleAddCountry}
                        className="border border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00]/10 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Country
                    </button>
                </div>

            )}
        </div>
    );
};

export default CountryAdmin;
