const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.post('/save-draft', async (req, res) => {
  try {
    const { id, title, content, tags } = req.body;
    const data = { title, content, tags, status: 'draft' };
    const blog = id
      ? await Blog.findByIdAndUpdate(id, data, { new: true })
      : await Blog.create(data);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/publish', async (req, res) => {
  try {
    const { id, title, content, tags } = req.body;
    const data = { title, content, tags, status: 'published' };
    const blog = id
      ? await Blog.findByIdAndUpdate(id, data, { new: true })
      : await Blog.create(data);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ updatedAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;