import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import BlogsSection from '../../components/blogsSection/BlogsSection';
import AboutBlog from '../../components/aboutBlog/AboutBlog';
import LandingCategory from '../../components/landingCategory/LandingCategory';
import RecentPosts from '../../components/recentPosts/RecentPosts';
import AllBlogs from '../../../adminPanel/components/allBlogs/AllBlogs';

function LandingPage() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [accuracy , setAccuracy] = useState(2);
  useEffect(() => {
    // Define the parallax effect function
    function parallaxHeight() {
      const scrollY = window.scrollY;
      const sampleSection = document.querySelector('.sample-section');
      const headerHeight = document.querySelector('.sample-header-section')
        .offsetHeight;

      // Adjust the margin-top and height based on scroll position
      sampleSection.style.marginTop = `${headerHeight}px`;
      document.querySelector('.sample-header').style.height = `${headerHeight -
        scrollY}px`;
    }

    // Handle scroll events
    function handleScroll() {
      parallaxHeight();
    }

    // Handle resize events
    function handleResize() {
      parallaxHeight();
    }

    // Initial call to set up the parallax effect
    parallaxHeight();

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {

    fetch("/api/ml").then(res => res.json()).then(data => { setAccuracy(data.accuracy) });
    
  }, []);
  return (
    <div className="landingPage">
      <div className="sample-header">
        <div className="sample-header-section">
          <h1>Welcome to My Blog Website</h1>
          <div>
            {accuracy}
          </div>
          <h2>Explore all about different languages and frameworks </h2>
        </div>
        
      </div>
      <div className="sample-section-wrap">
        <div className="sample-section">
          {/* Render your BlogsSection component or content here */}
          <AboutBlog/> 
          <AllBlogs/>      
           {/* <LandingCategory /> */}
               <RecentPosts />

   
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
