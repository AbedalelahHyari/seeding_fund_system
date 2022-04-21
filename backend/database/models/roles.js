const mongoose = require("mongoose");

// in this role schema it will define the user type whether be an admin or project owner
const rolesSchema = new mongoose.Schema({
  role: { type: String, required: true },
  permissions: [{ type: String, required: true }],
});

module.exports = mongoose.model("Role", rolesSchema);