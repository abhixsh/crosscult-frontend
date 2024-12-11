import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
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
    const [updateMessage, setUpdateMessage] = useState(''); // New state for update message

    const API_BASE_URL = 'http://localhost:3000/api'; // Update with the actual backend URL

    // Fetch countries
    const fetchCountries = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/countries`);
            setCountries(response.data);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };

    // Handle form input changes
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                // Update country
                const response = await axios.put(`${API_BASE_URL}/country/${editingId}`, form);
                if (response.status === 200) {
                    setUpdateMessage('Country updated successfully!'); // Show success message
                }
                setEditingId(null);
            } else {
                // Create country
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
            fetchCountries();
        } catch (error) {
            setUpdateMessage('Error updating country: ' + error.message); // Show error message
            console.error('Error saving country:', error);
        }
    };

    // Handle delete
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/country/${id}`);
            fetchCountries();
        } catch (error) {
            console.error('Error deleting country:', error);
        }
    };

    // Handle edit
    const handleEdit = (country) => {
        setForm(country);
        setEditingId(country._id);
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    return (
        <div className="container">
            <h1>Admin Dashboard - Countries</h1>

            {updateMessage && <p>{updateMessage}</p>} {/* Display the update message */}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Country Name:</label>
                    <input
                        type="text"
                        name="country_name"
                        value={form.country_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Country Image URL:</label>
                    <input
                        type="text"
                        name="country_img"
                        value={form.country_img}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="country_desc"
                        value={form.country_desc}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                {/* History */}
                <div>
                    <label>History Main Image URL:</label>
                    <input
                        type="text"
                        name="history_main_img"
                        value={form.history_main_img}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>History Small Image URL:</label>
                    <input
                        type="text"
                        name="history_small_img"
                        value={form.history_small_img}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>History Description:</label>
                    <textarea
                        name="history_desc"
                        value={form.history_desc}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Traditions */}
                <div>
                    <label>Traditions Main Image URL:</label>
                    <input
                        type="text"
                        name="traditions_main_img"
                        value={form.traditions_main_img}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Traditions Small Image URL:</label>
                    <input
                        type="text"
                        name="traditions_small_img"
                        value={form.traditions_small_img}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Traditions Description:</label>
                    <textarea
                        name="traditions_desc"
                        value={form.traditions_desc}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Food */}
                <div>
                    <label>Food Main Image URL:</label>
                    <input
                        type="text"
                        name="food_main_img"
                        value={form.food_main_img}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Food Small Image URL:</label>
                    <input
                        type="text"
                        name="food_small_img"
                        value={form.food_small_img}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Food Description:</label>
                    <textarea
                        name="food_desc"
                        value={form.food_desc}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Flag Image */}
                <div>
                    <label>Flag Image URL:</label>
                    <input
                        type="text"
                        name="flag_img"
                        value={form.flag_img}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">{editingId ? 'Update Country' : 'Add Country'}</button>
            </form>

            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((country) => (
                        <tr key={country._id}>
                            <td>{country.country_name}</td>
                            <td>
                                <img src={country.country_img} alt={country.country_name} width="50" />
                            </td>
                            <td>{country.country_desc}</td>
                            <td>
                                <button onClick={() => handleEdit(country)}>Edit</button>
                                <button onClick={() => handleDelete(country._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
