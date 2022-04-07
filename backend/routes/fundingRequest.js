const express = require("express");
const {
  createNewFundingRequest,
  getAllRequests,
  getFundingRequestByUserId,
  updateFundingRequestById,
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
fundingRequestRouter.put(
  "/request/:id",
  authentication,
  authorization("manage_Funding_Requests"),
  updateFundingRequestById
);
fundingRequestRouter.get("/user", authentication, getFundingRequestByUserId);

module.exports = fundingRequestRouter;
