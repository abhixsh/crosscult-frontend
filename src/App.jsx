import {Routes,Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import './index.css'; // Adjust based on your file structure
import Header from './Components/Header';
import Country from './Components/Pages/country/country';
import Dashboard from './Components/Pages/admin/Dashboard';
import Sidebar from './Components/Pages/admin/Sidebar';
import Footer from './Components/footer';
import CountryAbout from './Components/Pages/country/countryAbout';
// import AIService from './Components/Pages/AIService';
// import MainTranslator from './Components/Pages/Translator/MainTranslator';
// import Login from './Components/Pages/Login & SignUp/Login'
// import SignUp from './Components/Pages/Login & SignUp/Signup'


function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      {/* <Route path = '/aiservice' element = {<MainTranslator/>}/> */}
      {/* <Route path = '/login' element = {<Login/>}/>
      <Route path = '/signup' element = {<SignUp/>}/> */}
      <Route path = '/country' element = {<Country/>}/>
      <Route path = '/admin' element = {<Dashboard/>}/>
      <Route path = '/admin' element = {<Sidebar/>}/>
      <Route path = '/admin' element = {<Footer/>}/>
      <Route path = '/countryabout' element = {<CountryAbout/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App
