import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './Components/General/Layout';
import Navbar from './Components/General/Navbar';
import HeroSection from './Components/Landing/HeroSection';
import Landing from './Pages/Landing';

function App() {

  return (
    <div className="App">
       <BrowserRouter>
        <Navbar/>
                <Routes>
                <Route path='/' element={<Landing/>} ></Route>
                
                </Routes>
                
        </BrowserRouter>

    </div>
  )
}

export default App
