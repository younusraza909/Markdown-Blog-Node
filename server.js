const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost/blog", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use("/articles", require("./routes/articles"));

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test Description",
    },
  ];
  res.render("articles/index", { articles: articles });
});

app.listen(5000);
