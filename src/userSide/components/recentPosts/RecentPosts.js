import React, { useState, useEffect }from 'react'
import "./RecentPosts.css"
import "./RecentPosts.scss"

import { Link } from "react-router-dom";
import {fb} from '../../../firebase'
import {             FaArrowRight ,FaArrowLeft } from 'react-icons/fa';

const db = fb.firestore()
const Blogs = db.collection('blogs');


  function RecentPosts() {
    const [scrollPosition, setScrollPosition] = useState(10);
  
    const [blogslist, setblogs] = useState([]);
 
    const [rightButtonCount, setRightButtonCount] = useState(0);
    const [leftButtonCount, setLeftButtonCount] = useState(10);

    useEffect(() => {
        // Subscribe to query with onSnapshot
        const unsubscribe = Blogs.limit(10).onSnapshot(querySnapshot => {
          // Get all documents from collection - with IDs
          const data = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
          }));
          // Update state
          setblogs(data);
        });

        // Detach listener
        return unsubscribe;
      }, []);


      const handleScroll = (direction) => {
        const scrollAmount = 300; // Adjust this value as needed
    
        if (direction === 'forward' && rightButtonCount < 10 && leftButtonCount <11 ) {
          setRightButtonCount(rightButtonCount + 1);
          setLeftButtonCount(leftButtonCount -1)

          setScrollPosition(scrollPosition + scrollAmount);
        } else if (direction === 'backward' && leftButtonCount !== 10) {
          setScrollPosition(scrollPosition - scrollAmount);
          setRightButtonCount(rightButtonCount - 1 );
          setLeftButtonCount(leftButtonCount +1)
        }
      };
    function truncateDescription(description) {
        const words = description.split(' ');
        if (words.length > 10) {
          return words.slice(0, 30).join(' ') + '...'; // Display the first 10 words and add ellipsis
        } else {
          return description; // If there are fewer than 10 words, display the full description
        }
      }

      const handleClick = () => {
        const email = 'anishgehlot25@gmail.com';
        window.location.href = `mailto:${email}`;
      };
    return (
        <div className='recentPosts'>
        <div className='recentPosts-head'>
          <h3 className='recentPosts-head-left'>Recent Posts</h3>
          <div className='recentPosts-head-right'>
            <div className='recentPosts-head-right-top'>
              Explore the Recently crated blogs also so share with your friends
            </div>
            <div className='recentPosts-head-right-bottom'>
            <div class="flex justify-center items-center vh-100">
   <a onClick={handleClick} target="_blank">
      <div class="button relative">
         <div class="element">
            <p>Contact Us &nbsp; <FaArrowRight/></p>
         </div>
      </div>
   </a>
</div>

            </div>
          </div>
        </div>
        <div className='recentPosts-main-container'>
             <div className='recentPosts-main'>
     
          <div className='recentPosts-main-boxes' style={{ transform: `translateX(-${scrollPosition}px)` }}>
            {blogslist.map((post, index) => (
             <Link to={"/blog/"+post.id} style={{textDecoration:"none"}}>
              <div className='recentPost-box' key={index}>
                <span>React js</span>
                <h4 className='recentPosts-post-title'>{post.Title}</h4>         
                       <p className='recentPosts-post-date'>Date: {post.published_on.toDate().toLocaleDateString()}</p>

                <p className='recentPosts-post-description'>{truncateDescription(post.Body)}</p>

            
              </div>
              </Link>
            ))}
          </div>     
          <div className='scroll-buttons'>
        

            <div className='scroll-button'  onClick={() => handleScroll('backward')}>    <FaArrowLeft/></div>
            <div className='scroll-button' onClick={() => handleScroll('forward')}>         <FaArrowRight/></div>
          </div>
        </div>
        </div>
       
      </div>
    );
  }
  
  export default RecentPosts;