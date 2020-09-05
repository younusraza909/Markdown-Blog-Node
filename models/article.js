const mongoose = require("mongoose");
const marked = require("marked");
const slugify = require("slugify");
//it will return fucntion
const createDomPurify = require("dompurify");
//we only want jsdom portion thats why use curly braces
const { JSDOM } = require("jsdom");

//i will sanitize out html
const dompurify = createDomPurify(new JSDOM().window);

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
  sanitizedHtml: {
    type: String,
    required: true,
  },
});

articleSchmea.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  if (this.markdown) {
    this.sanitizedHtml = dompurify.sanitize(marked(this.markdown));
  }
  next();
});

module.exports = mongoose.model("Article", articleSchmea);
