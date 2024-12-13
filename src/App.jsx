import {Routes,Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import './index.css';
import Header from './Components/Header';
import Country from './Components/Pages/country/country';
import CountryAdmin from './Components/Pages/admin/country/countryAdmin';
import Footer from './Components/footer';
import CountryAbout from './Components/Pages/country/countryAbout';
import History from './Components/Pages/country/History';
import Food from './Components/Pages/country/Food';
import Traditions from './Components/Pages/country/Traditions';
import MainTranslator from './Components/Pages/Translator/MainTranslator';
import Login from './Components/Pages/Login & SignUp/Login';
import SignUp from './Components/Pages/Login & SignUp/Signup';
import Dashboard from './Components/Pages/admin/Dashboard';
import EventAdmin from './Components/Pages/admin/events/eventAdmin';

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/aiservice' element = {<MainTranslator/>}/> 
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/signup' element = {<SignUp/>}/>
      <Route path = '/country' element = {<Country/>}/>
      <Route path = '/admin' element = {<Dashboard/>}/>
      <Route path = '/country/:id' element = {<CountryAbout/>}/>
      <Route path = '/country/:id/history' element = {<History/>}/>
      <Route path = '/country/:id/food' element = {<Food/>}/>
      <Route path = '/country/:id/traditions' element = {<Traditions/>}/>
      <Route path = '/admin/countryadmin' element = {<CountryAdmin/>}/>
      <Route path = '/admin/eventadmin' element = {<EventAdmin/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App
