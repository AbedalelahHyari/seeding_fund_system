const express = require("express");
const { createNewSector, getAllSectors } = require("../controllers/sector");
const sectorsRouter = express.Router();
/*************************************************************** */

sectorsRouter.post("/", createNewSector);

sectorsRouter.get("/", getAllSectors);

module.exports = sectorsRouter;
