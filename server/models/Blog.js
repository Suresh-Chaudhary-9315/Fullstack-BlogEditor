const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: [String],
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  }
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);