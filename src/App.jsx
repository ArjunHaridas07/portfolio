import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (

    
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/about' element={     <About/>
}/>
     </Routes>
     <Footer/>

    </div>

    
  );
}

export default App;
