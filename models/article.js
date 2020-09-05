const mongoose = require("mongoose");

const articleSchmea = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    type: String,
  },
  markdown: {
    required: true,
    type: String,
  },
  createdAt: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("Article", articleSchmea);
