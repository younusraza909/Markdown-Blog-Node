const mongoose = require("mongoose");
const marked = require("marked");
const slugify = require("slugify");

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
    default: new Date(),
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
});

articleSchmea.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model("Article", articleSchmea);
