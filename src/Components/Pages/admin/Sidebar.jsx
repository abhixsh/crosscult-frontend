import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-800 text-white min-h-screen">
            <div className="p-5">
                <h2 className="text-2xl font-bold">Admin Panel</h2>
            </div>
            <ul>
                <li className="px-5 py-3 hover:bg-gray-700">
                    <a href="#">Dashboard</a>
                </li>
                <li className="px-5 py-3 hover:bg-gray-700">
                    <a href="#">Manage Countries</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
