const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");

app.use(cors());

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${process.env.PORT}`);
});
