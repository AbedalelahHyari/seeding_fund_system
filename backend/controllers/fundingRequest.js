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
/************************************************* */
module.exports = {
  createNewFundingRequest,
};
