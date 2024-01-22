
import "./BlogDisplay.css"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fb } from '../../../firebase';
import RecentPosts from "../../components/recentPosts/RecentPosts";
import line from "../../../common/img/line.png"
const db = fb.firestore();

const DB = fb.firestore();
const Blogslist = DB.collection('blogs');
const trackedDataCollection = db.collection('tracked_data');

function BlogDisplay() {
    const { id } = useParams();
    const [blogs, setBlogs] = useState(null);


    useEffect(() => {
      Blogslist.doc(id).get().then((snapshot) => {
        const data = snapshot.data();
        setBlogs(data);
        trackFunctions(data)
    });
    }, [id]);



const trackFunctions = (data) => {

  const sessionId = "123"; // You need to implement this function
  trackedDataCollection.doc(sessionId).get().then((doc) => {
    if (doc.exists) {
      const existingData = doc.data();
      const viewedBlogs = existingData.viewed_blogs || [];
      const updatedViewedBlogs = [...viewedBlogs, { blogName: data?.Title, category: data?.Category, event: "viewed_blog" }];

      trackedDataCollection.doc(sessionId).update({ 
        viewed_blogs: updatedViewedBlogs
      });
    } else {
      trackedDataCollection.doc(sessionId).set({
        viewed_blogs: [{
          blogName: data?.Title,
          category: data?.Category,
          event: "viewed_blog"
        }]
      });
    }
  });

}
      
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