const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const authentication = require("./BasicAuth.js");

app.use(authentication);
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
