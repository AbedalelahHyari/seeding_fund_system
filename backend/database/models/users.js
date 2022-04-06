const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  country: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    required: true,
    default: "624caf8419f5050bcb965ad9",
  },
});
/******************************************************************************** */

// This function for hashing the password when the user make a register before saving in the data-base
userSchema.pre("save", async function () {
  this.email = this.email.toLowerCase();
  this.userName = this.userName.trim();
  this.password = await bcrypt.hash(this.password, process.env.SALT);
});
/*************************************************************************** */
module.exports = mongoose.model("User", userSchema);
