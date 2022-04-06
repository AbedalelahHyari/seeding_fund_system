const mongoose = require("mongoose");

const fundingRequestSchema = new mongoose.Schema({
  ProjectOwner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  projectName: { type: String, required: true },
  projectDescription: { type: String },
  projectSector: { type: String, required: true },
  status: { type: String, required: true, default: "Pending" },
});
/******************************************************************************** */

module.exports = mongoose.model("FundingRequest", fundingRequestSchema);
