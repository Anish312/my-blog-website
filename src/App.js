import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './userSide/components/navbar/Navbar';
import Footer from './userSide/components/footer/Footer';
import LandingPage from './userSide/screens/landingPage/LandingPage';

function App() {
  return (
    
    
    <Router>
      <div className="app">
      
  <Navbar/> 
         
         
          <Routes>  
           
            <Route path="/" element={<LandingPage />} />
          
         
          </Routes>
          <Footer/> 

         
     
      </div>
    </Router>
  );
}

export default App;
