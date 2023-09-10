import React from 'react'
import "./BlogsSection.css"
import BlogCard from '../blogCard/BlogCard';
const blogsData = [
  {
    id: 1,
    title: 'Blog Post 1',
    description: 'This is the first blog post.',
    image: 'https://wallpapercave.com/wp/wp3988340.jpg', // You can store the image file name or URL
    category: 'Technology',
    headings: ['Introduction', 'Main Content', 'Conclusion'],
  },
  {
    id: 2,
    title: 'Blog Post 2',
    description: 'This is the second blog post.',
    image: 'https://wallpapercave.com/wp/wp3988340.jpg',
    category: 'Travel',
    headings: ['Destination', 'Travel Tips', 'Experience'],
  },
  {
    id: 3,
    title: 'Blog Post 3',
    description: 'This is the third blog post.',
    image: 'https://wallpapercave.com/wp/wp3988340.jpg',
    category: 'Food',
    headings: ['Recipe', 'Ingredients', 'Cooking Instructions'],
  },
  {
    id: 4,
    title: 'Blog Post 4',
    description: 'This is the third blog post.',
    image: 'https://wallpapercave.com/wp/wp3988340.jpg',
    category: 'Food',
    headings: ['Recipe', 'Ingredients', 'Cooking Instructions'],
  },];
function BlogsSection() {
  const blogLayout = [
    { width: '70%' }, // Single card
    { width: '50%' },
    { width: '50%' },
    { width: '70%' }, // Single card
    { width: '50%' },
    { width: '50%' },
  ];

  return (
    <div className="blogs-display">
    {blogsData.slice(0, blogLayout.length).map((blog, index) => (
      <BlogCard key={blog.id} blog={{ ...blog, width: blogLayout[index].width }} />
    ))}
  </div>
  )
}

export default BlogsSection