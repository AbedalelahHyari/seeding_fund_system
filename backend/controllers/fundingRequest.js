const fundingRequestModel = require("../database/models/fundingRequest");

const createNewFundingRequest = (req, res) => {
  const { projectName, projectDescription, projectSector } = req.body;
  const newFundingRequest = new fundingRequestModel({
    projectOwner: req.token.userId,
    projectName,
    projectDescription,
    projectSector,
  });
  newFundingRequest
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `your funding request has been submitted Successfully`,
        fundingRequest: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};
/**************************************************************************************** */
const getAllRequests = (req, res) => {
  fundingRequestModel
    .find({})
    .populate("projectOwner", "userName country email -_id")
    .then((result) => {
      if (result.length) {
        res.status(200).json({
          success: true,
          message: `All The requests`,
          requests: result,
        });
      } else {
        res.status(404).json({
          success: false,
          message: `No requests Yet`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: err,
      });
    });
};

module.exports = {
  createNewFundingRequest,
  getAllRequests,
};
