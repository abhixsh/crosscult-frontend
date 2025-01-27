import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Edit, Trash2 } from 'lucide-react';

const StoryAdmin = () => {
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

    const API_BASE_URL = 'http://localhost:3003';

    const fetchStories = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/stories`);
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
            setShowForm(false);
            fetchStories();
        } catch (error) {
            setUpdateMessage('Error saving story: ' + error.message);
            console.error('Error saving story:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/stories/${id}`);
            fetchStories();
        } catch (error) {
            console.error('Error deleting story:', error);
        }
    };

    const handleEdit = (story) => {
        setForm({ ...story, tags: story.tags.join(', ') });
        setEditingId(story._id);
        setShowForm(true);
    };

    const handleAddStory = () => {
        setShowForm(true);
        setEditingId(null);
        setForm({
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
    };

    useEffect(() => {
        fetchStories();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard - Stories</h1>

            {updateMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                    {updateMessage}
                </div>
            )}

            {showForm && (
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 grid md:grid-cols-2 gap-6">
                    {Object.keys(form).map((key) => (
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
                            <th className="px-4 py-2 text-left">Username</th>
                            <th className="px-4 py-2 text-left">Title</th>
                            <th className="px-4 py-2 text-left">Short Content</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stories.map((story) => (
                            <tr key={story._id} className="border-b hover:bg-gray-100">
                                <td className="px-4 py-2">{story.username}</td>
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

            {!showForm && (
                <div className="mt-6 text-center">
                    <button
                        onClick={handleAddStory}
                        className="border border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00]/10 py-2 px-4 rounded"
                    >
                        Add Story
                    </button>
                </div>
            )}
        </div>
    );
};

export default StoryAdmin;
