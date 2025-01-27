import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { User, Mail, Globe, Calendar, Edit, Trash2, PlusCircle } from 'lucide-react';

function UserProfile() {
    const [userData, setUserData] = useState(null);
    const [stories, setStories] = useState([]);
    const [form, setForm] = useState({
        username: '',
        title: '',
        content: '',
        short_content: '',
        tags: '',
        preview_img: '',
        img_link: '',
        badge: '',
        season: '',
        month: '',
        posted_date: '',
        country: '',
    });
    const [editingId, setEditingId] = useState(null);
    const [updateMessage, setUpdateMessage] = useState('');
    const [showForm, setShowForm] = useState(false);

    const API_BASE_URL = 'https://crosscultstorynew.azurewebsites.net';

    useEffect(() => {
        // Retrieve user data from local storage
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            setUserData(parsedUserData);
            fetchStories(parsedUserData.username);
        }
    }, []);

    const fetchStories = async (username) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/stories?username=${username}`);
            setStories(response.data);
        } catch (error) {
            console.error('Error fetching stories:', error);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                const response = await axios.put(`${API_BASE_URL}/stories/${editingId}`, form);
                if (response.status === 200) setUpdateMessage('Story updated successfully!');
                setEditingId(null);
            } else {
                await axios.post(`${API_BASE_URL}/stories`, form);
                setUpdateMessage('Story added successfully!');
            }
            setForm({
                username: userData.username,
                title: '',
                content: '',
                short_content: '',
                tags: '',
                preview_img: '',
                img_link: '',
                badge: '',
                season: '',
                month: '',
                posted_date: '',
                country: '',
            });
            setShowForm(false);
            fetchStories(userData.username);
        } catch (error) {
            setUpdateMessage('Error saving story: ' + error.message);
            console.error('Error saving story:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/stories/${id}`);
            fetchStories(userData.username);
        } catch (error) {
            console.error('Error deleting story:', error);
        }
    };

    const handleEdit = (story) => {
        setForm({
            ...story,
            username: userData.username,
            tags: story.tags.join(', ')
        });
        setEditingId(story._id);
        setShowForm(true);
    };

    const handleAddStory = () => {
        setShowForm(true);
        setEditingId(null);
        setForm({
            username: userData.username,
            title: '',
            content: '',
            short_content: '',
            tags: '',
            preview_img: '',
            img_link: '',
            badge: '',
            season: '',
            month: '',
            posted_date: '',
            country: '',
        });
    };

    if (!userData) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p>Loading user profile...</p>
            </div>
        );
    }

    return (
        <motion.div
            className="container mx-auto px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
                {/* Profile Header */}
                <div className="bg-gray-100 p-6 flex items-center">
                    {userData.profile_picture ? (
                        <img
                            src={userData.profile_picture}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover mr-6"
                        />
                    ) : (
                        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-white text-4xl mr-6">
                            {userData.name ? userData.name[0].toUpperCase() : 'U'}
                        </div>
                    )}
                    <div>
                        <h1 className="text-2xl font-bold text-black">{userData.name}</h1>
                        <p className="text-gray-600">{userData.email}</p>
                    </div>
                </div>

                {/* Profile Details */}
                <div className="p-6 grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <User className="mr-3 text-gray-600" />
                            <div>
                                <h3 className="font-semibold">Username</h3>
                                <p className="text-gray-600">{userData.username || 'Not provided'}</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Mail className="mr-3 text-gray-600" />
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-gray-600">{userData.email}</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Globe className="mr-3 text-gray-600" />
                            <div>
                                <h3 className="font-semibold">Country</h3>
                                <p className="text-gray-600">{userData.country || 'Not specified'}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Calendar className="mr-3 text-gray-600" />
                            <div>
                                <h3 className="font-semibold">Registration Date</h3>
                                <p className="text-gray-600">
                                    {userData.registration_date
                                        ? new Date(userData.registration_date).toLocaleDateString()
                                        : 'Not available'}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Globe className="mr-3 text-gray-600" />
                            <div>
                                <h3 className="font-semibold">Favorite Culture</h3>
                                <p className="text-gray-600">{userData.fav_Country || 'Not set'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Story Management Section */}
                <div className="p-6 bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">My Stories</h2>
                        <button
                            onClick={handleAddStory}
                            className="text-[#FF6A00] hover:bg-[#FF6A00]/10 p-2 rounded"
                        >
                            <PlusCircle className="w-6 h-6" />
                        </button>
                    </div>

                    {updateMessage && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                            {updateMessage}
                        </div>
                    )}

                    {showForm && (
                        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 grid md:grid-cols-2 gap-6">
                            {Object.keys(form).filter(key => key !== 'username').map((key) => (
                                <div key={key} className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                                        {key.replace('_', ' ')}
                                    </label>
                                    <input
                                        type={key === 'posted_date' ? 'date' : 'text'}
                                        name={key}
                                        value={form[key]}
                                        onChange={handleChange}
                                        required={key !== 'preview_img' && key !== 'img_link' && key !== 'badge'}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                            ))}
                            <div className="md:col-span-2 flex justify-center">
                                <button
                                    type="submit"
                                    className="border border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00]/10 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    {editingId ? 'Update Story' : 'Add Story'}
                                </button>
                            </div>
                        </form>
                    )}

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white shadow-md rounded">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-4 py-2 text-left">Title</th>
                                    <th className="px-4 py-2 text-left">Short Content</th>
                                    <th className="px-4 py-2 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stories.map((story) => (
                                    <tr key={story._id} className="border-b hover:bg-gray-100">
                                        <td className="px-4 py-2">{story.title}</td>
                                        <td className="px-4 py-2">{story.short_content}</td>
                                        <td className="px-4 py-2 space-x-2">
                                            <button
                                                onClick={() => handleEdit(story)}
                                                className="mr-2 text-[#FF6A00]"
                                            >
                                                <Edit className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(story._id)}
                                                className="text-[#FF6A00]"
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
            </div>
        </motion.div>
    );
}

export default UserProfile;