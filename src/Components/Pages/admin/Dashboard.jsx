import { Link } from "react-router-dom";
import React from 'react';
import {
    Users,
    CalendarDays,
    BookOpen,
    MapPin,
    UserCheck
} from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Custom Components
const Card = ({ children, className }) => (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
        {children}
    </div>
);

const Button = ({
    children,
    className,
    variant = 'default',
    ...props
}) => {
    const variantStyles = {
        default: 'bg-[#FF6A00] text-white hover:bg-[#FF6A00]/90',
        outline: 'border border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00]/10'
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

// Simple Line Chart Component
const SimpleLineChart = ({ data, title = "User Registration Trends" }) => {
    // Prepare data for the line chart
    const chartData = {
        labels: data.map(item => item.month), // X-axis labels (Months)
        datasets: [
            {
                label: 'Male Users',
                data: data.map(item => item.male), // Y-axis data for Male
                borderColor: '#FF6A00',
                backgroundColor: '#FF6A00',
                fill: false,
                tension: 0.1,
            },
            {
                label: 'Female Users',
                data: data.map(item => item.female), // Y-axis data for Female
                borderColor: '#1D4ED8', // Blue color
                backgroundColor: '#1D4ED8',
                fill: false,
                tension: 0.1,
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false, // Allow chart to be responsive without fixed aspect ratio
        plugins: {
            title: {
                display: true,
                text: title,
                font: {
                    size: 16, // Reduced for better mobile fit
                }
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months',
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Number of Users',
                },
                beginAtZero: true,
            }
        }
    };

    return (
        <div className="w-full h-[300px] sm:h-[400px] bg-gray-50 flex flex-col justify-center items-center">
            {/* <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-[#FF6A00]">{title}</h3> */}
            <div className="w-full h-full">
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

const AdminDashboard = () => {
    // Sample data for registration charts
    const registrationData = [
        { month: 'Jan', male: 40, female: 24 },
        { month: 'Feb', male: 30, female: 13 },
        { month: 'Mar', male: 20, female: 98 },
        { month: 'Apr', male: 27, female: 39 },
        { month: 'May', male: 18, female: 48 },
        { month: 'Jun', male: 23, female: 38 }
    ];

    // Dashboard statistics
    const stats = {
        totalUsers: 2854,
        totalStories: 156,
        maleUsers: 1542,
        femaleUsers: 1312
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
            {/* Header */}
            <header className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white shadow-md p-4 rounded-lg">
                <div className="flex items-center mb-4 sm:mb-0">
                    <h1 className="text-xl sm:text-2xl font-bold text-[#0f0f0f]">CrossCult Admin Dashboard</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="text-center sm:text-left">
                        <p className="font-semibold text-sm sm:text-base">John Doe</p>
                        <p className="text-xs sm:text-sm text-gray-500">Super Admin</p>
                    </div>
                </div>
            </header>

            {/* Main Dashboard Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Users Card */}
                <Card>
                    <div className="flex items-center mb-4">
                        <Users className="mr-2 text-[#FF6A00] w-5 h-5 sm:w-6 sm:h-6" />
                        <h2 className="text-base sm:text-lg font-semibold">Total Registered Users</h2>
                    </div>
                    <div>
                        <p className="text-2xl sm:text-3xl font-bold text-[#FF6A00]">{stats.totalUsers}</p>
                        <div className="flex justify-between mt-2 text-xs sm:text-sm">
                            <span>Male: {stats.maleUsers}</span>
                            <span>Female: {stats.femaleUsers}</span>
                        </div>
                    </div>
                </Card>

                {/* Stories Card */}
                <Card>
                    <div className="flex items-center mb-4">
                        <BookOpen className="mr-2 text-[#FF6A00] w-5 h-5 sm:w-6 sm:h-6" />
                        <h2 className="text-base sm:text-lg font-semibold">Total Stories</h2>
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-[#FF6A00]">{stats.totalStories}</p>
                </Card>

                {/* Navigation Card */}
                <Card className="sm:col-span-2 lg:col-span-1">
                    <h2 className="text-base sm:text-lg font-semibold mb-4">Quick Navigation</h2>
                    <div className="grid grid-cols-2 gap-2 sm:gap-4">
                        <Link to="/admin/countryadmin">
                            <Button variant="outline" className="text-xs sm:text-sm">
                                <MapPin className="mr-1 sm:mr-2 w-4 h-4" /> Counties
                            </Button>
                        </Link>
                        <Link to="/events">
                            <Button variant="outline" className="text-xs sm:text-sm">
                                <CalendarDays className="mr-1 sm:mr-2 w-4 h-4" /> Events
                            </Button>
                        </Link>
                        <Link to="/stories">
                            <Button variant="outline" className="text-xs sm:text-sm">
                                <BookOpen className="mr-1 sm:mr-2 w-4 h-4" /> Stories
                            </Button>
                        </Link>
                        <Link to="/users">
                            <Button variant="outline" className="text-xs sm:text-sm">
                                <UserCheck className="mr-1 sm:mr-2 w-4 h-4" /> Users
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>

            {/* Registration Trends Line Chart */}
            <div className="w-full bg-white border rounded-lg p-4 mt-4 sm:mt-6">
                <SimpleLineChart data={registrationData} />
            </div>
        </div>
    );
};

export default AdminDashboard;
