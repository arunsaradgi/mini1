const express = require("express");

const app = express();

app.use(express.json());

app.listen(8080, () => {
  console.log("port started on 8080");
});
