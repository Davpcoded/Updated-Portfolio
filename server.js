var PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.listen(3000);
