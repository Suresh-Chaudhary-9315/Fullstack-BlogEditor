import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css';

toast.configure();

const Editor = ({ blogId }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const saveDraft = async () => {
    try {
      await axios.post('/api/blogs/save-draft', {
        id: blogId,
        title,
        content,
        tags: tags.split(',').map(tag => tag.trim()),
      });
      toast.success('Draft Saved!');
    } catch (err) {
      toast.error('Save failed!');
    }
  };

  const publish = async () => {
    try {
      await axios.post('/api/blogs/publish', {
        id: blogId,
        title,
        content,
        tags: tags.split(',').map(tag => tag.trim()),
      });
      toast.success('Published!');
    } catch (err) {
      toast.error('Publish failed!');
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (title || content || tags) saveDraft();
    }, 5000);
    return () => clearTimeout(timeout);
  }, [title, content, tags]);

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <ReactQuill value={content} onChange={setContent} />
      <input value={tags} onChange={e => setTags(e.target.value)} placeholder="Tags (comma-separated)" />
      <button onClick={saveDraft}>Save as Draft</button>
      <button onClick={publish}>Publish</button>
    </div>
  );
};

export default Editor;
