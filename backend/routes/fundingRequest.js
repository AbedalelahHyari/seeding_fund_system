const express = require("express");
const {
  createNewFundingRequest,
  getAllRequests,
  getFundingRequestByUserId,
} = require("../controllers/fundingRequest");
const fundingRequestRouter = express.Router();
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
/******************************************************************************** */
fundingRequestRouter.post("/", authentication, createNewFundingRequest);
fundingRequestRouter.get(
  "/",
  authentication,
  authorization("manage_Funding_Requests"),
  getAllRequests
);

fundingRequestRouter.get("/user", authentication, getFundingRequestByUserId);

module.exports = fundingRequestRouter;
