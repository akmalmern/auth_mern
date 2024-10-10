const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("userModel", userSchema);
