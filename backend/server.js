// server.cjs
const fs = require('node:fs')
const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./frontend/index.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.end(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*
res.writeHead(200, { "Content-Type": "text/html" });
fs.readFile("./frontend/index.html", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  res.end(data);
});
*/