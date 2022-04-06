const roleModel = require("../database/models/roles");
/******************************************************** */
const createNewRole = (req, res) => {
  const { role, permissions } = req.body;
  const newRole = new roleModel({
    role,
    permissions,
  });
  newRole
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `The role has been created Successfully`,
        role: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    });
};
/********************************************************** */
const getAllRoles = (req, res) => {
  roleModel
    .find({})
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `All The Roles`,
        roles: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: err,
      });
    });
};
/********************************************************** */
module.exports = { createNewRole, getAllRoles };
