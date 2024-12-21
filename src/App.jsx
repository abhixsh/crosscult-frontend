import { Routes, Route } from 'react-router-dom';
import './index.css';

// Common Components
import Header from './Components/Header';
import Footer from './Components/Footer';

// Pages
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/About';
import Login from './Components/Pages/Login & SignUp/Login';
import SignUp from './Components/Pages/Login & SignUp/Signup';
import MainTranslator from './Components/Pages/Translator/MainTranslator';
import InputLanguage from './Components/Pages/Translator/InputLanguage';
import FileUpload from './Components/Pages/Translator/FileUpload';
import MainStory from './Components/Pages/storyTelling/mainStory';
import Stories from './Components/Pages/storyTelling/Stories';
import Event from './Components/Pages/events/event';

// Country Pages
import Country from './Components/Pages/country/country';
import CountryAbout from './Components/Pages/country/countryAbout';
import History from './Components/Pages/country/History';
import Food from './Components/Pages/country/Food';
import Traditions from './Components/Pages/country/Traditions';

// Admin Pages
import Dashboard from './Components/Pages/admin/Dashboard';
import CountryAdmin from './Components/Pages/admin/country/countryAdmin';
import EventAdmin from './Components/Pages/admin/events/eventAdmin';
import UserAdmin from './Components/Pages/admin/user/userAdmin';

// Authentication
import AdminLogin from './Components/Pages/auth/admin/adminLogin';
import AdminSignup from './Components/Pages/auth/admin/adminSignup';
import UserLogin from './Components/Pages/auth/user/userLogin';
import UserSignup from './Components/Pages/auth/user/userSignup';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/mainTranslator" element={<MainTranslator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/country" element={<Country />} />
        <Route path="/country/:id" element={<CountryAbout />} />
        <Route path="/country/:id/history" element={<History />} />
        <Route path="/country/:id/food" element={<Food />} />
        <Route path="/country/:id/traditions" element={<Traditions />} />
        <Route path="/inputLanguage" element={<InputLanguage />} />
        <Route path="/fileUpload" element={<FileUpload />} />
        <Route path="/mainStory" element={<MainStory />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/event" element={<Event />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/countryadmin" element={<CountryAdmin />} />
        <Route path="/admin/eventadmin" element={<EventAdmin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/useradmin" element={<UserAdmin />} />

        {/* User Authentication */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSignup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
