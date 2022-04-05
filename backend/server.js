const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");
app.use(cors());
app.use(express.json());
/******************************************************** */
// Import the usersRouter
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);
// import the rolesRouter
/******************************************************** */
const rolesRouter = require("./routes/roles");
app.use("/roles", rolesRouter);
/********************************************** */
const loginRouter = require("./routes/login");
app.use("/login", loginRouter);
/********************************************** */

app.listen(process.env.PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${process.env.PORT}`);
});
