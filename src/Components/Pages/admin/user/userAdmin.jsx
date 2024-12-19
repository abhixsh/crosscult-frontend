import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Edit, Trash2 } from 'lucide-react'; // Import icons for Edit and Delete

const UserAdmin = () => {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        profile_img: '',
    });
    const [editingId, setEditingId] = useState(null);
    const [updateMessage, setUpdateMessage] = useState('');
    const [showForm, setShowForm] = useState(false); // To toggle the form visibility

    const API_BASE_URL = 'http://localhost:5000';

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/users`);
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                const response = await axios.put(`${API_BASE_URL}/user/${editingId}`, form);
                if (response.status === 200) {
                    setUpdateMessage('User updated successfully!');
                }
                setEditingId(null);
            } else {
                await axios.post(`${API_BASE_URL}/users`, form);
                setUpdateMessage('User added successfully!');
            }
            setForm({
                username: '',
                email: '',
                password: '',
                profile_img: '',
            });
            setShowForm(false); // Hide the form after submission
            fetchUsers();
        } catch (error) {
            setUpdateMessage('Error saving user: ' + error.message);
            console.error('Error saving user:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/user/${id}`);
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleEdit = (user) => {
        setForm(user);
        setEditingId(user._id);
        setShowForm(true); // Show the form for editing
    };

    const handleAddUser = () => {
        setShowForm(true); // Show the form for adding a new user
        setEditingId(null); // Clear editing ID
        setForm({
            username: '',
            email: '',
            password: '',
            profile_img: '',
        });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard - Users</h1>

            {updateMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    {updateMessage}
                </div>
            )}

            {/* Add/Edit User Form */}
            {showForm && (
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 grid md:grid-cols-2 gap-6">
                    {/* User Info */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile_img">
                            Profile Image URL
                        </label>
                        <input
                            type="text"
                            name="profile_img"
                            value={form.profile_img}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="border border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00]/10 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            {editingId ? 'Update User' : 'Add User'}
                        </button>
                    </div>
                </form>
            )}

            {/* User List Table */}
            <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-md rounded">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left">Username</th>
                            <th className="px-4 py-2 text-left">Email</th>
                            <th className="px-4 py-2 text-left">Profile Image</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className="border-b hover:bg-gray-100">
                                <td className="px-4 py-2">{user.username}</td>
                                <td className="px-4 py-2">{user.email}</td>
                                <td className="px-4 py-2">
                                    <img
                                        src={user.profile_img}
                                        alt={user.username}
                                        className="w-12 h-12 object-cover rounded"
                                    />
                                </td>
                                <td className="px-4 py-2 space-x-2">
                                    <button
                                        onClick={() => handleEdit(user)}
                                        className="mr-2 text-[#FF6A00] w-5 h-5 sm:w-6 sm:h-6 text-2xl sm:text-3xl font-bold"
                                    >
                                        <Edit className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user._id)}
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
                        onClick={handleAddUser}
                        className="border border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00]/10 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add User
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserAdmin;
