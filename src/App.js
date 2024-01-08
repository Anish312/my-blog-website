import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './userSide/components/navbar/Navbar';
import Footer from './userSide/components/footer/Footer';
import LandingPage from './userSide/screens/landingPage/LandingPage';
import CategoryBlogs from './userSide/screens/landingPage/categoryBlogs/CategoryBlogs';
import AdminLogin from './adminPanel/screens/adminLogin/AdminLogin';
import ProtectedRoute from './privateRoute/ProtectedRoute';
import Bloglist from './adminPanel/screens/blogList/BlogList';
import CreateBlog from './adminPanel/screens/createBlog/CreateBlog';
import BlogDisplay from './userSide/screens/blogDisplay/BlogDisplay';
import RecentPosts from './userSide/components/recentPosts/RecentPosts';

function App() {
  return (
    
    
    <Router>
      <div className="app">
      
  <Navbar/> 
         
         
          <Routes>  
           
            <Route path="/" element={<LandingPage />} />
            <Route path="/category/:id" element={<CategoryBlogs />} />
            <Route path="/blog/:id" element={<BlogDisplay />} />
            <Route path="/wpAdmin" element={<AdminLogin />} />

            <Route path="/Bloglist" element={ <ProtectedRoute Cmp={Bloglist} />
   }  />
                     <Route path='/blog/create' element={<ProtectedRoute Cmp={CreateBlog}/>} />

          </Routes>
          <Footer/> 

         
     
      </div>
    </Router>
  );
}

export default App;
