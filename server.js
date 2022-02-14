const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const router = require('./router/router.js');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(router);


app.listen(port, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.error(`http://localhost:${port}`);
  }
});
