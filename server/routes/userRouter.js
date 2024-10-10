const express = require("express");
const {
  registerController,
  loginController,
  alluser,
  logout,
  forgotPassword,
  resetPassword,
} = require("../controller/userController");
const { isAuthenticated } = require("../middlware/isAuthenticated");
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/all", isAuthenticated, alluser);
router.get("/logout", logout);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword/:token", resetPassword);
module.exports = router;
