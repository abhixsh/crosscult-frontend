import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import CountryList from './CountryList';
import CountryForm from './CountryForm';
import { getCountries } from './countryService';

const Dashboard = () => {
    const [countries, setCountries] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentCountry, setCurrentCountry] = useState(null);

    useEffect(() => {
        fetchCountries();
    }, []);

    const fetchCountries = async () => {
        const data = await getCountries();
        setCountries(data);
    };

    const handleEdit = (country) => {
        setCurrentCountry(country);
        setIsEditing(true);
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full p-5">
                <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
                <CountryForm
                    isEditing={isEditing}
                    currentCountry={currentCountry}
                    fetchCountries={fetchCountries}
                />
                <CountryList countries={countries} onEdit={handleEdit} />
            </div>
        </div>
    );
};

export default Dashboard;
