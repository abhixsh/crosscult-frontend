import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Users,
    CalendarDays,
    BookOpen,
    MapPin,
    UserCheck,
    Mail,
    Trash,
    Edit2,
} from "lucide-react";

// Custom Components
const Card = ({ children, className }) => (
    <div className={`bg-white rounded-lg shadow-sm p-3 ${className}`}>
        {children}
    </div>
);

const Button = ({ children, className, variant = "default", ...props }) => {
    const variantStyles = {
        default: "bg-[#FF6A00] text-white hover:bg-[#FF6A00]/90",
        outline: "border border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00]/10",
    };

    return (
        <button
            className={`
                px-4 py-2 rounded-md transition-colors 
                flex items-center justify-center
                w-full
                ${variantStyles[variant]} 
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
};

// Function to decode JWT with more robust error handling
const decodeJWT = (token) => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(
            decodeURIComponent(
                atob(base64)
                    .split('')
                    .map((c) => `%${c.charCodeAt(0).toString(16).padStart(2, '0')}`)
                    .join('')
            )
        );
    } catch (error) {
        console.error('JWT Decoding Error:', error);
        return { name: null, email: null };
    }
};

const AdminDashboard = () => {
    const [adminInfo, setAdminInfo] = useState({
        name: "",
        email: "",
        isValidToken: false
    });
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalStories: 0,
    });
    const [adminList, setAdminList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [editingAdmin, setEditingAdmin] = useState(null);

    // Update admin details
    const handleUpdateAdmin = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("adminToken");
            const response = await fetch(`http://localhost:3001/admins/${editingAdmin._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: editingAdmin.name,
                    email: editingAdmin.email
                }),
            });

            if (!response.ok) throw new Error("Failed to update admin");

            const updatedAdmin = await response.json();
            
            // Update admin list with new details
            setAdminList(prevList => 
                prevList.map(admin => 
                    admin._id === updatedAdmin._id ? updatedAdmin : admin
                )
            );

            // Reset editing state
            setEditingAdmin(null);
            alert("Admin updated successfully!");
        } catch (error) {
            setError(error.message);
        }
    };

    // Delete admin
    const handleDeleteAdmin = async (adminId) => {
        try {
            const token = localStorage.getItem("adminToken");
            const response = await fetch(`http://localhost:3001/admins/${adminId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) throw new Error("Failed to delete admin");

            const remainingAdmins = adminList.filter((admin) => admin._id !== adminId);
            setAdminList(remainingAdmins);
            alert("Admin deleted successfully!");
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("adminToken");
        if (token) {
            try {
                const decodedToken = decodeJWT(token);
                const storedAdminDetails = JSON.parse(localStorage.getItem("adminDetails") || "{}");

                setAdminInfo({
                    name: storedAdminDetails.name || decodedToken.name,
                    email: storedAdminDetails.email || decodedToken.email,
                    isValidToken: true
                });
            } catch (error) {
                console.error("Error setting admin info:", error);
                setAdminInfo({ name: "", email: "", isValidToken: false });
            }
        }

        const fetchDashboardData = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem("adminToken");

                if (!token) {
                    throw new Error("No authentication token found");
                }

                // Fetch users count
                const statsResponse = await fetch(
                    "http://localhost:3001/users/count",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const statsData = await statsResponse.json();
                setStats({
                    totalUsers: statsData.totalUsers || 0,
                    totalStories: statsData.totalStories || 0,
                });

                // Fetch admin list
                const adminResponse = await fetch(
                    "http://localhost:3001/admins",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const adminData = await adminResponse.json();
                setAdminList(adminData || []);

            } catch (error) {
                console.error("Dashboard Fetch Error:", error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <div className="min-h-screen p-3">
            <header className="flex flex-col sm:flex-row justify-between items-center mb-4 bg-white shadow-sm p-3 rounded-lg">
                <div className="flex items-center mb-4 sm:mb-0">
                    <h1 className="text-xl sm:text-2xl font-bold text-[#0f0f0f]">
                        CrossCult Admin Dashboard
                    </h1>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="text-center sm:text-left">
                        <p className="font-semibold text-sm sm:text-base">
                            {adminInfo.name}
                            {!adminInfo.isValidToken && (
                                <span className="text-red-500 ml-2 text-xs">(Token Invalid)</span>
                            )}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">{adminInfo.email}</p>
                    </div>
                </div>
            </header>

            {/* Main Dashboard Content */}
            {loading ? <p>Loading...</p> : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                        {/* Users Card */}
                        <Card>
                            <div className="flex items-center mb-3">
                                <Users className="mr-2 text-[#FF6A00] w-5 h-5 sm:w-6 sm:h-6" />
                                <h2 className="text-base sm:text-lg font-semibold">
                                    Total Registered Users
                                </h2>
                            </div>
                            <p className="text-2xl sm:text-3xl font-bold text-[#FF6A00]">
                                {stats.totalUsers}
                            </p>
                        </Card>

                        {/* Stories Card */}
                        <Card>
                            <div className="flex items-center mb-3">
                                <BookOpen className="mr-2 text-[#FF6A00] w-5 h-5 sm:w-6 sm:h-6" />
                                <h2 className="text-base sm:text-lg font-semibold">
                                    Total Stories
                                </h2>
                            </div>
                            <p className="text-2xl sm:text-3xl font-bold text-[#FF6A00]">
                                {stats.totalStories}
                            </p>
                        </Card>

                        {/* Navigation Card */}
                        <Card className="sm:col-span-2 lg:col-span-1">
                            <h2 className="text-base sm:text-lg font-semibold mb-3">
                                Quick Navigation
                            </h2>
                            <div className="grid grid-cols-2 gap-2">
                                <Link to="/admin/countryadmin">
                                    <Button variant="outline" className="text-xs sm:text-sm">
                                        <MapPin className="mr-1 sm:mr-2 w-4 h-4" /> Counties
                                    </Button>
                                </Link>
                                <Link to="/admin/eventAdmin">
                                    <Button variant="outline" className="text-xs sm:text-sm">
                                        <CalendarDays className="mr-1 sm:mr-2 w-4 h-4" /> Events
                                    </Button>
                                </Link>
                                <Link to="/admin/storyAdmin">
                                    <Button variant="outline" className="text-xs sm:text-sm">
                                        <BookOpen className="mr-1 sm:mr-2 w-4 h-4" /> Stories
                                    </Button>
                                </Link>
                                <Link to="/admin/useradmin">
                                    <Button variant="outline" className="text-xs sm:text-sm">
                                        <UserCheck className="mr-1 sm:mr-2 w-4 h-4" /> Users
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </div>

                    {/* Admin List Section */}
                    <Card>
                        <h2 className="text-lg font-semibold mb-3">System Administrators</h2>
                        <div className="divide-y divide-gray-100">
                            {adminList.map((admin) => (
                                <div key={admin._id} className="py-3 flex items-center justify-between">
                                    {editingAdmin && editingAdmin._id === admin._id ? (
                                        <form 
                                            onSubmit={handleUpdateAdmin} 
                                            className="w-full flex items-center space-x-2"
                                        >
                                            <input
                                                type="text"
                                                value={editingAdmin.name}
                                                onChange={(e) => setEditingAdmin({
                                                    ...editingAdmin, 
                                                    name: e.target.value
                                                })}
                                                className="flex-grow p-2 border rounded"
                                                placeholder="Name"
                                                required
                                            />
                                            <input
                                                type="email"
                                                value={editingAdmin.email}
                                                onChange={(e) => setEditingAdmin({
                                                    ...editingAdmin, 
                                                    email: e.target.value
                                                })}
                                                className="flex-grow p-2 border rounded"
                                                placeholder="Email"
                                                required
                                            />
                                            <div className="flex space-x-2">
                                                <button 
                                                    type="submit" 
                                                    className="text-green-600 hover:text-green-800"
                                                >
                                                    Save
                                                </button>
                                                <button 
                                                    type="button"
                                                    onClick={() => setEditingAdmin(null)}
                                                    className="text-red-600 hover:text-red-800"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    ) : (
                                        <>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <p className="font-medium">{admin.name}</p>
                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <Mail className="w-4 h-4 mr-1" />
                                                        {admin.email}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex space-x-3 items-center">
                                                {/* Edit admin */}
                                                <button
                                                    className="text-blue-600 hover:text-blue-800"
                                                    onClick={() => setEditingAdmin({
                                                        _id: admin._id,
                                                        name: admin.name,
                                                        email: admin.email
                                                    })}
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>

                                                {/* Delete admin */}
                                                <button
                                                    className="text-red-600 hover:text-red-800"
                                                    onClick={() => handleDeleteAdmin(admin._id)}
                                                >
                                                    <Trash className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Card>
                </>
            )}

            {/* Error Display */}
            {error && <div className="error text-red-500">{error}</div>}
        </div>
    );
};

export default AdminDashboard;