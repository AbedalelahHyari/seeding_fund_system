const sectorModel = require("../database/models/sectors");

const createNewSector = (req, res) => {
  const { sector } = req.body;
  const newSector = new sectorModel({
    sector,
  });

  newSector
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "The sector has been created successfully",
        sector: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        error: err,
      });
    });
};
//===============================================================
const getAllSectors = (req, res) => {
  sectorModel
    .find({})
    .then((result) => {
      if (result.length) {
        res.status(200).json({
          success: true,
          message: "All the Sectors",
          sectors: result,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No Data yet",
          sectors: result,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        error: err,
      });
    });
};
module.exports = {
  createNewSector,
  getAllSectors,
};
