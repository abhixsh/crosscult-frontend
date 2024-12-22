import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Users,
    CalendarDays,
    BookOpen,
    MapPin,
    UserCheck,
    Mail,
    Edit2,
    Trash,
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

// Function to decode JWT
const decodeJWT = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const decodedData = JSON.parse(
        decodeURIComponent(
            atob(base64)
                .split("")
                .map((c) => `%${c.charCodeAt(0).toString(16).padStart(2, "0")}`)
                .join("")
        )
    );
    return decodedData;
};

const AdminDashboard = () => {
    const [adminName, setAdminName] = useState("");
    const [adminEmail, setAdminEmail] = useState("");
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalStories: 0,
    });
    const [adminList, setAdminList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [editData, setEditData] = useState({ adminId: "", name: "", email: "", role: "" });

    // Fetch data from backend
    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setLoading(true);
                const token = localStorage.getItem("adminToken");

                console.log("Retrieved Token:", token);

                if (!token) {
                    throw new Error("JWT token not found");
                }

                const decoded = decodeJWT(token);
                setAdminName(decoded.name || "Unknown Admin");
                setAdminEmail(decoded.email || "Unknown Email");

                const statsResponse = await fetch(
                    "http://localhost:5000/users/count",
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

                const adminResponse = await fetch(
                    "http://localhost:5000/admins",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const adminData = await adminResponse.json();
                setAdminList(adminData || []); 

            } catch (error) {
                console.error("Error fetching dashboard data:", error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    // Update all admin details
    const handleUpdateAdmin = async (adminId) => {
        try {
            const token = localStorage.getItem("adminToken");
            const response = await fetch(`http://localhost:5000/admins/${adminId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: editData.name,
                    email: editData.email,
                    role: editData.role,
                }),
            });

            if (!response.ok) throw new Error("Failed to update admin");

            const updatedAdmin = await response.json();
            const updatedAdminsList = adminList.map((admin) =>
                admin._id === adminId ? updatedAdmin : admin
            );
            setAdminList(updatedAdminsList);
            setEditData({ adminId: "", name: "", email: "", role: "" }); 
            alert("Admin updated successfully!");
        } catch (error) {
            setError(error.message);
        }
    };

    // Delete admin
    const handleDeleteAdmin = async (adminId) => {
        try {
            const token = localStorage.getItem("adminToken");
            const response = await fetch(`http://localhost:5000/admins/${adminId}`, {
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

    return (
        <div className="min-h-screen p-3">
            {/* Header */}
            <header className="flex flex-col sm:flex-row justify-between items-center mb-4 bg-white shadow-sm p-3 rounded-lg">
                <div className="flex items-center mb-4 sm:mb-0">
                    <h1 className="text-xl sm:text-2xl font-bold text-[#0f0f0f]">
                        CrossCult Admin Dashboard
                    </h1>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                        <img
                            src="/api/placeholder/40/40"
                            alt="Admin profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-center sm:text-left">
                        <p className="font-semibold text-sm sm:text-base">{adminName}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{adminEmail}</p>
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
                            {adminList.map((admin, index) => (
                                <div key={index} className="py-3 flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden">
                                            <img
                                                src={admin.photo || "/api/placeholder/32/32"}
                                                alt={`${admin.name}'s profile`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-medium">{admin.name}</p>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <Mail className="w-4 h-4 mr-1" />
                                                {admin.email}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex space-x-3 items-center">
                                        {/* Edit admin details */}
                                        <button
                                            className="text-blue-600 hover:text-blue-800"
                                            onClick={() => setEditData({ adminId: admin._id, name: admin.name, email: admin.email, role: admin.role })}
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
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Update Admin Details Form */}
                    {editData.adminId && (
                        <Card className="mt-5">
                            <h2 className="font-semibold text-lg">Update Admin Details</h2>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleUpdateAdmin(editData.adminId);
                                }}
                                className="mt-3 space-y-3"
                            >
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    value={editData.name}
                                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                    placeholder="Enter new name"
                                />
                                <input
                                    type="email"
                                    className="w-full p-2 border rounded"
                                    value={editData.email}
                                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                                    placeholder="Enter new email"
                                />
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    value={editData.role}
                                    onChange={(e) => setEditData({ ...editData, role: e.target.value })}
                                    placeholder="Enter new role"
                                />
                                <button type="submit" className="bg-[#FF6A00] text-white py-2 px-4 rounded">
                                    Update Admin
                                </button>
                            </form>
                        </Card>
                    )}
                </>
            )}

            {/* Error Display */}
            {error && <div className="error text-red-500">{error}</div>}
        </div>
    );
};

export default AdminDashboard;
