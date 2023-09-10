import React from 'react';
import './BlogCard.css';

function BlogCard({ blog }) {
  const trimText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  };

  return (
    <div className="blog-card" style={{ width: blog.width }}>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="card-overlay">
          <h2 className="card-title">{trimText(blog.title, 10)}</h2>
          <p className="card-description">{trimText(blog.description, 10)}</p>
        </div>
      </div>
      <div className="card-details">
        <p>Category: {blog.category}</p>
        <ul>
          {blog.headings.map((heading, index) => (
            <li key={index}>{heading}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogCard;
