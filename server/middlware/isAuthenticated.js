const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token + " " + "bu is authdan");
    if (!token) {
      return res.status(401).json({ message: "Not Authenticated! 0011" });
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode);
    if (!decode) {
      return res.status(401).json({ message: "xato token 0011" });
    }
    req.user = await User.findById(decode.id);
    req.id = decode.id;

    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = { isAuthenticated };
