const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },  // Optional: URL of an image for the About page
});

module.exports = mongoose.model('About', aboutSchema);
