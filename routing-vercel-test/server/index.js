const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", async (req, res) => {
  console.log("Hello from Node");
  res.json("Hello from Node!");
});
app.get("/blog", async (req, res) => {
  console.log("Hello blog");
  res.json("read blog");
});
app.get("/blog/posts", async (req, res) => {
  console.log("Hello posts");
  res.json("see posts");
});
app.get("/users", async (req, res) => {
  console.log("Hello users page");
  res.json("users page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
