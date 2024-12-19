import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Edit, Trash2 } from 'lucide-react';

const CulturalEventsAdmin = () => {
    const [events, setEvents] = useState([]);
    const [form, setForm] = useState({
        event_id: '',
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        location: '',
        country: '',
        event_type: '',
        img_link: '',
        short_description: ''
    });
    const [editingId, setEditingId] = useState(null);
    const [updateMessage, setUpdateMessage] = useState('');
    const [showForm, setShowForm] = useState(false);

    const API_BASE_URL = 'http://localhost:3001/api/events';

    const fetchEvents = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}`);
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                const response = await axios.put(`${API_BASE_URL}/${editingId}`, form);
                if (response.status === 200) {
                    setUpdateMessage('Event updated successfully!');
                }
                setEditingId(null);
            } else {
                await axios.post(`${API_BASE_URL}`, form);
                setUpdateMessage('Event added successfully!');
            }
            setForm({
                event_id: '',
                title: '',
                description: '',
                start_date: '',
                end_date: '',
                location: '',
                country: '',
                event_type: '',
                img_link: '',
                short_description: ''
            });
            setShowForm(false);
            fetchEvents();
        } catch (error) {
            setUpdateMessage('Error saving event: ' + error.message);
            console.error('Error saving event:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/${id}`);
            fetchEvents();
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    const handleEdit = (event) => {
        setForm(event);
        setEditingId(event._id);
        setShowForm(true);
    };

    const handleAddEvent = () => {
        setShowForm(true);
        setEditingId(null);
        setForm({
            event_id: '',
            title: '',
            description: '',
            start_date: '',
            end_date: '',
            location: '',
            country: '',
            event_type: '',
            img_link: '',
            short_description: ''
        });
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard - Cultural Events</h1>

            {updateMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    {updateMessage}
                </div>
            )}

            {/* Add Event Button */}
            {!showForm && (
                <div className="mb-8 flex justify-center">
                    <button
                        onClick={handleAddEvent}
                        className="border border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00]/10 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Event
                    </button>
                </div>
            )}

            {showForm && (
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 grid md:grid-cols-2 gap-6">
                    {/* Form Fields for Backend Data */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="event_id">
                            Event ID
                        </label>
                        <input
                            type="text"
                            name="event_id"
                            value={form.event_id}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_date">
                            Start Date
                        </label>
                        <input
                            type="date"
                            name="start_date"
                            value={form.start_date}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_date">
                            End Date
                        </label>
                        <input
                            type="date"
                            name="end_date"
                            value={form.end_date}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                            Country
                        </label>
                        <input
                            type="text"
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="event_type">
                            Event Type
                        </label>
                        <input
                            type="text"
                            name="event_type"
                            value={form.event_type}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="img_link">
                            Image URL
                        </label>
                        <input
                            type="text"
                            name="img_link"
                            value={form.img_link}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4 md:col-span-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="short_description">
                            Short Description
                        </label>
                        <textarea
                            name="short_description"
                            value={form.short_description}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                        ></textarea>
                    </div>

                    <div className="md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="border border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00]/10 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            {editingId ? 'Update Event' : 'Add Event'}
                        </button>
                    </div>
                </form>
            )}

            <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-md rounded">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left">Title</th>
                            <th className="px-4 py-2 text-left">Image</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event) => (
                            <tr key={event._id} className="border-b hover:bg-gray-100">
                                <td className="px-4 py-2">{event.title}</td>
                                <td className="px-4 py-2">
                                    <img
                                        src={event.img_link}
                                        alt={event.title}
                                        className="w-12 h-12 object-cover rounded"
                                    />
                                </td>
                                <td className="px-4 py-2 space-x-2">
                                    <button
                                        onClick={() => handleEdit(event)}
                                        className="text-[#FF6A00]"
                                    >
                                        <Edit className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(event._id)}
                                        className="text-red-500"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Ensure to export as default
export default CulturalEventsAdmin;
