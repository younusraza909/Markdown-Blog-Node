const express = require("express");

const app = express();

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
