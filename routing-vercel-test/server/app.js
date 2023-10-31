const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node!");
});
app.get("/blog", (req, res) => {
  res.send("read blog");
});
app.get("/blog/posts", (req, res) => {
  res.send("see posts");
});
app.get("/user", (req, res) => {
  res.send("users page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
