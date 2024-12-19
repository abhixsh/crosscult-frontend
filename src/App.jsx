import {Routes,Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import './index.css';
import Header from './Components/Header';
import Country from './Components/Pages/country/country';
import CountryAdmin from './Components/Pages/admin/country/countryAdmin';
import Footer from './Components/Footer';
import CountryAbout from './Components/Pages/country/countryAbout';
import History from './Components/Pages/country/History';
import Food from './Components/Pages/country/Food';
import Traditions from './Components/Pages/country/Traditions';
import MainTranslator from './Components/Pages/Translator/MainTranslator';
import Login from './Components/Pages/Login & SignUp/Login';
import SignUp from './Components/Pages/Login & SignUp/Signup';
import Dashboard from './Components/Pages/admin/Dashboard';
import EventAdmin from './Components/Pages/admin/events/eventAdmin';
import AdminLogin from './Components/Pages/auth/admin/adminLogin';
import AdminSignup from './Components/Pages/auth/admin/adminSignup';
import UserLogin from './Components/Pages/auth/user/userLogin';
import UserSignup from './Components/Pages/auth/user/userSignup';
import UserAdmin from './Components/Pages/admin/user/userAdmin';
import AboutUs from './Components/Pages/About';
import InputLanguage from './Components/Pages/Translator/InputLanguage';
import FileUpload from './Components/Pages/Translator/FileUpload';
import AboutUs from './Components/Pages/About';
import MainStory from './Components/Pages/storyTelling/mainStory';
import Stories from './Components/Pages/storyTelling/Stories'
import Event from './Components/Pages/event'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/MainTranslator' element = {<MainTranslator/>}/> 
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/signup' element = {<SignUp/>}/>
      <Route path = '/country' element = {<Country/>}/>
      <Route path = '/InputLanguage' element = {<InputLanguage/>}/>
      <Route path = '/FileUpload' element = {<FileUpload/>}/>
      <Route path = '/admin' element = {<Dashboard/>}/>
      <Route path = '/country/:id' element = {<CountryAbout/>}/>
      <Route path = '/country/:id/history' element = {<History/>}/>
      <Route path = '/country/:id/food' element = {<Food/>}/>
      <Route path = '/country/:id/traditions' element = {<Traditions/>}/>
      <Route path = '/about' element = {<AboutUs/>}/>
      <Route path = '/mainStory' element = {<MainStory/>}/>
      <Route path = 'stories' element={<Stories/>}/>
      <Route path = '/event' element={<Event/>}/>
      <Route path = '/admin/countryadmin' element = {<CountryAdmin/>}/>
      <Route path = '/admin/eventadmin' element = {<EventAdmin/>}/>
      <Route path = '/admin/login' element = {<AdminLogin/>}/>
      <Route path = '/admin/signup' element = {<AdminSignup/>}/>
      <Route path = '/user/login' element = {<UserLogin/>}/>
      <Route path = '/user/signup' element = {<UserSignup/>}/>
      <Route path = '/admin/useradmin' element = {<UserAdmin/>}/>
      <Route path = '/about' element = {<AboutUs/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App
