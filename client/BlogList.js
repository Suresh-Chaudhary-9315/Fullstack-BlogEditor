import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/api/blogs').then(res => setBlogs(res.data));
  }, []);

  const drafts = blogs.filter(b => b.status === 'draft');
  const published = blogs.filter(b => b.status === 'published');

  return (
    <div>
      <h2>Drafts</h2>
      {drafts.map(b => <div key={b._id}>{b.title}</div>)}
      <h2>Published</h2>
      {published.map(b => <div key={b._id}>{b.title}</div>)}
    </div>
  );
};

export default BlogList;