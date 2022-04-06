const express = require("express");
const { createNewFundingRequest } = require("../controllers/fundingRequest");
const fundingRequestRouter = express.Router();
const authentication = require("../middleware/authentication");
/******************************************************************************** */
fundingRequestRouter.post("/", authentication, createNewFundingRequest);

module.exports = fundingRequestRouter;
