import React from 'react';

const CountryList = ({ countries, onEdit }) => {
    return (
        <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Country List</h2>
            <table className="min-w-full table-auto">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Country</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((country) => (
                        <tr key={country._id}>
                            <td className="border px-4 py-2">{country.country_name}</td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => onEdit(country)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                                >
                                    Edit
                                </button>
                                {/* Add delete button logic here */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CountryList;
