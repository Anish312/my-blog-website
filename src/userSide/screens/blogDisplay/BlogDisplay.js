
import "./BlogDisplay.css"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fb } from '../../../firebase';
import RecentPosts from "../../components/recentPosts/RecentPosts";
import line from "../../../common/img/line.png"


const DB = fb.firestore();
const Blogslist = DB.collection('blogs');

function BlogDisplay() {
    const { id } = useParams();
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        Blogslist.doc(id).get().then((snapshot) => {
          const data = snapshot.data();
          setBlogs(data);
        });
      }, [id])

 

      window.dataLayer.push({
        event: 'viewed_blogs',
        eventProps: {
         viewed_blogs: blogs
    
            // blogs: blogslist
        }
      });
  return (
    <>
      <div className="blogDisplay">
        <div className="blogDisplay-container">
            
    
      {blogs ? (
        <>
          <h1  className="blogDisplay-title">{blogs.Title}</h1>
          <img  className="blogDisplay-line" src={line} alt=""/> 

          {/* <p  className="blogDisplay-container">Date: {blogs.published_on.toDate().toLocaleDateString()}</p> */}
          <div  className="blogDisplay-body">{blogs.Body}</div>
        </>
      ) : (
        <p>Loading...</p>
      )}  
        </div>
    </div>      
      <RecentPosts/>

    </>
  
  )
}

export default BlogDisplay