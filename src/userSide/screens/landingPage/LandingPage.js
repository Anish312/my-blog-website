import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import BlogsSection from '../../components/blogsSection/BlogsSection';

function LandingPage() {
  const [headerHeight, setHeaderHeight] = useState(0);

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

  return (
    <div className="landingPage">
      <div className="sample-header">
        <div className="sample-header-section">
          <h1>Scroll down to see the parallax effect</h1>
          <h2>Background landscape scrolls with its own depth</h2>
        </div>
      </div>
      <div className="sample-section-wrap">
        <div className="sample-section">
          {/* Render your BlogsSection component or content here */}
       <BlogsSection />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
