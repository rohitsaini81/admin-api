const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  decription: { type: String},
  link: { type: String },
  prolink: { type: String },
  text1: { type: String },
  text2: { type: String },
  text3: { type: String },
  text4: { type: String },

});

module.exports = mongoose.model('projects', moviesSchema);
