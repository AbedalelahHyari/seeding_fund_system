const usersModel = require("../database/models/users");
/******************************************************* */

// In this function will create new resource to the database based on the userSchema
const createNewUser = (req, res) => {
  const { userName, country, email, password, role } = req.body;
  const newUser = new usersModel({
    userName,
    country,
    email,
    password,
    role,
  });
  newUser
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `The User has been created Successfully`,
        user: result,
      });
    })
    .catch((err) => {
      console.log(err);
      if (err.keyPattern) {
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};
/******************************* */
const getAllUsers = (req, res) => {
  usersModel
    .find({})
    .populate("role", "-__v -_id")
    .then((result) => {
      if (result.length) {
        res.status(200).json({
          success: true,
          message: `All The Users`,
          users: result,
        });
      } else {
        res.status(404).json({
          success: false,
          message: `No Users Yet`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `No users Yet`,
        error: err,
      });
    });
};
/********************************* */
module.exports = {
  createNewUser,
  getAllUsers,
};
