const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");
app.use(cors());
app.use(express.json());
/******************************************************** */
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);
/******************************************************** */
const rolesRouter = require("./routes/roles");
app.use("/roles", rolesRouter);
/********************************************** */
const loginRouter = require("./routes/login");
app.use("/login", loginRouter);
/********************************************** */
const fundingRequestRouter = require("./routes/fundingRequest");
app.use("/funding", fundingRequestRouter);

app.listen(process.env.PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${process.env.PORT}`);
});
