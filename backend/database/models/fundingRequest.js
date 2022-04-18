const mongoose = require("mongoose");

const fundingRequestSchema = new mongoose.Schema({
  projectOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  projectName: { type: String, required: true },
  projectDescription: { type: String, required: true },
  status: { type: String, required: true, default: "Pending" },
  projectSector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sector",
    required: true,
  },
});
/******************************************************************************** */

module.exports = mongoose.model("FundingRequest", fundingRequestSchema);
