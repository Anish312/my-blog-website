import React, { useState, useRef } from 'react';
import { fb } from '../../../firebase';
import './CreateBlog.css';
import { FcCancel } from 'react-icons/fc';
import JoditEditor from 'jodit-react';

const db = fb.firestore();
const Blogs = db.collection('blogs');

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const editor = useRef(null);

  const sub = (e) => {
    e.preventDefault();

    Blogs.add({
      Title: title,
      Body: editor.current.value, // Use editor's content
      Category: category,
      publish: false,
      published_on: fb.firestore.Timestamp.fromDate(new Date()),
    })
      .then((docRef) => {
        alert('Data Successfully Submitted');
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  return (
    <div className="createBlog">
      <div className="createBlog-form-container">
        <form onSubmit={(event) => sub(event)}>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <JoditEditor
            ref={editor}
            value={body} // Initialize content
            config={{ readonly: false }} // Set config options as needed
          />

          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="ReactJs">ReactJs</option>
            <option value="NextJs">NextJs</option>
            <option value="NodeJs">NodeJs</option>
            <option value="Other">Other</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
