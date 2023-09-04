const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  decription: { type: String},
  link: { type: String },
  prolink: { type: String },


});

module.exports = mongoose.model('projects', moviesSchema);
