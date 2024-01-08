import React, { useState, useEffect }from 'react'
import { Link, useParams } from 'react-router-dom';
import {fb} from '../../../../firebase'
import "./CategoryBlogs.css"
import {             FaArrowRight ,FaArrowLeft } from 'react-icons/fa';

import line from "../../../../common/img/line.png"
const db = fb.firestore()
const Blogs = db.collection('blogs');


function CategoryBlogs() {
    const { id } = useParams(); // Get the category id from the URL
    const [blogslist, setBlogslist] = useState([]);
  
    useEffect(() => {
      // Subscribe to query with onSnapshot
      const unsubscribe = Blogs.where('Category', '==', id) // Filter by category id
        .limit(100)
        .onSnapshot((querySnapshot) => {
          // Get all documents from the collection - with IDs
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          // Update state
          setBlogslist(data);
        });
  
      // Detach listener
      return unsubscribe;
    }, [id]); // Add id to the dependency array
    function truncateDescription(description) {
        const words = description.split(' ');
        if (words.length > 10) {
          return words.slice(0, 30).join(' ') + '...'; // Display the first 10 words and add ellipsis
        } else {
          return description; // If there are fewer than 10 words, display the full description
        }
      }

      const [currentPage, setCurrentPage] = useState(1);
      const blogsPerPage = 8;
    
// Calculate the index of the last blog to display on the current page
const indexOfLastBlog = currentPage * blogsPerPage;
// Calculate the index of the first blog to display on the current page
const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
// Get the current page of blogs
const currentBlogs = blogslist.slice(indexOfFirstBlog, indexOfLastBlog);

// Function to handle page change
const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
};

// Function to handle next and previous buttons
const handleNextPage = () => {
  if (currentPage < Math.ceil(blogslist.length / blogsPerPage)) {
    setCurrentPage(currentPage + 1);
  }
};

const handlePrevPage = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};
  return (
    <div className='categoryBlogs'>
       <div className='categoryBlogs-head'>
             <h1>React js</h1>
             <img  className="categoryBlogs-line" src={line} alt=""/> 

        </div>
         <div className='categoryBlogs-container'> 
         
         <div className='categoryBlogs-boxes' >

         {currentBlogs.map((post, index) => (
           <Link to={"/blog/"+post.id} style={{textDecoration:"none"}}>
            <div className="categoryBlogs-box" key={index}>
              <span>{post.Category}</span>
              <h4 className="categoryBlogs-post-title">{post.Title}</h4>
              <p className="categoryBlogs-post-date">Date: {post.published_on.toDate().toLocaleDateString()}</p>
              <p className="categoryBlogs-post-description">{truncateDescription(post.Body)}</p>
            </div>
                </Link>
          ))}
          </div>
          <div className="pagination">
        <div className='pagination-button-left'  onClick={handlePrevPage}>    <FaArrowLeft/></div>

   
          {Array.from({ length: Math.ceil(blogslist.length / blogsPerPage) }).map((_, index) => (
            <p
            style={{marginLeft: "10px" , fontWeight: 600, fontSize: "22px"} }
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </p>
          ))}
        <div className='pagination-button-right' onClick={handleNextPage}>         <FaArrowRight/></div>

        </div>
        </div>
    </div>
  )
}

export default CategoryBlogs