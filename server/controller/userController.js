const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const registerController = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    if (!userName || !email || !password) {
      return res
        .status(401)
        .send({ success: false, message: "maydonni to'liq toldiring" });
    }
    const userexist = await userModel.findOne({ email });
    if (userexist) {
      return res
        .status(400)
        .send({ success: false, message: "bu odam tzimda bor" });
    }
    let salt = bcrypt.genSaltSync(10);

    const hashPassword = await bcrypt.hash(password, salt);

    const user = await userModel.create({
      userName,
      email,
      password: hashPassword,
    });
    // const user = await userModel.create(req.body);
    res
      .status(201)
      .send({ success: true, message: "Ro'yxatdan o'tdi", user: user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "register api dan xatolik" });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) {
      return res.status(401).send({ message: "email nato'gri" });
    }
    if (!password) {
      return res.status(401).send({ message: "paro'l nato'gri" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .send({ success: false, message: "bu odam tzimda yo'q" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "parol xato",
      });
    }
    // sendTokenResponse(user, 200, res);
    const tokenData = {};
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5d",
    });

    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "5d",
      }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.status(200).json({
      success: true,
      message: "logindan otdi",
      token,
      refreshToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "login api dan xatolik" });
  }
};

// const sendTokenResponse = async (user, codeStatus, res) => {
//   const token = await user.getJwtToken();
//   const options = { maxAge: 60 * 60 * 1000, httpOnly: true };
//   if (process.env.NODE_ENV === "production") {
//     options.secure = true;
//   }
//   res.status(codeStatus).cookie("token", token, options).json({
//     success: true,
//     user: user,
//   });
// };
//log out
const logout = (req, res, next) => {
  res.clearCookie("token");
  res.status(200).send({
    success: true,
    message: "logged out",
  });
};
const alluser = async (req, res) => {
  try {
    const users = await userModel.find({});
    if (!users) {
      return res.status(404).send({
        success: false,
        message: "foydalanuvchilar yo'q",
      });
    }
    res.status(200).json({
      success: true,
      message: "success",
      foydalanuvchilar_soni: users.length,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "alluser controller apidan xatolik",
      error,
    });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "bu registratsiyadan otmagan",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5m",
    });
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAILIM,
        pass: process.env.GOOGLE_PASSWORD,
      },
    });
    const encodedToken = encodeURIComponent(token).replace(/\./g, "%2E");
    var mailOptions = {
      from: process.env.EMAILIM,
      to: email,
      subject: "Reset Password",
      text: `http://localhost:3000/resetpassword/${encodedToken}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.send({
          success: false,
          message: "email ga yuborilmadi xatolik",
          error: error,
        });
      } else {
        return res.send({ success: true, message: "emailga yuborildi" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    const id = decoded.id;
    const hashPassword = await bcrypt.hash(password, 10);
    await userModel.findByIdAndUpdate({ _id: id }, { password: hashPassword });
    return res.status(200).send({ success: true, message: "parol yangilandi" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerController,
  loginController,
  alluser,
  logout,
  forgotPassword,
  resetPassword,
};
