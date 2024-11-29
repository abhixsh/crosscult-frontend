import {Routes,Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import './index.css'; // Adjust based on your file structure
import Header from './Components/Header'
// import AIService from './Components/Pages/AIService';
import MainTranslator from './Components/Pages/Translator/MainTranslator';


function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/aiservice' element = {<MainTranslator/>}/>
    </Routes>
    </>
  );
}

export default App
